'use client'
import { useBalance, useReadContract } from 'wagmi'
import { useEffect, useState } from 'react'
import { erc20Abi } from 'viem'
import useInterval from 'use-interval'

type Hello = {
  unixtimestamp: number
  depositAddress: string
  ustcPrice: number
  minUsdt: number
  maxUsdt: number
}

// export const Liquidity = ({ address, tokenAddress, toFixed, onBalanceChange, className }: TokenBalanceProps) => {
export const Liquidity = () => {
  const ETHBalance = useBalance({ address: '0x80Cbc1f7fd60B7026C0088e5eD58Fc6Ce1180141' })
  const [info, setInfo] = useState<Hello>()

  const tokenBalance = useReadContract({
    abi: erc20Abi,
    address: '0x80Cbc1f7fd60B7026C0088e5eD58Fc6Ce1180141', // contract address
    functionName: 'balanceOf',
    args: ['0x80Cbc1f7fd60B7026C0088e5eD58Fc6Ce1180141'],
  })

  useEffect(() => {
    // pass the value of the balance to the parent component on change
    if (tokenBalance.data) {
      //&& onBalanceChange) {
      //onBalanceChange({ balance: tokenBalance.data, formattedBalance: formatBalance(tokenBalance.data, toFixed) })
      return
    } else if (ETHBalance.data) {
      //&& onBalanceChange) {
      /*onBalanceChange({
        balance: ETHBalance.data.value,
        formattedBalance: formatBalance(ETHBalance.data.value, toFixed),
      })*/
      return
    }
  }, [ETHBalance.data, tokenBalance.data])

  useInterval(async () => {
    const url = process.env.NEXT_PUBLIC_BACKEND_URL!
    console.log(`Url: ${url}`)
    console.log(`Fetching... ${new Date()}`)

    const response = await fetch(`${url}/hello`)
    const data = await response.json()

    if (data['message'] !== undefined) {
      console.error('Failed to get information: ' + data['message'])
    } else {
      setInfo(data as Hello)
    }
  }, 1000)

  return (
    <div>
      <h3 className='text-xl mb-2'>Create USTC+ and Ustc+ Liquidity</h3>
      <input type='text' placeholder='usdc' className='input input-bordered w-full max-w-xs' />
      <button className='mx-5 btn btn-primary'>Mint</button>
      <div className='content-center'>
        <ul className='steps'>
          <li className='step step-primary'>Approve USDC</li>
          <li className='step'>Buy USTC+</li>
          <li className='step'>Mint Liquidity NFT</li>
        </ul>
      </div>
      <div className='divider'></div>
      <div className='card bg-base-300 rounded-box grid h-30'>
        Estimated received:
        <br />
        Minimum USDT = {info !== undefined ? info.minUsdt : 0.0}
        <br />
        USDC = 40
        <br />
        USTC+ = 200
      </div>
    </div>
  )
}
