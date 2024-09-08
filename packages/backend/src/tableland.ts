import { providers } from './services/Blockchain'
import { CreateMintingTableQuery } from './models/SqliteModels'
import dotenv from 'dotenv'
dotenv.config()

import { Database } from '@tableland/sdk'
import { addTablelandMintingName, getTablelandMintingName } from './services/IndexTracker'
import { Wallet } from 'ethers'
import { MintingType } from './models/DbModels'

// In this chain id we interact with the decentralized database
const tablelandChainId = 137
export let mintingTableName: string | undefined = undefined

const tabelandWallet = new Wallet(process.env.TABLELAND_PRIVATE_KEY_137!)
const tablelandSigner = tabelandWallet.connect(providers[tablelandChainId])
// Connect to the database
export let tabelandDb = new Database<MintingType>({ signer: tablelandSigner })

export async function connectToTableland() {
  console.log(`Establishing a connection with the tableland - a decentralized database based on SQLite...`)
  console.log(`Tableland is managed through ${tablelandChainId} network by ${tabelandWallet.address} admin.`)
  mintingTableName = await getTablelandMintingName()
  if (mintingTableName === undefined) {
    console.log(`There is no minting table registered in app, let's create it on tableland first...`)
    // Creating will exit from app if error, so don't need to check it
    await createMintingTable()
  }
  console.log(`Minting table name on tableland that app will use: ${mintingTableName}`)
}

// Exits the app if there is an error
const createMintingTable = async () => {
  const { meta: create } = await tabelandDb.prepare(CreateMintingTableQuery).run()
  try {
    await create.txn?.wait()

    // The tablename format is ${prefix}_${chainId}_${tableId}
    mintingTableName = create.txn?.names[0] ?? undefined
    if (mintingTableName === undefined || mintingTableName.length === 0) {
      process.exit(`Failed to get minting table name from tabeland`)
    }

    const added = await addTablelandMintingName(mintingTableName)
    if (added !== undefined) {
      process.exit(`Failed to save the newly created minting tablename in server: ${added}`)
    }
    console.log(`Created Minting table name on tableland: ${mintingTableName}`)
  } catch (error) {
    console.log(`Failed to create minting table on tableland: ${error}`)
    process.exit(0)
  }
}
