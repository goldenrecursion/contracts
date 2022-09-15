/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
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
  "0x608060405234801561001057600080fd5b50612844806100206000396000f3fe608060405234801561001057600080fd5b50600436106102065760003560e01c8063715018a61161011a578063a694fc3a116100ad578063dd62ed3e1161007c578063dd62ed3e1461049a578063eb36854e146104ad578063f1127ed8146104c0578063f2fde38b146104fd578063fe4b84df1461051057600080fd5b8063a694fc3a1461044e578063a9059cbb14610461578063c3cda52014610474578063d505accf1461048757600080fd5b80638e539e8c116100e95780638e539e8c1461040d57806395d89b41146104205780639ab24eb014610428578063a457c2d71461043b57600080fd5b8063715018a6146103ce5780637cb569de146103d65780637ecebe00146103e95780638da5cb5b146103fc57600080fd5b80633644e5151161019d578063587cde1e1161016c578063587cde1e146103135780635c19a95c146103575780636c8848c21461036a5780636fcfff451461037d57806370a08231146103a557600080fd5b80633644e515146102d257806339509351146102da5780633a46b1a8146102ed578063426233601461030057600080fd5b806323b62302116101d957806323b623021461027357806323b872dd1461029d5780632e17de78146102b0578063313ce567146102c357600080fd5b806302fb4d851461020b57806306fdde0314610220578063095ea7b31461023e57806318160ddd14610261575b600080fd5b61021e61021936600461256f565b610523565b005b610228610555565b60405161023591906126bb565b60405180910390f35b61025161024c36600461256f565b6105e7565b6040519015158152602001610235565b6035545b604051908152602001610235565b61026561028136600461247f565b6001600160a01b03166000908152610130602052604090205490565b6102516102ab3660046124cb565b6105ff565b61021e6102be3660046126a3565b610623565b60405160128152602001610235565b61026561063a565b6102516102e836600461256f565b610649565b6102656102fb36600461256f565b61066b565b61026561030e36600461247f565b6106ea565b61033f61032136600461247f565b6001600160a01b03908116600090815260cc60205260409020541690565b6040516001600160a01b039091168152602001610235565b61021e61036536600461247f565b61070b565b61021e61037836600461262d565b610715565b61039061038b36600461247f565b610738565b60405163ffffffff9091168152602001610235565b6102656103b336600461247f565b6001600160a01b031660009081526033602052604090205490565b61021e61075a565b61021e6103e436600461256f565b61076e565b6102656103f736600461247f565b61084f565b60fe546001600160a01b031661033f565b61026561041b3660046126a3565b61086d565b6102286108c9565b61026561043636600461247f565b6108d8565b61025161044936600461256f565b610905565b61021e61045c3660046126a3565b610980565b61025161046f36600461256f565b610997565b61021e610482366004612598565b6109a5565b61021e610495366004612506565b610adb565b6102656104a8366004612499565b610c3f565b61021e6104bb3660046126a3565b610c6a565b6104d36104ce3660046125ef565b610d28565b60408051825163ffffffff1681526020928301516001600160e01b03169281019290925201610235565b61021e61050b36600461247f565b610dba565b61021e61051e3660046126a3565b610e30565b61052b610fbf565b610535828261076e565b61055061054a60fe546001600160a01b031690565b82610997565b505050565b606060368054610564906127a8565b80601f0160208091040260200160405190810160405280929190818152602001828054610590906127a8565b80156105dd5780601f106105b2576101008083540402835291602001916105dd565b820191906000526020600020905b8154815290600101906020018083116105c057829003601f168201915b5050505050905090565b6000336105f5818585611019565b5060019392505050565b60003361060d85828561113d565b6106188585856111b1565b506001949350505050565b61062c81610c6a565b6106373033836111b1565b50565b6000610644611390565b905090565b6000336105f581858561065c8383610c3f565b6106669190612759565b611019565b60004382106106c15760405162461bcd60e51b815260206004820152601f60248201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e65640060448201526064015b60405180910390fd5b6001600160a01b038316600090815260cd602052604090206106e3908361140b565b9392505050565b6001600160a01b038116600090815261013060205260408120545b92915050565b61063733826114e4565b61071d610fbf565b61072883838361155e565b6107323082610997565b50505050565b6001600160a01b038116600090815260cd60205260408120546107059061170a565b610762610fbf565b61076c6000611773565b565b610776610fbf565b6001600160a01b038216600090815261013060205260409020548111156107df5760405162461bcd60e51b815260206004820152601760248201527f5f736c6173683a20657863656564732062616c616e636500000000000000000060448201526064016106b8565b6001600160a01b0382166000908152610130602052604081208054839290610808908490612791565b90915550506040518181526001600160a01b038316907f4ed05e9673c26d2ed44f7ef6a7f2942df0ee3b5e1e17db4b99f9dcd261a339cd9060200160405180910390a25050565b6001600160a01b038116600090815260996020526040812054610705565b60004382106108be5760405162461bcd60e51b815260206004820152601f60248201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e65640060448201526064016106b8565b61070560ce8361140b565b606060378054610564906127a8565b6001600160a01b038116600090815261013060205260408120546108fb836117c5565b6107059190612759565b600033816109138286610c3f565b9050838110156109735760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016106b8565b6106188286868403611019565b6109898161185a565b6109933082610997565b5050565b6000336105f58185856111b1565b834211156109f55760405162461bcd60e51b815260206004820152601d60248201527f4552433230566f7465733a207369676e6174757265206578706972656400000060448201526064016106b8565b604080517fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60208201526001600160a01b038816918101919091526060810186905260808101859052600090610a6f90610a679060a001604051602081830303815290604052805190602001206118f8565b858585611946565b9050610a7a8161196e565b8614610ac85760405162461bcd60e51b815260206004820152601960248201527f4552433230566f7465733a20696e76616c6964206e6f6e63650000000000000060448201526064016106b8565b610ad281886114e4565b50505050505050565b83421115610b2b5760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e6500000060448201526064016106b8565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9888888610b5a8c61196e565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e0016040516020818303038152906040528051906020012090506000610bb5826118f8565b90506000610bc582878787611946565b9050896001600160a01b0316816001600160a01b031614610c285760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e6174757265000060448201526064016106b8565b610c338a8a8a611019565b50505050505050505050565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b3360009081526101306020526040902054811115610cca5760405162461bcd60e51b815260206004820152601960248201527f5f756e7374616b653a20657863656564732062616c616e63650000000000000060448201526064016106b8565b336000908152610130602052604081208054839290610cea908490612791565b909155505060405181815233907f79d3df6837cc49ff0e09fd3258e6e45594e0703445bb06825e9d75156eaee8f0906020015b60405180910390a250565b60408051808201909152600080825260208201526001600160a01b038316600090815260cd60205260409020805463ffffffff8416908110610d7a57634e487b7160e01b600052603260045260246000fd5b60009182526020918290206040805180820190915291015463ffffffff8116825264010000000090046001600160e01b0316918101919091529392505050565b610dc2610fbf565b6001600160a01b038116610e275760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016106b8565b61063781611773565b600054610100900460ff1615808015610e505750600054600160ff909116105b80610e6a5750303b158015610e6a575060005460ff166001145b610ecd5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016106b8565b6000805460ff191660011790558015610ef0576000805461ff0019166101001790555b610ef8611996565b610f406040518060400160405280600b81526020016a23b7b63232b72a37b5b2b760a91b8152506040518060400160405280600381526020016211d31160ea1b8152506119c5565b610f6c6040518060400160405280600b81526020016a23b7b63232b72a37b5b2b760a91b8152506119f6565b610f763383611a40565b8015610993576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b60fe546001600160a01b0316331461076c5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016106b8565b6001600160a01b03831661107b5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016106b8565b6001600160a01b0382166110dc5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016106b8565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006111498484610c3f565b9050600019811461073257818110156111a45760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016106b8565b6107328484848403611019565b6001600160a01b0383166112155760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016106b8565b6001600160a01b0382166112775760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016106b8565b611282838383611a4a565b6001600160a01b038316600090815260336020526040902054818110156112fa5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016106b8565b6001600160a01b03808516600090815260336020526040808220858503905591851681529081208054849290611331908490612759565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161137d91815260200190565b60405180910390a3610732848484611adf565b60006106447f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6113bf60655490565b6066546040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090509392505050565b8154600090815b8181101561147d5760006114268284611aea565b90508486828154811061144957634e487b7160e01b600052603260045260246000fd5b60009182526020909120015463ffffffff16111561146957809250611477565b611474816001612759565b91505b50611412565b81156114cf578461148f600184612791565b815481106114ad57634e487b7160e01b600052603260045260246000fd5b60009182526020909120015464010000000090046001600160e01b03166114d2565b60005b6001600160e01b031695945050505050565b6001600160a01b03828116600081815260cc6020818152604080842080546033845282862054949093528787166001600160a01b03198416811790915590519190951694919391928592917f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a4610732828483611b05565b611566610fbf565b816115a75760405162461bcd60e51b815260206004820152601160248201527062756c6b5374616b65203020757365727360781b60448201526064016106b8565b600081116115f75760405162461bcd60e51b815260206004820152601760248201527f62756c6b5374616b65203020746f74616c416d6f756e7400000000000000000060448201526064016106b8565b6000805b838110156116c257600085858381811061162557634e487b7160e01b600052603260045260246000fd5b90506040020160200135905080610130600088888681811061165757634e487b7160e01b600052603260045260246000fd5b61166d926020604090920201908101915061247f565b6001600160a01b03166001600160a01b03168152602001908152602001600020600082825461169c9190612759565b909155506116ac90508184612759565b92505080806116ba906127dd565b9150506115fb565b508181146107325760405162461bcd60e51b81526020600482015260156024820152741a5b98dbdc9c9958dd081d1bdd185b105b5bdd5b9d605a1b60448201526064016106b8565b600063ffffffff82111561176f5760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201526532206269747360d01b60648201526084016106b8565b5090565b60fe80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b038116600090815260cd60205260408120548015611847576001600160a01b038316600090815260cd60205260409020611807600183612791565b8154811061182557634e487b7160e01b600052603260045260246000fd5b60009182526020909120015464010000000090046001600160e01b031661184a565b60005b6001600160e01b03169392505050565b600081116118a15760405162461bcd60e51b815260206004820152601460248201527343616e6e6f74207374616b65206e6f7468696e6760601b60448201526064016106b8565b3360009081526101306020526040812080548392906118c1908490612759565b909155505060405181815233907f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d90602001610d1d565b6000610705611905611390565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b600080600061195787878787611c42565b9150915061196481611d2f565b5095945050505050565b6001600160a01b03811660009081526099602052604090208054600181018255905b50919050565b600054610100900460ff166119bd5760405162461bcd60e51b81526004016106b89061270e565b61076c611f30565b600054610100900460ff166119ec5760405162461bcd60e51b81526004016106b89061270e565b6109938282611f60565b600054610100900460ff16611a1d5760405162461bcd60e51b81526004016106b89061270e565b61063781604051806040016040528060018152602001603160f81b815250611fae565b6109938282611fef565b6001600160a01b0383161580611a6d575060fe546001600160a01b038481169116145b80611a8057506001600160a01b03831630145b80611a9357506001600160a01b03821630145b6105505760405162461bcd60e51b815260206004820152601e60248201527f45524332303a204e6f7420616c6c6f77656420746f207472616e73666572000060448201526064016106b8565b610550838383612079565b6000611af96002848418612771565b6106e390848416612759565b816001600160a01b0316836001600160a01b031614158015611b275750600081115b15610550576001600160a01b03831615611bb5576001600160a01b038316600090815260cd602052604081208190611b62906120ab856120b7565b91509150846001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611baa929190918252602082015260400190565b60405180910390a250505b6001600160a01b03821615610550576001600160a01b038216600090815260cd602052604081208190611beb9061225a856120b7565b91509150836001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611c33929190918252602082015260400190565b60405180910390a25050505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611c795750600090506003611d26565b8460ff16601b14158015611c9157508460ff16601c14155b15611ca25750600090506004611d26565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611cf6573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611d1f57600060019250925050611d26565b9150600090505b94509492505050565b6000816004811115611d5157634e487b7160e01b600052602160045260246000fd5b1415611d5a5750565b6001816004811115611d7c57634e487b7160e01b600052602160045260246000fd5b1415611dca5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016106b8565b6002816004811115611dec57634e487b7160e01b600052602160045260246000fd5b1415611e3a5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016106b8565b6003816004811115611e5c57634e487b7160e01b600052602160045260246000fd5b1415611eb55760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016106b8565b6004816004811115611ed757634e487b7160e01b600052602160045260246000fd5b14156106375760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b60648201526084016106b8565b600054610100900460ff16611f575760405162461bcd60e51b81526004016106b89061270e565b61076c33611773565b600054610100900460ff16611f875760405162461bcd60e51b81526004016106b89061270e565b8151611f9a9060369060208501906123c2565b5080516105509060379060208401906123c2565b600054610100900460ff16611fd55760405162461bcd60e51b81526004016106b89061270e565b815160209283012081519190920120606591909155606655565b611ff98282612266565b6035546001600160e01b03101561206b5760405162461bcd60e51b815260206004820152603060248201527f4552433230566f7465733a20746f74616c20737570706c79207269736b73206f60448201526f766572666c6f77696e6720766f74657360801b60648201526084016106b8565b61073260ce61225a836120b7565b6001600160a01b03838116600090815260cc602052604080822054858416835291205461055092918216911683611b05565b60006106e38284612791565b82546000908190801561211057856120d0600183612791565b815481106120ee57634e487b7160e01b600052603260045260246000fd5b60009182526020909120015464010000000090046001600160e01b0316612113565b60005b6001600160e01b0316925061212c83858763ffffffff16565b915060008111801561217857504386612146600184612791565b8154811061216457634e487b7160e01b600052603260045260246000fd5b60009182526020909120015463ffffffff16145b156121e65761218682612359565b86612192600184612791565b815481106121b057634e487b7160e01b600052603260045260246000fd5b9060005260206000200160000160046101000a8154816001600160e01b0302191690836001600160e01b03160217905550612251565b8560405180604001604052806121fb4361170a565b63ffffffff16815260200161220f85612359565b6001600160e01b0390811690915282546001810184556000938452602093849020835194909301519091166401000000000263ffffffff909316929092179101555b50935093915050565b60006106e38284612759565b6001600160a01b0382166122bc5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016106b8565b6122c860008383611a4a565b80603560008282546122da9190612759565b90915550506001600160a01b03821660009081526033602052604081208054839290612307908490612759565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a361099360008383611adf565b60006001600160e01b0382111561176f5760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20326044820152663234206269747360c81b60648201526084016106b8565b8280546123ce906127a8565b90600052602060002090601f0160209004810192826123f05760008555612436565b82601f1061240957805160ff1916838001178555612436565b82800160010185558215612436579182015b8281111561243657825182559160200191906001019061241b565b5061176f9291505b8082111561176f576000815560010161243e565b80356001600160a01b038116811461246957600080fd5b919050565b803560ff8116811461246957600080fd5b600060208284031215612490578081fd5b6106e382612452565b600080604083850312156124ab578081fd5b6124b483612452565b91506124c260208401612452565b90509250929050565b6000806000606084860312156124df578081fd5b6124e884612452565b92506124f660208501612452565b9150604084013590509250925092565b600080600080600080600060e0888a031215612520578283fd5b61252988612452565b965061253760208901612452565b955060408801359450606088013593506125536080890161246e565b925060a0880135915060c0880135905092959891949750929550565b60008060408385031215612581578182fd5b61258a83612452565b946020939093013593505050565b60008060008060008060c087890312156125b0578182fd5b6125b987612452565b955060208701359450604087013593506125d56060880161246e565b92506080870135915060a087013590509295509295509295565b60008060408385031215612601578182fd5b61260a83612452565b9150602083013563ffffffff81168114612622578182fd5b809150509250929050565b600080600060408486031215612641578283fd5b833567ffffffffffffffff80821115612658578485fd5b818601915086601f83011261266b578485fd5b813581811115612679578586fd5b8760208260061b850101111561268d578586fd5b6020928301989097509590910135949350505050565b6000602082840312156126b4578081fd5b5035919050565b6000602080835283518082850152825b818110156126e7578581018301518582016040015282016126cb565b818111156126f85783604083870101525b50601f01601f1916929092016040019392505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b6000821982111561276c5761276c6127f8565b500190565b60008261278c57634e487b7160e01b81526012600452602481fd5b500490565b6000828210156127a3576127a36127f8565b500390565b600181811c908216806127bc57607f821691505b6020821081141561199057634e487b7160e01b600052602260045260246000fd5b60006000198214156127f1576127f16127f8565b5060010190565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220950b6bd72ec8f5cea1b8adcdb00d897ba701a402d5012ee104a06fe0aaf3d69c64736f6c63430008040033";

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
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GoldenToken> {
    return super.deploy(overrides || {}) as Promise<GoldenToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
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
