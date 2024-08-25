// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { ERC721Upgradeable } from '@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol';
import {OwnableUpgradeable} from '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import { ILpNft } from "./ILpNft.sol";
import { IUstcPlus } from "./IUstcPlus.sol";

contract LpNft is ERC721Upgradeable, OwnableUpgradeable, ILpNft {
  uint256 private _tokenIdCounter;
  IUstcPlus public ustcPlus;

  function initialize() public initializer {
    __ERC721_init('USTC+ LP', 'USTCLP');
    __Ownable_init(msg.sender);
  }

  function setUstcPlus(address _ustcPlus) external onlyOwner {
    require(address(ustcPlus) == address(0), 'already set');
    ustcPlus = IUstcPlus(_ustcPlus);
    require(ustcPlus.lpNft() == address(this), 'not valid USTC+');
  }

  function distribute(uint256 _amount) external override returns (bool) {}

  function mint(uint256 _amount1, uint256 _amount2) external override returns (uint256) {
    uint256 tokenId = _tokenIdCounter;
    _tokenIdCounter += 1;
    _safeMint(msg.sender, tokenId);

    return _tokenIdCounter;
  }

  function burn(uint256 tokenId) external override returns (bool) {}

  function burnFrom(uint256 tokenId, address owner) external override returns (bool) {}

  function redeem(uint256 tokenId, uint256 amount1, uint256 amount2) external override returns (bool) {}

  function redeemFrom(
    uint256 tokenId,
    uint256 amount1,
    uint256 amount2,
    address owner
  ) external override returns (bool) {}

  function slashEndTime(uint256 tokenId) external view override returns (uint256) {}

  function slashCurrentAmount() external view override returns (uint256, uint256) {}
}
