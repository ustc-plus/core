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
import { useNotifications } from '@/context/Notifications'
import { GetAddr } from '@/utils/web3'
import { RedeemCard } from './RedeemAlert'
import { NftType } from '@/utils/types'

export const Unwrap = () => {
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
        <div role='alert' className='alert alert-neutral'>
          Unwrapping is not supported yet...
        </div>
      ) : (
        // <div><h3 className='text-xl mb-2'>Unwrap USTC+ to USTC</h3>
        // <input
        //   key='redeem_amount'
        //   type='text'
        //   placeholder='Amount in Percent'
        //   className='input input-bordered w-full max-w-xs'
        // />
        // <input key='redeem_amount_in_percent' type='range' min={0} max={100} className='range range-primary' />
        // <button className='mx-5 btn btn-primary'>Redeem (23% slashing)</button>
        // <input type='text' placeholder='Luna Classic Address' className='input input-bordered w-full max-w-xs' />
        // <button className='mx-5 btn btn-primary'>Unwrap</button>
        // <div className='divider'></div>
        // <div>
        //   Burning your USTC+ on <span className='badge badge-md badge-accent'>Ethereum</span> in exchange for USTC on{' '}
        //   <span className='badge badge-md badge-accent'>Luna Classic</span> network.
        // </div></div>
        <div className='skeleton h-32 w-full'></div>
      )}
    </div>
  )
}
