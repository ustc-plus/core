// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { ERC721Upgradeable } from '@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol';
import {OwnableUpgradeable} from '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import { IERC20 } from '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import { ILpNft } from "./ILpNft.sol";
import { IUstcPlus } from "./IUstcPlus.sol";

// Todo, make it with metadata and enumerable
contract LpNft is ERC721Upgradeable, OwnableUpgradeable, ILpNft {
  struct Params {
    uint256 usdcAmount;
    uint256 ustcPlusAmount;
    uint256 usdcTaken;
    uint256 ustcPlusTaken;
    uint256 startTime;
  }

  address public dao;
  IERC20 public usdc;
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

  function setUsdc(address _usdc) external onlyOwner {
    require(address(usdc) == address(0), 'already set');
    usdc = IERC20(_usdc);
  }

  function setDao(address _dao) external onlyOwner {
    require(dao == address(0), 'already set');
    dao = _dao;
  }


  function distribute(uint256 _amount) external override returns (bool) {}

  function mint(address _to, uint256 tokenId, uint256 _usdcAmount, uint256 _ustcPlusAmount) external override onlyLpManager {
    _safeMint(_to, tokenId);

    paramsOf[tokenId] = Params(_usdcAmount, _ustcPlusAmount, 0, 0, block.timestamp);
  }

  function burn(uint256 tokenId) external override returns (bool) {
    return redeem(tokenId, 100);
  }

  function redeem(uint256 tokenId, uint256 percent) public override returns (bool) {
    require(_getApproved(tokenId) == msg.sender || ownerOf(tokenId) == msg.sender, "no permission");
    require(slashEndTime(tokenId) > 0, "invalid token");
    require(percent > 0 && percent <= 100, "one value only");
    Params memory _params = paramsOf[tokenId];

    uint256 slashingPercentage = slashCurrentAmount(tokenId);

    uint256 _usdcPercent = (_params.usdcAmount - _params.usdcTaken) / (percent + slashingPercentage);
    uint256 _ustcPlusPercent = (_params.ustcPlusAmount - _params.ustcPlusTaken) / (percent + slashingPercentage);

    uint256 _usdcSlashing = _usdcPercent * slashingPercentage;
    uint256 _ustcPlusSlashing = _ustcPlusPercent * slashingPercentage;

    uint256 _usdcAmount = _usdcPercent * percent;
    uint256 _ustcPlusAmount = _ustcPlusPercent * percent;

    if (slashingPercentage > 0) {
      usdc.transfer(dao, _usdcSlashing);
      ustcPlus.transfer(dao, _ustcPlusSlashing);
    }

    usdc.transfer(msg.sender, _usdcAmount);
    ustcPlus.transfer(msg.sender, _ustcPlusAmount);

    paramsOf[tokenId].usdcTaken += _usdcSlashing + _usdcAmount;
    paramsOf[tokenId].ustcPlusTaken += _ustcPlusSlashing + _ustcPlusAmount;

    if (percent == 100 || paramsOf[tokenId].usdcAmount - paramsOf[tokenId].usdcTaken == 0) {
      _burn(tokenId);
    }

    return true;
  }

  function slashEndTime(uint256 tokenId) public view override returns (uint256) {
    if (paramsOf[tokenId].startTime == 0) {
      return 0;
    }
    if (ownerOf(tokenId) == address(0)) {
      return 0;
    }

    return paramsOf[tokenId].startTime + (63120000); // 63 million seconds are 24 months
  }

  // returns amount of slashing percents
  function slashCurrentAmount(uint256 tokenId) public view override returns (uint256) {
    uint256 _endTime = slashEndTime(tokenId);
    if (_endTime == 0) {
      return (0);
    }

    Params memory _params = paramsOf[tokenId];

    uint256 monthsPassed = (block.timestamp - _params.startTime) % 2592000;   // 2.5 million seconds in 30 days or 1% per 30 days
    uint256 slashingPercentage = 24;
    if (monthsPassed > 24) {
      slashingPercentage = 0;
    } else {
      slashingPercentage -= monthsPassed;
    }

    return slashingPercentage;
  }
}
