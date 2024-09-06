'use client'
import { useAccount, useAccountEffect, useBalance, useReadContract } from 'wagmi'
import { useEffect, useState } from 'react'
import { useNotifications } from '@/context/Notifications'
import { GetAbi, GetAddr } from '@/utils/web3'
import { NftType } from '@/utils/types'
import { ETH_CHAINS } from '@/utils/network'
import { Chain } from 'viem/chains'
import { formatEther, parseEther } from 'viem'
import { useEstimateSendFee } from '@/oft/useEstimateSendFee'
import { useFormState } from '@/oft/useFormState'
import { useSendFrom } from '@/oft/useSendFrom'

const otherChains = (chainId: number): Chain[] => {
  if (!chainId) {
    return ETH_CHAINS
  }

  let chains: Chain[] = []
  for (let chain of ETH_CHAINS) {
    if (chain.id !== chainId) {
      chains.push(chain)
    }
  }

  return chains
}

export const Bridge = () => {
  const { Add } = useNotifications()
  const account = useAccount()
  const [connected, setConnected] = useState<boolean>(false)
  const [destinationChains, setDestinationChains] = useState<Chain[]>([])
  const [ustcPlusAddress, setUstcPlusAddress] = useState<`0x${string}`>()
  const [processing, setProcessing] = useState<boolean>(false)
  const formState = useFormState()

  useAccountEffect({
    onConnect() {
      setConnected(true)
      if (account) {
        formState.setRecipient(account.address!)
        formState.setOftAddress(GetAddr('ustcPlusAddress', account?.chain!.id!))
      }
    },
    onDisconnect() {
      setConnected(false)
    },
  })

  useEffect(() => {
    if (connected) {
      const destChains = otherChains(account!.chainId!)
      if (destChains.length === 0) {
        Add(`No bridged networks from ${account!.chain?.name}`, { type: 'error' })
        return
      }
      setDestinationChains(destChains)
      formState.setDestinationChain(destChains[0].id)
      setUstcPlusAddress(GetAddr('ustcPlusAddress', account.chainId!))
    }
  }, [connected])

  const { data: balanceAmount, error: balanceError } = useBalance({
    query: {
      enabled: connected,
    },
    address: account?.address,
    token: ustcPlusAddress,
    unit: 'ether',
  })

  useEffect(() => {
    if (balanceError) {
      Add(`Fetching USTC+ balance error: ${balanceError.message}`, {
        type: 'error',
      })
    }
  }, [balanceError])

  const {
    isSuccess: estimateSendFeeSuccess,
    error: estimateSendFeeError,
    nativeFee,
  } = useEstimateSendFee({ formState, processing })

  useEffect(() => {
    console.log(
      `Estimated Status; status=${estimateSendFeeSuccess}, error=${estimateSendFeeError}, nativeFee=${nativeFee}`
    )
    if (estimateSendFeeError) {
      Add(`Error to estimate Layerzero fee: ${estimateSendFeeError}`, { type: 'error' })
      setProcessing(false)
    } else if (estimateSendFeeSuccess) {
      Add(`Layerzero fee estimated: ${formatEther(nativeFee)} native token`, { type: 'success' })
    }
  }, [estimateSendFeeSuccess, estimateSendFeeError])

  const { writeContract, hash, writeIsSuccess, writeError, simulateIsSuccess, simulateError, simulateData } =
    useSendFrom({
      formState,
      enabled: estimateSendFeeSuccess && processing,
      nativeFee,
    })

  useEffect(() => {
    if (simulateIsSuccess) {
      Add(`Transaction should go successfully...`, {
        type: 'success',
      })
      writeContract(simulateData.request)
    } else if (simulateError) {
      Add(`${simulateError}`, {
        type: 'error',
      })
      setProcessing(false)
    }
  }, [simulateIsSuccess, simulateError])

  useEffect(() => {
    setProcessing(false)
    if (writeIsSuccess) {
      Add(`Transferred! check on Layerzeroscan.com`, {
        type: 'success',
        href: `https://layerzeroscan.com/tx/${hash}`,
      })
      formState.setValue('0')
    } else if (writeError) {
      Add(`${writeError}`, {
        type: 'error',
      })
    }
  }, [writeIsSuccess, writeError])

  let onSubmit = () => {
    if (formState.value.length === 0 || !parseFloat(formState.value)) {
      Add(`Set transfer amount must be above 0`, { type: 'error' })
      return
    }
    if (formState.destinationChain === 0) {
      Add(`Set valid destination network`, { type: 'error' })
      return
    }
    if (formState.recipient === undefined) {
      Add(`Set valid to address`, { type: 'error' })
      return
    }

    setProcessing(true)

    Add(`Estimating ... fees and transaction parameters`, { type: 'info' })
  }

  return (
    <div>
      {connected ? (
        <div className='p-5'>
          <h3 className='text-xl mb-2'>
            Bridge USTC+ from{' '}
            <span className='badge badge-md badge-accent'>{!account ? 'current network' : account.chain?.name}</span>
          </h3>
          <label className='form-control w-full my-5'>
            <div className='label'>
              <span className='label-text'>Destination network</span>
            </div>
            <select
              className='select select-bordered'
              value={formState.destinationChain}
              onChange={(e) => {
                formState.setDestinationChain(parseInt(e.target.value))
              }}>
              {destinationChains.map((chain) => (
                <option value={chain.id}>{chain.name}</option>
              ))}
            </select>
          </label>
          <label className='form-control w-full my-5'>
            <div className='label'>
              <span className='label-text'>UTC+ Transfer amount:</span>
              <span className='label-text-alt'>
                Your balance:{' '}
                {balanceAmount ? (
                  formatEther(balanceAmount.value) + ' USTC+'
                ) : balanceError ? (
                  <span className='text-error'>{balanceError.message}</span>
                ) : (
                  <span className='loading loading-spinner text-warning'></span>
                )}
              </span>
            </div>
            <input
              key='bridge_input'
              type='number'
              placeholder='0.0'
              value={formState.value}
              max={balanceAmount ? formatEther(balanceAmount.value) : '0'}
              className='input input-bordered w-full mb-2'
              onChange={(e) => {
                isNaN(parseFloat(e.target.value)) ? formState.setValue('0') : formState.setValue(e.target.value)
              }}
            />{' '}
            <input
              key='bridge_range'
              type='range'
              min={0}
              defaultValue={0}
              value={formState.value}
              max={balanceAmount ? formatEther(balanceAmount.value) : '0'}
              className='range range-primary w-full'
              onChange={(e) => {
                isNaN(parseFloat(e.target.value)) ? formState.setValue('0') : formState.setValue(e.target.value)
              }}
            />
          </label>
          <label className='form-control w-full my-5'>
            <div className='label'>
              <span className='label-text'>To address:</span>
            </div>
            <input
              key='bridge_to'
              type='text'
              placeholder='0x...'
              value={formState.recipient}
              className='input input-bordered w-full mb-2'
              onChange={(e) => formState.setRecipient(e.target.value)}
            />
          </label>
          <button className='btn btn-primary w-full my-5' onClick={() => onSubmit()} disabled={processing}>
            {processing ? <span className='loading loading-spinner text-warning'></span> : ''} Bridge
          </button>
          <div className='divider'></div>
          <div className='text-center text-gray-100 text-sm'>Powered by LayerZero</div>
        </div>
      ) : (
        <div className='skeleton h-32 w-full'></div>
      )}
    </div>
  )
}
