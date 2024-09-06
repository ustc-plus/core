import '@nomicfoundation/hardhat-ethers'
import '@nomicfoundation/hardhat-toolbox'
import '@nomicfoundation/hardhat-verify'
import 'hardhat-deploy'
import '@openzeppelin/hardhat-upgrades'
import { CONFIG } from './utils/config'

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
      bnb: CONFIG.BNBSCAN_API_KEY,
      polygon: CONFIG.POLYGONSCAN_API_KEY,
    },
    customChains: [
      {
        network: 'lineaTestnet',
        chainId: 59141,
        urls: {
          apiURL: 'https://api-sepolia.lineascan.build/api',
          browserURL: 'https://sepolia.lineascan.build/',
        },
      },
      {
        network: 'linea',
        chainId: 59144,
        urls: {
          apiURL: 'https://api.lineascan.build/api',
          browserURL: 'https://lineascan.build/',
        },
      },
      {
        network: 'bnb',
        chainId: 56,
        urls: {
          apiURL: 'https://api.bscscan.com/api',
          browserURL: 'https://bscscan.com/',
        },
      },
      {
        network: 'polygon',
        chainId: 137,
        urls: {
          apiURL: 'https://api.polygonscan.com/api',
          browserURL: 'https://polygonscan.com/',
        },
      },
    ],
  },
  sourcify: {
    enabled: false,
  },
  networks: {
    lineaTestnet: {
      url: process.env.LINEA_TESTNET_RPC || 'https://59141.rpc.thirdweb.com',
      accounts: [CONFIG.DEPLOYER_KEY],
    },
    baseTestnet: {
      url: process.env.BASE_TESTNET_RPC || 'https://sepolia.base.org',
      accounts: [CONFIG.DEPLOYER_KEY],
    },
    mainnet: {
      chainId: 1,
      url: process.env.ETH_MAINNET_RPC || 'https://rpc.ankr.com/eth',
      accounts: [CONFIG.DEPLOYER_KEY],
    },
    linea: {
      url: process.env.LINEA_MAINNET_RPC || 'https://1rpc.io/linea',
      accounts: [CONFIG.DEPLOYER_KEY],
    },
    sepolia: {
      url: process.env.ETH_SEPOLIA_RPC || 'https://rpc.sepolia.org/',
      chainId: 11155111,
      accounts: [CONFIG.DEPLOYER_KEY],
    },
    optimisticEthereum: {
      chainId: 10,
      url: process.env.OP_MAINNET_RPC || 'https://mainnet.optimism.io/',
      accounts: [CONFIG.DEPLOYER_KEY],
    },
    base: {
      chainId: 8453,
      url: process.env.BASE_MAINNET_RPC || 'https://mainnet.base.org',
      accounts: [CONFIG.DEPLOYER_KEY],
    },
    bnb: {
      chainId: 56,
      url: process.env.BNB_RPC || 'https://bsc-dataseed.bnbchain.org',
      accounts: [CONFIG.DEPLOYER_KEY],
    },
    polygon: {
      chainId: 137,
      url: process.env.POLYGON_RPC || 'https://polygon-pokt.nodies.app',
      accounts: [CONFIG.DEPLOYER_KEY],
    },
  },
}

export default config
