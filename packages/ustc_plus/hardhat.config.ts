// Get the environment configuration from .env file
//
// To make use of automatic environment setup:
// - Duplicate .env.example file and name it .env
// - Fill in the environment variables
import 'dotenv/config'

import 'hardhat-deploy'
import 'hardhat-contract-sizer'
import '@nomiclabs/hardhat-ethers'
import { HardhatUserConfig, HttpNetworkAccountsUserConfig } from 'hardhat/types'
import '@layerzerolabs/toolbox-hardhat'
import "@nomicfoundation/hardhat-verify";

import { EndpointId } from '@layerzerolabs/lz-definitions'

// Set your preferred authentication method
//
// If you prefer to be authenticated using a private key, set a PRIVATE_KEY environment variable
const PRIVATE_KEY = process.env.DEPLOYER_KEY!

const accounts: HttpNetworkAccountsUserConfig =  [PRIVATE_KEY];

const config = {
    paths: {
        cache: 'cache/hardhat',
    },
    solidity: {
        compilers: [
            {
                version: '0.8.22',
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
        ],
    },
    networks: {
        lineaTestnet: {
            eid: EndpointId.LINEASEP_V2_TESTNET,
            url: process.env.LINEA_TESTNET_RPC || 'https://59141.rpc.thirdweb.com',
            accounts,
          },
          baseTestnet: {
            eid: EndpointId.BASESEP_V2_TESTNET,
            url: process.env.BASE_TESTNET_RPC || 'https://sepolia.base.org',
            accounts,
          },
          mainnet: {
            chainId: 1,
            eid: EndpointId.ETHEREUM_V2_MAINNET,
            url: process.env.ETH_MAINNET_RPC || 'https://rpc.ankr.com/eth',
            accounts,
          },
          linea: {
            eid: EndpointId.ZKCONSENSYS_V2_MAINNET,
            url: process.env.LINEA_MAINNET_RPC || 'https://1rpc.io/linea',
            accounts,
          },
          sepolia: {
            eid: EndpointId.SEPOLIA_V2_TESTNET,
            url: process.env.ETH_SEPOLIA_RPC || 'https://rpc.sepolia.org/',
            chainId: 11155111,
            accounts,
          },
          optimisticEthereum: {
            eid: EndpointId.OPTIMISM_V2_MAINNET,
            chainId: 10,
            url: process.env.OP_MAINNET_RPC || 'https://mainnet.optimism.io/',
            accounts,
          },
          base: {
            eid: EndpointId.BASE_V2_MAINNET,
            chainId: 8453,
            url: process.env.BASE_MAINNET_RPC || 'https://mainnet.base.org',
            accounts,
          },
    },
    namedAccounts: {
        deployer: {
            default: 0, // wallet address of index[0], of the mnemonic in .env
        },
    },
    etherscan: {
        apiKey: {
            sepolia: process.env.ETHERSCAN_KEY,
            lineaTestnet: process.env.LINEASCAN_KEY,
            baseTestnet: process.env.BASESCAN_KEY,
            ethereum: process.env.ETHERSCAN_KEY,
            mainnet: process.env.ETHERSCAN_KEY,
            linea: process.env.LINEASCAN_KEY
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
        enabled: false
    }
}

export default config
