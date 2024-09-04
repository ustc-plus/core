import {
  createReadContract,
  createWriteContract,
  createSimulateContract,
  createWatchContractEvent,
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
// IOAppCore
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ioAppCoreAbi = [
  { type: 'error', inputs: [], name: 'InvalidDelegate' },
  { type: 'error', inputs: [], name: 'InvalidEndpointCall' },
  { type: 'error', inputs: [{ name: 'eid', internalType: 'uint32', type: 'uint32' }], name: 'NoPeer' },
  {
    type: 'error',
    inputs: [
      { name: 'eid', internalType: 'uint32', type: 'uint32' },
      { name: 'sender', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'OnlyPeer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'eid', internalType: 'uint32', type: 'uint32', indexed: false },
      { name: 'peer', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'PeerSet',
  },
  {
    type: 'function',
    inputs: [],
    name: 'endpoint',
    outputs: [{ name: 'iEndpoint', internalType: 'contract ILayerZeroEndpointV2', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'oAppVersion',
    outputs: [
      { name: 'senderVersion', internalType: 'uint64', type: 'uint64' },
      { name: 'receiverVersion', internalType: 'uint64', type: 'uint64' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_eid', internalType: 'uint32', type: 'uint32' }],
    name: 'peers',
    outputs: [{ name: 'peer', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
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
    inputs: [
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
      { name: '_peer', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'setPeer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IOAppMsgInspector
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ioAppMsgInspectorAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'message', internalType: 'bytes', type: 'bytes' },
      { name: 'options', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'InspectionFailed',
  },
  {
    type: 'function',
    inputs: [
      { name: '_message', internalType: 'bytes', type: 'bytes' },
      { name: '_options', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'inspect',
    outputs: [{ name: 'valid', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IOAppOptionsType3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ioAppOptionsType3Abi = [
  { type: 'error', inputs: [{ name: 'options', internalType: 'bytes', type: 'bytes' }], name: 'InvalidOptions' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_enforcedOptions',
        internalType: 'struct EnforcedOptionParam[]',
        type: 'tuple[]',
        components: [
          { name: 'eid', internalType: 'uint32', type: 'uint32' },
          { name: 'msgType', internalType: 'uint16', type: 'uint16' },
          { name: 'options', internalType: 'bytes', type: 'bytes' },
        ],
        indexed: false,
      },
    ],
    name: 'EnforcedOptionSet',
  },
  {
    type: 'function',
    inputs: [
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
      { name: '_msgType', internalType: 'uint16', type: 'uint16' },
      { name: '_extraOptions', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'combineOptions',
    outputs: [{ name: 'options', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_enforcedOptions',
        internalType: 'struct EnforcedOptionParam[]',
        type: 'tuple[]',
        components: [
          { name: 'eid', internalType: 'uint32', type: 'uint32' },
          { name: 'msgType', internalType: 'uint16', type: 'uint16' },
          { name: 'options', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'setEnforcedOptions',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IOAppPreCrimeSimulator
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ioAppPreCrimeSimulatorAbi = [
  { type: 'error', inputs: [], name: 'OnlySelf' },
  { type: 'error', inputs: [{ name: 'result', internalType: 'bytes', type: 'bytes' }], name: 'SimulationResult' },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'preCrimeAddress', internalType: 'address', type: 'address', indexed: false }],
    name: 'PreCrimeSet',
  },
  {
    type: 'function',
    inputs: [
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
      { name: '_peer', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'isPeer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_packets',
        internalType: 'struct InboundPacket[]',
        type: 'tuple[]',
        components: [
          {
            name: 'origin',
            internalType: 'struct Origin',
            type: 'tuple',
            components: [
              { name: 'srcEid', internalType: 'uint32', type: 'uint32' },
              { name: 'sender', internalType: 'bytes32', type: 'bytes32' },
              { name: 'nonce', internalType: 'uint64', type: 'uint64' },
            ],
          },
          { name: 'dstEid', internalType: 'uint32', type: 'uint32' },
          { name: 'receiver', internalType: 'address', type: 'address' },
          { name: 'guid', internalType: 'bytes32', type: 'bytes32' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'executor', internalType: 'address', type: 'address' },
          { name: 'message', internalType: 'bytes', type: 'bytes' },
          { name: 'extraData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'lzReceiveAndRevert',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'oApp',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'preCrime',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_preCrime', internalType: 'address', type: 'address' }],
    name: 'setPreCrime',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IOAppReceiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ioAppReceiverAbi = [
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
      { name: '_message', internalType: 'bytes', type: 'bytes' },
      { name: '_sender', internalType: 'address', type: 'address' },
    ],
    name: 'isComposeMsgSender',
    outputs: [{ name: 'isSender', internalType: 'bool', type: 'bool' }],
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
// IOFT
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ioftAbi = [
  { type: 'error', inputs: [], name: 'InvalidLocalDecimals' },
  {
    type: 'error',
    inputs: [
      { name: 'amountLD', internalType: 'uint256', type: 'uint256' },
      { name: 'minAmountLD', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SlippageExceeded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'guid', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'srcEid', internalType: 'uint32', type: 'uint32', indexed: false },
      { name: 'toAddress', internalType: 'address', type: 'address', indexed: true },
      { name: 'amountReceivedLD', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'OFTReceived',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'guid', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'dstEid', internalType: 'uint32', type: 'uint32', indexed: false },
      { name: 'fromAddress', internalType: 'address', type: 'address', indexed: true },
      { name: 'amountSentLD', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'amountReceivedLD', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'OFTSent',
  },
  {
    type: 'function',
    inputs: [],
    name: 'approvalRequired',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'oftVersion',
    outputs: [
      { name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' },
      { name: 'version', internalType: 'uint64', type: 'uint64' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_sendParam',
        internalType: 'struct SendParam',
        type: 'tuple',
        components: [
          { name: 'dstEid', internalType: 'uint32', type: 'uint32' },
          { name: 'to', internalType: 'bytes32', type: 'bytes32' },
          { name: 'amountLD', internalType: 'uint256', type: 'uint256' },
          { name: 'minAmountLD', internalType: 'uint256', type: 'uint256' },
          { name: 'extraOptions', internalType: 'bytes', type: 'bytes' },
          { name: 'composeMsg', internalType: 'bytes', type: 'bytes' },
          { name: 'oftCmd', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'quoteOFT',
    outputs: [
      {
        name: '',
        internalType: 'struct OFTLimit',
        type: 'tuple',
        components: [
          { name: 'minAmountLD', internalType: 'uint256', type: 'uint256' },
          { name: 'maxAmountLD', internalType: 'uint256', type: 'uint256' },
        ],
      },
      {
        name: 'oftFeeDetails',
        internalType: 'struct OFTFeeDetail[]',
        type: 'tuple[]',
        components: [
          { name: 'feeAmountLD', internalType: 'int256', type: 'int256' },
          { name: 'description', internalType: 'string', type: 'string' },
        ],
      },
      {
        name: '',
        internalType: 'struct OFTReceipt',
        type: 'tuple',
        components: [
          { name: 'amountSentLD', internalType: 'uint256', type: 'uint256' },
          { name: 'amountReceivedLD', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_sendParam',
        internalType: 'struct SendParam',
        type: 'tuple',
        components: [
          { name: 'dstEid', internalType: 'uint32', type: 'uint32' },
          { name: 'to', internalType: 'bytes32', type: 'bytes32' },
          { name: 'amountLD', internalType: 'uint256', type: 'uint256' },
          { name: 'minAmountLD', internalType: 'uint256', type: 'uint256' },
          { name: 'extraOptions', internalType: 'bytes', type: 'bytes' },
          { name: 'composeMsg', internalType: 'bytes', type: 'bytes' },
          { name: 'oftCmd', internalType: 'bytes', type: 'bytes' },
        ],
      },
      { name: '_payInLzToken', internalType: 'bool', type: 'bool' },
    ],
    name: 'quoteSend',
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
        name: '_sendParam',
        internalType: 'struct SendParam',
        type: 'tuple',
        components: [
          { name: 'dstEid', internalType: 'uint32', type: 'uint32' },
          { name: 'to', internalType: 'bytes32', type: 'bytes32' },
          { name: 'amountLD', internalType: 'uint256', type: 'uint256' },
          { name: 'minAmountLD', internalType: 'uint256', type: 'uint256' },
          { name: 'extraOptions', internalType: 'bytes', type: 'bytes' },
          { name: 'composeMsg', internalType: 'bytes', type: 'bytes' },
          { name: 'oftCmd', internalType: 'bytes', type: 'bytes' },
        ],
      },
      {
        name: '_fee',
        internalType: 'struct MessagingFee',
        type: 'tuple',
        components: [
          { name: 'nativeFee', internalType: 'uint256', type: 'uint256' },
          { name: 'lzTokenFee', internalType: 'uint256', type: 'uint256' },
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
      {
        name: '',
        internalType: 'struct OFTReceipt',
        type: 'tuple',
        components: [
          { name: 'amountSentLD', internalType: 'uint256', type: 'uint256' },
          { name: 'amountReceivedLD', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'sharedDecimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'token',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IPreCrime
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iPreCrimeAbi = [
  { type: 'error', inputs: [{ name: 'crime', internalType: 'bytes', type: 'bytes' }], name: 'CrimeFound' },
  {
    type: 'error',
    inputs: [
      { name: 'eid', internalType: 'uint32', type: 'uint32' },
      { name: 'reason', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'InvalidSimulationResult',
  },
  { type: 'error', inputs: [], name: 'OnlyOffChain' },
  {
    type: 'error',
    inputs: [
      { name: 'max', internalType: 'uint256', type: 'uint256' },
      { name: 'actual', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PacketOversize',
  },
  { type: 'error', inputs: [], name: 'PacketUnsorted' },
  { type: 'error', inputs: [{ name: 'reason', internalType: 'bytes', type: 'bytes' }], name: 'SimulationFailed' },
  {
    type: 'error',
    inputs: [{ name: 'eid', internalType: 'uint32', type: 'uint32' }],
    name: 'SimulationResultNotFound',
  },
  {
    type: 'function',
    inputs: [],
    name: 'buildSimulationResult',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_packets', internalType: 'bytes[]', type: 'bytes[]' },
      { name: '_packetMsgValues', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'getConfig',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_packets', internalType: 'bytes[]', type: 'bytes[]' },
      { name: '_packetMsgValues', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '_simulations', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'preCrime',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_packets', internalType: 'bytes[]', type: 'bytes[]' },
      { name: '_packetMsgValues', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'simulate',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'version',
    outputs: [
      { name: 'major', internalType: 'uint64', type: 'uint64' },
      { name: 'minor', internalType: 'uint8', type: 'uint8' },
    ],
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
// OApp
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const oAppAbi = [
  { type: 'error', inputs: [], name: 'InvalidDelegate' },
  { type: 'error', inputs: [], name: 'InvalidEndpointCall' },
  { type: 'error', inputs: [], name: 'LzTokenUnavailable' },
  { type: 'error', inputs: [{ name: 'eid', internalType: 'uint32', type: 'uint32' }], name: 'NoPeer' },
  { type: 'error', inputs: [{ name: 'msgValue', internalType: 'uint256', type: 'uint256' }], name: 'NotEnoughNative' },
  { type: 'error', inputs: [{ name: 'addr', internalType: 'address', type: 'address' }], name: 'OnlyEndpoint' },
  {
    type: 'error',
    inputs: [
      { name: 'eid', internalType: 'uint32', type: 'uint32' },
      { name: 'sender', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'OnlyPeer',
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
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'eid', internalType: 'uint32', type: 'uint32', indexed: false },
      { name: 'peer', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'PeerSet',
  },
  {
    type: 'function',
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
      },
    ],
    name: 'allowInitializePath',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'endpoint',
    outputs: [{ name: '', internalType: 'contract ILayerZeroEndpointV2', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '',
        internalType: 'struct Origin',
        type: 'tuple',
        components: [
          { name: 'srcEid', internalType: 'uint32', type: 'uint32' },
          { name: 'sender', internalType: 'bytes32', type: 'bytes32' },
          { name: 'nonce', internalType: 'uint64', type: 'uint64' },
        ],
      },
      { name: '', internalType: 'bytes', type: 'bytes' },
      { name: '_sender', internalType: 'address', type: 'address' },
    ],
    name: 'isComposeMsgSender',
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
      { name: '', internalType: 'uint32', type: 'uint32' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'nextNonce',
    outputs: [{ name: 'nonce', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'oAppVersion',
    outputs: [
      { name: 'senderVersion', internalType: 'uint64', type: 'uint64' },
      { name: 'receiverVersion', internalType: 'uint64', type: 'uint64' },
    ],
    stateMutability: 'pure',
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
    inputs: [{ name: 'eid', internalType: 'uint32', type: 'uint32' }],
    name: 'peers',
    outputs: [{ name: 'peer', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  { type: 'function', inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [{ name: '_delegate', internalType: 'address', type: 'address' }],
    name: 'setDelegate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
      { name: '_peer', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'setPeer',
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
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OAppCore
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const oAppCoreAbi = [
  { type: 'error', inputs: [], name: 'InvalidDelegate' },
  { type: 'error', inputs: [], name: 'InvalidEndpointCall' },
  { type: 'error', inputs: [{ name: 'eid', internalType: 'uint32', type: 'uint32' }], name: 'NoPeer' },
  {
    type: 'error',
    inputs: [
      { name: 'eid', internalType: 'uint32', type: 'uint32' },
      { name: 'sender', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'OnlyPeer',
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
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'eid', internalType: 'uint32', type: 'uint32', indexed: false },
      { name: 'peer', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'PeerSet',
  },
  {
    type: 'function',
    inputs: [],
    name: 'endpoint',
    outputs: [{ name: '', internalType: 'contract ILayerZeroEndpointV2', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'oAppVersion',
    outputs: [
      { name: 'senderVersion', internalType: 'uint64', type: 'uint64' },
      { name: 'receiverVersion', internalType: 'uint64', type: 'uint64' },
    ],
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
    inputs: [{ name: 'eid', internalType: 'uint32', type: 'uint32' }],
    name: 'peers',
    outputs: [{ name: 'peer', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  { type: 'function', inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [{ name: '_delegate', internalType: 'address', type: 'address' }],
    name: 'setDelegate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
      { name: '_peer', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'setPeer',
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
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OAppOptionsType3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const oAppOptionsType3Abi = [
  { type: 'error', inputs: [{ name: 'options', internalType: 'bytes', type: 'bytes' }], name: 'InvalidOptions' },
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
      {
        name: '_enforcedOptions',
        internalType: 'struct EnforcedOptionParam[]',
        type: 'tuple[]',
        components: [
          { name: 'eid', internalType: 'uint32', type: 'uint32' },
          { name: 'msgType', internalType: 'uint16', type: 'uint16' },
          { name: 'options', internalType: 'bytes', type: 'bytes' },
        ],
        indexed: false,
      },
    ],
    name: 'EnforcedOptionSet',
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
    inputs: [
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
      { name: '_msgType', internalType: 'uint16', type: 'uint16' },
      { name: '_extraOptions', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'combineOptions',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'eid', internalType: 'uint32', type: 'uint32' },
      { name: 'msgType', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'enforcedOptions',
    outputs: [{ name: 'enforcedOption', internalType: 'bytes', type: 'bytes' }],
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
    inputs: [
      {
        name: '_enforcedOptions',
        internalType: 'struct EnforcedOptionParam[]',
        type: 'tuple[]',
        components: [
          { name: 'eid', internalType: 'uint32', type: 'uint32' },
          { name: 'msgType', internalType: 'uint16', type: 'uint16' },
          { name: 'options', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'setEnforcedOptions',
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
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OAppPreCrimeSimulator
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const oAppPreCrimeSimulatorAbi = [
  { type: 'error', inputs: [], name: 'OnlySelf' },
  { type: 'error', inputs: [{ name: 'owner', internalType: 'address', type: 'address' }], name: 'OwnableInvalidOwner' },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  { type: 'error', inputs: [{ name: 'result', internalType: 'bytes', type: 'bytes' }], name: 'SimulationResult' },
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
    inputs: [{ name: 'preCrimeAddress', internalType: 'address', type: 'address', indexed: false }],
    name: 'PreCrimeSet',
  },
  {
    type: 'function',
    inputs: [
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
      { name: '_peer', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'isPeer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_packets',
        internalType: 'struct InboundPacket[]',
        type: 'tuple[]',
        components: [
          {
            name: 'origin',
            internalType: 'struct Origin',
            type: 'tuple',
            components: [
              { name: 'srcEid', internalType: 'uint32', type: 'uint32' },
              { name: 'sender', internalType: 'bytes32', type: 'bytes32' },
              { name: 'nonce', internalType: 'uint64', type: 'uint64' },
            ],
          },
          { name: 'dstEid', internalType: 'uint32', type: 'uint32' },
          { name: 'receiver', internalType: 'address', type: 'address' },
          { name: 'guid', internalType: 'bytes32', type: 'bytes32' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'executor', internalType: 'address', type: 'address' },
          { name: 'message', internalType: 'bytes', type: 'bytes' },
          { name: 'extraData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'lzReceiveAndRevert',
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
      { name: '_guid', internalType: 'bytes32', type: 'bytes32' },
      { name: '_message', internalType: 'bytes', type: 'bytes' },
      { name: '_executor', internalType: 'address', type: 'address' },
      { name: '_extraData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'lzReceiveSimulate',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'oApp',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
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
    inputs: [],
    name: 'preCrime',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  { type: 'function', inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [{ name: '_preCrime', internalType: 'address', type: 'address' }],
    name: 'setPreCrime',
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
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OAppReceiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const oAppReceiverAbi = [
  { type: 'error', inputs: [], name: 'InvalidDelegate' },
  { type: 'error', inputs: [], name: 'InvalidEndpointCall' },
  { type: 'error', inputs: [{ name: 'eid', internalType: 'uint32', type: 'uint32' }], name: 'NoPeer' },
  { type: 'error', inputs: [{ name: 'addr', internalType: 'address', type: 'address' }], name: 'OnlyEndpoint' },
  {
    type: 'error',
    inputs: [
      { name: 'eid', internalType: 'uint32', type: 'uint32' },
      { name: 'sender', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'OnlyPeer',
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
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'eid', internalType: 'uint32', type: 'uint32', indexed: false },
      { name: 'peer', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'PeerSet',
  },
  {
    type: 'function',
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
      },
    ],
    name: 'allowInitializePath',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'endpoint',
    outputs: [{ name: '', internalType: 'contract ILayerZeroEndpointV2', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '',
        internalType: 'struct Origin',
        type: 'tuple',
        components: [
          { name: 'srcEid', internalType: 'uint32', type: 'uint32' },
          { name: 'sender', internalType: 'bytes32', type: 'bytes32' },
          { name: 'nonce', internalType: 'uint64', type: 'uint64' },
        ],
      },
      { name: '', internalType: 'bytes', type: 'bytes' },
      { name: '_sender', internalType: 'address', type: 'address' },
    ],
    name: 'isComposeMsgSender',
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
      { name: '', internalType: 'uint32', type: 'uint32' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'nextNonce',
    outputs: [{ name: 'nonce', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'oAppVersion',
    outputs: [
      { name: 'senderVersion', internalType: 'uint64', type: 'uint64' },
      { name: 'receiverVersion', internalType: 'uint64', type: 'uint64' },
    ],
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
    inputs: [{ name: 'eid', internalType: 'uint32', type: 'uint32' }],
    name: 'peers',
    outputs: [{ name: 'peer', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  { type: 'function', inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [{ name: '_delegate', internalType: 'address', type: 'address' }],
    name: 'setDelegate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
      { name: '_peer', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'setPeer',
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
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OAppSender
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const oAppSenderAbi = [
  { type: 'error', inputs: [], name: 'InvalidDelegate' },
  { type: 'error', inputs: [], name: 'InvalidEndpointCall' },
  { type: 'error', inputs: [], name: 'LzTokenUnavailable' },
  { type: 'error', inputs: [{ name: 'eid', internalType: 'uint32', type: 'uint32' }], name: 'NoPeer' },
  { type: 'error', inputs: [{ name: 'msgValue', internalType: 'uint256', type: 'uint256' }], name: 'NotEnoughNative' },
  {
    type: 'error',
    inputs: [
      { name: 'eid', internalType: 'uint32', type: 'uint32' },
      { name: 'sender', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'OnlyPeer',
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
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'eid', internalType: 'uint32', type: 'uint32', indexed: false },
      { name: 'peer', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'PeerSet',
  },
  {
    type: 'function',
    inputs: [],
    name: 'endpoint',
    outputs: [{ name: '', internalType: 'contract ILayerZeroEndpointV2', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'oAppVersion',
    outputs: [
      { name: 'senderVersion', internalType: 'uint64', type: 'uint64' },
      { name: 'receiverVersion', internalType: 'uint64', type: 'uint64' },
    ],
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
    inputs: [{ name: 'eid', internalType: 'uint32', type: 'uint32' }],
    name: 'peers',
    outputs: [{ name: 'peer', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  { type: 'function', inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [{ name: '_delegate', internalType: 'address', type: 'address' }],
    name: 'setDelegate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
      { name: '_peer', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'setPeer',
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
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OFT
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const oftAbi = [
  { type: 'error', inputs: [{ name: 'target', internalType: 'address', type: 'address' }], name: 'AddressEmptyCode' },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AddressInsufficientBalance',
  },
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
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  { type: 'error', inputs: [], name: 'InvalidDelegate' },
  { type: 'error', inputs: [], name: 'InvalidEndpointCall' },
  { type: 'error', inputs: [], name: 'InvalidLocalDecimals' },
  { type: 'error', inputs: [{ name: 'options', internalType: 'bytes', type: 'bytes' }], name: 'InvalidOptions' },
  { type: 'error', inputs: [], name: 'LzTokenUnavailable' },
  { type: 'error', inputs: [{ name: 'eid', internalType: 'uint32', type: 'uint32' }], name: 'NoPeer' },
  { type: 'error', inputs: [{ name: 'msgValue', internalType: 'uint256', type: 'uint256' }], name: 'NotEnoughNative' },
  { type: 'error', inputs: [{ name: 'addr', internalType: 'address', type: 'address' }], name: 'OnlyEndpoint' },
  {
    type: 'error',
    inputs: [
      { name: 'eid', internalType: 'uint32', type: 'uint32' },
      { name: 'sender', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'OnlyPeer',
  },
  { type: 'error', inputs: [], name: 'OnlySelf' },
  { type: 'error', inputs: [{ name: 'owner', internalType: 'address', type: 'address' }], name: 'OwnableInvalidOwner' },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
  { type: 'error', inputs: [{ name: 'result', internalType: 'bytes', type: 'bytes' }], name: 'SimulationResult' },
  {
    type: 'error',
    inputs: [
      { name: 'amountLD', internalType: 'uint256', type: 'uint256' },
      { name: 'minAmountLD', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SlippageExceeded',
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
      {
        name: '_enforcedOptions',
        internalType: 'struct EnforcedOptionParam[]',
        type: 'tuple[]',
        components: [
          { name: 'eid', internalType: 'uint32', type: 'uint32' },
          { name: 'msgType', internalType: 'uint16', type: 'uint16' },
          { name: 'options', internalType: 'bytes', type: 'bytes' },
        ],
        indexed: false,
      },
    ],
    name: 'EnforcedOptionSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'inspector', internalType: 'address', type: 'address', indexed: false }],
    name: 'MsgInspectorSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'guid', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'srcEid', internalType: 'uint32', type: 'uint32', indexed: false },
      { name: 'toAddress', internalType: 'address', type: 'address', indexed: true },
      { name: 'amountReceivedLD', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'OFTReceived',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'guid', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'dstEid', internalType: 'uint32', type: 'uint32', indexed: false },
      { name: 'fromAddress', internalType: 'address', type: 'address', indexed: true },
      { name: 'amountSentLD', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'amountReceivedLD', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'OFTSent',
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
      { name: 'eid', internalType: 'uint32', type: 'uint32', indexed: false },
      { name: 'peer', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'PeerSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'preCrimeAddress', internalType: 'address', type: 'address', indexed: false }],
    name: 'PreCrimeSet',
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
    inputs: [],
    name: 'SEND',
    outputs: [{ name: '', internalType: 'uint16', type: 'uint16' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'SEND_AND_CALL',
    outputs: [{ name: '', internalType: 'uint16', type: 'uint16' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
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
      },
    ],
    name: 'allowInitializePath',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
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
    inputs: [],
    name: 'approvalRequired',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
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
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
      { name: '_msgType', internalType: 'uint16', type: 'uint16' },
      { name: '_extraOptions', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'combineOptions',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimalConversionRate',
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
    name: 'endpoint',
    outputs: [{ name: '', internalType: 'contract ILayerZeroEndpointV2', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'eid', internalType: 'uint32', type: 'uint32' },
      { name: 'msgType', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'enforcedOptions',
    outputs: [{ name: 'enforcedOption', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '',
        internalType: 'struct Origin',
        type: 'tuple',
        components: [
          { name: 'srcEid', internalType: 'uint32', type: 'uint32' },
          { name: 'sender', internalType: 'bytes32', type: 'bytes32' },
          { name: 'nonce', internalType: 'uint64', type: 'uint64' },
        ],
      },
      { name: '', internalType: 'bytes', type: 'bytes' },
      { name: '_sender', internalType: 'address', type: 'address' },
    ],
    name: 'isComposeMsgSender',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
      { name: '_peer', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'isPeer',
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
      {
        name: '_packets',
        internalType: 'struct InboundPacket[]',
        type: 'tuple[]',
        components: [
          {
            name: 'origin',
            internalType: 'struct Origin',
            type: 'tuple',
            components: [
              { name: 'srcEid', internalType: 'uint32', type: 'uint32' },
              { name: 'sender', internalType: 'bytes32', type: 'bytes32' },
              { name: 'nonce', internalType: 'uint64', type: 'uint64' },
            ],
          },
          { name: 'dstEid', internalType: 'uint32', type: 'uint32' },
          { name: 'receiver', internalType: 'address', type: 'address' },
          { name: 'guid', internalType: 'bytes32', type: 'bytes32' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'executor', internalType: 'address', type: 'address' },
          { name: 'message', internalType: 'bytes', type: 'bytes' },
          { name: 'extraData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'lzReceiveAndRevert',
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
      { name: '_guid', internalType: 'bytes32', type: 'bytes32' },
      { name: '_message', internalType: 'bytes', type: 'bytes' },
      { name: '_executor', internalType: 'address', type: 'address' },
      { name: '_extraData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'lzReceiveSimulate',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'msgInspector',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
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
    inputs: [
      { name: '', internalType: 'uint32', type: 'uint32' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'nextNonce',
    outputs: [{ name: 'nonce', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'oApp',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'oAppVersion',
    outputs: [
      { name: 'senderVersion', internalType: 'uint64', type: 'uint64' },
      { name: 'receiverVersion', internalType: 'uint64', type: 'uint64' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'oftVersion',
    outputs: [
      { name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' },
      { name: 'version', internalType: 'uint64', type: 'uint64' },
    ],
    stateMutability: 'pure',
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
    inputs: [{ name: 'eid', internalType: 'uint32', type: 'uint32' }],
    name: 'peers',
    outputs: [{ name: 'peer', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'preCrime',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_sendParam',
        internalType: 'struct SendParam',
        type: 'tuple',
        components: [
          { name: 'dstEid', internalType: 'uint32', type: 'uint32' },
          { name: 'to', internalType: 'bytes32', type: 'bytes32' },
          { name: 'amountLD', internalType: 'uint256', type: 'uint256' },
          { name: 'minAmountLD', internalType: 'uint256', type: 'uint256' },
          { name: 'extraOptions', internalType: 'bytes', type: 'bytes' },
          { name: 'composeMsg', internalType: 'bytes', type: 'bytes' },
          { name: 'oftCmd', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'quoteOFT',
    outputs: [
      {
        name: 'oftLimit',
        internalType: 'struct OFTLimit',
        type: 'tuple',
        components: [
          { name: 'minAmountLD', internalType: 'uint256', type: 'uint256' },
          { name: 'maxAmountLD', internalType: 'uint256', type: 'uint256' },
        ],
      },
      {
        name: 'oftFeeDetails',
        internalType: 'struct OFTFeeDetail[]',
        type: 'tuple[]',
        components: [
          { name: 'feeAmountLD', internalType: 'int256', type: 'int256' },
          { name: 'description', internalType: 'string', type: 'string' },
        ],
      },
      {
        name: 'oftReceipt',
        internalType: 'struct OFTReceipt',
        type: 'tuple',
        components: [
          { name: 'amountSentLD', internalType: 'uint256', type: 'uint256' },
          { name: 'amountReceivedLD', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_sendParam',
        internalType: 'struct SendParam',
        type: 'tuple',
        components: [
          { name: 'dstEid', internalType: 'uint32', type: 'uint32' },
          { name: 'to', internalType: 'bytes32', type: 'bytes32' },
          { name: 'amountLD', internalType: 'uint256', type: 'uint256' },
          { name: 'minAmountLD', internalType: 'uint256', type: 'uint256' },
          { name: 'extraOptions', internalType: 'bytes', type: 'bytes' },
          { name: 'composeMsg', internalType: 'bytes', type: 'bytes' },
          { name: 'oftCmd', internalType: 'bytes', type: 'bytes' },
        ],
      },
      { name: '_payInLzToken', internalType: 'bool', type: 'bool' },
    ],
    name: 'quoteSend',
    outputs: [
      {
        name: 'msgFee',
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
  { type: 'function', inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [
      {
        name: '_sendParam',
        internalType: 'struct SendParam',
        type: 'tuple',
        components: [
          { name: 'dstEid', internalType: 'uint32', type: 'uint32' },
          { name: 'to', internalType: 'bytes32', type: 'bytes32' },
          { name: 'amountLD', internalType: 'uint256', type: 'uint256' },
          { name: 'minAmountLD', internalType: 'uint256', type: 'uint256' },
          { name: 'extraOptions', internalType: 'bytes', type: 'bytes' },
          { name: 'composeMsg', internalType: 'bytes', type: 'bytes' },
          { name: 'oftCmd', internalType: 'bytes', type: 'bytes' },
        ],
      },
      {
        name: '_fee',
        internalType: 'struct MessagingFee',
        type: 'tuple',
        components: [
          { name: 'nativeFee', internalType: 'uint256', type: 'uint256' },
          { name: 'lzTokenFee', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: '_refundAddress', internalType: 'address', type: 'address' },
    ],
    name: 'send',
    outputs: [
      {
        name: 'msgReceipt',
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
      {
        name: 'oftReceipt',
        internalType: 'struct OFTReceipt',
        type: 'tuple',
        components: [
          { name: 'amountSentLD', internalType: 'uint256', type: 'uint256' },
          { name: 'amountReceivedLD', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'payable',
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
    inputs: [
      {
        name: '_enforcedOptions',
        internalType: 'struct EnforcedOptionParam[]',
        type: 'tuple[]',
        components: [
          { name: 'eid', internalType: 'uint32', type: 'uint32' },
          { name: 'msgType', internalType: 'uint16', type: 'uint16' },
          { name: 'options', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'setEnforcedOptions',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_msgInspector', internalType: 'address', type: 'address' }],
    name: 'setMsgInspector',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
      { name: '_peer', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'setPeer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_preCrime', internalType: 'address', type: 'address' }],
    name: 'setPreCrime',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'sharedDecimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
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
    name: 'token',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
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
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OFTCore
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const oftCoreAbi = [
  { type: 'error', inputs: [{ name: 'target', internalType: 'address', type: 'address' }], name: 'AddressEmptyCode' },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AddressInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  { type: 'error', inputs: [], name: 'InvalidDelegate' },
  { type: 'error', inputs: [], name: 'InvalidEndpointCall' },
  { type: 'error', inputs: [], name: 'InvalidLocalDecimals' },
  { type: 'error', inputs: [{ name: 'options', internalType: 'bytes', type: 'bytes' }], name: 'InvalidOptions' },
  { type: 'error', inputs: [], name: 'LzTokenUnavailable' },
  { type: 'error', inputs: [{ name: 'eid', internalType: 'uint32', type: 'uint32' }], name: 'NoPeer' },
  { type: 'error', inputs: [{ name: 'msgValue', internalType: 'uint256', type: 'uint256' }], name: 'NotEnoughNative' },
  { type: 'error', inputs: [{ name: 'addr', internalType: 'address', type: 'address' }], name: 'OnlyEndpoint' },
  {
    type: 'error',
    inputs: [
      { name: 'eid', internalType: 'uint32', type: 'uint32' },
      { name: 'sender', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'OnlyPeer',
  },
  { type: 'error', inputs: [], name: 'OnlySelf' },
  { type: 'error', inputs: [{ name: 'owner', internalType: 'address', type: 'address' }], name: 'OwnableInvalidOwner' },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
  { type: 'error', inputs: [{ name: 'result', internalType: 'bytes', type: 'bytes' }], name: 'SimulationResult' },
  {
    type: 'error',
    inputs: [
      { name: 'amountLD', internalType: 'uint256', type: 'uint256' },
      { name: 'minAmountLD', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SlippageExceeded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_enforcedOptions',
        internalType: 'struct EnforcedOptionParam[]',
        type: 'tuple[]',
        components: [
          { name: 'eid', internalType: 'uint32', type: 'uint32' },
          { name: 'msgType', internalType: 'uint16', type: 'uint16' },
          { name: 'options', internalType: 'bytes', type: 'bytes' },
        ],
        indexed: false,
      },
    ],
    name: 'EnforcedOptionSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'inspector', internalType: 'address', type: 'address', indexed: false }],
    name: 'MsgInspectorSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'guid', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'srcEid', internalType: 'uint32', type: 'uint32', indexed: false },
      { name: 'toAddress', internalType: 'address', type: 'address', indexed: true },
      { name: 'amountReceivedLD', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'OFTReceived',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'guid', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'dstEid', internalType: 'uint32', type: 'uint32', indexed: false },
      { name: 'fromAddress', internalType: 'address', type: 'address', indexed: true },
      { name: 'amountSentLD', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'amountReceivedLD', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'OFTSent',
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
      { name: 'eid', internalType: 'uint32', type: 'uint32', indexed: false },
      { name: 'peer', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'PeerSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'preCrimeAddress', internalType: 'address', type: 'address', indexed: false }],
    name: 'PreCrimeSet',
  },
  {
    type: 'function',
    inputs: [],
    name: 'SEND',
    outputs: [{ name: '', internalType: 'uint16', type: 'uint16' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'SEND_AND_CALL',
    outputs: [{ name: '', internalType: 'uint16', type: 'uint16' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
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
      },
    ],
    name: 'allowInitializePath',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'approvalRequired',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
      { name: '_msgType', internalType: 'uint16', type: 'uint16' },
      { name: '_extraOptions', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'combineOptions',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimalConversionRate',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'endpoint',
    outputs: [{ name: '', internalType: 'contract ILayerZeroEndpointV2', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'eid', internalType: 'uint32', type: 'uint32' },
      { name: 'msgType', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'enforcedOptions',
    outputs: [{ name: 'enforcedOption', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '',
        internalType: 'struct Origin',
        type: 'tuple',
        components: [
          { name: 'srcEid', internalType: 'uint32', type: 'uint32' },
          { name: 'sender', internalType: 'bytes32', type: 'bytes32' },
          { name: 'nonce', internalType: 'uint64', type: 'uint64' },
        ],
      },
      { name: '', internalType: 'bytes', type: 'bytes' },
      { name: '_sender', internalType: 'address', type: 'address' },
    ],
    name: 'isComposeMsgSender',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
      { name: '_peer', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'isPeer',
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
      {
        name: '_packets',
        internalType: 'struct InboundPacket[]',
        type: 'tuple[]',
        components: [
          {
            name: 'origin',
            internalType: 'struct Origin',
            type: 'tuple',
            components: [
              { name: 'srcEid', internalType: 'uint32', type: 'uint32' },
              { name: 'sender', internalType: 'bytes32', type: 'bytes32' },
              { name: 'nonce', internalType: 'uint64', type: 'uint64' },
            ],
          },
          { name: 'dstEid', internalType: 'uint32', type: 'uint32' },
          { name: 'receiver', internalType: 'address', type: 'address' },
          { name: 'guid', internalType: 'bytes32', type: 'bytes32' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'executor', internalType: 'address', type: 'address' },
          { name: 'message', internalType: 'bytes', type: 'bytes' },
          { name: 'extraData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'lzReceiveAndRevert',
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
      { name: '_guid', internalType: 'bytes32', type: 'bytes32' },
      { name: '_message', internalType: 'bytes', type: 'bytes' },
      { name: '_executor', internalType: 'address', type: 'address' },
      { name: '_extraData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'lzReceiveSimulate',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'msgInspector',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'uint32', type: 'uint32' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'nextNonce',
    outputs: [{ name: 'nonce', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'oApp',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'oAppVersion',
    outputs: [
      { name: 'senderVersion', internalType: 'uint64', type: 'uint64' },
      { name: 'receiverVersion', internalType: 'uint64', type: 'uint64' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'oftVersion',
    outputs: [
      { name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' },
      { name: 'version', internalType: 'uint64', type: 'uint64' },
    ],
    stateMutability: 'pure',
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
    inputs: [{ name: 'eid', internalType: 'uint32', type: 'uint32' }],
    name: 'peers',
    outputs: [{ name: 'peer', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'preCrime',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_sendParam',
        internalType: 'struct SendParam',
        type: 'tuple',
        components: [
          { name: 'dstEid', internalType: 'uint32', type: 'uint32' },
          { name: 'to', internalType: 'bytes32', type: 'bytes32' },
          { name: 'amountLD', internalType: 'uint256', type: 'uint256' },
          { name: 'minAmountLD', internalType: 'uint256', type: 'uint256' },
          { name: 'extraOptions', internalType: 'bytes', type: 'bytes' },
          { name: 'composeMsg', internalType: 'bytes', type: 'bytes' },
          { name: 'oftCmd', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'quoteOFT',
    outputs: [
      {
        name: 'oftLimit',
        internalType: 'struct OFTLimit',
        type: 'tuple',
        components: [
          { name: 'minAmountLD', internalType: 'uint256', type: 'uint256' },
          { name: 'maxAmountLD', internalType: 'uint256', type: 'uint256' },
        ],
      },
      {
        name: 'oftFeeDetails',
        internalType: 'struct OFTFeeDetail[]',
        type: 'tuple[]',
        components: [
          { name: 'feeAmountLD', internalType: 'int256', type: 'int256' },
          { name: 'description', internalType: 'string', type: 'string' },
        ],
      },
      {
        name: 'oftReceipt',
        internalType: 'struct OFTReceipt',
        type: 'tuple',
        components: [
          { name: 'amountSentLD', internalType: 'uint256', type: 'uint256' },
          { name: 'amountReceivedLD', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_sendParam',
        internalType: 'struct SendParam',
        type: 'tuple',
        components: [
          { name: 'dstEid', internalType: 'uint32', type: 'uint32' },
          { name: 'to', internalType: 'bytes32', type: 'bytes32' },
          { name: 'amountLD', internalType: 'uint256', type: 'uint256' },
          { name: 'minAmountLD', internalType: 'uint256', type: 'uint256' },
          { name: 'extraOptions', internalType: 'bytes', type: 'bytes' },
          { name: 'composeMsg', internalType: 'bytes', type: 'bytes' },
          { name: 'oftCmd', internalType: 'bytes', type: 'bytes' },
        ],
      },
      { name: '_payInLzToken', internalType: 'bool', type: 'bool' },
    ],
    name: 'quoteSend',
    outputs: [
      {
        name: 'msgFee',
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
  { type: 'function', inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [
      {
        name: '_sendParam',
        internalType: 'struct SendParam',
        type: 'tuple',
        components: [
          { name: 'dstEid', internalType: 'uint32', type: 'uint32' },
          { name: 'to', internalType: 'bytes32', type: 'bytes32' },
          { name: 'amountLD', internalType: 'uint256', type: 'uint256' },
          { name: 'minAmountLD', internalType: 'uint256', type: 'uint256' },
          { name: 'extraOptions', internalType: 'bytes', type: 'bytes' },
          { name: 'composeMsg', internalType: 'bytes', type: 'bytes' },
          { name: 'oftCmd', internalType: 'bytes', type: 'bytes' },
        ],
      },
      {
        name: '_fee',
        internalType: 'struct MessagingFee',
        type: 'tuple',
        components: [
          { name: 'nativeFee', internalType: 'uint256', type: 'uint256' },
          { name: 'lzTokenFee', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: '_refundAddress', internalType: 'address', type: 'address' },
    ],
    name: 'send',
    outputs: [
      {
        name: 'msgReceipt',
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
      {
        name: 'oftReceipt',
        internalType: 'struct OFTReceipt',
        type: 'tuple',
        components: [
          { name: 'amountSentLD', internalType: 'uint256', type: 'uint256' },
          { name: 'amountReceivedLD', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'payable',
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
    inputs: [
      {
        name: '_enforcedOptions',
        internalType: 'struct EnforcedOptionParam[]',
        type: 'tuple[]',
        components: [
          { name: 'eid', internalType: 'uint32', type: 'uint32' },
          { name: 'msgType', internalType: 'uint16', type: 'uint16' },
          { name: 'options', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'setEnforcedOptions',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_msgInspector', internalType: 'address', type: 'address' }],
    name: 'setMsgInspector',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
      { name: '_peer', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'setPeer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_preCrime', internalType: 'address', type: 'address' }],
    name: 'setPreCrime',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'sharedDecimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'token',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

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
// UstcPlus
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const ustcPlusAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'lpNft_', internalType: 'address', type: 'address' },
      { name: '_lpManager', internalType: 'address', type: 'address' },
      { name: '_lzEndpoint', internalType: 'address', type: 'address' },
      { name: '_delegate', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [{ name: 'target', internalType: 'address', type: 'address' }], name: 'AddressEmptyCode' },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AddressInsufficientBalance',
  },
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
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  { type: 'error', inputs: [], name: 'InvalidDelegate' },
  { type: 'error', inputs: [], name: 'InvalidEndpointCall' },
  { type: 'error', inputs: [], name: 'InvalidLocalDecimals' },
  { type: 'error', inputs: [{ name: 'options', internalType: 'bytes', type: 'bytes' }], name: 'InvalidOptions' },
  { type: 'error', inputs: [], name: 'LzTokenUnavailable' },
  { type: 'error', inputs: [{ name: 'eid', internalType: 'uint32', type: 'uint32' }], name: 'NoPeer' },
  { type: 'error', inputs: [{ name: 'msgValue', internalType: 'uint256', type: 'uint256' }], name: 'NotEnoughNative' },
  { type: 'error', inputs: [{ name: 'addr', internalType: 'address', type: 'address' }], name: 'OnlyEndpoint' },
  {
    type: 'error',
    inputs: [
      { name: 'eid', internalType: 'uint32', type: 'uint32' },
      { name: 'sender', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'OnlyPeer',
  },
  { type: 'error', inputs: [], name: 'OnlySelf' },
  { type: 'error', inputs: [{ name: 'owner', internalType: 'address', type: 'address' }], name: 'OwnableInvalidOwner' },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
  { type: 'error', inputs: [{ name: 'result', internalType: 'bytes', type: 'bytes' }], name: 'SimulationResult' },
  {
    type: 'error',
    inputs: [
      { name: 'amountLD', internalType: 'uint256', type: 'uint256' },
      { name: 'minAmountLD', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SlippageExceeded',
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
      {
        name: '_enforcedOptions',
        internalType: 'struct EnforcedOptionParam[]',
        type: 'tuple[]',
        components: [
          { name: 'eid', internalType: 'uint32', type: 'uint32' },
          { name: 'msgType', internalType: 'uint16', type: 'uint16' },
          { name: 'options', internalType: 'bytes', type: 'bytes' },
        ],
        indexed: false,
      },
    ],
    name: 'EnforcedOptionSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'inspector', internalType: 'address', type: 'address', indexed: false }],
    name: 'MsgInspectorSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'guid', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'srcEid', internalType: 'uint32', type: 'uint32', indexed: false },
      { name: 'toAddress', internalType: 'address', type: 'address', indexed: true },
      { name: 'amountReceivedLD', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'OFTReceived',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'guid', internalType: 'bytes32', type: 'bytes32', indexed: true },
      { name: 'dstEid', internalType: 'uint32', type: 'uint32', indexed: false },
      { name: 'fromAddress', internalType: 'address', type: 'address', indexed: true },
      { name: 'amountSentLD', internalType: 'uint256', type: 'uint256', indexed: false },
      { name: 'amountReceivedLD', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'OFTSent',
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
      { name: 'eid', internalType: 'uint32', type: 'uint32', indexed: false },
      { name: 'peer', internalType: 'bytes32', type: 'bytes32', indexed: false },
    ],
    name: 'PeerSet',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [{ name: 'preCrimeAddress', internalType: 'address', type: 'address', indexed: false }],
    name: 'PreCrimeSet',
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
    inputs: [],
    name: 'SEND',
    outputs: [{ name: '', internalType: 'uint16', type: 'uint16' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'SEND_AND_CALL',
    outputs: [{ name: '', internalType: 'uint16', type: 'uint16' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
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
      },
    ],
    name: 'allowInitializePath',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
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
    inputs: [],
    name: 'approvalRequired',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
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
    inputs: [
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
      { name: '_msgType', internalType: 'uint16', type: 'uint16' },
      { name: '_extraOptions', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'combineOptions',
    outputs: [{ name: '', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimalConversionRate',
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
    name: 'endpoint',
    outputs: [{ name: '', internalType: 'contract ILayerZeroEndpointV2', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'eid', internalType: 'uint32', type: 'uint32' },
      { name: 'msgType', internalType: 'uint16', type: 'uint16' },
    ],
    name: 'enforcedOptions',
    outputs: [{ name: 'enforcedOption', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '',
        internalType: 'struct Origin',
        type: 'tuple',
        components: [
          { name: 'srcEid', internalType: 'uint32', type: 'uint32' },
          { name: 'sender', internalType: 'bytes32', type: 'bytes32' },
          { name: 'nonce', internalType: 'uint64', type: 'uint64' },
        ],
      },
      { name: '', internalType: 'bytes', type: 'bytes' },
      { name: '_sender', internalType: 'address', type: 'address' },
    ],
    name: 'isComposeMsgSender',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
      { name: '_peer', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'isPeer',
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
    inputs: [],
    name: 'lpNft',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
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
      {
        name: '_packets',
        internalType: 'struct InboundPacket[]',
        type: 'tuple[]',
        components: [
          {
            name: 'origin',
            internalType: 'struct Origin',
            type: 'tuple',
            components: [
              { name: 'srcEid', internalType: 'uint32', type: 'uint32' },
              { name: 'sender', internalType: 'bytes32', type: 'bytes32' },
              { name: 'nonce', internalType: 'uint64', type: 'uint64' },
            ],
          },
          { name: 'dstEid', internalType: 'uint32', type: 'uint32' },
          { name: 'receiver', internalType: 'address', type: 'address' },
          { name: 'guid', internalType: 'bytes32', type: 'bytes32' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'executor', internalType: 'address', type: 'address' },
          { name: 'message', internalType: 'bytes', type: 'bytes' },
          { name: 'extraData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'lzReceiveAndRevert',
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
      { name: '_guid', internalType: 'bytes32', type: 'bytes32' },
      { name: '_message', internalType: 'bytes', type: 'bytes' },
      { name: '_executor', internalType: 'address', type: 'address' },
      { name: '_extraData', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'lzReceiveSimulate',
    outputs: [],
    stateMutability: 'payable',
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
    name: 'msgInspector',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
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
    inputs: [
      { name: '', internalType: 'uint32', type: 'uint32' },
      { name: '', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'nextNonce',
    outputs: [{ name: 'nonce', internalType: 'uint64', type: 'uint64' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'oApp',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'oAppVersion',
    outputs: [
      { name: 'senderVersion', internalType: 'uint64', type: 'uint64' },
      { name: 'receiverVersion', internalType: 'uint64', type: 'uint64' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'oftVersion',
    outputs: [
      { name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' },
      { name: 'version', internalType: 'uint64', type: 'uint64' },
    ],
    stateMutability: 'pure',
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
    inputs: [{ name: 'eid', internalType: 'uint32', type: 'uint32' }],
    name: 'peers',
    outputs: [{ name: 'peer', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'preCrime',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_sendParam',
        internalType: 'struct SendParam',
        type: 'tuple',
        components: [
          { name: 'dstEid', internalType: 'uint32', type: 'uint32' },
          { name: 'to', internalType: 'bytes32', type: 'bytes32' },
          { name: 'amountLD', internalType: 'uint256', type: 'uint256' },
          { name: 'minAmountLD', internalType: 'uint256', type: 'uint256' },
          { name: 'extraOptions', internalType: 'bytes', type: 'bytes' },
          { name: 'composeMsg', internalType: 'bytes', type: 'bytes' },
          { name: 'oftCmd', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'quoteOFT',
    outputs: [
      {
        name: 'oftLimit',
        internalType: 'struct OFTLimit',
        type: 'tuple',
        components: [
          { name: 'minAmountLD', internalType: 'uint256', type: 'uint256' },
          { name: 'maxAmountLD', internalType: 'uint256', type: 'uint256' },
        ],
      },
      {
        name: 'oftFeeDetails',
        internalType: 'struct OFTFeeDetail[]',
        type: 'tuple[]',
        components: [
          { name: 'feeAmountLD', internalType: 'int256', type: 'int256' },
          { name: 'description', internalType: 'string', type: 'string' },
        ],
      },
      {
        name: 'oftReceipt',
        internalType: 'struct OFTReceipt',
        type: 'tuple',
        components: [
          { name: 'amountSentLD', internalType: 'uint256', type: 'uint256' },
          { name: 'amountReceivedLD', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_sendParam',
        internalType: 'struct SendParam',
        type: 'tuple',
        components: [
          { name: 'dstEid', internalType: 'uint32', type: 'uint32' },
          { name: 'to', internalType: 'bytes32', type: 'bytes32' },
          { name: 'amountLD', internalType: 'uint256', type: 'uint256' },
          { name: 'minAmountLD', internalType: 'uint256', type: 'uint256' },
          { name: 'extraOptions', internalType: 'bytes', type: 'bytes' },
          { name: 'composeMsg', internalType: 'bytes', type: 'bytes' },
          { name: 'oftCmd', internalType: 'bytes', type: 'bytes' },
        ],
      },
      { name: '_payInLzToken', internalType: 'bool', type: 'bool' },
    ],
    name: 'quoteSend',
    outputs: [
      {
        name: 'msgFee',
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
  { type: 'function', inputs: [], name: 'renounceOwnership', outputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [
      {
        name: '_sendParam',
        internalType: 'struct SendParam',
        type: 'tuple',
        components: [
          { name: 'dstEid', internalType: 'uint32', type: 'uint32' },
          { name: 'to', internalType: 'bytes32', type: 'bytes32' },
          { name: 'amountLD', internalType: 'uint256', type: 'uint256' },
          { name: 'minAmountLD', internalType: 'uint256', type: 'uint256' },
          { name: 'extraOptions', internalType: 'bytes', type: 'bytes' },
          { name: 'composeMsg', internalType: 'bytes', type: 'bytes' },
          { name: 'oftCmd', internalType: 'bytes', type: 'bytes' },
        ],
      },
      {
        name: '_fee',
        internalType: 'struct MessagingFee',
        type: 'tuple',
        components: [
          { name: 'nativeFee', internalType: 'uint256', type: 'uint256' },
          { name: 'lzTokenFee', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: '_refundAddress', internalType: 'address', type: 'address' },
    ],
    name: 'send',
    outputs: [
      {
        name: 'msgReceipt',
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
      {
        name: 'oftReceipt',
        internalType: 'struct OFTReceipt',
        type: 'tuple',
        components: [
          { name: 'amountSentLD', internalType: 'uint256', type: 'uint256' },
          { name: 'amountReceivedLD', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'payable',
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
    inputs: [
      {
        name: '_enforcedOptions',
        internalType: 'struct EnforcedOptionParam[]',
        type: 'tuple[]',
        components: [
          { name: 'eid', internalType: 'uint32', type: 'uint32' },
          { name: 'msgType', internalType: 'uint16', type: 'uint16' },
          { name: 'options', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'setEnforcedOptions',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_msgInspector', internalType: 'address', type: 'address' }],
    name: 'setMsgInspector',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_eid', internalType: 'uint32', type: 'uint32' },
      { name: '_peer', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'setPeer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_preCrime', internalType: 'address', type: 'address' }],
    name: 'setPreCrime',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'sharedDecimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
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
    name: 'token',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
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
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

/**
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const ustcPlusAddress = {
  56: '0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D',
  137: '0x606689c20562aC06202B8AB2Ad9029c961C2E267',
  11155111: '0x05df326185A182274058a42cBe613c628f1506B4',
} as const

/**
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const ustcPlusConfig = { address: ustcPlusAddress, abi: ustcPlusAbi } as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Action
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
 * Wraps __{@link readContract}__ with `abi` set to __{@link ioAppCoreAbi}__
 */
export const readIoAppCore = /*#__PURE__*/ createReadContract({ abi: ioAppCoreAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ioAppCoreAbi}__ and `functionName` set to `"endpoint"`
 */
export const readIoAppCoreEndpoint = /*#__PURE__*/ createReadContract({ abi: ioAppCoreAbi, functionName: 'endpoint' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ioAppCoreAbi}__ and `functionName` set to `"oAppVersion"`
 */
export const readIoAppCoreOAppVersion = /*#__PURE__*/ createReadContract({
  abi: ioAppCoreAbi,
  functionName: 'oAppVersion',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ioAppCoreAbi}__ and `functionName` set to `"peers"`
 */
export const readIoAppCorePeers = /*#__PURE__*/ createReadContract({ abi: ioAppCoreAbi, functionName: 'peers' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ioAppCoreAbi}__
 */
export const writeIoAppCore = /*#__PURE__*/ createWriteContract({ abi: ioAppCoreAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ioAppCoreAbi}__ and `functionName` set to `"setDelegate"`
 */
export const writeIoAppCoreSetDelegate = /*#__PURE__*/ createWriteContract({
  abi: ioAppCoreAbi,
  functionName: 'setDelegate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ioAppCoreAbi}__ and `functionName` set to `"setPeer"`
 */
export const writeIoAppCoreSetPeer = /*#__PURE__*/ createWriteContract({ abi: ioAppCoreAbi, functionName: 'setPeer' })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ioAppCoreAbi}__
 */
export const simulateIoAppCore = /*#__PURE__*/ createSimulateContract({ abi: ioAppCoreAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ioAppCoreAbi}__ and `functionName` set to `"setDelegate"`
 */
export const simulateIoAppCoreSetDelegate = /*#__PURE__*/ createSimulateContract({
  abi: ioAppCoreAbi,
  functionName: 'setDelegate',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ioAppCoreAbi}__ and `functionName` set to `"setPeer"`
 */
export const simulateIoAppCoreSetPeer = /*#__PURE__*/ createSimulateContract({
  abi: ioAppCoreAbi,
  functionName: 'setPeer',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ioAppCoreAbi}__
 */
export const watchIoAppCoreEvent = /*#__PURE__*/ createWatchContractEvent({ abi: ioAppCoreAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ioAppCoreAbi}__ and `eventName` set to `"PeerSet"`
 */
export const watchIoAppCorePeerSetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ioAppCoreAbi,
  eventName: 'PeerSet',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ioAppMsgInspectorAbi}__
 */
export const readIoAppMsgInspector = /*#__PURE__*/ createReadContract({ abi: ioAppMsgInspectorAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ioAppMsgInspectorAbi}__ and `functionName` set to `"inspect"`
 */
export const readIoAppMsgInspectorInspect = /*#__PURE__*/ createReadContract({
  abi: ioAppMsgInspectorAbi,
  functionName: 'inspect',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ioAppOptionsType3Abi}__
 */
export const readIoAppOptionsType3 = /*#__PURE__*/ createReadContract({ abi: ioAppOptionsType3Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ioAppOptionsType3Abi}__ and `functionName` set to `"combineOptions"`
 */
export const readIoAppOptionsType3CombineOptions = /*#__PURE__*/ createReadContract({
  abi: ioAppOptionsType3Abi,
  functionName: 'combineOptions',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ioAppOptionsType3Abi}__
 */
export const writeIoAppOptionsType3 = /*#__PURE__*/ createWriteContract({ abi: ioAppOptionsType3Abi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ioAppOptionsType3Abi}__ and `functionName` set to `"setEnforcedOptions"`
 */
export const writeIoAppOptionsType3SetEnforcedOptions = /*#__PURE__*/ createWriteContract({
  abi: ioAppOptionsType3Abi,
  functionName: 'setEnforcedOptions',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ioAppOptionsType3Abi}__
 */
export const simulateIoAppOptionsType3 = /*#__PURE__*/ createSimulateContract({ abi: ioAppOptionsType3Abi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ioAppOptionsType3Abi}__ and `functionName` set to `"setEnforcedOptions"`
 */
export const simulateIoAppOptionsType3SetEnforcedOptions = /*#__PURE__*/ createSimulateContract({
  abi: ioAppOptionsType3Abi,
  functionName: 'setEnforcedOptions',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ioAppOptionsType3Abi}__
 */
export const watchIoAppOptionsType3Event = /*#__PURE__*/ createWatchContractEvent({ abi: ioAppOptionsType3Abi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ioAppOptionsType3Abi}__ and `eventName` set to `"EnforcedOptionSet"`
 */
export const watchIoAppOptionsType3EnforcedOptionSetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ioAppOptionsType3Abi,
  eventName: 'EnforcedOptionSet',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ioAppPreCrimeSimulatorAbi}__
 */
export const readIoAppPreCrimeSimulator = /*#__PURE__*/ createReadContract({ abi: ioAppPreCrimeSimulatorAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ioAppPreCrimeSimulatorAbi}__ and `functionName` set to `"isPeer"`
 */
export const readIoAppPreCrimeSimulatorIsPeer = /*#__PURE__*/ createReadContract({
  abi: ioAppPreCrimeSimulatorAbi,
  functionName: 'isPeer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ioAppPreCrimeSimulatorAbi}__ and `functionName` set to `"oApp"`
 */
export const readIoAppPreCrimeSimulatorOApp = /*#__PURE__*/ createReadContract({
  abi: ioAppPreCrimeSimulatorAbi,
  functionName: 'oApp',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ioAppPreCrimeSimulatorAbi}__ and `functionName` set to `"preCrime"`
 */
export const readIoAppPreCrimeSimulatorPreCrime = /*#__PURE__*/ createReadContract({
  abi: ioAppPreCrimeSimulatorAbi,
  functionName: 'preCrime',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ioAppPreCrimeSimulatorAbi}__
 */
export const writeIoAppPreCrimeSimulator = /*#__PURE__*/ createWriteContract({ abi: ioAppPreCrimeSimulatorAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ioAppPreCrimeSimulatorAbi}__ and `functionName` set to `"lzReceiveAndRevert"`
 */
export const writeIoAppPreCrimeSimulatorLzReceiveAndRevert = /*#__PURE__*/ createWriteContract({
  abi: ioAppPreCrimeSimulatorAbi,
  functionName: 'lzReceiveAndRevert',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ioAppPreCrimeSimulatorAbi}__ and `functionName` set to `"setPreCrime"`
 */
export const writeIoAppPreCrimeSimulatorSetPreCrime = /*#__PURE__*/ createWriteContract({
  abi: ioAppPreCrimeSimulatorAbi,
  functionName: 'setPreCrime',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ioAppPreCrimeSimulatorAbi}__
 */
export const simulateIoAppPreCrimeSimulator = /*#__PURE__*/ createSimulateContract({ abi: ioAppPreCrimeSimulatorAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ioAppPreCrimeSimulatorAbi}__ and `functionName` set to `"lzReceiveAndRevert"`
 */
export const simulateIoAppPreCrimeSimulatorLzReceiveAndRevert = /*#__PURE__*/ createSimulateContract({
  abi: ioAppPreCrimeSimulatorAbi,
  functionName: 'lzReceiveAndRevert',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ioAppPreCrimeSimulatorAbi}__ and `functionName` set to `"setPreCrime"`
 */
export const simulateIoAppPreCrimeSimulatorSetPreCrime = /*#__PURE__*/ createSimulateContract({
  abi: ioAppPreCrimeSimulatorAbi,
  functionName: 'setPreCrime',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ioAppPreCrimeSimulatorAbi}__
 */
export const watchIoAppPreCrimeSimulatorEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ioAppPreCrimeSimulatorAbi,
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ioAppPreCrimeSimulatorAbi}__ and `eventName` set to `"PreCrimeSet"`
 */
export const watchIoAppPreCrimeSimulatorPreCrimeSetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ioAppPreCrimeSimulatorAbi,
  eventName: 'PreCrimeSet',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ioAppReceiverAbi}__
 */
export const readIoAppReceiver = /*#__PURE__*/ createReadContract({ abi: ioAppReceiverAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ioAppReceiverAbi}__ and `functionName` set to `"allowInitializePath"`
 */
export const readIoAppReceiverAllowInitializePath = /*#__PURE__*/ createReadContract({
  abi: ioAppReceiverAbi,
  functionName: 'allowInitializePath',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ioAppReceiverAbi}__ and `functionName` set to `"isComposeMsgSender"`
 */
export const readIoAppReceiverIsComposeMsgSender = /*#__PURE__*/ createReadContract({
  abi: ioAppReceiverAbi,
  functionName: 'isComposeMsgSender',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ioAppReceiverAbi}__ and `functionName` set to `"nextNonce"`
 */
export const readIoAppReceiverNextNonce = /*#__PURE__*/ createReadContract({
  abi: ioAppReceiverAbi,
  functionName: 'nextNonce',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ioAppReceiverAbi}__
 */
export const writeIoAppReceiver = /*#__PURE__*/ createWriteContract({ abi: ioAppReceiverAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ioAppReceiverAbi}__ and `functionName` set to `"lzReceive"`
 */
export const writeIoAppReceiverLzReceive = /*#__PURE__*/ createWriteContract({
  abi: ioAppReceiverAbi,
  functionName: 'lzReceive',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ioAppReceiverAbi}__
 */
export const simulateIoAppReceiver = /*#__PURE__*/ createSimulateContract({ abi: ioAppReceiverAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ioAppReceiverAbi}__ and `functionName` set to `"lzReceive"`
 */
export const simulateIoAppReceiverLzReceive = /*#__PURE__*/ createSimulateContract({
  abi: ioAppReceiverAbi,
  functionName: 'lzReceive',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ioftAbi}__
 */
export const readIoft = /*#__PURE__*/ createReadContract({ abi: ioftAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ioftAbi}__ and `functionName` set to `"approvalRequired"`
 */
export const readIoftApprovalRequired = /*#__PURE__*/ createReadContract({
  abi: ioftAbi,
  functionName: 'approvalRequired',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ioftAbi}__ and `functionName` set to `"oftVersion"`
 */
export const readIoftOftVersion = /*#__PURE__*/ createReadContract({ abi: ioftAbi, functionName: 'oftVersion' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ioftAbi}__ and `functionName` set to `"quoteOFT"`
 */
export const readIoftQuoteOft = /*#__PURE__*/ createReadContract({ abi: ioftAbi, functionName: 'quoteOFT' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ioftAbi}__ and `functionName` set to `"quoteSend"`
 */
export const readIoftQuoteSend = /*#__PURE__*/ createReadContract({ abi: ioftAbi, functionName: 'quoteSend' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ioftAbi}__ and `functionName` set to `"sharedDecimals"`
 */
export const readIoftSharedDecimals = /*#__PURE__*/ createReadContract({ abi: ioftAbi, functionName: 'sharedDecimals' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ioftAbi}__ and `functionName` set to `"token"`
 */
export const readIoftToken = /*#__PURE__*/ createReadContract({ abi: ioftAbi, functionName: 'token' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ioftAbi}__
 */
export const writeIoft = /*#__PURE__*/ createWriteContract({ abi: ioftAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ioftAbi}__ and `functionName` set to `"send"`
 */
export const writeIoftSend = /*#__PURE__*/ createWriteContract({ abi: ioftAbi, functionName: 'send' })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ioftAbi}__
 */
export const simulateIoft = /*#__PURE__*/ createSimulateContract({ abi: ioftAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ioftAbi}__ and `functionName` set to `"send"`
 */
export const simulateIoftSend = /*#__PURE__*/ createSimulateContract({ abi: ioftAbi, functionName: 'send' })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ioftAbi}__
 */
export const watchIoftEvent = /*#__PURE__*/ createWatchContractEvent({ abi: ioftAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ioftAbi}__ and `eventName` set to `"OFTReceived"`
 */
export const watchIoftOftReceivedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ioftAbi,
  eventName: 'OFTReceived',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ioftAbi}__ and `eventName` set to `"OFTSent"`
 */
export const watchIoftOftSentEvent = /*#__PURE__*/ createWatchContractEvent({ abi: ioftAbi, eventName: 'OFTSent' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iPreCrimeAbi}__
 */
export const readIPreCrime = /*#__PURE__*/ createReadContract({ abi: iPreCrimeAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iPreCrimeAbi}__ and `functionName` set to `"buildSimulationResult"`
 */
export const readIPreCrimeBuildSimulationResult = /*#__PURE__*/ createReadContract({
  abi: iPreCrimeAbi,
  functionName: 'buildSimulationResult',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link iPreCrimeAbi}__ and `functionName` set to `"version"`
 */
export const readIPreCrimeVersion = /*#__PURE__*/ createReadContract({ abi: iPreCrimeAbi, functionName: 'version' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iPreCrimeAbi}__
 */
export const writeIPreCrime = /*#__PURE__*/ createWriteContract({ abi: iPreCrimeAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iPreCrimeAbi}__ and `functionName` set to `"getConfig"`
 */
export const writeIPreCrimeGetConfig = /*#__PURE__*/ createWriteContract({
  abi: iPreCrimeAbi,
  functionName: 'getConfig',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iPreCrimeAbi}__ and `functionName` set to `"preCrime"`
 */
export const writeIPreCrimePreCrime = /*#__PURE__*/ createWriteContract({ abi: iPreCrimeAbi, functionName: 'preCrime' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link iPreCrimeAbi}__ and `functionName` set to `"simulate"`
 */
export const writeIPreCrimeSimulate = /*#__PURE__*/ createWriteContract({ abi: iPreCrimeAbi, functionName: 'simulate' })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iPreCrimeAbi}__
 */
export const simulateIPreCrime = /*#__PURE__*/ createSimulateContract({ abi: iPreCrimeAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iPreCrimeAbi}__ and `functionName` set to `"getConfig"`
 */
export const simulateIPreCrimeGetConfig = /*#__PURE__*/ createSimulateContract({
  abi: iPreCrimeAbi,
  functionName: 'getConfig',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iPreCrimeAbi}__ and `functionName` set to `"preCrime"`
 */
export const simulateIPreCrimePreCrime = /*#__PURE__*/ createSimulateContract({
  abi: iPreCrimeAbi,
  functionName: 'preCrime',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link iPreCrimeAbi}__ and `functionName` set to `"simulate"`
 */
export const simulateIPreCrimeSimulate = /*#__PURE__*/ createSimulateContract({
  abi: iPreCrimeAbi,
  functionName: 'simulate',
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
 * Wraps __{@link readContract}__ with `abi` set to __{@link oAppAbi}__
 */
export const readOApp = /*#__PURE__*/ createReadContract({ abi: oAppAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oAppAbi}__ and `functionName` set to `"allowInitializePath"`
 */
export const readOAppAllowInitializePath = /*#__PURE__*/ createReadContract({
  abi: oAppAbi,
  functionName: 'allowInitializePath',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oAppAbi}__ and `functionName` set to `"endpoint"`
 */
export const readOAppEndpoint = /*#__PURE__*/ createReadContract({ abi: oAppAbi, functionName: 'endpoint' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oAppAbi}__ and `functionName` set to `"isComposeMsgSender"`
 */
export const readOAppIsComposeMsgSender = /*#__PURE__*/ createReadContract({
  abi: oAppAbi,
  functionName: 'isComposeMsgSender',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oAppAbi}__ and `functionName` set to `"nextNonce"`
 */
export const readOAppNextNonce = /*#__PURE__*/ createReadContract({ abi: oAppAbi, functionName: 'nextNonce' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oAppAbi}__ and `functionName` set to `"oAppVersion"`
 */
export const readOAppOAppVersion = /*#__PURE__*/ createReadContract({ abi: oAppAbi, functionName: 'oAppVersion' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oAppAbi}__ and `functionName` set to `"owner"`
 */
export const readOAppOwner = /*#__PURE__*/ createReadContract({ abi: oAppAbi, functionName: 'owner' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oAppAbi}__ and `functionName` set to `"peers"`
 */
export const readOAppPeers = /*#__PURE__*/ createReadContract({ abi: oAppAbi, functionName: 'peers' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oAppAbi}__
 */
export const writeOApp = /*#__PURE__*/ createWriteContract({ abi: oAppAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oAppAbi}__ and `functionName` set to `"lzReceive"`
 */
export const writeOAppLzReceive = /*#__PURE__*/ createWriteContract({ abi: oAppAbi, functionName: 'lzReceive' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oAppAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeOAppRenounceOwnership = /*#__PURE__*/ createWriteContract({
  abi: oAppAbi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oAppAbi}__ and `functionName` set to `"setDelegate"`
 */
export const writeOAppSetDelegate = /*#__PURE__*/ createWriteContract({ abi: oAppAbi, functionName: 'setDelegate' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oAppAbi}__ and `functionName` set to `"setPeer"`
 */
export const writeOAppSetPeer = /*#__PURE__*/ createWriteContract({ abi: oAppAbi, functionName: 'setPeer' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oAppAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeOAppTransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: oAppAbi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oAppAbi}__
 */
export const simulateOApp = /*#__PURE__*/ createSimulateContract({ abi: oAppAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oAppAbi}__ and `functionName` set to `"lzReceive"`
 */
export const simulateOAppLzReceive = /*#__PURE__*/ createSimulateContract({ abi: oAppAbi, functionName: 'lzReceive' })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oAppAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateOAppRenounceOwnership = /*#__PURE__*/ createSimulateContract({
  abi: oAppAbi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oAppAbi}__ and `functionName` set to `"setDelegate"`
 */
export const simulateOAppSetDelegate = /*#__PURE__*/ createSimulateContract({
  abi: oAppAbi,
  functionName: 'setDelegate',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oAppAbi}__ and `functionName` set to `"setPeer"`
 */
export const simulateOAppSetPeer = /*#__PURE__*/ createSimulateContract({ abi: oAppAbi, functionName: 'setPeer' })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oAppAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateOAppTransferOwnership = /*#__PURE__*/ createSimulateContract({
  abi: oAppAbi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link oAppAbi}__
 */
export const watchOAppEvent = /*#__PURE__*/ createWatchContractEvent({ abi: oAppAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link oAppAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchOAppOwnershipTransferredEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: oAppAbi,
  eventName: 'OwnershipTransferred',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link oAppAbi}__ and `eventName` set to `"PeerSet"`
 */
export const watchOAppPeerSetEvent = /*#__PURE__*/ createWatchContractEvent({ abi: oAppAbi, eventName: 'PeerSet' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oAppCoreAbi}__
 */
export const readOAppCore = /*#__PURE__*/ createReadContract({ abi: oAppCoreAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oAppCoreAbi}__ and `functionName` set to `"endpoint"`
 */
export const readOAppCoreEndpoint = /*#__PURE__*/ createReadContract({ abi: oAppCoreAbi, functionName: 'endpoint' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oAppCoreAbi}__ and `functionName` set to `"oAppVersion"`
 */
export const readOAppCoreOAppVersion = /*#__PURE__*/ createReadContract({
  abi: oAppCoreAbi,
  functionName: 'oAppVersion',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oAppCoreAbi}__ and `functionName` set to `"owner"`
 */
export const readOAppCoreOwner = /*#__PURE__*/ createReadContract({ abi: oAppCoreAbi, functionName: 'owner' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oAppCoreAbi}__ and `functionName` set to `"peers"`
 */
export const readOAppCorePeers = /*#__PURE__*/ createReadContract({ abi: oAppCoreAbi, functionName: 'peers' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oAppCoreAbi}__
 */
export const writeOAppCore = /*#__PURE__*/ createWriteContract({ abi: oAppCoreAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oAppCoreAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeOAppCoreRenounceOwnership = /*#__PURE__*/ createWriteContract({
  abi: oAppCoreAbi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oAppCoreAbi}__ and `functionName` set to `"setDelegate"`
 */
export const writeOAppCoreSetDelegate = /*#__PURE__*/ createWriteContract({
  abi: oAppCoreAbi,
  functionName: 'setDelegate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oAppCoreAbi}__ and `functionName` set to `"setPeer"`
 */
export const writeOAppCoreSetPeer = /*#__PURE__*/ createWriteContract({ abi: oAppCoreAbi, functionName: 'setPeer' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oAppCoreAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeOAppCoreTransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: oAppCoreAbi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oAppCoreAbi}__
 */
export const simulateOAppCore = /*#__PURE__*/ createSimulateContract({ abi: oAppCoreAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oAppCoreAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateOAppCoreRenounceOwnership = /*#__PURE__*/ createSimulateContract({
  abi: oAppCoreAbi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oAppCoreAbi}__ and `functionName` set to `"setDelegate"`
 */
export const simulateOAppCoreSetDelegate = /*#__PURE__*/ createSimulateContract({
  abi: oAppCoreAbi,
  functionName: 'setDelegate',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oAppCoreAbi}__ and `functionName` set to `"setPeer"`
 */
export const simulateOAppCoreSetPeer = /*#__PURE__*/ createSimulateContract({
  abi: oAppCoreAbi,
  functionName: 'setPeer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oAppCoreAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateOAppCoreTransferOwnership = /*#__PURE__*/ createSimulateContract({
  abi: oAppCoreAbi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link oAppCoreAbi}__
 */
export const watchOAppCoreEvent = /*#__PURE__*/ createWatchContractEvent({ abi: oAppCoreAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link oAppCoreAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchOAppCoreOwnershipTransferredEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: oAppCoreAbi,
  eventName: 'OwnershipTransferred',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link oAppCoreAbi}__ and `eventName` set to `"PeerSet"`
 */
export const watchOAppCorePeerSetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: oAppCoreAbi,
  eventName: 'PeerSet',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oAppOptionsType3Abi}__
 */
export const readOAppOptionsType3 = /*#__PURE__*/ createReadContract({ abi: oAppOptionsType3Abi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oAppOptionsType3Abi}__ and `functionName` set to `"combineOptions"`
 */
export const readOAppOptionsType3CombineOptions = /*#__PURE__*/ createReadContract({
  abi: oAppOptionsType3Abi,
  functionName: 'combineOptions',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oAppOptionsType3Abi}__ and `functionName` set to `"enforcedOptions"`
 */
export const readOAppOptionsType3EnforcedOptions = /*#__PURE__*/ createReadContract({
  abi: oAppOptionsType3Abi,
  functionName: 'enforcedOptions',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oAppOptionsType3Abi}__ and `functionName` set to `"owner"`
 */
export const readOAppOptionsType3Owner = /*#__PURE__*/ createReadContract({
  abi: oAppOptionsType3Abi,
  functionName: 'owner',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oAppOptionsType3Abi}__
 */
export const writeOAppOptionsType3 = /*#__PURE__*/ createWriteContract({ abi: oAppOptionsType3Abi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oAppOptionsType3Abi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeOAppOptionsType3RenounceOwnership = /*#__PURE__*/ createWriteContract({
  abi: oAppOptionsType3Abi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oAppOptionsType3Abi}__ and `functionName` set to `"setEnforcedOptions"`
 */
export const writeOAppOptionsType3SetEnforcedOptions = /*#__PURE__*/ createWriteContract({
  abi: oAppOptionsType3Abi,
  functionName: 'setEnforcedOptions',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oAppOptionsType3Abi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeOAppOptionsType3TransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: oAppOptionsType3Abi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oAppOptionsType3Abi}__
 */
export const simulateOAppOptionsType3 = /*#__PURE__*/ createSimulateContract({ abi: oAppOptionsType3Abi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oAppOptionsType3Abi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateOAppOptionsType3RenounceOwnership = /*#__PURE__*/ createSimulateContract({
  abi: oAppOptionsType3Abi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oAppOptionsType3Abi}__ and `functionName` set to `"setEnforcedOptions"`
 */
export const simulateOAppOptionsType3SetEnforcedOptions = /*#__PURE__*/ createSimulateContract({
  abi: oAppOptionsType3Abi,
  functionName: 'setEnforcedOptions',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oAppOptionsType3Abi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateOAppOptionsType3TransferOwnership = /*#__PURE__*/ createSimulateContract({
  abi: oAppOptionsType3Abi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link oAppOptionsType3Abi}__
 */
export const watchOAppOptionsType3Event = /*#__PURE__*/ createWatchContractEvent({ abi: oAppOptionsType3Abi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link oAppOptionsType3Abi}__ and `eventName` set to `"EnforcedOptionSet"`
 */
export const watchOAppOptionsType3EnforcedOptionSetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: oAppOptionsType3Abi,
  eventName: 'EnforcedOptionSet',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link oAppOptionsType3Abi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchOAppOptionsType3OwnershipTransferredEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: oAppOptionsType3Abi,
  eventName: 'OwnershipTransferred',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oAppPreCrimeSimulatorAbi}__
 */
export const readOAppPreCrimeSimulator = /*#__PURE__*/ createReadContract({ abi: oAppPreCrimeSimulatorAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oAppPreCrimeSimulatorAbi}__ and `functionName` set to `"isPeer"`
 */
export const readOAppPreCrimeSimulatorIsPeer = /*#__PURE__*/ createReadContract({
  abi: oAppPreCrimeSimulatorAbi,
  functionName: 'isPeer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oAppPreCrimeSimulatorAbi}__ and `functionName` set to `"oApp"`
 */
export const readOAppPreCrimeSimulatorOApp = /*#__PURE__*/ createReadContract({
  abi: oAppPreCrimeSimulatorAbi,
  functionName: 'oApp',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oAppPreCrimeSimulatorAbi}__ and `functionName` set to `"owner"`
 */
export const readOAppPreCrimeSimulatorOwner = /*#__PURE__*/ createReadContract({
  abi: oAppPreCrimeSimulatorAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oAppPreCrimeSimulatorAbi}__ and `functionName` set to `"preCrime"`
 */
export const readOAppPreCrimeSimulatorPreCrime = /*#__PURE__*/ createReadContract({
  abi: oAppPreCrimeSimulatorAbi,
  functionName: 'preCrime',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oAppPreCrimeSimulatorAbi}__
 */
export const writeOAppPreCrimeSimulator = /*#__PURE__*/ createWriteContract({ abi: oAppPreCrimeSimulatorAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oAppPreCrimeSimulatorAbi}__ and `functionName` set to `"lzReceiveAndRevert"`
 */
export const writeOAppPreCrimeSimulatorLzReceiveAndRevert = /*#__PURE__*/ createWriteContract({
  abi: oAppPreCrimeSimulatorAbi,
  functionName: 'lzReceiveAndRevert',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oAppPreCrimeSimulatorAbi}__ and `functionName` set to `"lzReceiveSimulate"`
 */
export const writeOAppPreCrimeSimulatorLzReceiveSimulate = /*#__PURE__*/ createWriteContract({
  abi: oAppPreCrimeSimulatorAbi,
  functionName: 'lzReceiveSimulate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oAppPreCrimeSimulatorAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeOAppPreCrimeSimulatorRenounceOwnership = /*#__PURE__*/ createWriteContract({
  abi: oAppPreCrimeSimulatorAbi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oAppPreCrimeSimulatorAbi}__ and `functionName` set to `"setPreCrime"`
 */
export const writeOAppPreCrimeSimulatorSetPreCrime = /*#__PURE__*/ createWriteContract({
  abi: oAppPreCrimeSimulatorAbi,
  functionName: 'setPreCrime',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oAppPreCrimeSimulatorAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeOAppPreCrimeSimulatorTransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: oAppPreCrimeSimulatorAbi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oAppPreCrimeSimulatorAbi}__
 */
export const simulateOAppPreCrimeSimulator = /*#__PURE__*/ createSimulateContract({ abi: oAppPreCrimeSimulatorAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oAppPreCrimeSimulatorAbi}__ and `functionName` set to `"lzReceiveAndRevert"`
 */
export const simulateOAppPreCrimeSimulatorLzReceiveAndRevert = /*#__PURE__*/ createSimulateContract({
  abi: oAppPreCrimeSimulatorAbi,
  functionName: 'lzReceiveAndRevert',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oAppPreCrimeSimulatorAbi}__ and `functionName` set to `"lzReceiveSimulate"`
 */
export const simulateOAppPreCrimeSimulatorLzReceiveSimulate = /*#__PURE__*/ createSimulateContract({
  abi: oAppPreCrimeSimulatorAbi,
  functionName: 'lzReceiveSimulate',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oAppPreCrimeSimulatorAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateOAppPreCrimeSimulatorRenounceOwnership = /*#__PURE__*/ createSimulateContract({
  abi: oAppPreCrimeSimulatorAbi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oAppPreCrimeSimulatorAbi}__ and `functionName` set to `"setPreCrime"`
 */
export const simulateOAppPreCrimeSimulatorSetPreCrime = /*#__PURE__*/ createSimulateContract({
  abi: oAppPreCrimeSimulatorAbi,
  functionName: 'setPreCrime',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oAppPreCrimeSimulatorAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateOAppPreCrimeSimulatorTransferOwnership = /*#__PURE__*/ createSimulateContract({
  abi: oAppPreCrimeSimulatorAbi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link oAppPreCrimeSimulatorAbi}__
 */
export const watchOAppPreCrimeSimulatorEvent = /*#__PURE__*/ createWatchContractEvent({ abi: oAppPreCrimeSimulatorAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link oAppPreCrimeSimulatorAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchOAppPreCrimeSimulatorOwnershipTransferredEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: oAppPreCrimeSimulatorAbi,
  eventName: 'OwnershipTransferred',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link oAppPreCrimeSimulatorAbi}__ and `eventName` set to `"PreCrimeSet"`
 */
export const watchOAppPreCrimeSimulatorPreCrimeSetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: oAppPreCrimeSimulatorAbi,
  eventName: 'PreCrimeSet',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oAppReceiverAbi}__
 */
export const readOAppReceiver = /*#__PURE__*/ createReadContract({ abi: oAppReceiverAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oAppReceiverAbi}__ and `functionName` set to `"allowInitializePath"`
 */
export const readOAppReceiverAllowInitializePath = /*#__PURE__*/ createReadContract({
  abi: oAppReceiverAbi,
  functionName: 'allowInitializePath',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oAppReceiverAbi}__ and `functionName` set to `"endpoint"`
 */
export const readOAppReceiverEndpoint = /*#__PURE__*/ createReadContract({
  abi: oAppReceiverAbi,
  functionName: 'endpoint',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oAppReceiverAbi}__ and `functionName` set to `"isComposeMsgSender"`
 */
export const readOAppReceiverIsComposeMsgSender = /*#__PURE__*/ createReadContract({
  abi: oAppReceiverAbi,
  functionName: 'isComposeMsgSender',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oAppReceiverAbi}__ and `functionName` set to `"nextNonce"`
 */
export const readOAppReceiverNextNonce = /*#__PURE__*/ createReadContract({
  abi: oAppReceiverAbi,
  functionName: 'nextNonce',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oAppReceiverAbi}__ and `functionName` set to `"oAppVersion"`
 */
export const readOAppReceiverOAppVersion = /*#__PURE__*/ createReadContract({
  abi: oAppReceiverAbi,
  functionName: 'oAppVersion',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oAppReceiverAbi}__ and `functionName` set to `"owner"`
 */
export const readOAppReceiverOwner = /*#__PURE__*/ createReadContract({ abi: oAppReceiverAbi, functionName: 'owner' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oAppReceiverAbi}__ and `functionName` set to `"peers"`
 */
export const readOAppReceiverPeers = /*#__PURE__*/ createReadContract({ abi: oAppReceiverAbi, functionName: 'peers' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oAppReceiverAbi}__
 */
export const writeOAppReceiver = /*#__PURE__*/ createWriteContract({ abi: oAppReceiverAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oAppReceiverAbi}__ and `functionName` set to `"lzReceive"`
 */
export const writeOAppReceiverLzReceive = /*#__PURE__*/ createWriteContract({
  abi: oAppReceiverAbi,
  functionName: 'lzReceive',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oAppReceiverAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeOAppReceiverRenounceOwnership = /*#__PURE__*/ createWriteContract({
  abi: oAppReceiverAbi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oAppReceiverAbi}__ and `functionName` set to `"setDelegate"`
 */
export const writeOAppReceiverSetDelegate = /*#__PURE__*/ createWriteContract({
  abi: oAppReceiverAbi,
  functionName: 'setDelegate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oAppReceiverAbi}__ and `functionName` set to `"setPeer"`
 */
export const writeOAppReceiverSetPeer = /*#__PURE__*/ createWriteContract({
  abi: oAppReceiverAbi,
  functionName: 'setPeer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oAppReceiverAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeOAppReceiverTransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: oAppReceiverAbi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oAppReceiverAbi}__
 */
export const simulateOAppReceiver = /*#__PURE__*/ createSimulateContract({ abi: oAppReceiverAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oAppReceiverAbi}__ and `functionName` set to `"lzReceive"`
 */
export const simulateOAppReceiverLzReceive = /*#__PURE__*/ createSimulateContract({
  abi: oAppReceiverAbi,
  functionName: 'lzReceive',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oAppReceiverAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateOAppReceiverRenounceOwnership = /*#__PURE__*/ createSimulateContract({
  abi: oAppReceiverAbi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oAppReceiverAbi}__ and `functionName` set to `"setDelegate"`
 */
export const simulateOAppReceiverSetDelegate = /*#__PURE__*/ createSimulateContract({
  abi: oAppReceiverAbi,
  functionName: 'setDelegate',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oAppReceiverAbi}__ and `functionName` set to `"setPeer"`
 */
export const simulateOAppReceiverSetPeer = /*#__PURE__*/ createSimulateContract({
  abi: oAppReceiverAbi,
  functionName: 'setPeer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oAppReceiverAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateOAppReceiverTransferOwnership = /*#__PURE__*/ createSimulateContract({
  abi: oAppReceiverAbi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link oAppReceiverAbi}__
 */
export const watchOAppReceiverEvent = /*#__PURE__*/ createWatchContractEvent({ abi: oAppReceiverAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link oAppReceiverAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchOAppReceiverOwnershipTransferredEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: oAppReceiverAbi,
  eventName: 'OwnershipTransferred',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link oAppReceiverAbi}__ and `eventName` set to `"PeerSet"`
 */
export const watchOAppReceiverPeerSetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: oAppReceiverAbi,
  eventName: 'PeerSet',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oAppSenderAbi}__
 */
export const readOAppSender = /*#__PURE__*/ createReadContract({ abi: oAppSenderAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oAppSenderAbi}__ and `functionName` set to `"endpoint"`
 */
export const readOAppSenderEndpoint = /*#__PURE__*/ createReadContract({ abi: oAppSenderAbi, functionName: 'endpoint' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oAppSenderAbi}__ and `functionName` set to `"oAppVersion"`
 */
export const readOAppSenderOAppVersion = /*#__PURE__*/ createReadContract({
  abi: oAppSenderAbi,
  functionName: 'oAppVersion',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oAppSenderAbi}__ and `functionName` set to `"owner"`
 */
export const readOAppSenderOwner = /*#__PURE__*/ createReadContract({ abi: oAppSenderAbi, functionName: 'owner' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oAppSenderAbi}__ and `functionName` set to `"peers"`
 */
export const readOAppSenderPeers = /*#__PURE__*/ createReadContract({ abi: oAppSenderAbi, functionName: 'peers' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oAppSenderAbi}__
 */
export const writeOAppSender = /*#__PURE__*/ createWriteContract({ abi: oAppSenderAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oAppSenderAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeOAppSenderRenounceOwnership = /*#__PURE__*/ createWriteContract({
  abi: oAppSenderAbi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oAppSenderAbi}__ and `functionName` set to `"setDelegate"`
 */
export const writeOAppSenderSetDelegate = /*#__PURE__*/ createWriteContract({
  abi: oAppSenderAbi,
  functionName: 'setDelegate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oAppSenderAbi}__ and `functionName` set to `"setPeer"`
 */
export const writeOAppSenderSetPeer = /*#__PURE__*/ createWriteContract({ abi: oAppSenderAbi, functionName: 'setPeer' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oAppSenderAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeOAppSenderTransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: oAppSenderAbi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oAppSenderAbi}__
 */
export const simulateOAppSender = /*#__PURE__*/ createSimulateContract({ abi: oAppSenderAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oAppSenderAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateOAppSenderRenounceOwnership = /*#__PURE__*/ createSimulateContract({
  abi: oAppSenderAbi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oAppSenderAbi}__ and `functionName` set to `"setDelegate"`
 */
export const simulateOAppSenderSetDelegate = /*#__PURE__*/ createSimulateContract({
  abi: oAppSenderAbi,
  functionName: 'setDelegate',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oAppSenderAbi}__ and `functionName` set to `"setPeer"`
 */
export const simulateOAppSenderSetPeer = /*#__PURE__*/ createSimulateContract({
  abi: oAppSenderAbi,
  functionName: 'setPeer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oAppSenderAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateOAppSenderTransferOwnership = /*#__PURE__*/ createSimulateContract({
  abi: oAppSenderAbi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link oAppSenderAbi}__
 */
export const watchOAppSenderEvent = /*#__PURE__*/ createWatchContractEvent({ abi: oAppSenderAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link oAppSenderAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchOAppSenderOwnershipTransferredEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: oAppSenderAbi,
  eventName: 'OwnershipTransferred',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link oAppSenderAbi}__ and `eventName` set to `"PeerSet"`
 */
export const watchOAppSenderPeerSetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: oAppSenderAbi,
  eventName: 'PeerSet',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftAbi}__
 */
export const readOft = /*#__PURE__*/ createReadContract({ abi: oftAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"SEND"`
 */
export const readOftSend = /*#__PURE__*/ createReadContract({ abi: oftAbi, functionName: 'SEND' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"SEND_AND_CALL"`
 */
export const readOftSendAndCall = /*#__PURE__*/ createReadContract({ abi: oftAbi, functionName: 'SEND_AND_CALL' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"allowInitializePath"`
 */
export const readOftAllowInitializePath = /*#__PURE__*/ createReadContract({
  abi: oftAbi,
  functionName: 'allowInitializePath',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"allowance"`
 */
export const readOftAllowance = /*#__PURE__*/ createReadContract({ abi: oftAbi, functionName: 'allowance' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"approvalRequired"`
 */
export const readOftApprovalRequired = /*#__PURE__*/ createReadContract({
  abi: oftAbi,
  functionName: 'approvalRequired',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"balanceOf"`
 */
export const readOftBalanceOf = /*#__PURE__*/ createReadContract({ abi: oftAbi, functionName: 'balanceOf' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"combineOptions"`
 */
export const readOftCombineOptions = /*#__PURE__*/ createReadContract({ abi: oftAbi, functionName: 'combineOptions' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"decimalConversionRate"`
 */
export const readOftDecimalConversionRate = /*#__PURE__*/ createReadContract({
  abi: oftAbi,
  functionName: 'decimalConversionRate',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"decimals"`
 */
export const readOftDecimals = /*#__PURE__*/ createReadContract({ abi: oftAbi, functionName: 'decimals' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"endpoint"`
 */
export const readOftEndpoint = /*#__PURE__*/ createReadContract({ abi: oftAbi, functionName: 'endpoint' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"enforcedOptions"`
 */
export const readOftEnforcedOptions = /*#__PURE__*/ createReadContract({ abi: oftAbi, functionName: 'enforcedOptions' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"isComposeMsgSender"`
 */
export const readOftIsComposeMsgSender = /*#__PURE__*/ createReadContract({
  abi: oftAbi,
  functionName: 'isComposeMsgSender',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"isPeer"`
 */
export const readOftIsPeer = /*#__PURE__*/ createReadContract({ abi: oftAbi, functionName: 'isPeer' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"msgInspector"`
 */
export const readOftMsgInspector = /*#__PURE__*/ createReadContract({ abi: oftAbi, functionName: 'msgInspector' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"name"`
 */
export const readOftName = /*#__PURE__*/ createReadContract({ abi: oftAbi, functionName: 'name' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"nextNonce"`
 */
export const readOftNextNonce = /*#__PURE__*/ createReadContract({ abi: oftAbi, functionName: 'nextNonce' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"oApp"`
 */
export const readOftOApp = /*#__PURE__*/ createReadContract({ abi: oftAbi, functionName: 'oApp' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"oAppVersion"`
 */
export const readOftOAppVersion = /*#__PURE__*/ createReadContract({ abi: oftAbi, functionName: 'oAppVersion' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"oftVersion"`
 */
export const readOftOftVersion = /*#__PURE__*/ createReadContract({ abi: oftAbi, functionName: 'oftVersion' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"owner"`
 */
export const readOftOwner = /*#__PURE__*/ createReadContract({ abi: oftAbi, functionName: 'owner' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"peers"`
 */
export const readOftPeers = /*#__PURE__*/ createReadContract({ abi: oftAbi, functionName: 'peers' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"preCrime"`
 */
export const readOftPreCrime = /*#__PURE__*/ createReadContract({ abi: oftAbi, functionName: 'preCrime' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"quoteOFT"`
 */
export const readOftQuoteOft = /*#__PURE__*/ createReadContract({ abi: oftAbi, functionName: 'quoteOFT' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"quoteSend"`
 */
export const readOftQuoteSend = /*#__PURE__*/ createReadContract({ abi: oftAbi, functionName: 'quoteSend' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"sharedDecimals"`
 */
export const readOftSharedDecimals = /*#__PURE__*/ createReadContract({ abi: oftAbi, functionName: 'sharedDecimals' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"symbol"`
 */
export const readOftSymbol = /*#__PURE__*/ createReadContract({ abi: oftAbi, functionName: 'symbol' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"token"`
 */
export const readOftToken = /*#__PURE__*/ createReadContract({ abi: oftAbi, functionName: 'token' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"totalSupply"`
 */
export const readOftTotalSupply = /*#__PURE__*/ createReadContract({ abi: oftAbi, functionName: 'totalSupply' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oftAbi}__
 */
export const writeOft = /*#__PURE__*/ createWriteContract({ abi: oftAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"approve"`
 */
export const writeOftApprove = /*#__PURE__*/ createWriteContract({ abi: oftAbi, functionName: 'approve' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"lzReceive"`
 */
export const writeOftLzReceive = /*#__PURE__*/ createWriteContract({ abi: oftAbi, functionName: 'lzReceive' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"lzReceiveAndRevert"`
 */
export const writeOftLzReceiveAndRevert = /*#__PURE__*/ createWriteContract({
  abi: oftAbi,
  functionName: 'lzReceiveAndRevert',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"lzReceiveSimulate"`
 */
export const writeOftLzReceiveSimulate = /*#__PURE__*/ createWriteContract({
  abi: oftAbi,
  functionName: 'lzReceiveSimulate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeOftRenounceOwnership = /*#__PURE__*/ createWriteContract({
  abi: oftAbi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"send"`
 */
export const writeOftSend = /*#__PURE__*/ createWriteContract({ abi: oftAbi, functionName: 'send' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"setDelegate"`
 */
export const writeOftSetDelegate = /*#__PURE__*/ createWriteContract({ abi: oftAbi, functionName: 'setDelegate' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"setEnforcedOptions"`
 */
export const writeOftSetEnforcedOptions = /*#__PURE__*/ createWriteContract({
  abi: oftAbi,
  functionName: 'setEnforcedOptions',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"setMsgInspector"`
 */
export const writeOftSetMsgInspector = /*#__PURE__*/ createWriteContract({
  abi: oftAbi,
  functionName: 'setMsgInspector',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"setPeer"`
 */
export const writeOftSetPeer = /*#__PURE__*/ createWriteContract({ abi: oftAbi, functionName: 'setPeer' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"setPreCrime"`
 */
export const writeOftSetPreCrime = /*#__PURE__*/ createWriteContract({ abi: oftAbi, functionName: 'setPreCrime' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"transfer"`
 */
export const writeOftTransfer = /*#__PURE__*/ createWriteContract({ abi: oftAbi, functionName: 'transfer' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"transferFrom"`
 */
export const writeOftTransferFrom = /*#__PURE__*/ createWriteContract({ abi: oftAbi, functionName: 'transferFrom' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeOftTransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: oftAbi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oftAbi}__
 */
export const simulateOft = /*#__PURE__*/ createSimulateContract({ abi: oftAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"approve"`
 */
export const simulateOftApprove = /*#__PURE__*/ createSimulateContract({ abi: oftAbi, functionName: 'approve' })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"lzReceive"`
 */
export const simulateOftLzReceive = /*#__PURE__*/ createSimulateContract({ abi: oftAbi, functionName: 'lzReceive' })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"lzReceiveAndRevert"`
 */
export const simulateOftLzReceiveAndRevert = /*#__PURE__*/ createSimulateContract({
  abi: oftAbi,
  functionName: 'lzReceiveAndRevert',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"lzReceiveSimulate"`
 */
export const simulateOftLzReceiveSimulate = /*#__PURE__*/ createSimulateContract({
  abi: oftAbi,
  functionName: 'lzReceiveSimulate',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateOftRenounceOwnership = /*#__PURE__*/ createSimulateContract({
  abi: oftAbi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"send"`
 */
export const simulateOftSend = /*#__PURE__*/ createSimulateContract({ abi: oftAbi, functionName: 'send' })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"setDelegate"`
 */
export const simulateOftSetDelegate = /*#__PURE__*/ createSimulateContract({ abi: oftAbi, functionName: 'setDelegate' })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"setEnforcedOptions"`
 */
export const simulateOftSetEnforcedOptions = /*#__PURE__*/ createSimulateContract({
  abi: oftAbi,
  functionName: 'setEnforcedOptions',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"setMsgInspector"`
 */
export const simulateOftSetMsgInspector = /*#__PURE__*/ createSimulateContract({
  abi: oftAbi,
  functionName: 'setMsgInspector',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"setPeer"`
 */
export const simulateOftSetPeer = /*#__PURE__*/ createSimulateContract({ abi: oftAbi, functionName: 'setPeer' })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"setPreCrime"`
 */
export const simulateOftSetPreCrime = /*#__PURE__*/ createSimulateContract({ abi: oftAbi, functionName: 'setPreCrime' })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"transfer"`
 */
export const simulateOftTransfer = /*#__PURE__*/ createSimulateContract({ abi: oftAbi, functionName: 'transfer' })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"transferFrom"`
 */
export const simulateOftTransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: oftAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oftAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateOftTransferOwnership = /*#__PURE__*/ createSimulateContract({
  abi: oftAbi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link oftAbi}__
 */
export const watchOftEvent = /*#__PURE__*/ createWatchContractEvent({ abi: oftAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link oftAbi}__ and `eventName` set to `"Approval"`
 */
export const watchOftApprovalEvent = /*#__PURE__*/ createWatchContractEvent({ abi: oftAbi, eventName: 'Approval' })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link oftAbi}__ and `eventName` set to `"EnforcedOptionSet"`
 */
export const watchOftEnforcedOptionSetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: oftAbi,
  eventName: 'EnforcedOptionSet',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link oftAbi}__ and `eventName` set to `"MsgInspectorSet"`
 */
export const watchOftMsgInspectorSetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: oftAbi,
  eventName: 'MsgInspectorSet',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link oftAbi}__ and `eventName` set to `"OFTReceived"`
 */
export const watchOftOftReceivedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: oftAbi,
  eventName: 'OFTReceived',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link oftAbi}__ and `eventName` set to `"OFTSent"`
 */
export const watchOftOftSentEvent = /*#__PURE__*/ createWatchContractEvent({ abi: oftAbi, eventName: 'OFTSent' })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link oftAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchOftOwnershipTransferredEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: oftAbi,
  eventName: 'OwnershipTransferred',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link oftAbi}__ and `eventName` set to `"PeerSet"`
 */
export const watchOftPeerSetEvent = /*#__PURE__*/ createWatchContractEvent({ abi: oftAbi, eventName: 'PeerSet' })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link oftAbi}__ and `eventName` set to `"PreCrimeSet"`
 */
export const watchOftPreCrimeSetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: oftAbi,
  eventName: 'PreCrimeSet',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link oftAbi}__ and `eventName` set to `"Transfer"`
 */
export const watchOftTransferEvent = /*#__PURE__*/ createWatchContractEvent({ abi: oftAbi, eventName: 'Transfer' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftCoreAbi}__
 */
export const readOftCore = /*#__PURE__*/ createReadContract({ abi: oftCoreAbi })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"SEND"`
 */
export const readOftCoreSend = /*#__PURE__*/ createReadContract({ abi: oftCoreAbi, functionName: 'SEND' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"SEND_AND_CALL"`
 */
export const readOftCoreSendAndCall = /*#__PURE__*/ createReadContract({
  abi: oftCoreAbi,
  functionName: 'SEND_AND_CALL',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"allowInitializePath"`
 */
export const readOftCoreAllowInitializePath = /*#__PURE__*/ createReadContract({
  abi: oftCoreAbi,
  functionName: 'allowInitializePath',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"approvalRequired"`
 */
export const readOftCoreApprovalRequired = /*#__PURE__*/ createReadContract({
  abi: oftCoreAbi,
  functionName: 'approvalRequired',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"combineOptions"`
 */
export const readOftCoreCombineOptions = /*#__PURE__*/ createReadContract({
  abi: oftCoreAbi,
  functionName: 'combineOptions',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"decimalConversionRate"`
 */
export const readOftCoreDecimalConversionRate = /*#__PURE__*/ createReadContract({
  abi: oftCoreAbi,
  functionName: 'decimalConversionRate',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"endpoint"`
 */
export const readOftCoreEndpoint = /*#__PURE__*/ createReadContract({ abi: oftCoreAbi, functionName: 'endpoint' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"enforcedOptions"`
 */
export const readOftCoreEnforcedOptions = /*#__PURE__*/ createReadContract({
  abi: oftCoreAbi,
  functionName: 'enforcedOptions',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"isComposeMsgSender"`
 */
export const readOftCoreIsComposeMsgSender = /*#__PURE__*/ createReadContract({
  abi: oftCoreAbi,
  functionName: 'isComposeMsgSender',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"isPeer"`
 */
export const readOftCoreIsPeer = /*#__PURE__*/ createReadContract({ abi: oftCoreAbi, functionName: 'isPeer' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"msgInspector"`
 */
export const readOftCoreMsgInspector = /*#__PURE__*/ createReadContract({
  abi: oftCoreAbi,
  functionName: 'msgInspector',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"nextNonce"`
 */
export const readOftCoreNextNonce = /*#__PURE__*/ createReadContract({ abi: oftCoreAbi, functionName: 'nextNonce' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"oApp"`
 */
export const readOftCoreOApp = /*#__PURE__*/ createReadContract({ abi: oftCoreAbi, functionName: 'oApp' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"oAppVersion"`
 */
export const readOftCoreOAppVersion = /*#__PURE__*/ createReadContract({ abi: oftCoreAbi, functionName: 'oAppVersion' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"oftVersion"`
 */
export const readOftCoreOftVersion = /*#__PURE__*/ createReadContract({ abi: oftCoreAbi, functionName: 'oftVersion' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"owner"`
 */
export const readOftCoreOwner = /*#__PURE__*/ createReadContract({ abi: oftCoreAbi, functionName: 'owner' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"peers"`
 */
export const readOftCorePeers = /*#__PURE__*/ createReadContract({ abi: oftCoreAbi, functionName: 'peers' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"preCrime"`
 */
export const readOftCorePreCrime = /*#__PURE__*/ createReadContract({ abi: oftCoreAbi, functionName: 'preCrime' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"quoteOFT"`
 */
export const readOftCoreQuoteOft = /*#__PURE__*/ createReadContract({ abi: oftCoreAbi, functionName: 'quoteOFT' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"quoteSend"`
 */
export const readOftCoreQuoteSend = /*#__PURE__*/ createReadContract({ abi: oftCoreAbi, functionName: 'quoteSend' })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"sharedDecimals"`
 */
export const readOftCoreSharedDecimals = /*#__PURE__*/ createReadContract({
  abi: oftCoreAbi,
  functionName: 'sharedDecimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"token"`
 */
export const readOftCoreToken = /*#__PURE__*/ createReadContract({ abi: oftCoreAbi, functionName: 'token' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oftCoreAbi}__
 */
export const writeOftCore = /*#__PURE__*/ createWriteContract({ abi: oftCoreAbi })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"lzReceive"`
 */
export const writeOftCoreLzReceive = /*#__PURE__*/ createWriteContract({ abi: oftCoreAbi, functionName: 'lzReceive' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"lzReceiveAndRevert"`
 */
export const writeOftCoreLzReceiveAndRevert = /*#__PURE__*/ createWriteContract({
  abi: oftCoreAbi,
  functionName: 'lzReceiveAndRevert',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"lzReceiveSimulate"`
 */
export const writeOftCoreLzReceiveSimulate = /*#__PURE__*/ createWriteContract({
  abi: oftCoreAbi,
  functionName: 'lzReceiveSimulate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const writeOftCoreRenounceOwnership = /*#__PURE__*/ createWriteContract({
  abi: oftCoreAbi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"send"`
 */
export const writeOftCoreSend = /*#__PURE__*/ createWriteContract({ abi: oftCoreAbi, functionName: 'send' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"setDelegate"`
 */
export const writeOftCoreSetDelegate = /*#__PURE__*/ createWriteContract({
  abi: oftCoreAbi,
  functionName: 'setDelegate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"setEnforcedOptions"`
 */
export const writeOftCoreSetEnforcedOptions = /*#__PURE__*/ createWriteContract({
  abi: oftCoreAbi,
  functionName: 'setEnforcedOptions',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"setMsgInspector"`
 */
export const writeOftCoreSetMsgInspector = /*#__PURE__*/ createWriteContract({
  abi: oftCoreAbi,
  functionName: 'setMsgInspector',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"setPeer"`
 */
export const writeOftCoreSetPeer = /*#__PURE__*/ createWriteContract({ abi: oftCoreAbi, functionName: 'setPeer' })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"setPreCrime"`
 */
export const writeOftCoreSetPreCrime = /*#__PURE__*/ createWriteContract({
  abi: oftCoreAbi,
  functionName: 'setPreCrime',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const writeOftCoreTransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: oftCoreAbi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oftCoreAbi}__
 */
export const simulateOftCore = /*#__PURE__*/ createSimulateContract({ abi: oftCoreAbi })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"lzReceive"`
 */
export const simulateOftCoreLzReceive = /*#__PURE__*/ createSimulateContract({
  abi: oftCoreAbi,
  functionName: 'lzReceive',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"lzReceiveAndRevert"`
 */
export const simulateOftCoreLzReceiveAndRevert = /*#__PURE__*/ createSimulateContract({
  abi: oftCoreAbi,
  functionName: 'lzReceiveAndRevert',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"lzReceiveSimulate"`
 */
export const simulateOftCoreLzReceiveSimulate = /*#__PURE__*/ createSimulateContract({
  abi: oftCoreAbi,
  functionName: 'lzReceiveSimulate',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const simulateOftCoreRenounceOwnership = /*#__PURE__*/ createSimulateContract({
  abi: oftCoreAbi,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"send"`
 */
export const simulateOftCoreSend = /*#__PURE__*/ createSimulateContract({ abi: oftCoreAbi, functionName: 'send' })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"setDelegate"`
 */
export const simulateOftCoreSetDelegate = /*#__PURE__*/ createSimulateContract({
  abi: oftCoreAbi,
  functionName: 'setDelegate',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"setEnforcedOptions"`
 */
export const simulateOftCoreSetEnforcedOptions = /*#__PURE__*/ createSimulateContract({
  abi: oftCoreAbi,
  functionName: 'setEnforcedOptions',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"setMsgInspector"`
 */
export const simulateOftCoreSetMsgInspector = /*#__PURE__*/ createSimulateContract({
  abi: oftCoreAbi,
  functionName: 'setMsgInspector',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"setPeer"`
 */
export const simulateOftCoreSetPeer = /*#__PURE__*/ createSimulateContract({ abi: oftCoreAbi, functionName: 'setPeer' })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"setPreCrime"`
 */
export const simulateOftCoreSetPreCrime = /*#__PURE__*/ createSimulateContract({
  abi: oftCoreAbi,
  functionName: 'setPreCrime',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link oftCoreAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const simulateOftCoreTransferOwnership = /*#__PURE__*/ createSimulateContract({
  abi: oftCoreAbi,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link oftCoreAbi}__
 */
export const watchOftCoreEvent = /*#__PURE__*/ createWatchContractEvent({ abi: oftCoreAbi })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link oftCoreAbi}__ and `eventName` set to `"EnforcedOptionSet"`
 */
export const watchOftCoreEnforcedOptionSetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: oftCoreAbi,
  eventName: 'EnforcedOptionSet',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link oftCoreAbi}__ and `eventName` set to `"MsgInspectorSet"`
 */
export const watchOftCoreMsgInspectorSetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: oftCoreAbi,
  eventName: 'MsgInspectorSet',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link oftCoreAbi}__ and `eventName` set to `"OFTReceived"`
 */
export const watchOftCoreOftReceivedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: oftCoreAbi,
  eventName: 'OFTReceived',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link oftCoreAbi}__ and `eventName` set to `"OFTSent"`
 */
export const watchOftCoreOftSentEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: oftCoreAbi,
  eventName: 'OFTSent',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link oftCoreAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const watchOftCoreOwnershipTransferredEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: oftCoreAbi,
  eventName: 'OwnershipTransferred',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link oftCoreAbi}__ and `eventName` set to `"PeerSet"`
 */
export const watchOftCorePeerSetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: oftCoreAbi,
  eventName: 'PeerSet',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link oftCoreAbi}__ and `eventName` set to `"PreCrimeSet"`
 */
export const watchOftCorePreCrimeSetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: oftCoreAbi,
  eventName: 'PreCrimeSet',
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
 * Wraps __{@link readContract}__ with `abi` set to __{@link ustcPlusAbi}__
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const readUstcPlus = /*#__PURE__*/ createReadContract({ abi: ustcPlusAbi, address: ustcPlusAddress })

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"SEND"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const readUstcPlusSend = /*#__PURE__*/ createReadContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'SEND',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"SEND_AND_CALL"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const readUstcPlusSendAndCall = /*#__PURE__*/ createReadContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'SEND_AND_CALL',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"allowInitializePath"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const readUstcPlusAllowInitializePath = /*#__PURE__*/ createReadContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'allowInitializePath',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"allowance"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const readUstcPlusAllowance = /*#__PURE__*/ createReadContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'allowance',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"approvalRequired"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const readUstcPlusApprovalRequired = /*#__PURE__*/ createReadContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'approvalRequired',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"balanceOf"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const readUstcPlusBalanceOf = /*#__PURE__*/ createReadContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"combineOptions"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const readUstcPlusCombineOptions = /*#__PURE__*/ createReadContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'combineOptions',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"decimalConversionRate"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const readUstcPlusDecimalConversionRate = /*#__PURE__*/ createReadContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'decimalConversionRate',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"decimals"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const readUstcPlusDecimals = /*#__PURE__*/ createReadContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'decimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"endpoint"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const readUstcPlusEndpoint = /*#__PURE__*/ createReadContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'endpoint',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"enforcedOptions"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const readUstcPlusEnforcedOptions = /*#__PURE__*/ createReadContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'enforcedOptions',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"isComposeMsgSender"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const readUstcPlusIsComposeMsgSender = /*#__PURE__*/ createReadContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'isComposeMsgSender',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"isPeer"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const readUstcPlusIsPeer = /*#__PURE__*/ createReadContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'isPeer',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"lpManager"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const readUstcPlusLpManager = /*#__PURE__*/ createReadContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'lpManager',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"lpNft"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const readUstcPlusLpNft = /*#__PURE__*/ createReadContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'lpNft',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"msgInspector"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const readUstcPlusMsgInspector = /*#__PURE__*/ createReadContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'msgInspector',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"name"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const readUstcPlusName = /*#__PURE__*/ createReadContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'name',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"nextNonce"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const readUstcPlusNextNonce = /*#__PURE__*/ createReadContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'nextNonce',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"oApp"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const readUstcPlusOApp = /*#__PURE__*/ createReadContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'oApp',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"oAppVersion"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const readUstcPlusOAppVersion = /*#__PURE__*/ createReadContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'oAppVersion',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"oftVersion"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const readUstcPlusOftVersion = /*#__PURE__*/ createReadContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'oftVersion',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"owner"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const readUstcPlusOwner = /*#__PURE__*/ createReadContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'owner',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"peers"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const readUstcPlusPeers = /*#__PURE__*/ createReadContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'peers',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"preCrime"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const readUstcPlusPreCrime = /*#__PURE__*/ createReadContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'preCrime',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"quoteOFT"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const readUstcPlusQuoteOft = /*#__PURE__*/ createReadContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'quoteOFT',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"quoteSend"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const readUstcPlusQuoteSend = /*#__PURE__*/ createReadContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'quoteSend',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"sharedDecimals"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const readUstcPlusSharedDecimals = /*#__PURE__*/ createReadContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'sharedDecimals',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"symbol"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const readUstcPlusSymbol = /*#__PURE__*/ createReadContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'symbol',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"token"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const readUstcPlusToken = /*#__PURE__*/ createReadContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'token',
})

/**
 * Wraps __{@link readContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"totalSupply"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const readUstcPlusTotalSupply = /*#__PURE__*/ createReadContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ustcPlusAbi}__
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const writeUstcPlus = /*#__PURE__*/ createWriteContract({ abi: ustcPlusAbi, address: ustcPlusAddress })

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const writeUstcPlusApprove = /*#__PURE__*/ createWriteContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"burnByLpManager"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const writeUstcPlusBurnByLpManager = /*#__PURE__*/ createWriteContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'burnByLpManager',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"lzReceive"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const writeUstcPlusLzReceive = /*#__PURE__*/ createWriteContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'lzReceive',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"lzReceiveAndRevert"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const writeUstcPlusLzReceiveAndRevert = /*#__PURE__*/ createWriteContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'lzReceiveAndRevert',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"lzReceiveSimulate"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const writeUstcPlusLzReceiveSimulate = /*#__PURE__*/ createWriteContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'lzReceiveSimulate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"mintByLpManager"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const writeUstcPlusMintByLpManager = /*#__PURE__*/ createWriteContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'mintByLpManager',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const writeUstcPlusRenounceOwnership = /*#__PURE__*/ createWriteContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"send"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const writeUstcPlusSend = /*#__PURE__*/ createWriteContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'send',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"setDelegate"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const writeUstcPlusSetDelegate = /*#__PURE__*/ createWriteContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'setDelegate',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"setEnforcedOptions"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const writeUstcPlusSetEnforcedOptions = /*#__PURE__*/ createWriteContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'setEnforcedOptions',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"setMsgInspector"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const writeUstcPlusSetMsgInspector = /*#__PURE__*/ createWriteContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'setMsgInspector',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"setPeer"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const writeUstcPlusSetPeer = /*#__PURE__*/ createWriteContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'setPeer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"setPreCrime"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const writeUstcPlusSetPreCrime = /*#__PURE__*/ createWriteContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'setPreCrime',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const writeUstcPlusTransfer = /*#__PURE__*/ createWriteContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"transferByLpNft"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const writeUstcPlusTransferByLpNft = /*#__PURE__*/ createWriteContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'transferByLpNft',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const writeUstcPlusTransferFrom = /*#__PURE__*/ createWriteContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link writeContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const writeUstcPlusTransferOwnership = /*#__PURE__*/ createWriteContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ustcPlusAbi}__
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const simulateUstcPlus = /*#__PURE__*/ createSimulateContract({ abi: ustcPlusAbi, address: ustcPlusAddress })

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"approve"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const simulateUstcPlusApprove = /*#__PURE__*/ createSimulateContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'approve',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"burnByLpManager"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const simulateUstcPlusBurnByLpManager = /*#__PURE__*/ createSimulateContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'burnByLpManager',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"lzReceive"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const simulateUstcPlusLzReceive = /*#__PURE__*/ createSimulateContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'lzReceive',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"lzReceiveAndRevert"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const simulateUstcPlusLzReceiveAndRevert = /*#__PURE__*/ createSimulateContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'lzReceiveAndRevert',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"lzReceiveSimulate"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const simulateUstcPlusLzReceiveSimulate = /*#__PURE__*/ createSimulateContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'lzReceiveSimulate',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"mintByLpManager"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const simulateUstcPlusMintByLpManager = /*#__PURE__*/ createSimulateContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'mintByLpManager',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const simulateUstcPlusRenounceOwnership = /*#__PURE__*/ createSimulateContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'renounceOwnership',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"send"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const simulateUstcPlusSend = /*#__PURE__*/ createSimulateContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'send',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"setDelegate"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const simulateUstcPlusSetDelegate = /*#__PURE__*/ createSimulateContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'setDelegate',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"setEnforcedOptions"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const simulateUstcPlusSetEnforcedOptions = /*#__PURE__*/ createSimulateContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'setEnforcedOptions',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"setMsgInspector"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const simulateUstcPlusSetMsgInspector = /*#__PURE__*/ createSimulateContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'setMsgInspector',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"setPeer"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const simulateUstcPlusSetPeer = /*#__PURE__*/ createSimulateContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'setPeer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"setPreCrime"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const simulateUstcPlusSetPreCrime = /*#__PURE__*/ createSimulateContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'setPreCrime',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"transfer"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const simulateUstcPlusTransfer = /*#__PURE__*/ createSimulateContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'transfer',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"transferByLpNft"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const simulateUstcPlusTransferByLpNft = /*#__PURE__*/ createSimulateContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'transferByLpNft',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"transferFrom"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const simulateUstcPlusTransferFrom = /*#__PURE__*/ createSimulateContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link simulateContract}__ with `abi` set to __{@link ustcPlusAbi}__ and `functionName` set to `"transferOwnership"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const simulateUstcPlusTransferOwnership = /*#__PURE__*/ createSimulateContract({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  functionName: 'transferOwnership',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ustcPlusAbi}__
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const watchUstcPlusEvent = /*#__PURE__*/ createWatchContractEvent({ abi: ustcPlusAbi, address: ustcPlusAddress })

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ustcPlusAbi}__ and `eventName` set to `"Approval"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const watchUstcPlusApprovalEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  eventName: 'Approval',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ustcPlusAbi}__ and `eventName` set to `"EnforcedOptionSet"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const watchUstcPlusEnforcedOptionSetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  eventName: 'EnforcedOptionSet',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ustcPlusAbi}__ and `eventName` set to `"MsgInspectorSet"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const watchUstcPlusMsgInspectorSetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  eventName: 'MsgInspectorSet',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ustcPlusAbi}__ and `eventName` set to `"OFTReceived"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const watchUstcPlusOftReceivedEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  eventName: 'OFTReceived',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ustcPlusAbi}__ and `eventName` set to `"OFTSent"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const watchUstcPlusOftSentEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  eventName: 'OFTSent',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ustcPlusAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const watchUstcPlusOwnershipTransferredEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  eventName: 'OwnershipTransferred',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ustcPlusAbi}__ and `eventName` set to `"PeerSet"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const watchUstcPlusPeerSetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  eventName: 'PeerSet',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ustcPlusAbi}__ and `eventName` set to `"PreCrimeSet"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const watchUstcPlusPreCrimeSetEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  eventName: 'PreCrimeSet',
})

/**
 * Wraps __{@link watchContractEvent}__ with `abi` set to __{@link ustcPlusAbi}__ and `eventName` set to `"Transfer"`
 *
 * - [__View Contract on Bnb Smart Chain Bsc Scan__](https://bscscan.com/address/0x354043962Ff73c9c5a0b25F467CdF78f2a20e74D)
 * - [__View Contract on Polygon Polygon Scan__](https://polygonscan.com/address/0x606689c20562aC06202B8AB2Ad9029c961C2E267)
 * - [__View Contract on Sepolia Etherscan__](https://sepolia.etherscan.io/address/0x05df326185A182274058a42cBe613c628f1506B4)
 */
export const watchUstcPlusTransferEvent = /*#__PURE__*/ createWatchContractEvent({
  abi: ustcPlusAbi,
  address: ustcPlusAddress,
  eventName: 'Transfer',
})
