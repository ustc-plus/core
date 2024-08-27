import { ethers, upgrades } from 'hardhat'

async function main() {
    const Contract = await ethers.getContractFactory('LpNft')
    const contract = await upgrades.deployProxy(Contract, []);
    await contract.waitForDeployment()
    console.log('Deployed to:', await contract.getAddress())
}

main()
