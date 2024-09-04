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
          137: '0x606689c20562aC06202B8AB2Ad9029c961C2E267',
        },
      },
    }),
  ],
})
