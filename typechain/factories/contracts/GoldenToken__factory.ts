/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GoldenToken,
  GoldenTokenInterface,
} from "../../contracts/GoldenToken";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addedBurner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "addedBy",
        type: "address",
      },
    ],
    name: "BurnerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "removedBurner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "removedBy",
        type: "address",
      },
    ],
    name: "BurnerRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "fromDelegate",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toDelegate",
        type: "address",
      },
    ],
    name: "DelegateChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    name: "DelegateVotesChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addedMinter",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "addedBy",
        type: "address",
      },
    ],
    name: "MinterAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "removedMinter",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "removedBy",
        type: "address",
      },
    ],
    name: "MinterRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addedOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "addedBy",
        type: "address",
      },
    ],
    name: "OwnerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "removedOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "removedBy",
        type: "address",
      },
    ],
    name: "OwnerRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "addBurner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "addMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "addOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "pos",
        type: "uint32",
      },
    ],
    name: "checkpoints",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "fromBlock",
            type: "uint32",
          },
          {
            internalType: "uint224",
            name: "votes",
            type: "uint224",
          },
        ],
        internalType: "struct ERC20VotesUpgradeable.Checkpoint",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "delegateBySig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "delegates",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPastTotalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPastVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "initialSupply",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isBurner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isMinter",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isOwner",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "numCheckpoints",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "removeBurner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "removeMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "removeOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506127d4806100206000396000f3fe608060405234801561001057600080fd5b50600436106102065760003560e01c80637065cb481161011a578063a457c2d7116100ad578063d505accf1161007c578063d505accf14610490578063dd62ed3e146104a3578063f1127ed8146104b6578063f44637ba146104f3578063fe4b84df1461050657600080fd5b8063a457c2d714610444578063a9059cbb14610457578063aa271e1a1461046a578063c3cda5201461047d57600080fd5b806395d89b41116100e957806395d89b4114610403578063983b2d561461040b5780639ab24eb01461041e5780639dc29fac1461043157600080fd5b80637065cb48146103a157806370a08231146103b45780637ecebe00146103dd5780638e539e8c146103f057600080fd5b8063313ce5671161019d57806340c10f191161016c57806340c10f19146102fc5780634334614a1461030f578063587cde1e146103225780635c19a95c146103665780636fcfff451461037957600080fd5b8063313ce567146102bf5780633644e515146102ce57806339509351146102d65780633a46b1a8146102e957600080fd5b806318160ddd116101d957806318160ddd1461027457806323b872dd146102865780632f54bf6e146102995780633092afd5146102ac57600080fd5b8063028468581461020b57806306fdde0314610220578063095ea7b31461023e578063173825d914610261575b600080fd5b61021e6102193660046122f5565b610519565b005b610228610553565b6040516102359190612310565b60405180910390f35b61025161024c36600461235e565b6105e5565b6040519015158152602001610235565b61021e61026f3660046122f5565b6105ff565b6035545b604051908152602001610235565b610251610294366004612388565b61062d565b6102516102a73660046122f5565b610651565b61021e6102ba3660046122f5565b61065e565b60405160128152602001610235565b61027861068c565b6102516102e436600461235e565b61069b565b6102786102f736600461235e565b6106bd565b61021e61030a36600461235e565b610737565b61025161031d3660046122f5565b6107b3565b61034e6103303660046122f5565b6001600160a01b03908116600090815260cc60205260409020541690565b6040516001600160a01b039091168152602001610235565b61021e6103743660046122f5565b6107c1565b61038c6103873660046122f5565b6107cb565b60405163ffffffff9091168152602001610235565b61021e6103af3660046122f5565b6107ed565b6102786103c23660046122f5565b6001600160a01b031660009081526033602052604090205490565b6102786103eb3660046122f5565b61081b565b6102786103fe3660046123c4565b610839565b610228610895565b61021e6104193660046122f5565b6108a4565b61027861042c3660046122f5565b6108d2565b61021e61043f36600461235e565b6108e8565b61025161045236600461235e565b6108f2565b61025161046536600461235e565b61096d565b6102516104783660046122f5565b61097b565b61021e61048b3660046123ee565b610989565b61021e61049e366004612446565b610abf565b6102786104b13660046124b0565b610c23565b6104c96104c43660046124e3565b610c4e565b60408051825163ffffffff1681526020928301516001600160e01b03169281019290925201610235565b61021e6105013660046122f5565b610cd2565b61021e6105143660046123c4565b610d00565b61052233610651565b6105475760405162461bcd60e51b815260040161053e90612523565b60405180910390fd5b61055081610e99565b50565b60606036805461056290612571565b80601f016020809104026020016040519081016040528092919081815260200182805461058e90612571565b80156105db5780601f106105b0576101008083540402835291602001916105db565b820191906000526020600020905b8154815290600101906020018083116105be57829003601f168201915b5050505050905090565b6000336105f3818585610ede565b60019150505b92915050565b61060833610651565b6106245760405162461bcd60e51b815260040161053e90612523565b61055081611002565b60003361063b858285611046565b6106468585856110c0565b506001949350505050565b60006105f960fe83611294565b61066733610651565b6106835760405162461bcd60e51b815260040161053e90612523565b61055081611317565b600061069661135c565b905090565b6000336105f38185856106ae8383610c23565b6106b891906125bb565b610ede565b600043821061070e5760405162461bcd60e51b815260206004820152601f60248201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e656400604482015260640161053e565b6001600160a01b038316600090815260cd6020526040902061073090836113d7565b9392505050565b6107403361097b565b6107a55760405162461bcd60e51b815260206004820152603060248201527f4d696e746572526f6c653a2063616c6c657220646f6573206e6f74206861766560448201526f20746865204d696e74657220726f6c6560801b606482015260840161053e565b6107af8282611494565b5050565b60006105f961016283611294565b610550338261149e565b6001600160a01b038116600090815260cd60205260408120546105f990611518565b6107f633610651565b6108125760405162461bcd60e51b815260040161053e90612523565b61055081611581565b6001600160a01b0381166000908152609960205260408120546105f9565b600043821061088a5760405162461bcd60e51b815260206004820152601f60248201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e656400604482015260640161053e565b6105f960ce836113d7565b60606037805461056290612571565b6108ad33610651565b6108c95760405162461bcd60e51b815260040161053e90612523565b610550816115c5565b60006108dd8261160a565b6105f99060016125bb565b6107af8282611691565b600033816109008286610c23565b9050838110156109605760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161053e565b6106468286868403610ede565b6000336105f38185856110c0565b60006105f961013083611294565b834211156109d95760405162461bcd60e51b815260206004820152601d60248201527f4552433230566f7465733a207369676e61747572652065787069726564000000604482015260640161053e565b604080517fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60208201526001600160a01b038816918101919091526060810186905260808101859052600090610a5390610a4b9060a0016040516020818303038152906040528051906020012061169b565b8585856116e9565b9050610a5e81611711565b8614610aac5760405162461bcd60e51b815260206004820152601960248201527f4552433230566f7465733a20696e76616c6964206e6f6e636500000000000000604482015260640161053e565b610ab6818861149e565b50505050505050565b83421115610b0f5760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e65000000604482015260640161053e565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9888888610b3e8c611711565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e0016040516020818303038152906040528051906020012090506000610b998261169b565b90506000610ba9828787876116e9565b9050896001600160a01b0316816001600160a01b031614610c0c5760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604482015260640161053e565b610c178a8a8a610ede565b50505050505050505050565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b60408051808201909152600080825260208201526001600160a01b038316600090815260cd60205260409020805463ffffffff8416908110610c9257610c926125ce565b60009182526020918290206040805180820190915291015463ffffffff8116825264010000000090046001600160e01b0316918101919091529392505050565b610cdb33610651565b610cf75760405162461bcd60e51b815260040161053e90612523565b61055081611739565b600054610100900460ff1615808015610d205750600054600160ff909116105b80610d3a5750303b158015610d3a575060005460ff166001145b610d9d5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161053e565b6000805460ff191660011790558015610dc0576000805461ff0019166101001790555b610e086040518060400160405280600b81526020016a23b7b63232b72a37b5b2b760a91b8152506040518060400160405280600381526020016211d31160ea1b81525061177e565b610e346040518060400160405280600b81526020016a23b7b63232b72a37b5b2b760a91b8152506117af565b610e3d33611581565b610e46336115c5565b610e503383611494565b80156107af576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b610ea5610162826117f9565b60405133906001600160a01b038316907f85222465e0d438163a28671b59fc9ebeb03bf39f880ddd36c8315da7512b31c090600090a350565b6001600160a01b038316610f405760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161053e565b6001600160a01b038216610fa15760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161053e565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b61100d60fe826117f9565b60405133906001600160a01b038316907fe594d081b4382713733fe631966432c9cea5199afb2db5c3c1931f9f9300367990600090a350565b60006110528484610c23565b905060001981146110ba57818110156110ad5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161053e565b6110ba8484848403610ede565b50505050565b6001600160a01b0383166111245760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161053e565b6001600160a01b0382166111865760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161053e565b6001600160a01b038316600090815260336020526040902054818110156111fe5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161053e565b6001600160a01b038085166000908152603360205260408082208585039055918516815290812080548492906112359084906125bb565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161128191815260200190565b60405180910390a36110ba848484611880565b60006001600160a01b0382166112f75760405162461bcd60e51b815260206004820152602260248201527f526f6c65733a206163636f756e7420697320746865207a65726f206164647265604482015261737360f01b606482015260840161053e565b506001600160a01b03166000908152602091909152604090205460ff1690565b611323610130826117f9565b60405133906001600160a01b038316907f4b5ef9a786cf64a7d82ebcf2d5132667edc9faef4ac36260d9a9e52c526b623290600090a350565b60006106967f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f61138b60655490565b6066546040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090509392505050565b8154600090815b8181101561143b5760006113f2828461188b565b905084868281548110611407576114076125ce565b60009182526020909120015463ffffffff16111561142757809250611435565b6114328160016125bb565b91505b506113de565b811561147f578461144d6001846125e4565b8154811061145d5761145d6125ce565b60009182526020909120015464010000000090046001600160e01b0316611482565b60005b6001600160e01b031695945050505050565b6107af82826118a6565b6001600160a01b03828116600081815260cc6020818152604080842080546033845282862054949093528787166001600160a01b03198416811790915590519190951694919391928592917f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a46110ba828483611930565b600063ffffffff82111561157d5760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201526532206269747360d01b606482015260840161053e565b5090565b61158c60fe82611a6d565b60405133906001600160a01b038316907fc82bdbbf677a2462f2a7e22e4ba9abd209496b69cd7b868b3b1d28f76e09a40a90600090a350565b6115d161013082611a6d565b60405133906001600160a01b038316907f3c091dafb1d99e4a4c333024492eac3b2cd8bf921a3dd547c937db33be307bb890600090a350565b6001600160a01b038116600090815260cd6020526040812054801561167e576001600160a01b038316600090815260cd6020526040902061164c6001836125e4565b8154811061165c5761165c6125ce565b60009182526020909120015464010000000090046001600160e01b0316611681565b60005b6001600160e01b03169392505050565b6107af8282611b35565b60006105f96116a861135c565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b60008060006116fa87878787611b4d565b9150915061170781611c3a565b5095945050505050565b6001600160a01b03811660009081526099602052604090208054600181018255905b50919050565b61174561016282611a6d565b60405133906001600160a01b038316907f86515ebaad527298e98929c064c075f5a2604cc80afc0db29e73c01a36f8e98c90600090a350565b600054610100900460ff166117a55760405162461bcd60e51b815260040161053e906125f7565b6107af8282611df0565b600054610100900460ff166117d65760405162461bcd60e51b815260040161053e906125f7565b61055081604051806040016040528060018152602001603160f81b815250611e30565b6118038282611294565b6118595760405162461bcd60e51b815260206004820152602160248201527f526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c6044820152606560f81b606482015260840161053e565b6001600160a01b0316600090815260209190915260409020805460ff19169055565b505050565b61187b838383611e71565b600061189a6002848418612642565b610730908484166125bb565b6118b08282611ea3565b6035546001600160e01b0310156119225760405162461bcd60e51b815260206004820152603060248201527f4552433230566f7465733a20746f74616c20737570706c79207269736b73206f60448201526f766572666c6f77696e6720766f74657360801b606482015260840161053e565b6110ba60ce611f8a83611f96565b816001600160a01b0316836001600160a01b0316141580156119525750600081115b1561187b576001600160a01b038316156119e0576001600160a01b038316600090815260cd60205260408120819061198d9061210f85611f96565b91509150846001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a72483836040516119d5929190918252602082015260400190565b60405180910390a250505b6001600160a01b0382161561187b576001600160a01b038216600090815260cd602052604081208190611a1690611f8a85611f96565b91509150836001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611a5e929190918252602082015260400190565b60405180910390a25050505050565b6001600160a01b038116611ab95760405162461bcd60e51b8152602060048201526013602482015272496e76616c696420307830206164647265737360681b604482015260640161053e565b611ac38282611294565b15611b105760405162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015260640161053e565b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b611b3f828261211b565b6110ba60ce61210f83611f96565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611b845750600090506003611c31565b8460ff16601b14158015611b9c57508460ff16601c14155b15611bad5750600090506004611c31565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611c01573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611c2a57600060019250925050611c31565b9150600090505b94509492505050565b6000816004811115611c4e57611c4e612664565b03611c565750565b6001816004811115611c6a57611c6a612664565b03611cb75760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015260640161053e565b6002816004811115611ccb57611ccb612664565b03611d185760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161053e565b6003816004811115611d2c57611d2c612664565b03611d845760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b606482015260840161053e565b6004816004811115611d9857611d98612664565b036105505760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b606482015260840161053e565b600054610100900460ff16611e175760405162461bcd60e51b815260040161053e906125f7565b6036611e2383826126de565b50603761187b82826126de565b600054610100900460ff16611e575760405162461bcd60e51b815260040161053e906125f7565b815160209283012081519190920120606591909155606655565b6001600160a01b03838116600090815260cc602052604080822054858416835291205461187b92918216911683611930565b6001600160a01b038216611ef95760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161053e565b8060356000828254611f0b91906125bb565b90915550506001600160a01b03821660009081526033602052604081208054839290611f389084906125bb565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a36107af60008383611880565b600061073082846125bb565b825460009081908015611fe15785611faf6001836125e4565b81548110611fbf57611fbf6125ce565b60009182526020909120015464010000000090046001600160e01b0316611fe4565b60005b6001600160e01b03169250611ffd83858763ffffffff16565b915060008111801561203b575043866120176001846125e4565b81548110612027576120276125ce565b60009182526020909120015463ffffffff16145b1561209b5761204982612270565b866120556001846125e4565b81548110612065576120656125ce565b9060005260206000200160000160046101000a8154816001600160e01b0302191690836001600160e01b03160217905550612106565b8560405180604001604052806120b043611518565b63ffffffff1681526020016120c485612270565b6001600160e01b0390811690915282546001810184556000938452602093849020835194909301519091166401000000000263ffffffff909316929092179101555b50935093915050565b600061073082846125e4565b6001600160a01b03821661217b5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161053e565b6001600160a01b038216600090815260336020526040902054818110156121ef5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161053e565b6001600160a01b038316600090815260336020526040812083830390556035805484929061221e9084906125e4565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a361187b83600084611880565b60006001600160e01b0382111561157d5760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20326044820152663234206269747360c81b606482015260840161053e565b80356001600160a01b03811681146122f057600080fd5b919050565b60006020828403121561230757600080fd5b610730826122d9565b600060208083528351808285015260005b8181101561233d57858101830151858201604001528201612321565b506000604082860101526040601f19601f8301168501019250505092915050565b6000806040838503121561237157600080fd5b61237a836122d9565b946020939093013593505050565b60008060006060848603121561239d57600080fd5b6123a6846122d9565b92506123b4602085016122d9565b9150604084013590509250925092565b6000602082840312156123d657600080fd5b5035919050565b803560ff811681146122f057600080fd5b60008060008060008060c0878903121561240757600080fd5b612410876122d9565b9550602087013594506040870135935061242c606088016123dd565b92506080870135915060a087013590509295509295509295565b600080600080600080600060e0888a03121561246157600080fd5b61246a886122d9565b9650612478602089016122d9565b95506040880135945060608801359350612494608089016123dd565b925060a0880135915060c0880135905092959891949750929550565b600080604083850312156124c357600080fd5b6124cc836122d9565b91506124da602084016122d9565b90509250929050565b600080604083850312156124f657600080fd5b6124ff836122d9565b9150602083013563ffffffff8116811461251857600080fd5b809150509250929050565b6020808252602e908201527f4f776e6572526f6c653a2063616c6c657220646f6573206e6f7420686176652060408201526d746865204f776e657220726f6c6560901b606082015260800190565b600181811c9082168061258557607f821691505b60208210810361173357634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b808201808211156105f9576105f96125a5565b634e487b7160e01b600052603260045260246000fd5b818103818111156105f9576105f96125a5565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60008261265f57634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b601f82111561187b57600081815260208120601f850160051c810160208610156126b75750805b601f850160051c820191505b818110156126d6578281556001016126c3565b505050505050565b815167ffffffffffffffff8111156126f8576126f861267a565b61270c816127068454612571565b84612690565b602080601f83116001811461274157600084156127295750858301515b600019600386901b1c1916600185901b1785556126d6565b600085815260208120601f198616915b8281101561277057888601518255948401946001909101908401612751565b508582101561278e5787850151600019600388901b60f8161c191681555b5050505050600190811b0190555056fea2646970667358221220d29bdca9c1ac2c1bb47c243ab71fbe2ef99ce27d1fa8eb1fcbf2e7140263036064736f6c63430008100033";

type GoldenTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GoldenTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GoldenToken__factory extends ContractFactory {
  constructor(...args: GoldenTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GoldenToken> {
    return super.deploy(overrides || {}) as Promise<GoldenToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): GoldenToken {
    return super.attach(address) as GoldenToken;
  }
  override connect(signer: Signer): GoldenToken__factory {
    return super.connect(signer) as GoldenToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GoldenTokenInterface {
    return new utils.Interface(_abi) as GoldenTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GoldenToken {
    return new Contract(address, _abi, signerOrProvider) as GoldenToken;
  }
}
