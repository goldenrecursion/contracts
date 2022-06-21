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
  "0x608060405234801561001057600080fd5b50612919806100206000396000f3fe608060405234801561001057600080fd5b50600436106102115760003560e01c80637c65452c11610125578063a9059cbb116100ad578063eb36854e1161007c578063eb36854e146104ad578063f1127ed8146104c0578063f2fde38b146104fd578063f6aa2a1014610510578063fe4b84df1461052357600080fd5b8063a9059cbb14610461578063c3cda52014610474578063d505accf14610487578063dd62ed3e1461049a57600080fd5b80638e539e8c116100f45780638e539e8c1461040d57806395d89b41146104205780639ab24eb014610428578063a457c2d71461043b578063a694fc3a1461044e57600080fd5b80637c65452c146103ce5780637cb569de146103d65780637ecebe00146103e95780638da5cb5b146103fc57600080fd5b80633644e515116101a85780635c19a95c116101775780635c19a95c1461034f5780636c8848c2146103625780636fcfff451461037557806370a082311461039d578063715018a6146103c657600080fd5b80633644e515146102dd57806339509351146102e55780633a46b1a8146102f8578063587cde1e1461030b57600080fd5b806323b62302116101e457806323b623021461027e57806323b872dd146102a85780632e17de78146102bb578063313ce567146102ce57600080fd5b806302fb4d851461021657806306fdde031461022b578063095ea7b31461024957806318160ddd1461026c575b600080fd5b6102296102243660046123bb565b610536565b005b610233610593565b60405161024091906123e5565b60405180910390f35b61025c6102573660046123bb565b610625565b6040519015158152602001610240565b6035545b604051908152602001610240565b61027061028c36600461243a565b6001600160a01b03166000908152610130602052604090205490565b61025c6102b6366004612455565b61063d565b6102296102c9366004612491565b610661565b60405160128152602001610240565b61027061067a565b61025c6102f33660046123bb565b610689565b6102706103063660046123bb565b6106ab565b61033761031936600461243a565b6001600160a01b03908116600090815260cc60205260409020541690565b6040516001600160a01b039091168152602001610240565b61022961035d36600461243a565b610725565b6102296103703660046124aa565b610732565b61038861038336600461243a565b610777565b60405163ffffffff9091168152602001610240565b6102706103ab36600461243a565b6001600160a01b031660009081526033602052604090205490565b61022961079f565b6102336107d5565b6102296103e43660046123bb565b610864565b6102706103f736600461243a565b610929565b60fe546001600160a01b0316610337565b61027061041b366004612491565b610947565b6102336109a3565b61027061043636600461243a565b6109b2565b61025c6104493660046123bb565b6109df565b61022961045c366004612491565b610a5a565b61025c61046f3660046123bb565b610a69565b610229610482366004612536565b610a77565b61022961049536600461258e565b610bad565b6102706104a83660046125f8565b610d11565b6102296104bb366004612491565b610d3c565b6104d36104ce36600461262b565b610dc4565b60408051825163ffffffff1681526020928301516001600160e01b03169281019290925201610240565b61022961050b36600461243a565b610e48565b61022961051e366004612681565b610ee0565b610229610531366004612491565b610ef4565b60fe546001600160a01b031633146105695760405162461bcd60e51b815260040161056090612732565b60405180910390fd5b6105738282610864565b61058e61058860fe546001600160a01b031690565b82610a69565b505050565b6060603680546105a290612767565b80601f01602080910402602001604051908101604052809291908181526020018280546105ce90612767565b801561061b5780601f106105f05761010080835404028352916020019161061b565b820191906000526020600020905b8154815290600101906020018083116105fe57829003601f168201915b5050505050905090565b600033610633818585610fe7565b5060019392505050565b60003361064b85828561110b565b61065685858561117f565b506001949350505050565b61066a81610d3c565b3361067630828461117f565b5050565b600061068461135e565b905090565b60003361063381858561069c8383610d11565b6106a691906127b2565b610fe7565b60004382106106fc5760405162461bcd60e51b815260206004820152601f60248201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e6564006044820152606401610560565b6001600160a01b038316600090815260cd6020526040902061071e90836113d9565b9392505050565b61072f3382611496565b50565b60fe546001600160a01b0316331461075c5760405162461bcd60e51b815260040161056090612732565b610767838383611510565b6107713082610a69565b50505050565b6001600160a01b038116600090815260cd602052604081205461079990611647565b92915050565b60fe546001600160a01b031633146107c95760405162461bcd60e51b815260040161056090612732565b6107d360006116b0565b565b61013180546107e390612767565b80601f016020809104026020016040519081016040528092919081815260200182805461080f90612767565b801561085c5780601f106108315761010080835404028352916020019161085c565b820191906000526020600020905b81548152906001019060200180831161083f57829003601f168201915b505050505081565b60fe546001600160a01b0316331461088e5760405162461bcd60e51b815260040161056090612732565b6001600160a01b038216600090815261013060205260409020548111156108f75760405162461bcd60e51b815260206004820152601760248201527f5f736c6173683a20657863656564732062616c616e63650000000000000000006044820152606401610560565b6001600160a01b03821660009081526101306020526040812080548392906109209084906127ca565b90915550505050565b6001600160a01b038116600090815260996020526040812054610799565b60004382106109985760405162461bcd60e51b815260206004820152601f60248201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e6564006044820152606401610560565b61079960ce836113d9565b6060603780546105a290612767565b6001600160a01b038116600090815261013060205260408120546109d583611702565b61079991906127b2565b600033816109ed8286610d11565b905083811015610a4d5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610560565b6106568286868403610fe7565b610a6381611789565b61067630825b60003361063381858561117f565b83421115610ac75760405162461bcd60e51b815260206004820152601d60248201527f4552433230566f7465733a207369676e617475726520657870697265640000006044820152606401610560565b604080517fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60208201526001600160a01b038816918101919091526060810186905260808101859052600090610b4190610b399060a0016040516020818303038152906040528051906020012061182d565b85858561187b565b9050610b4c816118a3565b8614610b9a5760405162461bcd60e51b815260206004820152601960248201527f4552433230566f7465733a20696e76616c6964206e6f6e6365000000000000006044820152606401610560565b610ba48188611496565b50505050505050565b83421115610bfd5760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152606401610560565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9888888610c2c8c6118a3565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e0016040516020818303038152906040528051906020012090506000610c878261182d565b90506000610c978287878761187b565b9050896001600160a01b0316816001600160a01b031614610cfa5760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152606401610560565b610d058a8a8a610fe7565b50505050505050505050565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b3360009081526101306020526040902054811115610d9c5760405162461bcd60e51b815260206004820152601960248201527f5f756e7374616b653a20657863656564732062616c616e6365000000000000006044820152606401610560565b336000908152610130602052604081208054839290610dbc9084906127ca565b909155505050565b60408051808201909152600080825260208201526001600160a01b038316600090815260cd60205260409020805463ffffffff8416908110610e0857610e086127e1565b60009182526020918290206040805180820190915291015463ffffffff8116825264010000000090046001600160e01b0316918101919091529392505050565b60fe546001600160a01b03163314610e725760405162461bcd60e51b815260040161056090612732565b6001600160a01b038116610ed75760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610560565b61072f816116b0565b805161067690610131906020840190612314565b6000610f0060016118cb565b90508015610f18576000805461ff0019166101001790555b610f20611958565b610f686040518060400160405280600b81526020016a23b7b63232b72a37b5b2b760a91b8152506040518060400160405280600381526020016211d31160ea1b815250611987565b610f946040518060400160405280600b81526020016a23b7b63232b72a37b5b2b760a91b8152506119b8565b610f9e3383611a02565b8015610676576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b6001600160a01b0383166110495760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610560565b6001600160a01b0382166110aa5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610560565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006111178484610d11565b9050600019811461077157818110156111725760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610560565b6107718484848403610fe7565b6001600160a01b0383166111e35760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610560565b6001600160a01b0382166112455760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610560565b611250838383611a0c565b6001600160a01b038316600090815260336020526040902054818110156112c85760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610560565b6001600160a01b038085166000908152603360205260408082208585039055918516815290812080548492906112ff9084906127b2565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161134b91815260200190565b60405180910390a3610771848484611aa1565b60006106847f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f61138d60655490565b6066546040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090509392505050565b8154600090815b8181101561143d5760006113f48284611aac565b905084868281548110611409576114096127e1565b60009182526020909120015463ffffffff16111561142957809250611437565b6114348160016127b2565b91505b506113e0565b8115611481578461144f6001846127ca565b8154811061145f5761145f6127e1565b60009182526020909120015464010000000090046001600160e01b0316611484565b60005b6001600160e01b031695945050505050565b6001600160a01b03828116600081815260cc6020818152604080842080546033845282862054949093528787166001600160a01b03198416811790915590519190951694919391928592917f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a4610771828483611ac7565b60fe546001600160a01b0316331461153a5760405162461bcd60e51b815260040161056090612732565b6000805b838110156115ff57848482818110611558576115586127e1565b905060400201602001356101306000878785818110611579576115796127e1565b61158f926020604090920201908101915061243a565b6001600160a01b03166001600160a01b0316815260200190815260200160002060008282546115be91906127b2565b9091555085905084828181106115d6576115d66127e1565b90506040020160200135826115eb91906127b2565b9150806115f7816127f7565b91505061153e565b508181146107715760405162461bcd60e51b81526020600482015260156024820152741a5b98dbdc9c9958dd081d1bdd185b105b5bdd5b9d605a1b6044820152606401610560565b600063ffffffff8211156116ac5760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201526532206269747360d01b6064820152608401610560565b5090565b60fe80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038116600090815260cd60205260408120548015611776576001600160a01b038316600090815260cd602052604090206117446001836127ca565b81548110611754576117546127e1565b60009182526020909120015464010000000090046001600160e01b0316611779565b60005b6001600160e01b03169392505050565b600081116117d05760405162461bcd60e51b815260206004820152601460248201527343616e6e6f74207374616b65206e6f7468696e6760601b6044820152606401610560565b3360009081526101306020526040812080548392906117f09084906127b2565b909155505060405181815233907f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d9060200160405180910390a250565b600061079961183a61135e565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b600080600061188c87878787611c04565b9150915061189981611cf1565b5095945050505050565b6001600160a01b03811660009081526099602052604090208054600181018255905b50919050565b60008054610100900460ff1615611912578160ff1660011480156118ee5750303b155b61190a5760405162461bcd60e51b815260040161056090612812565b506000919050565b60005460ff8084169116106119395760405162461bcd60e51b815260040161056090612812565b506000805460ff191660ff92909216919091179055600190565b919050565b600054610100900460ff1661197f5760405162461bcd60e51b815260040161056090612860565b6107d3611eac565b600054610100900460ff166119ae5760405162461bcd60e51b815260040161056090612860565b6106768282611edc565b600054610100900460ff166119df5760405162461bcd60e51b815260040161056090612860565b61072f81604051806040016040528060018152602001603160f81b815250611f2a565b6106768282611f6b565b6001600160a01b0383161580611a2f575060fe546001600160a01b038481169116145b80611a4257506001600160a01b03831630145b80611a5557506001600160a01b03821630145b61058e5760405162461bcd60e51b815260206004820152601e60248201527f45524332303a204e6f7420616c6c6f77656420746f207472616e7366657200006044820152606401610560565b61058e838383611ff5565b6000611abb60028484186128ab565b61071e908484166127b2565b816001600160a01b0316836001600160a01b031614158015611ae95750600081115b1561058e576001600160a01b03831615611b77576001600160a01b038316600090815260cd602052604081208190611b249061202785612033565b91509150846001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611b6c929190918252602082015260400190565b60405180910390a250505b6001600160a01b0382161561058e576001600160a01b038216600090815260cd602052604081208190611bad906121ac85612033565b91509150836001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611bf5929190918252602082015260400190565b60405180910390a25050505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611c3b5750600090506003611ce8565b8460ff16601b14158015611c5357508460ff16601c14155b15611c645750600090506004611ce8565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611cb8573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611ce157600060019250925050611ce8565b9150600090505b94509492505050565b6000816004811115611d0557611d056128cd565b1415611d0e5750565b6001816004811115611d2257611d226128cd565b1415611d705760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610560565b6002816004811115611d8457611d846128cd565b1415611dd25760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610560565b6003816004811115611de657611de66128cd565b1415611e3f5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610560565b6004816004811115611e5357611e536128cd565b141561072f5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610560565b600054610100900460ff16611ed35760405162461bcd60e51b815260040161056090612860565b6107d3336116b0565b600054610100900460ff16611f035760405162461bcd60e51b815260040161056090612860565b8151611f16906036906020850190612314565b50805161058e906037906020840190612314565b600054610100900460ff16611f515760405162461bcd60e51b815260040161056090612860565b815160209283012081519190920120606591909155606655565b611f7582826121b8565b6035546001600160e01b031015611fe75760405162461bcd60e51b815260206004820152603060248201527f4552433230566f7465733a20746f74616c20737570706c79207269736b73206f60448201526f766572666c6f77696e6720766f74657360801b6064820152608401610560565b61077160ce6121ac83612033565b6001600160a01b03838116600090815260cc602052604080822054858416835291205461058e92918216911683611ac7565b600061071e82846127ca565b82546000908190801561207e578561204c6001836127ca565b8154811061205c5761205c6127e1565b60009182526020909120015464010000000090046001600160e01b0316612081565b60005b6001600160e01b0316925061209a83858763ffffffff16565b91506000811180156120d8575043866120b46001846127ca565b815481106120c4576120c46127e1565b60009182526020909120015463ffffffff16145b15612138576120e6826122ab565b866120f26001846127ca565b81548110612102576121026127e1565b9060005260206000200160000160046101000a8154816001600160e01b0302191690836001600160e01b031602179055506121a3565b85604051806040016040528061214d43611647565b63ffffffff168152602001612161856122ab565b6001600160e01b0390811690915282546001810184556000938452602093849020835194909301519091166401000000000263ffffffff909316929092179101555b50935093915050565b600061071e82846127b2565b6001600160a01b03821661220e5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610560565b61221a60008383611a0c565b806035600082825461222c91906127b2565b90915550506001600160a01b038216600090815260336020526040812080548392906122599084906127b2565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a361067660008383611aa1565b60006001600160e01b038211156116ac5760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20326044820152663234206269747360c81b6064820152608401610560565b82805461232090612767565b90600052602060002090601f0160209004810192826123425760008555612388565b82601f1061235b57805160ff1916838001178555612388565b82800160010185558215612388579182015b8281111561238857825182559160200191906001019061236d565b506116ac9291505b808211156116ac5760008155600101612390565b80356001600160a01b038116811461195357600080fd5b600080604083850312156123ce57600080fd5b6123d7836123a4565b946020939093013593505050565b600060208083528351808285015260005b81811015612412578581018301518582016040015282016123f6565b81811115612424576000604083870101525b50601f01601f1916929092016040019392505050565b60006020828403121561244c57600080fd5b61071e826123a4565b60008060006060848603121561246a57600080fd5b612473846123a4565b9250612481602085016123a4565b9150604084013590509250925092565b6000602082840312156124a357600080fd5b5035919050565b6000806000604084860312156124bf57600080fd5b833567ffffffffffffffff808211156124d757600080fd5b818601915086601f8301126124eb57600080fd5b8135818111156124fa57600080fd5b8760208260061b850101111561250f57600080fd5b6020928301989097509590910135949350505050565b803560ff8116811461195357600080fd5b60008060008060008060c0878903121561254f57600080fd5b612558876123a4565b9550602087013594506040870135935061257460608801612525565b92506080870135915060a087013590509295509295509295565b600080600080600080600060e0888a0312156125a957600080fd5b6125b2886123a4565b96506125c0602089016123a4565b955060408801359450606088013593506125dc60808901612525565b925060a0880135915060c0880135905092959891949750929550565b6000806040838503121561260b57600080fd5b612614836123a4565b9150612622602084016123a4565b90509250929050565b6000806040838503121561263e57600080fd5b612647836123a4565b9150602083013563ffffffff8116811461266057600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561269357600080fd5b813567ffffffffffffffff808211156126ab57600080fd5b818401915084601f8301126126bf57600080fd5b8135818111156126d1576126d161266b565b604051601f8201601f19908116603f011681019083821181831017156126f9576126f961266b565b8160405282815287602084870101111561271257600080fd5b826020860160208301376000928101602001929092525095945050505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b600181811c9082168061277b57607f821691505b602082108114156118c557634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082198211156127c5576127c561279c565b500190565b6000828210156127dc576127dc61279c565b500390565b634e487b7160e01b600052603260045260246000fd5b600060001982141561280b5761280b61279c565b5060010190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b6000826128c857634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052602160045260246000fdfea26469706673582212206fa0c6a503fabb94a741d0755a32acbc2d9f2b1546f7a9dc0bb578646134622764736f6c634300080b0033";

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
