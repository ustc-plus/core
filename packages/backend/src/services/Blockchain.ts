import {
  Contract,
  JsonRpcProvider,
  TransactionReceipt,
  LogDescription,
  TransactionResponse,
  Block,
  parseUnits,
  formatUnits,
  Wallet,
  keccak256,
  AbiCoder,
  getBytes,
} from 'ethers'
import { lpManagerAbi, lpManagerAddress } from '@src/abis'

export type StartMintingEvent = {
  timestamp: number
  creator: string
  depositId: string
  usdcAmount: number
}

export type Signature = {
  r: string
  s: string
  v: string
}

const providers: { [key: number]: JsonRpcProvider } = {
  11155111: new JsonRpcProvider(process.env.RPC_URL_11155111!),
  137: new JsonRpcProvider(process.env.RPC_URL_137!),
  56: new JsonRpcProvider(process.env.RPC_URL_56!),
}

const signers: { [key: number]: Wallet } = {
  11155111: new Wallet(process.env.PRIVATE_KEY_11155111!),
  137: new Wallet(process.env.PRIVATE_KEY_137!),
  56: new Wallet(process.env.PRIVATE_KEY_56!),
}

const lpManager: { [key: number]: Contract } = {
  11155111: new Contract(lpManagerAddress[11155111], lpManagerAbi, providers[11155111]),
  137: new Contract(lpManagerAddress[137], lpManagerAbi, providers[137]),
  56: new Contract(lpManagerAddress[56], lpManagerAbi, providers[56]),
}

export const stableCoinDecimals = (chainId: number) => {
  if (chainId === 11155111 || chainId === 56) {
    return 18
  } else {
    return 6
  }
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
    usdcAmount: parseFloat(formatUnits(parsedLog.args[2] as bigint, stableCoinDecimals(chainId))),
  }
  return event
}

export const endMintingSignature = async (
  _owner: string,
  chainId: number,
  _nftId: number,
  _ustcPlusAmount: bigint
): Promise<string | Signature> => {
  if (providers[chainId] === undefined) {
    return `unsupported network`
  }

  const _contract = await lpManager[chainId].getAddress()

  const _hash = messageHash(_owner, _contract, chainId, _nftId, _ustcPlusAmount)

  const signature = signers[chainId].signMessageSync(getBytes(_hash))

  return {
    r: signature.slice(0, 66),
    s: '0x' + signature.slice(66, 130),
    v: '0x' + signature.slice(130, 132),
  }
}

export const messageHash = (
  _owner: string,
  _contract: string,
  _chainId: number,
  _nftId: number,
  _ustcPlusAmount: bigint
) => {
  const encoded = AbiCoder.defaultAbiCoder().encode(
    ['address', 'uint256', 'uint256', 'address', 'uint256'],
    [_owner, _nftId, _ustcPlusAmount, _contract, _chainId]
  )

  return keccak256(encoded)
}
