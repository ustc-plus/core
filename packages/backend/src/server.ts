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

import 'express-async-errors'

import BaseRouter from '@src/routes'

import Paths from '@src/common/Paths'
import EnvVars from '@src/common/EnvVars'
import HttpStatusCodes from '@src/common/HttpStatusCodes'
import { RouteError } from '@src/common/classes'
import { NodeEnvs } from '@src/common/misc'

import { Cron } from 'croner'
import { txToStartMinting } from '@src/services/Blockchain'
import { Info, getInfo, trade, getOrderInfo, getDepositStatus } from '@src/services/Binance'

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
}

app.get('/start-minting/:chainId/:txid', async (req: Request, res: Response) => {
  let chainId = parseInt(req.params.chainId)
  if (isNaN(chainId) || chainId == 0) {
    return res.json({ message: `invalid chain id` })
  }

  let txid = req.params.txid

  const startMinting = await txToStartMinting(chainId, txid)
  if (typeof startMinting === 'string') {
    return res.json({ message: startMinting })
  }

  if (info === undefined) {
    return res.json({ message: `Binance information was reset` })
  }

  txid = '0x22521ce04050d09c7de21f52895e4d65d1a8fe1fc36a69b4360346f07fc07cd3'
  console.log(`Initially was given ${req.params.txid} but we will use ${txid} instead`)

  const depositStatus = await getDepositStatus(txid)

  const responseData = {
    status: depositStatus?.status,
    timestamp: startMinting.timestamp,
    nftId: parseInt(startMinting.depositId),
    orderCompleted: false,
    orderCompletion: depositStatus?.confirmTimes,
    orderId: 0,
    ustcPlusAmount: '0',
    message: '',
  }

  if (depositStatus?.status == 1) {
    console.log(`Data was deposited, therefore we will trade it by buying ${startMinting.usdcAmount}...`)

    console.log(`Instead trading ${startMinting.usdcAmount} we will trade ${info.minUsdt}`)
    const order = await trade(info.minUsdt)
    if (typeof order === 'string') {
      responseData.message = order
    } else {
      responseData.orderId = order.orderId
      responseData.orderCompleted = order.completed
      responseData.ustcPlusAmount = order.qty!
    }
  } else if (depositStatus == undefined) {
    console.log(`No deposit`)
  } else {
    console.log(`Waiting for confirmation`)
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
