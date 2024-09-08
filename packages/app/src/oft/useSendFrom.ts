import { useWriteContract, useSimulateContract, useWaitForTransactionReceipt, Config } from 'wagmi'
import { WaitForTransactionReceiptErrorType, parseEther } from 'viem'
import { FormState } from '@/oft/useFormState'
import oftAbi from './abi.json'
import { SendParam, addrToHex } from './useEstimateSendFee'
import { Options } from '@layerzerolabs/lz-v2-utilities'
import { LAYERZERO_ENDPOINT, ReceiverGasLimit } from '@/utils/network'
import { WriteContractMutate } from 'wagmi/query'
import { AppState } from '@/components/useAppState'

interface IParams {
  formState: FormState
  enabled: boolean
  nativeFee: bigint | undefined
  appState: AppState
}

interface IReturn {
  writeContract: WriteContractMutate<Config, unknown>
  hash: `0x${string}` | undefined
  writeIsSuccess: boolean
  writeError: WaitForTransactionReceiptErrorType | null
  simulateIsSuccess: boolean
  simulateError: any | null
  simulateData: any
}

export const useSendFrom = ({ appState, formState, enabled, nativeFee }: IParams): IReturn => {
  const _options = Options.newOptions()
  const [gasLimit, _nativeDrop] = ReceiverGasLimit(formState.destinationChain!)

  _options.addExecutorLzReceiveOption(gasLimit, 0)
  let lzEndpoint = LAYERZERO_ENDPOINT[formState.destinationChain]

  const { data, error, isSuccess } = useSimulateContract({
    query: {
      enabled,
    },
    address: formState.oftAddress,
    abi: oftAbi,
    functionName: 'send',
    value: nativeFee,
    args: [
      {
        dstEid: lzEndpoint,
        to: addrToHex(formState.recipient),
        amountLD: parseEther(formState.value, 'wei'),
        minAmountLD: parseEther(formState.value, 'wei'),
        extraOptions: _options.toHex(),
        composeMsg: '0x00',
        oftCmd: '0x00',
      } as SendParam,
      { nativeFee: nativeFee, lzTokenFee: 0 },
      appState.account.address,
    ],
  })

  const { writeContract, data: hash } = useWriteContract()

  const { error: writeError, isSuccess: writeIsSuccess } = useWaitForTransactionReceipt({
    hash: hash,
  })

  return {
    writeContract,
    hash,
    writeIsSuccess,
    writeError,
    simulateIsSuccess: isSuccess,
    simulateError: error,
    simulateData: data,
  }
}
