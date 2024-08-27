// scripts/create-box.js
import { ethers, upgrades } from 'hardhat'

async function main() {
  const addr = "0x9885055bEb85A0D35B1fFb982Acfeaf61f340877"; // Sepolia
  const Contract = await ethers.getContractFactory('LpNft')
  const contract = await upgrades.upgradeProxy(addr, Contract, [])
  await contract.waitForDeployment()
  console.log('Minter deployed to:', await contract.getAddress())
}

main()
