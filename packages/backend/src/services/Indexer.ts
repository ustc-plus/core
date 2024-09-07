/**
 * Setup express server.
 */

import { NftType } from '../models/DbModels'

type DeliveryInfo = {
  current_retry: number //5,
  max_retries: number //5
}

export type NftTransferEventData = {
  db_write_timestamp: string //"2024-09-05T12:04:42.132337",
  from: string // "0x0000000000000000000000000000000000000000",
  id: string // "137_61425537_207",
  to: string // "0x80Cbc1f7fd60B7026C0088e5eD58Fc6Ce1180141",
  tokenId: string // "2"
}

export type StartMintingEventData = {
  db_write_timestamp: string //"2024-09-05T12:04:42.132337",
  creator: string // "0x0000000000000000000000000000000000000000",
  depositId: string // "0x80Cbc1f7fd60B7026C0088e5eD58Fc6Ce1180141",
  id: string // "137_61425537_207",
  txid: string
  usdcAmount: string
}

export type EndMintingEventData = {
  db_write_timestamp: string //"2024-09-05T12:04:42.132337",
  _ustcPlusAmount: string
  creator: string // "0x0000000000000000000000000000000000000000",
  depositIdIsTokenId: string // "0x80Cbc1f7fd60B7026C0088e5eD58Fc6Ce1180141",
  id: string // "137_61425537_207",
  txid: string
}

export const isNftMint = (nftTransfer: NftTransferEventData): boolean => {
  return nftTransfer.from === '0x0000000000000000000000000000000000000000'
}

export const isNftBurn = (nftTransfer: NftTransferEventData): boolean => {
  return nftTransfer.to === '0x0000000000000000000000000000000000000000'
}

export type NftTransferEvent = {
  data: {
    new: NftTransferEventData | null
    old: NftTransferEventData | null
  }
  op: string // "INSERT",
  session_variables?: any
  trace_context?: any
}

export type StartMintingEvent = {
  data: {
    new: StartMintingEventData | null
    old: StartMintingEventData | null
  }
  op: string // "INSERT",
  session_variables?: any
  trace_context?: any
}

export type EndMintingEvent = {
  data: {
    new: EndMintingEventData | null
    old: EndMintingEventData | null
  }
  op: string // "INSERT",
  session_variables?: any
  trace_context?: any
}

type IndexerTable = {
  name: string
  schema: string
}

type IndexerTrigger = {
  name: string
}

// Indexer data
export type NftTransferPayload = {
  created_at: string // "2024-09-05T12:04:42.132337Z",
  delivery_info: DeliveryInfo
  event: NftTransferEvent
  id: string // "c72706f7-602b-41b5-aa3c-ad1998f06d75",
  table: IndexerTable
  trigger: IndexerTrigger
}

export type StartMintingPayload = {
  created_at: string // "2024-09-05T12:04:42.132337Z",
  delivery_info: DeliveryInfo
  event: StartMintingEvent
  id: string // "c72706f7-602b-41b5-aa3c-ad1998f06d75",
  table: IndexerTable
  trigger: IndexerTrigger
}

export type EndMintingPayload = {
  created_at: string // "2024-09-05T12:04:42.132337Z",
  delivery_info: DeliveryInfo
  event: EndMintingEvent
  id: string // "c72706f7-602b-41b5-aa3c-ad1998f06d75",
  table: IndexerTable
  trigger: IndexerTrigger
}

export const networkIdFromId = (id: string): number => {
  return parseInt(id.split('_')[0])
}

export const nftModelFromTransfer = (transfer: NftTransferEventData): NftType => {
  const networkId = networkIdFromId(transfer.id)
  let timestamp = 0
  if (isNftMint(transfer)) {
    timestamp = Math.floor(new Date(transfer.db_write_timestamp).getTime() / 1000)
  }

  const nft: NftType = {
    owner: transfer.to,
    networkId: networkId,
    tokenId: parseInt(transfer.tokenId),
    timestamp: timestamp,
    stableCoinAmount: BigInt(0),
    ustcPlusAmount: BigInt(0),
    initialStableCoinAmount: BigInt(0),
    initialUstcPlusAmount: BigInt(0),
  }

  return nft
}
