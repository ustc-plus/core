'use client'
import { useAccount, useAccountEffect } from 'wagmi'
import { useEffect, useState } from 'react'
import { useNotifications } from '@/context/Notifications'
import { GetAddr } from '@/utils/web3'
import { RedeemCard } from './RedeemAlert'
import { NftType } from '@/utils/types'

export const Redeem = () => {
  const { Add } = useNotifications()
  const account = useAccount()
  const [connected, setConnected] = useState<boolean>(false)
  const [nfts, setNfts] = useState<NftType[]>()
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
