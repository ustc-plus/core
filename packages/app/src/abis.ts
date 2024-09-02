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
// AddressCast
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const addressCastAbi = [
  { type: 'error', inputs: [], name: 'AddressCast_InvalidAddress' },
  { type: 'error', inputs: [], name: 'AddressCast_InvalidSizeForAddress' },
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
// ERC1967Proxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc1967ProxyAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    stateMutability: 'payable',
  },
  { type: 'error', inputs: [{ name: 'target', internalType: 'address', type: 'address' }], name: 'AddressEmptyCode' },
  {
    type: 'error',
    inputs: [{ name: 'implementation', internalType: 'address', type: 'address' }],
    name: 'ERC1967InvalidImplementation',
  },
  { type: 'error', inputs: [], name: 'ERC1967NonPayable' },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'implementation', internalType: 'address', type: 'address', indexed: true }],
    name: 'Upgraded',
  },
  { type: 'fallback', stateMutability: 'payable' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC1967Utils
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc1967UtilsAbi = [
  { type: 'error', inputs: [{ name: 'admin', internalType: 'address', type: 'address' }], name: 'ERC1967InvalidAdmin' },
  {
    type: 'error',
    inputs: [{ name: 'beacon', internalType: 'address', type: 'address' }],
    name: 'ERC1967InvalidBeacon',
  },
  {
    type: 'error',
    inputs: [{ name: 'implementation', internalType: 'address', type: 'address' }],
    name: 'ERC1967InvalidImplementation',
  },
  { type: 'error', inputs: [], name: 'ERC1967NonPayable' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'previousAdmin', internalType: 'address', type: 'address', indexed: false },
      { name: 'newAdmin', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'beacon', internalType: 'address', type: 'address', indexed: true }],
    name: 'BeaconUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'implementation', internalType: 'address', type: 'address', indexed: true }],
    name: 'Upgraded',
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
// IBeacon
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iBeaconAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'implementation',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
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
// IERC1967
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1967Abi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'previousAdmin', internalType: 'address', type: 'address', indexed: false },
      { name: 'newAdmin', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'beacon', internalType: 'address', type: 'address', indexed: true }],
    name: 'BeaconUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'implementation', internalType: 'address', type: 'address', indexed: true }],
    name: 'Upgraded',
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
// IERC20Permit
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20PermitAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
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
// ILayerZeroEndpointV2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iLayerZeroEndpointV2Abi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: false },
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
      { name: 'guid', internalType: 'bytes32', type: 'bytes32', indexed: false },
      { name: 'index', internalType: 'uint16', type: 'uint16', indexed: false },
    ],
    name: 'ComposeDelivered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: false },
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
      { name: 'guid', internalType: 'bytes32', type: 'bytes32', indexed: false },
      { name: 'index', internalType: 'uint16', type: 'uint16', indexed: false },
      { name: 'message', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'ComposeSent',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'eid', internalType: 'uint32', type: 'uint32', indexed: false },
      { name: 'newLib', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'DefaultReceiveLibrarySet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'eid', internalType: 'uint32', type: 'uint32', indexed: false },
      { name: 'oldLib', internalType: 'address', type: 'address', indexed: false },
      { name: 'expiry', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'DefaultReceiveLibraryTimeoutSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'eid', internalType: 'uint32', type: 'uint32', indexed: false },
      { name: 'newLib', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'DefaultSendLibrarySet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address', indexed: false },
      { name: 'delegate', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'DelegateSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'srcEid', internalType: 'uint32', type: 'uint32', indexed: false },
      { name: 'sender', internalType: 'bytes32', type: 'bytes32', indexed: false },
      { name: 'receiver', internalType: 'address', type: 'address', indexed: false },
      { name: 'nonce', internalType: 'uint64', type: 'uint64', indexed: false },
    ],
    name: 'InboundNonceSkipped',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'newLib', internalType: 'address', type: 'address', indexed: false }],
    name: 'LibraryRegistered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'executor', internalType: 'address', type: 'address', indexed: true },
      { name: 'guid', internalType: 'bytes32', type: 'bytes32', indexed: false },
      { name: 'index', internalType: 'uint16', type: 'uint16', indexed: false },
      { name: 'gas', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'message', internalType: 'bytes', type: 'bytes', indexed: false },
      { name: 'extraData', internalType: 'bytes', type: 'bytes', indexed: false },
      { name: 'reason', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'LzComposeAlert',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'receiver', internalType: 'address', type: 'address', indexed: true },
      { name: 'executor', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'origin',
        internalType: 'struct Origin',
        type: 'tuple',
        components: [
          { name: 'srcEid', internalType: 'uint32', type: 'uint32' },
          { name: 'sender', internalType: 'bytes32', type: 'bytes32' },
          { name: 'nonce', internalType: 'uint64', type: 'uint64' },
        ],
        indexed: false,
      },
      { name: 'guid', internalType: 'bytes32', type: 'bytes32', indexed: false },
      { name: 'gas', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'message', internalType: 'bytes', type: 'bytes', indexed: false },
      { name: 'extraData', internalType: 'bytes', type: 'bytes', indexed: false },
      { name: 'reason', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'LzReceiveAlert',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'token', internalType: 'address', type: 'address', indexed: false }],
    name: 'LzTokenSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'srcEid', internalType: 'uint32', type: 'uint32', indexed: false },
      { name: 'sender', internalType: 'bytes32', type: 'bytes32', indexed: false },
      { name: 'receiver', internalType: 'address', type: 'address', indexed: false },
      { name: 'nonce', internalType: 'uint64', type: 'uint64', indexed: false },
      { name: 'payloadHash', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'PacketBurnt',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'origin',
        internalType: 'struct Origin',
        type: 'tuple',
        components: [
          { name: 'srcEid', internalType: 'uint32', type: 'uint32' },
          { name: 'sender', internalType: 'bytes32', type: 'bytes32' },
          { name: 'nonce', internalType: 'uint64', type: 'uint64' },
        ],
        indexed: false,
      },
      { name: 'receiver', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'PacketDelivered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'srcEid', internalType: 'uint32', type: 'uint32', indexed: false },
      { name: 'sender', internalType: 'bytes32', type: 'bytes32', indexed: false },
      { name: 'receiver', internalType: 'address', type: 'address', indexed: false },
      { name: 'nonce', internalType: 'uint64', type: 'uint64', indexed: false },
      { name: 'payloadHash', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'PacketNilified',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'encodedPayload', internalType: 'bytes', type: 'bytes', indexed: false },
      { name: 'options', internalType: 'bytes', type: 'bytes', indexed: false },
      { name: 'sendLibrary', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'PacketSent',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'origin',
        internalType: 'struct Origin',
        type: 'tuple',
        components: [
          { name: 'srcEid', internalType: 'uint32', type: 'uint32' },
          { name: 'sender', internalType: 'bytes32', type: 'bytes32' },
          { name: 'nonce', internalType: 'uint64', type: 'uint64' },
        ],
        indexed: false,
      },
      { name: 'receiver', internalType: 'address', type: 'address', indexed: false },
      { name: 'payloadHash', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'PacketVerified',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'receiver', internalType: 'address', type: 'address', indexed: false },
      { name: 'eid', internalType: 'uint32', type: 'uint32', indexed: false },
      { name: 'newLib', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'ReceiveLibrarySet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'receiver', internalType: 'address', type: 'address', indexed: false },
      { name: 'eid', internalType: 'uint32', type: 'uint32', indexed: false },
      { name: 'oldLib', internalType: 'address', type: 'address', indexed: false },
      { name: 'timeout', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'ReceiveLibraryTimeoutSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address', indexed: false },
      { name: 'eid', internalType: 'uint32', type: 'uint32', indexed: false },
      { name: 'newLib', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'SendLibrarySet',
  },
  {
    type: 'function',
    inputs: [
      { name: '_oapp', internalType: 'address', type: 'address' },
      { name: '_srcEid', internalType: 'uint32', type: 'uint32' },
      { name: '_sender', internalType: 'bytes32', type: 'bytes32' },
      { name: '_nonce', internalType: 'uint64', type: 'uint64' },
      { name: '_payloadHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_oapp', internalType: 'address', type: 'address' },
      {
        name: '_origin',
        internalType: 'struct Origin',
        type: 'tuple',
        components: [
          { name: 'srcEid', internalType: 'uint32', type: 'uint32' },
          { name: 'sender', internalType: 'bytes32', type: 'bytes32' },
          { name: 'nonce', internalType: 'uint64', type: 'uint64' },
        ],
      },
      { name: '_guid', internalType: 'bytes32', type: 'bytes32' },
      { name: '_message', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'clear',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_guid', internalType: 'bytes32', type: 'bytes32' },
      { name: '_index', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'composeQueue',
    outputs: [{ name: 'messageHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_eid', internalType: 'uint32', type: 'uint32' }],
    name: 'defaultReceiveLibrary',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_eid', internalType: 'uint32', type: 'uint32' }],
    name: 'defaultReceiveLibraryTimeout',
    outputs: [
      { name: 'lib', internalType: 'address', type: 'address' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_eid', internalType: 'uint32', type: 'uint32' }],
    name: 'defaultSendLibrary',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eid',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_oapp', internalType: 'address', type: 'address' },
      { name: '_lib', internalType: 'address', type: 'address' },
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
      { name: '_configType', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'getConfig',
    outputs: [{ name: 'config', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_receiver', internalType: 'address', type: 'address' },
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'getReceiveLibrary',
    outputs: [
      { name: 'lib', internalType: 'address', type: 'address' },
      { name: 'isDefault', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getRegisteredLibraries',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getSendContext',
    outputs: [
      { name: 'dstEid', internalType: 'uint32', type: 'uint32' },
      { name: 'sender', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_sender', internalType: 'address', type: 'address' },
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'getSendLibrary',
    outputs: [{ name: 'lib', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_receiver', internalType: 'address', type: 'address' },
      { name: '_srcEid', internalType: 'uint32', type: 'uint32' },
      { name: '_sender', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'inboundNonce',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_receiver', internalType: 'address', type: 'address' },
      { name: '_srcEid', internalType: 'uint32', type: 'uint32' },
      { name: '_sender', internalType: 'bytes32', type: 'bytes32' },
      { name: '_nonce', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'inboundPayloadHash',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_origin',
        internalType: 'struct Origin',
        type: 'tuple',
        components: [
          { name: 'srcEid', internalType: 'uint32', type: 'uint32' },
          { name: 'sender', internalType: 'bytes32', type: 'bytes32' },
          { name: 'nonce', internalType: 'uint64', type: 'uint64' },
        ],
      },
      { name: '_receiver', internalType: 'address', type: 'address' },
    ],
    name: 'initializable',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_sender', internalType: 'address', type: 'address' },
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'isDefaultSendLibrary',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_lib', internalType: 'address', type: 'address' }],
    name: 'isRegisteredLibrary',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'isSendingMessage',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_eid', internalType: 'uint32', type: 'uint32' }],
    name: 'isSupportedEid',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_receiver', internalType: 'address', type: 'address' },
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
      { name: '_lib', internalType: 'address', type: 'address' },
    ],
    name: 'isValidReceiveLibrary',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_receiver', internalType: 'address', type: 'address' },
      { name: '_srcEid', internalType: 'uint32', type: 'uint32' },
      { name: '_sender', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'lazyInboundNonce',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_guid', internalType: 'bytes32', type: 'bytes32' },
      { name: '_index', internalType: 'uint16', type: 'uint16' },
      { name: '_message', internalType: 'bytes', type: 'bytes' },
      { name: '_extraData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'lzCompose',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_origin',
        internalType: 'struct Origin',
        type: 'tuple',
        components: [
          { name: 'srcEid', internalType: 'uint32', type: 'uint32' },
          { name: 'sender', internalType: 'bytes32', type: 'bytes32' },
          { name: 'nonce', internalType: 'uint64', type: 'uint64' },
        ],
      },
      { name: '_receiver', internalType: 'address', type: 'address' },
      { name: '_guid', internalType: 'bytes32', type: 'bytes32' },
      { name: '_message', internalType: 'bytes', type: 'bytes' },
      { name: '_extraData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'lzReceive',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lzToken',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'nativeToken',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_sender', internalType: 'address', type: 'address' },
      { name: '_dstEid', internalType: 'uint32', type: 'uint32' },
      { name: '_receiver', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'nextGuid',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_oapp', internalType: 'address', type: 'address' },
      { name: '_srcEid', internalType: 'uint32', type: 'uint32' },
      { name: '_sender', internalType: 'bytes32', type: 'bytes32' },
      { name: '_nonce', internalType: 'uint64', type: 'uint64' },
      { name: '_payloadHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'nilify',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_sender', internalType: 'address', type: 'address' },
      { name: '_dstEid', internalType: 'uint32', type: 'uint32' },
      { name: '_receiver', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'outboundNonce',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_params',
        internalType: 'struct MessagingParams',
        type: 'tuple',
        components: [
          { name: 'dstEid', internalType: 'uint32', type: 'uint32' },
          { name: 'receiver', internalType: 'bytes32', type: 'bytes32' },
          { name: 'message', internalType: 'bytes', type: 'bytes' },
          { name: 'options', internalType: 'bytes', type: 'bytes' },
          { name: 'payInLzToken', internalType: 'bool', type: 'bool' },
        ],
      },
      { name: '_sender', internalType: 'address', type: 'address' },
    ],
    name: 'quote',
    outputs: [
      {
        name: '',
        internalType: 'struct MessagingFee',
        type: 'tuple',
        components: [
          { name: 'nativeFee', internalType: 'uint256', type: 'uint256' },
          { name: 'lzTokenFee', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_receiver', internalType: 'address', type: 'address' },
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'receiveLibraryTimeout',
    outputs: [
      { name: 'lib', internalType: 'address', type: 'address' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_lib', internalType: 'address', type: 'address' }],
    name: 'registerLibrary',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_params',
        internalType: 'struct MessagingParams',
        type: 'tuple',
        components: [
          { name: 'dstEid', internalType: 'uint32', type: 'uint32' },
          { name: 'receiver', internalType: 'bytes32', type: 'bytes32' },
          { name: 'message', internalType: 'bytes', type: 'bytes' },
          { name: 'options', internalType: 'bytes', type: 'bytes' },
          { name: 'payInLzToken', internalType: 'bool', type: 'bool' },
        ],
      },
      { name: '_refundAddress', internalType: 'address', type: 'address' },
    ],
    name: 'send',
    outputs: [
      {
        name: '',
        internalType: 'struct MessagingReceipt',
        type: 'tuple',
        components: [
          { name: 'guid', internalType: 'bytes32', type: 'bytes32' },
          { name: 'nonce', internalType: 'uint64', type: 'uint64' },
          {
            name: 'fee',
            internalType: 'struct MessagingFee',
            type: 'tuple',
            components: [
              { name: 'nativeFee', internalType: 'uint256', type: 'uint256' },
              { name: 'lzTokenFee', internalType: 'uint256', type: 'uint256' },
            ],
          },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_guid', internalType: 'bytes32', type: 'bytes32' },
      { name: '_index', internalType: 'uint16', type: 'uint16' },
      { name: '_message', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'sendCompose',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_oapp', internalType: 'address', type: 'address' },
      { name: '_lib', internalType: 'address', type: 'address' },
      {
        name: '_params',
        internalType: 'struct SetConfigParam[]',
        type: 'tuple[]',
        components: [
          { name: 'eid', internalType: 'uint32', type: 'uint32' },
          { name: 'configType', internalType: 'uint32', type: 'uint32' },
          { name: 'config', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'setConfig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
      { name: '_newLib', internalType: 'address', type: 'address' },
      { name: '_gracePeriod', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setDefaultReceiveLibrary',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
      { name: '_lib', internalType: 'address', type: 'address' },
      { name: '_expiry', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setDefaultReceiveLibraryTimeout',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
      { name: '_newLib', internalType: 'address', type: 'address' },
    ],
    name: 'setDefaultSendLibrary',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_delegate', internalType: 'address', type: 'address' }],
    name: 'setDelegate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_lzToken', internalType: 'address', type: 'address' }],
    name: 'setLzToken',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_oapp', internalType: 'address', type: 'address' },
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
      { name: '_newLib', internalType: 'address', type: 'address' },
      { name: '_gracePeriod', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setReceiveLibrary',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_oapp', internalType: 'address', type: 'address' },
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
      { name: '_lib', internalType: 'address', type: 'address' },
      { name: '_expiry', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setReceiveLibraryTimeout',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_oapp', internalType: 'address', type: 'address' },
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
      { name: '_newLib', internalType: 'address', type: 'address' },
    ],
    name: 'setSendLibrary',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_oapp', internalType: 'address', type: 'address' },
      { name: '_srcEid', internalType: 'uint32', type: 'uint32' },
      { name: '_sender', internalType: 'bytes32', type: 'bytes32' },
      { name: '_nonce', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'skip',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_origin',
        internalType: 'struct Origin',
        type: 'tuple',
        components: [
          { name: 'srcEid', internalType: 'uint32', type: 'uint32' },
          { name: 'sender', internalType: 'bytes32', type: 'bytes32' },
          { name: 'nonce', internalType: 'uint64', type: 'uint64' },
        ],
      },
      { name: '_receiver', internalType: 'address', type: 'address' },
    ],
    name: 'verifiable',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_origin',
        internalType: 'struct Origin',
        type: 'tuple',
        components: [
          { name: 'srcEid', internalType: 'uint32', type: 'uint32' },
          { name: 'sender', internalType: 'bytes32', type: 'bytes32' },
          { name: 'nonce', internalType: 'uint64', type: 'uint64' },
        ],
      },
      { name: '_receiver', internalType: 'address', type: 'address' },
      { name: '_payloadHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'verify',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ILayerZeroReceiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iLayerZeroReceiverAbi = [
  {
    type: 'function',
    inputs: [
      {
        name: '_origin',
        internalType: 'struct Origin',
        type: 'tuple',
        components: [
          { name: 'srcEid', internalType: 'uint32', type: 'uint32' },
          { name: 'sender', internalType: 'bytes32', type: 'bytes32' },
          { name: 'nonce', internalType: 'uint64', type: 'uint64' },
        ],
      },
    ],
    name: 'allowInitializePath',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_origin',
        internalType: 'struct Origin',
        type: 'tuple',
        components: [
          { name: 'srcEid', internalType: 'uint32', type: 'uint32' },
          { name: 'sender', internalType: 'bytes32', type: 'bytes32' },
          { name: 'nonce', internalType: 'uint64', type: 'uint64' },
        ],
      },
      { name: '_guid', internalType: 'bytes32', type: 'bytes32' },
      { name: '_message', internalType: 'bytes', type: 'bytes' },
      { name: '_executor', internalType: 'address', type: 'address' },
      { name: '_extraData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'lzReceive',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
      { name: '_sender', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'nextNonce',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
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
// IMessageLib
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMessageLibAbi = [
  {
    type: 'function',
    inputs: [
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
      { name: '_oapp', internalType: 'address', type: 'address' },
      { name: '_configType', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'getConfig',
    outputs: [{ name: 'config', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_eid', internalType: 'uint32', type: 'uint32' }],
    name: 'isSupportedEid',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'messageLibType',
    outputs: [{ name: '', internalType: 'enum MessageLibType', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_oapp', internalType: 'address', type: 'address' },
      {
        name: '_config',
        internalType: 'struct SetConfigParam[]',
        type: 'tuple[]',
        components: [
          { name: 'eid', internalType: 'uint32', type: 'uint32' },
          { name: 'configType', internalType: 'uint32', type: 'uint32' },
          { name: 'config', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'setConfig',
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
    name: 'version',
    outputs: [
      { name: 'major', internalType: 'uint64', type: 'uint64' },
      { name: 'minor', internalType: 'uint8', type: 'uint8' },
      { name: 'endpointVersion', internalType: 'uint8', type: 'uint8' },
    ],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMessageLibManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMessageLibManagerAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'eid', internalType: 'uint32', type: 'uint32', indexed: false },
      { name: 'newLib', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'DefaultReceiveLibrarySet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'eid', internalType: 'uint32', type: 'uint32', indexed: false },
      { name: 'oldLib', internalType: 'address', type: 'address', indexed: false },
      { name: 'expiry', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'DefaultReceiveLibraryTimeoutSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'eid', internalType: 'uint32', type: 'uint32', indexed: false },
      { name: 'newLib', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'DefaultSendLibrarySet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'newLib', internalType: 'address', type: 'address', indexed: false }],
    name: 'LibraryRegistered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'receiver', internalType: 'address', type: 'address', indexed: false },
      { name: 'eid', internalType: 'uint32', type: 'uint32', indexed: false },
      { name: 'newLib', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'ReceiveLibrarySet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'receiver', internalType: 'address', type: 'address', indexed: false },
      { name: 'eid', internalType: 'uint32', type: 'uint32', indexed: false },
      { name: 'oldLib', internalType: 'address', type: 'address', indexed: false },
      { name: 'timeout', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'ReceiveLibraryTimeoutSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address', indexed: false },
      { name: 'eid', internalType: 'uint32', type: 'uint32', indexed: false },
      { name: 'newLib', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'SendLibrarySet',
  },
  {
    type: 'function',
    inputs: [{ name: '_eid', internalType: 'uint32', type: 'uint32' }],
    name: 'defaultReceiveLibrary',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_eid', internalType: 'uint32', type: 'uint32' }],
    name: 'defaultReceiveLibraryTimeout',
    outputs: [
      { name: 'lib', internalType: 'address', type: 'address' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_eid', internalType: 'uint32', type: 'uint32' }],
    name: 'defaultSendLibrary',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_oapp', internalType: 'address', type: 'address' },
      { name: '_lib', internalType: 'address', type: 'address' },
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
      { name: '_configType', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'getConfig',
    outputs: [{ name: 'config', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_receiver', internalType: 'address', type: 'address' },
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'getReceiveLibrary',
    outputs: [
      { name: 'lib', internalType: 'address', type: 'address' },
      { name: 'isDefault', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getRegisteredLibraries',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_sender', internalType: 'address', type: 'address' },
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'getSendLibrary',
    outputs: [{ name: 'lib', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_sender', internalType: 'address', type: 'address' },
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'isDefaultSendLibrary',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_lib', internalType: 'address', type: 'address' }],
    name: 'isRegisteredLibrary',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_eid', internalType: 'uint32', type: 'uint32' }],
    name: 'isSupportedEid',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_receiver', internalType: 'address', type: 'address' },
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
      { name: '_lib', internalType: 'address', type: 'address' },
    ],
    name: 'isValidReceiveLibrary',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_receiver', internalType: 'address', type: 'address' },
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'receiveLibraryTimeout',
    outputs: [
      { name: 'lib', internalType: 'address', type: 'address' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_lib', internalType: 'address', type: 'address' }],
    name: 'registerLibrary',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_oapp', internalType: 'address', type: 'address' },
      { name: '_lib', internalType: 'address', type: 'address' },
      {
        name: '_params',
        internalType: 'struct SetConfigParam[]',
        type: 'tuple[]',
        components: [
          { name: 'eid', internalType: 'uint32', type: 'uint32' },
          { name: 'configType', internalType: 'uint32', type: 'uint32' },
          { name: 'config', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'setConfig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
      { name: '_newLib', internalType: 'address', type: 'address' },
      { name: '_gracePeriod', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setDefaultReceiveLibrary',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
      { name: '_lib', internalType: 'address', type: 'address' },
      { name: '_expiry', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setDefaultReceiveLibraryTimeout',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
      { name: '_newLib', internalType: 'address', type: 'address' },
    ],
    name: 'setDefaultSendLibrary',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_oapp', internalType: 'address', type: 'address' },
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
      { name: '_newLib', internalType: 'address', type: 'address' },
      { name: '_gracePeriod', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setReceiveLibrary',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_oapp', internalType: 'address', type: 'address' },
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
      { name: '_lib', internalType: 'address', type: 'address' },
      { name: '_expiry', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setReceiveLibraryTimeout',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_oapp', internalType: 'address', type: 'address' },
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
      { name: '_newLib', internalType: 'address', type: 'address' },
    ],
    name: 'setSendLibrary',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMessagingChannel
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMessagingChannelAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'srcEid', internalType: 'uint32', type: 'uint32', indexed: false },
      { name: 'sender', internalType: 'bytes32', type: 'bytes32', indexed: false },
      { name: 'receiver', internalType: 'address', type: 'address', indexed: false },
      { name: 'nonce', internalType: 'uint64', type: 'uint64', indexed: false },
    ],
    name: 'InboundNonceSkipped',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'srcEid', internalType: 'uint32', type: 'uint32', indexed: false },
      { name: 'sender', internalType: 'bytes32', type: 'bytes32', indexed: false },
      { name: 'receiver', internalType: 'address', type: 'address', indexed: false },
      { name: 'nonce', internalType: 'uint64', type: 'uint64', indexed: false },
      { name: 'payloadHash', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'PacketBurnt',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'srcEid', internalType: 'uint32', type: 'uint32', indexed: false },
      { name: 'sender', internalType: 'bytes32', type: 'bytes32', indexed: false },
      { name: 'receiver', internalType: 'address', type: 'address', indexed: false },
      { name: 'nonce', internalType: 'uint64', type: 'uint64', indexed: false },
      { name: 'payloadHash', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'PacketNilified',
  },
  {
    type: 'function',
    inputs: [
      { name: '_oapp', internalType: 'address', type: 'address' },
      { name: '_srcEid', internalType: 'uint32', type: 'uint32' },
      { name: '_sender', internalType: 'bytes32', type: 'bytes32' },
      { name: '_nonce', internalType: 'uint64', type: 'uint64' },
      { name: '_payloadHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eid',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_receiver', internalType: 'address', type: 'address' },
      { name: '_srcEid', internalType: 'uint32', type: 'uint32' },
      { name: '_sender', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'inboundNonce',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_receiver', internalType: 'address', type: 'address' },
      { name: '_srcEid', internalType: 'uint32', type: 'uint32' },
      { name: '_sender', internalType: 'bytes32', type: 'bytes32' },
      { name: '_nonce', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'inboundPayloadHash',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_receiver', internalType: 'address', type: 'address' },
      { name: '_srcEid', internalType: 'uint32', type: 'uint32' },
      { name: '_sender', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'lazyInboundNonce',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_sender', internalType: 'address', type: 'address' },
      { name: '_dstEid', internalType: 'uint32', type: 'uint32' },
      { name: '_receiver', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'nextGuid',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_oapp', internalType: 'address', type: 'address' },
      { name: '_srcEid', internalType: 'uint32', type: 'uint32' },
      { name: '_sender', internalType: 'bytes32', type: 'bytes32' },
      { name: '_nonce', internalType: 'uint64', type: 'uint64' },
      { name: '_payloadHash', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'nilify',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_sender', internalType: 'address', type: 'address' },
      { name: '_dstEid', internalType: 'uint32', type: 'uint32' },
      { name: '_receiver', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'outboundNonce',
    outputs: [{ name: '', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_oapp', internalType: 'address', type: 'address' },
      { name: '_srcEid', internalType: 'uint32', type: 'uint32' },
      { name: '_sender', internalType: 'bytes32', type: 'bytes32' },
      { name: '_nonce', internalType: 'uint64', type: 'uint64' },
    ],
    name: 'skip',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMessagingComposer
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMessagingComposerAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: false },
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
      { name: 'guid', internalType: 'bytes32', type: 'bytes32', indexed: false },
      { name: 'index', internalType: 'uint16', type: 'uint16', indexed: false },
    ],
    name: 'ComposeDelivered',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: false },
      { name: 'to', internalType: 'address', type: 'address', indexed: false },
      { name: 'guid', internalType: 'bytes32', type: 'bytes32', indexed: false },
      { name: 'index', internalType: 'uint16', type: 'uint16', indexed: false },
      { name: 'message', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'ComposeSent',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'executor', internalType: 'address', type: 'address', indexed: true },
      { name: 'guid', internalType: 'bytes32', type: 'bytes32', indexed: false },
      { name: 'index', internalType: 'uint16', type: 'uint16', indexed: false },
      { name: 'gas', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'value', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'message', internalType: 'bytes', type: 'bytes', indexed: false },
      { name: 'extraData', internalType: 'bytes', type: 'bytes', indexed: false },
      { name: 'reason', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'LzComposeAlert',
  },
  {
    type: 'function',
    inputs: [
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_guid', internalType: 'bytes32', type: 'bytes32' },
      { name: '_index', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'composeQueue',
    outputs: [{ name: 'messageHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_guid', internalType: 'bytes32', type: 'bytes32' },
      { name: '_index', internalType: 'uint16', type: 'uint16' },
      { name: '_message', internalType: 'bytes', type: 'bytes' },
      { name: '_extraData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'lzCompose',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_guid', internalType: 'bytes32', type: 'bytes32' },
      { name: '_index', internalType: 'uint16', type: 'uint16' },
      { name: '_message', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'sendCompose',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMessagingContext
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMessagingContextAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'getSendContext',
    outputs: [
      { name: 'dstEid', internalType: 'uint32', type: 'uint32' },
      { name: 'sender', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'isSendingMessage',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ISendLib
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iSendLibAbi = [
  {
    type: 'function',
    inputs: [
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
      { name: '_oapp', internalType: 'address', type: 'address' },
      { name: '_configType', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'getConfig',
    outputs: [{ name: 'config', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_eid', internalType: 'uint32', type: 'uint32' }],
    name: 'isSupportedEid',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'messageLibType',
    outputs: [{ name: '', internalType: 'enum MessageLibType', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_packet',
        internalType: 'struct Packet',
        type: 'tuple',
        components: [
          { name: 'nonce', internalType: 'uint64', type: 'uint64' },
          { name: 'srcEid', internalType: 'uint32', type: 'uint32' },
          { name: 'sender', internalType: 'address', type: 'address' },
          { name: 'dstEid', internalType: 'uint32', type: 'uint32' },
          { name: 'receiver', internalType: 'bytes32', type: 'bytes32' },
          { name: 'guid', internalType: 'bytes32', type: 'bytes32' },
          { name: 'message', internalType: 'bytes', type: 'bytes' },
        ],
      },
      { name: '_options', internalType: 'bytes', type: 'bytes' },
      { name: '_payInLzToken', internalType: 'bool', type: 'bool' },
    ],
    name: 'quote',
    outputs: [
      {
        name: '',
        internalType: 'struct MessagingFee',
        type: 'tuple',
        components: [
          { name: 'nativeFee', internalType: 'uint256', type: 'uint256' },
          { name: 'lzTokenFee', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_packet',
        internalType: 'struct Packet',
        type: 'tuple',
        components: [
          { name: 'nonce', internalType: 'uint64', type: 'uint64' },
          { name: 'srcEid', internalType: 'uint32', type: 'uint32' },
          { name: 'sender', internalType: 'address', type: 'address' },
          { name: 'dstEid', internalType: 'uint32', type: 'uint32' },
          { name: 'receiver', internalType: 'bytes32', type: 'bytes32' },
          { name: 'guid', internalType: 'bytes32', type: 'bytes32' },
          { name: 'message', internalType: 'bytes', type: 'bytes' },
        ],
      },
      { name: '_options', internalType: 'bytes', type: 'bytes' },
      { name: '_payInLzToken', internalType: 'bool', type: 'bool' },
    ],
    name: 'send',
    outputs: [
      {
        name: '',
        internalType: 'struct MessagingFee',
        type: 'tuple',
        components: [
          { name: 'nativeFee', internalType: 'uint256', type: 'uint256' },
          { name: 'lzTokenFee', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'encodedPacket', internalType: 'bytes', type: 'bytes' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_oapp', internalType: 'address', type: 'address' },
      {
        name: '_config',
        internalType: 'struct SetConfigParam[]',
        type: 'tuple[]',
        components: [
          { name: 'eid', internalType: 'uint32', type: 'uint32' },
          { name: 'configType', internalType: 'uint32', type: 'uint32' },
          { name: 'config', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'setConfig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_treasury', internalType: 'address', type: 'address' }],
    name: 'setTreasury',
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
    name: 'version',
    outputs: [
      { name: 'major', internalType: 'uint64', type: 'uint64' },
      { name: 'minor', internalType: 'uint8', type: 'uint8' },
      { name: 'endpointVersion', internalType: 'uint8', type: 'uint8' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'withdrawFee',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_lzToken', internalType: 'address', type: 'address' },
      { name: '_to', internalType: 'address', type: 'address' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'withdrawLzTokenFee',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ITransparentUpgradeableProxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iTransparentUpgradeableProxyAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'previousAdmin', internalType: 'address', type: 'address', indexed: false },
      { name: 'newAdmin', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'beacon', internalType: 'address', type: 'address', indexed: true }],
    name: 'BeaconUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'implementation', internalType: 'address', type: 'address', indexed: true }],
    name: 'Upgraded',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
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
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
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
      { name: '_depositId', internalType: 'uint256', type: 'uint256' },
      { name: '_ustcPlusAmount', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint8', type: 'uint8' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
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
] as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const lpManagerAddress = {
  11155111: '0xC72C2e40574C1279fC3D3aDC54C7e055D9727348',
} as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const lpManagerConfig = { address: lpManagerAddress, abi: lpManagerAbi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LpNft
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
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
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const lpNftAddress = {
  11155111: '0x9885055bEb85A0D35B1fFb982Acfeaf61f340877',
} as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
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
// Ownable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ownableAbi = [
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
// Proxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const proxyAbi = [{ type: 'fallback', stateMutability: 'payable' }] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ProxyAdmin
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const proxyAdminAbi = [
  {
    type: 'constructor',
    inputs: [{ name: 'initialOwner', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
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
      { name: 'previousOwner', internalType: 'address', type: 'address', indexed: true },
      { name: 'newOwner', internalType: 'address', type: 'address', indexed: true },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'function',
    inputs: [],
    name: 'UPGRADE_INTERFACE_VERSION',
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
  { type: 'function', inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable' },
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
      { name: 'proxy', internalType: 'contract ITransparentUpgradeableProxy', type: 'address' },
      { name: 'implementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeAndCall',
    outputs: [],
    stateMutability: 'payable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SafeERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const safeErc20Abi = [
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'currentAllowance', internalType: 'uint256', type: 'uint256' },
      { name: 'requestedDecrease', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeERC20FailedDecreaseAllowance',
  },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
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
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
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
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const testErc20Address = {
  11155111: '0x32e5C809663F371ec25c7A21953647b448394aA3',
} as const

/**
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const testErc20Config = { address: testErc20Address, abi: testErc20Abi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TransparentUpgradeableProxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const transparentUpgradeableProxyAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_logic', internalType: 'address', type: 'address' },
      { name: 'initialOwner', internalType: 'address', type: 'address' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    stateMutability: 'payable',
  },
  { type: 'error', inputs: [{ name: 'target', internalType: 'address', type: 'address' }], name: 'AddressEmptyCode' },
  { type: 'error', inputs: [{ name: 'admin', internalType: 'address', type: 'address' }], name: 'ERC1967InvalidAdmin' },
  {
    type: 'error',
    inputs: [{ name: 'implementation', internalType: 'address', type: 'address' }],
    name: 'ERC1967InvalidImplementation',
  },
  { type: 'error', inputs: [], name: 'ERC1967NonPayable' },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  { type: 'error', inputs: [], name: 'ProxyDeniedAdminAccess' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'previousAdmin', internalType: 'address', type: 'address', indexed: false },
      { name: 'newAdmin', internalType: 'address', type: 'address', indexed: false },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'implementation', internalType: 'address', type: 'address', indexed: true }],
    name: 'Upgraded',
  },
  { type: 'fallback', stateMutability: 'payable' },
] as const

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
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc1967ProxyAbi}__
 */
export const watchErc1967ProxyEvent = /*#__PURE__*/ createWatchContractEvent({ abi: erc1967ProxyAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc1967ProxyAbi}__ and `eventName` set to `"Upgraded"`
 */
export const watchErc1967ProxyUpgradedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc1967ProxyAbi,
  eventName: 'Upgraded',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc1967UtilsAbi}__
 */
export const watchErc1967UtilsEvent = /*#__PURE__*/ createWatchContractEvent({ abi: erc1967UtilsAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc1967UtilsAbi}__ and `eventName` set to `"AdminChanged"`
 */
export const watchErc1967UtilsAdminChangedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc1967UtilsAbi,
  eventName: 'AdminChanged',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc1967UtilsAbi}__ and `eventName` set to `"BeaconUpgraded"`
 */
export const watchErc1967UtilsBeaconUpgradedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc1967UtilsAbi,
  eventName: 'BeaconUpgraded',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link erc1967UtilsAbi}__ and `eventName` set to `"Upgraded"`
 */
export const watchErc1967UtilsUpgradedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: erc1967UtilsAbi,
  eventName: 'Upgraded',
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
 * Wraps __{@link readContract}__ with `abi` set to __{@link iBeaconAbi}__
 */
export const readIBeacon = /*#__PURE__*/ createReadContract({ abi: iBeaconAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iBeaconAbi}__ and `functionName` set to `"implementation"`
 */
export const readIBeaconImplementation = /*#__PURE__*/ createReadContract({
  abi: iBeaconAbi,
  functionName: 'implementation',
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
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc1967Abi}__
 */
export const watchIerc1967Event = /*#__PURE__*/ createWatchContractEvent({ abi: ierc1967Abi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc1967Abi}__ and `eventName` set to `"AdminChanged"`
 */
export const watchIerc1967AdminChangedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc1967Abi,
  eventName: 'AdminChanged',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc1967Abi}__ and `eventName` set to `"BeaconUpgraded"`
 */
export const watchIerc1967BeaconUpgradedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc1967Abi,
  eventName: 'BeaconUpgraded',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ierc1967Abi}__ and `eventName` set to `"Upgraded"`
 */
export const watchIerc1967UpgradedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ierc1967Abi,
  eventName: 'Upgraded',
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
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20PermitAbi}__
 */
export const readIerc20Permit = /*#__PURE__*/ createReadContract({ abi: ierc20PermitAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20PermitAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 */
export const readIerc20PermitDomainSeparator = /*#__PURE__*/ createReadContract({
  abi: ierc20PermitAbi,
  functionName: 'DOMAIN_SEPARATOR',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ierc20PermitAbi}__ and `functionName` set to `"nonces"`
 */
export const readIerc20PermitNonces = /*#__PURE__*/ createReadContract({ abi: ierc20PermitAbi, functionName: 'nonces' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20PermitAbi}__
 */
export const writeIerc20Permit = /*#__PURE__*/ createWriteContract({ abi: ierc20PermitAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ierc20PermitAbi}__ and `functionName` set to `"permit"`
 */
export const writeIerc20PermitPermit = /*#__PURE__*/ createWriteContract({
  abi: ierc20PermitAbi,
  functionName: 'permit',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20PermitAbi}__
 */
export const simulateIerc20Permit = /*#__PURE__*/ createSimulateContract({ abi: ierc20PermitAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ierc20PermitAbi}__ and `functionName` set to `"permit"`
 */
export const simulateIerc20PermitPermit = /*#__PURE__*/ createSimulateContract({
  abi: ierc20PermitAbi,
  functionName: 'permit',
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
 * Wraps __{@link readContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__
 */
export const readILayerZeroEndpointV2 = /*#__PURE__*/ createReadContract({ abi: iLayerZeroEndpointV2Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"composeQueue"`
 */
export const readILayerZeroEndpointV2ComposeQueue = /*#__PURE__*/ createReadContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'composeQueue',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"defaultReceiveLibrary"`
 */
export const readILayerZeroEndpointV2DefaultReceiveLibrary = /*#__PURE__*/ createReadContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'defaultReceiveLibrary',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"defaultReceiveLibraryTimeout"`
 */
export const readILayerZeroEndpointV2DefaultReceiveLibraryTimeout = /*#__PURE__*/ createReadContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'defaultReceiveLibraryTimeout',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"defaultSendLibrary"`
 */
export const readILayerZeroEndpointV2DefaultSendLibrary = /*#__PURE__*/ createReadContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'defaultSendLibrary',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"eid"`
 */
export const readILayerZeroEndpointV2Eid = /*#__PURE__*/ createReadContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'eid',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"getConfig"`
 */
export const readILayerZeroEndpointV2GetConfig = /*#__PURE__*/ createReadContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'getConfig',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"getReceiveLibrary"`
 */
export const readILayerZeroEndpointV2GetReceiveLibrary = /*#__PURE__*/ createReadContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'getReceiveLibrary',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"getRegisteredLibraries"`
 */
export const readILayerZeroEndpointV2GetRegisteredLibraries = /*#__PURE__*/ createReadContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'getRegisteredLibraries',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"getSendContext"`
 */
export const readILayerZeroEndpointV2GetSendContext = /*#__PURE__*/ createReadContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'getSendContext',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"getSendLibrary"`
 */
export const readILayerZeroEndpointV2GetSendLibrary = /*#__PURE__*/ createReadContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'getSendLibrary',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"inboundNonce"`
 */
export const readILayerZeroEndpointV2InboundNonce = /*#__PURE__*/ createReadContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'inboundNonce',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"inboundPayloadHash"`
 */
export const readILayerZeroEndpointV2InboundPayloadHash = /*#__PURE__*/ createReadContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'inboundPayloadHash',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"initializable"`
 */
export const readILayerZeroEndpointV2Initializable = /*#__PURE__*/ createReadContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'initializable',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"isDefaultSendLibrary"`
 */
export const readILayerZeroEndpointV2IsDefaultSendLibrary = /*#__PURE__*/ createReadContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'isDefaultSendLibrary',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"isRegisteredLibrary"`
 */
export const readILayerZeroEndpointV2IsRegisteredLibrary = /*#__PURE__*/ createReadContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'isRegisteredLibrary',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"isSendingMessage"`
 */
export const readILayerZeroEndpointV2IsSendingMessage = /*#__PURE__*/ createReadContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'isSendingMessage',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"isSupportedEid"`
 */
export const readILayerZeroEndpointV2IsSupportedEid = /*#__PURE__*/ createReadContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'isSupportedEid',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"isValidReceiveLibrary"`
 */
export const readILayerZeroEndpointV2IsValidReceiveLibrary = /*#__PURE__*/ createReadContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'isValidReceiveLibrary',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"lazyInboundNonce"`
 */
export const readILayerZeroEndpointV2LazyInboundNonce = /*#__PURE__*/ createReadContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'lazyInboundNonce',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"lzToken"`
 */
export const readILayerZeroEndpointV2LzToken = /*#__PURE__*/ createReadContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'lzToken',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"nativeToken"`
 */
export const readILayerZeroEndpointV2NativeToken = /*#__PURE__*/ createReadContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'nativeToken',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"nextGuid"`
 */
export const readILayerZeroEndpointV2NextGuid = /*#__PURE__*/ createReadContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'nextGuid',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"outboundNonce"`
 */
export const readILayerZeroEndpointV2OutboundNonce = /*#__PURE__*/ createReadContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'outboundNonce',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"quote"`
 */
export const readILayerZeroEndpointV2Quote = /*#__PURE__*/ createReadContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'quote',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"receiveLibraryTimeout"`
 */
export const readILayerZeroEndpointV2ReceiveLibraryTimeout = /*#__PURE__*/ createReadContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'receiveLibraryTimeout',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"verifiable"`
 */
export const readILayerZeroEndpointV2Verifiable = /*#__PURE__*/ createReadContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'verifiable',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__
 */
export const writeILayerZeroEndpointV2 = /*#__PURE__*/ createWriteContract({ abi: iLayerZeroEndpointV2Abi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"burn"`
 */
export const writeILayerZeroEndpointV2Burn = /*#__PURE__*/ createWriteContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'burn',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"clear"`
 */
export const writeILayerZeroEndpointV2Clear = /*#__PURE__*/ createWriteContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'clear',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"lzCompose"`
 */
export const writeILayerZeroEndpointV2LzCompose = /*#__PURE__*/ createWriteContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'lzCompose',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"lzReceive"`
 */
export const writeILayerZeroEndpointV2LzReceive = /*#__PURE__*/ createWriteContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'lzReceive',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"nilify"`
 */
export const writeILayerZeroEndpointV2Nilify = /*#__PURE__*/ createWriteContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'nilify',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"registerLibrary"`
 */
export const writeILayerZeroEndpointV2RegisterLibrary = /*#__PURE__*/ createWriteContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'registerLibrary',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"send"`
 */
export const writeILayerZeroEndpointV2Send = /*#__PURE__*/ createWriteContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'send',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"sendCompose"`
 */
export const writeILayerZeroEndpointV2SendCompose = /*#__PURE__*/ createWriteContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'sendCompose',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"setConfig"`
 */
export const writeILayerZeroEndpointV2SetConfig = /*#__PURE__*/ createWriteContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'setConfig',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"setDefaultReceiveLibrary"`
 */
export const writeILayerZeroEndpointV2SetDefaultReceiveLibrary = /*#__PURE__*/ createWriteContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'setDefaultReceiveLibrary',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"setDefaultReceiveLibraryTimeout"`
 */
export const writeILayerZeroEndpointV2SetDefaultReceiveLibraryTimeout = /*#__PURE__*/ createWriteContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'setDefaultReceiveLibraryTimeout',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"setDefaultSendLibrary"`
 */
export const writeILayerZeroEndpointV2SetDefaultSendLibrary = /*#__PURE__*/ createWriteContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'setDefaultSendLibrary',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"setDelegate"`
 */
export const writeILayerZeroEndpointV2SetDelegate = /*#__PURE__*/ createWriteContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'setDelegate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"setLzToken"`
 */
export const writeILayerZeroEndpointV2SetLzToken = /*#__PURE__*/ createWriteContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'setLzToken',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"setReceiveLibrary"`
 */
export const writeILayerZeroEndpointV2SetReceiveLibrary = /*#__PURE__*/ createWriteContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'setReceiveLibrary',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"setReceiveLibraryTimeout"`
 */
export const writeILayerZeroEndpointV2SetReceiveLibraryTimeout = /*#__PURE__*/ createWriteContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'setReceiveLibraryTimeout',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"setSendLibrary"`
 */
export const writeILayerZeroEndpointV2SetSendLibrary = /*#__PURE__*/ createWriteContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'setSendLibrary',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"skip"`
 */
export const writeILayerZeroEndpointV2Skip = /*#__PURE__*/ createWriteContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'skip',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"verify"`
 */
export const writeILayerZeroEndpointV2Verify = /*#__PURE__*/ createWriteContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'verify',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__
 */
export const simulateILayerZeroEndpointV2 = /*#__PURE__*/ createSimulateContract({ abi: iLayerZeroEndpointV2Abi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"burn"`
 */
export const simulateILayerZeroEndpointV2Burn = /*#__PURE__*/ createSimulateContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'burn',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"clear"`
 */
export const simulateILayerZeroEndpointV2Clear = /*#__PURE__*/ createSimulateContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'clear',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"lzCompose"`
 */
export const simulateILayerZeroEndpointV2LzCompose = /*#__PURE__*/ createSimulateContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'lzCompose',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"lzReceive"`
 */
export const simulateILayerZeroEndpointV2LzReceive = /*#__PURE__*/ createSimulateContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'lzReceive',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"nilify"`
 */
export const simulateILayerZeroEndpointV2Nilify = /*#__PURE__*/ createSimulateContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'nilify',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"registerLibrary"`
 */
export const simulateILayerZeroEndpointV2RegisterLibrary = /*#__PURE__*/ createSimulateContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'registerLibrary',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"send"`
 */
export const simulateILayerZeroEndpointV2Send = /*#__PURE__*/ createSimulateContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'send',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"sendCompose"`
 */
export const simulateILayerZeroEndpointV2SendCompose = /*#__PURE__*/ createSimulateContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'sendCompose',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"setConfig"`
 */
export const simulateILayerZeroEndpointV2SetConfig = /*#__PURE__*/ createSimulateContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'setConfig',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"setDefaultReceiveLibrary"`
 */
export const simulateILayerZeroEndpointV2SetDefaultReceiveLibrary = /*#__PURE__*/ createSimulateContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'setDefaultReceiveLibrary',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"setDefaultReceiveLibraryTimeout"`
 */
export const simulateILayerZeroEndpointV2SetDefaultReceiveLibraryTimeout = /*#__PURE__*/ createSimulateContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'setDefaultReceiveLibraryTimeout',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"setDefaultSendLibrary"`
 */
export const simulateILayerZeroEndpointV2SetDefaultSendLibrary = /*#__PURE__*/ createSimulateContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'setDefaultSendLibrary',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"setDelegate"`
 */
export const simulateILayerZeroEndpointV2SetDelegate = /*#__PURE__*/ createSimulateContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'setDelegate',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"setLzToken"`
 */
export const simulateILayerZeroEndpointV2SetLzToken = /*#__PURE__*/ createSimulateContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'setLzToken',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"setReceiveLibrary"`
 */
export const simulateILayerZeroEndpointV2SetReceiveLibrary = /*#__PURE__*/ createSimulateContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'setReceiveLibrary',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"setReceiveLibraryTimeout"`
 */
export const simulateILayerZeroEndpointV2SetReceiveLibraryTimeout = /*#__PURE__*/ createSimulateContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'setReceiveLibraryTimeout',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"setSendLibrary"`
 */
export const simulateILayerZeroEndpointV2SetSendLibrary = /*#__PURE__*/ createSimulateContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'setSendLibrary',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"skip"`
 */
export const simulateILayerZeroEndpointV2Skip = /*#__PURE__*/ createSimulateContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'skip',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `functionName` set to `"verify"`
 */
export const simulateILayerZeroEndpointV2Verify = /*#__PURE__*/ createSimulateContract({
  abi: iLayerZeroEndpointV2Abi,
  functionName: 'verify',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__
 */
export const watchILayerZeroEndpointV2Event = /*#__PURE__*/ createWatchContractEvent({ abi: iLayerZeroEndpointV2Abi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `eventName` set to `"ComposeDelivered"`
 */
export const watchILayerZeroEndpointV2ComposeDeliveredEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iLayerZeroEndpointV2Abi,
  eventName: 'ComposeDelivered',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `eventName` set to `"ComposeSent"`
 */
export const watchILayerZeroEndpointV2ComposeSentEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iLayerZeroEndpointV2Abi,
  eventName: 'ComposeSent',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `eventName` set to `"DefaultReceiveLibrarySet"`
 */
export const watchILayerZeroEndpointV2DefaultReceiveLibrarySetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iLayerZeroEndpointV2Abi,
  eventName: 'DefaultReceiveLibrarySet',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `eventName` set to `"DefaultReceiveLibraryTimeoutSet"`
 */
export const watchILayerZeroEndpointV2DefaultReceiveLibraryTimeoutSetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iLayerZeroEndpointV2Abi,
  eventName: 'DefaultReceiveLibraryTimeoutSet',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `eventName` set to `"DefaultSendLibrarySet"`
 */
export const watchILayerZeroEndpointV2DefaultSendLibrarySetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iLayerZeroEndpointV2Abi,
  eventName: 'DefaultSendLibrarySet',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `eventName` set to `"DelegateSet"`
 */
export const watchILayerZeroEndpointV2DelegateSetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iLayerZeroEndpointV2Abi,
  eventName: 'DelegateSet',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `eventName` set to `"InboundNonceSkipped"`
 */
export const watchILayerZeroEndpointV2InboundNonceSkippedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iLayerZeroEndpointV2Abi,
  eventName: 'InboundNonceSkipped',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `eventName` set to `"LibraryRegistered"`
 */
export const watchILayerZeroEndpointV2LibraryRegisteredEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iLayerZeroEndpointV2Abi,
  eventName: 'LibraryRegistered',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `eventName` set to `"LzComposeAlert"`
 */
export const watchILayerZeroEndpointV2LzComposeAlertEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iLayerZeroEndpointV2Abi,
  eventName: 'LzComposeAlert',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `eventName` set to `"LzReceiveAlert"`
 */
export const watchILayerZeroEndpointV2LzReceiveAlertEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iLayerZeroEndpointV2Abi,
  eventName: 'LzReceiveAlert',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `eventName` set to `"LzTokenSet"`
 */
export const watchILayerZeroEndpointV2LzTokenSetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iLayerZeroEndpointV2Abi,
  eventName: 'LzTokenSet',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `eventName` set to `"PacketBurnt"`
 */
export const watchILayerZeroEndpointV2PacketBurntEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iLayerZeroEndpointV2Abi,
  eventName: 'PacketBurnt',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `eventName` set to `"PacketDelivered"`
 */
export const watchILayerZeroEndpointV2PacketDeliveredEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iLayerZeroEndpointV2Abi,
  eventName: 'PacketDelivered',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `eventName` set to `"PacketNilified"`
 */
export const watchILayerZeroEndpointV2PacketNilifiedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iLayerZeroEndpointV2Abi,
  eventName: 'PacketNilified',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `eventName` set to `"PacketSent"`
 */
export const watchILayerZeroEndpointV2PacketSentEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iLayerZeroEndpointV2Abi,
  eventName: 'PacketSent',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `eventName` set to `"PacketVerified"`
 */
export const watchILayerZeroEndpointV2PacketVerifiedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iLayerZeroEndpointV2Abi,
  eventName: 'PacketVerified',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `eventName` set to `"ReceiveLibrarySet"`
 */
export const watchILayerZeroEndpointV2ReceiveLibrarySetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iLayerZeroEndpointV2Abi,
  eventName: 'ReceiveLibrarySet',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `eventName` set to `"ReceiveLibraryTimeoutSet"`
 */
export const watchILayerZeroEndpointV2ReceiveLibraryTimeoutSetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iLayerZeroEndpointV2Abi,
  eventName: 'ReceiveLibraryTimeoutSet',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iLayerZeroEndpointV2Abi}__ and `eventName` set to `"SendLibrarySet"`
 */
export const watchILayerZeroEndpointV2SendLibrarySetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iLayerZeroEndpointV2Abi,
  eventName: 'SendLibrarySet',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iLayerZeroReceiverAbi}__
 */
export const readILayerZeroReceiver = /*#__PURE__*/ createReadContract({ abi: iLayerZeroReceiverAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iLayerZeroReceiverAbi}__ and `functionName` set to `"allowInitializePath"`
 */
export const readILayerZeroReceiverAllowInitializePath = /*#__PURE__*/ createReadContract({
  abi: iLayerZeroReceiverAbi,
  functionName: 'allowInitializePath',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iLayerZeroReceiverAbi}__ and `functionName` set to `"nextNonce"`
 */
export const readILayerZeroReceiverNextNonce = /*#__PURE__*/ createReadContract({
  abi: iLayerZeroReceiverAbi,
  functionName: 'nextNonce',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iLayerZeroReceiverAbi}__
 */
export const writeILayerZeroReceiver = /*#__PURE__*/ createWriteContract({ abi: iLayerZeroReceiverAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iLayerZeroReceiverAbi}__ and `functionName` set to `"lzReceive"`
 */
export const writeILayerZeroReceiverLzReceive = /*#__PURE__*/ createWriteContract({
  abi: iLayerZeroReceiverAbi,
  functionName: 'lzReceive',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iLayerZeroReceiverAbi}__
 */
export const simulateILayerZeroReceiver = /*#__PURE__*/ createSimulateContract({ abi: iLayerZeroReceiverAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iLayerZeroReceiverAbi}__ and `functionName` set to `"lzReceive"`
 */
export const simulateILayerZeroReceiverLzReceive = /*#__PURE__*/ createSimulateContract({
  abi: iLayerZeroReceiverAbi,
  functionName: 'lzReceive',
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
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMessageLibAbi}__
 */
export const readIMessageLib = /*#__PURE__*/ createReadContract({ abi: iMessageLibAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMessageLibAbi}__ and `functionName` set to `"getConfig"`
 */
export const readIMessageLibGetConfig = /*#__PURE__*/ createReadContract({
  abi: iMessageLibAbi,
  functionName: 'getConfig',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMessageLibAbi}__ and `functionName` set to `"isSupportedEid"`
 */
export const readIMessageLibIsSupportedEid = /*#__PURE__*/ createReadContract({
  abi: iMessageLibAbi,
  functionName: 'isSupportedEid',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMessageLibAbi}__ and `functionName` set to `"messageLibType"`
 */
export const readIMessageLibMessageLibType = /*#__PURE__*/ createReadContract({
  abi: iMessageLibAbi,
  functionName: 'messageLibType',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMessageLibAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readIMessageLibSupportsInterface = /*#__PURE__*/ createReadContract({
  abi: iMessageLibAbi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMessageLibAbi}__ and `functionName` set to `"version"`
 */
export const readIMessageLibVersion = /*#__PURE__*/ createReadContract({ abi: iMessageLibAbi, functionName: 'version' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMessageLibAbi}__
 */
export const writeIMessageLib = /*#__PURE__*/ createWriteContract({ abi: iMessageLibAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMessageLibAbi}__ and `functionName` set to `"setConfig"`
 */
export const writeIMessageLibSetConfig = /*#__PURE__*/ createWriteContract({
  abi: iMessageLibAbi,
  functionName: 'setConfig',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMessageLibAbi}__
 */
export const simulateIMessageLib = /*#__PURE__*/ createSimulateContract({ abi: iMessageLibAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMessageLibAbi}__ and `functionName` set to `"setConfig"`
 */
export const simulateIMessageLibSetConfig = /*#__PURE__*/ createSimulateContract({
  abi: iMessageLibAbi,
  functionName: 'setConfig',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMessageLibManagerAbi}__
 */
export const readIMessageLibManager = /*#__PURE__*/ createReadContract({ abi: iMessageLibManagerAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMessageLibManagerAbi}__ and `functionName` set to `"defaultReceiveLibrary"`
 */
export const readIMessageLibManagerDefaultReceiveLibrary = /*#__PURE__*/ createReadContract({
  abi: iMessageLibManagerAbi,
  functionName: 'defaultReceiveLibrary',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMessageLibManagerAbi}__ and `functionName` set to `"defaultReceiveLibraryTimeout"`
 */
export const readIMessageLibManagerDefaultReceiveLibraryTimeout = /*#__PURE__*/ createReadContract({
  abi: iMessageLibManagerAbi,
  functionName: 'defaultReceiveLibraryTimeout',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMessageLibManagerAbi}__ and `functionName` set to `"defaultSendLibrary"`
 */
export const readIMessageLibManagerDefaultSendLibrary = /*#__PURE__*/ createReadContract({
  abi: iMessageLibManagerAbi,
  functionName: 'defaultSendLibrary',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMessageLibManagerAbi}__ and `functionName` set to `"getConfig"`
 */
export const readIMessageLibManagerGetConfig = /*#__PURE__*/ createReadContract({
  abi: iMessageLibManagerAbi,
  functionName: 'getConfig',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMessageLibManagerAbi}__ and `functionName` set to `"getReceiveLibrary"`
 */
export const readIMessageLibManagerGetReceiveLibrary = /*#__PURE__*/ createReadContract({
  abi: iMessageLibManagerAbi,
  functionName: 'getReceiveLibrary',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMessageLibManagerAbi}__ and `functionName` set to `"getRegisteredLibraries"`
 */
export const readIMessageLibManagerGetRegisteredLibraries = /*#__PURE__*/ createReadContract({
  abi: iMessageLibManagerAbi,
  functionName: 'getRegisteredLibraries',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMessageLibManagerAbi}__ and `functionName` set to `"getSendLibrary"`
 */
export const readIMessageLibManagerGetSendLibrary = /*#__PURE__*/ createReadContract({
  abi: iMessageLibManagerAbi,
  functionName: 'getSendLibrary',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMessageLibManagerAbi}__ and `functionName` set to `"isDefaultSendLibrary"`
 */
export const readIMessageLibManagerIsDefaultSendLibrary = /*#__PURE__*/ createReadContract({
  abi: iMessageLibManagerAbi,
  functionName: 'isDefaultSendLibrary',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMessageLibManagerAbi}__ and `functionName` set to `"isRegisteredLibrary"`
 */
export const readIMessageLibManagerIsRegisteredLibrary = /*#__PURE__*/ createReadContract({
  abi: iMessageLibManagerAbi,
  functionName: 'isRegisteredLibrary',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMessageLibManagerAbi}__ and `functionName` set to `"isSupportedEid"`
 */
export const readIMessageLibManagerIsSupportedEid = /*#__PURE__*/ createReadContract({
  abi: iMessageLibManagerAbi,
  functionName: 'isSupportedEid',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMessageLibManagerAbi}__ and `functionName` set to `"isValidReceiveLibrary"`
 */
export const readIMessageLibManagerIsValidReceiveLibrary = /*#__PURE__*/ createReadContract({
  abi: iMessageLibManagerAbi,
  functionName: 'isValidReceiveLibrary',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMessageLibManagerAbi}__ and `functionName` set to `"receiveLibraryTimeout"`
 */
export const readIMessageLibManagerReceiveLibraryTimeout = /*#__PURE__*/ createReadContract({
  abi: iMessageLibManagerAbi,
  functionName: 'receiveLibraryTimeout',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMessageLibManagerAbi}__
 */
export const writeIMessageLibManager = /*#__PURE__*/ createWriteContract({ abi: iMessageLibManagerAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMessageLibManagerAbi}__ and `functionName` set to `"registerLibrary"`
 */
export const writeIMessageLibManagerRegisterLibrary = /*#__PURE__*/ createWriteContract({
  abi: iMessageLibManagerAbi,
  functionName: 'registerLibrary',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMessageLibManagerAbi}__ and `functionName` set to `"setConfig"`
 */
export const writeIMessageLibManagerSetConfig = /*#__PURE__*/ createWriteContract({
  abi: iMessageLibManagerAbi,
  functionName: 'setConfig',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMessageLibManagerAbi}__ and `functionName` set to `"setDefaultReceiveLibrary"`
 */
export const writeIMessageLibManagerSetDefaultReceiveLibrary = /*#__PURE__*/ createWriteContract({
  abi: iMessageLibManagerAbi,
  functionName: 'setDefaultReceiveLibrary',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMessageLibManagerAbi}__ and `functionName` set to `"setDefaultReceiveLibraryTimeout"`
 */
export const writeIMessageLibManagerSetDefaultReceiveLibraryTimeout = /*#__PURE__*/ createWriteContract({
  abi: iMessageLibManagerAbi,
  functionName: 'setDefaultReceiveLibraryTimeout',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMessageLibManagerAbi}__ and `functionName` set to `"setDefaultSendLibrary"`
 */
export const writeIMessageLibManagerSetDefaultSendLibrary = /*#__PURE__*/ createWriteContract({
  abi: iMessageLibManagerAbi,
  functionName: 'setDefaultSendLibrary',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMessageLibManagerAbi}__ and `functionName` set to `"setReceiveLibrary"`
 */
export const writeIMessageLibManagerSetReceiveLibrary = /*#__PURE__*/ createWriteContract({
  abi: iMessageLibManagerAbi,
  functionName: 'setReceiveLibrary',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMessageLibManagerAbi}__ and `functionName` set to `"setReceiveLibraryTimeout"`
 */
export const writeIMessageLibManagerSetReceiveLibraryTimeout = /*#__PURE__*/ createWriteContract({
  abi: iMessageLibManagerAbi,
  functionName: 'setReceiveLibraryTimeout',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMessageLibManagerAbi}__ and `functionName` set to `"setSendLibrary"`
 */
export const writeIMessageLibManagerSetSendLibrary = /*#__PURE__*/ createWriteContract({
  abi: iMessageLibManagerAbi,
  functionName: 'setSendLibrary',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMessageLibManagerAbi}__
 */
export const simulateIMessageLibManager = /*#__PURE__*/ createSimulateContract({ abi: iMessageLibManagerAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMessageLibManagerAbi}__ and `functionName` set to `"registerLibrary"`
 */
export const simulateIMessageLibManagerRegisterLibrary = /*#__PURE__*/ createSimulateContract({
  abi: iMessageLibManagerAbi,
  functionName: 'registerLibrary',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMessageLibManagerAbi}__ and `functionName` set to `"setConfig"`
 */
export const simulateIMessageLibManagerSetConfig = /*#__PURE__*/ createSimulateContract({
  abi: iMessageLibManagerAbi,
  functionName: 'setConfig',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMessageLibManagerAbi}__ and `functionName` set to `"setDefaultReceiveLibrary"`
 */
export const simulateIMessageLibManagerSetDefaultReceiveLibrary = /*#__PURE__*/ createSimulateContract({
  abi: iMessageLibManagerAbi,
  functionName: 'setDefaultReceiveLibrary',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMessageLibManagerAbi}__ and `functionName` set to `"setDefaultReceiveLibraryTimeout"`
 */
export const simulateIMessageLibManagerSetDefaultReceiveLibraryTimeout = /*#__PURE__*/ createSimulateContract({
  abi: iMessageLibManagerAbi,
  functionName: 'setDefaultReceiveLibraryTimeout',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMessageLibManagerAbi}__ and `functionName` set to `"setDefaultSendLibrary"`
 */
export const simulateIMessageLibManagerSetDefaultSendLibrary = /*#__PURE__*/ createSimulateContract({
  abi: iMessageLibManagerAbi,
  functionName: 'setDefaultSendLibrary',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMessageLibManagerAbi}__ and `functionName` set to `"setReceiveLibrary"`
 */
export const simulateIMessageLibManagerSetReceiveLibrary = /*#__PURE__*/ createSimulateContract({
  abi: iMessageLibManagerAbi,
  functionName: 'setReceiveLibrary',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMessageLibManagerAbi}__ and `functionName` set to `"setReceiveLibraryTimeout"`
 */
export const simulateIMessageLibManagerSetReceiveLibraryTimeout = /*#__PURE__*/ createSimulateContract({
  abi: iMessageLibManagerAbi,
  functionName: 'setReceiveLibraryTimeout',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMessageLibManagerAbi}__ and `functionName` set to `"setSendLibrary"`
 */
export const simulateIMessageLibManagerSetSendLibrary = /*#__PURE__*/ createSimulateContract({
  abi: iMessageLibManagerAbi,
  functionName: 'setSendLibrary',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iMessageLibManagerAbi}__
 */
export const watchIMessageLibManagerEvent = /*#__PURE__*/ createWatchContractEvent({ abi: iMessageLibManagerAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iMessageLibManagerAbi}__ and `eventName` set to `"DefaultReceiveLibrarySet"`
 */
export const watchIMessageLibManagerDefaultReceiveLibrarySetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iMessageLibManagerAbi,
  eventName: 'DefaultReceiveLibrarySet',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iMessageLibManagerAbi}__ and `eventName` set to `"DefaultReceiveLibraryTimeoutSet"`
 */
export const watchIMessageLibManagerDefaultReceiveLibraryTimeoutSetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iMessageLibManagerAbi,
  eventName: 'DefaultReceiveLibraryTimeoutSet',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iMessageLibManagerAbi}__ and `eventName` set to `"DefaultSendLibrarySet"`
 */
export const watchIMessageLibManagerDefaultSendLibrarySetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iMessageLibManagerAbi,
  eventName: 'DefaultSendLibrarySet',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iMessageLibManagerAbi}__ and `eventName` set to `"LibraryRegistered"`
 */
export const watchIMessageLibManagerLibraryRegisteredEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iMessageLibManagerAbi,
  eventName: 'LibraryRegistered',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iMessageLibManagerAbi}__ and `eventName` set to `"ReceiveLibrarySet"`
 */
export const watchIMessageLibManagerReceiveLibrarySetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iMessageLibManagerAbi,
  eventName: 'ReceiveLibrarySet',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iMessageLibManagerAbi}__ and `eventName` set to `"ReceiveLibraryTimeoutSet"`
 */
export const watchIMessageLibManagerReceiveLibraryTimeoutSetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iMessageLibManagerAbi,
  eventName: 'ReceiveLibraryTimeoutSet',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iMessageLibManagerAbi}__ and `eventName` set to `"SendLibrarySet"`
 */
export const watchIMessageLibManagerSendLibrarySetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iMessageLibManagerAbi,
  eventName: 'SendLibrarySet',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMessagingChannelAbi}__
 */
export const readIMessagingChannel = /*#__PURE__*/ createReadContract({ abi: iMessagingChannelAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMessagingChannelAbi}__ and `functionName` set to `"eid"`
 */
export const readIMessagingChannelEid = /*#__PURE__*/ createReadContract({
  abi: iMessagingChannelAbi,
  functionName: 'eid',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMessagingChannelAbi}__ and `functionName` set to `"inboundNonce"`
 */
export const readIMessagingChannelInboundNonce = /*#__PURE__*/ createReadContract({
  abi: iMessagingChannelAbi,
  functionName: 'inboundNonce',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMessagingChannelAbi}__ and `functionName` set to `"inboundPayloadHash"`
 */
export const readIMessagingChannelInboundPayloadHash = /*#__PURE__*/ createReadContract({
  abi: iMessagingChannelAbi,
  functionName: 'inboundPayloadHash',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMessagingChannelAbi}__ and `functionName` set to `"lazyInboundNonce"`
 */
export const readIMessagingChannelLazyInboundNonce = /*#__PURE__*/ createReadContract({
  abi: iMessagingChannelAbi,
  functionName: 'lazyInboundNonce',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMessagingChannelAbi}__ and `functionName` set to `"nextGuid"`
 */
export const readIMessagingChannelNextGuid = /*#__PURE__*/ createReadContract({
  abi: iMessagingChannelAbi,
  functionName: 'nextGuid',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMessagingChannelAbi}__ and `functionName` set to `"outboundNonce"`
 */
export const readIMessagingChannelOutboundNonce = /*#__PURE__*/ createReadContract({
  abi: iMessagingChannelAbi,
  functionName: 'outboundNonce',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMessagingChannelAbi}__
 */
export const writeIMessagingChannel = /*#__PURE__*/ createWriteContract({ abi: iMessagingChannelAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMessagingChannelAbi}__ and `functionName` set to `"burn"`
 */
export const writeIMessagingChannelBurn = /*#__PURE__*/ createWriteContract({
  abi: iMessagingChannelAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMessagingChannelAbi}__ and `functionName` set to `"nilify"`
 */
export const writeIMessagingChannelNilify = /*#__PURE__*/ createWriteContract({
  abi: iMessagingChannelAbi,
  functionName: 'nilify',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMessagingChannelAbi}__ and `functionName` set to `"skip"`
 */
export const writeIMessagingChannelSkip = /*#__PURE__*/ createWriteContract({
  abi: iMessagingChannelAbi,
  functionName: 'skip',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMessagingChannelAbi}__
 */
export const simulateIMessagingChannel = /*#__PURE__*/ createSimulateContract({ abi: iMessagingChannelAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMessagingChannelAbi}__ and `functionName` set to `"burn"`
 */
export const simulateIMessagingChannelBurn = /*#__PURE__*/ createSimulateContract({
  abi: iMessagingChannelAbi,
  functionName: 'burn',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMessagingChannelAbi}__ and `functionName` set to `"nilify"`
 */
export const simulateIMessagingChannelNilify = /*#__PURE__*/ createSimulateContract({
  abi: iMessagingChannelAbi,
  functionName: 'nilify',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMessagingChannelAbi}__ and `functionName` set to `"skip"`
 */
export const simulateIMessagingChannelSkip = /*#__PURE__*/ createSimulateContract({
  abi: iMessagingChannelAbi,
  functionName: 'skip',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iMessagingChannelAbi}__
 */
export const watchIMessagingChannelEvent = /*#__PURE__*/ createWatchContractEvent({ abi: iMessagingChannelAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iMessagingChannelAbi}__ and `eventName` set to `"InboundNonceSkipped"`
 */
export const watchIMessagingChannelInboundNonceSkippedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iMessagingChannelAbi,
  eventName: 'InboundNonceSkipped',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iMessagingChannelAbi}__ and `eventName` set to `"PacketBurnt"`
 */
export const watchIMessagingChannelPacketBurntEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iMessagingChannelAbi,
  eventName: 'PacketBurnt',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iMessagingChannelAbi}__ and `eventName` set to `"PacketNilified"`
 */
export const watchIMessagingChannelPacketNilifiedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iMessagingChannelAbi,
  eventName: 'PacketNilified',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMessagingComposerAbi}__
 */
export const readIMessagingComposer = /*#__PURE__*/ createReadContract({ abi: iMessagingComposerAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMessagingComposerAbi}__ and `functionName` set to `"composeQueue"`
 */
export const readIMessagingComposerComposeQueue = /*#__PURE__*/ createReadContract({
  abi: iMessagingComposerAbi,
  functionName: 'composeQueue',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMessagingComposerAbi}__
 */
export const writeIMessagingComposer = /*#__PURE__*/ createWriteContract({ abi: iMessagingComposerAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMessagingComposerAbi}__ and `functionName` set to `"lzCompose"`
 */
export const writeIMessagingComposerLzCompose = /*#__PURE__*/ createWriteContract({
  abi: iMessagingComposerAbi,
  functionName: 'lzCompose',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iMessagingComposerAbi}__ and `functionName` set to `"sendCompose"`
 */
export const writeIMessagingComposerSendCompose = /*#__PURE__*/ createWriteContract({
  abi: iMessagingComposerAbi,
  functionName: 'sendCompose',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMessagingComposerAbi}__
 */
export const simulateIMessagingComposer = /*#__PURE__*/ createSimulateContract({ abi: iMessagingComposerAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMessagingComposerAbi}__ and `functionName` set to `"lzCompose"`
 */
export const simulateIMessagingComposerLzCompose = /*#__PURE__*/ createSimulateContract({
  abi: iMessagingComposerAbi,
  functionName: 'lzCompose',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iMessagingComposerAbi}__ and `functionName` set to `"sendCompose"`
 */
export const simulateIMessagingComposerSendCompose = /*#__PURE__*/ createSimulateContract({
  abi: iMessagingComposerAbi,
  functionName: 'sendCompose',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iMessagingComposerAbi}__
 */
export const watchIMessagingComposerEvent = /*#__PURE__*/ createWatchContractEvent({ abi: iMessagingComposerAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iMessagingComposerAbi}__ and `eventName` set to `"ComposeDelivered"`
 */
export const watchIMessagingComposerComposeDeliveredEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iMessagingComposerAbi,
  eventName: 'ComposeDelivered',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iMessagingComposerAbi}__ and `eventName` set to `"ComposeSent"`
 */
export const watchIMessagingComposerComposeSentEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iMessagingComposerAbi,
  eventName: 'ComposeSent',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iMessagingComposerAbi}__ and `eventName` set to `"LzComposeAlert"`
 */
export const watchIMessagingComposerLzComposeAlertEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iMessagingComposerAbi,
  eventName: 'LzComposeAlert',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMessagingContextAbi}__
 */
export const readIMessagingContext = /*#__PURE__*/ createReadContract({ abi: iMessagingContextAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMessagingContextAbi}__ and `functionName` set to `"getSendContext"`
 */
export const readIMessagingContextGetSendContext = /*#__PURE__*/ createReadContract({
  abi: iMessagingContextAbi,
  functionName: 'getSendContext',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iMessagingContextAbi}__ and `functionName` set to `"isSendingMessage"`
 */
export const readIMessagingContextIsSendingMessage = /*#__PURE__*/ createReadContract({
  abi: iMessagingContextAbi,
  functionName: 'isSendingMessage',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iSendLibAbi}__
 */
export const readISendLib = /*#__PURE__*/ createReadContract({ abi: iSendLibAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iSendLibAbi}__ and `functionName` set to `"getConfig"`
 */
export const readISendLibGetConfig = /*#__PURE__*/ createReadContract({ abi: iSendLibAbi, functionName: 'getConfig' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iSendLibAbi}__ and `functionName` set to `"isSupportedEid"`
 */
export const readISendLibIsSupportedEid = /*#__PURE__*/ createReadContract({
  abi: iSendLibAbi,
  functionName: 'isSupportedEid',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iSendLibAbi}__ and `functionName` set to `"messageLibType"`
 */
export const readISendLibMessageLibType = /*#__PURE__*/ createReadContract({
  abi: iSendLibAbi,
  functionName: 'messageLibType',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iSendLibAbi}__ and `functionName` set to `"quote"`
 */
export const readISendLibQuote = /*#__PURE__*/ createReadContract({ abi: iSendLibAbi, functionName: 'quote' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iSendLibAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const readISendLibSupportsInterface = /*#__PURE__*/ createReadContract({
  abi: iSendLibAbi,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iSendLibAbi}__ and `functionName` set to `"version"`
 */
export const readISendLibVersion = /*#__PURE__*/ createReadContract({ abi: iSendLibAbi, functionName: 'version' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iSendLibAbi}__
 */
export const writeISendLib = /*#__PURE__*/ createWriteContract({ abi: iSendLibAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iSendLibAbi}__ and `functionName` set to `"send"`
 */
export const writeISendLibSend = /*#__PURE__*/ createWriteContract({ abi: iSendLibAbi, functionName: 'send' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iSendLibAbi}__ and `functionName` set to `"setConfig"`
 */
export const writeISendLibSetConfig = /*#__PURE__*/ createWriteContract({ abi: iSendLibAbi, functionName: 'setConfig' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iSendLibAbi}__ and `functionName` set to `"setTreasury"`
 */
export const writeISendLibSetTreasury = /*#__PURE__*/ createWriteContract({
  abi: iSendLibAbi,
  functionName: 'setTreasury',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iSendLibAbi}__ and `functionName` set to `"withdrawFee"`
 */
export const writeISendLibWithdrawFee = /*#__PURE__*/ createWriteContract({
  abi: iSendLibAbi,
  functionName: 'withdrawFee',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iSendLibAbi}__ and `functionName` set to `"withdrawLzTokenFee"`
 */
export const writeISendLibWithdrawLzTokenFee = /*#__PURE__*/ createWriteContract({
  abi: iSendLibAbi,
  functionName: 'withdrawLzTokenFee',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iSendLibAbi}__
 */
export const simulateISendLib = /*#__PURE__*/ createSimulateContract({ abi: iSendLibAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iSendLibAbi}__ and `functionName` set to `"send"`
 */
export const simulateISendLibSend = /*#__PURE__*/ createSimulateContract({ abi: iSendLibAbi, functionName: 'send' })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iSendLibAbi}__ and `functionName` set to `"setConfig"`
 */
export const simulateISendLibSetConfig = /*#__PURE__*/ createSimulateContract({
  abi: iSendLibAbi,
  functionName: 'setConfig',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iSendLibAbi}__ and `functionName` set to `"setTreasury"`
 */
export const simulateISendLibSetTreasury = /*#__PURE__*/ createSimulateContract({
  abi: iSendLibAbi,
  functionName: 'setTreasury',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iSendLibAbi}__ and `functionName` set to `"withdrawFee"`
 */
export const simulateISendLibWithdrawFee = /*#__PURE__*/ createSimulateContract({
  abi: iSendLibAbi,
  functionName: 'withdrawFee',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iSendLibAbi}__ and `functionName` set to `"withdrawLzTokenFee"`
 */
export const simulateISendLibWithdrawLzTokenFee = /*#__PURE__*/ createSimulateContract({
  abi: iSendLibAbi,
  functionName: 'withdrawLzTokenFee',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iTransparentUpgradeableProxyAbi}__
 */
export const writeITransparentUpgradeableProxy = /*#__PURE__*/ createWriteContract({
  abi: iTransparentUpgradeableProxyAbi,
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iTransparentUpgradeableProxyAbi}__ and `functionName` set to `"upgradeToAndCall"`
 */
export const writeITransparentUpgradeableProxyUpgradeToAndCall = /*#__PURE__*/ createWriteContract({
  abi: iTransparentUpgradeableProxyAbi,
  functionName: 'upgradeToAndCall',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iTransparentUpgradeableProxyAbi}__
 */
export const simulateITransparentUpgradeableProxy = /*#__PURE__*/ createSimulateContract({
  abi: iTransparentUpgradeableProxyAbi,
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iTransparentUpgradeableProxyAbi}__ and `functionName` set to `"upgradeToAndCall"`
 */
export const simulateITransparentUpgradeableProxyUpgradeToAndCall = /*#__PURE__*/ createSimulateContract({
  abi: iTransparentUpgradeableProxyAbi,
  functionName: 'upgradeToAndCall',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iTransparentUpgradeableProxyAbi}__
 */
export const watchITransparentUpgradeableProxyEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iTransparentUpgradeableProxyAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iTransparentUpgradeableProxyAbi}__ and `eventName` set to `"AdminChanged"`
 */
export const watchITransparentUpgradeableProxyAdminChangedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iTransparentUpgradeableProxyAbi,
  eventName: 'AdminChanged',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iTransparentUpgradeableProxyAbi}__ and `eventName` set to `"BeaconUpgraded"`
 */
export const watchITransparentUpgradeableProxyBeaconUpgradedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iTransparentUpgradeableProxyAbi,
  eventName: 'BeaconUpgraded',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link iTransparentUpgradeableProxyAbi}__ and `eventName` set to `"Upgraded"`
 */
export const watchITransparentUpgradeableProxyUpgradedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: iTransparentUpgradeableProxyAbi,
  eventName: 'Upgraded',
})

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
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const readLpManager = /*#__PURE__*/ createReadContract({ abi: lpManagerAbi, address: lpManagerAddress })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"deposits"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const readLpManagerDeposits = /*#__PURE__*/ createReadContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'deposits',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"lpNft"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const readLpManagerLpNft = /*#__PURE__*/ createReadContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'lpNft',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"owner"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const readLpManagerOwner = /*#__PURE__*/ createReadContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"usdc"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const readLpManagerUsdc = /*#__PURE__*/ createReadContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'usdc',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"ustcPlus"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const readLpManagerUstcPlus = /*#__PURE__*/ createReadContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'ustcPlus',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"ustcPlusBuyer"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const readLpManagerUstcPlusBuyer = /*#__PURE__*/ createReadContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'ustcPlusBuyer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpManagerAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const writeLpManager = /*#__PURE__*/ createWriteContract({ abi: lpManagerAbi, address: lpManagerAddress })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"endMinting"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const writeLpManagerEndMinting = /*#__PURE__*/ createWriteContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'endMinting',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const writeLpManagerInitialize = /*#__PURE__*/ createWriteContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'initialize',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const writeLpManagerRenounceOwnership = /*#__PURE__*/ createWriteContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"setLpNft"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const writeLpManagerSetLpNft = /*#__PURE__*/ createWriteContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'setLpNft',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"setUsdc"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const writeLpManagerSetUsdc = /*#__PURE__*/ createWriteContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'setUsdc',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"setUstcBuyer"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const writeLpManagerSetUstcBuyer = /*#__PURE__*/ createWriteContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'setUstcBuyer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"setUstcPlus"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const writeLpManagerSetUstcPlus = /*#__PURE__*/ createWriteContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'setUstcPlus',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"startMinting"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const writeLpManagerStartMinting = /*#__PURE__*/ createWriteContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'startMinting',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const writeLpManagerTransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpManagerAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const simulateLpManager = /*#__PURE__*/ createSimulateContract({ abi: lpManagerAbi, address: lpManagerAddress })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"endMinting"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const simulateLpManagerEndMinting = /*#__PURE__*/ createSimulateContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'endMinting',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const simulateLpManagerInitialize = /*#__PURE__*/ createSimulateContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'initialize',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const simulateLpManagerRenounceOwnership = /*#__PURE__*/ createSimulateContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"setLpNft"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const simulateLpManagerSetLpNft = /*#__PURE__*/ createSimulateContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'setLpNft',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"setUsdc"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const simulateLpManagerSetUsdc = /*#__PURE__*/ createSimulateContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'setUsdc',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"setUstcBuyer"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const simulateLpManagerSetUstcBuyer = /*#__PURE__*/ createSimulateContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'setUstcBuyer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"setUstcPlus"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const simulateLpManagerSetUstcPlus = /*#__PURE__*/ createSimulateContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'setUstcPlus',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"startMinting"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const simulateLpManagerStartMinting = /*#__PURE__*/ createSimulateContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'startMinting',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpManagerAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const simulateLpManagerTransferOwnership = /*#__PURE__*/ createSimulateContract({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lpManagerAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const watchLpManagerEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: lpManagerAbi,
  address: lpManagerAddress,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lpManagerAbi}__ and `eventName` set to `"EndMinting"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const watchLpManagerEndMintingEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  eventName: 'EndMinting',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lpManagerAbi}__ and `eventName` set to `"Initialized"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const watchLpManagerInitializedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  eventName: 'Initialized',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lpManagerAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const watchLpManagerOwnershipTransferredEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  eventName: 'OwnershipTransferred',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lpManagerAbi}__ and `eventName` set to `"StartMinting"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0xC72C2e40574C1279fC3D3aDC54C7e055D9727348)
 */
export const watchLpManagerStartMintingEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: lpManagerAbi,
  address: lpManagerAddress,
  eventName: 'StartMinting',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNft = /*#__PURE__*/ createReadContract({ abi: lpNftAbi, address: lpNftAddress })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"HODLER_ID"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftHodlerId = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'HODLER_ID',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"_rTotal"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftRTotal = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: '_rTotal',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"_tFeeTotal"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftTFeeTotal = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: '_tFeeTotal',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"_tTotal"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftTTotal = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: '_tTotal',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"balanceOf"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftBalanceOf = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"dao"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftDao = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'dao',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"getApproved"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftGetApproved = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'getApproved',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"isApprovedForAll"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftIsApprovedForAll = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'isApprovedForAll',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"lpManager"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftLpManager = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'lpManager',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"name"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftName = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"owner"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftOwner = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"ownerOf"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftOwnerOf = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'ownerOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"paramsOf"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftParamsOf = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'paramsOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"reflectBalanceOf"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftReflectBalanceOf = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'reflectBalanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"reflectionFromToken"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftReflectionFromToken = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'reflectionFromToken',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"slashCurrentAmount"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftSlashCurrentAmount = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'slashCurrentAmount',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"slashEndTime"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftSlashEndTime = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'slashEndTime',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"supportsInterface"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftSupportsInterface = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'supportsInterface',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"symbol"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftSymbol = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"tokenFromReflection"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftTokenFromReflection = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'tokenFromReflection',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"tokenURI"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftTokenUri = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'tokenURI',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"usdc"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftUsdc = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'usdc',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"ustcPlus"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const readLpNftUstcPlus = /*#__PURE__*/ createReadContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'ustcPlus',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpNftAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const writeLpNft = /*#__PURE__*/ createWriteContract({ abi: lpNftAbi, address: lpNftAddress })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const writeLpNftApprove = /*#__PURE__*/ createWriteContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"burn"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const writeLpNftBurn = /*#__PURE__*/ createWriteContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'burn',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"distribute"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const writeLpNftDistribute = /*#__PURE__*/ createWriteContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'distribute',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const writeLpNftInitialize = /*#__PURE__*/ createWriteContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'initialize',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"mint"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const writeLpNftMint = /*#__PURE__*/ createWriteContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"redeem"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const writeLpNftRedeem = /*#__PURE__*/ createWriteContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'redeem',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"reflect"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const writeLpNftReflect = /*#__PURE__*/ createWriteContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'reflect',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const writeLpNftRenounceOwnership = /*#__PURE__*/ createWriteContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"safeTransferFrom"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const writeLpNftSafeTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'safeTransferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"setApprovalForAll"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const writeLpNftSetApprovalForAll = /*#__PURE__*/ createWriteContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'setApprovalForAll',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"setDao"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const writeLpNftSetDao = /*#__PURE__*/ createWriteContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'setDao',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"setLpManager"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const writeLpNftSetLpManager = /*#__PURE__*/ createWriteContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'setLpManager',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"setUsdc"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const writeLpNftSetUsdc = /*#__PURE__*/ createWriteContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'setUsdc',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"setUstcPlus"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const writeLpNftSetUstcPlus = /*#__PURE__*/ createWriteContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'setUstcPlus',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"setupReflect"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const writeLpNftSetupReflect = /*#__PURE__*/ createWriteContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'setupReflect',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const writeLpNftTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const writeLpNftTransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpNftAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const simulateLpNft = /*#__PURE__*/ createSimulateContract({ abi: lpNftAbi, address: lpNftAddress })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const simulateLpNftApprove = /*#__PURE__*/ createSimulateContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"burn"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const simulateLpNftBurn = /*#__PURE__*/ createSimulateContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'burn',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"distribute"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const simulateLpNftDistribute = /*#__PURE__*/ createSimulateContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'distribute',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"initialize"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const simulateLpNftInitialize = /*#__PURE__*/ createSimulateContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'initialize',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"mint"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const simulateLpNftMint = /*#__PURE__*/ createSimulateContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'mint',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"redeem"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const simulateLpNftRedeem = /*#__PURE__*/ createSimulateContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'redeem',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"reflect"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const simulateLpNftReflect = /*#__PURE__*/ createSimulateContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'reflect',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const simulateLpNftRenounceOwnership = /*#__PURE__*/ createSimulateContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"safeTransferFrom"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const simulateLpNftSafeTransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'safeTransferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"setApprovalForAll"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const simulateLpNftSetApprovalForAll = /*#__PURE__*/ createSimulateContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'setApprovalForAll',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"setDao"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const simulateLpNftSetDao = /*#__PURE__*/ createSimulateContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'setDao',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"setLpManager"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const simulateLpNftSetLpManager = /*#__PURE__*/ createSimulateContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'setLpManager',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"setUsdc"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const simulateLpNftSetUsdc = /*#__PURE__*/ createSimulateContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'setUsdc',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"setUstcPlus"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const simulateLpNftSetUstcPlus = /*#__PURE__*/ createSimulateContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'setUstcPlus',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"setupReflect"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const simulateLpNftSetupReflect = /*#__PURE__*/ createSimulateContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'setupReflect',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const simulateLpNftTransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link lpNftAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const simulateLpNftTransferOwnership = /*#__PURE__*/ createSimulateContract({
  abi: lpNftAbi,
  address: lpNftAddress,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lpNftAbi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const watchLpNftEvent = /*#__PURE__*/ createWatchContractEvent({ abi: lpNftAbi, address: lpNftAddress })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lpNftAbi}__ and `eventName` set to `"Approval"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const watchLpNftApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: lpNftAbi,
  address: lpNftAddress,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lpNftAbi}__ and `eventName` set to `"ApprovalForAll"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const watchLpNftApprovalForAllEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: lpNftAbi,
  address: lpNftAddress,
  eventName: 'ApprovalForAll',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lpNftAbi}__ and `eventName` set to `"Initialized"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const watchLpNftInitializedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: lpNftAbi,
  address: lpNftAddress,
  eventName: 'Initialized',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lpNftAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const watchLpNftOwnershipTransferredEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: lpNftAbi,
  address: lpNftAddress,
  eventName: 'OwnershipTransferred',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lpNftAbi}__ and `eventName` set to `"Redeem"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
 */
export const watchLpNftRedeemEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: lpNftAbi,
  address: lpNftAddress,
  eventName: 'Redeem',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link lpNftAbi}__ and `eventName` set to `"Transfer"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x9885055bEb85A0D35B1fFb982Acfeaf61f340877)
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
 * Wraps __{@link readContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const readOwnable = /*#__PURE__*/ createReadContract({ abi: ownableAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"owner"`
 */
export const readOwnableOwner = /*#__PURE__*/ createReadContract({ abi: ownableAbi, functionName: 'owner' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const writeOwnable = /*#__PURE__*/ createWriteContract({ abi: ownableAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeOwnableRenounceOwnership = /*#__PURE__*/ createWriteContract({
  abi: ownableAbi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeOwnableTransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: ownableAbi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ownableAbi}__
 */
export const simulateOwnable = /*#__PURE__*/ createSimulateContract({ abi: ownableAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateOwnableRenounceOwnership = /*#__PURE__*/ createSimulateContract({
  abi: ownableAbi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ownableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateOwnableTransferOwnership = /*#__PURE__*/ createSimulateContract({
  abi: ownableAbi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ownableAbi}__
 */
export const watchOwnableEvent = /*#__PURE__*/ createWatchContractEvent({ abi: ownableAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ownableAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchOwnableOwnershipTransferredEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ownableAbi,
  eventName: 'OwnershipTransferred',
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
 * Wraps __{@link readContract}__ with `abi` set to __{@link proxyAdminAbi}__
 */
export const readProxyAdmin = /*#__PURE__*/ createReadContract({ abi: proxyAdminAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link proxyAdminAbi}__ and `functionName` set to `"UPGRADE_INTERFACE_VERSION"`
 */
export const readProxyAdminUpgradeInterfaceVersion = /*#__PURE__*/ createReadContract({
  abi: proxyAdminAbi,
  functionName: 'UPGRADE_INTERFACE_VERSION',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link proxyAdminAbi}__ and `functionName` set to `"owner"`
 */
export const readProxyAdminOwner = /*#__PURE__*/ createReadContract({ abi: proxyAdminAbi, functionName: 'owner' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link proxyAdminAbi}__
 */
export const writeProxyAdmin = /*#__PURE__*/ createWriteContract({ abi: proxyAdminAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link proxyAdminAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeProxyAdminRenounceOwnership = /*#__PURE__*/ createWriteContract({
  abi: proxyAdminAbi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link proxyAdminAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeProxyAdminTransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: proxyAdminAbi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link proxyAdminAbi}__ and `functionName` set to `"upgradeAndCall"`
 */
export const writeProxyAdminUpgradeAndCall = /*#__PURE__*/ createWriteContract({
  abi: proxyAdminAbi,
  functionName: 'upgradeAndCall',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link proxyAdminAbi}__
 */
export const simulateProxyAdmin = /*#__PURE__*/ createSimulateContract({ abi: proxyAdminAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link proxyAdminAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateProxyAdminRenounceOwnership = /*#__PURE__*/ createSimulateContract({
  abi: proxyAdminAbi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link proxyAdminAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateProxyAdminTransferOwnership = /*#__PURE__*/ createSimulateContract({
  abi: proxyAdminAbi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link proxyAdminAbi}__ and `functionName` set to `"upgradeAndCall"`
 */
export const simulateProxyAdminUpgradeAndCall = /*#__PURE__*/ createSimulateContract({
  abi: proxyAdminAbi,
  functionName: 'upgradeAndCall',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link proxyAdminAbi}__
 */
export const watchProxyAdminEvent = /*#__PURE__*/ createWatchContractEvent({ abi: proxyAdminAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link proxyAdminAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchProxyAdminOwnershipTransferredEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: proxyAdminAbi,
  eventName: 'OwnershipTransferred',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testErc20Abi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const readTestErc20 = /*#__PURE__*/ createReadContract({ abi: testErc20Abi, address: testErc20Address })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testErc20Abi}__ and `functionName` set to `"allowance"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const readTestErc20Allowance = /*#__PURE__*/ createReadContract({
  abi: testErc20Abi,
  address: testErc20Address,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testErc20Abi}__ and `functionName` set to `"balanceOf"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const readTestErc20BalanceOf = /*#__PURE__*/ createReadContract({
  abi: testErc20Abi,
  address: testErc20Address,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testErc20Abi}__ and `functionName` set to `"decimals"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const readTestErc20Decimals = /*#__PURE__*/ createReadContract({
  abi: testErc20Abi,
  address: testErc20Address,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testErc20Abi}__ and `functionName` set to `"name"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const readTestErc20Name = /*#__PURE__*/ createReadContract({
  abi: testErc20Abi,
  address: testErc20Address,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testErc20Abi}__ and `functionName` set to `"symbol"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const readTestErc20Symbol = /*#__PURE__*/ createReadContract({
  abi: testErc20Abi,
  address: testErc20Address,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link testErc20Abi}__ and `functionName` set to `"totalSupply"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const readTestErc20TotalSupply = /*#__PURE__*/ createReadContract({
  abi: testErc20Abi,
  address: testErc20Address,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link testErc20Abi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const writeTestErc20 = /*#__PURE__*/ createWriteContract({ abi: testErc20Abi, address: testErc20Address })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link testErc20Abi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const writeTestErc20Approve = /*#__PURE__*/ createWriteContract({
  abi: testErc20Abi,
  address: testErc20Address,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link testErc20Abi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const writeTestErc20Transfer = /*#__PURE__*/ createWriteContract({
  abi: testErc20Abi,
  address: testErc20Address,
  functionName: 'transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link testErc20Abi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const writeTestErc20TransferFrom = /*#__PURE__*/ createWriteContract({
  abi: testErc20Abi,
  address: testErc20Address,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link testErc20Abi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const simulateTestErc20 = /*#__PURE__*/ createSimulateContract({ abi: testErc20Abi, address: testErc20Address })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link testErc20Abi}__ and `functionName` set to `"approve"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const simulateTestErc20Approve = /*#__PURE__*/ createSimulateContract({
  abi: testErc20Abi,
  address: testErc20Address,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link testErc20Abi}__ and `functionName` set to `"transfer"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const simulateTestErc20Transfer = /*#__PURE__*/ createSimulateContract({
  abi: testErc20Abi,
  address: testErc20Address,
  functionName: 'transfer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link testErc20Abi}__ and `functionName` set to `"transferFrom"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const simulateTestErc20TransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: testErc20Abi,
  address: testErc20Address,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testErc20Abi}__
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const watchTestErc20Event = /*#__PURE__*/ createWatchContractEvent({
  abi: testErc20Abi,
  address: testErc20Address,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testErc20Abi}__ and `eventName` set to `"Approval"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const watchTestErc20ApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: testErc20Abi,
  address: testErc20Address,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link testErc20Abi}__ and `eventName` set to `"Transfer"`
 *
 * [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x32e5c809663f371ec25c7a21953647b448394aa3)
 */
export const watchTestErc20TransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: testErc20Abi,
  address: testErc20Address,
  eventName: 'Transfer',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link transparentUpgradeableProxyAbi}__
 */
export const watchTransparentUpgradeableProxyEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: transparentUpgradeableProxyAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link transparentUpgradeableProxyAbi}__ and `eventName` set to `"AdminChanged"`
 */
export const watchTransparentUpgradeableProxyAdminChangedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: transparentUpgradeableProxyAbi,
  eventName: 'AdminChanged',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link transparentUpgradeableProxyAbi}__ and `eventName` set to `"Upgraded"`
 */
export const watchTransparentUpgradeableProxyUpgradedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: transparentUpgradeableProxyAbi,
  eventName: 'Upgraded',
})
