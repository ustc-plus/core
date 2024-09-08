'use client'
import { useReadContract, useSimulateContract, useWaitForTransactionReceipt, useWriteContract } from 'wagmi'
import { useEffect, useState } from 'react'
import { erc20Abi, formatEther, parseEther, parseUnits } from 'viem'
import useInterval from 'use-interval'
import { useNotifications } from '@/context/Notifications'
import { networkName } from '@/utils/network'
import { GetAbi } from '@/utils/web3'
import LiquidityProcessList from './LiquidityProcessList'
import { useLiquidityProcesses } from '@/context/LiquidityProcesses'
import { timeout } from '@/utils/site'
import { IAppStateConsumer } from './useAppState'

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

export const Liquidity = ({ appState }: IAppStateConsumer) => {
  const { Add } = useNotifications()
  const [depositAmount, setDepositAmount] = useState<number>(0.0)
  const [allowanceAmount, setAllowanceAmount] = useState<number>(0)
  const [info, setInfo] = useState<Info>()
  const [approved, setApproved] = useState<boolean>(false)
  const [processing, setProcessing] = useState<boolean>(false)
  const [mintingStarted, setMintingStarted] = useState<boolean>(false)
  const [ustcAmount, setUstcAmount] = useState<number>()
  const [nftId, setNftId] = useState<number>()
  const [amountAttempt, setAmountAttempt] = useState<number>(0)
  const [signature, setSignature] = useState<Signature>()
  const [startMintingTxid, setStartMintingTxid] = useState<string>()
  const { Add: AddLiquidityProcess, Complete } = useLiquidityProcesses()

  // Simulate approving Lp Manager to spend user's tokens.
  // Depends on:
  //  user didn't approve
  //  user connected
  //  smartcontract addresses are set
  const { error: approveEstimateError } = useSimulateContract({
    query: {
      enabled:
        appState.activeTab === 'Liquidity' &&
        !approved &&
        appState.appReady &&
        appState.stableCoinAddress !== undefined &&
        info !== undefined,
    },
    abi: erc20Abi,
    address: appState.stableCoinAddress,
    functionName: 'approve',
    args: [appState.lpManagerAddress!, parseEther('10000000')],
  })

  const { error: startMintingEstimateError } = useSimulateContract({
    query: {
      enabled: processing && approved && appState.appReady && info !== undefined,
    },
    abi: GetAbi('lpManagerAbi'),
    address: appState.lpManagerAddress,
    functionName: 'startMinting',
    args: [parseUnits(depositAmount.toString(), appState.stableCoinDecimals)],
  })

  const { error: endMintingEstimateError } = useSimulateContract({
    query: {
      enabled: signature !== undefined && mintingStarted && processing && approved && appState.appReady,
    },
    abi: GetAbi('lpManagerAbi'),
    address: appState.lpManagerAddress,
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
        href: appState.account.chain?.blockExplorers?.default.url
          ? `${appState.account.chain.blockExplorers.default.url}/tx/${approveData}`
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
        href: appState.account.chain?.blockExplorers?.default.url
          ? `${appState.account.chain.blockExplorers.default.url}/tx/${startMintingData}`
          : undefined,
      })
      Add(`Waiting server to mint USTC+...`, {
        type: 'success',
        href: appState.account.chain?.blockExplorers?.default.url
          ? `${appState.account.chain.blockExplorers.default.url}/tx/${startMintingData}`
          : undefined,
      })

      AddLiquidityProcess({
        href: appState.account.chain?.blockExplorers?.default.url
          ? `${appState.account.chain.blockExplorers.default.url}/tx/${startMintingData}`
          : undefined,
        timestamp: Date.now(),
        from: appState.account?.address ? appState.account.address : '',
        networkId: appState.account?.chain ? appState.account.chain.id : 0,
        networkName: appState.account?.chain ? appState.account.chain.name : 'Jean Kwon van Do touched it',
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
        href: appState.account.chain?.blockExplorers?.default.url
          ? `${appState.account.chain.blockExplorers.default.url}/tx/${endMintingData}`
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
    if (appState.appReady && appState.activeTab === 'Liquidity') {
      const url = process.env.NEXT_PUBLIC_BACKEND_URL!

      const response = await fetch(`${url}/hello`)
      const data = await response.json()

      if (data['message'] !== undefined) {
        console.error('Failed to get information: ' + data['message'])
      } else {
        setInfo(data as Info)
      }
    }
  }, 1000)

  // Determine whether the user approved tokens or not
  const { data: allowance } = useReadContract({
    query: {
      enabled: appState.appReady,
    },
    abi: erc20Abi,
    address: appState.stableCoinAddress,
    functionName: 'allowance',
    args: [appState.account.address!, appState.lpManagerAddress!],
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
    if (!appState.appReady) {
      Add(`App is not ready yet, wallet status: ${appState.account.status}`, { type: 'warning' })
      return
    }

    if (appState.account.address?.toLowerCase() !== owner.toLowerCase()) {
      Add(`Switch your account to ${owner}`, { type: 'error' })
      return
    }
    if (appState.account.chainId !== networkId) {
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
    if (!appState.appReady) {
      Add(`Interrupted, as wallet disconnected, please connect wallet and try again`, { type: 'error' })
      return
    }
    const url = process.env.NEXT_PUBLIC_BACKEND_URL!
    const response = await fetch(`${url}/start-minting/${appState.account.chainId}/${startMintingTxid}`)
    const data = await response.json()

    if (data['message'] !== undefined && (data['message'] as string).length > 0) {
      Add(`Server not received yet: ${data['message']}`, {
        type: 'info',
      })
      setAmountAttempt(amountAttempt + 1)
      await timeout(2000)
      onStartMinting()
      return
    }

    let startMinting = data as MintingResult
    console.log(`Server Response about minting: `)
    console.log(startMinting)
    if (startMinting.mintCompleted) {
      Add(`Already minted`, {
        type: 'info',
      })
      if (startMintingTxid !== undefined) {
        Complete(startMintingTxid)
      }
      setDepositAmount(0)
      setProcessing(false)
      setMintingStarted(false)
      setStartMintingTxid(undefined)
      return
    }
    // Everything is ready, and order is completed.
    else if (startMinting.orderCompleted) {
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
      address: appState.lpManagerAddress!,
      functionName: 'endMinting',
      args: [nftId!, parseEther(ustcAmount!.toString()), signature!.v, signature!.r, signature!.s],
    })
  }

  const onMint = (step: number = 0) => {
    if (!appState.appReady) {
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
      console.log(`Check approval again`)
      if (approveEstimateError) {
        setProcessing(false)
        Add(`Approve simulation failed: ${approveEstimateError.cause}`, {
          type: 'error',
        })
        return
      }
      writeApprove({
        abi: erc20Abi,
        address: appState.stableCoinAddress!,
        functionName: 'approve',
        args: [appState.lpManagerAddress!, parseEther('10000000')],
      })
      return
    }

    console.log(`Start minting in onMint`)

    if (!mintingStarted) {
      if (startMintingEstimateError) {
        setProcessing(false)
        Add(`Mint starting simulation failed: ${startMintingEstimateError.cause}`, {
          type: 'error',
        })
      }
      console.log(`Call start minting for ${depositAmount}`)

      writeStartMinting({
        abi: GetAbi('lpManagerAbi'),
        address: appState.lpManagerAddress!,
        functionName: 'startMinting',
        args: [parseUnits(depositAmount.toString(), appState.stableCoinDecimals)],
      })
    }
  }

  return (
    <div>
      {appState.appReady && appState.activeTab === 'Liquidity' ? (
        <div className='bg-base-100 border-base-300 rounded-box p-6 '>
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
                  isNaN(parseFloat(e.target.value))
                    ? setDepositAmount(0.0)
                    : setDepositAmount(parseFloat(e.target.value))
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
          <div className='card bg-base-300 rounded-box grid h-30 p-6'>
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
      ) : (
        <div className='skeleton h-32 w-full'></div>
      )}
      <div className='bg-base-100 border-base-300 rounded-box p-6 mt-10'>
        {appState.appReady && appState.activeTab === 'Liquidity' ? (
          <LiquidityProcessList onContinue={onContinueMinting}></LiquidityProcessList>
        ) : (
          <div className='skeleton h-32 w-full'></div>
        )}
      </div>
    </div>
  )
}
