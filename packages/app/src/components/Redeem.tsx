'use client'
import {
  useAccount,
  useAccountEffect,
  useReadContract,
  useSimulateContract,
  useWaitForTransactionReceipt,
  useWriteContract,
} from 'wagmi'
import { useEffect, useState } from 'react'
import { erc20Abi, formatEther, formatUnits, parseEther, parseUnits } from 'viem'
import useInterval from 'use-interval'
import { useNotifications } from '@/context/Notifications'
import { stableCoinDecimals, networkName } from '@/utils/network'
import { GetAbi, GetAddr } from '@/utils/web3'
import LiquidityProcessList from './LiquidityProcessList'
import { useLiquidityProcesses } from '@/context/LiquidityProcesses'
import { RedeemCard } from './RedeemAlert'
import { NftType } from '@/utils/types'

type Info = {
  unixtimestamp: number
  depositAddress: string
  ustcPrice: number
  minUsdt: number
  maxUsdt: number
}

type BinanceOrderStatus = -1 | 0 | 6 | 1

type Signature = {
  v: string
  r: string
  s: string
}

type MintingResult = {
  status?: BinanceOrderStatus
  timestamp?: number
  nftId?: number
  orderCompleted?: boolean
  orderCompletion?: string
  orderId?: number
  ustcPlusAmount?: string
  message?: string
  mintCompleted?: boolean
  signature?: Signature
}

export const Redeem = () => {
  const { Add } = useNotifications()
  const account = useAccount()
  const [connected, setConnected] = useState<boolean>(false)
  const [nfts, setNfts] = useState<NftType[]>()
  const [nftId, setNftId] = useState<number>()
  const [percent, setPercent] = useState<number>()
  const [lpNftAddress, setLpNftAddress] = useState<`0x${string}`>()
  useAccountEffect({
    onConnect() {
      setConnected(true)
    },
    onDisconnect() {
      setConnected(false)
    },
  })

  useEffect(() => {
    if (connected) {
      setLpNftAddress(GetAddr('lpNftAddress', account.chainId!))

      const url = process.env.NEXT_PUBLIC_BACKEND_URL!

      fetch(`${url}/nfts/${account!.chainId}/${account!.address}`).then((response) => {
        response
          .json()
          .then((data) => {
            if (data['message'] !== undefined) {
              Add('Server error: ' + data['message'], { type: 'error' })
            } else {
              setNfts(data as NftType[])
            }
          })
          .catch((error) => {
            Add('Failed to parse incoming data from server', { type: 'error' })
            console.error(error)
          })
      })
    }
  }, [connected])

  return (
    <div>
      {connected ? (
        nfts !== undefined && nfts.length > 0 ? (
          nfts!.map((nft) => <RedeemCard lpNftAddress={lpNftAddress!} nft={nft}></RedeemCard>)
        ) : (
          <div role='alert' className='alert alert-neutral'>
            You don't have any nft
          </div>
        )
      ) : (
        <div className='skeleton h-32 w-full'></div>
      )}
    </div>
  )
}
