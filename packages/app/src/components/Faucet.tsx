'use client'
import { useAccount, useAccountEffect } from 'wagmi'
import { useEffect, useState } from 'react'

export const Faucet = () => {
  const account = useAccount()
  const [connected, setConnected] = useState<boolean>(false)
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
    }
  }, [connected])

  return (
    <div>
      {connected ? (
        <div role='alert' className='alert alert-neutral'>
          Fauced is disabled and will be available on Testnet in October...
        </div>
      ) : (
        // <h3 className='text-xl mb-2'>To test, get the fake tokens</h3>
        //   <select className='select w-full max-w-xs' value={1}>
        //     <option value={1}>Ethereum</option>
        //   </select>
        //   <div className='divider'></div>
        //   <button className='mx-5 btn btn-primary'>Unwrap</button>
        //   <p>You will get 100 Fake USDT on Sepolia Testnet</p>
      )}
    </div>
  )
}
