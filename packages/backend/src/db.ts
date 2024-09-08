import * as mongoDB from 'mongodb'
import dotenv from 'dotenv'
import { LastIndexTimestamp, Nft } from './models/DbModels'
dotenv.config()

export const collections: {
  nfts?: mongoDB.Collection<Nft>
  indexes?: mongoDB.Collection<LastIndexTimestamp>
} = {}

export async function connectToDatabase() {
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(process.env.DB_CONN_STRING!)

  await client.connect()

  const db: mongoDB.Db = client.db('ustc_plus')

  const nftCollection: mongoDB.Collection<Nft> = db.collection('nft')
  collections.nfts = nftCollection

  collections.nfts.createIndex({ tokenId: 1, networkId: 1 }, { unique: true })

  const indexCollection: mongoDB.Collection<LastIndexTimestamp> = db.collection('indexes')
  collections.indexes = indexCollection

  collections.indexes.createIndex({ event_type: 1 }, { unique: true })

  console.log(`Successfully connected to database: ${db.databaseName}`)
}
