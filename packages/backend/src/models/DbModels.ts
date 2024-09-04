import { ObjectId } from 'mongodb'

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
  id?: ObjectId
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
    public id?: ObjectId
  ) {}
}
