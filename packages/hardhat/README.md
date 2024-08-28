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
* USTC+ &ndash; A cross-chain Terra UST Classic implementation using Layerzero technology. [View on Etherscan](https://sepolia.etherscan.io/token/0x05df326185A182274058a42cBe613c628f1506B4)

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
npx hardhat run ./src/deploy-usdc.js --network sepolia
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
npx hardhat run ./scripts/deploy-lp-nft.ts --network sepolia
```

Then, verify the smartcontract:

```bash
npx hardhat verify --network sepolia <address>
```

Open up the `scripts/upgrade-lp-nft.ts` and set the deployed smartcontract address there. Later in case, when you want to upgrade smartcontract, you may do it easily.

---
After changes, you need to upgrade the smartcontracts. It has two steps:

```bash
npx hardhat run ./scripts/upgrade-lp-nft.ts --network sepolia
```


```bash
npx hardhat verify --network sepolia <address>
```

Deploy LpManager
---
LP Manager mints USTC+ and LP NFTs that consists USTC+ and USDC.

Deploy LP NFT.

```bash
npx hardhat run ./scripts/deploy-lp-manager.ts --network sepolia
```

Then, verify the smartcontract:

```bash
npx hardhat verify --network sepolia <address>
```

Open up the `scripts/upgrade-lp-manager.ts` and set the deployed smartcontract address there. Later in case, when you want to upgrade smartcontract, you may do it easily.

---
After changes, you need to upgrade the smartcontracts. It has two steps:

```bash
npx hardhat run ./scripts/upgrade-lp-manager.ts --network sepolia
```

Verify the smartcontract:

```bash
npx hardhat verify --network sepolia <address>
```

Hint
---
For making your life easy, I would advise to setup the deployed smartcontract addresses on this Readme.

Deploy USTC+
---
Set the `LpNft` and `LpManager` addresses on `packages/ustc_plus/scripts/UstcPlus.ts`

Then, visit the `packages/ustc_plus` directory:

```bash
cd ../ustc_plus
```

And check the README there.

---
# Lint the smartcontracts
On Lp NFT
* call `setDao` on Etherscan
* call `setLpManager` on Etherscan
* call `setUsdc` on Etherscan
* call `setUstcPlus` on Etherscan

On Lp Manager:
* call `setLpNft` on Etherscan
* call `setUsdc` on Etherscan
* call `setUstcBuyer` on Etherscan (exchanges USDC for USTC on Exchanges)
* call `setUstcPlus` on Etherscan

## Testing
Head to the USDC, and approve LP Manager to spend your tokens.

Then, open LP Manager and call `startMinting`.

Grab the Deposit ID from the logs then put it as the first value on `endMinting`.

## Wagmi CLI

The front-end uses the [Wagmi CLI](https://wagmi.sh/cli/getting-started) to automatically generate types and default hooks for your contracts.

You need to run the following command from `packages/app`, which will generate the files in the same package at `src/abi.test`.

```
yarn wagmi
```
