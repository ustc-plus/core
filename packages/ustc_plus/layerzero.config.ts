import { EndpointId } from '@layerzerolabs/lz-definitions'
import type { OAppOmniGraphHardhat, OmniPointHardhat } from '@layerzerolabs/toolbox-hardhat'

const sepoliaContract: OmniPointHardhat = {
    eid: EndpointId.SEPOLIA_V2_TESTNET,
    contractName: 'UstcPlus',
}

const polygonContract: OmniPointHardhat = {
    eid: EndpointId.POLYGON_V2_MAINNET,
    contractName: 'UstcPlus',
}

const bnbContract: OmniPointHardhat = {
    eid: EndpointId.BSC_V2_MAINNET,
    contractName: 'UstcPlus',
}

const config: OAppOmniGraphHardhat = {
    contracts: [
        {
            contract: sepoliaContract,
        },
        {
            contract: polygonContract,
        },
        {
            contract: bnbContract,
        },
    ],
    connections: [
        //////////////////////////////////////
        // Mainnet
        /////////////////////////////////////
        {
            from: polygonContract,
            to: bnbContract,
        },
        {
            from: bnbContract,
            to: polygonContract,
        },
    ],
}

export default config
