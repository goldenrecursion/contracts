/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GoldenTokenV2,
  GoldenTokenV2Interface,
} from "../../contracts/GoldenTokenV2";

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
  "0x608060405234801561001057600080fd5b5061263d806100206000396000f3fe608060405234801561001057600080fd5b50600436106102065760003560e01c8063715018a61161011a578063a457c2d7116100ad578063d505accf1161007c578063d505accf1461049a578063dd62ed3e146104ad578063eb36854e146104c0578063f1127ed8146104d3578063f2fde38b1461051057600080fd5b8063a457c2d71461044e578063a694fc3a14610461578063a9059cbb14610474578063c3cda5201461048757600080fd5b80638da5cb5b116100e95780638da5cb5b1461040f5780638e539e8c1461042057806395d89b41146104335780639ab24eb01461043b57600080fd5b8063715018a6146103ce5780637cb569de146103d65780637ecebe00146103e957806384144dcf146103fc57600080fd5b80633644e5151161019d578063587cde1e1161016c578063587cde1e146103135780635c19a95c146103575780636c8848c21461036a5780636fcfff451461037d57806370a08231146103a557600080fd5b80633644e515146102d257806339509351146102da5780633a46b1a8146102ed578063426233601461030057600080fd5b806323b62302116101d957806323b623021461027357806323b872dd1461029d5780632e17de78146102b0578063313ce567146102c357600080fd5b806302fb4d851461020b57806306fdde0314610220578063095ea7b31461023e57806318160ddd14610261575b600080fd5b61021e6102193660046123b3565b610523565b005b610228610555565b60405161023591906124ff565b60405180910390f35b61025161024c3660046123b3565b6105e7565b6040519015158152602001610235565b6035545b604051908152602001610235565b6102656102813660046122c3565b6001600160a01b03166000908152610130602052604090205490565b6102516102ab36600461230f565b6105ff565b61021e6102be3660046124e7565b610623565b60405160128152602001610235565b610265610639565b6102516102e83660046123b3565b610648565b6102656102fb3660046123b3565b61066a565b61026561030e3660046122c3565b6106e9565b61033f6103213660046122c3565b6001600160a01b03908116600090815260cc60205260409020541690565b6040516001600160a01b039091168152602001610235565b61021e6103653660046122c3565b61070a565b61021e610378366004612471565b610714565b61039061038b3660046122c3565b610737565b60405163ffffffff9091168152602001610235565b6102656103b33660046122c3565b6001600160a01b031660009081526033602052604090205490565b61021e610759565b61021e6103e43660046123b3565b61076d565b6102656103f73660046122c3565b61084e565b61021e61040a366004612471565b61086c565b60fe546001600160a01b031661033f565b61026561042e3660046124e7565b610899565b6102286108f5565b6102656104493660046122c3565b610904565b61025161045c3660046123b3565b610931565b61021e61046f3660046124e7565b6109ac565b6102516104823660046123b3565b6109bb565b61021e6104953660046123dc565b6109c9565b61021e6104a836600461234a565b610aff565b6102656104bb3660046122dd565b610c63565b61021e6104ce3660046124e7565b610c8e565b6104e66104e1366004612433565b610d4c565b60408051825163ffffffff1681526020928301516001600160e01b03169281019290925201610235565b61021e61051e3660046122c3565b610dde565b61052b610e54565b610535828261076d565b6105513061054b60fe546001600160a01b031690565b83610eae565b5050565b606060368054610564906125a1565b80601f0160208091040260200160405190810160405280929190818152602001828054610590906125a1565b80156105dd5780601f106105b2576101008083540402835291602001916105dd565b820191906000526020600020905b8154815290600101906020018083116105c057829003601f168201915b5050505050905090565b6000336105f581858561108d565b5060019392505050565b60003361060d8582856111b1565b610618858585610eae565b506001949350505050565b61062c81610c8e565b610636303361054b565b50565b6000610643611225565b905090565b6000336105f581858561065b8383610c63565b6106659190612552565b61108d565b60004382106106c05760405162461bcd60e51b815260206004820152601f60248201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e65640060448201526064015b60405180910390fd5b6001600160a01b038316600090815260cd602052604090206106e290836112a0565b9392505050565b6001600160a01b038116600090815261013060205260408120545b92915050565b6106363382611379565b61071c610e54565b6107278383836113f3565b61073130826109bb565b50505050565b6001600160a01b038116600090815260cd602052604081205461070490611616565b610761610e54565b61076b600061167f565b565b610775610e54565b6001600160a01b038216600090815261013060205260409020548111156107de5760405162461bcd60e51b815260206004820152601760248201527f5f736c6173683a20657863656564732062616c616e636500000000000000000060448201526064016106b7565b6001600160a01b038216600090815261013060205260408120805483929061080790849061258a565b90915550506040518181526001600160a01b038316907f4ed05e9673c26d2ed44f7ef6a7f2942df0ee3b5e1e17db4b99f9dcd261a339cd9060200160405180910390a25050565b6001600160a01b038116600090815260996020526040812054610704565b610874610e54565b60006108818484846116d1565b90506107313061054b60fe546001600160a01b031690565b60004382106108ea5760405162461bcd60e51b815260206004820152601f60248201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e65640060448201526064016106b7565b61070460ce836112a0565b606060378054610564906125a1565b6001600160a01b0381166000908152610130602052604081205461092783611984565b6107049190612552565b6000338161093f8286610c63565b90508381101561099f5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016106b7565b610618828686840361108d565b6109b581611a19565b61055130825b6000336105f5818585610eae565b83421115610a195760405162461bcd60e51b815260206004820152601d60248201527f4552433230566f7465733a207369676e6174757265206578706972656400000060448201526064016106b7565b604080517fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60208201526001600160a01b038816918101919091526060810186905260808101859052600090610a9390610a8b9060a00160405160208183030381529060405280519060200120611ab7565b858585611b05565b9050610a9e81611b2d565b8614610aec5760405162461bcd60e51b815260206004820152601960248201527f4552433230566f7465733a20696e76616c6964206e6f6e63650000000000000060448201526064016106b7565b610af68188611379565b50505050505050565b83421115610b4f5760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e6500000060448201526064016106b7565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9888888610b7e8c611b2d565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e0016040516020818303038152906040528051906020012090506000610bd982611ab7565b90506000610be982878787611b05565b9050896001600160a01b0316816001600160a01b031614610c4c5760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e6174757265000060448201526064016106b7565b610c578a8a8a61108d565b50505050505050505050565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b3360009081526101306020526040902054811115610cee5760405162461bcd60e51b815260206004820152601960248201527f5f756e7374616b653a20657863656564732062616c616e63650000000000000060448201526064016106b7565b336000908152610130602052604081208054839290610d0e90849061258a565b909155505060405181815233907f79d3df6837cc49ff0e09fd3258e6e45594e0703445bb06825e9d75156eaee8f0906020015b60405180910390a250565b60408051808201909152600080825260208201526001600160a01b038316600090815260cd60205260409020805463ffffffff8416908110610d9e57634e487b7160e01b600052603260045260246000fd5b60009182526020918290206040805180820190915291015463ffffffff8116825264010000000090046001600160e01b0316918101919091529392505050565b610de6610e54565b6001600160a01b038116610e4b5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016106b7565b6106368161167f565b60fe546001600160a01b0316331461076b5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016106b7565b6001600160a01b038316610f125760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016106b7565b6001600160a01b038216610f745760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016106b7565b610f7f838383611b55565b6001600160a01b03831660009081526033602052604090205481811015610ff75760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016106b7565b6001600160a01b0380851660009081526033602052604080822085850390559185168152908120805484929061102e908490612552565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161107a91815260200190565b60405180910390a3610731848484611bef565b6001600160a01b0383166110ef5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016106b7565b6001600160a01b0382166111505760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016106b7565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b60006111bd8484610c63565b9050600019811461073157818110156112185760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016106b7565b610731848484840361108d565b60006106437f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f61125460655490565b6066546040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090509392505050565b8154600090815b818110156113125760006112bb8284611bfa565b9050848682815481106112de57634e487b7160e01b600052603260045260246000fd5b60009182526020909120015463ffffffff1611156112fe5780925061130c565b611309816001612552565b91505b506112a7565b8115611364578461132460018461258a565b8154811061134257634e487b7160e01b600052603260045260246000fd5b60009182526020909120015464010000000090046001600160e01b0316611367565b60005b6001600160e01b031695945050505050565b6001600160a01b03828116600081815260cc6020818152604080842080546033845282862054949093528787166001600160a01b03198416811790915590519190951694919391928592917f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a4610731828483611c15565b6113fb610e54565b8161143c5760405162461bcd60e51b815260206004820152601160248201527062756c6b5374616b65203020757365727360781b60448201526064016106b7565b6000811161148c5760405162461bcd60e51b815260206004820152601760248201527f62756c6b5374616b65203020746f74616c416d6f756e7400000000000000000060448201526064016106b7565b6000805b838110156115ce5760008585838181106114ba57634e487b7160e01b600052603260045260246000fd5b9050604002016020013590508061013060008888868181106114ec57634e487b7160e01b600052603260045260246000fd5b61150292602060409092020190810191506122c3565b6001600160a01b03166001600160a01b0316815260200190815260200160002060008282546115319190612552565b9091555061154190508184612552565b925085858381811061156357634e487b7160e01b600052603260045260246000fd5b61157992602060409092020190810191506122c3565b6001600160a01b03167f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d826040516115b391815260200190565b60405180910390a250806115c6816125d6565b915050611490565b508181146107315760405162461bcd60e51b81526020600482015260156024820152741a5b98dbdc9c9958dd081d1bdd185b105b5bdd5b9d605a1b60448201526064016106b7565b600063ffffffff82111561167b5760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201526532206269747360d01b60648201526084016106b7565b5090565b60fe80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60006116db610e54565b8261171d5760405162461bcd60e51b81526020600482015260126024820152715f62756c6b536c617368203020757365727360701b60448201526064016106b7565b6000821161176d5760405162461bcd60e51b815260206004820152601860248201527f5f62756c6b536c617368203020746f74616c416d6f756e74000000000000000060448201526064016106b7565b60008060005b8581101561193357600087878381811061179d57634e487b7160e01b600052603260045260246000fd5b905060400201602001359050600061013060008a8a868181106117d057634e487b7160e01b600052603260045260246000fd5b6117e692602060409092020190810191506122c3565b6001600160a01b03166001600160a01b031681526020019081526020016000205490506000818311611818578261181a565b815b90508061013060008c8c8881811061184257634e487b7160e01b600052603260045260246000fd5b61185892602060409092020190810191506122c3565b6001600160a01b03166001600160a01b031681526020019081526020016000206000828254611887919061258a565b9091555061189790508387612552565b95506118a38186612552565b94508989858181106118c557634e487b7160e01b600052603260045260246000fd5b6118db92602060409092020190810191506122c3565b6001600160a01b03167f4ed05e9673c26d2ed44f7ef6a7f2942df0ee3b5e1e17db4b99f9dcd261a339cd8260405161191591815260200190565b60405180910390a2505050808061192b906125d6565b915050611773565b5083821461197b5760405162461bcd60e51b81526020600482015260156024820152741a5b98dbdc9c9958dd081d1bdd185b105b5bdd5b9d605a1b60448201526064016106b7565b95945050505050565b6001600160a01b038116600090815260cd60205260408120548015611a06576001600160a01b038316600090815260cd602052604090206119c660018361258a565b815481106119e457634e487b7160e01b600052603260045260246000fd5b60009182526020909120015464010000000090046001600160e01b0316611a09565b60005b6001600160e01b03169392505050565b60008111611a605760405162461bcd60e51b815260206004820152601460248201527343616e6e6f74207374616b65206e6f7468696e6760601b60448201526064016106b7565b336000908152610130602052604081208054839290611a80908490612552565b909155505060405181815233907f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d90602001610d41565b6000610704611ac4611225565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b6000806000611b1687878787611d52565b91509150611b2381611e3f565b5095945050505050565b6001600160a01b03811660009081526099602052604090208054600181018255905b50919050565b6001600160a01b0383161580611b78575060fe546001600160a01b038481169116145b80611b8b57506001600160a01b03831630145b80611b9e57506001600160a01b03821630145b611bea5760405162461bcd60e51b815260206004820152601e60248201527f45524332303a204e6f7420616c6c6f77656420746f207472616e73666572000060448201526064016106b7565b505050565b611bea838383612040565b6000611c09600284841861256a565b6106e290848416612552565b816001600160a01b0316836001600160a01b031614158015611c375750600081115b15611bea576001600160a01b03831615611cc5576001600160a01b038316600090815260cd602052604081208190611c72906120728561207e565b91509150846001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611cba929190918252602082015260400190565b60405180910390a250505b6001600160a01b03821615611bea576001600160a01b038216600090815260cd602052604081208190611cfb906122218561207e565b91509150836001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611d43929190918252602082015260400190565b60405180910390a25050505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611d895750600090506003611e36565b8460ff16601b14158015611da157508460ff16601c14155b15611db25750600090506004611e36565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611e06573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611e2f57600060019250925050611e36565b9150600090505b94509492505050565b6000816004811115611e6157634e487b7160e01b600052602160045260246000fd5b1415611e6a5750565b6001816004811115611e8c57634e487b7160e01b600052602160045260246000fd5b1415611eda5760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016106b7565b6002816004811115611efc57634e487b7160e01b600052602160045260246000fd5b1415611f4a5760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016106b7565b6003816004811115611f6c57634e487b7160e01b600052602160045260246000fd5b1415611fc55760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016106b7565b6004816004811115611fe757634e487b7160e01b600052602160045260246000fd5b14156106365760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b60648201526084016106b7565b6001600160a01b03838116600090815260cc6020526040808220548584168352912054611bea92918216911683611c15565b60006106e2828461258a565b8254600090819080156120d7578561209760018361258a565b815481106120b557634e487b7160e01b600052603260045260246000fd5b60009182526020909120015464010000000090046001600160e01b03166120da565b60005b6001600160e01b031692506120f383858763ffffffff16565b915060008111801561213f5750438661210d60018461258a565b8154811061212b57634e487b7160e01b600052603260045260246000fd5b60009182526020909120015463ffffffff16145b156121ad5761214d8261222d565b8661215960018461258a565b8154811061217757634e487b7160e01b600052603260045260246000fd5b9060005260206000200160000160046101000a8154816001600160e01b0302191690836001600160e01b03160217905550612218565b8560405180604001604052806121c243611616565b63ffffffff1681526020016121d68561222d565b6001600160e01b0390811690915282546001810184556000938452602093849020835194909301519091166401000000000263ffffffff909316929092179101555b50935093915050565b60006106e28284612552565b60006001600160e01b0382111561167b5760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20326044820152663234206269747360c81b60648201526084016106b7565b80356001600160a01b03811681146122ad57600080fd5b919050565b803560ff811681146122ad57600080fd5b6000602082840312156122d4578081fd5b6106e282612296565b600080604083850312156122ef578081fd5b6122f883612296565b915061230660208401612296565b90509250929050565b600080600060608486031215612323578081fd5b61232c84612296565b925061233a60208501612296565b9150604084013590509250925092565b600080600080600080600060e0888a031215612364578283fd5b61236d88612296565b965061237b60208901612296565b95506040880135945060608801359350612397608089016122b2565b925060a0880135915060c0880135905092959891949750929550565b600080604083850312156123c5578182fd5b6123ce83612296565b946020939093013593505050565b60008060008060008060c087890312156123f4578182fd5b6123fd87612296565b95506020870135945060408701359350612419606088016122b2565b92506080870135915060a087013590509295509295509295565b60008060408385031215612445578182fd5b61244e83612296565b9150602083013563ffffffff81168114612466578182fd5b809150509250929050565b600080600060408486031215612485578283fd5b833567ffffffffffffffff8082111561249c578485fd5b818601915086601f8301126124af578485fd5b8135818111156124bd578586fd5b8760208260061b85010111156124d1578586fd5b6020928301989097509590910135949350505050565b6000602082840312156124f8578081fd5b5035919050565b6000602080835283518082850152825b8181101561252b5785810183015185820160400152820161250f565b8181111561253c5783604083870101525b50601f01601f1916929092016040019392505050565b60008219821115612565576125656125f1565b500190565b60008261258557634e487b7160e01b81526012600452602481fd5b500490565b60008282101561259c5761259c6125f1565b500390565b600181811c908216806125b557607f821691505b60208210811415611b4f57634e487b7160e01b600052602260045260246000fd5b60006000198214156125ea576125ea6125f1565b5060010190565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220441f9a07f82b1acfae0b8a506837654d6af0dbc910fe7f468c74a516e39ea82864736f6c63430008040033";

type GoldenTokenV2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GoldenTokenV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GoldenTokenV2__factory extends ContractFactory {
  constructor(...args: GoldenTokenV2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GoldenTokenV2> {
    return super.deploy(overrides || {}) as Promise<GoldenTokenV2>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): GoldenTokenV2 {
    return super.attach(address) as GoldenTokenV2;
  }
  override connect(signer: Signer): GoldenTokenV2__factory {
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
