import * as mongoDB from 'mongodb'
import dotenv from 'dotenv'
import { LastIndexTimestamp, Minting, Nft } from './models/DbModels'
dotenv.config()

export const collections: {
  mintings?: mongoDB.Collection<Minting>
  nfts?: mongoDB.Collection<Nft>
  indexes?: mongoDB.Collection<LastIndexTimestamp>
} = {}

export async function connectToDatabase() {
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING!)

  await client.connect()

  const db: mongoDB.Db = client.db('ustc_plus')

  const mintingCollection: mongoDB.Collection<Minting> = db.collection('minting')
  collections.mintings = mintingCollection

  collections.mintings.createIndex({ walletAddress: 1 }, { unique: false })
  collections.mintings.createIndex({ txid: 1, networkId: 1 }, { unique: true })
  collections.mintings.createIndex({ nftId: 1, networkId: 1 }, { unique: true })

  const nftCollection: mongoDB.Collection<Nft> = db.collection('nft')
  collections.nfts = nftCollection

  collections.nfts.createIndex({ tokenId: 1, networkId: 1 }, { unique: true })

  const indexCollection: mongoDB.Collection<LastIndexTimestamp> = db.collection('indexes')
  collections.indexes = indexCollection

  collections.indexes.createIndex({ event_type: 1 }, { unique: true })

  console.log(`Successfully connected to database: ${db.databaseName}`)
}
