/**
 * Setup express server.
 */

import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import path from 'path'
import helmet from 'helmet'
import express, { Request, Response, NextFunction, response } from 'express'
import logger from 'jet-logger'

import 'express-async-errors'

import BaseRouter from '@src/routes'

import Paths from '@src/common/Paths'
import EnvVars from '@src/common/EnvVars'
import HttpStatusCodes from '@src/common/HttpStatusCodes'
import { RouteError } from '@src/common/classes'
import { NodeEnvs } from '@src/common/misc'

import { Spot, RestMarketTypes, RestTradeTypes, TimeInForce, Side, OrderType } from '@binance/connector-typescript'

const API_KEY = process.env.BINANCE_API_KEY!
const API_SECRET = process.env.BINANCE_SECRET_KEY!
const BASE_URL = process.env.BINANCE_API_URL!
const binanceClient = new Spot(API_KEY, API_SECRET, { baseURL: BASE_URL })
let binanceUsdcDepositAddress = ''

binanceClient
  .depositAddress('USDT')
  .then((response) => {
    binanceUsdcDepositAddress = response.address
  })
  .catch((error) => {})

// **** Variables **** //

const app = express()

// **** Setup **** //

// Basic middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser(EnvVars.CookieProps.Secret))

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
  let binanceUstcPrice = await getUstcPrice()
  if (binanceUstcPrice === undefined) {
    return res.json({ message: 'failed to get ustc price.. please try again later' })
  }

  let exchangeInfo = await getExchangeInfo(binanceUstcPrice)
  if (typeof exchangeInfo === 'string') {
    return res.json({ message: exchangeInfo })
  }

  return res.json({
    message: 'World',
    depositAddress: binanceUsdcDepositAddress,
    ustcPrice: binanceUstcPrice,
    minUsdt: exchangeInfo.minUsdt,
    maxUsdt: exchangeInfo.maxUsdt,
  })
})

if (process.env.NODE_ENV! === 'development') {
  app.get('/trade/:usdt', async (req: Request, res: Response) => {
    let usdt = parseFloat(req.params.usdt)
    let ustcPlusPrice: number = 0.0
    usdt = 5.01588251

    console.log(`For testing we will use ${usdt} instead ${req.params.usdt} USDT for trading`)

    let binanceUstcPrice = await getUstcPrice()
    if (binanceUstcPrice === undefined) {
      return res.json({ message: 'failed to get ustc price.. please try again later' })
    } else {
      ustcPlusPrice = binanceUstcPrice
    }

    let exchangeInfo = await getExchangeInfo(ustcPlusPrice)
    if (typeof exchangeInfo === 'string') {
      return res.json({ message: exchangeInfo })
    }

    if (usdt < exchangeInfo.minUsdt || usdt > exchangeInfo.maxUsdt) {
      return res.json({
        message: `Given USDT must be at least ${exchangeInfo.minUsdt} and maximum ${exchangeInfo.maxUsdt} USDT`,
        minUsdt: exchangeInfo.minUsdt,
        maxUsdt: exchangeInfo.maxUsdt,
      })
    }

    const options = getOrderOption(usdt, ustcPlusPrice, exchangeInfo)

    try {
      let binanceRes: RestTradeTypes.newOrderResponse = await binanceClient.newOrder(
        'USTCUSDT',
        Side.BUY,
        OrderType.LIMIT,
        options
      )
      if (binanceRes.status === 'FILLED') {
        return res.json({
          ustcPlusPrice,
          usdt,
          qty: binanceRes.executedQty,
          completed: true,
          orderId: binanceRes.orderId,
        })
      } else if (
        ['CANCELED', 'PENDING_CANCEL', 'REJECTED', 'EXPIRED', 'EXPIRED_IN_MATCH'].indexOf(binanceRes.status!) > -1
      ) {
        return res.json({ message: `Order status: ${binanceRes.status}` })
      } else {
        return res.json({
          ustcPlusPrice,
          usdt,
          qty: binanceRes.executedQty,
          completed: false,
          orderId: binanceRes.orderId,
        })
      }
    } catch (error) {
      console.error(`Binance returned error for new order`)
      console.error(error)
      return res.json({ ustcPlusPrice, usdt, message: error })
    }
  })
}

app.get('/status/:id', async (req: Request, res: Response) => {
  let id = parseFloat(req.params.id)

  const options: RestTradeTypes.getOrderOptions = {
    recvWindow: 5000,
    orderId: id,
  }

  try {
    let binanceRes: RestTradeTypes.getOrderResponse = await binanceClient.getOrder('USTCUSDT', options)
    if (binanceRes.status === 'FILLED') {
      return res.json({
        qty: binanceRes.executedQty,
        completed: true,
        orderId: binanceRes.orderId,
      })
    } else if (
      ['CANCELED', 'PENDING_CANCEL', 'REJECTED', 'EXPIRED', 'EXPIRED_IN_MATCH'].indexOf(binanceRes.status!) > -1
    ) {
      return res.json({ message: `Order status: ${binanceRes.status}` })
    } else {
      return res.json({
        qty: binanceRes.executedQty,
        completed: false,
        orderId: binanceRes.orderId,
      })
    }
  } catch (error) {
    console.error(`Binance returned error for order status`)
    console.error(error)
    return res.json({ message: error })
  }
})

// **** Export default **** //

export default app

///////////////////////////////////

const getUstcPrice = async (): Promise<number | undefined> => {
  try {
    let binanceRes: RestMarketTypes.currentAveragePriceResponse = await binanceClient.currentAveragePrice('USTCUSDT')
    return parseFloat(binanceRes.price)
  } catch (error) {
    console.error(`Failed to get ustc price from binance: ` + error)
    return undefined
  }
}

type ExchangeInfo = {
  ustcPrecision: number
  usdtPrecision: number
  minUsdt: number
  maxUsdt: number
}

const getExchangeInfo = async (ustcPrice: number): Promise<ExchangeInfo | string> => {
  const info: ExchangeInfo = {
    ustcPrecision: 8,
    usdtPrecision: 8,
    minUsdt: ustcPrice,
    maxUsdt: ustcPrice,
  }

  const infoOptions: RestMarketTypes.exchangeInformationOptions = {
    symbol: 'USTCUSDT',
  }

  try {
    let binanceRes: RestMarketTypes.exchangeInformationResponse = await binanceClient.exchangeInformation(infoOptions)
    for (let filter of binanceRes.symbols[0].filters) {
      if (filter.filterType === 'PRICE_FILTER') {
        info.ustcPrecision = filter.tickSize.indexOf('1') - 1
        if (info.ustcPrecision == -1) {
          info.ustcPrecision = 0
        }
      } else if (filter.filterType === 'LOT_SIZE') {
        info.usdtPrecision = filter.stepSize.indexOf('1') - 1
        if (info.usdtPrecision == -1) {
          info.usdtPrecision = 0
        }
      } else if (filter.filterType === 'NOTIONAL') {
        info.minUsdt = parseFloat(filter.minNotional) + ustcPrice
        info.maxUsdt = parseFloat(filter.maxNotional)
      }
    }

    return info
  } catch (error) {
    console.error(`Binance returned error for exchange info`)
    console.error(error)
    return error
  }
}

const getOrderOption = (usdt: number, ustcPrice: number, info: ExchangeInfo): RestTradeTypes.newOrderOptions => {
  return {
    timeInForce: TimeInForce.GTC,
    // Quantity precision depends on the stepSize parameter of LOT_SIZE filter
    quantity: parseFloat(Math.ceil(usdt / ustcPrice).toFixed(info.usdtPrecision)),
    // Price precision depends on the tickSize parameter of PRICE_FILTER filter
    price: parseFloat(ustcPrice.toFixed(info.ustcPrecision)),
    recvWindow: 5000,
  }
}
