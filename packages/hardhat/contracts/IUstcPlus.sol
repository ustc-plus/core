// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IUstcPlus is IERC20 {
    // Calculate amount of tokens to reward to all LP owners.
    function lpNft() external returns(address);
    function transferByLpNft(address to, uint256 value) external returns(bool);
}
