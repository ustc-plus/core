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
import { erc20Abi, formatEther, formatUnits, parseEther, parseUnits } from 'viem'
import useInterval from 'use-interval'
import { useNotifications } from '@/context/Notifications'
import { stableCoinDecimals, networkName } from '@/utils/network'
import { GetAbi, GetAddr } from '@/utils/web3'
import LiquidityProcessList from './LiquidityProcessList'
import { useLiquidityProcesses } from '@/context/LiquidityProcesses'
import { NftParams, NftType } from '@/utils/types'
import dayjs from 'dayjs'

type Info = {
  unixtimestamp: number
  depositAddress: string
  ustcPrice: number
  minUsdt: number
  maxUsdt: number
}

type BinanceOrderStatus = -1 | 0 | 6 | 1

type Signature = {
  v: string
  r: string
  s: string
}

type MintingResult = {
  status?: BinanceOrderStatus
  timestamp?: number
  nftId?: number
  orderCompleted?: boolean
  orderCompletion?: string
  orderId?: number
  ustcPlusAmount?: string
  message?: string
  mintCompleted?: boolean
  signature?: Signature
}

type Props = {
  lpNftAddress: `0x${string}`
  nft: NftType
}

const percentageOfRemaining = (percentage: number, remaining: number, slashing: number): string => {
  if (!remaining || !percentage) {
    return '0'
  }
  const redeemable = (remaining / 100) * percentage
  if (!slashing) {
    return redeemable.toFixed(4)
  }

  return (redeemable - (redeemable / 100) * slashing).toFixed(4)
}

const percentageOfSlashing = (percentage: number, remaining: number, slashing: number): string => {
  if (!remaining || !percentage || !slashing) {
    return '0'
  }
  const redeemable = (remaining / 100) * percentage
  return ((redeemable / 100) * slashing).toFixed(4)
}

const slashEndTime = (startTime: number): string => {
  if (!startTime) {
    return 'loading...'
  }
  return dayjs.unix(startTime + 63120000).fromNow() // 63 million seconds are 24 months
}

// returns amount of slashing percents
const slashCurrentAmount = (startTime: number): number => {
  const now = Math.floor(Date.now() / 1000)

  const monthsPassed = Math.floor((now - startTime) / 2592000) // 2.5 million seconds in 30 days or 1% per 30 days
  if (monthsPassed > 24) {
    return 0
  } else {
    return 24 - monthsPassed
  }
}

export const RedeemCard = ({ lpNftAddress, nft }: Props) => {
  const { Add } = useNotifications()
  const account = useAccount()
  const [percent, setPercent] = useState<number>()
  const [nftParams, setNftParams] = useState<NftParams>()
  const [processing, setProcessing] = useState<boolean>(false)

  const {
    data: nftParamsOnNetwork,
    error: nftParamsOnNetworkError,
    refetch: refetchNftParamsOnNetwork,
  } = useReadContract({
    abi: GetAbi('lpNftAbi'),
    address: lpNftAddress,
    functionName: 'paramsOf',
    args: [nft.tokenId],
  })

  useEffect(() => {
    if (nftParamsOnNetworkError) {
      Add(`Fetching supply regulator #${nft.tokenId} parameter error: ${nftParamsOnNetworkError.message}`, {
        type: 'error',
      })
    }
    if (nftParamsOnNetwork === undefined || nftParamsOnNetwork === null) {
      return
    }
    const parsed: NftParams = {
      usdcAmount: (nftParamsOnNetwork as any[])[0] as bigint,
      ustcPlusAmount: (nftParamsOnNetwork as any[])[1] as bigint,
      usdcTaken: (nftParamsOnNetwork as any[])[2] as bigint,
      startTime: parseInt(((nftParamsOnNetwork as any[])[4] as bigint).toString()),
      // The following parameters starting with '_' are calculated by base parameters
      _slashPercentage: 0,
      _remainingUsdt: 0,
      _remainingUstcPlus: 0,
    }

    parsed._slashPercentage = slashCurrentAmount(parsed.startTime)
    parsed._remainingUsdt = parseFloat(
      formatUnits(parsed.usdcAmount - parsed.usdcTaken, stableCoinDecimals(account!.chainId!))
    )
    const initialUsdt = parseFloat(formatUnits(parsed.usdcAmount, stableCoinDecimals(account!.chainId!)))
    const percentage = initialUsdt / 100
    const remainingPercentage = parsed._remainingUsdt / percentage
    const initialUstcPercentage = parseFloat(formatEther(parsed.ustcPlusAmount)) / 100
    parsed._remainingUstcPlus = initialUstcPercentage * remainingPercentage

    console.log(parsed)

    setNftParams(parsed)
  }, [nftParamsOnNetwork, nftParamsOnNetworkError])

  const { error: redeemEstimateError } = useSimulateContract({
    query: {
      enabled:
        account !== undefined &&
        account.status === 'connected' &&
        percent !== undefined &&
        percent > 0 &&
        percent <= 100,
    },
    abi: GetAbi('lpNftAbi'),
    address: lpNftAddress,
    functionName: 'redeem',
    args: [nft.tokenId, percent ? percent : 0],
  })

  const { data: redeemData, writeContract: writeRedeem } = useWriteContract()

  const { error: redeemTxError, isSuccess: redeemTxSuccess } = useWaitForTransactionReceipt({
    hash: redeemData,
  })

  useEffect(() => {
    setProcessing(false)
    if (redeemTxSuccess) {
      Add(`Redeemed...`, {
        type: 'success',
        href: account.chain?.blockExplorers?.default.url
          ? `${account.chain.blockExplorers.default.url}/tx/${redeemData}`
          : undefined,
      })
      refetchNftParamsOnNetwork()
      setPercent(0)
      // Make sure modal is closed and everything is updated
    } else if (redeemTxError) {
      Add(`Approve error: ${redeemTxError.cause}`, {
        type: 'error',
      })
    }
  }, [redeemTxSuccess, redeemTxError])

  const onRedeem = () => {
    if (!account || account.status !== 'connected') {
      Add(`Wallet error: Please connect your wallet`, {
        type: 'error',
      })
      return
    }

    if (!nftParams) {
      Add(`No nft parameters set, refresh the page`, { type: 'error' })
      return
    }

    if (!percent || percent > 100) {
      Add(`Percent must be between 1 and 100`, { type: 'error' })
      return
    }

    setProcessing(true)

    if (redeemEstimateError) {
      setProcessing(false)
      Add(`Redeem from #${nft.tokenId} simulation failed: ${redeemEstimateError.cause}`, {
        type: 'error',
      })
      return
    }

    writeRedeem({
      abi: GetAbi('lpNftAbi'),
      address: lpNftAddress!,
      functionName: 'redeem',
      args: [nft.tokenId!, percent!],
    })
  }

  return (
    <div className='collapse mt-10'>
      <input type='checkbox' />
      <div className='collapse-title card card-compact w-full bg-base-200 border-base-300 h-40 shadow-xl '>
        <figure className='bg-base-100 h-20 m-0'>
          <h2 className='card-title content-center text-3xl	h-20'>Supply Regulator #${nft.tokenId}!</h2>
        </figure>
        <div className='card-body h-20 grid grid-cols-2 p-10'>
          <div>
            USDC: <span className='text-green-300'>{!nftParams ? '0' : nftParams._remainingUsdt!}</span>
          </div>
          <div>
            USTC+: <span className='text-green-300'>{!nftParams ? '0' : nftParams._remainingUstcPlus!}</span>
          </div>
          <div>
            Earned Ustc+: <span className='text-green-400'>23</span>
          </div>
          <div>
            Time to fully unlock:{' '}
            <span className='text-green-400'>{!nftParams ? 'loading...' : slashEndTime(nftParams.startTime!)}</span>
          </div>
        </div>
      </div>

      <div className='collapse-content mt-10 card card-compact w-full bg-base-200 border-base-300 h-60 shadow-xl p-0'>
        <label className='input input-bordered flex items-center gap-2 rounded-t-lg rounded-b-none'>
          <span className='font-bold'>Unlock </span>
          {' %'}
          <input
            type='number'
            placeholder='0%'
            value={percent}
            className='grow'
            onChange={(e) => {
              isNaN(parseFloat(e.target.value)) ? setPercent(0.0) : setPercent(parseFloat(e.target.value))
            }}
          />
        </label>
        <div className='px-6'>
          <input
            type='range'
            min={0}
            max='100'
            defaultValue='0'
            className='range my-5'
            value={percent}
            onChange={(e) => {
              isNaN(parseFloat(e.target.value)) ? setPercent(0.0) : setPercent(parseFloat(e.target.value))
            }}
          />
        </div>
        <div className='card-body grid grid-cols-2 px-6'>
          <div>
            USDC:{' '}
            <span className='text-green-300'>
              {!nftParams || !percent
                ? '0'
                : percentageOfRemaining(percent, nftParams._remainingUsdt!, nftParams._slashPercentage!)}
            </span>
            <span className='text-gray-300'>
              {' '}
              Slashing fee{' '}
              {!nftParams || !percent
                ? '0'
                : percentageOfSlashing(percent, nftParams._remainingUsdt!, nftParams._slashPercentage!)}
            </span>
          </div>
          <div>
            USTC+:{' '}
            <span className='text-green-300'>
              {!nftParams || !percent
                ? '0'
                : percentageOfRemaining(percent, nftParams._remainingUstcPlus!, nftParams._slashPercentage!)}
            </span>
            <span className='text-gray-300'>
              {' '}
              Slashing fee{' '}
              {!nftParams || !percent
                ? '0'
                : percentageOfSlashing(percent, nftParams._remainingUstcPlus!, nftParams._slashPercentage!)}
            </span>
          </div>
        </div>
        <button
          className='btn btn-primary justify-center rounded-b-lg rounded-t-none -mb-4'
          onClick={() => onRedeem()}
          disabled={processing}>
          {processing ? <span className='loading loading-spinner text-warning'></span> : ''}
          Redeem {!nftParams ? ' (calculating)' : '(Slash ' + nftParams._slashPercentage + '%)'}
        </button>
      </div>
    </div>
  )
}
