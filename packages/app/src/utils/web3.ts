import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { cookieStorage, createStorage } from 'wagmi'
import { SITE_INFO, SITE_NAME, SITE_URL } from './site'
import { ETH_CHAINS } from './network'
import * as Abis from '@/abis'
const { ...abis } = Abis
import { ustcPlusConfig } from '@/ustc_abis'

export const GetAbi = (abiName: string): any => {
  if (abiName === 'ustcPlusAbi') {
    return ustcPlusConfig.abi
  }
  for (const [abiId, abi] of Object.entries(abis)) {
    if (abiId === abiName) {
      return abi
    }
  }

  return undefined
}

export const GetAddr = (keyName: string, chainId: number): any => {
  if (keyName === 'ustcPlusAddress') {
    for (const [deployedChainId, addr] of Object.entries(ustcPlusConfig.address)) {
      if (deployedChainId.toString() === chainId.toString()) {
        return addr
      }
    }
  }
  for (const [key, addrConf] of Object.entries(abis)) {
    if (key === keyName) {
      for (const [deployedChainId, addr] of Object.entries(addrConf)) {
        if (deployedChainId.toString() === chainId.toString()) {
          console.log(`Return address of ${keyName} in ${chainId} which is ${addr}`)
          return addr
        }
      }
    }
  }

  return undefined
}

export const WALLETCONNECT_PROJECT_ID = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? ''
if (!WALLETCONNECT_PROJECT_ID) {
  console.warn('You need to provide a NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID env variable')
}

export const WALLETCONNECT_CONFIG = defaultWagmiConfig({
  projectId: WALLETCONNECT_PROJECT_ID,
  chains: ETH_CHAINS,
  ssr: true,
  metadata: {
    name: SITE_NAME,
    description: SITE_INFO,
    url: SITE_URL,
    icons: [],
  },
  auth: {
    email: true,
    socials: undefined,
    showWallets: true,
    walletFeatures: true,
  },
  storage: createStorage({
    storage: cookieStorage,
  }),
})
