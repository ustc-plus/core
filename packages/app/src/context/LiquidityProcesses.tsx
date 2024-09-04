'use client'

import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react'
import { LiquidityProcess } from '@/utils/types'
import dayjs from 'dayjs'

interface LiquidityProcessContext {
  Add: (liquidityProcess: LiquidityProcess) => void
  Complete: (txid: string) => void
  liquidityProcesses: LiquidityProcess[]
}

const defaultLiquidityProcessContext: LiquidityProcessContext = {
  Add: (liquidityProcess: LiquidityProcess) => {},
  Complete: (txid: string) => {},
  liquidityProcesses: [],
}

const LiquidityProcessContext = createContext(defaultLiquidityProcessContext)

export const useLiquidityProcesses = () => {
  const context = useContext(LiquidityProcessContext)
  if (!context) {
    throw new Error('useLiquidityProcesses must be used within a LiquidityProcessProvider')
  }

  return context
}

export function LiquidityProcessProvider(props: PropsWithChildren) {
  const [liquidityProcesses, setLiquidityProcesses] = useState<LiquidityProcess[]>([])

  useEffect(() => {
    const storedLiquidityProcesses = localStorage?.getItem('liquidity_processes')
    if (storedLiquidityProcesses) {
      setLiquidityProcesses(JSON.parse(storedLiquidityProcesses))
    }
  }, [])

  function Add(liquidityProcess: LiquidityProcess) {
    liquidityProcess.timestamp = dayjs().valueOf()
    Complete(liquidityProcess.txid)
    localStorage.setItem('liquidity_processes', JSON.stringify([...liquidityProcesses, liquidityProcess]))
    setLiquidityProcesses([...liquidityProcesses, liquidityProcess])
  }

  function Complete(txid: string) {
    const filteredLiquidityProcesses = liquidityProcesses.filter(
      (liquidityProcess) => liquidityProcess.txid.toLowerCase() !== txid.toLocaleLowerCase()
    )
    if (filteredLiquidityProcesses.length === liquidityProcesses.length) {
      console.log(`No ${txid} was found`)
      return
    }
    localStorage.setItem('liquidity_processes', JSON.stringify(filteredLiquidityProcesses))
    setLiquidityProcesses(filteredLiquidityProcesses)
  }

  return (
    <LiquidityProcessContext.Provider value={{ Add, Complete, liquidityProcesses }}>
      {props.children}
    </LiquidityProcessContext.Provider>
  )
}
