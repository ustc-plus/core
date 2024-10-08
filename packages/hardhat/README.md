# Smart Contracts

Try running some of the following tasks:

```
yarn build
yarn deploy
yarn test
yarn coverage
```

## Deploy

## Fake USDC

> Only on Testnets.

First, to test out you need some stable coins. On the testnet we use a fake stable coin called "TestERC20".
So, head to the `hardhat` directory:

```bash
cd packages/hardhat
```

Then, deploy the smartcontract:

```bash
npx hardhat run ./src/deploy-usdc.ts --network sepolia
```

> For the testing we use Sepolia Testnet, since i already have some ETH from the faucet. You may use any other networks.

Grab the deployed smartcontract address and verify it. Deploying then verifying are the two steps for each smartcontract.

```bash
npx hardhat verify --network sepolia 0x32e5c809663f371ec25c7a21953647b448394aa3
```

## Deploy LpNft

Deploy Liquidity Pool NFT.

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

## Deploy LpManager

LP Manager mints USTC+ and LP NFTs that consists USTC+ and stable coin.

> Set the Lp NFT address and USDT address in the `./scripts/deploy-lp-manager.ts`

Deploy LP Manager.

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

## Hint

For making your life easy, I would advise to setup the deployed smartcontract addresses on this Readme.

## Deploy USTC+

Set the `LpNft` and `LpManager` addresses on `packages/ustc_plus/scripts/UstcPlus.ts`

Then, visit the `packages/ustc_plus` directory:

```bash
cd ../ustc_plus
```

And check the README there.

---

# Lint the smartcontracts

On Lp NFT

- call `setDao` on Etherscan
- call `setLpManager` on Etherscan
- call `setUsdc` on Etherscan
- call `setUstcPlus` on Etherscan
- call `setupReflect` on Etherscan

On Lp Manager:

- call `setLpNft` on Etherscan
- call `setUsdc` on Etherscan
- call `setUstcBuyer` on Etherscan (exchanges Stable Coin for USTC on Exchanges)
- call `setUstcPlus` on Etherscan

## Testing

Head to the Stable coin, and approve LP Manager to spend your tokens.

Then, open LP Manager and call `startMinting`.

Grab the Deposit ID from the logs then put it as the first value on `endMinting`.

## Wagmi CLI

The front-end uses the [Wagmi CLI](https://wagmi.sh/cli/getting-started) to automatically generate types and default hooks for your contracts.

You need to run the following command from `packages/app`, which will generate the files in the same package at `src/abi.test`.

```
yarn wagmi
yarn wagmi --config ./ustc_wagmi.config.ts
```

Also, copy the first half part of the generated abis and set it on the backend code.
