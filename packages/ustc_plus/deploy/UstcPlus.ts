import assert from 'assert'

import { type DeployFunction } from 'hardhat-deploy/types'

const contractName = 'UstcPlus'

const deploy: DeployFunction = async (hre) => {
    const { getNamedAccounts, deployments } = hre

    const { deploy, getNetworkName } = deployments
    const { deployer } = await getNamedAccounts()
    const networkName = getNetworkName()

    assert(deployer, 'Missing named deployer account')

    console.log(`Network: ${hre.network.name}`)
    console.log(`Deployer: ${deployer}`)

    const endpointV2Deployment = await hre.deployments.get('EndpointV2')

    let lpNft = ''
    let lpManager = ''
    if (networkName === 'polygon') {
        lpNft = '0xF53dc83E9cE56612dd47cA24e7439C204B602A22'
        lpManager = '0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6'
    } else if (networkName == 'sepolia') {
        lpNft = '0x9885055bEb85A0D35B1fFb982Acfeaf61f340877'
        lpManager = '0xC72C2e40574C1279fC3D3aDC54C7e055D9727348'
    } else if (networkName == 'bnb') {
        lpNft = '0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2'
        lpManager = '0xCb3B96E8c57E90b8B74959c8475cD3245D02f053'
    }

    if (lpNft.length === 0) {
        throw `Unsupported network or network parameters for LpNft and LpManager were not set`
    }

    const constructorArgs = [
        lpNft,
        lpManager,
        endpointV2Deployment.address, // LayerZero's EndpointV2 address
        deployer, // owner
    ]
    console.log(`Constructor args:`)
    console.log(constructorArgs)

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
