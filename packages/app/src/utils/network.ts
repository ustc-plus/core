import { polygon, bsc, sepolia, Chain } from 'viem/chains'
import { EndpointId } from '@layerzerolabs/lz-definitions'

let chains = [polygon, bsc] as [Chain, ...Chain[]]

if (process.env.NODE_ENV !== 'production') chains.push(sepolia)

export const ETH_CHAINS = chains
export const ETH_CHAIN_NAMES = chains
  .map((chain) => {
    chain.name
  })
  .join(', ')

export const LAYERZERO_ENDPOINT: { [key: number]: number } = {
  137: EndpointId.POLYGON_V2_MAINNET,
  56: EndpointId.BSC_V2_MAINNET,
}

export const ReceiverGasLimit = (chainId: number | undefined) => {
  return [70000, 0]
}

export const isSupportedNetwork = (chainId: number | undefined) => {
  if (chainId === undefined) {
    return false
  }
  for (let chain of chains) {
    if (chain.id === chainId) {
      return true
    }
  }
  return false
}

export const networkName = (chainId: number | undefined): string => {
  if (isSupportedNetwork(chainId)) {
    for (let chain of chains) {
      if (chain.id === chainId) {
        return chain.name
      }
    }
  }

  return `Jean Kwon van Do's network`
}

export const stableCoinDecimals = (chainId: number) => {
  if (chainId == sepolia.id || chainId == bsc.id) {
    return 18
  }
  return 6
}

export const NETWORK_COLORS = {
  ethereum: {
    color: 'green',
    bgVariant: 'bg-green-600',
  },
  arbitrum: {
    color: 'sky',
    bgVariant: 'bg-sky-600',
  },
  base: {
    color: 'blue',
    bgVariant: 'bg-blue-600',
  },
  linea: {
    color: 'slate',
    bgVariant: 'bg-slate-600',
  },
  polygon: {
    color: 'purple',
    bgVariant: 'bg-purple-600',
  },
  optimism: {
    color: 'red',
    bgVariant: 'bg-red-600',
  },
  scroll: {
    color: 'amber',
    bgVariant: 'bg-amber-600',
  },
  other: {
    color: 'gray',
    bgVariant: 'bg-gray-600',
  },
}

export function GetNetworkColor(chain?: string, type: 'color' | 'bgVariant' = 'color') {
  chain = chain?.toLocaleLowerCase()
  if (chain === 'ethereum' || chain === 'mainnet' || chain === 'homestead') return NETWORK_COLORS.ethereum[type]
  if (chain?.includes('arbitrum')) return NETWORK_COLORS.arbitrum[type]
  if (chain?.includes('base')) return NETWORK_COLORS.base[type]
  if (chain?.includes('linea')) return NETWORK_COLORS.linea[type]
  if (chain?.includes('polygon') || chain?.includes('matic')) return NETWORK_COLORS.polygon[type]
  if (chain?.includes('optimism') || chain?.startsWith('op')) return NETWORK_COLORS.optimism[type]
  if (chain?.includes('scroll')) return NETWORK_COLORS.scroll[type]

  return NETWORK_COLORS.other[type]
}
