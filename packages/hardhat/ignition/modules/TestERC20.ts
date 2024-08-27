import { buildModule } from '@nomicfoundation/hardhat-ignition/modules'

const TestErc20Module = buildModule('TestErc20', (m) => {
  const contract = m.contract('TestErc20')

  return { contract }
})

export default TestErc20Module
