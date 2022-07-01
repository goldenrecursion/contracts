/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GoldenTokenV1, GoldenTokenV1Interface } from "../GoldenTokenV1";

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
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Slashed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Staked",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "UnStaked",
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
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "_slash",
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
    name: "_stakeOf",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "_unstake",
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
        components: [
          {
            internalType: "address",
            name: "addr",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct StakeableUpgradeableV1.User[]",
        name: "users",
        type: "tuple[]",
      },
      {
        internalType: "uint256",
        name: "totalAmount",
        type: "uint256",
      },
    ],
    name: "bulkStake",
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
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "renounceOwnership",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "slash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "stake",
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
    name: "stakeOf",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061290c806100206000396000f3fe608060405234801561001057600080fd5b50600436106102065760003560e01c8063715018a61161011a578063a694fc3a116100ad578063dd62ed3e1161007c578063dd62ed3e1461049a578063eb36854e146104ad578063f1127ed8146104c0578063f2fde38b146104fd578063fe4b84df1461051057600080fd5b8063a694fc3a1461044e578063a9059cbb14610461578063c3cda52014610474578063d505accf1461048757600080fd5b80638e539e8c116100e95780638e539e8c1461040d57806395d89b41146104205780639ab24eb014610428578063a457c2d71461043b57600080fd5b8063715018a6146103ce5780637cb569de146103d65780637ecebe00146103e95780638da5cb5b146103fc57600080fd5b80633644e5151161019d578063587cde1e1161016c578063587cde1e146103135780635c19a95c146103575780636c8848c21461036a5780636fcfff451461037d57806370a08231146103a557600080fd5b80633644e515146102d257806339509351146102da5780633a46b1a8146102ed578063426233601461030057600080fd5b806323b62302116101d957806323b623021461027357806323b872dd1461029d5780632e17de78146102b0578063313ce567146102c357600080fd5b806302fb4d851461020b57806306fdde0314610220578063095ea7b31461023e57806318160ddd14610261575b600080fd5b61021e610219366004612475565b610523565b005b610228610580565b604051610235919061249f565b60405180910390f35b61025161024c366004612475565b610612565b6040519015158152602001610235565b6035545b604051908152602001610235565b6102656102813660046124f4565b6001600160a01b03166000908152610130602052604090205490565b6102516102ab36600461250f565b61062a565b61021e6102be36600461254b565b61064e565b60405160128152602001610235565b610265610665565b6102516102e8366004612475565b610674565b6102656102fb366004612475565b610696565b61026561030e3660046124f4565b610710565b61033f6103213660046124f4565b6001600160a01b03908116600090815260cc60205260409020541690565b6040516001600160a01b039091168152602001610235565b61021e6103653660046124f4565b610731565b61021e610378366004612564565b61073b565b61039061038b3660046124f4565b610780565b60405163ffffffff9091168152602001610235565b6102656103b33660046124f4565b6001600160a01b031660009081526033602052604090205490565b61021e6107a2565b61021e6103e4366004612475565b6107d8565b6102656103f73660046124f4565b6108db565b60fe546001600160a01b031661033f565b61026561041b36600461254b565b6108f9565b610228610955565b6102656104363660046124f4565b610964565b610251610449366004612475565b610991565b61021e61045c36600461254b565b610a0c565b61025161046f366004612475565b610a23565b61021e6104823660046125f0565b610a31565b61021e610495366004612648565b610b67565b6102656104a83660046126b2565b610ccb565b61021e6104bb36600461254b565b610cf6565b6104d36104ce3660046126e5565b610db4565b60408051825163ffffffff1681526020928301516001600160e01b03169281019290925201610235565b61021e61050b3660046124f4565b610e38565b61021e61051e36600461254b565b610ed0565b60fe546001600160a01b031633146105565760405162461bcd60e51b815260040161054d90612725565b60405180910390fd5b61056082826107d8565b61057b61057560fe546001600160a01b031690565b82610a23565b505050565b60606036805461058f9061275a565b80601f01602080910402602001604051908101604052809291908181526020018280546105bb9061275a565b80156106085780601f106105dd57610100808354040283529160200191610608565b820191906000526020600020905b8154815290600101906020018083116105eb57829003601f168201915b5050505050905090565b600033610620818585610fc3565b5060019392505050565b6000336106388582856110e7565b61064385858561115b565b506001949350505050565b61065781610cf6565b61066230338361115b565b50565b600061066f61133a565b905090565b6000336106208185856106878383610ccb565b61069191906127a5565b610fc3565b60004382106106e75760405162461bcd60e51b815260206004820152601f60248201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e656400604482015260640161054d565b6001600160a01b038316600090815260cd6020526040902061070990836113b5565b9392505050565b6001600160a01b038116600090815261013060205260408120545b92915050565b6106623382611472565b60fe546001600160a01b031633146107655760405162461bcd60e51b815260040161054d90612725565b6107708383836114ec565b61077a3082610a23565b50505050565b6001600160a01b038116600090815260cd602052604081205461072b90611707565b60fe546001600160a01b031633146107cc5760405162461bcd60e51b815260040161054d90612725565b6107d66000611770565b565b60fe546001600160a01b031633146108025760405162461bcd60e51b815260040161054d90612725565b6001600160a01b0382166000908152610130602052604090205481111561086b5760405162461bcd60e51b815260206004820152601760248201527f5f736c6173683a20657863656564732062616c616e6365000000000000000000604482015260640161054d565b6001600160a01b03821660009081526101306020526040812080548392906108949084906127bd565b90915550506040518181526001600160a01b038316907f4ed05e9673c26d2ed44f7ef6a7f2942df0ee3b5e1e17db4b99f9dcd261a339cd9060200160405180910390a25050565b6001600160a01b03811660009081526099602052604081205461072b565b600043821061094a5760405162461bcd60e51b815260206004820152601f60248201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e656400604482015260640161054d565b61072b60ce836113b5565b60606037805461058f9061275a565b6001600160a01b03811660009081526101306020526040812054610987836117c2565b61072b91906127a5565b6000338161099f8286610ccb565b9050838110156109ff5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161054d565b6106438286868403610fc3565b610a1581611849565b610a1f3082610a23565b5050565b60003361062081858561115b565b83421115610a815760405162461bcd60e51b815260206004820152601d60248201527f4552433230566f7465733a207369676e61747572652065787069726564000000604482015260640161054d565b604080517fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60208201526001600160a01b038816918101919091526060810186905260808101859052600090610afb90610af39060a001604051602081830303815290604052805190602001206118e7565b858585611935565b9050610b068161195d565b8614610b545760405162461bcd60e51b815260206004820152601960248201527f4552433230566f7465733a20696e76616c6964206e6f6e636500000000000000604482015260640161054d565b610b5e8188611472565b50505050505050565b83421115610bb75760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e65000000604482015260640161054d565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9888888610be68c61195d565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e0016040516020818303038152906040528051906020012090506000610c41826118e7565b90506000610c5182878787611935565b9050896001600160a01b0316816001600160a01b031614610cb45760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604482015260640161054d565b610cbf8a8a8a610fc3565b50505050505050505050565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b3360009081526101306020526040902054811115610d565760405162461bcd60e51b815260206004820152601960248201527f5f756e7374616b653a20657863656564732062616c616e636500000000000000604482015260640161054d565b336000908152610130602052604081208054839290610d769084906127bd565b909155505060405181815233907f79d3df6837cc49ff0e09fd3258e6e45594e0703445bb06825e9d75156eaee8f0906020015b60405180910390a250565b60408051808201909152600080825260208201526001600160a01b038316600090815260cd60205260409020805463ffffffff8416908110610df857610df86127d4565b60009182526020918290206040805180820190915291015463ffffffff8116825264010000000090046001600160e01b0316918101919091529392505050565b60fe546001600160a01b03163314610e625760405162461bcd60e51b815260040161054d90612725565b6001600160a01b038116610ec75760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161054d565b61066281611770565b6000610edc6001611985565b90508015610ef4576000805461ff0019166101001790555b610efc611a12565b610f446040518060400160405280600b81526020016a23b7b63232b72a37b5b2b760a91b8152506040518060400160405280600381526020016211d31160ea1b815250611a41565b610f706040518060400160405280600b81526020016a23b7b63232b72a37b5b2b760a91b815250611a72565b610f7a3383611abc565b8015610a1f576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b6001600160a01b0383166110255760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161054d565b6001600160a01b0382166110865760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161054d565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006110f38484610ccb565b9050600019811461077a578181101561114e5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161054d565b61077a8484848403610fc3565b6001600160a01b0383166111bf5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161054d565b6001600160a01b0382166112215760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161054d565b61122c838383611ac6565b6001600160a01b038316600090815260336020526040902054818110156112a45760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161054d565b6001600160a01b038085166000908152603360205260408082208585039055918516815290812080548492906112db9084906127a5565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161132791815260200190565b60405180910390a361077a848484611b5b565b600061066f7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f61136960655490565b6066546040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090509392505050565b8154600090815b818110156114195760006113d08284611b66565b9050848682815481106113e5576113e56127d4565b60009182526020909120015463ffffffff16111561140557809250611413565b6114108160016127a5565b91505b506113bc565b811561145d578461142b6001846127bd565b8154811061143b5761143b6127d4565b60009182526020909120015464010000000090046001600160e01b0316611460565b60005b6001600160e01b031695945050505050565b6001600160a01b03828116600081815260cc6020818152604080842080546033845282862054949093528787166001600160a01b03198416811790915590519190951694919391928592917f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a461077a828483611b81565b60fe546001600160a01b031633146115165760405162461bcd60e51b815260040161054d90612725565b816115575760405162461bcd60e51b815260206004820152601160248201527062756c6b5374616b65203020757365727360781b604482015260640161054d565b600081116115a75760405162461bcd60e51b815260206004820152601760248201527f62756c6b5374616b65203020746f74616c416d6f756e74000000000000000000604482015260640161054d565b6000805b838110156116bf5760008585838181106115c7576115c76127d4565b9050604002016020013590508061013060008888868181106115eb576115eb6127d4565b61160192602060409092020190810191506124f4565b6001600160a01b03166001600160a01b03168152602001908152602001600020600082825461163091906127a5565b90915550611640905081846127a5565b9250858583818110611654576116546127d4565b61166a92602060409092020190810191506124f4565b6001600160a01b03167f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d826040516116a491815260200190565b60405180910390a250806116b7816127ea565b9150506115ab565b5081811461077a5760405162461bcd60e51b81526020600482015260156024820152741a5b98dbdc9c9958dd081d1bdd185b105b5bdd5b9d605a1b604482015260640161054d565b600063ffffffff82111561176c5760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201526532206269747360d01b606482015260840161054d565b5090565b60fe80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038116600090815260cd60205260408120548015611836576001600160a01b038316600090815260cd602052604090206118046001836127bd565b81548110611814576118146127d4565b60009182526020909120015464010000000090046001600160e01b0316611839565b60005b6001600160e01b03169392505050565b600081116118905760405162461bcd60e51b815260206004820152601460248201527343616e6e6f74207374616b65206e6f7468696e6760601b604482015260640161054d565b3360009081526101306020526040812080548392906118b09084906127a5565b909155505060405181815233907f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d90602001610da9565b600061072b6118f461133a565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b600080600061194687878787611cbe565b9150915061195381611dab565b5095945050505050565b6001600160a01b03811660009081526099602052604090208054600181018255905b50919050565b60008054610100900460ff16156119cc578160ff1660011480156119a85750303b155b6119c45760405162461bcd60e51b815260040161054d90612805565b506000919050565b60005460ff8084169116106119f35760405162461bcd60e51b815260040161054d90612805565b506000805460ff191660ff92909216919091179055600190565b919050565b600054610100900460ff16611a395760405162461bcd60e51b815260040161054d90612853565b6107d6611f66565b600054610100900460ff16611a685760405162461bcd60e51b815260040161054d90612853565b610a1f8282611f96565b600054610100900460ff16611a995760405162461bcd60e51b815260040161054d90612853565b61066281604051806040016040528060018152602001603160f81b815250611fe4565b610a1f8282612025565b6001600160a01b0383161580611ae9575060fe546001600160a01b038481169116145b80611afc57506001600160a01b03831630145b80611b0f57506001600160a01b03821630145b61057b5760405162461bcd60e51b815260206004820152601e60248201527f45524332303a204e6f7420616c6c6f77656420746f207472616e736665720000604482015260640161054d565b61057b8383836120af565b6000611b75600284841861289e565b610709908484166127a5565b816001600160a01b0316836001600160a01b031614158015611ba35750600081115b1561057b576001600160a01b03831615611c31576001600160a01b038316600090815260cd602052604081208190611bde906120e1856120ed565b91509150846001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611c26929190918252602082015260400190565b60405180910390a250505b6001600160a01b0382161561057b576001600160a01b038216600090815260cd602052604081208190611c6790612266856120ed565b91509150836001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611caf929190918252602082015260400190565b60405180910390a25050505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611cf55750600090506003611da2565b8460ff16601b14158015611d0d57508460ff16601c14155b15611d1e5750600090506004611da2565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611d72573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611d9b57600060019250925050611da2565b9150600090505b94509492505050565b6000816004811115611dbf57611dbf6128c0565b1415611dc85750565b6001816004811115611ddc57611ddc6128c0565b1415611e2a5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015260640161054d565b6002816004811115611e3e57611e3e6128c0565b1415611e8c5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161054d565b6003816004811115611ea057611ea06128c0565b1415611ef95760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b606482015260840161054d565b6004816004811115611f0d57611f0d6128c0565b14156106625760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b606482015260840161054d565b600054610100900460ff16611f8d5760405162461bcd60e51b815260040161054d90612853565b6107d633611770565b600054610100900460ff16611fbd5760405162461bcd60e51b815260040161054d90612853565b8151611fd09060369060208501906123ce565b50805161057b9060379060208401906123ce565b600054610100900460ff1661200b5760405162461bcd60e51b815260040161054d90612853565b815160209283012081519190920120606591909155606655565b61202f8282612272565b6035546001600160e01b0310156120a15760405162461bcd60e51b815260206004820152603060248201527f4552433230566f7465733a20746f74616c20737570706c79207269736b73206f60448201526f766572666c6f77696e6720766f74657360801b606482015260840161054d565b61077a60ce612266836120ed565b6001600160a01b03838116600090815260cc602052604080822054858416835291205461057b92918216911683611b81565b600061070982846127bd565b82546000908190801561213857856121066001836127bd565b81548110612116576121166127d4565b60009182526020909120015464010000000090046001600160e01b031661213b565b60005b6001600160e01b0316925061215483858763ffffffff16565b91506000811180156121925750438661216e6001846127bd565b8154811061217e5761217e6127d4565b60009182526020909120015463ffffffff16145b156121f2576121a082612365565b866121ac6001846127bd565b815481106121bc576121bc6127d4565b9060005260206000200160000160046101000a8154816001600160e01b0302191690836001600160e01b0316021790555061225d565b85604051806040016040528061220743611707565b63ffffffff16815260200161221b85612365565b6001600160e01b0390811690915282546001810184556000938452602093849020835194909301519091166401000000000263ffffffff909316929092179101555b50935093915050565b600061070982846127a5565b6001600160a01b0382166122c85760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161054d565b6122d460008383611ac6565b80603560008282546122e691906127a5565b90915550506001600160a01b038216600090815260336020526040812080548392906123139084906127a5565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3610a1f60008383611b5b565b60006001600160e01b0382111561176c5760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20326044820152663234206269747360c81b606482015260840161054d565b8280546123da9061275a565b90600052602060002090601f0160209004810192826123fc5760008555612442565b82601f1061241557805160ff1916838001178555612442565b82800160010185558215612442579182015b82811115612442578251825591602001919060010190612427565b5061176c9291505b8082111561176c576000815560010161244a565b80356001600160a01b0381168114611a0d57600080fd5b6000806040838503121561248857600080fd5b6124918361245e565b946020939093013593505050565b600060208083528351808285015260005b818110156124cc578581018301518582016040015282016124b0565b818111156124de576000604083870101525b50601f01601f1916929092016040019392505050565b60006020828403121561250657600080fd5b6107098261245e565b60008060006060848603121561252457600080fd5b61252d8461245e565b925061253b6020850161245e565b9150604084013590509250925092565b60006020828403121561255d57600080fd5b5035919050565b60008060006040848603121561257957600080fd5b833567ffffffffffffffff8082111561259157600080fd5b818601915086601f8301126125a557600080fd5b8135818111156125b457600080fd5b8760208260061b85010111156125c957600080fd5b6020928301989097509590910135949350505050565b803560ff81168114611a0d57600080fd5b60008060008060008060c0878903121561260957600080fd5b6126128761245e565b9550602087013594506040870135935061262e606088016125df565b92506080870135915060a087013590509295509295509295565b600080600080600080600060e0888a03121561266357600080fd5b61266c8861245e565b965061267a6020890161245e565b95506040880135945060608801359350612696608089016125df565b925060a0880135915060c0880135905092959891949750929550565b600080604083850312156126c557600080fd5b6126ce8361245e565b91506126dc6020840161245e565b90509250929050565b600080604083850312156126f857600080fd5b6127018361245e565b9150602083013563ffffffff8116811461271a57600080fd5b809150509250929050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600181811c9082168061276e57607f821691505b6020821081141561197f57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082198211156127b8576127b861278f565b500190565b6000828210156127cf576127cf61278f565b500390565b634e487b7160e01b600052603260045260246000fd5b60006000198214156127fe576127fe61278f565b5060010190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b6000826128bb57634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052602160045260246000fdfea264697066735822122063f9c5c1c4cc99d93957517a7073f794534db31e4153e534185dd3b1da2553f964736f6c634300080b0033";

export class GoldenTokenV1__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GoldenTokenV1> {
    return super.deploy(overrides || {}) as Promise<GoldenTokenV1>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GoldenTokenV1 {
    return super.attach(address) as GoldenTokenV1;
  }
  connect(signer: Signer): GoldenTokenV1__factory {
    return super.connect(signer) as GoldenTokenV1__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GoldenTokenV1Interface {
    return new utils.Interface(_abi) as GoldenTokenV1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GoldenTokenV1 {
    return new Contract(address, _abi, signerOrProvider) as GoldenTokenV1;
  }
}