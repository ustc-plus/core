# Smart Contracts

First, deploy LP Nft smartcontract.
Then deploy UstcPlus. UstcPlus requires LpNFT address.
Once UstcPlus is deployed, set the USTC address on LP Nft.

---

This project demonstrates how to add smart contracts to your project using [Hardhat](https://hardhat.org/docs). It provides a sample `Message` contract, a test and deployment scripts.

Try running some of the following tasks:

```
yarn build
yarn deploy
yarn test
yarn coverage
```

## Smartcontract addresses

### Sepolia

* TestERC20 &ndash; a fake USDC stable coin on Testnets. [View on Etherscan](https://sepolia.etherscan.io/token/0x32e5c809663f371ec25c7a21953647b448394aa3).
* LpNft &ndash; a USDC and USTC+ pair liquidity pool kept as an NFT. [View on Etherscan](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
* LpManager &ndash; A USTC+ and Liquidity Pool NFTs minter. [View on Etherscan](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)

## Deploy

Fake USDC
---

First, to test out you need USDC stable coins. On the testnet we use a fake USDC called "TestERC20".
So, head to the `hardhat` directory:

```bash
cd packages/hardhat
```

Then, deploy the smartcontract:
```bash
npx hardhat ignition deploy ./ignition/modules/TestERC20.ts --network sepolia
```

> For the testing we use Sepolia Testnet, since i already have some ETH from the faucet. You may use any other networks.

Grab the deployed smartcontract address and verify it. Deploying then verifying are the two steps for each smartcontract.

```bash
npx hardhat verify --network sepolia 0x32e5c809663f371ec25c7a21953647b448394aa3
```

Deploy LpNft
---
Deploy LP NFT.

```bash
npx hardhat run ./scripts/deploy-lp-nft.js --network sepolia
```

Then, verify the smartcontract:

```bash
npx hardhat verify --network sepolia <address>
```

Open up the `scripts/upgrade-lp-nft.js` and set the deployed smartcontract address there. Later in case, when you want to upgrade smartcontract, you may do it easily.

---
After changes, you need to upgrade the smartcontracts. It has two steps:

```bash
npx hardhat run ./scripts/upgrade-lp-nft.js --network sepolia
```


```bash
npx hardhat verify --network sepolia <address>
```

Deploy LpManager
---
LP Manager mints USTC+ and LP NFTs that consists USTC+ and USDC.

Deploy LP NFT.

```bash
npx hardhat run ./scripts/deploy-lp-manager.js --network sepolia
```

Then, verify the smartcontract:

```bash
npx hardhat verify --network sepolia <address>
```

Open up the `scripts/upgrade-lp-manager.js` and set the deployed smartcontract address there. Later in case, when you want to upgrade smartcontract, you may do it easily.

---
After changes, you need to upgrade the smartcontracts. It has two steps:

```bash
npx hardhat run ./scripts/upgrade-lp-manager.js --network sepolia
```


```bash
npx hardhat verify --network sepolia <address>
```


Deploy USTC+
---

Once you're ready to deploy your contracts, setup a deployer account using `DEPLOYER_KEY` and try to run e.g.

## Verify

Contracts are automatically verified on Etherscan if you've set up the `ETHERSCAN_API_KEY` environment variable. You can also verify contracts manually using

```
yarn verify <address> --network <network>
```

It is recommend to verifying manually after deployment as it also automatically verifies contracts on [Sourcify](https://sourcify.dev/).

## Wagmi CLI

The front-end uses the [Wagmi CLI](https://wagmi.sh/cli/getting-started) to automatically generate types and default hooks for your contracts.

You need to run the following command from `packages/app`, which will generate the files in the same package at `src/abi.test`.

```
yarn wagmi
```
