import { useMemo, useState } from 'react'

export function useFormState() {
  const [destinationChain, setDestinationChain] = useState<number>(0)

  const [oftAddress, setOftAddress] = useState<`0x${string}`>('0x')
  const [value, setValue] = useState('0')
  const [recipient, setRecipient] = useState<`${string}`>('')

  return useMemo(
    () => ({
      destinationChain,
      setDestinationChain,
      oftAddress,
      setOftAddress,
      value,
      setValue,
      recipient,
      setRecipient,
    }),
    [destinationChain, setDestinationChain, oftAddress, setOftAddress, value, setValue, recipient, setRecipient]
  )
}

export type FormState = ReturnType<typeof useFormState>
