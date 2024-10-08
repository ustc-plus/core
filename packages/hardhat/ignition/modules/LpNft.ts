// https://hardhat.org/ignition/docs/guides/upgradeable-proxies
import { buildModule } from '@nomicfoundation/hardhat-ignition/modules'

const LpNftModule = buildModule('LpNft', (m) => {
  const contract = m.contract('LpNft')

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

export default LpNftModule
