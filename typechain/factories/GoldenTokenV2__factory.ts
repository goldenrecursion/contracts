/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GoldenTokenV2, GoldenTokenV2Interface } from "../GoldenTokenV2";

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
        internalType: "struct StakeableUpgradeableV2.User[]",
        name: "users",
        type: "tuple[]",
      },
      {
        internalType: "uint256",
        name: "totalAmount",
        type: "uint256",
      },
    ],
    name: "bulkSlash",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "struct StakeableUpgradeableV2.User[]",
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
  "0x608060405234801561001057600080fd5b50612661806100206000396000f3fe608060405234801561001057600080fd5b50600436106102065760003560e01c8063715018a61161011a578063a457c2d7116100ad578063d505accf1161007c578063d505accf1461049a578063dd62ed3e146104ad578063eb36854e146104c0578063f1127ed8146104d3578063f2fde38b1461051057600080fd5b8063a457c2d71461044e578063a694fc3a14610461578063a9059cbb14610474578063c3cda5201461048757600080fd5b80638da5cb5b116100e95780638da5cb5b1461040f5780638e539e8c1461042057806395d89b41146104335780639ab24eb01461043b57600080fd5b8063715018a6146103ce5780637cb569de146103d65780637ecebe00146103e957806384144dcf146103fc57600080fd5b80633644e5151161019d578063587cde1e1161016c578063587cde1e146103135780635c19a95c146103575780636c8848c21461036a5780636fcfff451461037d57806370a08231146103a557600080fd5b80633644e515146102d257806339509351146102da5780633a46b1a8146102ed578063426233601461030057600080fd5b806323b62302116101d957806323b623021461027357806323b872dd1461029d5780632e17de78146102b0578063313ce567146102c357600080fd5b806302fb4d851461020b57806306fdde0314610220578063095ea7b31461023e57806318160ddd14610261575b600080fd5b61021e610219366004612263565b610523565b005b610228610580565b604051610235919061228d565b60405180910390f35b61025161024c366004612263565b610612565b6040519015158152602001610235565b6035545b604051908152602001610235565b6102656102813660046122e2565b6001600160a01b03166000908152610130602052604090205490565b6102516102ab3660046122fd565b61062a565b61021e6102be366004612339565b61064e565b60405160128152602001610235565b610265610664565b6102516102e8366004612263565b610673565b6102656102fb366004612263565b610695565b61026561030e3660046122e2565b61070f565b61033f6103213660046122e2565b6001600160a01b03908116600090815260cc60205260409020541690565b6040516001600160a01b039091168152602001610235565b61021e6103653660046122e2565b610730565b61021e610378366004612352565b61073a565b61039061038b3660046122e2565b61077f565b60405163ffffffff9091168152602001610235565b6102656103b33660046122e2565b6001600160a01b031660009081526033602052604090205490565b61021e6107a1565b61021e6103e4366004612263565b6107d7565b6102656103f73660046122e2565b6108da565b61021e61040a366004612352565b6108f8565b60fe546001600160a01b031661033f565b61026561042e366004612339565b610947565b6102286109a3565b6102656104493660046122e2565b6109b2565b61025161045c366004612263565b6109df565b61021e61046f366004612339565b610a5a565b610251610482366004612263565b610a69565b61021e6104953660046123de565b610a77565b61021e6104a8366004612436565b610bad565b6102656104bb3660046124a0565b610d11565b61021e6104ce366004612339565b610d3c565b6104e66104e13660046124d3565b610dfa565b60408051825163ffffffff1681526020928301516001600160e01b03169281019290925201610235565b61021e61051e3660046122e2565b610e7e565b60fe546001600160a01b031633146105565760405162461bcd60e51b815260040161054d90612513565b60405180910390fd5b61056082826107d7565b61057c3061057660fe546001600160a01b031690565b83610f16565b5050565b60606036805461058f90612548565b80601f01602080910402602001604051908101604052809291908181526020018280546105bb90612548565b80156106085780601f106105dd57610100808354040283529160200191610608565b820191906000526020600020905b8154815290600101906020018083116105eb57829003601f168201915b5050505050905090565b6000336106208185856110f5565b5060019392505050565b600033610638858285611219565b610643858585610f16565b506001949350505050565b61065781610d3c565b6106613033610576565b50565b600061066e61128d565b905090565b6000336106208185856106868383610d11565b6106909190612593565b6110f5565b60004382106106e65760405162461bcd60e51b815260206004820152601f60248201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e656400604482015260640161054d565b6001600160a01b038316600090815260cd602052604090206107089083611308565b9392505050565b6001600160a01b038116600090815261013060205260408120545b92915050565b61066133826113c5565b60fe546001600160a01b031633146107645760405162461bcd60e51b815260040161054d90612513565b61076f83838361143f565b6107793082610a69565b50505050565b6001600160a01b038116600090815260cd602052604081205461072a9061165a565b60fe546001600160a01b031633146107cb5760405162461bcd60e51b815260040161054d90612513565b6107d560006116c3565b565b60fe546001600160a01b031633146108015760405162461bcd60e51b815260040161054d90612513565b6001600160a01b0382166000908152610130602052604090205481111561086a5760405162461bcd60e51b815260206004820152601760248201527f5f736c6173683a20657863656564732062616c616e6365000000000000000000604482015260640161054d565b6001600160a01b03821660009081526101306020526040812080548392906108939084906125ab565b90915550506040518181526001600160a01b038316907f4ed05e9673c26d2ed44f7ef6a7f2942df0ee3b5e1e17db4b99f9dcd261a339cd9060200160405180910390a25050565b6001600160a01b03811660009081526099602052604081205461072a565b60fe546001600160a01b031633146109225760405162461bcd60e51b815260040161054d90612513565b600061092f848484611715565b90506107793061057660fe546001600160a01b031690565b60004382106109985760405162461bcd60e51b815260206004820152601f60248201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e656400604482015260640161054d565b61072a60ce83611308565b60606037805461058f90612548565b6001600160a01b038116600090815261013060205260408120546109d5836119b3565b61072a9190612593565b600033816109ed8286610d11565b905083811015610a4d5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161054d565b61064382868684036110f5565b610a6381611a3a565b61057c30825b600033610620818585610f16565b83421115610ac75760405162461bcd60e51b815260206004820152601d60248201527f4552433230566f7465733a207369676e61747572652065787069726564000000604482015260640161054d565b604080517fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60208201526001600160a01b038816918101919091526060810186905260808101859052600090610b4190610b399060a00160405160208183030381529060405280519060200120611ad8565b858585611b26565b9050610b4c81611b4e565b8614610b9a5760405162461bcd60e51b815260206004820152601960248201527f4552433230566f7465733a20696e76616c6964206e6f6e636500000000000000604482015260640161054d565b610ba481886113c5565b50505050505050565b83421115610bfd5760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e65000000604482015260640161054d565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9888888610c2c8c611b4e565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e0016040516020818303038152906040528051906020012090506000610c8782611ad8565b90506000610c9782878787611b26565b9050896001600160a01b0316816001600160a01b031614610cfa5760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604482015260640161054d565b610d058a8a8a6110f5565b50505050505050505050565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b3360009081526101306020526040902054811115610d9c5760405162461bcd60e51b815260206004820152601960248201527f5f756e7374616b653a20657863656564732062616c616e636500000000000000604482015260640161054d565b336000908152610130602052604081208054839290610dbc9084906125ab565b909155505060405181815233907f79d3df6837cc49ff0e09fd3258e6e45594e0703445bb06825e9d75156eaee8f0906020015b60405180910390a250565b60408051808201909152600080825260208201526001600160a01b038316600090815260cd60205260409020805463ffffffff8416908110610e3e57610e3e6125c2565b60009182526020918290206040805180820190915291015463ffffffff8116825264010000000090046001600160e01b0316918101919091529392505050565b60fe546001600160a01b03163314610ea85760405162461bcd60e51b815260040161054d90612513565b6001600160a01b038116610f0d5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161054d565b610661816116c3565b6001600160a01b038316610f7a5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161054d565b6001600160a01b038216610fdc5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161054d565b610fe7838383611b76565b6001600160a01b0383166000908152603360205260409020548181101561105f5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161054d565b6001600160a01b03808516600090815260336020526040808220858503905591851681529081208054849290611096908490612593565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516110e291815260200190565b60405180910390a3610779848484611c10565b6001600160a01b0383166111575760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161054d565b6001600160a01b0382166111b85760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161054d565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006112258484610d11565b9050600019811461077957818110156112805760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161054d565b61077984848484036110f5565b600061066e7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6112bc60655490565b6066546040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090509392505050565b8154600090815b8181101561136c5760006113238284611c1b565b905084868281548110611338576113386125c2565b60009182526020909120015463ffffffff16111561135857809250611366565b611363816001612593565b91505b5061130f565b81156113b0578461137e6001846125ab565b8154811061138e5761138e6125c2565b60009182526020909120015464010000000090046001600160e01b03166113b3565b60005b6001600160e01b031695945050505050565b6001600160a01b03828116600081815260cc6020818152604080842080546033845282862054949093528787166001600160a01b03198416811790915590519190951694919391928592917f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a4610779828483611c36565b60fe546001600160a01b031633146114695760405162461bcd60e51b815260040161054d90612513565b816114aa5760405162461bcd60e51b815260206004820152601160248201527062756c6b5374616b65203020757365727360781b604482015260640161054d565b600081116114fa5760405162461bcd60e51b815260206004820152601760248201527f62756c6b5374616b65203020746f74616c416d6f756e74000000000000000000604482015260640161054d565b6000805b8381101561161257600085858381811061151a5761151a6125c2565b90506040020160200135905080610130600088888681811061153e5761153e6125c2565b61155492602060409092020190810191506122e2565b6001600160a01b03166001600160a01b0316815260200190815260200160002060008282546115839190612593565b9091555061159390508184612593565b92508585838181106115a7576115a76125c2565b6115bd92602060409092020190810191506122e2565b6001600160a01b03167f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d826040516115f791815260200190565b60405180910390a2508061160a816125d8565b9150506114fe565b508181146107795760405162461bcd60e51b81526020600482015260156024820152741a5b98dbdc9c9958dd081d1bdd185b105b5bdd5b9d605a1b604482015260640161054d565b600063ffffffff8211156116bf5760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201526532206269747360d01b606482015260840161054d565b5090565b60fe80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60fe546000906001600160a01b031633146117425760405162461bcd60e51b815260040161054d90612513565b826117845760405162461bcd60e51b81526020600482015260126024820152715f62756c6b536c617368203020757365727360701b604482015260640161054d565b600082116117d45760405162461bcd60e51b815260206004820152601860248201527f5f62756c6b536c617368203020746f74616c416d6f756e740000000000000000604482015260640161054d565b60008060005b858110156119625760008787838181106117f6576117f66125c2565b905060400201602001359050600061013060008a8a8681811061181b5761181b6125c2565b61183192602060409092020190810191506122e2565b6001600160a01b03166001600160a01b0316815260200190815260200160002054905060008183116118635782611865565b815b90508061013060008c8c8881811061187f5761187f6125c2565b61189592602060409092020190810191506122e2565b6001600160a01b03166001600160a01b0316815260200190815260200160002060008282546118c491906125ab565b909155506118d490508387612593565b95506118e08186612593565b94508989858181106118f4576118f46125c2565b61190a92602060409092020190810191506122e2565b6001600160a01b03167f4ed05e9673c26d2ed44f7ef6a7f2942df0ee3b5e1e17db4b99f9dcd261a339cd8260405161194491815260200190565b60405180910390a2505050808061195a906125d8565b9150506117da565b508382146119aa5760405162461bcd60e51b81526020600482015260156024820152741a5b98dbdc9c9958dd081d1bdd185b105b5bdd5b9d605a1b604482015260640161054d565b95945050505050565b6001600160a01b038116600090815260cd60205260408120548015611a27576001600160a01b038316600090815260cd602052604090206119f56001836125ab565b81548110611a0557611a056125c2565b60009182526020909120015464010000000090046001600160e01b0316611a2a565b60005b6001600160e01b03169392505050565b60008111611a815760405162461bcd60e51b815260206004820152601460248201527343616e6e6f74207374616b65206e6f7468696e6760601b604482015260640161054d565b336000908152610130602052604081208054839290611aa1908490612593565b909155505060405181815233907f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d90602001610def565b600061072a611ae561128d565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b6000806000611b3787878787611d73565b91509150611b4481611e60565b5095945050505050565b6001600160a01b03811660009081526099602052604090208054600181018255905b50919050565b6001600160a01b0383161580611b99575060fe546001600160a01b038481169116145b80611bac57506001600160a01b03831630145b80611bbf57506001600160a01b03821630145b611c0b5760405162461bcd60e51b815260206004820152601e60248201527f45524332303a204e6f7420616c6c6f77656420746f207472616e736665720000604482015260640161054d565b505050565b611c0b83838361201b565b6000611c2a60028484186125f3565b61070890848416612593565b816001600160a01b0316836001600160a01b031614158015611c585750600081115b15611c0b576001600160a01b03831615611ce6576001600160a01b038316600090815260cd602052604081208190611c939061204d85612059565b91509150846001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611cdb929190918252602082015260400190565b60405180910390a250505b6001600160a01b03821615611c0b576001600160a01b038216600090815260cd602052604081208190611d1c906121d285612059565b91509150836001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611d64929190918252602082015260400190565b60405180910390a25050505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611daa5750600090506003611e57565b8460ff16601b14158015611dc257508460ff16601c14155b15611dd35750600090506004611e57565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611e27573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611e5057600060019250925050611e57565b9150600090505b94509492505050565b6000816004811115611e7457611e74612615565b1415611e7d5750565b6001816004811115611e9157611e91612615565b1415611edf5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015260640161054d565b6002816004811115611ef357611ef3612615565b1415611f415760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161054d565b6003816004811115611f5557611f55612615565b1415611fae5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b606482015260840161054d565b6004816004811115611fc257611fc2612615565b14156106615760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b606482015260840161054d565b6001600160a01b03838116600090815260cc6020526040808220548584168352912054611c0b92918216911683611c36565b600061070882846125ab565b8254600090819080156120a457856120726001836125ab565b81548110612082576120826125c2565b60009182526020909120015464010000000090046001600160e01b03166120a7565b60005b6001600160e01b031692506120c083858763ffffffff16565b91506000811180156120fe575043866120da6001846125ab565b815481106120ea576120ea6125c2565b60009182526020909120015463ffffffff16145b1561215e5761210c826121de565b866121186001846125ab565b81548110612128576121286125c2565b9060005260206000200160000160046101000a8154816001600160e01b0302191690836001600160e01b031602179055506121c9565b8560405180604001604052806121734361165a565b63ffffffff168152602001612187856121de565b6001600160e01b0390811690915282546001810184556000938452602093849020835194909301519091166401000000000263ffffffff909316929092179101555b50935093915050565b60006107088284612593565b60006001600160e01b038211156116bf5760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20326044820152663234206269747360c81b606482015260840161054d565b80356001600160a01b038116811461225e57600080fd5b919050565b6000806040838503121561227657600080fd5b61227f83612247565b946020939093013593505050565b600060208083528351808285015260005b818110156122ba5785810183015185820160400152820161229e565b818111156122cc576000604083870101525b50601f01601f1916929092016040019392505050565b6000602082840312156122f457600080fd5b61070882612247565b60008060006060848603121561231257600080fd5b61231b84612247565b925061232960208501612247565b9150604084013590509250925092565b60006020828403121561234b57600080fd5b5035919050565b60008060006040848603121561236757600080fd5b833567ffffffffffffffff8082111561237f57600080fd5b818601915086601f83011261239357600080fd5b8135818111156123a257600080fd5b8760208260061b85010111156123b757600080fd5b6020928301989097509590910135949350505050565b803560ff8116811461225e57600080fd5b60008060008060008060c087890312156123f757600080fd5b61240087612247565b9550602087013594506040870135935061241c606088016123cd565b92506080870135915060a087013590509295509295509295565b600080600080600080600060e0888a03121561245157600080fd5b61245a88612247565b965061246860208901612247565b95506040880135945060608801359350612484608089016123cd565b925060a0880135915060c0880135905092959891949750929550565b600080604083850312156124b357600080fd5b6124bc83612247565b91506124ca60208401612247565b90509250929050565b600080604083850312156124e657600080fd5b6124ef83612247565b9150602083013563ffffffff8116811461250857600080fd5b809150509250929050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600181811c9082168061255c57607f821691505b60208210811415611b7057634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082198211156125a6576125a661257d565b500190565b6000828210156125bd576125bd61257d565b500390565b634e487b7160e01b600052603260045260246000fd5b60006000198214156125ec576125ec61257d565b5060010190565b60008261261057634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052602160045260246000fdfea26469706673582212200ce2ef9628925f3f8c1932e15b4b79a9c92f4276f3f84521b322eb768a9a286864736f6c634300080b0033";

export class GoldenTokenV2__factory extends ContractFactory {
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
  ): Promise<GoldenTokenV2> {
    return super.deploy(overrides || {}) as Promise<GoldenTokenV2>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GoldenTokenV2 {
    return super.attach(address) as GoldenTokenV2;
  }
  connect(signer: Signer): GoldenTokenV2__factory {
    return super.connect(signer) as GoldenTokenV2__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GoldenTokenV2Interface {
    return new utils.Interface(_abi) as GoldenTokenV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GoldenTokenV2 {
    return new Contract(address, _abi, signerOrProvider) as GoldenTokenV2;
  }
}
