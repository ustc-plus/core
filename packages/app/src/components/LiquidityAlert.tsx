import React from 'react'
import { ArrowUpRightIcon, PlayPauseIcon } from '@heroicons/react/24/outline'
import { LinkComponent } from './LinkComponent'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { TruncateMiddle } from '@/utils/format'
import { NotificationType } from '@/utils/types'
dayjs.extend(relativeTime)

interface Props {
  className?: string
  href?: string
  timestamp: number
  from: string
  networkId: number
  networkName: string
  txid: string
  usdtAmount: number
  nftId: number
  onContinue: (txid: string, networkId: number, owner: string, ustcAmount: number) => void
}

export function LiquidityAlert(props: Props) {
  let className = `alert flex flex-row text-left`
  if (props.className) className += ` ${props.className}`

  return (
    <div className={className}>
      <div>
        <PlayPauseIcon
          className='h-6 w-6 stroke-info hover:stroke-accent cursor-pointer'
          onClick={() => {
            props.onContinue(props.txid, props.networkId, props.from!, props.usdtAmount)
          }}
        />
      </div>

      <div className='flex flex-col flex-grow'>
        <h3 className='font-bold'>{`${props.networkName}: Continue creating ${props.usdtAmount} USDT`}</h3>
        <div className='flex flex-row gap-2'>
          <span className='text-s'>{'Started...' + dayjs(props.timestamp).fromNow()}</span>
          <span className='text-s'> · </span>
          <span className='text-s text-secondary'>
            {props.from?.startsWith('0x') ? TruncateMiddle(props.from) : props.from}
          </span>
        </div>
        <div className='flex flex-row gap-2'>
          <span className='text-xs'>Txid · </span>
          <span className='text-xs text-secondary'>{TruncateMiddle(props.txid)}</span>
        </div>
      </div>

      {props.href && (
        <LinkComponent href={props.href}>
          <ArrowUpRightIcon className='h-4 w-4' />
        </LinkComponent>
      )}
    </div>
  )
}
