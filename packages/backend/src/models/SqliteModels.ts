export const prefix: string = 'ustcplus_'
// Todo: create this keys...
// collections.mintings.createIndex({ walletAddress: 1 }, { unique: false })
// collections.mintings.createIndex({ txid: 1, networkId: 1 }, { unique: true })
// collections.mintings.createIndex({ nftId: 1, networkId: 1 }, { unique: true })
export const CreateMintingTableQuery = `CREATE TABLE ${prefix} (
  id INTEGER PRIMARY KEY,
  manual INTEGER,
  walletAddress text,
  networkId INTEGER,
  txid text,
  timestamp INTEGER,
  depositStatus INTEGER,
  orderCompleted INTEGER,
  orderId INTEGER,
  nftId INTEGER,
  depositAmount text,
  ustcAmount text,
  mintCompleted INTEGER
)`
