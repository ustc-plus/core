# USTC+ Core

**Let's get USTC back!**

_For devs, this project uses the [Nexth](https://github.com/wslyvh/nexth) template. Nexth &ndash; A Next.js + Ethereum starter kit with Viem, Wagmi, Web3Modal, SIWE, Tailwind, daisyUI and more to quickly ship production-ready Web3 Apps_

![USTC Plus](./USTC_plus.png)

## Smartcontract addresses

### Sepolia

- StableCoin &ndash; a fake TestErc20 stable coin on Testnets. [View on Etherscan](https://sepolia.etherscan.io/token/0x32e5c809663f371ec25c7a21953647b448394aa3).
- LpNft &ndash; a stable coin and USTC+ pair liquidity pool kept as an NFT. [View on Etherscan](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
- LpManager &ndash; A USTC+ and Liquidity Pool NFTs minter. [View on Etherscan](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
- USTC+ &ndash; A cross-chain Terra UST Classic implementation using Layerzero technology. [View on Etherscan](https://sepolia.etherscan.io/token/0x05df326185A182274058a42cBe613c628f1506B4)

### Polygon

- StableCoin &ndash; USDT used to for Liquidity pool pair with USTC+. [View on Polygonscan](https://polygonscan.com/token/0xc2132d05d31c914a87c6611c10748aeb04b58e8f)
- LpNft &ndash; a stable coin and USTC+ pair liquidity pool kept as an NFT. [View on Polygonscan](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
- LpManager &ndash; a USTC+ and LpNft minter and burner. [View on Polygonscan](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
- USTC+ &ndash; A cross-chain Terra USTC Classic implementation using Layerzero technology. [View on Polygonscan](https://polygonscan.com/token/0x606689c20562aC06202B8AB2Ad9029c961C2E267)

The Binance addresses on Polygon:

- USTC+ buyer &ndash; [0x21e5f3db8f14ac5c0d2171b81dfbe5a0047ba6bb](https://polygonscan.com/address/0x21e5f3db8f14ac5c0d2171b81dfbe5a0047ba6bb)
- Server's signer address `0x0864F2FdCa3730818c009354DD6874A3Cf207046`. **Off-chain and never will have a transaction**.

## Packages 📦

For the user, first, he deposits 50% to mint NFT.

`TODO change parts`

- [App](./packages/app) - Frontend
- [Contracts](./packages/hardhat/) - Liquidity smartcontracts
- [Ustc_plus](./packages/ustc_plus/) - Ustc+ smartcontract.

The USTC+ smartcontract is based on LayerZero which in turn based on old Hardhat packages.
Meanwhile, the Liquidity smartcontracts are based on the most recent version of Hardhat and Openzeppelin Upgradeables.
The recent hardhat used by openzeppelin upgradeables and layerzero are not compatible, therefore we made two separate packages.

## Development 🛠️

1, Download and install all dependencies. This line of code in the terminal is executed only once.

```bash
yarn install
```

2, Register on [Cloud.WalletConnect.com](https://cloud.walletconnect.com/) and get the project ID.
Create `app/.env` file based on `app/.env.sample`.
In the `app/.env` set `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` to the project ID that you obtained from the WalletConnect cloud.

3, Run the website on your laptop and visit [localhost:3000](http://localhost:3000/)

```bash
yarn run dev
```

## Deploy on Vercel 🚢

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%ustc-plus%2Fcore)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=nexth&filter=next.js&utm_source=nexth&utm_campaign=nexth-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

During project setup, don't forget to set the environment variables that you set on `app/.env`.

## Adding a support of a new network

### Frontend

First, update the abis on frontend by calling

`yarn run wagmi` and `yarn run wagmi --config ./ustc_wagmi.config.ts`

Then, copy the values of `packages/app/src/abis.ts` to `packages/backend/src/abis.ts`.
In the `packages/backend/src/abis.ts` and remove wagmi import in the top and everything after `ACTION` comment.

Finally, add the support of the networks on `packages/app/src/utils/networks.ts`

### Backend

On backend, create `RPC_URL_<chain_id>` environment variable and put the RPC node.
create `SIGNER_KEY_<chain_id>` environment variable and set the private key of the signer.

Then, open the `packages/backend/src/services/Blockchain.ts` and add the supported providers, ethers clients.
