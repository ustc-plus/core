/**
 * Setup express server.
 */

import { gql, Client, cacheExchange, fetchExchange } from '@urql/core'

import { Cron } from 'croner'
import {
  EndMintingEventData,
  NftTransferEventData,
  StartMintingEventData,
  isNftBurn,
  networkIdFromId,
  nftModelFromTransfer,
} from './services/Indexer'
import { addIndexTimestamps, getIndexTimestamps, updateIndexTimestamps } from './services/IndexTracker'
import { LastIndexTimestamp, LastIndexTimestampType, MintingType } from './models/DbModels'
import { addMinting, execBatch, getMinting, getMintingByNftId, markMintCompleted } from './services/MintingTracker'
import { formatUnits } from 'ethers'
import { stableCoinDecimals } from './services/Blockchain'
import { addNft, deleteNft, getNft, updateNft } from './services/NftTracker'
import { Statement } from '@tableland/sdk'

// **** Setup **** //

const graphqlClient = new Client({
  url: process.env.INDEXER_URL!,
  exchanges: [cacheExchange, fetchExchange],
})

type Events = {
  LpManager_EndMinting?: EndMintingEventData[]
  LpManager_StartMinting?: StartMintingEventData[]
  LpNft_Transfer?: NftTransferEventData[]
}

let lastStartMintingTimestamp: LastIndexTimestamp | LastIndexTimestampType
let lastEndMintingTimestamp: LastIndexTimestamp | LastIndexTimestampType
let lastNftTransferTimestamp: LastIndexTimestamp | LastIndexTimestampType

const job = Cron(
  /* The pattern */
  '*/5 * * * * *',
  /* Function (optional) */
  async () => {
    job.pause()
    let events = await fetchFromGraphql()
    if (events === undefined) {
      job.resume()
      console.error(`Fetching from graphql failed trying again later`)
      return
    }

    const batchQueries: Statement<MintingType>[] = []
    let newDbStartMintingTimestamp: string = lastStartMintingTimestamp.db_timestamp
    let newDbEndMintingTimestamp: string = lastEndMintingTimestamp.db_timestamp

    if (events.LpManager_StartMinting !== undefined) {
      if (events.LpManager_StartMinting.length > 0) {
        console.log(`There are ${events.LpManager_StartMinting.length} start mintings...`)

        for (let startMinting of events.LpManager_StartMinting) {
          const processed = await processStartMinting(startMinting)
          if (typeof processed === 'string') {
            console.warn(`Minting was not parsed parse it yourself:`)
            console.log(startMinting)
          } else if (processed === undefined) {
            console.warn(`Minting was already added, skipping`)
          } else {
            batchQueries.push(processed)
          }
        }

        newDbStartMintingTimestamp =
          events.LpManager_StartMinting[events.LpManager_StartMinting.length - 1].db_write_timestamp
      }
    } else {
      console.error(`Occured error while fetching start mintings`)
    }

    if (events.LpManager_EndMinting !== undefined) {
      if (events.LpManager_EndMinting.length > 0) {
        console.log(`There are ${events.LpManager_EndMinting.length} end mintings...`)

        for (let endMinting of events.LpManager_EndMinting) {
          const processed = await processEndMinting(endMinting)
          if (processed == undefined) {
            console.warn(`End Minting was not parsed parse it yourself:`)
            console.log(endMinting)
          } else {
            batchQueries.push(processed)
          }
        }

        newDbEndMintingTimestamp =
          events.LpManager_EndMinting[events.LpManager_EndMinting.length - 1].db_write_timestamp
      }
    } else {
      console.error(`Occured error while fetching end mintings`)
    }

    if (events.LpNft_Transfer !== undefined) {
      if (events.LpNft_Transfer.length > 0) {
        console.log(`There are ${events.LpNft_Transfer.length} transfer mintings...`)

        for (let lpTransfer of events.LpNft_Transfer) {
          const processed = await processLpTransfer(lpTransfer)
          if (!processed) {
            console.warn(`Lp transfer event was not parsed parse it yourself:`)
            console.log(lpTransfer)
          }
        }

        let newDbLastTime = events.LpNft_Transfer[events.LpNft_Transfer.length - 1].db_write_timestamp
        if (newDbLastTime !== lastNftTransferTimestamp.db_timestamp) {
          lastNftTransferTimestamp.db_timestamp = newDbLastTime

          const updated = await updateIndexTimestamps(lastNftTransferTimestamp)
          if (!updated) {
            console.error(`Failed to update timestamp for lp transfer`)
          }
        }
      }
    } else {
      console.error(`Occured error while fetching lp transfers`)
    }

    if (batchQueries.length) {
      console.log(`Thera are ${batchQueries.length} queries to execute against Tableland`)

      await execBatch(batchQueries)

      if (newDbStartMintingTimestamp !== lastStartMintingTimestamp.db_timestamp) {
        lastStartMintingTimestamp.db_timestamp = newDbStartMintingTimestamp
        const updated = await updateIndexTimestamps(lastStartMintingTimestamp)
        if (!updated) {
          console.error(`Failed to update timestamp for start minting`)
        }
      }

      if (newDbEndMintingTimestamp !== lastEndMintingTimestamp.db_timestamp) {
        lastEndMintingTimestamp.db_timestamp = newDbEndMintingTimestamp

        const updated = await updateIndexTimestamps(lastEndMintingTimestamp)
        if (!updated) {
          console.error(`Failed to update timestamp for end minting`)
        }
      }
    }

    job.resume()
  },
  { paused: true }
)

export const startTracking = async () => {
  console.log(`Starting a cron jobs for indexing`)
  let fromDb = await getIndexTimestamps('LpManager_StartMinting')
  if (fromDb !== undefined) {
    lastStartMintingTimestamp = fromDb
  } else {
    let newInDb = await addIndexTimestamps('LpManager_StartMinting')
    if (typeof newInDb === 'string') {
      console.error(`track start minting error: ${newInDb}`)
      process.exit(1)
    }
    lastStartMintingTimestamp = newInDb
  }

  let fromDb2 = await getIndexTimestamps('LpManager_EndMinting')
  if (fromDb2 !== undefined) {
    lastEndMintingTimestamp = fromDb2
  } else {
    let newInDb = await addIndexTimestamps('LpManager_EndMinting')
    if (typeof newInDb === 'string') {
      console.error(`add index of end minting: ${newInDb}`)
      process.exit(1)
    }
    lastEndMintingTimestamp = newInDb
  }

  let fromDb3 = await getIndexTimestamps('LpNft_Transfer')
  if (fromDb3 !== undefined) {
    lastNftTransferTimestamp = fromDb3
  } else {
    let newInDb = await addIndexTimestamps('LpNft_Transfer')
    if (typeof newInDb === 'string') {
      console.error(`add index of lp transfer: ${newInDb}`)
      process.exit(1)
    }
    lastNftTransferTimestamp = newInDb
  }

  job.resume()
}

const fetchFromGraphql = async (): Promise<Events | undefined> => {
  const QUERY = gql` {
      LpNft_Transfer(where: {db_write_timestamp: {_gt: "${lastNftTransferTimestamp.db_timestamp}"}}, order_by: {db_write_timestamp: asc}, limit: 59) {
    db_write_timestamp
    from
    id
    to
    tokenId
  }
  LpManager_StartMinting(
        where: { db_write_timestamp: { _gt: "${lastStartMintingTimestamp.db_timestamp}" }}
        limit: 50
        order_by: { db_write_timestamp: asc }
      ) {
        id
        txid
        usdcAmount
        depositId
        db_write_timestamp
        creator
      }
  
  LpManager_EndMinting(
        where: { db_write_timestamp: { _gt: "${lastEndMintingTimestamp.db_timestamp}" } }
        limit: 50
        order_by: { db_write_timestamp: asc }
      ) {
        id
        depositIdIsTokenId
        db_write_timestamp
        creator
        _ustcPlusAmount
      }
    }
`
  const result = await graphqlClient.query(QUERY, {}, { requestPolicy: 'network-only' }).toPromise()
  if (result.error) {
    console.error(result.error)
    return
  }
  const events: Events = {}
  events['LpManager_StartMinting'] = result.data['LpManager_StartMinting'] as StartMintingEventData[]
  events['LpManager_EndMinting'] = result.data['LpManager_EndMinting'] as EndMintingEventData[]
  events['LpNft_Transfer'] = result.data['LpNft_Transfer'] as NftTransferEventData[]

  return events
}

const processStartMinting = async (
  startMinting: StartMintingEventData
): Promise<string | undefined | Statement<MintingType>> => {
  const chainId = networkIdFromId(startMinting.id)
  const txid = startMinting.txid

  let cachedMinting = await getMinting(txid, chainId)
  if (cachedMinting !== undefined) {
    console.log(`The start minting txid ${txid} on ${chainId} network is processed`)
    return
  }

  let mintingToAdd: MintingType = {
    walletAddress: startMinting.creator, // a user
    networkId: chainId,
    txid: txid,
    timestamp: Math.floor(new Date(startMinting.db_write_timestamp).getTime() / 1000),
    depositAmount: parseFloat(formatUnits(startMinting.usdcAmount, stableCoinDecimals(chainId))).toString(), // 0 or 1
    ustcAmount: '0',
    orderCompleted: false,
    orderId: 0,
    nftId: parseInt(startMinting.depositId),
    manual: false,
    depositStatus: -1,
    mintCompleted: false,
  }
  let minting = await addMinting(mintingToAdd)
  if (typeof minting === 'string') {
    console.error(`Failed to add minting to database`)
    console.error(mintingToAdd)
    console.error(minting)
    return minting
  }
  return minting
}

const processEndMinting = async (endMinting: EndMintingEventData): Promise<undefined | Statement<MintingType>> => {
  const chainId = networkIdFromId(endMinting.id)
  const nftId = parseInt(endMinting.depositIdIsTokenId)

  let cachedMinting = await getMintingByNftId(nftId, chainId)
  if (cachedMinting === undefined) {
    console.log(`Cached minting not found`)
    return undefined
  } else if (cachedMinting.mintCompleted) {
    return undefined
  }

  cachedMinting.mintCompleted = true
  let updated = await markMintCompleted(cachedMinting.id!)
  return updated
}

const processLpTransfer = async (transferEvent: NftTransferEventData): Promise<boolean> => {
  const nft = nftModelFromTransfer(transferEvent)
  const foundNft = await getNft(nft.tokenId, nft.networkId)

  if (foundNft === undefined) {
    if (isNftBurn(transferEvent)) {
      return true
    }
    // get the nft parameters such as params on blockchain
    const added = await addNft(nft)
    if (added !== undefined) {
      console.error(`Failed to add nft add yourself: ` + added)
      console.log(nft)
      console.log(transferEvent)
      return false
    }
    return true
  }
  if (isNftBurn(transferEvent)) {
    await deleteNft(foundNft.tokenId, foundNft.networkId)
    return true
  }

  // we update the parameters of found nft
  foundNft.owner = nft.owner
  const updated = await updateNft(foundNft)
  if (!updated) {
    return false
  }

  return true
}
