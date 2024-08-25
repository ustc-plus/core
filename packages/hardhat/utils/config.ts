import { join } from 'path'
import dotenv from 'dotenv'

dotenv.config() // project root
dotenv.config({ path: join(process.cwd(), '../../.env') }) // workspace root

export const CONFIG = {
  NODE_ENV: process.env.NODE_ENV || 'development',

  DEPLOYER_KEY: process.env.DEPLOYER_KEY ?? '',

  ETHERSCAN_API_KEY: process.env.ETHERSCAN_KEY ?? '',
  BASESCAN_API_KEY: process.env.BASESCAN_KEY ?? '',
  LINEASCAN_API_KEY: process.env.LINEASCAN_KEY ?? '',
  OPTIMISTIC_API_KEY: process.env.OPTIMISTICSCAN_KEY ?? process.env.ETHERSCAN_KEY ?? '',
}
;(() => {
  if (!process.env.DEPLOYER_KEY) {
    console.warn('DEPLOYER_KEY not found in .env file. Running with default config')
  }
  if (!process.env.ETHERSCAN_KEY) {
    console.warn('ETHERSCAN_KEY not found in .env file. Etherscan verification might fail')
  }
  if (!process.env.BASESCAN_KEY) {
    console.warn('BASESCAN_KEY not found in .env file. Etherscan verification might fail')
  }
  if (!process.env.LINEASCAN_KEY) {
    console.warn('LINEASCAN_KEY not found in .env file. Etherscan verification might fail')
  }
  const OPTIMISTIC_API_KEY = process.env.OPTIMISTICSCAN_KEY ?? process.env.ETHERSCAN_KEY ?? ''
  if (!OPTIMISTIC_API_KEY) {
    console.warn('OPTIMISTICSCAN_KEY not found in .env file. Etherscan verification might fail')
  }
})()
