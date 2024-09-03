import {
  Spot,
  RestMarketTypes,
  RestTradeTypes,
  TimeInForce,
  Side,
  OrderType,
  RestWalletTypes,
} from '@binance/connector-typescript'

const API_KEY = process.env.BINANCE_API_KEY!
const API_SECRET = process.env.BINANCE_SECRET_KEY!
const BASE_URL = process.env.BINANCE_API_URL!
const binanceClient = new Spot(API_KEY, API_SECRET, { baseURL: BASE_URL })
export let binanceUsdcDepositAddress = ''

export type Info = {
  unixtimestamp: number
  depositAddress: string
  ustcPrice: number
  minUsdt: number
  maxUsdt: number
}

export type Order = {
  ustcPlusPrice: number
  usdt: number
  qty?: string | undefined
  completed: boolean
  orderId: number
}

type ExchangeInfo = {
  ustcPrecision: number
  usdtPrecision: number
  minUsdt: number
  maxUsdt: number
}

binanceClient
  .depositAddress('USDT')
  .then((response) => {
    binanceUsdcDepositAddress = response.address
  })
  .catch((error) => {
    console.error(error)
  })

export const getInfo = async (): Promise<undefined | Info> => {
  let binanceUstcPrice = await getUstcPrice()
  if (binanceUstcPrice === undefined) {
    return
  }

  let exchangeInfo = await getExchangeInfo(binanceUstcPrice)
  if (typeof exchangeInfo === 'string') {
    console.error(`getExchangeInfo Error: ${exchangeInfo}`)
    return
  }

  return {
    unixtimestamp: Date.now(),
    depositAddress: binanceUsdcDepositAddress,
    ustcPrice: binanceUstcPrice,
    minUsdt: exchangeInfo.minUsdt,
    maxUsdt: exchangeInfo.maxUsdt,
  }
}

// Returns -1 if no deposit was found, otherwise returns status parameter of:
// https://binance.github.io/binance-connector-node/module-Wallet.html#depositHistory
export const getDepositStatus = async (txid: string): Promise<RestWalletTypes.depositHistoryResponse | undefined> => {
  const options: RestWalletTypes.depositHistoryOptions = {
    coin: 'USDT',
    txId: txid,
  }

  try {
    let binanceRes: RestWalletTypes.depositHistoryResponse[] = await binanceClient.depositHistory(options)
    if (binanceRes.length == 0) {
      console.log(`No deposits by given txid`)
      return undefined
    }

    return binanceRes[0]
  } catch (error) {
    console.error(`Binance returned error for order status`)
    console.error(error)
    return undefined
  }
}

export const getOrderInfo = async (orderId: number): Promise<Order | string> => {
  const options: RestTradeTypes.getOrderOptions = {
    recvWindow: 5000,
    orderId,
  }

  try {
    let binanceRes: RestTradeTypes.getOrderResponse = await binanceClient.getOrder('USTCUSDT', options)
    if (binanceRes.status === 'FILLED') {
      return {
        ustcPlusPrice: parseFloat(binanceRes.price),
        usdt: parseFloat(binanceRes.origQuoteOrderQty),
        qty: binanceRes.executedQty,
        completed: true,
        orderId: binanceRes.orderId,
      }
    } else if (
      ['CANCELED', 'PENDING_CANCEL', 'REJECTED', 'EXPIRED', 'EXPIRED_IN_MATCH'].indexOf(binanceRes.status!) > -1
    ) {
      return `Order status: ${binanceRes.status}`
    } else {
      return {
        ustcPlusPrice: parseFloat(binanceRes.price),
        usdt: parseFloat(binanceRes.origQuoteOrderQty),
        qty: binanceRes.executedQty,
        completed: false,
        orderId: binanceRes.orderId,
      }
    }
  } catch (error) {
    console.error(`Binance returned error for order status`)
    console.error(error)
    return error.toString()
  }
}

export const getUstcPrice = async (): Promise<number | undefined> => {
  try {
    let binanceRes: RestMarketTypes.currentAveragePriceResponse = await binanceClient.currentAveragePrice('USTCUSDT')
    return parseFloat(binanceRes.price)
  } catch (error) {
    console.error(`Failed to get ustc price from binance: ` + error)
    return undefined
  }
}

export const trade = async (usdt: number): Promise<string | Order> => {
  let ustcPlusPrice: number = 0.0

  let binanceUstcPrice = await getUstcPrice()
  if (binanceUstcPrice === undefined) {
    return 'failed to get ustc price.. please try again later'
  } else {
    ustcPlusPrice = binanceUstcPrice
  }

  let exchangeInfo = await getExchangeInfo(ustcPlusPrice)
  if (typeof exchangeInfo === 'string') {
    return exchangeInfo
  }

  if (usdt < exchangeInfo.minUsdt || usdt > exchangeInfo.maxUsdt) {
    return `Given USDT must be at least ${exchangeInfo.minUsdt} and maximum ${exchangeInfo.maxUsdt} USDT`
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
      return {
        ustcPlusPrice,
        usdt,
        qty: binanceRes.executedQty,
        completed: true,
        orderId: binanceRes.orderId,
      }
    } else if (
      ['CANCELED', 'PENDING_CANCEL', 'REJECTED', 'EXPIRED', 'EXPIRED_IN_MATCH'].indexOf(binanceRes.status!) > -1
    ) {
      return `Order status: ${binanceRes.status}`
    } else {
      return {
        ustcPlusPrice,
        usdt,
        qty: binanceRes.executedQty,
        completed: false,
        orderId: binanceRes.orderId,
      }
    }
  } catch (error) {
    console.error(`Binance returned error for new order`)
    console.error(error)
    return error.toString()
  }
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
        info.minUsdt = parseFloat(filter.minNotional)
        info.minUsdt *= 1.1 // during the deposit, its unlikely that price will change 10% from now.
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
