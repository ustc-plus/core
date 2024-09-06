// contracts/TestToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TestErc20 is ERC20 {
    constructor() ERC20("Test Token", "TOKEN") {
        _mint(msg.sender, 100000000000000000000000); // 10k
    }
}