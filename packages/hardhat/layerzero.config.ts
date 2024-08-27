import { EndpointId } from '@layerzerolabs/lz-definitions'
import type { OAppOmniGraphHardhat, OmniPointHardhat } from '@layerzerolabs/toolbox-hardhat'

const sepoliaContract: OmniPointHardhat = {
    eid: EndpointId.SEPOLIA_V2_TESTNET,
    contractName: 'UstcPlus',
}

const lineaTestnetContract: OmniPointHardhat = {
    eid: EndpointId.LINEASEP_V2_TESTNET,
    contractName: 'UstcPlus',
}

const baseTestnetContract: OmniPointHardhat = {
    eid: EndpointId.BASESEP_V2_TESTNET,
    contractName: 'UstcPlus',
}

const config: OAppOmniGraphHardhat = {
    contracts: [
        {
            contract: lineaTestnetContract,
        },
        {
            contract: baseTestnetContract,
        },
        {
            contract: sepoliaContract
        },
    ],
    connections: [
        {
            from: lineaTestnetContract,
            to: sepoliaContract,
        },
        {
            from: sepoliaContract,
            to: lineaTestnetContract,
        },
        {
            from: lineaTestnetContract,
            to: baseTestnetContract,
        },
        {
            from: sepoliaContract,
            to: baseTestnetContract,
        },
        {
            from: baseTestnetContract,
            to: sepoliaContract,
        },
        {
            from: baseTestnetContract,
            to: lineaTestnetContract,
        },
        //////////////////////////////////////
        // Mainnet
        /////////////////////////////////////
    ],
}

export default config
