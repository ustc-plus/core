import '@nomicfoundation/hardhat-toolbox-viem'
import '@nomicfoundation/hardhat-verify'
import { CONFIG } from './utils/config'

import { EndpointId } from '@layerzerolabs/lz-definitions'

const config = {
  solidity: {
    compilers: [
      {
          version: '0.8.24',
          settings: {
              optimizer: {
                  enabled: true,
                  runs: 200,
              },
          },
      },
    ],
  },
  defaultNetwork: 'hardhat',
  etherscan: {
    apiKey: {
        sepolia: CONFIG.ETHERSCAN_API_KEY,
        lineaTestnet: CONFIG.LINEASCAN_API_KEY,
        baseTestnet: CONFIG.BASESCAN_API_KEY,
        ethereum: CONFIG.ETHERSCAN_API_KEY,
        mainnet: CONFIG.ETHERSCAN_API_KEY,
        linea: CONFIG.LINEASCAN_API_KEY,
        optimisticEthereum: CONFIG.OPTIMISTIC_API_KEY,
    },
    customChains: [
        {
          network: "lineaTestnet",
          chainId: 59141,
          urls: {
            apiURL: "https://api-sepolia.lineascan.build/api",
            browserURL: "https://sepolia.lineascan.build/"
          }
        },
        {
          network: "linea",
          chainId: 59144,
          urls: {
              apiURL: "https://api.lineascan.build/api",
              browserURL: "https://lineascan.build/"
          }
        }
    ]
  },
  sourcify: {
    enabled: false,
  },
  networks: {
    lineaTestnet: {
      eid: EndpointId.LINEASEP_V2_TESTNET,
      url: process.env.LINEA_TESTNET_RPC || 'https://59141.rpc.thirdweb.com',
      accounts: [CONFIG.DEPLOYER_KEY],
    },
    baseTestnet: {
      eid: EndpointId.BASESEP_V2_TESTNET,
      url: process.env.BASE_TESTNET_RPC || 'https://sepolia.base.org',
      accounts: [CONFIG.DEPLOYER_KEY],
    },
    mainnet: {
      chainId: 1,
      eid: EndpointId.ETHEREUM_V2_MAINNET,
      url: process.env.ETH_MAINNET_RPC || 'https://rpc.ankr.com/eth',
      accounts: [CONFIG.DEPLOYER_KEY],
    },
    linea: {
      eid: EndpointId.ZKCONSENSYS_V2_MAINNET,
      url: process.env.LINEA_MAINNET_RPC || 'https://1rpc.io/linea',
      accounts: [CONFIG.DEPLOYER_KEY],
    },
    sepolia: {
      eid: EndpointId.SEPOLIA_V2_TESTNET,
      url: process.env.ETH_SEPOLIA_RPC || 'https://rpc.sepolia.org/',
      chainId: 11155111,
      accounts: [CONFIG.DEPLOYER_KEY],
    },
    optimisticEthereum: {
      eid: EndpointId.OPTIMISM_V2_MAINNET,
      chainId: 10,
      url: process.env.OP_MAINNET_RPC || 'https://mainnet.optimism.io/',
      accounts: [CONFIG.DEPLOYER_KEY],
    },
    base: {
      chainId: 8453,
      url: process.env.BASE_MAINNET_RPC || 'https://mainnet.base.org',
      accounts: [CONFIG.DEPLOYER_KEY],
    },
  },
}

export default config
