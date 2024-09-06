import {
  createWatchContractEvent,
  createReadContract,
  createWriteContract,
  createSimulateContract,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Address
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const addressAbi = [
  { type: 'error', inputs: [{ name: 'target', internalType: 'address', type: 'address' }], name: 'AddressEmptyCode' },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AddressInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ContextUpgradeable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const contextUpgradeableAbi = [
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'version', internalType: 'uint64', type: 'uint64', indexed: false }],
    name: 'Initialized',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC165Upgradeable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc165UpgradeableAbi = [
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'version', internalType: 'uint64', type: 'uint64', indexed: false }],
    name: 'Initialized',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20Abi = [
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  { type: 'error', inputs: [{ name: 'sender', internalType: 'address', type: 'address' }], name: 'ERC20InvalidSender' },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'spender', internalType: 'address', type: 'address', indexed: true },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721Upgradeable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721UpgradeableAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  { type: 'error', inputs: [{ name: 'owner', internalType: 'address', type: 'address' }], name: 'ERC721InvalidOwner' },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'address', type: 'address', indexed: true },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'operator', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'version', internalType: 'uint64', type: 'uint64', indexed: false }],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1155Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1155ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidApprover',
  },
  {
    type: 'error',
    inputs: [
      { name: 'idsLength', internalType: 'uint256', type: 'uint256' },
      { name: 'valuesLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InvalidArrayLength',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidSender',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1155MissingApprovalForAll',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc165Abi = [
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20Abi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'spender', internalType: 'address', type: 'address', indexed: true },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  { type: 'error', inputs: [{ name: 'sender', internalType: 'address', type: 'address' }], name: 'ERC20InvalidSender' },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20MetadataAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'spender', internalType: 'address', type: 'address', indexed: true },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721Abi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'address', type: 'address', indexed: true },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'operator', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  { type: 'error', inputs: [{ name: 'owner', internalType: 'address', type: 'address' }], name: 'ERC721InvalidOwner' },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721MetadataAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'address', type: 'address', indexed: true },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'operator', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Receiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ReceiverAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ILpNft
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iLpNftAbi = [
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_amount', internalType: 'uint256', type: 'uint256' }],
    name: 'distribute',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'usdcAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'ustcPlusAmount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'percents', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'redeem',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'slashCurrentAmount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'slashEndTime',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IUstcPlus
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iUstcPlusAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'spender', internalType: 'address', type: 'address', indexed: true },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'burnByLpManager',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lpNft',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mintByLpManager',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferByLpNft',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Initializable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const initializableAbi = [
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'version', internalType: 'uint64', type: 'uint64', indexed: false }],
    name: 'Initialized',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LpManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const lpManagerAbi = [
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  { type: 'error', inputs: [{ name: 'owner', internalType: 'address', type: 'address' }], name: 'OwnableInvalidOwner' },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'creator', internalType: 'address', type: 'address', indexed: true },
      { name: 'depositIdIsTokenId', internalType: 'uint256', type: 'uint256', indexed: true },
      { name: '_ustcPlusAmount', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'EndMinting',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'version', internalType: 'uint64', type: 'uint64', indexed: false }],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'previousOwner', internalType: 'address', type: 'address', indexed: true },
      { name: 'newOwner', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'creator', internalType: 'address', type: 'address', indexed: true },
      { name: 'depositId', internalType: 'uint256', type: 'uint256', indexed: true },
      { name: 'usdcAmount', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'StartMinting',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'creator', internalType: 'address', type: 'address', indexed: true },
      { name: '_terraAddress', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: '_ustcPlusAmount', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Unwrap',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'creator', internalType: 'address', type: 'address', indexed: true },
      { name: '_terraAddress', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: '_ustcPlusAmount', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Wrap',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'deposits',
    outputs: [
      { name: 'activated', internalType: 'bool', type: 'bool' },
      { name: 'usdcAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'ustcPlusAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_owner', internalType: 'address', type: 'address' },
      { name: '_nftId', internalType: 'uint256', type: 'uint256' },
      { name: '_ustcPlusAmount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'encodeMintingParams',
    outputs: [{ name: 'message', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_depositId', internalType: 'uint256', type: 'uint256' },
      { name: '_ustcPlusAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'endMinting',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  { type: 'function', inputs: [], name: 'initialize', outputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [],
    name: 'lpNft',
    outputs: [{ name: '', internalType: 'contract ILpNft', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_owner', internalType: 'address', type: 'address' },
      { name: '_depositId', internalType: 'uint256', type: 'uint256' },
      { name: '_ustcPlusAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'mintingValid',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  { type: 'function', inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [{ name: '_lpNft', internalType: 'address', type: 'address' }],
    name: 'setLpNft',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_signer', internalType: 'address', type: 'address' }],
    name: 'setSigner',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_usdc', internalType: 'address', type: 'address' }],
    name: 'setUsdc',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_buyer', internalType: 'address', type: 'address' }],
    name: 'setUstcBuyer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_ustcPlus', internalType: 'address', type: 'address' }],
    name: 'setUstcPlus',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'signer',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_amount', internalType: 'uint256', type: 'uint256' }],
    name: 'startMinting',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_terraAddress', internalType: 'bytes32', type: 'bytes32' },
      { name: '_ustcPlusAmount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'unwrap',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'usdc',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'ustcPlus',
    outputs: [{ name: '', internalType: 'contract IUstcPlus', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'ustcPlusBuyer',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_terraAddress', internalType: 'bytes32', type: 'bytes32' },
      { name: '_ustcPlusAmount', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint8', type: 'uint8' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'wrap',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const lpManagerAddress = {
  56: '0xCb3B96E8c57E90b8B74959c8475cD3245D02f053',
  137: '0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6',
  11155111: '0xC72C2e40574C1279fC3D3aDC54C7e055D9727348',
} as const

/**
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const lpManagerConfig = { address: lpManagerAddress, abi: lpManagerAbi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LpNft
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const lpNftAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  { type: 'error', inputs: [{ name: 'owner', internalType: 'address', type: 'address' }], name: 'ERC721InvalidOwner' },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  { type: 'error', inputs: [{ name: 'owner', internalType: 'address', type: 'address' }], name: 'OwnableInvalidOwner' },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'address', type: 'address', indexed: true },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'operator', internalType: 'address', type: 'address', indexed: true },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'version', internalType: 'uint64', type: 'uint64', indexed: false }],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'previousOwner', internalType: 'address', type: 'address', indexed: true },
      { name: 'newOwner', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'reflectAmount', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'tAmount', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Redeem',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [],
    name: 'HODLER_ID',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: '_rTotal',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: '_tFeeTotal',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: '_tTotal',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'dao',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_amount', internalType: 'uint256', type: 'uint256' }],
    name: 'distribute',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  { type: 'function', inputs: [], name: 'initialize', outputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lpManager',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_usdcAmount', internalType: 'uint256', type: 'uint256' },
      { name: '_ustcPlusAmount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'paramsOf',
    outputs: [
      { name: 'usdcAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'ustcPlusAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'usdcTaken', internalType: 'uint256', type: 'uint256' },
      { name: 'ustcPlusTaken', internalType: 'uint256', type: 'uint256' },
      { name: 'startTime', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'percent', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'redeem',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'tAmount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'reflect',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'reflectBalanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tAmount', internalType: 'uint256', type: 'uint256' }],
    name: 'reflectionFromToken',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  { type: 'function', inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_dao', internalType: 'address', type: 'address' }],
    name: 'setDao',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_lpManager', internalType: 'address', type: 'address' }],
    name: 'setLpManager',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_usdc', internalType: 'address', type: 'address' }],
    name: 'setUsdc',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_ustcPlus', internalType: 'address', type: 'address' }],
    name: 'setUstcPlus',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  { type: 'function', inputs: [], name: 'setupReflect', outputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'slashCurrentAmount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'slashEndTime',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'rAmount', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenFromReflection',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'usdc',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'ustcPlus',
    outputs: [{ name: '', internalType: 'contract IUstcPlus', type: 'address' }],
    stateMutability: 'view',
  },
] as const

/**
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const lpNftAddress = {
  56: '0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2',
  137: '0xF53dc83E9cE56612dd47cA24e7439C204B602A22',
  11155111: '0x9885055bEb85A0D35B1fFb982Acfeaf61f340877',
} as const

/**
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const lpNftConfig = { address: lpNftAddress, abi: lpNftAbi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Math
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mathAbi = [{ type: 'error', inputs: [], name: 'MathOverflowedMulDiv' }] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Message
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xF11f180eE37dd6aa7dD08b8C1Cd670fC4DBE0e34)
 */
export const messageAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address', indexed: false },
      { name: 'purpose', internalType: 'string', type: 'string', indexed: false },
    ],
    name: 'SetMessage',
  },
  {
    type: 'function',
    inputs: [],
    name: 'message',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_message', internalType: 'string', type: 'string' }],
    name: 'setMessage',
    outputs: [],
    stateMutability: 'payable',
  },
] as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xF11f180eE37dd6aa7dD08b8C1Cd670fC4DBE0e34)
 */
export const messageAddress = {
  11155111: '0xF11f180eE37dd6aa7dD08b8C1Cd670fC4DBE0e34',
} as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xF11f180eE37dd6aa7dD08b8C1Cd670fC4DBE0e34)
 */
export const messageConfig = { address: messageAddress, abi: messageAbi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OwnableUpgradeable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ownableUpgradeableAbi = [
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  { type: 'error', inputs: [{ name: 'owner', internalType: 'address', type: 'address' }], name: 'OwnableInvalidOwner' },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'version', internalType: 'uint64', type: 'uint64', indexed: false }],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'previousOwner', internalType: 'address', type: 'address', indexed: true },
      { name: 'newOwner', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  { type: 'function', inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Strings
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stringsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'length', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'StringsInsufficientHexLength',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TestErc20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x55d398326f99059fF775485246999027B3197955)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xc2132d05d31c914a87c6611c10748aeb04b58e8f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const testErc20Abi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  { type: 'error', inputs: [{ name: 'sender', internalType: 'address', type: 'address' }], name: 'ERC20InvalidSender' },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address', indexed: true },
      { name: 'spender', internalType: 'address', type: 'address', indexed: true },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x55d398326f99059fF775485246999027B3197955)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xc2132d05d31c914a87c6611c10748aeb04b58e8f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const testErc20Address = {
  56: '0x55d398326f99059fF775485246999027B3197955',
  137: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
  11155111: '0x32e5C809663F371ec25c7A21953647b448394aA3',
} as const

/**
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x55d398326f99059fF775485246999027B3197955)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xc2132d05d31c914a87c6611c10748aeb04b58e8f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const testErc20Config = { address: testErc20Address, abi: testErc20Abi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link contextUpgradeableAbi}__
 */
export const watchContextUpgradeableEvent = /*#__PURE__*/ createWatchContractEvent({ abi: contextUpgradeableAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link contextUpgradeableAbi}__ and `eventName` set to `"Initialized"`
 */
export const watchContextUpgradeableInitializedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: contextUpgradeableAbi,
  eventName: 'Initialized',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc165UpgradeableAbi}__
 */
export const readErc165Upgradeable = /*#__PURE__*/ createReadContract({ abi: erc165UpgradeableAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc165UpgradeableAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readErc165UpgradeableSupportsInterface = /*#__PURE__*/ createReadContract({
  abi: erc165UpgradeableAbi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc165UpgradeableAbi}__
 */
export const watchErc165UpgradeableEvent = /*#__PURE__*/ createWatchContractEvent({ abi: erc165UpgradeableAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc165UpgradeableAbi}__ and `eventName` set to `"Initialized"`
 */
export const watchErc165UpgradeableInitializedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc165UpgradeableAbi,
  eventName: 'Initialized',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const readErc20 = /*#__PURE__*/ createReadContract({ abi: erc20Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"allowance"`
 */
export const readErc20Allowance = /*#__PURE__*/ createReadContract({ abi: erc20Abi, functionName: 'allowance' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const readErc20BalanceOf = /*#__PURE__*/ createReadContract({ abi: erc20Abi, functionName: 'balanceOf' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"decimals"`
 */
export const readErc20Decimals = /*#__PURE__*/ createReadContract({ abi: erc20Abi, functionName: 'decimals' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"name"`
 */
export const readErc20Name = /*#__PURE__*/ createReadContract({ abi: erc20Abi, functionName: 'name' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"symbol"`
 */
export const readErc20Symbol = /*#__PURE__*/ createReadContract({ abi: erc20Abi, functionName: 'symbol' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const readErc20TotalSupply = /*#__PURE__*/ createReadContract({ abi: erc20Abi, functionName: 'totalSupply' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const writeErc20 = /*#__PURE__*/ createWriteContract({ abi: erc20Abi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const writeErc20Approve = /*#__PURE__*/ createWriteContract({ abi: erc20Abi, functionName: 'approve' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const writeErc20Transfer = /*#__PURE__*/ createWriteContract({ abi: erc20Abi, functionName: 'transfer' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const writeErc20TransferFrom = /*#__PURE__*/ createWriteContract({ abi: erc20Abi, functionName: 'transferFrom' })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__
 */
export const simulateErc20 = /*#__PURE__*/ createSimulateContract({ abi: erc20Abi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"approve"`
 */
export const simulateErc20Approve = /*#__PURE__*/ createSimulateContract({ abi: erc20Abi, functionName: 'approve' })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transfer"`
 */
export const simulateErc20Transfer = /*#__PURE__*/ createSimulateContract({ abi: erc20Abi, functionName: 'transfer' })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateErc20TransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: erc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20Abi}__
 */
export const watchErc20Event = /*#__PURE__*/ createWatchContractEvent({ abi: erc20Abi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Approval"`
 */
export const watchErc20ApprovalEvent = /*#__PURE__*/ createWatchContractEvent({ abi: erc20Abi, eventName: 'Approval' })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const watchErc20TransferEvent = /*#__PURE__*/ createWatchContractEvent({ abi: erc20Abi, eventName: 'Transfer' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721UpgradeableAbi}__
 */
export const readErc721Upgradeable = /*#__PURE__*/ createReadContract({ abi: erc721UpgradeableAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721UpgradeableAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readErc721UpgradeableBalanceOf = /*#__PURE__*/ createReadContract({
  abi: erc721UpgradeableAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721UpgradeableAbi}__ and `functionName` set to `"getApproved"`
 */
export const readErc721UpgradeableGetApproved = /*#__PURE__*/ createReadContract({
  abi: erc721UpgradeableAbi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721UpgradeableAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readErc721UpgradeableIsApprovedForAll = /*#__PURE__*/ createReadContract({
  abi: erc721UpgradeableAbi,
  functionName: 'isApprovedForAll',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721UpgradeableAbi}__ and `functionName` set to `"name"`
 */
export const readErc721UpgradeableName = /*#__PURE__*/ createReadContract({
  abi: erc721UpgradeableAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721UpgradeableAbi}__ and `functionName` set to `"ownerOf"`
 */
export const readErc721UpgradeableOwnerOf = /*#__PURE__*/ createReadContract({
  abi: erc721UpgradeableAbi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721UpgradeableAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readErc721UpgradeableSupportsInterface = /*#__PURE__*/ createReadContract({
  abi: erc721UpgradeableAbi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721UpgradeableAbi}__ and `functionName` set to `"symbol"`
 */
export const readErc721UpgradeableSymbol = /*#__PURE__*/ createReadContract({
  abi: erc721UpgradeableAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link erc721UpgradeableAbi}__ and `functionName` set to `"tokenURI"`
 */
export const readErc721UpgradeableTokenUri = /*#__PURE__*/ createReadContract({
  abi: erc721UpgradeableAbi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721UpgradeableAbi}__
 */
export const writeErc721Upgradeable = /*#__PURE__*/ createWriteContract({ abi: erc721UpgradeableAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721UpgradeableAbi}__ and `functionName` set to `"approve"`
 */
export const writeErc721UpgradeableApprove = /*#__PURE__*/ createWriteContract({
  abi: erc721UpgradeableAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721UpgradeableAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writeErc721UpgradeableSafeTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: erc721UpgradeableAbi,
  functionName: 'safeTransferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721UpgradeableAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writeErc721UpgradeableSetApprovalForAll = /*#__PURE__*/ createWriteContract({
  abi: erc721UpgradeableAbi,
  functionName: 'setApprovalForAll',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link erc721UpgradeableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeErc721UpgradeableTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: erc721UpgradeableAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc721UpgradeableAbi}__
 */
export const simulateErc721Upgradeable = /*#__PURE__*/ createSimulateContract({ abi: erc721UpgradeableAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc721UpgradeableAbi}__ and `functionName` set to `"approve"`
 */
export const simulateErc721UpgradeableApprove = /*#__PURE__*/ createSimulateContract({
  abi: erc721UpgradeableAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc721UpgradeableAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulateErc721UpgradeableSafeTransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: erc721UpgradeableAbi,
  functionName: 'safeTransferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc721UpgradeableAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulateErc721UpgradeableSetApprovalForAll = /*#__PURE__*/ createSimulateContract({
  abi: erc721UpgradeableAbi,
  functionName: 'setApprovalForAll',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link erc721UpgradeableAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateErc721UpgradeableTransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: erc721UpgradeableAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc721UpgradeableAbi}__
 */
export const watchErc721UpgradeableEvent = /*#__PURE__*/ createWatchContractEvent({ abi: erc721UpgradeableAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc721UpgradeableAbi}__ and `eventName` set to `"Approval"`
 */
export const watchErc721UpgradeableApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc721UpgradeableAbi,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc721UpgradeableAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchErc721UpgradeableApprovalForAllEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc721UpgradeableAbi,
  eventName: 'ApprovalForAll',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc721UpgradeableAbi}__ and `eventName` set to `"Initialized"`
 */
export const watchErc721UpgradeableInitializedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc721UpgradeableAbi,
  eventName: 'Initialized',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc721UpgradeableAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchErc721UpgradeableTransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc721UpgradeableAbi,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc165Abi}__
 */
export const readIerc165 = /*#__PURE__*/ createReadContract({ abi: ierc165Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc165Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const readIerc165SupportsInterface = /*#__PURE__*/ createReadContract({
  abi: ierc165Abi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const readIerc20 = /*#__PURE__*/ createReadContract({ abi: ierc20Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"allowance"`
 */
export const readIerc20Allowance = /*#__PURE__*/ createReadContract({ abi: ierc20Abi, functionName: 'allowance' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"balanceOf"`
 */
export const readIerc20BalanceOf = /*#__PURE__*/ createReadContract({ abi: ierc20Abi, functionName: 'balanceOf' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"totalSupply"`
 */
export const readIerc20TotalSupply = /*#__PURE__*/ createReadContract({ abi: ierc20Abi, functionName: 'totalSupply' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const writeIerc20 = /*#__PURE__*/ createWriteContract({ abi: ierc20Abi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"approve"`
 */
export const writeIerc20Approve = /*#__PURE__*/ createWriteContract({ abi: ierc20Abi, functionName: 'approve' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transfer"`
 */
export const writeIerc20Transfer = /*#__PURE__*/ createWriteContract({ abi: ierc20Abi, functionName: 'transfer' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const writeIerc20TransferFrom = /*#__PURE__*/ createWriteContract({
  abi: ierc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20Abi}__
 */
export const simulateIerc20 = /*#__PURE__*/ createSimulateContract({ abi: ierc20Abi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"approve"`
 */
export const simulateIerc20Approve = /*#__PURE__*/ createSimulateContract({ abi: ierc20Abi, functionName: 'approve' })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transfer"`
 */
export const simulateIerc20Transfer = /*#__PURE__*/ createSimulateContract({ abi: ierc20Abi, functionName: 'transfer' })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20Abi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateIerc20TransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: ierc20Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc20Abi}__
 */
export const watchIerc20Event = /*#__PURE__*/ createWatchContractEvent({ abi: ierc20Abi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc20Abi}__ and `eventName` set to `"Approval"`
 */
export const watchIerc20ApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc20Abi,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc20Abi}__ and `eventName` set to `"Transfer"`
 */
export const watchIerc20TransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc20Abi,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const readIerc20Metadata = /*#__PURE__*/ createReadContract({ abi: ierc20MetadataAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"allowance"`
 */
export const readIerc20MetadataAllowance = /*#__PURE__*/ createReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readIerc20MetadataBalanceOf = /*#__PURE__*/ createReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"decimals"`
 */
export const readIerc20MetadataDecimals = /*#__PURE__*/ createReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"name"`
 */
export const readIerc20MetadataName = /*#__PURE__*/ createReadContract({ abi: ierc20MetadataAbi, functionName: 'name' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"symbol"`
 */
export const readIerc20MetadataSymbol = /*#__PURE__*/ createReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"totalSupply"`
 */
export const readIerc20MetadataTotalSupply = /*#__PURE__*/ createReadContract({
  abi: ierc20MetadataAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const writeIerc20Metadata = /*#__PURE__*/ createWriteContract({ abi: ierc20MetadataAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const writeIerc20MetadataApprove = /*#__PURE__*/ createWriteContract({
  abi: ierc20MetadataAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transfer"`
 */
export const writeIerc20MetadataTransfer = /*#__PURE__*/ createWriteContract({
  abi: ierc20MetadataAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeIerc20MetadataTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: ierc20MetadataAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const simulateIerc20Metadata = /*#__PURE__*/ createSimulateContract({ abi: ierc20MetadataAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const simulateIerc20MetadataApprove = /*#__PURE__*/ createSimulateContract({
  abi: ierc20MetadataAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transfer"`
 */
export const simulateIerc20MetadataTransfer = /*#__PURE__*/ createSimulateContract({
  abi: ierc20MetadataAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateIerc20MetadataTransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: ierc20MetadataAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__
 */
export const watchIerc20MetadataEvent = /*#__PURE__*/ createWatchContractEvent({ abi: ierc20MetadataAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `eventName` set to `"Approval"`
 */
export const watchIerc20MetadataApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc20MetadataAbi,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc20MetadataAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchIerc20MetadataTransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc20MetadataAbi,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721Abi}__
 */
export const readIerc721 = /*#__PURE__*/ createReadContract({ abi: ierc721Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"balanceOf"`
 */
export const readIerc721BalanceOf = /*#__PURE__*/ createReadContract({ abi: ierc721Abi, functionName: 'balanceOf' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"getApproved"`
 */
export const readIerc721GetApproved = /*#__PURE__*/ createReadContract({ abi: ierc721Abi, functionName: 'getApproved' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readIerc721IsApprovedForAll = /*#__PURE__*/ createReadContract({
  abi: ierc721Abi,
  functionName: 'isApprovedForAll',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"ownerOf"`
 */
export const readIerc721OwnerOf = /*#__PURE__*/ createReadContract({ abi: ierc721Abi, functionName: 'ownerOf' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const readIerc721SupportsInterface = /*#__PURE__*/ createReadContract({
  abi: ierc721Abi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721Abi}__
 */
export const writeIerc721 = /*#__PURE__*/ createWriteContract({ abi: ierc721Abi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"approve"`
 */
export const writeIerc721Approve = /*#__PURE__*/ createWriteContract({ abi: ierc721Abi, functionName: 'approve' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writeIerc721SafeTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: ierc721Abi,
  functionName: 'safeTransferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writeIerc721SetApprovalForAll = /*#__PURE__*/ createWriteContract({
  abi: ierc721Abi,
  functionName: 'setApprovalForAll',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const writeIerc721TransferFrom = /*#__PURE__*/ createWriteContract({
  abi: ierc721Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721Abi}__
 */
export const simulateIerc721 = /*#__PURE__*/ createSimulateContract({ abi: ierc721Abi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"approve"`
 */
export const simulateIerc721Approve = /*#__PURE__*/ createSimulateContract({ abi: ierc721Abi, functionName: 'approve' })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulateIerc721SafeTransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: ierc721Abi,
  functionName: 'safeTransferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulateIerc721SetApprovalForAll = /*#__PURE__*/ createSimulateContract({
  abi: ierc721Abi,
  functionName: 'setApprovalForAll',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721Abi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateIerc721TransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: ierc721Abi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721Abi}__
 */
export const watchIerc721Event = /*#__PURE__*/ createWatchContractEvent({ abi: ierc721Abi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721Abi}__ and `eventName` set to `"Approval"`
 */
export const watchIerc721ApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc721Abi,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchIerc721ApprovalForAllEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc721Abi,
  eventName: 'ApprovalForAll',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721Abi}__ and `eventName` set to `"Transfer"`
 */
export const watchIerc721TransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc721Abi,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const readIerc721Metadata = /*#__PURE__*/ createReadContract({ abi: ierc721MetadataAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readIerc721MetadataBalanceOf = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"getApproved"`
 */
export const readIerc721MetadataGetApproved = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const readIerc721MetadataIsApprovedForAll = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'isApprovedForAll',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"name"`
 */
export const readIerc721MetadataName = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"ownerOf"`
 */
export const readIerc721MetadataOwnerOf = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readIerc721MetadataSupportsInterface = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"symbol"`
 */
export const readIerc721MetadataSymbol = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"tokenURI"`
 */
export const readIerc721MetadataTokenUri = /*#__PURE__*/ createReadContract({
  abi: ierc721MetadataAbi,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const writeIerc721Metadata = /*#__PURE__*/ createWriteContract({ abi: ierc721MetadataAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const writeIerc721MetadataApprove = /*#__PURE__*/ createWriteContract({
  abi: ierc721MetadataAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const writeIerc721MetadataSafeTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: ierc721MetadataAbi,
  functionName: 'safeTransferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const writeIerc721MetadataSetApprovalForAll = /*#__PURE__*/ createWriteContract({
  abi: ierc721MetadataAbi,
  functionName: 'setApprovalForAll',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeIerc721MetadataTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: ierc721MetadataAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const simulateIerc721Metadata = /*#__PURE__*/ createSimulateContract({ abi: ierc721MetadataAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"approve"`
 */
export const simulateIerc721MetadataApprove = /*#__PURE__*/ createSimulateContract({
  abi: ierc721MetadataAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const simulateIerc721MetadataSafeTransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: ierc721MetadataAbi,
  functionName: 'safeTransferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const simulateIerc721MetadataSetApprovalForAll = /*#__PURE__*/ createSimulateContract({
  abi: ierc721MetadataAbi,
  functionName: 'setApprovalForAll',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateIerc721MetadataTransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: ierc721MetadataAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__
 */
export const watchIerc721MetadataEvent = /*#__PURE__*/ createWatchContractEvent({ abi: ierc721MetadataAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"Approval"`
 */
export const watchIerc721MetadataApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc721MetadataAbi,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const watchIerc721MetadataApprovalForAllEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc721MetadataAbi,
  eventName: 'ApprovalForAll',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc721MetadataAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchIerc721MetadataTransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc721MetadataAbi,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__
 */
export const writeIerc721Receiver = /*#__PURE__*/ createWriteContract({ abi: ierc721ReceiverAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const writeIerc721ReceiverOnErc721Received = /*#__PURE__*/ createWriteContract({
  abi: ierc721ReceiverAbi,
  functionName: 'onERC721Received',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__
 */
export const simulateIerc721Receiver = /*#__PURE__*/ createSimulateContract({ abi: ierc721ReceiverAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const simulateIerc721ReceiverOnErc721Received = /*#__PURE__*/ createSimulateContract({
  abi: ierc721ReceiverAbi,
  functionName: 'onERC721Received',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iLpNftAbi}__
 */
export const readILpNft = /*#__PURE__*/ createReadContract({ abi: iLpNftAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iLpNftAbi}__ and `functionName` set to `"slashCurrentAmount"`
 */
export const readILpNftSlashCurrentAmount = /*#__PURE__*/ createReadContract({
  abi: iLpNftAbi,
  functionName: 'slashCurrentAmount',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iLpNftAbi}__ and `functionName` set to `"slashEndTime"`
 */
export const readILpNftSlashEndTime = /*#__PURE__*/ createReadContract({ abi: iLpNftAbi, functionName: 'slashEndTime' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iLpNftAbi}__
 */
export const writeILpNft = /*#__PURE__*/ createWriteContract({ abi: iLpNftAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iLpNftAbi}__ and `functionName` set to `"burn"`
 */
export const writeILpNftBurn = /*#__PURE__*/ createWriteContract({ abi: iLpNftAbi, functionName: 'burn' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iLpNftAbi}__ and `functionName` set to `"distribute"`
 */
export const writeILpNftDistribute = /*#__PURE__*/ createWriteContract({ abi: iLpNftAbi, functionName: 'distribute' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iLpNftAbi}__ and `functionName` set to `"mint"`
 */
export const writeILpNftMint = /*#__PURE__*/ createWriteContract({ abi: iLpNftAbi, functionName: 'mint' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iLpNftAbi}__ and `functionName` set to `"redeem"`
 */
export const writeILpNftRedeem = /*#__PURE__*/ createWriteContract({ abi: iLpNftAbi, functionName: 'redeem' })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iLpNftAbi}__
 */
export const simulateILpNft = /*#__PURE__*/ createSimulateContract({ abi: iLpNftAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iLpNftAbi}__ and `functionName` set to `"burn"`
 */
export const simulateILpNftBurn = /*#__PURE__*/ createSimulateContract({ abi: iLpNftAbi, functionName: 'burn' })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iLpNftAbi}__ and `functionName` set to `"distribute"`
 */
export const simulateILpNftDistribute = /*#__PURE__*/ createSimulateContract({
  abi: iLpNftAbi,
  functionName: 'distribute',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iLpNftAbi}__ and `functionName` set to `"mint"`
 */
export const simulateILpNftMint = /*#__PURE__*/ createSimulateContract({ abi: iLpNftAbi, functionName: 'mint' })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iLpNftAbi}__ and `functionName` set to `"redeem"`
 */
export const simulateILpNftRedeem = /*#__PURE__*/ createSimulateContract({ abi: iLpNftAbi, functionName: 'redeem' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iUstcPlusAbi}__
 */
export const readIUstcPlus = /*#__PURE__*/ createReadContract({ abi: iUstcPlusAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iUstcPlusAbi}__ and `functionName` set to `"allowance"`
 */
export const readIUstcPlusAllowance = /*#__PURE__*/ createReadContract({ abi: iUstcPlusAbi, functionName: 'allowance' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iUstcPlusAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readIUstcPlusBalanceOf = /*#__PURE__*/ createReadContract({ abi: iUstcPlusAbi, functionName: 'balanceOf' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iUstcPlusAbi}__ and `functionName` set to `"totalSupply"`
 */
export const readIUstcPlusTotalSupply = /*#__PURE__*/ createReadContract({
  abi: iUstcPlusAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iUstcPlusAbi}__
 */
export const writeIUstcPlus = /*#__PURE__*/ createWriteContract({ abi: iUstcPlusAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iUstcPlusAbi}__ and `functionName` set to `"approve"`
 */
export const writeIUstcPlusApprove = /*#__PURE__*/ createWriteContract({ abi: iUstcPlusAbi, functionName: 'approve' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iUstcPlusAbi}__ and `functionName` set to `"burnByLpManager"`
 */
export const writeIUstcPlusBurnByLpManager = /*#__PURE__*/ createWriteContract({
  abi: iUstcPlusAbi,
  functionName: 'burnByLpManager',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iUstcPlusAbi}__ and `functionName` set to `"lpNft"`
 */
export const writeIUstcPlusLpNft = /*#__PURE__*/ createWriteContract({ abi: iUstcPlusAbi, functionName: 'lpNft' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iUstcPlusAbi}__ and `functionName` set to `"mintByLpManager"`
 */
export const writeIUstcPlusMintByLpManager = /*#__PURE__*/ createWriteContract({
  abi: iUstcPlusAbi,
  functionName: 'mintByLpManager',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iUstcPlusAbi}__ and `functionName` set to `"transfer"`
 */
export const writeIUstcPlusTransfer = /*#__PURE__*/ createWriteContract({ abi: iUstcPlusAbi, functionName: 'transfer' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iUstcPlusAbi}__ and `functionName` set to `"transferByLpNft"`
 */
export const writeIUstcPlusTransferByLpNft = /*#__PURE__*/ createWriteContract({
  abi: iUstcPlusAbi,
  functionName: 'transferByLpNft',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iUstcPlusAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeIUstcPlusTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: iUstcPlusAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iUstcPlusAbi}__
 */
export const simulateIUstcPlus = /*#__PURE__*/ createSimulateContract({ abi: iUstcPlusAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iUstcPlusAbi}__ and `functionName` set to `"approve"`
 */
export const simulateIUstcPlusApprove = /*#__PURE__*/ createSimulateContract({
  abi: iUstcPlusAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iUstcPlusAbi}__ and `functionName` set to `"burnByLpManager"`
 */
export const simulateIUstcPlusBurnByLpManager = /*#__PURE__*/ createSimulateContract({
  abi: iUstcPlusAbi,
  functionName: 'burnByLpManager',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iUstcPlusAbi}__ and `functionName` set to `"lpNft"`
 */
export const simulateIUstcPlusLpNft = /*#__PURE__*/ createSimulateContract({ abi: iUstcPlusAbi, functionName: 'lpNft' })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iUstcPlusAbi}__ and `functionName` set to `"mintByLpManager"`
 */
export const simulateIUstcPlusMintByLpManager = /*#__PURE__*/ createSimulateContract({
  abi: iUstcPlusAbi,
  functionName: 'mintByLpManager',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iUstcPlusAbi}__ and `functionName` set to `"transfer"`
 */
export const simulateIUstcPlusTransfer = /*#__PURE__*/ createSimulateContract({
  abi: iUstcPlusAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iUstcPlusAbi}__ and `functionName` set to `"transferByLpNft"`
 */
export const simulateIUstcPlusTransferByLpNft = /*#__PURE__*/ createSimulateContract({
  abi: iUstcPlusAbi,
  functionName: 'transferByLpNft',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iUstcPlusAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateIUstcPlusTransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: iUstcPlusAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iUstcPlusAbi}__
 */
export const watchIUstcPlusEvent = /*#__PURE__*/ createWatchContractEvent({ abi: iUstcPlusAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iUstcPlusAbi}__ and `eventName` set to `"Approval"`
 */
export const watchIUstcPlusApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iUstcPlusAbi,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iUstcPlusAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchIUstcPlusTransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iUstcPlusAbi,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link initializableAbi}__
 */
export const watchInitializableEvent = /*#__PURE__*/ createWatchContractEvent({ abi: initializableAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link initializableAbi}__ and `eventName` set to `"Initialized"`
 */
export const watchInitializableInitializedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: initializableAbi,
  eventName: 'Initialized',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpManagerAbi}__
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const readLpManager = /*#__PURE__*/ createReadContract({ abi: lpManagerAbi, address: lpManagerAddress })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"deposits"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const readLpManagerDeposits = /*#__PURE__*/ createReadContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'deposits',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"encodeMintingParams"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const readLpManagerEncodeMintingParams = /*#__PURE__*/ createReadContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'encodeMintingParams',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"lpNft"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const readLpManagerLpNft = /*#__PURE__*/ createReadContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'lpNft',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"mintingValid"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const readLpManagerMintingValid = /*#__PURE__*/ createReadContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'mintingValid',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"owner"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const readLpManagerOwner = /*#__PURE__*/ createReadContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"signer"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const readLpManagerSigner = /*#__PURE__*/ createReadContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'signer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"usdc"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const readLpManagerUsdc = /*#__PURE__*/ createReadContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'usdc',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"ustcPlus"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const readLpManagerUstcPlus = /*#__PURE__*/ createReadContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'ustcPlus',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"ustcPlusBuyer"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const readLpManagerUstcPlusBuyer = /*#__PURE__*/ createReadContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'ustcPlusBuyer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpManagerAbi}__
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const writeLpManager = /*#__PURE__*/ createWriteContract({ abi: lpManagerAbi, address: lpManagerAddress })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"endMinting"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const writeLpManagerEndMinting = /*#__PURE__*/ createWriteContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'endMinting',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const writeLpManagerInitialize = /*#__PURE__*/ createWriteContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'initialize',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const writeLpManagerRenounceOwnership = /*#__PURE__*/ createWriteContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"setLpNft"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const writeLpManagerSetLpNft = /*#__PURE__*/ createWriteContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'setLpNft',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"setSigner"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const writeLpManagerSetSigner = /*#__PURE__*/ createWriteContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'setSigner',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"setUsdc"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const writeLpManagerSetUsdc = /*#__PURE__*/ createWriteContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'setUsdc',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"setUstcBuyer"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const writeLpManagerSetUstcBuyer = /*#__PURE__*/ createWriteContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'setUstcBuyer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"setUstcPlus"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const writeLpManagerSetUstcPlus = /*#__PURE__*/ createWriteContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'setUstcPlus',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"startMinting"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const writeLpManagerStartMinting = /*#__PURE__*/ createWriteContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'startMinting',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const writeLpManagerTransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"unwrap"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const writeLpManagerUnwrap = /*#__PURE__*/ createWriteContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'unwrap',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"wrap"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const writeLpManagerWrap = /*#__PURE__*/ createWriteContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'wrap',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpManagerAbi}__
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const simulateLpManager = /*#__PURE__*/ createSimulateContract({ abi: lpManagerAbi, address: lpManagerAddress })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"endMinting"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const simulateLpManagerEndMinting = /*#__PURE__*/ createSimulateContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'endMinting',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const simulateLpManagerInitialize = /*#__PURE__*/ createSimulateContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'initialize',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const simulateLpManagerRenounceOwnership = /*#__PURE__*/ createSimulateContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"setLpNft"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const simulateLpManagerSetLpNft = /*#__PURE__*/ createSimulateContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'setLpNft',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"setSigner"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const simulateLpManagerSetSigner = /*#__PURE__*/ createSimulateContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'setSigner',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"setUsdc"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const simulateLpManagerSetUsdc = /*#__PURE__*/ createSimulateContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'setUsdc',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"setUstcBuyer"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const simulateLpManagerSetUstcBuyer = /*#__PURE__*/ createSimulateContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'setUstcBuyer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"setUstcPlus"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const simulateLpManagerSetUstcPlus = /*#__PURE__*/ createSimulateContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'setUstcPlus',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"startMinting"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const simulateLpManagerStartMinting = /*#__PURE__*/ createSimulateContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'startMinting',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const simulateLpManagerTransferOwnership = /*#__PURE__*/ createSimulateContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"unwrap"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const simulateLpManagerUnwrap = /*#__PURE__*/ createSimulateContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'unwrap',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"wrap"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const simulateLpManagerWrap = /*#__PURE__*/ createSimulateContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'wrap',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lpManagerAbi}__
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const watchLpManagerEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: lpManagerAbi,
  address: lpManagerAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lpManagerAbi}__ and `eventName` set to `"EndMinting"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const watchLpManagerEndMintingEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  eventName: 'EndMinting',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lpManagerAbi}__ and `eventName` set to `"Initialized"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const watchLpManagerInitializedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  eventName: 'Initialized',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lpManagerAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const watchLpManagerOwnershipTransferredEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  eventName: 'OwnershipTransferred',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lpManagerAbi}__ and `eventName` set to `"StartMinting"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const watchLpManagerStartMintingEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  eventName: 'StartMinting',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lpManagerAbi}__ and `eventName` set to `"Unwrap"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const watchLpManagerUnwrapEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  eventName: 'Unwrap',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lpManagerAbi}__ and `eventName` set to `"Wrap"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0xCb3B96E8c57E90b8B74959c8475cD3245D02f053)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xD4D1bcDED5ADd4DC3EE975C0feEFce8F244D15b6)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const watchLpManagerWrapEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  eventName: 'Wrap',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNft = /*#__PURE__*/ createReadContract({ abi: lpNftAbi, address: lpNftAddress })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"HODLER_ID"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftHodlerId = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'HODLER_ID',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"_rTotal"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftRTotal = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: '_rTotal',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"_tFeeTotal"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftTFeeTotal = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: '_tFeeTotal',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"_tTotal"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftTTotal = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: '_tTotal',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"balanceOf"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftBalanceOf = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"dao"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftDao = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'dao',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"getApproved"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftGetApproved = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"isApprovedForAll"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftIsApprovedForAll = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'isApprovedForAll',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"lpManager"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftLpManager = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'lpManager',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"name"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftName = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"owner"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftOwner = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"ownerOf"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftOwnerOf = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"paramsOf"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftParamsOf = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'paramsOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"reflectBalanceOf"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftReflectBalanceOf = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'reflectBalanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"reflectionFromToken"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftReflectionFromToken = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'reflectionFromToken',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"slashCurrentAmount"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftSlashCurrentAmount = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'slashCurrentAmount',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"slashEndTime"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftSlashEndTime = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'slashEndTime',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"supportsInterface"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftSupportsInterface = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"symbol"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftSymbol = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"tokenFromReflection"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftTokenFromReflection = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'tokenFromReflection',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"tokenURI"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftTokenUri = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"usdc"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftUsdc = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'usdc',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"ustcPlus"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftUstcPlus = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'ustcPlus',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpNftAbi}__
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const writeLpNft = /*#__PURE__*/ createWriteContract({ abi: lpNftAbi, address: lpNftAddress })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const writeLpNftApprove = /*#__PURE__*/ createWriteContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"burn"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const writeLpNftBurn = /*#__PURE__*/ createWriteContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'burn',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"distribute"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const writeLpNftDistribute = /*#__PURE__*/ createWriteContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'distribute',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const writeLpNftInitialize = /*#__PURE__*/ createWriteContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'initialize',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"mint"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const writeLpNftMint = /*#__PURE__*/ createWriteContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"redeem"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const writeLpNftRedeem = /*#__PURE__*/ createWriteContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'redeem',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"reflect"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const writeLpNftReflect = /*#__PURE__*/ createWriteContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'reflect',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const writeLpNftRenounceOwnership = /*#__PURE__*/ createWriteContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"safeTransferFrom"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const writeLpNftSafeTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'safeTransferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"setApprovalForAll"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const writeLpNftSetApprovalForAll = /*#__PURE__*/ createWriteContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'setApprovalForAll',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"setDao"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const writeLpNftSetDao = /*#__PURE__*/ createWriteContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'setDao',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"setLpManager"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const writeLpNftSetLpManager = /*#__PURE__*/ createWriteContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'setLpManager',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"setUsdc"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const writeLpNftSetUsdc = /*#__PURE__*/ createWriteContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'setUsdc',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"setUstcPlus"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const writeLpNftSetUstcPlus = /*#__PURE__*/ createWriteContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'setUstcPlus',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"setupReflect"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const writeLpNftSetupReflect = /*#__PURE__*/ createWriteContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'setupReflect',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const writeLpNftTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const writeLpNftTransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpNftAbi}__
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const simulateLpNft = /*#__PURE__*/ createSimulateContract({ abi: lpNftAbi, address: lpNftAddress })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const simulateLpNftApprove = /*#__PURE__*/ createSimulateContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"burn"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const simulateLpNftBurn = /*#__PURE__*/ createSimulateContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'burn',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"distribute"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const simulateLpNftDistribute = /*#__PURE__*/ createSimulateContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'distribute',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"initialize"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const simulateLpNftInitialize = /*#__PURE__*/ createSimulateContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'initialize',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"mint"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const simulateLpNftMint = /*#__PURE__*/ createSimulateContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"redeem"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const simulateLpNftRedeem = /*#__PURE__*/ createSimulateContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'redeem',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"reflect"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const simulateLpNftReflect = /*#__PURE__*/ createSimulateContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'reflect',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const simulateLpNftRenounceOwnership = /*#__PURE__*/ createSimulateContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"safeTransferFrom"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const simulateLpNftSafeTransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'safeTransferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"setApprovalForAll"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const simulateLpNftSetApprovalForAll = /*#__PURE__*/ createSimulateContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'setApprovalForAll',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"setDao"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const simulateLpNftSetDao = /*#__PURE__*/ createSimulateContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'setDao',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"setLpManager"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const simulateLpNftSetLpManager = /*#__PURE__*/ createSimulateContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'setLpManager',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"setUsdc"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const simulateLpNftSetUsdc = /*#__PURE__*/ createSimulateContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'setUsdc',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"setUstcPlus"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const simulateLpNftSetUstcPlus = /*#__PURE__*/ createSimulateContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'setUstcPlus',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"setupReflect"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const simulateLpNftSetupReflect = /*#__PURE__*/ createSimulateContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'setupReflect',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const simulateLpNftTransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const simulateLpNftTransferOwnership = /*#__PURE__*/ createSimulateContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lpNftAbi}__
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const watchLpNftEvent = /*#__PURE__*/ createWatchContractEvent({ abi: lpNftAbi, address: lpNftAddress })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lpNftAbi}__ and `eventName` set to `"Approval"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const watchLpNftApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: lpNftAbi,
  address: lpNftAddress,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lpNftAbi}__ and `eventName` set to `"ApprovalForAll"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const watchLpNftApprovalForAllEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: lpNftAbi,
  address: lpNftAddress,
  eventName: 'ApprovalForAll',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lpNftAbi}__ and `eventName` set to `"Initialized"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const watchLpNftInitializedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: lpNftAbi,
  address: lpNftAddress,
  eventName: 'Initialized',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lpNftAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const watchLpNftOwnershipTransferredEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: lpNftAbi,
  address: lpNftAddress,
  eventName: 'OwnershipTransferred',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lpNftAbi}__ and `eventName` set to `"Redeem"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const watchLpNftRedeemEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: lpNftAbi,
  address: lpNftAddress,
  eventName: 'Redeem',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lpNftAbi}__ and `eventName` set to `"Transfer"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x0564C3e8Fe23c5A6220A300c303f41e43D9be9e2)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xF53dc83E9cE56612dd47cA24e7439C204B602A22)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const watchLpNftTransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: lpNftAbi,
  address: lpNftAddress,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link messageAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xF11f180eE37dd6aa7dD08b8C1Cd670fC4DBE0e34)
 */
export const readMessage = /*#__PURE__*/ createReadContract({ abi: messageAbi, address: messageAddress })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link messageAbi}__ and `functionName` set to `"message"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xF11f180eE37dd6aa7dD08b8C1Cd670fC4DBE0e34)
 */
export const readMessageMessage = /*#__PURE__*/ createReadContract({
  abi: messageAbi,
  address: messageAddress,
  functionName: 'message',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link messageAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xF11f180eE37dd6aa7dD08b8C1Cd670fC4DBE0e34)
 */
export const writeMessage = /*#__PURE__*/ createWriteContract({ abi: messageAbi, address: messageAddress })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link messageAbi}__ and `functionName` set to `"setMessage"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xF11f180eE37dd6aa7dD08b8C1Cd670fC4DBE0e34)
 */
export const writeMessageSetMessage = /*#__PURE__*/ createWriteContract({
  abi: messageAbi,
  address: messageAddress,
  functionName: 'setMessage',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link messageAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xF11f180eE37dd6aa7dD08b8C1Cd670fC4DBE0e34)
 */
export const simulateMessage = /*#__PURE__*/ createSimulateContract({ abi: messageAbi, address: messageAddress })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link messageAbi}__ and `functionName` set to `"setMessage"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xF11f180eE37dd6aa7dD08b8C1Cd670fC4DBE0e34)
 */
export const simulateMessageSetMessage = /*#__PURE__*/ createSimulateContract({
  abi: messageAbi,
  address: messageAddress,
  functionName: 'setMessage',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link messageAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xF11f180eE37dd6aa7dD08b8C1Cd670fC4DBE0e34)
 */
export const watchMessageEvent = /*#__PURE__*/ createWatchContractEvent({ abi: messageAbi, address: messageAddress })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link messageAbi}__ and `eventName` set to `"SetMessage"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xF11f180eE37dd6aa7dD08b8C1Cd670fC4DBE0e34)
 */
export const watchMessageSetMessageEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: messageAbi,
  address: messageAddress,
  eventName: 'SetMessage',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ownableUpgradeableAbi}__
 */
export const readOwnableUpgradeable = /*#__PURE__*/ createReadContract({ abi: ownableUpgradeableAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ownableUpgradeableAbi}__ and `functionName` set to `"owner"`
 */
export const readOwnableUpgradeableOwner = /*#__PURE__*/ createReadContract({
  abi: ownableUpgradeableAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ownableUpgradeableAbi}__
 */
export const writeOwnableUpgradeable = /*#__PURE__*/ createWriteContract({ abi: ownableUpgradeableAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ownableUpgradeableAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeOwnableUpgradeableRenounceOwnership = /*#__PURE__*/ createWriteContract({
  abi: ownableUpgradeableAbi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ownableUpgradeableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeOwnableUpgradeableTransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: ownableUpgradeableAbi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ownableUpgradeableAbi}__
 */
export const simulateOwnableUpgradeable = /*#__PURE__*/ createSimulateContract({ abi: ownableUpgradeableAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ownableUpgradeableAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateOwnableUpgradeableRenounceOwnership = /*#__PURE__*/ createSimulateContract({
  abi: ownableUpgradeableAbi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ownableUpgradeableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateOwnableUpgradeableTransferOwnership = /*#__PURE__*/ createSimulateContract({
  abi: ownableUpgradeableAbi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ownableUpgradeableAbi}__
 */
export const watchOwnableUpgradeableEvent = /*#__PURE__*/ createWatchContractEvent({ abi: ownableUpgradeableAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ownableUpgradeableAbi}__ and `eventName` set to `"Initialized"`
 */
export const watchOwnableUpgradeableInitializedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ownableUpgradeableAbi,
  eventName: 'Initialized',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ownableUpgradeableAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchOwnableUpgradeableOwnershipTransferredEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ownableUpgradeableAbi,
  eventName: 'OwnershipTransferred',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testErc20Abi}__
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x55d398326f99059fF775485246999027B3197955)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xc2132d05d31c914a87c6611c10748aeb04b58e8f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const readTestErc20 = /*#__PURE__*/ createReadContract({ abi: testErc20Abi, address: testErc20Address })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testErc20Abi}__ and `functionName` set to `"allowance"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x55d398326f99059fF775485246999027B3197955)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xc2132d05d31c914a87c6611c10748aeb04b58e8f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const readTestErc20Allowance = /*#__PURE__*/ createReadContract({
  abi: testErc20Abi,
  address: testErc20Address,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testErc20Abi}__ and `functionName` set to `"balanceOf"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x55d398326f99059fF775485246999027B3197955)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xc2132d05d31c914a87c6611c10748aeb04b58e8f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const readTestErc20BalanceOf = /*#__PURE__*/ createReadContract({
  abi: testErc20Abi,
  address: testErc20Address,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testErc20Abi}__ and `functionName` set to `"decimals"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x55d398326f99059fF775485246999027B3197955)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xc2132d05d31c914a87c6611c10748aeb04b58e8f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const readTestErc20Decimals = /*#__PURE__*/ createReadContract({
  abi: testErc20Abi,
  address: testErc20Address,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testErc20Abi}__ and `functionName` set to `"name"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x55d398326f99059fF775485246999027B3197955)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xc2132d05d31c914a87c6611c10748aeb04b58e8f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const readTestErc20Name = /*#__PURE__*/ createReadContract({
  abi: testErc20Abi,
  address: testErc20Address,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testErc20Abi}__ and `functionName` set to `"symbol"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x55d398326f99059fF775485246999027B3197955)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xc2132d05d31c914a87c6611c10748aeb04b58e8f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const readTestErc20Symbol = /*#__PURE__*/ createReadContract({
  abi: testErc20Abi,
  address: testErc20Address,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testErc20Abi}__ and `functionName` set to `"totalSupply"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x55d398326f99059fF775485246999027B3197955)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xc2132d05d31c914a87c6611c10748aeb04b58e8f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const readTestErc20TotalSupply = /*#__PURE__*/ createReadContract({
  abi: testErc20Abi,
  address: testErc20Address,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link testErc20Abi}__
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x55d398326f99059fF775485246999027B3197955)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xc2132d05d31c914a87c6611c10748aeb04b58e8f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const writeTestErc20 = /*#__PURE__*/ createWriteContract({ abi: testErc20Abi, address: testErc20Address })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link testErc20Abi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x55d398326f99059fF775485246999027B3197955)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xc2132d05d31c914a87c6611c10748aeb04b58e8f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const writeTestErc20Approve = /*#__PURE__*/ createWriteContract({
  abi: testErc20Abi,
  address: testErc20Address,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link testErc20Abi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x55d398326f99059fF775485246999027B3197955)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xc2132d05d31c914a87c6611c10748aeb04b58e8f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const writeTestErc20Transfer = /*#__PURE__*/ createWriteContract({
  abi: testErc20Abi,
  address: testErc20Address,
  functionName: 'transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link testErc20Abi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x55d398326f99059fF775485246999027B3197955)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xc2132d05d31c914a87c6611c10748aeb04b58e8f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const writeTestErc20TransferFrom = /*#__PURE__*/ createWriteContract({
  abi: testErc20Abi,
  address: testErc20Address,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link testErc20Abi}__
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x55d398326f99059fF775485246999027B3197955)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xc2132d05d31c914a87c6611c10748aeb04b58e8f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const simulateTestErc20 = /*#__PURE__*/ createSimulateContract({ abi: testErc20Abi, address: testErc20Address })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link testErc20Abi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x55d398326f99059fF775485246999027B3197955)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xc2132d05d31c914a87c6611c10748aeb04b58e8f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const simulateTestErc20Approve = /*#__PURE__*/ createSimulateContract({
  abi: testErc20Abi,
  address: testErc20Address,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link testErc20Abi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x55d398326f99059fF775485246999027B3197955)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xc2132d05d31c914a87c6611c10748aeb04b58e8f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const simulateTestErc20Transfer = /*#__PURE__*/ createSimulateContract({
  abi: testErc20Abi,
  address: testErc20Address,
  functionName: 'transfer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link testErc20Abi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x55d398326f99059fF775485246999027B3197955)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xc2132d05d31c914a87c6611c10748aeb04b58e8f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const simulateTestErc20TransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: testErc20Abi,
  address: testErc20Address,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testErc20Abi}__
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x55d398326f99059fF775485246999027B3197955)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xc2132d05d31c914a87c6611c10748aeb04b58e8f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const watchTestErc20Event = /*#__PURE__*/ createWatchContractEvent({
  abi: testErc20Abi,
  address: testErc20Address,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testErc20Abi}__ and `eventName` set to `"Approval"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x55d398326f99059fF775485246999027B3197955)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xc2132d05d31c914a87c6611c10748aeb04b58e8f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const watchTestErc20ApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: testErc20Abi,
  address: testErc20Address,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testErc20Abi}__ and `eventName` set to `"Transfer"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x55d398326f99059fF775485246999027B3197955)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0xc2132d05d31c914a87c6611c10748aeb04b58e8f)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const watchTestErc20TransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: testErc20Abi,
  address: testErc20Address,
  eventName: 'Transfer',
})
