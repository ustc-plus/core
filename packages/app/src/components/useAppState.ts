import { Config, UseAccountReturnType } from 'wagmi'
import { stableCoinDecimals as getStableCoinDecimals } from '@/utils/network'
import { useEffect, useMemo, useState } from 'react'
import { GetAddr } from '@/utils/web3'

interface IParams {
  account: UseAccountReturnType<Config>
}

export interface IAppStateConsumer {
  appState: AppState
}

export type ActiveTab = 'Liquidity' | 'Redeem' | 'Unwrap' | 'Bridge' | 'Faucet'

export type AppState = {
  account: UseAccountReturnType<Config>
  lpNftAddress: `0x${string}` | undefined
  lpManagerAddress: `0x${string}` | undefined
  stableCoinAddress: `0x${string}` | undefined
  stableCoinDecimals: number
  ustcPlusAddress: `0x${string}` | undefined
  activeTab: ActiveTab
  appReady: boolean
  setActiveTab: (newState: ActiveTab) => void
}

export const useAppState = ({ account }: IParams): AppState => {
  const [lpNftAddress, setLpNftAddress] = useState<`0x${string}`>()
  const [lpManagerAddress, setLpManagerAddress] = useState<`0x${string}`>()
  const [stableCoinAddress, setStableCoinAddress] = useState<`0x${string}`>()
  const [ustcPlusAddress, setUstcPlusAddress] = useState<`0x${string}`>()
  const [stableCoinDecimals, setStableCoinDecimals] = useState<number>(0)
  const [activeTab, setActiveTab] = useState<ActiveTab>('Liquidity')
  const [appReady, setAppReady] = useState<boolean>(false)

  useEffect(() => {
    if (!account) {
      return
    }
    setAppReady(account.isConnected)
    if (account.isConnected) {
      setLpManagerAddress(GetAddr('lpManagerAddress', account.chainId!))
      setLpNftAddress(GetAddr('setLpNftAddress', account.chainId!))
      setStableCoinAddress(GetAddr('testErc20Address', account.chainId!))
      setUstcPlusAddress(GetAddr('ustcPlusAddress', account.chainId!))
      setUstcPlusAddress(GetAddr('ustcPlusAddress', account.chainId!))
      setStableCoinDecimals(getStableCoinDecimals(account?.chainId!))
    }
  }, [account])

  return useMemo(
    () => ({
      account,
      lpNftAddress,
      lpManagerAddress,
      stableCoinAddress,
      ustcPlusAddress,
      stableCoinDecimals,
      activeTab,
      appReady,
      setActiveTab,
    }),
    [
      account,
      lpNftAddress,
      lpManagerAddress,
      stableCoinAddress,
      ustcPlusAddress,
      stableCoinDecimals,
      activeTab,
      setActiveTab,
    ]
  )
}
