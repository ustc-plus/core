import { Chain as WagmiChain } from 'wagmi/chains'
export interface State<T> {
  loading: boolean
  data?: T
  error?: string
}

export type NotificationType = 'info' | 'success' | 'warning' | 'error'

export interface Notification {
  type: NotificationType
  message: string
  timestamp: number
  from?: string
  href?: string
}

export interface LiquidityProcess {
  href?: string
  timestamp?: number
  from: string
  networkId: number
  networkName: string
  txid: string
  usdtAmount: number
  nftId: number
  onContinue: (txid: string, networkId: number, owner: string, usdtAmount: number) => void
}

export type NftType = {
  owner: string // a user
  networkId: number
  tokenId: number
  timestamp: number
  stableCoinAmount: bigint
  ustcPlusAmount: bigint
  initialStableCoinAmount: bigint
  initialUstcPlusAmount: bigint
}

// We omit the ustcPlusAmount as it tracks the reflected tokens
export type NftParams = {
  usdcAmount: bigint
  ustcPlusAmount: bigint
  usdcTaken: bigint
  startTime: number
  // The following parameters starting with '_' are calculated by base parameters
  _slashPercentage?: number
  _remainingUsdt?: number
  _remainingUstcPlus: number
}

export interface ExtraChainData {
  lzEndpointId: string
}

export interface Chain extends WagmiChain, ExtraChainData {}
