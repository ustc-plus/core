// testing the leaderboard with the fake data
import { WithId } from 'mongodb'
import { collections } from '../db'
import { MintingType, Minting } from '../models/DbModels'

export const addMinting = async (mintingParams: MintingType) => {
  // put the data
  try {
    const dbResult = await collections.mintings?.insertOne(mintingParams)

    if (dbResult) {
      return
    }
  } catch (error) {
    return JSON.stringify(error)
  }
}

export const getMinting = async (txid: string, chainId: number): Promise<undefined | WithId<Minting>> => {
  let query = {
    txid: txid,
    networkId: chainId,
  }

  try {
    const found = await collections.mintings?.findOne(query)
    // already exists
    if (found === null || found === undefined) {
      return undefined
    } else {
      return found as WithId<Minting>
    }
  } catch (error) {
    return undefined
  }
}

export const getMintingByNftId = async (nftId: number, chainId: number): Promise<undefined | WithId<Minting>> => {
  let query = {
    nftId: nftId,
    networkId: chainId,
  }

  try {
    const found = await collections.mintings?.findOne(query)
    // already exists
    if (found === null || found === undefined) {
      return undefined
    } else {
      return found as WithId<Minting>
    }
  } catch (error) {
    return undefined
  }
}

export const updateMinting = async (minting: WithId<Minting>): Promise<boolean> => {
  let query = {
    _id: minting._id,
  }

  try {
    const found = await collections.mintings?.replaceOne(query, minting)
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
