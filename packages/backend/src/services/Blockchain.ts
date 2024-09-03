import {
  Contract,
  JsonRpcProvider,
  TransactionReceipt,
  LogDescription,
  TransactionResponse,
  Block,
  parseUnits,
  formatUnits,
} from 'ethers'
import { lpManagerAbi, lpManagerAddress } from '@src/abis'

export type StartMintingEvent = {
  timestamp: number
  creator: string
  depositId: string
  usdcAmount: number
}

const providers: { [key: number]: JsonRpcProvider } = {
  11155111: new JsonRpcProvider(process.env.RPC_URL_11155111!),
}

const lpManager: { [key: number]: Contract } = {
  11155111: new Contract(lpManagerAddress[11155111], lpManagerAbi, providers[11155111]),
}

export const txToStartMinting = async (chainId: number, tx: string): Promise<StartMintingEvent | string> => {
  if (providers[chainId] === undefined) {
    return `unsupported network`
  }
  let txReceipt: null | TransactionReceipt

  try {
    txReceipt = await providers[chainId].getTransactionReceipt(tx)
  } catch (e) {
    console.error(`failed to get tx: ` + e)
    return 'failed to get transaction'
  }

  if (txReceipt === null) {
    return 'invalid tx'
  }

  const lpAddr = await lpManager[chainId].getAddress()

  if (txReceipt.to?.toLowerCase() !== lpAddr!.toLowerCase()) {
    return 'not a LP Manager transaction'
  }

  let parsedLog: LogDescription | null = null

  for (let log of txReceipt.logs) {
    if (log.address.toLowerCase() !== lpAddr.toLowerCase()) {
      continue
    }
    parsedLog = lpManager[chainId].interface.parseLog(log)
    if (parsedLog === null) {
      continue
    }
    if (parsedLog.name !== 'StartMinting') {
      parsedLog = null
      continue
    }
  }

  if (parsedLog === null) {
    return 'invalid event'
  }

  // now getting a time
  let block: null | Block = await providers[chainId].getBlock(txReceipt.blockNumber)
  if (block === null) {
    return 'Failed to get block time'
  }

  const event: StartMintingEvent = {
    creator: parsedLog.args[0] as string,
    timestamp: block.timestamp,
    depositId: (parsedLog.args[1] as bigint).toString(),
    usdcAmount: parseFloat(formatUnits(parsedLog.args[2] as bigint, parseInt(process.env.USDT_DECIMALS!))),
  }
  return event
}
