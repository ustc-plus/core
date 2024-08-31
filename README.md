# USTC+ Core

**Let's get USTC back!**

_For devs, this project uses the [Nexth](https://github.com/wslyvh/nexth) template. Nexth &ndash; A Next.js + Ethereum starter kit with Viem, Wagmi, Web3Modal, SIWE, Tailwind, daisyUI and more to quickly ship production-ready Web3 Apps_

![USTC Plus](./USTC_plus.png)

## Smartcontract addresses

### Sepolia

- TestERC20 &ndash; a fake USDC stable coin on Testnets. [View on Etherscan](https://sepolia.etherscan.io/token/0x32e5c809663f371ec25c7a21953647b448394aa3).
- LpNft &ndash; a USDC and USTC+ pair liquidity pool kept as an NFT. [View on Etherscan](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
- LpManager &ndash; A USTC+ and Liquidity Pool NFTs minter. [View on Etherscan](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
- USTC+ &ndash; A cross-chain Terra UST Classic implementation using Layerzero technology. [View on Etherscan](https://sepolia.etherscan.io/token/0x05df326185A182274058a42cBe613c628f1506B4)

## Packages 📦

For the user, first, he deposits 50% to mint NFT.

`TODO change parts`

- [App](./packages/app) - Next.js 14, with App router
- [Hardhat](./packages/hardhat/) - EVM based smartcontracts projects

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
