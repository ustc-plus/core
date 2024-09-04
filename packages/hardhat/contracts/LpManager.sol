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
    address public signer;

    mapping(uint256 => Deposit) public deposits;

    event StartMinting(address indexed creator, uint256 indexed depositId, uint256 usdcAmount);
    event EndMinting(address indexed creator, uint256 indexed depositIdIsTokenId, uint256 _ustcPlusAmount);
    event Wrap(address indexed creator, bytes32 indexed _terraAddress, uint256 _ustcPlusAmount);
    event Unwrap(address indexed creator, bytes32 indexed _terraAddress, uint256 _ustcPlusAmount);

    function initialize() public initializer {
        __Ownable_init(msg.sender);
        signer = msg.sender;
    }

    function setSigner(address _signer) external onlyOwner {
        signer = _signer;
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

    function endMinting(uint256 _depositId, uint256 _ustcPlusAmount, uint8 v, bytes32 r, bytes32 s) external {
        // The two lines below prevents reentrancy.
        require(deposits[_depositId].activated, "not activated");
        require(deposits[_depositId].ustcPlusAmount == 0, "already activated");

        require(deposits[_depositId].owner == msg.sender, "not yours");
        require(mintingValid(msg.sender, _depositId, _ustcPlusAmount, v, r, s));

        // Todo verify that _ustcPlus is valid
        ustcPlus.mintByLpManager(address(lpNft), _ustcPlusAmount);
        usdc.transfer(address(lpNft), deposits[_depositId].usdcAmount);
        lpNft.mint(msg.sender, _depositId, deposits[_depositId].usdcAmount, _ustcPlusAmount);

        deposits[_depositId].ustcPlusAmount = _ustcPlusAmount;

        emit EndMinting(msg.sender, depositId, _ustcPlusAmount);
    }

    function mintingValid(address _owner, uint256 _depositId, uint256 _ustcPlusAmount,
        uint8 v, bytes32 r, bytes32 s) public view returns (bool){

        bytes32 hash = encodeMintingParams(_owner, _depositId, _ustcPlusAmount);

        address recover = ecrecover(hash, v, r, s);
        require(recover == signer,  "Verification failed");

        return true;
    }

    function encodeMintingParams(
        address _owner,
        uint256 _nftId,
        uint256 _ustcPlusAmount
    )
        public
        pure
        returns (bytes32 message)
    {
        bytes memory prefix = "\x19Ethereum Signed Message:\n32";
        bytes32 messageNoPrefix = keccak256(abi
            .encode(_owner, _nftId, _ustcPlusAmount));
        bytes32 hash = keccak256(abi.encodePacked(prefix, messageNoPrefix));

        return hash;
    }

    // Not implemented yet
    function wrap(bytes32 _terraAddress, uint256 _ustcPlusAmount, uint8, bytes32, bytes32) external {
        revert("Not implemented yet");

        ustcPlus.mintByLpManager(msg.sender, _ustcPlusAmount);

        emit Wrap(msg.sender, _terraAddress, _ustcPlusAmount);
    }

    function unwrap(bytes32 _terraAddress, uint256 _ustcPlusAmount) external {
        require(ustcPlus.burnByLpManager(msg.sender, _ustcPlusAmount), "failed to burn");

        emit Unwrap(msg.sender, _terraAddress, _ustcPlusAmount);
    }
}
