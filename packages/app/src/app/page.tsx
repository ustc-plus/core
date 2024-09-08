'use client'

import { Liquidity } from '@/components/Liquidity'
import { Redeem } from '@/components/Redeem'
import { useAccount } from 'wagmi'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { Unwrap } from '@/components/Unwrap'
import { Bridge } from '@/components/Bridge'
import { Faucet } from '@/components/Faucet'
import { useAppState } from '@/components/useAppState'

export default function Home() {
  const account = useAccount()
  const appState = useAppState({ account })

  return (
    <>
      {appState.appReady ? (
        <div></div>
      ) : (
        <div role='alert' className='alert alert-info'>
          {appState.account.isDisconnected ? (
            <div role='alert' className='alert alert-warning'>
              <InformationCircleIcon className='h-6 w-6 shrink-0 stroke-current'></InformationCircleIcon>
              <span>Connect your wallet first</span>
            </div>
          ) : (
            <div role='alert' className='alert alert-info'>
              <span className='loading loading-ring loading-xs h-6 w-6 shrink-0 stroke-current'></span>
              <span>Connecting wallet... Status: {appState.account.status}</span>
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
          onChange={() => appState.setActiveTab('Liquidity')}
        />
        <div role='tabpanel' className='tab-content rounded-box'>
          <Liquidity appState={appState}></Liquidity>
        </div>

        <input
          type='radio'
          onChange={() => appState.setActiveTab('Redeem')}
          name='main_tabs'
          role='tab'
          className='tab ml-5'
          aria-label='Redeem'
        />
        <div role='tabpanel' className='tab-content  rounded-box'>
          <Redeem appState={appState}></Redeem>
        </div>

        <input
          type='radio'
          onChange={() => appState.setActiveTab('Unwrap')}
          name='main_tabs'
          role='tab'
          className='tab ml-5'
          aria-label='Unwrap'
        />
        <div role='tabpanel' className='tab-content bg-base-100 border-base-300 rounded-box p-6'>
          <Unwrap></Unwrap>
        </div>

        <input
          type='radio'
          onChange={() => appState.setActiveTab('Bridge')}
          name='main_tabs'
          role='tab'
          className='tab ml-5'
          aria-label='Bridge'
        />
        <div role='tabpanel' className='tab-content bg-base-100 border-base-300 rounded-box p-6'>
          <Bridge appState={appState}></Bridge>
        </div>

        <input
          type='radio'
          onChange={() => appState.setActiveTab('Faucet')}
          name='main_tabs'
          role='tab'
          className='tab ml-5'
          aria-label='Faucet'
        />
        <div role='tabpanel' className='tab-content bg-base-100 border-base-300 rounded-box p-6'>
          <Faucet></Faucet>
        </div>
      </div>
    </>
  )
}
