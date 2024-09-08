// testing the leaderboard with the fake data
import { Statement } from '@tableland/sdk'
import { MintingType } from '../models/DbModels'
import { tabelandDb, mintingTableName } from '../tableland'

export const addMinting = async (mintingParams: MintingType): Promise<string | Statement<MintingType>> => {
  console.log(`Add a minting to ${mintingTableName}... on tableland`)
  // put the data
  const keys = Object.keys(mintingParams)
  const values = Object.values(mintingParams)
  let query = `INSERT INTO ${mintingTableName} (`
  for (let i = 0; i < keys.length; i++) {
    query += `${keys[i]}`
    if (i !== keys.length - 1) {
      query += ', '
    }
  }
  query += ') VALUES ( '
  for (let i = 0; i < keys.length; i++) {
    query += `?`
    if (i !== keys.length - 1) {
      query += ', '
    }
  }
  query += ')'
  console.log(`Add minting table: ${query}`)
  console.log(`The values: [${values.join(', ')}]`)

  try {
    const statement = tabelandDb.prepare(query).bind(...values)
    return statement

    // Wait for transaction finality
    /*await insert.txn?.wait()
    if (insert.txn?.error) {
      console.log(insert.txn?.error)
      return JSON.stringify(insert.txn?.error)
    }*/
  } catch (error) {
    console.log(error)
    return JSON.stringify(error)
  }
}

export const getMinting = async (txid: string, chainId: number): Promise<undefined | MintingType> => {
  let query = `SELECT * FROM ${mintingTableName} WHERE txid = '${txid} AND networkId = ${chainId} LIMIT 1 `

  try {
    const found = await tabelandDb.prepare(query).first()
    // already exists
    if (found === null || found === undefined) {
      return undefined
    } else {
      console.log(`Found on tableland minting: `, found)
      return found[0]
    }
  } catch (error) {
    return undefined
  }
}

export const getMintingByNftId = async (nftId: number, chainId: number): Promise<undefined | MintingType> => {
  let query = `SELECT * FROM ${mintingTableName} WHERE nftId = '${nftId} AND networkId = ${chainId} LIMIT 1 `

  try {
    const found = await tabelandDb.prepare(query).first()
    // already exists
    if (found === null || found === undefined) {
      return undefined
    } else {
      console.log(`Found on tableland minting by nft id: `, found)
      return found[0]
    }
  } catch (error) {
    return undefined
  }
}

export const updateDepositStatus = async (id: number, depositStatus: number): Promise<boolean> => {
  const query = `UPDATE ${mintingTableName} SET depositStatus = ? WHERE id = ?`

  const result = await tabelandDb.prepare(query).bind(depositStatus, id).run()
  if (result.success) {
    return true
  }
  if (result.error) {
    console.error(
      `Unexpected error to update deposit status to ${depositStatus} for ${id} minting on tableland: ${result.error}`
    )
    return false
  }

  return true
}

export const updateOrderStatus = async (
  id: number,
  orderCompleted: boolean,
  ustcAmount: string,
  orderId?: number
): Promise<boolean> => {
  let query = `UPDATE ${mintingTableName}
    SET orderCompleted = ? AND ustcAmount = ? `
  if (orderId) {
    query += ` AND orderId = ${orderId} `
  }
  query += ` WHERE id = ? `

  const result = await tabelandDb.prepare(query).bind(orderCompleted, ustcAmount, id).run()
  if (result.success) {
    return true
  }
  if (result.error) {
    console.error(
      `Unexpected error to order completion to ${orderCompleted} to buy ${ustcAmount} USTC for ${id} minting on tableland: ${result.error}`
    )
    return false
  }

  return true
}

export const markMintCompleted = async (id: number): Promise<undefined | Statement<MintingType>> => {
  let query = `UPDATE ${mintingTableName}
    SET mintCompleted = '1' WHERE id = ?`

  const result = tabelandDb.prepare(query).bind(id)
  return result
}

export const execBatch = async (batch: Statement<MintingType>[]) => {
  const results = await tabelandDb.batch(batch)
  for (let i in results) {
    const result = results[i]
    if (result.error) {
      console.error(`Failed to execute #${i} query in batch: ${result.error}. Add yourself:`)
      console.log(batch[i])
      return result.error
    } else if (result.success) {
      console.log(`The query was executed successfully: ${i}`)
    }
  }
}
