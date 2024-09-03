'use client'
import {
  useAccount,
  useAccountEffect,
  useBalance,
  useReadContract,
  useSimulateContract,
  useWaitForTransactionReceipt,
  useWriteContract,
} from 'wagmi'
import { useEffect, useState } from 'react'
import { erc20Abi, formatEther, parseEther } from 'viem'
import useInterval from 'use-interval'
import { useNotifications } from '@/context/Notifications'
import { isSupportedNetwork, ETH_CHAIN_NAMES } from '@/utils/network'
import { GetAbi, GetAddr } from '@/utils/web3'

type Hello = {
  unixtimestamp: number
  depositAddress: string
  ustcPrice: number
  minUsdt: number
  maxUsdt: number
}

// export const Liquidity = ({ address, tokenAddress, toFixed, onBalanceChange, className }: TokenBalanceProps) => {
export const Liquidity = () => {
  const { Add } = useNotifications()
  const account = useAccount()
  const [connected, setConnected] = useState<boolean>(false)
  useAccountEffect({
    onConnect(data) {
      setConnected(true)
    },
    onDisconnect() {
      setConnected(false)
    },
  })
  const [info, setInfo] = useState<Hello>()
  const [lpNftAddress, setLpNftAddress] = useState<`0x${string}`>()
  const [lpManagerAddress, setLpManagerAddress] = useState<`0x${string}`>()
  const [usdtAddress, setUsdtAddress] = useState<`0x${string}`>()
  const [ustcPlusAddress, setUtcPlusAddress] = useState<`0x${string}`>()
  const [approved, setApproved] = useState<boolean>(false)

  // Set the Smartcontract addresses.
  // Depends on:
  //  network change,
  //  wallet connect,
  //  wallet disconnect
  useEffect(() => {
    if (!connected) {
      setLpNftAddress(undefined)
      setLpManagerAddress(undefined)
      setUsdtAddress(undefined)
      setUtcPlusAddress(undefined)
    } else {
      console.log(`Get LP Address`)
      setLpNftAddress(GetAddr('lpNftAddress', account.chainId!))
      setLpManagerAddress(GetAddr('lpManagerAddress', account.chainId!))
      setUsdtAddress(GetAddr('testErc20Address', account.chainId!))
      setUtcPlusAddress(GetAddr('ustcPlusAddress', account.chainId!))
    }
  }, [connected])

  // Simulate approving Lp Manager to spend user's tokens.
  // Depends on:
  //  user didn't approve
  //  user connected
  //  smartcontract addresses are set
  const { error: approveEstimateError } = useSimulateContract({
    query: {
      enabled:
        !approved &&
        account.chain !== undefined &&
        usdtAddress !== undefined &&
        info !== undefined &&
        lpManagerAddress !== undefined,
    },
    abi: GetAbi('testErc20Abi'),
    address: usdtAddress,
    functionName: 'approve',
    args: [lpManagerAddress!, parseEther('10000000')],
  })

  // Prepare approve transaction and it's result
  const { data: approveData, writeContract: writeApprove } = useWriteContract()

  // Approve transaction status
  const {
    isLoading: approveIsLoading,
    error: approveTxError,
    isSuccess: approveTxSuccess,
  } = useWaitForTransactionReceipt({
    hash: approveData,
  })

  useEffect(() => {
    if (approveTxSuccess) {
      Add(`Approved`, {
        type: 'success',
        href: account.chain?.blockExplorers?.default.url
          ? `${account.chain.blockExplorers.default.url}/tx/${approveData}`
          : undefined,
      })
      setApproved(true)
      onMint()
    } else if (approveTxError) {
      Add(`Approve error: ${approveTxError.cause}`, {
        type: 'error',
      })
    }
  }, [approveTxSuccess, approveTxError])

  // Every 1 second fetch the trading balance from server
  useInterval(async () => {
    const url = process.env.NEXT_PUBLIC_BACKEND_URL!

    const response = await fetch(`${url}/hello`)
    const data = await response.json()

    if (data['message'] !== undefined) {
      console.error('Failed to get information: ' + data['message'])
    } else {
      setInfo(data as Hello)
    }
  }, 1000)

  // Determine whether the user approved tokens or not
  const { data: allowance } = useReadContract({
    query: {
      enabled: account.status === 'connected' && usdtAddress !== undefined && lpManagerAddress !== undefined,
    },
    abi: GetAbi('testErc20Abi'),
    address: usdtAddress,
    functionName: 'allowance',
    args: [account.address!, lpManagerAddress!],
  })

  // Once the allowance returned, set the status
  useEffect(() => {
    if (account.status !== 'connected' || info === undefined) {
      setApproved(false)
      return
    }
    const parsed = allowance as bigint | undefined
    if (parsed !== undefined) {
      if (parseFloat(formatEther(parsed)) >= info.minUsdt) {
        setApproved(true)
        return
      }
    }
    setApproved(false)
  }, [allowance, info])

  const onMint = () => {
    console.log(`On: ${account.status} ${account.chainId} ${account.address}`)
    if (account.status !== 'connected') {
      Add(`Wallet error: Please connect your wallet`, {
        type: 'error',
      })
      return
    }
    if (!isSupportedNetwork(account.chain?.id)) {
      Add(`Wallet error: Unsupported network. Switch to one of ${ETH_CHAIN_NAMES}`, { type: 'error' })
      return
    }

    if (!approved) {
      if (approveEstimateError) {
        console.error(approveEstimateError)
        Add(`Approve simulation failed: ${approveEstimateError.cause}`, {
          type: 'error',
        })
        return
      }
      writeApprove({
        abi: GetAbi('testErc20Abi'),
        address: usdtAddress!,
        functionName: 'approve',
        args: [lpManagerAddress!, parseEther('10000000')],
      })
      return
    }
  }

  return (
    <div>
      <h3 className='text-xl mb-2'>Create USTC+ and Ustc+ Liquidity</h3>
      <div className='flex my-10'>
        <label className='input input-bordered flex-1 flex items-center gap-2 max-w-xs'>
          <input
            type='number'
            placeholder={info !== undefined ? info.minUsdt.toString() : '0.0'}
            min={info !== undefined ? info.minUsdt : 0.0}
            max={info !== undefined ? info.maxUsdt : 0.0}
            className='grow'
          />
          <span className='badge badge-info'>USDT</span>
        </label>
        <button className='mx-5 btn btn-primary flex-none' onClick={() => onMint()}>
          Mint
        </button>
      </div>
      <ul className='content-center steps flex'>
        <li className='flex-1 step step-primary'>Approve USDT</li>
        <li className={'flex-1 step' + (approved ? ' step-primary' : '')}>Buy USTC+</li>
        <li className='flex-1 step'>Mint Liquidity NFT</li>
      </ul>
      <div className='divider'></div>
      <div className='card bg-base-300 rounded-box grid h-30'>
        Minimum USDT = {info !== undefined ? info.minUsdt : 0.0}
        <br />
        Estimated received:
        <br />
        USDC = 40
        <br />
        USTC+ = 200
      </div>
    </div>
  )
}
