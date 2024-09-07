import { ObjectId } from 'mongodb'

export type IndexedEventType =
  | 'LpManager_StartMinting'
  | 'LpManager_EndMinting'
  | 'LpNft_Transfer'
  | 'LpNft_Redeem'
  | 'LpNft_Mint'
  | 'LpManager_Wrap'
  | 'LpManager_Unwrap'

export type LastIndexTimestampType = {
  db_timestamp: string
  event_type: IndexedEventType
}

export type MintingType = {
  manual: boolean
  walletAddress: string // a user
  networkId: number
  txid: string
  timestamp: number
  depositStatus: number // 0 or 1
  orderCompleted: boolean
  orderId: number
  nftId: number
  depositAmount: number
  ustcAmount: number
  mintCompleted?: boolean
  id?: ObjectId
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

export class Minting {
  constructor(
    public manual: boolean,
    public walletAddress: string, // a user
    public networkId: number,
    public txid: string,
    public timestamp: number,
    public depositStatus: number, // 0 or 1
    public orderCompleted: boolean,
    public orderId: number,
    public nftId: number,
    public depositAmount: number,
    public ustcAmount: number,
    public mintCompleted?: boolean,
    public id?: ObjectId
  ) {}
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
