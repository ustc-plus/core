'use client'

import { CardList } from '@/components/CardList'
import { SITE_DESCRIPTION, SITE_NAME } from '@/utils/site'
import { EXAMPLE_ITEMS } from './examples/examples'
import { Liquidity } from '@/components/Liquidity'
import { Redeem } from '@/components/Redeem'
import { useAccount } from 'wagmi'
import { InformationCircleIcon } from '@heroicons/react/24/outline'
import { Unwrap } from '@/components/Unwrap'
import { Bridge } from '@/components/Bridge'

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
          <h3 className='text-xl mb-2'>To test, get the fake tokens</h3>
          <select className='select w-full max-w-xs' value={1}>
            <option value={1}>Ethereum</option>
          </select>
          <div className='divider'></div>
          <button className='mx-5 btn btn-primary'>Unwrap</button>
          <p>You will get 100 Fake USDT on Sepolia Testnet</p>
        </div>
      </div>
    </>
  )
}
