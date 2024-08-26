// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { ERC721Upgradeable } from '@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol';
import {OwnableUpgradeable} from '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import { ILpNft } from "./ILpNft.sol";
import { IUstcPlus } from "./IUstcPlus.sol";

// Todo, make it with metadata and enumerable
contract LpNft is ERC721Upgradeable, OwnableUpgradeable, ILpNft {
  struct Params {
    uint256 usdcAmount;
    uint256 ustcPlusAmount;
    uint256 startTime;
  }

  IUstcPlus public ustcPlus;
  address public lpManager;

  mapping(uint256 => Params) public paramsOf;

  modifier onlyLpManager {
    require(msg.sender == lpManager, "not manager");
    _;
  }

  function initialize() public initializer {
    __ERC721_init('USTC+ LP', 'USTCLP');
    __Ownable_init(msg.sender);
  }

  function setLpManager(address _lpManager) external onlyOwner {
    require(address(lpManager) == address(0), "already set");
    lpManager = _lpManager;
  }

  function setUstcPlus(address _ustcPlus) external onlyOwner {
    require(address(ustcPlus) == address(0), 'already set');
    ustcPlus = IUstcPlus(_ustcPlus);
  }

  function distribute(uint256 _amount) external override returns (bool) {}

  function mint(address _to, uint256 tokenId, uint256 _usdcAmount, uint256 _ustcPlusAmount) external override onlyLpManager {
    _safeMint(_to, tokenId);

    paramsOf[tokenId] = Params(_usdcAmount, _ustcPlusAmount, block.timestamp);
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
