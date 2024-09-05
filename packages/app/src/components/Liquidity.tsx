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
  signature?: Signature
}

// export const Liquidity = ({ address, tokenAddress, toFixed, onBalanceChange, className }: TokenBalanceProps) => {
export const Liquidity = () => {
  const { Add } = useNotifications()
  const account = useAccount()
  const [depositAmount, setDepositAmount] = useState<number>(0.0)
  const [connected, setConnected] = useState<boolean>(false)
  useAccountEffect({
    onConnect() {
      setConnected(true)
    },
    onDisconnect() {
      setConnected(false)
    },
  })
  const [allowanceAmount, setAllowanceAmount] = useState<number>(0)
  const [info, setInfo] = useState<Info>()
  const [lpManagerAddress, setLpManagerAddress] = useState<`0x${string}`>()
  const [usdtAddress, setUsdtAddress] = useState<`0x${string}`>()
  const [approved, setApproved] = useState<boolean>(false)
  const [processing, setProcessing] = useState<boolean>(false)
  const [mintingStarted, setMintingStarted] = useState<boolean>(false)
  const [ustcAmount, setUstcAmount] = useState<number>()
  const [nftId, setNftId] = useState<number>()
  const [amountAttempt, setAmountAttempt] = useState<number>(0)
  const [signature, setSignature] = useState<Signature>()
  const [startMintingTxid, setStartMintingTxid] = useState<string>()
  const { Add: AddLiquidityProcess, Complete } = useLiquidityProcesses()

  useEffect(() => {
    if (connected) {
      setLpManagerAddress(GetAddr('lpManagerAddress', account.chainId!))
      setUsdtAddress(GetAddr('testErc20Address', account.chainId!))
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
    abi: erc20Abi,
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
    args: [parseUnits(depositAmount.toString(), stableCoinDecimals(account.chainId!))],
  })

  const { error: endMintingEstimateError } = useSimulateContract({
    query: {
      enabled:
        signature !== undefined &&
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
    args: [
      nftId!,
      ustcAmount ? parseEther(ustcAmount!.toString()) : 0,
      signature ? signature!.v : '0x00',
      signature ? signature!.r : '0x00',
      signature ? signature!.s : '0x00',
    ],
  })

  // Prepare approve transaction and it's result
  const { data: approveData, writeContract: writeApprove } = useWriteContract()
  const { data: startMintingData, writeContract: writeStartMinting } = useWriteContract()
  const { data: endMintingData, writeContract: writeEndMinting } = useWriteContract()

  // Approve transaction status
  const { error: approveTxError, isSuccess: approveTxSuccess } = useWaitForTransactionReceipt({
    hash: approveData,
  })

  const { error: startMintingTxError, isSuccess: startMintingTxSuccess } = useWaitForTransactionReceipt({
    hash: startMintingData,
  })

  const { error: endMintingTxError, isSuccess: endMintingTxSuccess } = useWaitForTransactionReceipt({
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
      onMint(1)
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

      AddLiquidityProcess({
        href: account.chain?.blockExplorers?.default.url
          ? `${account.chain.blockExplorers.default.url}/tx/${startMintingData}`
          : undefined,
        timestamp: Date.now(),
        from: account?.address ? account.address : '',
        networkId: account?.chain ? account.chain.id : 0,
        networkName: account?.chain ? account.chain.name : 'Jean Kwon van Do touched it',
        txid: startMintingData ? startMintingData : 'Where is Terra money, Jean Kwon van Do?',
        usdtAmount: ustcAmount ? ustcAmount : 0,
        nftId: 1,
        onContinue: onContinueMinting,
      })

      setMintingStarted(true)
      setStartMintingTxid(startMintingData!)
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
      setSignature(undefined)
      if (startMintingTxid) {
        setStartMintingTxid(undefined)
        Complete(startMintingTxid)
      }
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
  const { data: allowance, refetch: refetchAllowance } = useReadContract({
    query: {
      enabled: connected && usdtAddress !== undefined && lpManagerAddress !== undefined,
    },
    abi: erc20Abi,
    address: usdtAddress,
    functionName: 'allowance',
    args: [account.address!, lpManagerAddress!],
  })

  // Once the allowance returned, set the allowance amount in the state
  useEffect(() => {
    const parsed = allowance as bigint | undefined
    if (parsed !== undefined) {
      setAllowanceAmount(parseFloat(formatEther(parsed)))
    }
  }, [allowance])

  // Once the allowance state is set, compare it to the deposit
  useEffect(() => {
    setApproved(allowanceAmount >= depositAmount)
  }, [allowanceAmount, depositAmount])

  // Automatically invokes mint start if the state updated for the starting a mint
  useEffect(() => {
    console.log(`DepositAmount, Processing, MintingStarted or StartMintingTxid was set`)
    console.log(`Params: ${depositAmount} ${processing} ${mintingStarted} ${startMintingTxid}`)
    if (
      depositAmount != undefined &&
      depositAmount > 0 &&
      processing &&
      mintingStarted &&
      startMintingTxid !== undefined &&
      startMintingTxid.length > 0
    ) {
      console.log(`Start Minting as all parameters executed`)
      onStartMinting()
    }
  }, [depositAmount, processing, mintingStarted, startMintingTxid])

  // Automatically call minting process ending
  useEffect(() => {
    console.log(`OnEndMinting? DepositAmount, UstcAmount, NftId and Signature were given:`)
    console.log(`OnEndMinting? UstcAmount: ${ustcAmount} NftId ${nftId} Sig: ${signature}`)
    if (ustcAmount !== undefined && ustcAmount > 0 && nftId != undefined && nftId > 0 && signature !== undefined) {
      onEndMinting()
    }
  }, [depositAmount, ustcAmount, nftId, signature])

  // Call if the interrupted minting transactions exist on LiquidityProcesses
  const onContinueMinting = async (txid: string, networkId: number, owner: string, _depositAmount: number) => {
    if (processing || mintingStarted) {
      Add(`Transaction already going on, please refresh the page and try again`, { type: 'warning' })
      return
    }
    if (account === undefined) {
      Add(`Connect wallet first`, { type: 'error' })
      return
    }
    if (account.address?.toLowerCase() !== owner.toLowerCase()) {
      Add(`Switch your account to ${owner}`, { type: 'error' })
      return
    }
    if (account.chainId !== networkId) {
      Add(`Switch to Network with id ${networkName(networkId)} first`, { type: 'error' })
      return
    }

    console.log(`continueMinting -> onStartMinting invoking by state update`)
    console.log(
      `continueMinting -> onStartMinting: depositAMount ${_depositAmount}, processing, mintingStarted, startMintingTxid: ${txid}`
    )
    setDepositAmount(_depositAmount)
    setProcessing(true)
    setMintingStarted(true)
    setStartMintingTxid(txid)
  }

  const onStartMinting = async () => {
    if (amountAttempt > 3) {
      Add(`Server error: 3 attempts, but still no result. Please try again later to continue:(`, { type: 'error' })
      setAmountAttempt(0)
      setProcessing(false)
      setMintingStarted(false)
      setStartMintingTxid(undefined)
      return
    }
    if (!connected || account === undefined) {
      Add(`Interrupted, as wallet disconnected, please connect wallet and try again`, { type: 'error' })
      return
    }
    const url = process.env.NEXT_PUBLIC_BACKEND_URL!
    const response = await fetch(`${url}/start-minting/${account.chainId}/${startMintingTxid}`)
    const data = await response.json()

    if (data['message'] !== undefined && (data['message'] as string).length > 0) {
      Add(`Server error: ${data['message']}`, {
        type: 'error',
      })
      setDepositAmount(0)
      setProcessing(false)
      setMintingStarted(false)
      setStartMintingTxid(undefined)
      return
    }

    let startMinting = data as MintingResult
    console.log(`Server Response about minting: `)
    console.log(startMinting)
    // Everything is ready, and order is completed.
    if (startMinting.orderCompleted) {
      Add(`${startMinting.ustcPlusAmount} were minted successfully. Let's mint LP`, { type: 'success' })

      // Following three state update will invoke endMinting
      setUstcAmount(parseInt(startMinting.ustcPlusAmount!))
      setNftId(startMinting.nftId!)
      setSignature(startMinting.signature!)
    } else {
      // Order was not completed, let's first check the deposit stats
      if (startMinting.status === -1) {
        Add(`Deposit was not received by the server, tring again in 2 seconds`, { type: 'warning' })
        setAmountAttempt(amountAttempt + 1)
        await timeout(2000)
        onStartMinting()
        return
      } else if (startMinting.status === 1) {
        Add(`Deposit was confirmed, waiting for order status`, { type: 'success' })
        await timeout(2000)
        setAmountAttempt(amountAttempt + 1)
        onStartMinting()
      } else {
        Add(`Deposit is in pending, ${startMinting.orderCompletion}`, { type: 'info' })
        await timeout(2000)
        setAmountAttempt(amountAttempt + 1)
        onStartMinting()
      }
    }
  }

  const onEndMinting = () => {
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
      args: [nftId!, parseEther(ustcAmount!.toString()), signature!.v, signature!.r, signature!.s],
    })
  }

  const onMint = (step: number = 0) => {
    if (account.status !== 'connected') {
      Add(`Wallet error: Please connect your wallet`, {
        type: 'error',
      })
      return
    }
    if (info === undefined) {
      Add(`Server error: didn't get the information about pricing, wait and try again later...`, { type: 'error' })
      return
    }

    if (depositAmount < info.minUsdt * 2) {
      Add(`Minimum ${info.minUsdt * 2} USDT must be entered but given: ${depositAmount}`, { type: 'error' })
      return
    } else if (depositAmount > info.maxUsdt) {
      Add(`Maximum ${info.maxUsdt} USDT must be entered`, { type: 'error' })
      return
    }

    if (!processing) {
      setProcessing(true)
    }

    if (step == 0 && !approved) {
      if (approveEstimateError) {
        setProcessing(false)
        Add(`Approve simulation failed: ${approveEstimateError.cause}`, {
          type: 'error',
        })
        return
      }
      writeApprove({
        abi: erc20Abi,
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
        args: [parseUnits(depositAmount.toString(), stableCoinDecimals(account.chainId!))],
      })
    }
  }

  return (
    <div>
      <div className={'bg-base-100 border-base-300 rounded-box p-6 ' + connected ? '' : 'skeleton'}>
        <h3 className='text-xl mb-2'>Create USTC+ and Ustc+ Liquidity</h3>
        <div className='flex my-10'>
          <label className='input input-bordered flex-1 flex items-center gap-2 max-w-xs'>
            <input
              type='number'
              placeholder={info !== undefined ? (info.minUsdt * 2).toString() : '0.0'}
              min={info !== undefined ? info.minUsdt * 2 : 0.0}
              max={info !== undefined ? info.maxUsdt : 0.0}
              className='grow'
              onChange={(e) => {
                isNaN(parseFloat(e.target.value)) ? setDepositAmount(0.0) : setDepositAmount(parseFloat(e.target.value))
              }}
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
          Minimum USDT = {info !== undefined ? info.minUsdt * 2 : 0.0}
          <br />
          Estimated Liquidity Pool amount:{' '}
          {info !== undefined && depositAmount > 0
            ? (depositAmount / 2).toFixed(4) + ' USDT'
            : 'calculating USDT...'}{' '}
          and{' '}
          {info !== undefined && depositAmount > 0
            ? (depositAmount / 2 / info.ustcPrice).toFixed(4) + ' USTC+'
            : 'calculating USDT...'}
        </div>
      </div>
      <div className='bg-base-100 border-base-300 rounded-box p-6 mt-10'>
        <LiquidityProcessList onContinue={onContinueMinting}></LiquidityProcessList>
      </div>
    </div>
  )
}
