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

## Deploy

First, to test out you need USDC stable coins. On the testnet we use a fake USDC called "TestERC20".
So, head to the `hardhat` directory:

```bash
cd packages/hardhat
```

Then, deploy the smartcontract:
```bash
npx hardhat ignition deploy ./ignition/modules/TestERC20.ts --network lineaTestnet
```

> For the testing we use Linea Testnet, since i already have some ETH from the faucet. You may use any other networks.

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
