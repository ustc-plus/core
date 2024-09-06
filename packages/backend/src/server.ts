/**
 * Setup express server.
 */

import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import path from 'path'
import helmet from 'helmet'
import express, { Request, Response, NextFunction, response } from 'express'
import logger from 'jet-logger'
import cors from 'cors'
import { addMinting, getMinting, getMintingByNftId, updateMinting } from './services/MintingTracker'

import 'express-async-errors'

import BaseRouter from '@src/routes'

import Paths from '@src/common/Paths'
import EnvVars from '@src/common/EnvVars'
import HttpStatusCodes from '@src/common/HttpStatusCodes'
import { RouteError } from '@src/common/classes'
import { NodeEnvs } from '@src/common/misc'

import { Cron } from 'croner'
import {
  Signature,
  StartMintingEvent,
  endMintingSignature,
  stableCoinDecimals,
  txToStartMinting,
} from '@src/services/Blockchain'
import { Info, getInfo, trade, getOrderInfo, getDepositStatus } from '@src/services/Binance'
import { formatUnits, parseEther } from 'ethers'
import { MintingType } from './models/DbModels'
import {
  EndMintingPayload,
  NftTransferPayload,
  StartMintingPayload,
  isNftBurn,
  networkIdFromId,
  nftModelFromTransfer,
} from './services/Indexer'
import { addNft, deleteNft, getByOwner, getNft, updateNft } from './services/NftTracker'

// **** Variables **** //

const app = express()
let info: Info

// **** Setup **** //

// Basic middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser(EnvVars.CookieProps.Secret))
app.use(cors())

const job = Cron(
  /* The pattern */
  '*/10 * * * * *',
  /* Function (optional) */
  async () => {
    let newInfo = await getInfo()
    if (newInfo !== undefined) {
      info = newInfo
    }
  }
)

// Show routes called in console during development
if (EnvVars.NodeEnv === NodeEnvs.Dev.valueOf()) {
  app.use(morgan('dev'))
}

// Security
if (EnvVars.NodeEnv === NodeEnvs.Production.valueOf()) {
  app.use(helmet())
}

// Add APIs, must be after middleware
app.use(Paths.Base, BaseRouter)

// Add error handler
app.use(
  (
    err: Error,
    _: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    next: NextFunction
  ) => {
    if (EnvVars.NodeEnv !== NodeEnvs.Test.valueOf()) {
      logger.err(err, true)
    }
    let status = HttpStatusCodes.BAD_REQUEST
    if (err instanceof RouteError) {
      status = err.status
    }
    return res.status(status).json({ error: err.message })
  }
)

// **** Front-End Content **** //

// Nav to users pg by default
app.get('/', (_: Request, res: Response) => {
  return res.redirect('/hello')
})

app.get('/hello', async (_: Request, res: Response) => {
  if (info === undefined) {
    return res.json({ message: 'not set yet' })
  }
  return res.json(info)
})

/////////////////////////////////////////////////////////////////
//
// Liquidity Tab
//
/////////////////////////////////////////////////////////////////
app.get('/start-minting/:chainId/:txid', async (req: Request, res: Response) => {
  let chainId = parseInt(req.params.chainId)
  if (isNaN(chainId) || chainId == 0) {
    return res.json({ message: `invalid chain id` })
  }
  let txid = req.params.txid

  let cachedMinting = await getMinting(txid, chainId)
  if (cachedMinting === undefined) {
    return res.json({ message: 'Please try again later, its not indexed yet' })
  }
  console.log(`Cached Minting: ${cachedMinting._id}`)

  const responseData = {
    status: cachedMinting.depositStatus,
    timestamp: cachedMinting.timestamp,
    nftId: cachedMinting.nftId,
    orderCompleted: cachedMinting.orderCompleted,
    orderCompletion: '',
    orderId: cachedMinting.orderId,
    ustcPlusAmount: cachedMinting.ustcAmount,
    mintCompleted: cachedMinting.mintCompleted,
    message: '',
    signature: {
      v: '',
      r: '',
      s: '',
    },
  }
  if (cachedMinting.mintCompleted) {
    return res.json(responseData)
  }

  if (cachedMinting.depositStatus !== 1) {
    const depositStatus = await getDepositStatus(txid)
    if (depositStatus === undefined) {
      return res.json({ message: `failed to get deposit status for ${txid} on Binance` })
    }
    if (depositStatus.status !== 1) {
      responseData.orderCompletion = depositStatus.confirmTimes

      if (depositStatus.status === cachedMinting.depositStatus) {
        return res.json(responseData)
      }

      cachedMinting.depositStatus = depositStatus.status
      const updated = await updateMinting(cachedMinting)
      if (!updated) {
        return res.json({ message: 'Failed to update deposit status, please try again later!' })
      }
      responseData.status = depositStatus.status

      return res.json(responseData)
    }

    cachedMinting.depositStatus = depositStatus.status
    const updated = await updateMinting(cachedMinting)
    if (!updated) {
      return res.json({ message: 'Failed to update deposit status as succeed, please try again later!' })
    }
  }

  if (!cachedMinting.orderCompleted) {
    // Order started its trading, but not completed
    if (cachedMinting.orderId > 0) {
      const orderInfo = await getOrderInfo(cachedMinting.orderId)

      if (typeof orderInfo === 'string') {
        responseData.message = `Failed to get order status: ${orderInfo}`
        return res.json(responseData)
      }

      responseData.orderCompleted = orderInfo.completed
      responseData.ustcPlusAmount = parseFloat(orderInfo.qty!)

      // Still not loaded, so update.
      // Client will see: deposit = 1, orderCompleted = false, orderId = !null
      if (!orderInfo.completed) {
        return res.json(responseData)
      }

      cachedMinting.orderCompleted = orderInfo.completed
      cachedMinting.ustcAmount = parseFloat(orderInfo.qty!)
      const updated = await updateMinting(cachedMinting)
      if (!updated) {
        responseData.message = `Failed to update the order as completed: ${orderInfo}`
      }

      if (!cachedMinting.orderCompleted) {
        return res.json(responseData)
      } else {
        const ustcPlusAmount = parseEther(cachedMinting.ustcAmount.toString())
        const signature = await endMintingSignature(
          cachedMinting.walletAddress,
          chainId,
          cachedMinting.nftId,
          ustcPlusAmount
        )
        if (typeof signature === 'string') {
          responseData.message = `Signature error: ${signature}`
        } else {
          responseData.signature = signature
        }
        return res.json(responseData)
      }
    }

    ////////////////////////////////////////////////////////////////
    // No Order ID means let's trade it.
    ////////////////////////////////////////////////////////////////

    // Order not completed and order id not set, so let's trade
    console.log(`Data was deposited, therefore we will trade it by buying ${cachedMinting.depositAmount}...`)

    const order = await trade(cachedMinting.depositAmount)
    // Shall we update here cachedMinting.manual?
    if (typeof order === 'string') {
      responseData.message = order
      return res.json(responseData)
    }

    responseData.orderId = order.orderId
    cachedMinting.orderId = order.orderId

    responseData.orderCompleted = order.completed
    cachedMinting.orderCompleted = order.completed
    if (order.qty) {
      responseData.ustcPlusAmount = parseFloat(order.qty!)
      cachedMinting.ustcAmount = parseFloat(order.qty!)
    } else {
      responseData.ustcPlusAmount = 0.0
      cachedMinting.ustcAmount = 0.0
    }

    const updated = await updateMinting(cachedMinting)
    if (!updated) {
      // DANGER, TODO, make sure that manual is updated
      console.error(`Todo, update manually. Calling this function will trade again`)
      console.log(order)
      console.log(cachedMinting)
      // responseData.message = `Failed to set order id in the cache. Please try again later`
    }

    // Order opened but not completed
    if (!order.completed) {
      return res.json(responseData)
    }
  }

  const ustcPlusAmount = parseEther(cachedMinting.ustcAmount.toString())
  const signature = await endMintingSignature(cachedMinting.walletAddress, chainId, cachedMinting.nftId, ustcPlusAmount)
  if (typeof signature === 'string') {
    responseData.message = `Signature error: ${signature}`
  } else {
    responseData.signature = signature
  }

  return res.json(responseData)
})

/////////////////////////////////////////////////////////////////
//
// Redeem Tab
//
/////////////////////////////////////////////////////////////////
app.get('/nfts/:chainId/:walletAddress', async (req: Request, res: Response) => {
  const chainIdRaw = req.params.chainId
  const walletAddressRaw = req.params.walletAddress
  if (
    chainIdRaw === undefined ||
    chainIdRaw.length === 0 ||
    walletAddressRaw === undefined ||
    walletAddressRaw.length === 0
  ) {
    return res.status(400).json({ message: 'invalid parameters' })
  }

  const chainId = parseInt(chainIdRaw)
  if (isNaN(chainId) || chainId <= 0) {
    return res.status(400).json({ message: 'invalid chainId GET parameter' })
  }

  const nfts = await getByOwner(chainId, walletAddressRaw)
  return res.json(nfts)
})

app.post('/sync/start-minting', async (req: Request, res: Response) => {
  const secretKey = req.header('SECRET_KEY')
  if (secretKey === undefined || secretKey !== process.env.INDEXER_SECRET_KEY) {
    return res.status(500).json({ message: 'not authorized' })
  }
  const payload = req.body as StartMintingPayload
  if (payload.event.data.new === null) {
    return res.status(400).json({ message: 'no event.data.new' })
  } else if (payload.event.op !== 'INSERT') {
    console.error(`Received not INSERT operation for nft-transfer`)
    return res.status(400).json({ message: 'only INSERT operation supported' })
  }

  const startMinting = payload.event.data.new
  const chainId = networkIdFromId(startMinting.id)
  const txid = startMinting.txid

  let cachedMinting = await getMinting(txid, chainId)
  if (cachedMinting !== undefined) {
    return res.status(400).json({ message: 'already added, no duplicates' })
  }

  let mintingToAdd: MintingType = {
    walletAddress: startMinting.creator, // a user
    networkId: chainId,
    txid: txid,
    timestamp: Math.floor(new Date(startMinting.db_write_timestamp).getTime() / 1000),
    depositAmount: parseFloat(formatUnits(startMinting.usdcAmount, stableCoinDecimals(chainId))), // 0 or 1
    ustcAmount: 0,
    orderCompleted: false,
    orderId: 0,
    nftId: parseInt(startMinting.depositId),
    manual: false,
    depositStatus: -1,
  }
  let minting = await addMinting(mintingToAdd)
  if (minting !== undefined) {
    return res.status(500).json({ message: `Caching transaction state failed: ${minting}` })
  }

  return res.status(200).json({ status: 'ok' })
})

app.post('/sync/end-minting', async (req: Request, res: Response) => {
  const secretKey = req.header('SECRET_KEY')
  if (secretKey === undefined || secretKey !== process.env.INDEXER_SECRET_KEY) {
    return res.status(500).json({ message: 'not authorized' })
  }
  const payload = req.body as EndMintingPayload
  if (payload.event.data.new === null) {
    return res.status(400).json({ message: 'no event.data.new' })
  } else if (payload.event.op !== 'INSERT') {
    console.error(`Received not INSERT operation for nft-transfer`)
    return res.status(400).json({ message: 'only INSERT operation supported' })
  }

  const endMinting = payload.event.data.new
  const chainId = networkIdFromId(endMinting.id)
  const nftId = endMinting.depositIdIsTokenId

  let cachedMinting = await getMintingByNftId(nftId, chainId)
  if (cachedMinting === undefined) {
    return res.status(400).json({ message: 'not added, no duplicates' })
  } else if (cachedMinting.mintCompleted) {
    return res.status(400).json({ message: 'already marked as complete' })
  }

  cachedMinting.mintCompleted = true
  let updated = await updateMinting(cachedMinting)
  if (!updated) {
    return res.status(500).json({ message: `marking as completed failed` })
  }

  return res.status(200).json({ status: 'ok' })
})

app.post('/sync/nft-transfer', async (req: Request, res: Response) => {
  const secretKey = req.header('SECRET_KEY')
  if (secretKey === undefined || secretKey !== process.env.INDEXER_SECRET_KEY) {
    return res.status(500).json({ message: 'not authorized' })
  }
  console.log(`Received nft transfer in POST`)
  const payload = req.body as NftTransferPayload
  if (payload.event.data.new === null) {
    return res.status(400).json({ message: 'no event.data.new' })
  } else if (payload.event.op !== 'INSERT') {
    console.error(`Received not INSERT operation for nft-transfer`)
    return res.status(400).json({ message: 'only INSERT operation supported' })
  }

  const transferEvent = payload.event.data.new
  const nft = nftModelFromTransfer(transferEvent)
  const foundNft = await getNft(nft.tokenId, nft.networkId)
  if (foundNft === undefined) {
    if (isNftBurn(transferEvent)) {
      return res.status(200).json({ message: 'Not exist to delete' })
    }
    // get the nft parameters such as params on blockchain
    const added = await addNft(nft)
    if (added !== undefined) {
      return res.status(500).json({ message: 'Internal database error: ' + added })
    }
    return res.status(200).json({ status: 'ok' })
  } else {
    if (isNftBurn(transferEvent)) {
      await deleteNft(foundNft.tokenId, foundNft.networkId)
    } else {
      // we update the parameters of found nft
      foundNft.owner = nft.owner
      const updated = await updateNft(foundNft)
      if (!updated) {
        return res.status(500).json({ message: 'Internal database error to update nft parameter' })
      }
    }
  }

  return res.status(200).json({ status: 'ok' })
})

app.post('/sync/nft-redeem', async (req: Request, res: Response) => {
  const secretKey = req.header('SECRET_KEY')
  if (secretKey === undefined || secretKey !== process.env.INDEXER_SECRET_KEY) {
    return res.status(500).json({ message: 'not authorized' })
  }
  console.log(`Received nft redeem in POST`)
  console.log(req.body)

  return res.status(500).json({ message: 'Not implemented yet' })
})

// **** Export default **** //

export default app

///////////////////////////////////
