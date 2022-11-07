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
        name: "account",
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
        name: "account",
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
    name: "addMinter",
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
        name: "to",
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
    inputs: [],
    name: "renounceOwnership",
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
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506124c5806100206000396000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c80637ecebe001161010f578063a9059cbb116100a2578063dd62ed3e11610071578063dd62ed3e14610456578063f1127ed814610469578063f2fde38b146104a6578063fe4b84df146104b957600080fd5b8063a9059cbb146103f0578063aa271e1a14610403578063c3cda52014610430578063d505accf1461044357600080fd5b8063983b2d56116100de578063983b2d56146103a45780639ab24eb0146103b75780639dc29fac146103ca578063a457c2d7146103dd57600080fd5b80637ecebe00146103655780638da5cb5b146103785780638e539e8c1461038957806395d89b411461039c57600080fd5b806339509351116101875780635c19a95c116101565780635c19a95c146102f95780636fcfff451461030c57806370a0823114610334578063715018a61461035d57600080fd5b8063395093511461027c5780633a46b1a81461028f57806340c10f19146102a2578063587cde1e146102b557600080fd5b806323b872dd116101c357806323b872dd1461023d5780633092afd514610250578063313ce567146102655780633644e5151461027457600080fd5b806306fdde03146101ea578063095ea7b31461020857806318160ddd1461022b575b600080fd5b6101f26104cc565b6040516101ff9190612018565b60405180910390f35b61021b610216366004612082565b61055e565b60405190151581526020016101ff565b6035545b6040519081526020016101ff565b61021b61024b3660046120ac565b610578565b61026361025e3660046120e8565b61059c565b005b604051601281526020016101ff565b61022f6105b0565b61021b61028a366004612082565b6105bf565b61022f61029d366004612082565b6105e1565b6102636102b0366004612082565b610660565b6102e16102c33660046120e8565b6001600160a01b03908116600090815260cc60205260409020541690565b6040516001600160a01b0390911681526020016101ff565b6102636103073660046120e8565b6106c5565b61031f61031a3660046120e8565b6106cf565b60405163ffffffff90911681526020016101ff565b61022f6103423660046120e8565b6001600160a01b031660009081526033602052604090205490565b6102636106f1565b61022f6103733660046120e8565b610705565b60fe546001600160a01b03166102e1565b61022f610397366004612103565b610723565b6101f261077f565b6102636103b23660046120e8565b61078e565b61022f6103c53660046120e8565b61079f565b6102636103d8366004612082565b6107b5565b61021b6103eb366004612082565b6107bf565b61021b6103fe366004612082565b61083a565b61021b6104113660046120e8565b6001600160a01b03166000908152610130602052604090205460ff1690565b61026361043e36600461212d565b610848565b610263610451366004612185565b61097e565b61022f6104643660046121ef565b610ae2565b61047c610477366004612222565b610b0d565b60408051825163ffffffff1681526020928301516001600160e01b031692810192909252016101ff565b6102636104b43660046120e8565b610b91565b6102636104c7366004612103565b610c07565b6060603680546104db90612262565b80601f016020809104026020016040519081016040528092919081815260200182805461050790612262565b80156105545780601f1061052957610100808354040283529160200191610554565b820191906000526020600020905b81548152906001019060200180831161053757829003601f168201915b5050505050905090565b60003361056c818585610d9f565b60019150505b92915050565b600033610586858285610ec3565b610591858585610f3d565b506001949350505050565b6105a4611111565b6105ad8161116b565b50565b60006105ba6111b5565b905090565b60003361056c8185856105d28383610ae2565b6105dc91906122ac565b610d9f565b60004382106106375760405162461bcd60e51b815260206004820152601f60248201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e65640060448201526064015b60405180910390fd5b6001600160a01b038316600090815260cd602052604090206106599083611230565b9392505050565b336000908152610130602052604090205460ff166106b75760405162461bcd60e51b815260206004820152601460248201527313db9b1e481b5a5b9d195c8818d85b8818d85b1b60621b604482015260640161062e565b6106c182826112ed565b5050565b6105ad33826112f7565b6001600160a01b038116600090815260cd602052604081205461057290611371565b6106f9611111565b61070360006113da565b565b6001600160a01b038116600090815260996020526040812054610572565b60004382106107745760405162461bcd60e51b815260206004820152601f60248201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e656400604482015260640161062e565b61057260ce83611230565b6060603780546104db90612262565b610796611111565b6105ad8161142c565b60006107aa82611479565b6105729060016122ac565b6106c18282611500565b600033816107cd8286610ae2565b90508381101561082d5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b606482015260840161062e565b6105918286868403610d9f565b60003361056c818585610f3d565b834211156108985760405162461bcd60e51b815260206004820152601d60248201527f4552433230566f7465733a207369676e61747572652065787069726564000000604482015260640161062e565b604080517fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60208201526001600160a01b0388169181019190915260608101869052608081018590526000906109129061090a9060a0016040516020818303038152906040528051906020012061150a565b858585611558565b905061091d81611580565b861461096b5760405162461bcd60e51b815260206004820152601960248201527f4552433230566f7465733a20696e76616c6964206e6f6e636500000000000000604482015260640161062e565b61097581886112f7565b50505050505050565b834211156109ce5760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e65000000604482015260640161062e565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886109fd8c611580565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e0016040516020818303038152906040528051906020012090506000610a588261150a565b90506000610a6882878787611558565b9050896001600160a01b0316816001600160a01b031614610acb5760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604482015260640161062e565b610ad68a8a8a610d9f565b50505050505050505050565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b60408051808201909152600080825260208201526001600160a01b038316600090815260cd60205260409020805463ffffffff8416908110610b5157610b516122bf565b60009182526020918290206040805180820190915291015463ffffffff8116825264010000000090046001600160e01b0316918101919091529392505050565b610b99611111565b6001600160a01b038116610bfe5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161062e565b6105ad816113da565b600054610100900460ff1615808015610c275750600054600160ff909116105b80610c415750303b158015610c41575060005460ff166001145b610ca45760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b606482015260840161062e565b6000805460ff191660011790558015610cc7576000805461ff0019166101001790555b610ccf6115a8565b610d176040518060400160405280600b81526020016a23b7b63232b72a37b5b2b760a91b8152506040518060400160405280600381526020016211d31160ea1b8152506115d7565b610d436040518060400160405280600b81526020016a23b7b63232b72a37b5b2b760a91b815250611608565b610d4d33836112ed565b610d563361142c565b80156106c1576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b6001600160a01b038316610e015760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b606482015260840161062e565b6001600160a01b038216610e625760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b606482015260840161062e565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6000610ecf8484610ae2565b90506000198114610f375781811015610f2a5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000604482015260640161062e565b610f378484848403610d9f565b50505050565b6001600160a01b038316610fa15760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b606482015260840161062e565b6001600160a01b0382166110035760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b606482015260840161062e565b6001600160a01b0383166000908152603360205260409020548181101561107b5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b606482015260840161062e565b6001600160a01b038085166000908152603360205260408082208585039055918516815290812080548492906110b29084906122ac565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516110fe91815260200190565b60405180910390a3610f37848484611657565b60fe546001600160a01b031633146107035760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161062e565b6001600160a01b03811660008181526101306020526040808220805460ff19169055517fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb666929190a250565b60006105ba7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6111e460655490565b6066546040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090509392505050565b8154600090815b8181101561129457600061124b8284611662565b905084868281548110611260576112606122bf565b60009182526020909120015463ffffffff1611156112805780925061128e565b61128b8160016122ac565b91505b50611237565b81156112d857846112a66001846122d5565b815481106112b6576112b66122bf565b60009182526020909120015464010000000090046001600160e01b03166112db565b60005b6001600160e01b031695945050505050565b6106c1828261167d565b6001600160a01b03828116600081815260cc6020818152604080842080546033845282862054949093528787166001600160a01b03198416811790915590519190951694919391928592917f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a4610f37828483611707565b600063ffffffff8211156113d65760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201526532206269747360d01b606482015260840161062e565b5090565b60fe80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b03811660008181526101306020526040808220805460ff19166001179055517f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f69190a250565b6001600160a01b038116600090815260cd602052604081205480156114ed576001600160a01b038316600090815260cd602052604090206114bb6001836122d5565b815481106114cb576114cb6122bf565b60009182526020909120015464010000000090046001600160e01b03166114f0565b60005b6001600160e01b03169392505050565b6106c18282611844565b60006105726115176111b5565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b60008060006115698787878761185c565b9150915061157681611949565b5095945050505050565b6001600160a01b03811660009081526099602052604090208054600181018255905b50919050565b600054610100900460ff166115cf5760405162461bcd60e51b815260040161062e906122e8565b610703611aff565b600054610100900460ff166115fe5760405162461bcd60e51b815260040161062e906122e8565b6106c18282611b2f565b600054610100900460ff1661162f5760405162461bcd60e51b815260040161062e906122e8565b6105ad81604051806040016040528060018152602001603160f81b815250611b6f565b505050565b611652838383611bb0565b60006116716002848418612333565b610659908484166122ac565b6116878282611be2565b6035546001600160e01b0310156116f95760405162461bcd60e51b815260206004820152603060248201527f4552433230566f7465733a20746f74616c20737570706c79207269736b73206f60448201526f766572666c6f77696e6720766f74657360801b606482015260840161062e565b610f3760ce611cc983611cd5565b816001600160a01b0316836001600160a01b0316141580156117295750600081115b15611652576001600160a01b038316156117b7576001600160a01b038316600090815260cd60205260408120819061176490611e4e85611cd5565b91509150846001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a72483836040516117ac929190918252602082015260400190565b60405180910390a250505b6001600160a01b03821615611652576001600160a01b038216600090815260cd6020526040812081906117ed90611cc985611cd5565b91509150836001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611835929190918252602082015260400190565b60405180910390a25050505050565b61184e8282611e5a565b610f3760ce611e4e83611cd5565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156118935750600090506003611940565b8460ff16601b141580156118ab57508460ff16601c14155b156118bc5750600090506004611940565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611910573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661193957600060019250925050611940565b9150600090505b94509492505050565b600081600481111561195d5761195d612355565b036119655750565b600181600481111561197957611979612355565b036119c65760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015260640161062e565b60028160048111156119da576119da612355565b03611a275760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161062e565b6003816004811115611a3b57611a3b612355565b03611a935760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b606482015260840161062e565b6004816004811115611aa757611aa7612355565b036105ad5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b606482015260840161062e565b600054610100900460ff16611b265760405162461bcd60e51b815260040161062e906122e8565b610703336113da565b600054610100900460ff16611b565760405162461bcd60e51b815260040161062e906122e8565b6036611b6283826123cf565b50603761165282826123cf565b600054610100900460ff16611b965760405162461bcd60e51b815260040161062e906122e8565b815160209283012081519190920120606591909155606655565b6001600160a01b03838116600090815260cc602052604080822054858416835291205461165292918216911683611707565b6001600160a01b038216611c385760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640161062e565b8060356000828254611c4a91906122ac565b90915550506001600160a01b03821660009081526033602052604081208054839290611c779084906122ac565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a36106c160008383611657565b600061065982846122ac565b825460009081908015611d205785611cee6001836122d5565b81548110611cfe57611cfe6122bf565b60009182526020909120015464010000000090046001600160e01b0316611d23565b60005b6001600160e01b03169250611d3c83858763ffffffff16565b9150600081118015611d7a57504386611d566001846122d5565b81548110611d6657611d666122bf565b60009182526020909120015463ffffffff16145b15611dda57611d8882611faf565b86611d946001846122d5565b81548110611da457611da46122bf565b9060005260206000200160000160046101000a8154816001600160e01b0302191690836001600160e01b03160217905550611e45565b856040518060400160405280611def43611371565b63ffffffff168152602001611e0385611faf565b6001600160e01b0390811690915282546001810184556000938452602093849020835194909301519091166401000000000263ffffffff909316929092179101555b50935093915050565b600061065982846122d5565b6001600160a01b038216611eba5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b606482015260840161062e565b6001600160a01b03821660009081526033602052604090205481811015611f2e5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b606482015260840161062e565b6001600160a01b0383166000908152603360205260408120838303905560358054849290611f5d9084906122d5565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a361165283600084611657565b60006001600160e01b038211156113d65760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20326044820152663234206269747360c81b606482015260840161062e565b600060208083528351808285015260005b8181101561204557858101830151858201604001528201612029565b506000604082860101526040601f19601f8301168501019250505092915050565b80356001600160a01b038116811461207d57600080fd5b919050565b6000806040838503121561209557600080fd5b61209e83612066565b946020939093013593505050565b6000806000606084860312156120c157600080fd5b6120ca84612066565b92506120d860208501612066565b9150604084013590509250925092565b6000602082840312156120fa57600080fd5b61065982612066565b60006020828403121561211557600080fd5b5035919050565b803560ff8116811461207d57600080fd5b60008060008060008060c0878903121561214657600080fd5b61214f87612066565b9550602087013594506040870135935061216b6060880161211c565b92506080870135915060a087013590509295509295509295565b600080600080600080600060e0888a0312156121a057600080fd5b6121a988612066565b96506121b760208901612066565b955060408801359450606088013593506121d36080890161211c565b925060a0880135915060c0880135905092959891949750929550565b6000806040838503121561220257600080fd5b61220b83612066565b915061221960208401612066565b90509250929050565b6000806040838503121561223557600080fd5b61223e83612066565b9150602083013563ffffffff8116811461225757600080fd5b809150509250929050565b600181811c9082168061227657607f821691505b6020821081036115a257634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8082018082111561057257610572612296565b634e487b7160e01b600052603260045260246000fd5b8181038181111561057257610572612296565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60008261235057634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052602160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b601f82111561165257600081815260208120601f850160051c810160208610156123a85750805b601f850160051c820191505b818110156123c7578281556001016123b4565b505050505050565b815167ffffffffffffffff8111156123e9576123e961236b565b6123fd816123f78454612262565b84612381565b602080601f831160018114612432576000841561241a5750858301515b600019600386901b1c1916600185901b1785556123c7565b600085815260208120601f198616915b8281101561246157888601518255948401946001909101908401612442565b508582101561247f5787850151600019600388901b60f8161c191681555b5050505050600190811b0190555056fea264697066735822122055fe9ff08092c22dfef0535b744c6302c9906dfb02d43baf2dec194f552be08164736f6c63430008100033";

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
