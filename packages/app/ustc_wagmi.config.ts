import { defineConfig } from '@wagmi/cli'
import { actions, hardhat } from '@wagmi/cli/plugins'

export default defineConfig({
  out: 'src/ustc_abis.ts',
  contracts: [],
  plugins: [
    actions(),
    hardhat({
      project: '../ustc_plus',
      deployments: {
        UstcPlus: {
          11155111: '0x05df326185A182274058a42cBe613c628f1506B4',
        },
      },
    }),
  ],
})
