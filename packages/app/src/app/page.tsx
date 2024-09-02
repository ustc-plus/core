'use client'

import { CardList } from '@/components/CardList'
import { SITE_DESCRIPTION, SITE_NAME } from '@/utils/site'
import { EXAMPLE_ITEMS } from './examples/examples'

export default function Home() {
  return (
    <>
      <h2 className='text-2xl mb-2'>{SITE_NAME}</h2>
      <p>{SITE_DESCRIPTION}</p>
      <div role='tablist' className='mt-4 tabs tabs-lifted'>
        <input type='radio' name='main_tabs' role='tab' className='tab' aria-label='Liquidity' defaultChecked={true} />
        <div role='tabpanel' className='tab-content bg-base-100 border-base-300 rounded-box p-6'>
          <h3 className='text-xl mb-2'>Create USTC+ and Ustc+ Liquidity</h3>
          <input type='text' placeholder='usdc' className='input input-bordered w-full max-w-xs' />
          <button className='mx-5 btn btn-primary'>Mint</button>
          <div className='content-center'>
            <ul className='steps'>
              <li className='step step-primary'>Approve USDC</li>
              <li className='step step-primary'>Start Minting</li>
              <li className='step'>Buy USTC+</li>
              <li className='step'>Mint Liquidity NFT</li>
            </ul>
          </div>
          <div className='divider'></div>
          <div className='card bg-base-300 rounded-box grid h-20 place-items-center'>
            Estimated received:
            <br />
            USDC = 40
            <br />
            USTC+ = 200
          </div>
        </div>

        <input type='radio' name='main_tabs' role='tab' className='tab' aria-label='Redeem' />
        <div role='tabpanel' className='tab-content bg-base-100 border-base-300 rounded-box p-6'>
          <h3 className='text-xl mb-2'>Redeem your USDC and USTC+</h3>
          <div>
            <div className='card card-compact bg-accent text-accent-content w-96 shadow-xl'>
              <figure>
                <h2 className='card-title content-center'>Lp #1!</h2>
              </figure>
              <div className='card-body'>
                <p>Liquidity balance</p>
                <p>USDC: 100</p>
                <p>
                  USTC+: 1342 <span className='badge badge-md badge-secondary'>+343 fee</span>
                </p>
                <div className='card-actions justify-end'>
                  <button
                    className='btn btn-primary'
                    onClick={() => (document.getElementById('my_modal_2') as HTMLDialogElement)?.showModal()}>
                    redeem (Slash 23%)
                  </button>
                </div>
                <div className='divider'></div>
                <p>To get fully: 100 more days</p>
              </div>
            </div>
          </div>
        </div>

        <input type='radio' name='main_tabs' role='tab' className='tab' aria-label='Unwrap' />
        <div role='tabpanel' className='tab-content bg-base-100 border-base-300 rounded-box p-6'>
          <h3 className='text-xl mb-2'>Unwrap USTC+ to USTC</h3>
          <input
            key='redeem_input'
            type='text'
            placeholder='Amount in Percent'
            className='input input-bordered w-full max-w-xs'
          />
          <input key='redeem_range' type='range' min={0} max='100' className='range range-primary' />
          <button className='mx-5 btn btn-primary'>Redeem (23% slashing)</button>
          <input type='text' placeholder='Luna Classic Address' className='input input-bordered w-full max-w-xs' />
          <button className='mx-5 btn btn-primary'>Unwrap</button>
          <div className='divider'></div>
          <div>
            Burning your USTC+ on <span className='badge badge-md badge-accent'>Ethereum</span> in exchange for USTC on{' '}
            <span className='badge badge-md badge-accent'>Luna Classic</span> network.
          </div>
        </div>

        <input type='radio' name='main_tabs' role='tab' className='tab' aria-label='Bridge' />
        <div role='tabpanel' className='tab-content bg-base-100 border-base-300 rounded-box p-6'>
          <h3 className='text-xl mb-2'>
            Bridge at most <span className='badge badge-md badge-accent'>231 USTC+ between networks</span>
          </h3>
          <select className='select w-full max-w-xs' value={1}>
            <option value={1}>Ethereum</option>
          </select>
          <div className='divider divider-horizontal'>To</div>
          <select className='select w-full max-w-xs' value={15421}>
            <option value={15421}>Linea</option>
          </select>
          <br />
          <input key='redeem_input' type='text' placeholder='' className='input input-bordered w-full max-w-xs' /> USTC+
          <input key='redeem_range' type='range' min={0} max='100' className='range range-primary' />
          <button className='mx-5 btn btn-primary'>Unwrap</button>
        </div>
      </div>

      <dialog id='my_modal_2' className='modal modal-bottom sm:modal-middle'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg'>
            Redeem from Lp #1 for <span className='badge badge-md badge-accent'>34 USDC</span> and{' '}
            <span className='badge badge-md badge-accent'>45 USTC+</span>
          </h3>
          <div className='py-4'>
            <input
              key='redeem_input'
              type='text'
              placeholder='Amount in Percent'
              className='input input-bordered w-full max-w-xs'
            />
            <input key='redeem_range' type='range' min={0} max='100' className='range range-primary' />
            <button className='mx-5 btn btn-primary'>Redeem (23% slashing)</button>
            <div className='divider'></div>
            <div>Redeeming 100% of tokens will burn this NFT permanently</div>
          </div>
        </div>
        <form method='dialog' className='modal-backdrop'>
          <button>close</button>
        </form>
      </dialog>
    </>
  )
}
