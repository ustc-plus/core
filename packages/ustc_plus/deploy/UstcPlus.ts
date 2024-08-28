import assert from 'assert'

import { type DeployFunction } from 'hardhat-deploy/types'

const contractName = 'UstcPlus'

const deploy: DeployFunction = async (hre) => {
    const { getNamedAccounts, deployments } = hre

    const { deploy } = deployments
    const { deployer } = await getNamedAccounts()

    assert(deployer, 'Missing named deployer account')

    console.log(`Network: ${hre.network.name}`)
    console.log(`Deployer: ${deployer}`)

    const endpointV2Deployment = await hre.deployments.get('EndpointV2')

    // Sepolia
    const lpNft = "0x9885055bEb85A0D35B1fFb982Acfeaf61f340877";
    const lpManager = "0xC72C2e40574C1279fC3D3aDC54C7e055D9727348";

    const constructorArgs = [
        lpNft,
        lpManager,
        endpointV2Deployment.address, // LayerZero's EndpointV2 address
        deployer, // owner
    ];
    console.log(`Constructor args:`);
    console.log(constructorArgs);

    const { address } = await deploy(contractName, {
        from: deployer,
        args: constructorArgs,
        log: true,
        skipIfAlreadyDeployed: false,
    })

    console.log(`Deployed contract: ${contractName}, network: ${hre.network.name}, address: ${address}`)
}

deploy.tags = [contractName]

export default deploy
