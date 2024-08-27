import { buildModule } from '@nomicfoundation/hardhat-ignition/modules'

const UstcPlusModule = buildModule('UstcPlus', (m) => {
  const contract = m.contract('UstcPlus')

  return { contract }
})

export default UstcPlusModule
