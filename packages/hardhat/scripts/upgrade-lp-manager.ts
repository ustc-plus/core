// scripts/create-box.js
import { ethers, upgrades } from 'hardhat'

async function main() {
  const addr = "0xC72C2e40574C1279fC3D3aDC54C7e055D9727348"; // Sepolia

  const Contract = await ethers.getContractFactory('LpManager')
  const contract = await upgrades.upgradeProxy(addr, Contract, [])
  await contract.waitForDeployment()
  console.log('Minter deployed to:', await contract.getAddress())
}

main()
