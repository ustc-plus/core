// testing the leaderboard with the fake data
import { MintingType } from '../models/DbModels'
import { tabelandDb, mintingTableName } from '../tableland'

export const addMinting = async (mintingParams: MintingType): Promise<string | undefined> => {
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
    const { meta: insert } = await tabelandDb
      .prepare(query)
      .bind(...values)
      .run()

    // Wait for transaction finality
    await insert.txn?.wait()
    if (insert.txn?.error) {
      console.log(insert.txn?.error)
      return JSON.stringify(insert.txn?.error)
    }

    console.log(`Minting was added to the tableland!`)
    return
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

export const markMintCompleted = async (id: number): Promise<boolean> => {
  let query = `UPDATE ${mintingTableName}
    SET mintCompleted = '1' WHERE id = ?`

  const result = await tabelandDb.prepare(query).bind(id).run()
  if (result.success) {
    return true
  }
  if (result.error) {
    console.error(`Unexpected error to mark minting as completed  for ${id} minting on tableland: ${result.error}`)
    return false
  }

  return true
}
