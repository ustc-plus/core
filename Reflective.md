# Reflect

Conspect on Whitepaper of Reflect smartcontracts.

Whitepaper: https://reflect-contract-doc.netlify.app/
Blog post: https://dev.to/librehash/brief-really-breakdown-on-reflection-token-smart-contracts-j6a
Source code: https://github.com/reflectfinance/reflect-contracts/issues

---

Two concepts are introduced:

- `t-space` &ndash;
- `r-space` &ndash;
- `tTotal` &ndash; belongs to `t-space` and represents tokens in circulation or total supply of a token.
- `rTotal` &ndash; belongs to `r-space`, is a reflected value of `tTotal`. It's a token supply in reserve.
- `staker` &ndash; are users who earn passive income by holding native token.
- `non-stakers` &ndash; do not earn rewards. For example routers, pairs, dev wallets are non stakers.

Values in `t-space` can easily be converted to `r-space` form, and vice versa using formula.

## tTotal and rTotal

`tTotal = totalSupply`
`rTotal = MAX - (MAX mod tTotal)`

`rTotal` can be further broken down as follows:

```
rTotal
    = MAX - (MAX mod tTotal)
    = MAX - (MAX - q * tTotal)
    = q * tTotal (1 <= q <= MAX)
```

From propery of remainders:

`0 <= MAX mod tTotal < tTotal`
`- MAX <= - q * tTotal < tTotal - MAX`
`MAX - tTotal < rTotal <= MAX`

`rTotal` is a multiple of `tTotal` and it is between `MAX = tTotal` and `MAX`. The MAX can be any number above tTotal and uint256(0)=10^77.

## Conversion

Any `t-space` value can be convert to `r-space` value as follows:

    r = q * t = (rTotal / tTotal) * t

Here, `t` is a value in `t-space` and `r` is a value in `r-space`.

## Transaction parameters

- `tAmount` &ndash; token amount that sender pays including `tFee`.
- `tFee` &ndash; transfer fee
- `tTransferAmount` &ndash; tokens that will get transferred to recipient
- `tOwned[user]` &ndash; user's balance represented in `t-space` only used by non-stakers.
- `rOwned[user]` &ndash; Users balance represented in `r-space`.

## Deflationary mechanism

After the first transaction, a newly generated rate will be used for the next transaction or when viewing user balance. This makes tokens in `r-space` more valuable.

_Operation to calculate rate requires a loop, so don't have non-stakers more than 10_.

## One issue with RFI contracts

When a new user gets included into staking, the rate updates, thereby changing all stakers balance. Using this feature, it can be used to rug-pull rewards from stakers by including a whale.
