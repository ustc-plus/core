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
  onContinue: (txid: string, networkId: number, owner: string) => void
}
