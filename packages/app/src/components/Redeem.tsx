'use client'
import { useEffect, useState } from 'react'
import { useNotifications } from '@/context/Notifications'
import { RedeemCard } from './RedeemAlert'
import { NftType } from '@/utils/types'
import { IAppStateConsumer } from './useAppState'

export const Redeem = ({ appState }: IAppStateConsumer) => {
  const { Add } = useNotifications()
  const [nfts, setNfts] = useState<NftType[]>()

  useEffect(() => {
    if (appState.appReady && appState.activeTab === 'Redeem') {
      const url = process.env.NEXT_PUBLIC_BACKEND_URL!

      fetch(`${url}/nfts/${appState.account!.chainId}/${appState.account!.address}`).then((response) => {
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
  }, [appState])

  return (
    <div>
      {appState.appReady && appState.activeTab === 'Redeem' ? (
        nfts !== undefined && nfts.length > 0 ? (
          nfts!.map((nft) => <RedeemCard key={'redeem_nft_' + nft.tokenId} appState={appState} nft={nft}></RedeemCard>)
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
