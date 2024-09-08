// testing the leaderboard with the fake data
import { collections } from '../db'
import { LastIndexTimestampType, LastIndexTimestamp, IndexedEventType } from '../models/DbModels'

export const defaultTimestamp = '2024-09-04T13:39:30.681834'

export const addIndexTimestamps = async (event_type: IndexedEventType): Promise<string | LastIndexTimestampType> => {
  // Everything started at latest on 4th september 2024
  const lastIndexTimestamp: LastIndexTimestampType = {
    db_timestamp: defaultTimestamp,
    event_type: event_type,
  }

  // put the data
  try {
    const dbResult = await collections.indexes?.insertOne(lastIndexTimestamp)

    if (!dbResult) {
      return 'failed to indexer'
    } else {
      return lastIndexTimestamp
    }
  } catch (error) {
    return JSON.stringify(error)
  }
}

export const getIndexTimestamps = async (event_type: IndexedEventType): Promise<undefined | LastIndexTimestamp> => {
  let query = {
    event_type: event_type,
  }

  try {
    const found = await collections.indexes?.findOne(query)
    // already exists
    if (found === null || found === undefined) {
      return undefined
    } else {
      return found as LastIndexTimestamp
    }
  } catch (error) {
    return undefined
  }
}

// Returns tableland minting table name
export const addTablelandMintingName = async (mintingTableName: string): Promise<string | undefined> => {
  const lastIndexTimestamp: LastIndexTimestampType = {
    db_timestamp: mintingTableName,
    event_type: '_tableland_minting_name',
  }

  // put the data
  try {
    const dbResult = await collections.indexes?.insertOne(lastIndexTimestamp)

    if (!dbResult) {
      return 'failed to indexer'
    } else {
      return undefined
    }
  } catch (error) {
    return JSON.stringify(error)
  }
}

export const getTablelandMintingName = async (): Promise<string | undefined> => {
  const result = await getIndexTimestamps('_tableland_minting_name')
  if (result === undefined || result.db_timestamp.length === 0) {
    return undefined
  }

  return result.db_timestamp
}

export const updateIndexTimestamps = async (
  lastIndexes: LastIndexTimestamp | LastIndexTimestampType
): Promise<boolean> => {
  let query = {
    event_type: lastIndexes.event_type,
  }

  try {
    const found = await collections.indexes?.replaceOne(query, lastIndexes)
    // already exists
    if (found === null || found === undefined) {
      return false
    } else {
      return found.acknowledged
    }
  } catch (error) {
    console.error(error)
    return false
  }
}
