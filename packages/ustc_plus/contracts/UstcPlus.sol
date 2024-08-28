// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { OFT } from "@layerzerolabs/lz-evm-oapp-v2/contracts/oft/OFT.sol";
import { ILpNft } from "./ILpNft.sol";
import { IUstcPlus } from "./IUstcPlus.sol";

contract UstcPlus is OFT, IUstcPlus {
    ILpNft private _lpNft;
    address public lpManager;

    modifier onlyLpNft {
        require(msg.sender == lpNft(), "not LP NFT");
        _;
    }

    modifier onlyLpManager {
        require(msg.sender == address(lpManager), "npt lp manager");
        _;
    }

    constructor(
        address lpNft_,
        address _lpManager,
        address _lzEndpoint,
        address _delegate
    ) OFT("USTC Plus", "USTC+", _lzEndpoint, _delegate) Ownable(_delegate) {
        _lpNft = ILpNft(lpNft_);
        lpManager = _lpManager;
    }

    function lpNft() public view returns(address) {
        return address(_lpNft);
    }

    function _update(address from, address to, uint256 value) internal override {
        if (to == address(0) || from == address(0)) {
            super._update(from, to, value);
        } else {
            uint256 percent = value / 100;
            uint256 remaining = value - percent;
            super._update(from, lpNft(), percent);
            require(_lpNft.distribute(percent));
            super._update(from, to, remaining);
        }
    }

    // This function transfers tokens to the user without slashing 1% fee.
    function transferByLpNft(address to, uint256 value) external onlyLpNft returns(bool) {
        super._update(lpNft(), to, value);
        return true;
    }

    function mintByLpManager(address to, uint256 value) external onlyLpManager returns(uint256) {
        _mint(to, value);
        return value;
    }
}
