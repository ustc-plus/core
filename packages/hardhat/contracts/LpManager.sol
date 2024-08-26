// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { ERC721Upgradeable } from '@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol';
import {OwnableUpgradeable} from '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import { IERC20 } from '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import { ILpNft } from "./ILpNft.sol";
import { IUstcPlus } from "./IUstcPlus.sol";

// Create a new LP NFTs
contract LpManager is OwnableUpgradeable {
    struct Deposit {
        bool activated;
        uint256 usdcAmount;
        uint256 ustcPlusAmount;
        address owner;
    }

    address public ustcPlusBuyer;
    IUstcPlus public ustcPlus;
    ILpNft public lpNft;
    IERC20 public usdc;
    uint256 private depositId;

    mapping(uint256 => Deposit) public deposits;

    event StartMinting(address indexed creator, uint256 indexed depositId, uint256 usdcAmount);
    event EndMinting(address indexed creator, uint256 indexed depositIdIsTokenId, uint256 _ustcPlusAmount);

    function initialize() public initializer {
        __Ownable_init(msg.sender);
    }

    function setUstcPlus(address _ustcPlus) external onlyOwner {
        require(address(ustcPlus) == address(0), 'already set');
        ustcPlus = IUstcPlus(_ustcPlus);
    }

    function setLpNft(address _lpNft) external onlyOwner {
        require(address(lpNft) == address(0), 'already set');
        lpNft = ILpNft(_lpNft);
    }

    function setUsdc(address _usdc) external onlyOwner {
        require(address(usdc) == address(0), "already set");
        usdc = IERC20(_usdc);
    }

    function setUstcBuyer(address _buyer) external onlyOwner {
        require(_buyer != address(0), "0");
        ustcPlusBuyer = _buyer;
    }

    // Given _amount tokens
    function startMinting(uint256 _amount) external {
        require(usdc.balanceOf(msg.sender) >= _amount, "not enough balance");

        uint256 half = _amount / 2;
        
        // send to the chainlink the notification to get ustcAmount
        require(usdc.transferFrom(msg.sender, address(this), half), "failed to deposit");
        require(usdc.transferFrom(msg.sender, ustcPlusBuyer, half), "failed to deposit");

        ++depositId;
        // ustc+ has 18 decimals, usdc has 6 decimals.
        deposits[depositId] = Deposit(true, half, 0, msg.sender);

        // It emits the order
        emit StartMinting(msg.sender, depositId, half);
    }

    function endMinting(uint256 _depositId, uint256 _ustcPlusAmount, uint8, bytes32, bytes32) external {
        require(deposits[_depositId].activated, "not activated");
        require(deposits[_depositId].ustcPlusAmount == 0, "already activated");
        require(deposits[_depositId].owner == msg.sender, "not yours");

        // Todo verify that _ustcPlus is valid
        ustcPlus.mintByLpManager(address(lpNft), _ustcPlusAmount);
        usdc.transfer(address(lpNft), deposits[_depositId].usdcAmount);
        lpNft.mint(msg.sender, _depositId, deposits[_depositId].usdcAmount, _ustcPlusAmount);

        deposits[_depositId].ustcPlusAmount = _ustcPlusAmount;

        emit EndMinting(msg.sender, depositId, _ustcPlusAmount);
    }
}
