'use client'

import { Liquidity } from '@/components/Liquidity'
import { Redeem } from '@/components/Redeem'
import { useAccount } from 'wagmi'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { Unwrap } from '@/components/Unwrap'
import { Bridge } from '@/components/Bridge'
import { Faucet } from '@/components/Faucet'

export default function Home() {
  const account = useAccount()

  return (
    <>
      {account !== undefined && account.status === 'connected' ? (
        <div></div>
      ) : (
        <div role='alert' className='alert alert-info'>
          {account === undefined || account.isDisconnected ? (
            <div role='alert' className='alert alert-warning'>
              <InformationCircleIcon className='h-6 w-6 shrink-0 stroke-current'></InformationCircleIcon>
              <span>Connect your wallet first</span>
            </div>
          ) : (
            <div role='alert' className='alert alert-info'>
              <span className='loading loading-ring loading-xs h-6 w-6 shrink-0 stroke-current'></span>
              <span>Connecting wallet... Status: {account?.status}</span>
            </div>
          )}
        </div>
      )}
      <div role='tablist' className='mt-4 tabs tabs-lifted'>
        <input
          type='radio'
          name='main_tabs'
          role='tab'
          className='tab ml-5'
          aria-label='Liquidity'
          defaultChecked={true}
        />
        <div role='tabpanel' className='tab-content rounded-box'>
          <Liquidity></Liquidity>
        </div>

        <input type='radio' name='main_tabs' role='tab' className='tab ml-5' aria-label='Redeem' />
        <div role='tabpanel' className='tab-content  rounded-box'>
          <Redeem></Redeem>
        </div>

        <input type='radio' name='main_tabs' role='tab' className='tab ml-5' aria-label='Unwrap' />
        <div role='tabpanel' className='tab-content bg-base-100 border-base-300 rounded-box p-6'>
          <Unwrap></Unwrap>
        </div>

        <input type='radio' name='main_tabs' role='tab' className='tab ml-5' aria-label='Bridge' />
        <div role='tabpanel' className='tab-content bg-base-100 border-base-300 rounded-box p-6'>
          <Bridge></Bridge>
        </div>

        <input type='radio' name='main_tabs' role='tab' className='tab ml-5' aria-label='Faucet' />
        <div role='tabpanel' className='tab-content bg-base-100 border-base-300 rounded-box p-6'>
          <Faucet></Faucet>
        </div>
      </div>
    </>
  )
}
