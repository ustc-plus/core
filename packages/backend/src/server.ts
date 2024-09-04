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
import { addMinting, getMinting, updateMinting } from './services/MintingTracker'

import 'express-async-errors'

import BaseRouter from '@src/routes'

import Paths from '@src/common/Paths'
import EnvVars from '@src/common/EnvVars'
import HttpStatusCodes from '@src/common/HttpStatusCodes'
import { RouteError } from '@src/common/classes'
import { NodeEnvs } from '@src/common/misc'

import { Cron } from 'croner'
import { Signature, endMintingSignature, txToStartMinting } from '@src/services/Blockchain'
import { Info, getInfo, trade, getOrderInfo, getDepositStatus } from '@src/services/Binance'
import { formatEther, parseEther } from 'ethers'
import { WithId } from 'mongodb'
import { Minting, MintingType } from './models/DbModels'

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

// Set views directory (html)
const viewsDir = path.join(__dirname, 'views')
app.set('views', viewsDir)

// Set static directory (js and css).
const staticDir = path.join(__dirname, 'public')
app.use(express.static(staticDir))

// Nav to users pg by default
app.get('/', (_: Request, res: Response) => {
  return res.redirect('/users')
})

// Redirect to login if not logged in.
app.get('/users', (_: Request, res: Response) => {
  return res.sendFile('users.html', { root: viewsDir })
})

app.get('/hello', async (_: Request, res: Response) => {
  if (info === undefined) {
    return res.json({ message: 'not set yet' })
  }
  return res.json(info)
})

if (process.env.NODE_ENV! === 'development') {
  app.get('/trade/:usdt', async (req: Request, res: Response) => {
    let usdt = parseFloat(req.params.usdt)

    let tradeRes = await trade(usdt)

    if (typeof tradeRes === 'string') {
      return res.json({ message: tradeRes })
    }

    return res.json(tradeRes)
  })

  app.get('/signature/', async (req: Request, res: Response) => {
    const owner = '0x80Cbc1f7fd60B7026C0088e5eD58Fc6Ce1180141'
    const nftId = 1
    const ustcAmount = parseEther('317')
    const chainId = 137
    const signature = await endMintingSignature(owner, chainId, nftId, ustcAmount)

    return res.json({
      owner,
      nftId,
      ustcAmount: ustcAmount.toString(),
      chainId,
      signature,
    })
  })
}

app.get('/start-minting/:chainId/:txid', async (req: Request, res: Response) => {
  let chainId = parseInt(req.params.chainId)
  if (isNaN(chainId) || chainId == 0) {
    return res.json({ message: `invalid chain id` })
  }

  let txid = req.params.txid

  let cachedMinting = await getMinting(txid, chainId)
  console.log(`Fetched result of minting on db: `)
  console.log(cachedMinting)
  if (cachedMinting === undefined) {
    const startMinting = await txToStartMinting(chainId, txid)
    if (typeof startMinting === 'string') {
      return res.json({ message: startMinting })
    }

    let mintingToAdd = {
      walletAddress: startMinting.creator, // a user
      networkId: chainId,
      txid: txid,
      timestamp: startMinting.timestamp,
      depositAmount: startMinting.usdcAmount, // 0 or 1
      ustcAmount: 0,
      orderCompleted: false,
      orderId: 0,
      nftId: parseInt(startMinting.depositId),
      manual: false,
      depositStatus: -1,
    } as MintingType
    let minting = await addMinting(mintingToAdd)
    if (minting !== undefined) {
      return res.json({ message: `Caching transaction state failed: ${minting}` })
    }
    cachedMinting = await getMinting(txid, chainId)
    if (cachedMinting === undefined) {
      return res.json({ message: 'Database error, its shut down' })
    }
  } else if (cachedMinting.manual) {
    return res.json({ message: `Error, admins will do it manually, please visit later` })
  }
  console.log(`Cached Minting: ${cachedMinting._id}`)

  if (info === undefined) {
    return res.json({ message: `Binance information was reset. Try again later` })
  }

  let emptySignature: Signature = {
    v: '',
    r: '',
    s: '',
  }

  const responseData = {
    status: cachedMinting.depositStatus,
    timestamp: cachedMinting.timestamp,
    nftId: cachedMinting.nftId,
    orderCompleted: cachedMinting.orderCompleted,
    orderCompletion: '',
    orderId: cachedMinting.orderId,
    ustcPlusAmount: cachedMinting.ustcAmount,
    message: '',
    signature: emptySignature,
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

      return res.json(responseData)
    }

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

app.get('/status/:id', async (req: Request, res: Response) => {
  let id = parseInt(req.params.id)

  const orderInfo = await getOrderInfo(id)

  if (typeof orderInfo === 'string') {
    return res.json({ message: orderInfo })
  }

  return res.json(orderInfo)
})

// **** Export default **** //

export default app

///////////////////////////////////
