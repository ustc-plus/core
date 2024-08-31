// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { ERC721Upgradeable } from '@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol';
import {OwnableUpgradeable} from '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import { IERC20 } from '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import { ILpNft } from "./ILpNft.sol";
import { IUstcPlus } from "./IUstcPlus.sol";
import { Context } from "@openzeppelin/contracts/utils/Context.sol";
import { Address } from "@openzeppelin/contracts/utils/Address.sol";

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

  // Reflect parameters
  using Address for address;
  bool private _reflectInitiated;
  mapping (uint256 => uint256) private _rOwned;
  uint256 public constant HODLER_ID = ~uint256(0);
  uint256 private constant MAX = ~uint256(0);
  uint256 public constant _tTotal = 10 * 10**18 * 10**18;
  uint256 public _rTotal;
  uint256 public _tFeeTotal;

  event Redeem(uint256 tokenId, uint256 reflectAmount, uint256 tAmount);

  modifier onlyLpManager {
    require(msg.sender == lpManager, "not manager");
    _;
  }

  modifier onlyUstcPlus {
    require(msg.sender == address(ustcPlus), "not ustc+");
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

  function distribute(uint256 _amount) external override onlyUstcPlus returns (bool) {
    uint256 rAmount = _reflectGetValues(_amount);
    _rOwned[HODLER_ID] -= rAmount;
    paramsOf[HODLER_ID].ustcPlusAmount -= _amount;   

    _reflectFee(rAmount, _amount);

    return true;
  }

  function mint(address _to, uint256 tokenId, uint256 _usdcAmount, uint256 _ustcPlusAmount) external override onlyLpManager {
    _safeMint(_to, tokenId);

    paramsOf[tokenId] = Params(_usdcAmount, _ustcPlusAmount, 0, 0, block.timestamp);
    _transferFromExcluded(tokenId, _ustcPlusAmount);
  }

  function _transferFromExcluded(uint256 recipient, uint256 tAmount) private {
      (uint256 rAmount) = _reflectGetValues(tAmount);
      paramsOf[HODLER_ID].ustcPlusAmount -= tAmount;
      _rOwned[HODLER_ID] -= rAmount;
      _rOwned[recipient] += rAmount;   
  }

  function burn(uint256 tokenId) external override returns (bool) {
    return redeem(tokenId, 100);
  }

  function redeem(uint256 tokenId, uint256 percent) public override returns (bool) {
    require(ownerOf(tokenId) == msg.sender, "no permission");
    require(slashEndTime(tokenId) > 0, "invalid token");
    require(percent > 0 && percent <= 100, "one value only");
    Params memory _params = paramsOf[tokenId];
    require(_rOwned[tokenId] > 0, "drained and redeemed");

    uint256 _usdcPercent = (_params.usdcAmount - _params.usdcTaken) / 100;
    uint256 _reflectPercent = _rOwned[tokenId] / 100;

    uint256 _usdcTaken = _usdcPercent * percent;
    uint256 _reflectTaken = _reflectPercent * percent;

    uint256 _usdcSlashing = 0;
    uint256 _ustcPlusSlashing = 0;

    uint256 slashingPercentage = slashCurrentAmount(tokenId);
    if (slashingPercentage > 0) {
      uint256 _usdcAtom = _usdcTaken / 100;
      uint256 _ustcPlusAtom = _reflectTaken/ 100;

      _usdcSlashing = _usdcAtom * slashingPercentage;
      _ustcPlusSlashing = _ustcPlusAtom * slashingPercentage;

      _usdcTaken -= _usdcSlashing;
      _reflectTaken -= _ustcPlusSlashing;

      usdc.transfer(dao, _usdcSlashing);
      ustcPlus.transferByLpNft(dao, tokenFromReflection(_ustcPlusSlashing));
    }

    usdc.transfer(msg.sender, _usdcTaken);
    ustcPlus.transferByLpNft(msg.sender, tokenFromReflection(_reflectTaken));

    paramsOf[tokenId].usdcTaken += _usdcTaken + _usdcSlashing;
    paramsOf[tokenId].ustcPlusTaken += _reflectTaken + _ustcPlusSlashing;

    _transferToExcluded(tokenId, _reflectTaken + _ustcPlusSlashing);

    if (percent == 100) {
      _burn(tokenId);
    }

    emit Redeem(tokenId, _reflectTaken, _reflectTaken + _ustcPlusSlashing);

    return true;
  }

  function _transferToExcluded(uint256 sender, uint256 rAmount) private {
    _rOwned[sender] -= rAmount;
    paramsOf[HODLER_ID].ustcPlusAmount += tokenFromReflection(rAmount);
    _rOwned[HODLER_ID] += rAmount;           
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

    uint256 monthsPassed = (block.timestamp - _params.startTime) / 2592000;   // 2.5 million seconds in 30 days or 1% per 30 days
    uint256 slashingPercentage = 24;
    if (monthsPassed > 24) {
      slashingPercentage = 0;
    } else {
      slashingPercentage -= monthsPassed;
    }

    return slashingPercentage;
  }

  function setupReflect() external onlyOwner {
    require(_reflectInitiated == false, "initiated already");
    _rTotal = (MAX - (MAX % _tTotal));
    paramsOf[HODLER_ID] = Params(0, _tTotal, 0, 0, block.timestamp);
    _rOwned[HODLER_ID] = _rTotal;

    _reflectInitiated = true;
  }

  function reflectBalanceOf(uint256 tokenId) external view returns (uint256) {
    return tokenFromReflection(_rOwned[tokenId]);
  }

  function reflect(uint256 tokenId, uint256 tAmount) public {
    require(ownerOf(tokenId) == msg.sender, "not yours");
    uint256 rAmount = _reflectGetValues(tAmount);
    _rOwned[tokenId] = _rOwned[tokenId] - rAmount;
    _rTotal = _rTotal - rAmount;
    _tFeeTotal = _tFeeTotal + tAmount;
  }

  function reflectionFromToken(uint256 tAmount) public view returns(uint256) {
    require(tAmount <= _tTotal, "Amount must be less than supply");
    uint256 rAmount = _reflectGetValues(tAmount);
    return rAmount;
  }

  function tokenFromReflection(uint256 rAmount) public view returns(uint256) {
    require(rAmount <= _rTotal, "Amount must be less than total reflections");
    uint256 currentRate = _reflectGetRate();
    return rAmount / currentRate;
  }

  function _reflectFee(uint256 rFee, uint256 tFee) private {
    _rTotal -= rFee;
    _tFeeTotal += tFee;
  }

  function _reflectGetValues(uint256 tTransferAmount) private view returns(uint256) {
    uint256 currentRate = _reflectGetRate();
    uint256 rAmount = _reflectGetRValues(tTransferAmount, currentRate);
    return (rAmount);
  }

  function _reflectGetRValues(uint256 tAmount, uint256 currentRate) private pure returns (uint256) {
    uint256 rAmount = tAmount * currentRate;
    return (rAmount);
  }

  function _reflectGetRate() private view returns(uint256) {
    (uint256 rSupply, uint256 tSupply) = _reflectGetCurrentSupply();
    return rSupply / tSupply;
  }

  function _reflectGetCurrentSupply() private view returns(uint256, uint256) {
    uint256 rSupply = _rTotal;
    uint256 tSupply = _tTotal;
    if (_rOwned[HODLER_ID] > rSupply || paramsOf[HODLER_ID].ustcPlusAmount > tSupply) return (_rTotal, _tTotal);

    rSupply -= _rOwned[HODLER_ID];
    tSupply -= paramsOf[HODLER_ID].ustcPlusAmount;
    if (rSupply < _rTotal / _tTotal) return (_rTotal, _tTotal);
    return (rSupply, tSupply);
  }
}
