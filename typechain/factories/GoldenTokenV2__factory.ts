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
        internalType: "struct StakeableUpgradeable.User[]",
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
    inputs: [],
    name: "newValue",
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
        internalType: "string",
        name: "newerValue",
        type: "string",
      },
    ],
    name: "setNewValue",
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
  "0x608060405234801561001057600080fd5b50612a3e806100206000396000f3fe608060405234801561001057600080fd5b506004361061021c5760003560e01c80637c65452c11610125578063a9059cbb116100ad578063eb36854e1161007c578063eb36854e146104cb578063f1127ed8146104de578063f2fde38b1461051b578063f6aa2a101461052e578063fe4b84df1461054157600080fd5b8063a9059cbb1461047f578063c3cda52014610492578063d505accf146104a5578063dd62ed3e146104b857600080fd5b80638e539e8c116100f45780638e539e8c1461042b57806395d89b411461043e5780639ab24eb014610446578063a457c2d714610459578063a694fc3a1461046c57600080fd5b80637c65452c146103ec5780637cb569de146103f45780637ecebe00146104075780638da5cb5b1461041a57600080fd5b806339509351116101a85780635c19a95c116101775780635c19a95c1461036d5780636c8848c2146103805780636fcfff451461039357806370a08231146103bb578063715018a6146103e457600080fd5b806339509351146102f05780633a46b1a8146103035780634262336014610316578063587cde1e1461032957600080fd5b806323b62302116101ef57806323b623021461028957806323b872dd146102b35780632e17de78146102c6578063313ce567146102d95780633644e515146102e857600080fd5b806302fb4d851461022157806306fdde0314610236578063095ea7b31461025457806318160ddd14610277575b600080fd5b61023461022f3660046124e0565b610554565b005b61023e6105b1565b60405161024b919061250a565b60405180910390f35b6102676102623660046124e0565b610643565b604051901515815260200161024b565b6035545b60405190815260200161024b565b61027b61029736600461255f565b6001600160a01b03166000908152610130602052604090205490565b6102676102c136600461257a565b61065b565b6102346102d43660046125b6565b61067f565b6040516012815260200161024b565b61027b610696565b6102676102fe3660046124e0565b6106a5565b61027b6103113660046124e0565b6106c7565b61027b61032436600461255f565b610741565b61035561033736600461255f565b6001600160a01b03908116600090815260cc60205260409020541690565b6040516001600160a01b03909116815260200161024b565b61023461037b36600461255f565b610762565b61023461038e3660046125cf565b61076c565b6103a66103a136600461255f565b6107b1565b60405163ffffffff909116815260200161024b565b61027b6103c936600461255f565b6001600160a01b031660009081526033602052604090205490565b6102346107d3565b61023e610809565b6102346104023660046124e0565b610898565b61027b61041536600461255f565b61099b565b60fe546001600160a01b0316610355565b61027b6104393660046125b6565b6109b9565b61023e610a15565b61027b61045436600461255f565b610a24565b6102676104673660046124e0565b610a51565b61023461047a3660046125b6565b610acc565b61026761048d3660046124e0565b610ae3565b6102346104a036600461265b565b610af1565b6102346104b33660046126b3565b610c27565b61027b6104c636600461271d565b610d8b565b6102346104d93660046125b6565b610db6565b6104f16104ec366004612750565b610e74565b60408051825163ffffffff1681526020928301516001600160e01b0316928101929092520161024b565b61023461052936600461255f565b610ef8565b61023461053c3660046127a6565b610f90565b61023461054f3660046125b6565b610fa4565b60fe546001600160a01b031633146105875760405162461bcd60e51b815260040161057e90612857565b60405180910390fd5b6105918282610898565b6105ac6105a660fe546001600160a01b031690565b82610ae3565b505050565b6060603680546105c09061288c565b80601f01602080910402602001604051908101604052809291908181526020018280546105ec9061288c565b80156106395780601f1061060e57610100808354040283529160200191610639565b820191906000526020600020905b81548152906001019060200180831161061c57829003601f168201915b5050505050905090565b600033610651818585611097565b5060019392505050565b6000336106698582856111bb565b61067485858561122f565b506001949350505050565b61068881610db6565b61069330338361122f565b50565b60006106a061140e565b905090565b6000336106518185856106b88383610d8b565b6106c291906128d7565b611097565b60004382106107185760405162461bcd60e51b815260206004820152601f60248201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e656400604482015260640161057e565b6001600160a01b038316600090815260cd6020526040902061073a9083611489565b9392505050565b6001600160a01b038116600090815261013060205260408120545b92915050565b6106933382611546565b60fe546001600160a01b031633146107965760405162461bcd60e51b815260040161057e90612857565b6107a18383836115c0565b6107ab3082610ae3565b50505050565b6001600160a01b038116600090815260cd602052604081205461075c90611772565b60fe546001600160a01b031633146107fd5760405162461bcd60e51b815260040161057e90612857565b61080760006117db565b565b61013180546108179061288c565b80601f01602080910402602001604051908101604052809291908181526020018280546108439061288c565b80156108905780601f1061086557610100808354040283529160200191610890565b820191906000526020600020905b81548152906001019060200180831161087357829003601f168201915b505050505081565b60fe546001600160a01b031633146108c25760405162461bcd60e51b815260040161057e90612857565b6001600160a01b0382166000908152610130602052604090205481111561092b5760405162461bcd60e51b815260206004820152601760248201527f5f736c6173683a20657863656564732062616c616e6365000000000000000000604482015260640161057e565b6001600160a01b03821660009081526101306020526040812080548392906109549084906128ef565b90915550506040518181526001600160a01b038316907f4ed05e9673c26d2ed44f7ef6a7f2942df0ee3b5e1e17db4b99f9dcd261a339cd9060200160405180910390a25050565b6001600160a01b03811660009081526099602052604081205461075c565b6000438210610a0a5760405162461bcd60e51b815260206004820152601f60248201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e656400604482015260640161057e565b61075c60ce83611489565b6060603780546105c09061288c565b6001600160a01b03811660009081526101306020526040812054610a478361182d565b61075c91906128d7565b60003381610a5f8286610d8b565b905083811015610abf5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161057e565b6106748286868403611097565b610ad5816118b4565b610adf3082610ae3565b5050565b60003361065181858561122f565b83421115610b415760405162461bcd60e51b815260206004820152601d60248201527f4552433230566f7465733a207369676e61747572652065787069726564000000604482015260640161057e565b604080517fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60208201526001600160a01b038816918101919091526060810186905260808101859052600090610bbb90610bb39060a00160405160208183030381529060405280519060200120611952565b8585856119a0565b9050610bc6816119c8565b8614610c145760405162461bcd60e51b815260206004820152601960248201527f4552433230566f7465733a20696e76616c6964206e6f6e636500000000000000604482015260640161057e565b610c1e8188611546565b50505050505050565b83421115610c775760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e65000000604482015260640161057e565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9888888610ca68c6119c8565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e0016040516020818303038152906040528051906020012090506000610d0182611952565b90506000610d11828787876119a0565b9050896001600160a01b0316816001600160a01b031614610d745760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604482015260640161057e565b610d7f8a8a8a611097565b50505050505050505050565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b3360009081526101306020526040902054811115610e165760405162461bcd60e51b815260206004820152601960248201527f5f756e7374616b653a20657863656564732062616c616e636500000000000000604482015260640161057e565b336000908152610130602052604081208054839290610e369084906128ef565b909155505060405181815233907f79d3df6837cc49ff0e09fd3258e6e45594e0703445bb06825e9d75156eaee8f0906020015b60405180910390a250565b60408051808201909152600080825260208201526001600160a01b038316600090815260cd60205260409020805463ffffffff8416908110610eb857610eb8612906565b60009182526020918290206040805180820190915291015463ffffffff8116825264010000000090046001600160e01b0316918101919091529392505050565b60fe546001600160a01b03163314610f225760405162461bcd60e51b815260040161057e90612857565b6001600160a01b038116610f875760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161057e565b610693816117db565b8051610adf90610131906020840190612439565b6000610fb060016119f0565b90508015610fc8576000805461ff0019166101001790555b610fd0611a7d565b6110186040518060400160405280600b81526020016a23b7b63232b72a37b5b2b760a91b8152506040518060400160405280600381526020016211d31160ea1b815250611aac565b6110446040518060400160405280600b81526020016a23b7b63232b72a37b5b2b760a91b815250611add565b61104e3383611b27565b8015610adf576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b6001600160a01b0383166110f95760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161057e565b6001600160a01b03821661115a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161057e565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006111c78484610d8b565b905060001981146107ab57818110156112225760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161057e565b6107ab8484848403611097565b6001600160a01b0383166112935760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161057e565b6001600160a01b0382166112f55760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161057e565b611300838383611b31565b6001600160a01b038316600090815260336020526040902054818110156113785760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161057e565b6001600160a01b038085166000908152603360205260408082208585039055918516815290812080548492906113af9084906128d7565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516113fb91815260200190565b60405180910390a36107ab848484611bc6565b60006106a07f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f61143d60655490565b6066546040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090509392505050565b8154600090815b818110156114ed5760006114a48284611bd1565b9050848682815481106114b9576114b9612906565b60009182526020909120015463ffffffff1611156114d9578092506114e7565b6114e48160016128d7565b91505b50611490565b811561153157846114ff6001846128ef565b8154811061150f5761150f612906565b60009182526020909120015464010000000090046001600160e01b0316611534565b60005b6001600160e01b031695945050505050565b6001600160a01b03828116600081815260cc6020818152604080842080546033845282862054949093528787166001600160a01b03198416811790915590519190951694919391928592917f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a46107ab828483611bec565b60fe546001600160a01b031633146115ea5760405162461bcd60e51b815260040161057e90612857565b8161162b5760405162461bcd60e51b815260206004820152601160248201527062756c6b5374616b65203020757365727360781b604482015260640161057e565b6000811161167b5760405162461bcd60e51b815260206004820152601760248201527f62756c6b5374616b65203020746f74616c416d6f756e74000000000000000000604482015260640161057e565b6000805b8381101561172a57600085858381811061169b5761169b612906565b9050604002016020013590508061013060008888868181106116bf576116bf612906565b6116d5926020604090920201908101915061255f565b6001600160a01b03166001600160a01b03168152602001908152602001600020600082825461170491906128d7565b90915550611714905081846128d7565b92505080806117229061291c565b91505061167f565b508181146107ab5760405162461bcd60e51b81526020600482015260156024820152741a5b98dbdc9c9958dd081d1bdd185b105b5bdd5b9d605a1b604482015260640161057e565b600063ffffffff8211156117d75760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201526532206269747360d01b606482015260840161057e565b5090565b60fe80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038116600090815260cd602052604081205480156118a1576001600160a01b038316600090815260cd6020526040902061186f6001836128ef565b8154811061187f5761187f612906565b60009182526020909120015464010000000090046001600160e01b03166118a4565b60005b6001600160e01b03169392505050565b600081116118fb5760405162461bcd60e51b815260206004820152601460248201527343616e6e6f74207374616b65206e6f7468696e6760601b604482015260640161057e565b33600090815261013060205260408120805483929061191b9084906128d7565b909155505060405181815233907f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d90602001610e69565b600061075c61195f61140e565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b60008060006119b187878787611d29565b915091506119be81611e16565b5095945050505050565b6001600160a01b03811660009081526099602052604090208054600181018255905b50919050565b60008054610100900460ff1615611a37578160ff166001148015611a135750303b155b611a2f5760405162461bcd60e51b815260040161057e90612937565b506000919050565b60005460ff808416911610611a5e5760405162461bcd60e51b815260040161057e90612937565b506000805460ff191660ff92909216919091179055600190565b919050565b600054610100900460ff16611aa45760405162461bcd60e51b815260040161057e90612985565b610807611fd1565b600054610100900460ff16611ad35760405162461bcd60e51b815260040161057e90612985565b610adf8282612001565b600054610100900460ff16611b045760405162461bcd60e51b815260040161057e90612985565b61069381604051806040016040528060018152602001603160f81b81525061204f565b610adf8282612090565b6001600160a01b0383161580611b54575060fe546001600160a01b038481169116145b80611b6757506001600160a01b03831630145b80611b7a57506001600160a01b03821630145b6105ac5760405162461bcd60e51b815260206004820152601e60248201527f45524332303a204e6f7420616c6c6f77656420746f207472616e736665720000604482015260640161057e565b6105ac83838361211a565b6000611be060028484186129d0565b61073a908484166128d7565b816001600160a01b0316836001600160a01b031614158015611c0e5750600081115b156105ac576001600160a01b03831615611c9c576001600160a01b038316600090815260cd602052604081208190611c499061214c85612158565b91509150846001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611c91929190918252602082015260400190565b60405180910390a250505b6001600160a01b038216156105ac576001600160a01b038216600090815260cd602052604081208190611cd2906122d185612158565b91509150836001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611d1a929190918252602082015260400190565b60405180910390a25050505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611d605750600090506003611e0d565b8460ff16601b14158015611d7857508460ff16601c14155b15611d895750600090506004611e0d565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611ddd573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611e0657600060019250925050611e0d565b9150600090505b94509492505050565b6000816004811115611e2a57611e2a6129f2565b1415611e335750565b6001816004811115611e4757611e476129f2565b1415611e955760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015260640161057e565b6002816004811115611ea957611ea96129f2565b1415611ef75760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161057e565b6003816004811115611f0b57611f0b6129f2565b1415611f645760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b606482015260840161057e565b6004816004811115611f7857611f786129f2565b14156106935760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b606482015260840161057e565b600054610100900460ff16611ff85760405162461bcd60e51b815260040161057e90612985565b610807336117db565b600054610100900460ff166120285760405162461bcd60e51b815260040161057e90612985565b815161203b906036906020850190612439565b5080516105ac906037906020840190612439565b600054610100900460ff166120765760405162461bcd60e51b815260040161057e90612985565b815160209283012081519190920120606591909155606655565b61209a82826122dd565b6035546001600160e01b03101561210c5760405162461bcd60e51b815260206004820152603060248201527f4552433230566f7465733a20746f74616c20737570706c79207269736b73206f60448201526f766572666c6f77696e6720766f74657360801b606482015260840161057e565b6107ab60ce6122d183612158565b6001600160a01b03838116600090815260cc60205260408082205485841683529120546105ac92918216911683611bec565b600061073a82846128ef565b8254600090819080156121a357856121716001836128ef565b8154811061218157612181612906565b60009182526020909120015464010000000090046001600160e01b03166121a6565b60005b6001600160e01b031692506121bf83858763ffffffff16565b91506000811180156121fd575043866121d96001846128ef565b815481106121e9576121e9612906565b60009182526020909120015463ffffffff16145b1561225d5761220b826123d0565b866122176001846128ef565b8154811061222757612227612906565b9060005260206000200160000160046101000a8154816001600160e01b0302191690836001600160e01b031602179055506122c8565b85604051806040016040528061227243611772565b63ffffffff168152602001612286856123d0565b6001600160e01b0390811690915282546001810184556000938452602093849020835194909301519091166401000000000263ffffffff909316929092179101555b50935093915050565b600061073a82846128d7565b6001600160a01b0382166123335760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161057e565b61233f60008383611b31565b806035600082825461235191906128d7565b90915550506001600160a01b0382166000908152603360205260408120805483929061237e9084906128d7565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3610adf60008383611bc6565b60006001600160e01b038211156117d75760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20326044820152663234206269747360c81b606482015260840161057e565b8280546124459061288c565b90600052602060002090601f01602090048101928261246757600085556124ad565b82601f1061248057805160ff19168380011785556124ad565b828001600101855582156124ad579182015b828111156124ad578251825591602001919060010190612492565b506117d79291505b808211156117d757600081556001016124b5565b80356001600160a01b0381168114611a7857600080fd5b600080604083850312156124f357600080fd5b6124fc836124c9565b946020939093013593505050565b600060208083528351808285015260005b818110156125375785810183015185820160400152820161251b565b81811115612549576000604083870101525b50601f01601f1916929092016040019392505050565b60006020828403121561257157600080fd5b61073a826124c9565b60008060006060848603121561258f57600080fd5b612598846124c9565b92506125a6602085016124c9565b9150604084013590509250925092565b6000602082840312156125c857600080fd5b5035919050565b6000806000604084860312156125e457600080fd5b833567ffffffffffffffff808211156125fc57600080fd5b818601915086601f83011261261057600080fd5b81358181111561261f57600080fd5b8760208260061b850101111561263457600080fd5b6020928301989097509590910135949350505050565b803560ff81168114611a7857600080fd5b60008060008060008060c0878903121561267457600080fd5b61267d876124c9565b955060208701359450604087013593506126996060880161264a565b92506080870135915060a087013590509295509295509295565b600080600080600080600060e0888a0312156126ce57600080fd5b6126d7886124c9565b96506126e5602089016124c9565b955060408801359450606088013593506127016080890161264a565b925060a0880135915060c0880135905092959891949750929550565b6000806040838503121561273057600080fd5b612739836124c9565b9150612747602084016124c9565b90509250929050565b6000806040838503121561276357600080fd5b61276c836124c9565b9150602083013563ffffffff8116811461278557600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b6000602082840312156127b857600080fd5b813567ffffffffffffffff808211156127d057600080fd5b818401915084601f8301126127e457600080fd5b8135818111156127f6576127f6612790565b604051601f8201601f19908116603f0116810190838211818310171561281e5761281e612790565b8160405282815287602084870101111561283757600080fd5b826020860160208301376000928101602001929092525095945050505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600181811c908216806128a057607f821691505b602082108114156119ea57634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082198211156128ea576128ea6128c1565b500190565b600082821015612901576129016128c1565b500390565b634e487b7160e01b600052603260045260246000fd5b6000600019821415612930576129306128c1565b5060010190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b6000826129ed57634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052602160045260246000fdfea2646970667358221220b5d0a1ec6dfe54cc09a3068bd1956cba047ef404388dbbe0f19f820f7a78a62464736f6c634300080b0033";

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