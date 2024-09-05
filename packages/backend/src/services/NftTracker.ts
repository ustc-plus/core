// testing the leaderboard with the fake data
import { ObjectId, WithId } from 'mongodb'
import { collections } from '../db'
import { NftType, Nft } from '../models/DbModels'
import { query } from 'express'

export const addNft = async (nftParams: NftType) => {
  // put the data
  try {
    const dbResult = await collections.nfts?.insertOne(nftParams)

    if (dbResult) {
      return
    }
  } catch (error) {
    return JSON.stringify(error)
  }
}

export const deleteNft = async (tokenId: number, networkId: number): Promise<undefined | string> => {
  let query = {
    tokenId: tokenId,
    networkId: networkId,
  }

  // put the data
  try {
    const dbResult = await collections.nfts?.deleteOne(query)

    if (dbResult) {
      return
    }
  } catch (error) {
    return JSON.stringify(error)
  }
}

export const getNft = async (tokenId: number, networkId: number): Promise<undefined | Nft> => {
  let query = {
    tokenId: tokenId,
    networkId: networkId,
  }

  try {
    const found = await collections.nfts?.findOne(query)
    // already exists
    if (found === null || found === undefined) {
      return undefined
    } else {
      return found as Nft
    }
  } catch (error) {
    return undefined
  }
}

export const getByOwner = async (networkId: number, owner: string): Promise<Nft[]> => {
  let query = {
    networkId: networkId,
    owner: owner,
  }

  try {
    const cursor = collections.nfts?.find(query)
    if (cursor == undefined) {
      return []
    }
    const found = await cursor?.toArray()
    return found
  } catch (error) {
    return []
  }
}

export const updateNft = async (nft: Nft): Promise<boolean> => {
  let query = {
    tokenId: nft.tokenId,
    networkId: nft.networkId,
  }

  try {
    const found = await collections.nfts?.replaceOne(query, nft)
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
