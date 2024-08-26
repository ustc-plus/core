// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ILpNft {
    // Calculate amount of tokens to reward to all LP owners.
    function distribute(uint256 _amount) external returns(bool);
    // Mint new nft with the given collateral amounts. First amount is USDC amount, the second amount is USTC amount.
    function mint(address _to, uint256 tokenId, uint256 usdcAmount, uint256 ustcPlusAmount) external;
    // Burn given NFT. If it's burned before the timeout, then it slashes.
    function burn(uint256 tokenId) external returns(bool);
    // Redeems some tokens. Either give amount1 or amount2, but not both.
    function redeem(uint256 tokenId, uint256 percents) external returns(bool);
    // Returns the time when the total slashing period ends
    function slashEndTime(uint256 tokenId) external view returns(uint256);
    // Returns current amount of tokens that the LP will burn
    function slashCurrentAmount(uint256 tokenId) external view returns(uint256);
}
