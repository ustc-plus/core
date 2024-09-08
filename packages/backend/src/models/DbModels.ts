export type IndexedEventType =
  | 'LpManager_StartMinting'
  | 'LpManager_EndMinting'
  | 'LpNft_Transfer'
  | 'LpNft_Redeem'
  | 'LpNft_Mint'
  | 'LpManager_Wrap'
  | 'LpManager_Unwrap'
  | '_tableland_minting_name' // table name

export type LastIndexTimestampType = {
  db_timestamp: string
  event_type: IndexedEventType
}

export type MintingType = {
  id?: number
  manual: boolean
  walletAddress: string // a user
  networkId: number
  txid: string
  timestamp: number
  depositStatus: number // 0 or 1
  orderCompleted: boolean
  orderId: number
  nftId: number
  depositAmount: string
  ustcAmount: string
  mintCompleted: boolean
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

export class Nft {
  constructor(
    public owner: string, // a user
    public networkId: number,
    public tokenId: number,
    public timestamp: number,
    public stableCoinAmount: bigint,
    public ustcPlusAmount: bigint,
    public initialStableCoinAmount: bigint,
    public initialUstcPlusAmount: bigint
  ) {}
}

export class LastIndexTimestamp {
  constructor(
    public db_timestamp: string,
    public event_type: IndexedEventType
  ) {}
}
