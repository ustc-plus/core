import { useAccount, useReadContract } from 'wagmi'
import oftAbi from './abi.json'
import { parseEther } from 'viem'
import { FormState } from '@/oft/useFormState'
import { Options } from '@layerzerolabs/lz-v2-utilities'
import { hexToBytes, bytesToHex } from 'viem'
import { LAYERZERO_ENDPOINT, ReceiverGasLimit } from '@/utils/network'

interface IParams {
  formState: FormState
  processing: boolean
}

export const BYTES32_ZEROES = '0x0000000000000000000000000000000000000000000000000000000000000000'

export type SendParam = {
  dstEid: number // Destination endpoint ID.
  to: string // Recipient address.
  amountLD: bigint // Amount to send in local decimals.
  minAmountLD: bigint // Minimum amount to send in local decimals.
  extraOptions: string // Additional options supplied by the caller to be used in the LayerZero message.
  composeMsg: string
  oftCmd: string
}

const addrToHex = (addr: string): string => {
  return BYTES32_ZEROES.substring(0, 13 * 2) + addr.substring(2)
}

export function useEstimateSendFee({ formState, processing }: IParams) {
  const account = useAccount()
  const _options = Options.newOptions()
  const [gasLimit] = ReceiverGasLimit(formState.destinationChain!)
  _options.addExecutorLzReceiveOption(gasLimit, 0)
  const to = addrToHex(formState.recipient)
  const lzEndpoint = LAYERZERO_ENDPOINT[formState.destinationChain]

  const { data, isSuccess, error } = useReadContract({
    query: {
      enabled:
        processing &&
        account.status === 'connected' &&
        lzEndpoint !== undefined &&
        formState.destinationChain > 0 &&
        formState.recipient.length > 0 &&
        formState.value.length > 0 &&
        !isNaN(parseFloat(formState.value)) &&
        parseFloat(formState.value) > 0,
    },
    address: formState.oftAddress,
    abi: oftAbi,
    functionName: 'quoteSend',
    args: [
      {
        dstEid: lzEndpoint,
        to: to,
        amountLD: parseEther(formState.value, 'wei'),
        minAmountLD: parseEther(formState.value, 'wei'),
        extraOptions: _options.toHex(),
        composeMsg: '0x00',
        oftCmd: '0x00',
      } as SendParam,
      false,
    ],
  })

  const nativeFee: bigint = isSuccess ? (data as any)['nativeFee'] : BigInt(0)

  return {
    isSuccess,
    nativeFee,
    error: error,
  }
}
