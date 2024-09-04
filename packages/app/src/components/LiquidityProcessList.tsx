'use client'

import { LiquidityAlert } from '@/components/LiquidityAlert'
import { useLiquidityProcesses } from '@/context/LiquidityProcesses'

type LiquidityProcessListProps = {
  onContinue: (txid: string, networkId: number, owner: string) => void
}

export default function LiquidityProcessList(props: LiquidityProcessListProps) {
  const { liquidityProcesses } = useLiquidityProcesses()

  return (
    <div className='flex-column align-center '>
      <div className='mt-4'>
        <h3 className='text-lg mb-4'>{liquidityProcesses.length} Liquidities to continue</h3>
        <div className='flex flex-col gap-2'>
          {liquidityProcesses.map((liquidityProcess, index) => {
            return (
              <LiquidityAlert
                key={index}
                href={liquidityProcess.href}
                networkId={liquidityProcess.networkId!}
                networkName={liquidityProcess.networkName}
                timestamp={liquidityProcess.timestamp!}
                from={liquidityProcess.from}
                usdtAmount={liquidityProcess.usdtAmount}
                txid={liquidityProcess.txid}
                nftId={liquidityProcess.nftId}
                onContinue={props.onContinue}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
