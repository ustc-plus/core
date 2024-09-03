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
import { erc20Abi, formatEther, formatUnits, parseEther, parseUnits } from 'viem'
import useInterval from 'use-interval'
import { useNotifications } from '@/context/Notifications'
import { isSupportedNetwork, ETH_CHAIN_NAMES } from '@/utils/network'
import { GetAbi, GetAddr } from '@/utils/web3'

function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

type Info = {
  unixtimestamp: number
  depositAddress: string
  ustcPrice: number
  minUsdt: number
  maxUsdt: number
}

type BinanceOrderStatus = -1 | 0 | 6 | 1

type StartMinting = {
  status?: BinanceOrderStatus
  timestamp?: number
  nftId?: number
  orderCompleted?: boolean
  orderCompletion?: string
  orderId?: number
  ustcPlusAmount?: string
  message?: string
}

// export const Liquidity = ({ address, tokenAddress, toFixed, onBalanceChange, className }: TokenBalanceProps) => {
export const Liquidity = () => {
  const { Add } = useNotifications()
  const account = useAccount()
  const [depositAmount, setDepositAmount] = useState<number>(0.0)
  const [connected, setConnected] = useState<boolean>(false)
  useAccountEffect({
    onConnect(data) {
      setConnected(true)
    },
    onDisconnect() {
      setConnected(false)
    },
  })
  const [allowanceAmount, setAllowanceAmount] = useState<number>(0)
  const [info, setInfo] = useState<Info>()
  const [lpNftAddress, setLpNftAddress] = useState<`0x${string}`>()
  const [lpManagerAddress, setLpManagerAddress] = useState<`0x${string}`>()
  const [usdtAddress, setUsdtAddress] = useState<`0x${string}`>()
  const [ustcPlusAddress, setUtcPlusAddress] = useState<`0x${string}`>()
  const [approved, setApproved] = useState<boolean>(false)
  const [processing, setProcessing] = useState<boolean>(false)
  const [mintingStarted, setMintingStarted] = useState<boolean>(false)
  const [orderStatus, setOrderStatus] = useState<BinanceOrderStatus>(-1)
  const [orderId, setOrderId] = useState<number>()
  const [ustcAmount, setUstcAmount] = useState<number>()
  const [nftId, setNftId] = useState<number>()
  const [amountAttempt, setAmountAttempt] = useState<number>(0)

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

  const { error: startMintingEstimateError } = useSimulateContract({
    query: {
      enabled:
        processing && approved && account.chain !== undefined && info !== undefined && lpManagerAddress !== undefined,
    },
    abi: GetAbi('lpManagerAbi'),
    address: lpManagerAddress,
    functionName: 'startMinting',
    args: [parseUnits(depositAmount.toString(), parseInt(process.env.NEXT_PUBLIC_USDT_DECIMALS!))],
  })

  const { error: endMintingEstimateError } = useSimulateContract({
    query: {
      enabled:
        mintingStarted &&
        processing &&
        approved &&
        account.chain !== undefined &&
        info !== undefined &&
        lpManagerAddress !== undefined,
    },
    abi: GetAbi('lpManagerAbi'),
    address: lpManagerAddress,
    functionName: 'endMinting',
    args: [nftId!, parseEther(ustcAmount!.toString())],
  })

  // Prepare approve transaction and it's result
  const { data: approveData, writeContract: writeApprove } = useWriteContract()
  const { data: startMintingData, writeContract: writeStartMinting } = useWriteContract()
  const { data: endMintingData, writeContract: writeEndMinting } = useWriteContract()

  // Approve transaction status
  const {
    isLoading: approveIsLoading,
    error: approveTxError,
    isSuccess: approveTxSuccess,
  } = useWaitForTransactionReceipt({
    hash: approveData,
  })

  const {
    isLoading: startMintingIsLoading,
    error: startMintingTxError,
    isSuccess: startMintingTxSuccess,
  } = useWaitForTransactionReceipt({
    hash: startMintingData,
  })

  const {
    isLoading: endMintingIsLoading,
    error: endMintingTxError,
    isSuccess: endMintingTxSuccess,
  } = useWaitForTransactionReceipt({
    hash: endMintingData,
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
      setProcessing(false)
      Add(`Approve error: ${approveTxError.cause}`, {
        type: 'error',
      })
    }
  }, [approveTxSuccess, approveTxError])

  useEffect(() => {
    if (startMintingTxSuccess) {
      Add(`Mint process started...`, {
        type: 'success',
        href: account.chain?.blockExplorers?.default.url
          ? `${account.chain.blockExplorers.default.url}/tx/${startMintingData}`
          : undefined,
      })
      Add(`Waiting server to mint USTC+...`, {
        type: 'success',
        href: account.chain?.blockExplorers?.default.url
          ? `${account.chain.blockExplorers.default.url}/tx/${startMintingData}`
          : undefined,
      })
      setMintingStarted(true)
      onStartMinting(startMintingData!)
    } else if (startMintingTxError) {
      setProcessing(false)
      Add(`Approve error: ${startMintingTxError.cause}`, {
        type: 'error',
      })
    }
  }, [startMintingTxSuccess, startMintingTxError])

  useEffect(() => {
    if (endMintingTxSuccess) {
      Add(`Congratulations! Mint process ended!`, {
        type: 'success',
        href: account.chain?.blockExplorers?.default.url
          ? `${account.chain.blockExplorers.default.url}/tx/${endMintingData}`
          : undefined,
      })
      setMintingStarted(false)
      setProcessing(false)
      setNftId(undefined)
      setOrderId(undefined)
      setOrderStatus(-1)
    } else if (endMintingTxError) {
      setProcessing(false)
      Add(`Approve error: ${endMintingTxError.cause}`, {
        type: 'error',
      })
    }
  }, [endMintingTxSuccess, endMintingTxError])

  // Every 1 second fetch the trading balance from server
  useInterval(async () => {
    const url = process.env.NEXT_PUBLIC_BACKEND_URL!

    const response = await fetch(`${url}/hello`)
    const data = await response.json()

    if (data['message'] !== undefined) {
      console.error('Failed to get information: ' + data['message'])
    } else {
      setInfo(data as Info)
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
      setAllowanceAmount(parseFloat(formatEther(parsed)))
    }
  }, [allowance])

  useEffect(() => {
    if (allowanceAmount == 0) {
      setApproved(false)
    } else {
      setApproved(allowanceAmount >= depositAmount)
    }
  }, [allowanceAmount, depositAmount])

  const onStartMinting = async (txid: string) => {
    if (amountAttempt > 3) {
      Add(`Server error: 3 attempts, but still no result. contact us on telegram :(`, { type: 'error' })
      setAmountAttempt(0)
      setProcessing(false)
      setMintingStarted(false)
      return
    }
    const url = process.env.NEXT_PUBLIC_BACKEND_URL!

    const response = await fetch(`${url}/start-minting/${account.chainId}/${txid}`)
    const data = await response.json()

    if (data['message'] !== undefined && (data['message'] as string).length > 0) {
      Add(`Server error: ${data['message']}`, {
        type: 'error',
      })
      setProcessing(false)
      setMintingStarted(false)
      return
    }

    let startMinting = data as StartMinting
    // Everything is ready, and order is completed.
    if (startMinting.orderCompleted) {
      Add(`${startMinting.ustcPlusAmount} were minted successfully. Let's mint LP`, { type: 'success' })
      setUstcAmount(parseInt(startMinting.ustcPlusAmount!))
      setNftId(startMinting.nftId!)
      onMint()
    } else {
      // Order was not completed, let's first check the deposit stats
      if (startMinting.status === -1) {
        Add(`Deposit was not received by the server, tring again in 2 seconds`, { type: 'warning' })
        setAmountAttempt(amountAttempt + 1)
        await timeout(2000)
        onStartMinting(txid)
        return
      } else {
        Add(`Deposit is in pending, ${startMinting.orderCompletion}`, { type: 'info' })
        await timeout(2000)
        setAmountAttempt(amountAttempt + 1)
        onStartMinting(txid)
      }
    }
  }

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
    if (info === undefined) {
      Add(`Server error: didn't get the information about pricing, wait and try again later...`, { type: 'error' })
      return
    }
    if (depositAmount < info.minUsdt) {
      Add(`Minimum ${info.minUsdt} USDT must be entered`, { type: 'error' })
      return
    } else if (depositAmount > info.maxUsdt) {
      Add(`Maximum ${info.maxUsdt} USDT must be entered`, { type: 'error' })
      return
    }

    if (!processing) {
      setProcessing(true)
    }

    if (!approved) {
      if (approveEstimateError) {
        setProcessing(false)
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

    if (!mintingStarted) {
      if (startMintingEstimateError) {
        setProcessing(false)
        Add(`Mint starting simulation failed: ${startMintingEstimateError.cause}`, {
          type: 'error',
        })
      }

      writeStartMinting({
        abi: GetAbi('lpManagerAbi'),
        address: lpManagerAddress!,
        functionName: 'startMinting',
        args: [parseUnits(depositAmount.toString(), parseInt(process.env.NEXT_PUBLIC_USDT_DECIMALS!))],
      })
      return
    }

    if (endMintingEstimateError) {
      setProcessing(false)
      Add(`Mint ending failed: ${endMintingEstimateError.cause}`, {
        type: 'error',
      })
    }

    writeEndMinting({
      abi: GetAbi('lpManagerAbi'),
      address: lpManagerAddress!,
      functionName: 'endMinting',
      args: [nftId!, parseEther(ustcAmount!.toString())],
    })

    //setProcessing(false);
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
            onChange={(e) => setDepositAmount(parseFloat(e.target.value))}
            disabled={processing}
          />
          <span className={'badge ' + processing ? 'badge-neutral-content' : 'badge-info'}>USDT</span>
        </label>
        <div
          className={processing ? 'tooltip tooltip-open tooltip-secondary' : ''}
          data-tip="Don't refresh the browser">
          <button className='mx-5 btn btn-primary flex-none' onClick={() => onMint()} disabled={processing}>
            {processing ? <span className='loading loading-spinner text-warning'></span> : ''} Mint
          </button>
        </div>
      </div>
      <ul className='content-center steps flex'>
        <li className='flex-1 step step-primary'>Approve USDT</li>
        <li className={'flex-1 step' + (approved ? ' step-primary' : '')}>Buy USTC+</li>
        <li className={'flex-1 step' + (mintingStarted ? ' step-primary' : '')}>Mint Liquidity NFT</li>
      </ul>
      <div className='divider'></div>
      <div className='card bg-base-300 rounded-box grid h-30'>
        Minimum USDT = {info !== undefined ? info.minUsdt : 0.0}
        <br />
        Estimated Liquidity Pool amount:{' '}
        {info !== undefined && depositAmount > 0
          ? (depositAmount / 2).toFixed(4) + ' USDT'
          : 'calculating USDT...'} and{' '}
        {info !== undefined && depositAmount > 0
          ? (depositAmount / 2 / info.ustcPrice).toFixed(4) + ' USTC+'
          : 'calculating USDT...'}
      </div>
    </div>
  )
}
