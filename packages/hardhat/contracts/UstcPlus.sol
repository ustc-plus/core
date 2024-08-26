// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { OFT } from "@layerzerolabs/lz-evm-oapp-v2/contracts/oft/OFT.sol";
import { ILpNft } from "./ILpNft.sol";
import { IUstcPlus } from "./IUstcPlus.sol";

contract UstcPlus is OFT, Ownable, IUstcPlus {
    ILpNft public lpNft;
    address public lpManager;

    modifier onlyLpNft {
        require(msg.sender == address(lpNft), "not LP NFT");
        _;
    }

    modifer onlyLpManager {
        require(msg.sender == address(lpManager), "npt lp manager");
        _;
    }

    constructor(
        address _lpNft,
        address _lpManager,
        address _lzEndpoint,
        address _delegate
    ) OFT("USTC Plus", "USTC+", _lzEndpoint, _delegate) Ownable(_delegate) {
        lpNft = ILpNft(_lpNft);
        lpManager = _lpManager;
    }

    function _update(address from, address to, uint256 value) internal override {
        if (to == address(0) || from == address(0)) {
            super._update(from, to, value);
        } else {
            uint256 percent = value / 100;
            uint256 remaining = value - percent;
            super._update(from, address(lpNft), percent);
            require(lpNft.distribute(percent));
            super._update(from, to, remaining);
        }
    }

    // This function transfers tokens to the user without slashing 1% fee.
    function transferByLpNft(address to, uint256 value) external onlyLpNft returns(bool) {
        super._update(address(lpNft), to, value);
    }

    function mintByLpManager(address to, uint256 value) external onlyLpManager returns(uint256) {
        _mint(to, value);
        return value;
    }
}
