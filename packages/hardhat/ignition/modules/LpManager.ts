// https://hardhat.org/ignition/docs/guides/upgradeable-proxies
import { buildModule } from '@nomicfoundation/hardhat-ignition/modules'

const LpManagerModule = buildModule('LpManager', (m) => {
  const contract = m.contract('LpManager')

  const proxyAdminOwner = m.getAccount(0);

  const proxy = m.contract("TransparentUpgradeableProxy", [
    contract,
    proxyAdminOwner,
    "0x",
  ]);

  const proxyAdminAddress = m.readEventArgument(
    proxy,
    "AdminChanged",
    "newAdmin"
  );

  const proxyAdmin = m.contractAt("ProxyAdmin", proxyAdminAddress);

  return { proxyAdmin, proxy };
})

export default LpManagerModule
