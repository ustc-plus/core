import { defineConfig } from '@wagmi/cli'
import { actions, hardhat } from '@wagmi/cli/plugins'

export default defineConfig({
  out: 'src/abis.ts',
  contracts: [],
  plugins: [
    actions(),
    hardhat({
      project: '../hardhat',
      deployments: {
        TestErc20: {
          11155111: '0x32e5c809663f371ec25c7a21953647b448394aa3',
          137: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f', // USDT on Polygon
          56: '0x55d398326f99059fF775485246999027B3197955',
        },
        LpManager: {
          11155111: '0xC72C2e40574C1279fC3D3aDC54C7e055D9727348',
          137: '0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6',
          56: '0xCb3B96E8c57E90b8B74959c8475cD3245D02f053',
        },
        LpNft: {
          11155111: '0x9885055bEb85A0D35B1fFb982Acfeaf61f340877',
          137: '0xF53dc83E9cE56612dd47cA24e7439C204B602A22',
          56: '0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2',
        },
        Message: {
          11155111: '0xF11f180eE37dd6aa7dD08b8C1Cd670fC4DBE0e34',
        },
      },
    }),
  ],
})
