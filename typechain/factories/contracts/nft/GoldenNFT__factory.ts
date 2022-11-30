/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GoldenNFT,
  GoldenNFTInterface,
} from "../../../contracts/nft/GoldenNFT";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "entityId",
        type: "string",
      },
    ],
    name: "Burned",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "docId",
        type: "string",
      },
    ],
    name: "DocumentSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "goldenTokenContractAddress",
        type: "address",
      },
    ],
    name: "GoldenTokenContractAddressChanged",
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
        internalType: "string",
        name: "entityId",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "reason",
        type: "string",
      },
    ],
    name: "MintFailed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "entityId",
        type: "string",
      },
    ],
    name: "Minted",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "BURNER_ROLE",
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
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
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
    inputs: [],
    name: "MINTER_ROLE",
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
        internalType: "address[]",
        name: "addresses",
        type: "address[]",
      },
    ],
    name: "addBurners",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "addresses",
        type: "address[]",
      },
    ],
    name: "addMinters",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "tokenIds",
        type: "uint256[]",
      },
    ],
    name: "bulkBurn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "entities",
        type: "string[]",
      },
    ],
    name: "bulkMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "exists",
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
    inputs: [],
    name: "getDocId",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getEntityId",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
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
        internalType: "string",
        name: "entityId",
        type: "string",
      },
    ],
    name: "getTokenId",
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
        internalType: "string[]",
        name: "entityIds",
        type: "string[]",
      },
    ],
    name: "getTokenIds",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "goldenTokenContractAddress",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
        name: "_goldenTokenContractAddress",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "minterWallets",
        type: "address[]",
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
        internalType: "string",
        name: "entityId",
        type: "string",
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
        internalType: "address[]",
        name: "addresses",
        type: "address[]",
      },
    ],
    name: "removeBurners",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "addresses",
        type: "address[]",
      },
    ],
    name: "removeMinters",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "docId",
        type: "string",
      },
    ],
    name: "setDocId",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newGoldenTokenContractAddress",
        type: "address",
      },
    ],
    name: "setGoldenTokenContractAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    name: "totalDocuments",
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
  "0x608060405234801561001057600080fd5b50611fb7806100206000396000f3fe608060405234801561001057600080fd5b50600436106101fb5760003560e01c80635fc1964f1161011a57806395d89b41116100ad578063d53913931161007c578063d539139314610430578063d547741f14610445578063d85d3d2714610458578063e47d419b1461046b578063f2fde38b1461047e57600080fd5b806395d89b41146103fa5780639e124d6914610402578063a217fddf14610415578063ab55f1a01461041d57600080fd5b80637e3cdcb2116100e95780637e3cdcb2146103b05780638da5cb5b146103c357806391d14854146103d4578063946d9204146103e757600080fd5b80635fc1964f1461037a578063715018a61461038d57806371e2a6571461039557806376e93876146103a857600080fd5b806337d14774116101925780634f558e79116101615780634f558e791461032b578063553181ec1461033e57806356213aa9146103475780635f2603321461036757600080fd5b806337d14774146102c75780633ab84dd9146102da57806342966c68146102ed57806346b382e61461030057600080fd5b8063248a9ca3116101ce578063248a9ca314610267578063282c51f31461028a5780632f2ff15d1461029f57806336568abe146102b457600080fd5b806301ffc9a71461020057806306fdde031461022857806318160ddd1461023d5780631e7663bc14610254575b600080fd5b61021361020e36600461188a565b610491565b60405190151581526020015b60405180910390f35b6102306104c8565b60405161021f91906118d8565b61024660cc5481565b60405190815260200161021f565b610246610262366004611952565b610556565b6102466102753660046119e7565b60009081526097602052604090206001015490565b610246600080516020611f4283398151915281565b6102b26102ad366004611a1c565b61057e565b005b6102b26102c2366004611a1c565b6105a8565b6102b26102d5366004611952565b61062b565b6102b26102e8366004611a48565b610681565b6102b26102fb3660046119e7565b6106de565b60c954610313906001600160a01b031681565b6040516001600160a01b03909116815260200161021f565b6102136103393660046119e7565b610884565b61024660cd5481565b61035a610355366004611b41565b6108aa565b60405161021f9190611b83565b6102b2610375366004611bc7565b61099f565b6102b2610388366004611a48565b610a42565b6102b2610a9f565b6102b26103a3366004611a48565b610ab3565b610230610b10565b6102b26103be366004611b41565b610ba2565b6033546001600160a01b0316610313565b6102136103e2366004611a1c565b610c86565b6102b26103f5366004611be2565b610cb1565b610230610faf565b6102b2610410366004611b41565b610fbc565b610246600081565b61023061042b3660046119e7565b611057565b610246600080516020611f6283398151915281565b6102b2610453366004611a1c565b6110f9565b6102b2610466366004611952565b61111e565b6102b2610479366004611a48565b6112bb565b6102b261048c366004611bc7565b611318565b60006001600160e01b03198216637965db0b60e01b14806104c257506301ffc9a760e01b6001600160e01b03198316145b92915050565b60ca80546104d590611c35565b80601f016020809104026020016040519081016040528092919081815260200182805461050190611c35565b801561054e5780601f106105235761010080835404028352916020019161054e565b820191906000526020600020905b81548152906001019060200180831161053157829003601f168201915b505050505081565b600060d0826040516105689190611c6f565b9081526020016040518091039020549050919050565b60008281526097602052604090206001015461059981611391565b6105a3838361139b565b505050565b6001600160a01b038116331461061d5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6106278282611421565b5050565b610633611488565b60d261063f8282611cd9565b508060405161064e9190611c6f565b604051908190038120907f704323bcf2384330f429ae219485a8d461f4187e0f3adc56a5afdf974c559d0490600090a250565b610689611488565b60005b81518110156106275760008282815181106106a9576106a9611d99565b602002602001015190506106cb600080516020611f42833981519152826114e2565b50806106d681611dc5565b91505061068c565b600080516020611f428339815191526106f681611391565b600082815260cf60205260409020805461070f90611c35565b90506000036107595760405162461bcd60e51b8152602060048201526016602482015275313ab937103737b732bc34b9ba32b73a103a37b5b2b760511b6044820152606401610614565b600082815260cf60205260408120805461077290611c35565b80601f016020809104026020016040519081016040528092919081815260200182805461079e90611c35565b80156107eb5780601f106107c0576101008083540402835291602001916107eb565b820191906000526020600020905b8154815290600101906020018083116107ce57829003601f168201915b5050505050905060d0816040516108029190611c6f565b90815260200160405180910390206000905560cf60008481526020019081526020016000206000610833919061183c565b600160cc546108429190611dde565b60cc5560405183907f807d972db6803e8ebfe2ba7ce23584b5fbd0ef70584ff004d2184d2ab1d2e0ad906108779084906118d8565b60405180910390a2505050565b600081815260cf6020526040812080548291906108a090611c35565b9050119050919050565b606060008267ffffffffffffffff8111156108c7576108c761190b565b6040519080825280602002602001820160405280156108f0578160200160208202803683370190505b50905060005b8381101561099757600085858381811061091257610912611d99565b90506020028101906109249190611df1565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092935061096792508391506105569050565b83838151811061097957610979611d99565b6020908102919091010152508061098f81611dc5565b9150506108f6565b509392505050565b6109a7611488565b6001600160a01b0381166109f85760405162461bcd60e51b815260206004820152601860248201527716995c9bc81859191c995cdcc81b9bdd08185b1b1bddd95960421b6044820152606401610614565b60c980546001600160a01b0319166001600160a01b0383169081179091556040517fe2c34fba7a16caa93431a35c2f08f7f67264f0175978b111d35dbd9e014bb51690600090a250565b610a4a611488565b60005b8151811015610627576000828281518110610a6a57610a6a611d99565b60200260200101519050610a8c600080516020611f6283398151915282611421565b5080610a9781611dc5565b915050610a4d565b610aa7611488565b610ab160006114ec565b565b610abb611488565b60005b8151811015610627576000828281518110610adb57610adb611d99565b60200260200101519050610afd600080516020611f62833981519152826114e2565b5080610b0881611dc5565b915050610abe565b606060d28054610b1f90611c35565b80601f0160208091040260200160405190810160405280929190818152602001828054610b4b90611c35565b8015610b985780601f10610b6d57610100808354040283529160200191610b98565b820191906000526020600020905b815481529060010190602001808311610b7b57829003601f168201915b5050505050905090565b600080516020611f62833981519152610bba81611391565b81610bf95760405162461bcd60e51b815260206004820152600f60248201526e62756c6b4d696e742030204e46547360881b6044820152606401610614565b60005b82811015610c80576000848483818110610c1857610c18611d99565b9050602002810190610c2a9190611df1565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929350610c6d925083915061111e9050565b5080610c7881611dc5565b915050610bfc565b50505050565b60009182526097602090815260408084206001600160a01b0393909316845291905290205460ff1690565b600054610100900460ff1615808015610cd15750600054600160ff909116105b80610ceb5750303b158015610ceb575060005460ff166001145b610d4e5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610614565b6000805460ff191660011790558015610d71576000805461ff0019166101001790555b6001600160a01b038416610dc25760405162461bcd60e51b815260206004820152601860248201527716995c9bc81859191c995cdcc81b9bdd08185b1b1bddd95960421b6044820152606401610614565b610dd060ce80546001019055565b610dd861153e565b610e236040518060400160405280600d81526020016c476f6c64656e20456e7469747960981b81525060405180604001604052806004815260200163474c444560e01b81525061156d565b60c980546001600160a01b0319166001600160a01b038616179055610e4661159e565b610e516000336114e2565b6000610e5e836001611e38565b67ffffffffffffffff811115610e7657610e7661190b565b604051908082528060200260200182016040528015610e9f578160200160208202803683370190505b50905060005b83811015610f1057848482818110610ebf57610ebf611d99565b9050602002016020810190610ed49190611bc7565b828281518110610ee657610ee6611d99565b6001600160a01b039092166020928302919091019091015280610f0881611dc5565b915050610ea5565b50338160018351610f219190611dde565b81518110610f3157610f31611d99565b60200260200101906001600160a01b031690816001600160a01b031681525050610f5a81610ab3565b610f6381610681565b508015610c80576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a150505050565b60cb80546104d590611c35565b600080516020611f42833981519152610fd481611391565b816110135760405162461bcd60e51b815260206004820152600f60248201526e62756c6b4275726e2030204e46547360881b6044820152606401610614565b60005b82811015610c8057600084848381811061103257611032611d99565b905060200201359050611044816106de565b508061104f81611dc5565b915050611016565b600081815260cf6020526040902080546060919061107490611c35565b80601f01602080910402602001604051908101604052809291908181526020018280546110a090611c35565b80156110ed5780601f106110c2576101008083540402835291602001916110ed565b820191906000526020600020905b8154815290600101906020018083116110d057829003601f168201915b50505050509050919050565b60008281526097602052604090206001015461111481611391565b6105a38383611421565b600080516020611f6283398151915261113681611391565b81516000036111875760405162461bcd60e51b815260206004820152601860248201527f656e7469747949642063616e6e6f7420626520656d70747900000000000000006044820152606401610614565b60d0826040516111979190611c6f565b90815260200160405180910390205460001461121f57816040516111bb9190611c6f565b60405180910390207ffa77b49a7e39b435157f57220461801321cf05e6b7b6b3d52d7e464ef54c9f30604051611213906020808252600e908201526d416c72656164792065786973747360901b604082015260600190565b60405180910390a25050565b600061122a60ce5490565b90508060d08460405161123d9190611c6f565b908152604080516020928190038301902092909255600083815260cf909152206112678482611cd9565b5061127660ce80546001019055565b60cc805490600061128683611dc5565b9190505550807fadef11a3979b8ceb0573eb6ef0678134a09c23a0d94e5ea47cd18ac3a9fc01948460405161087791906118d8565b6112c3611488565b60005b81518110156106275760008282815181106112e3576112e3611d99565b60200260200101519050611305600080516020611f4283398151915282611421565b508061131081611dc5565b9150506112c6565b611320611488565b6001600160a01b0381166113855760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610614565b61138e816114ec565b50565b61138e81336115c5565b6113a58282610c86565b6106275760008281526097602090815260408083206001600160a01b03851684529091529020805460ff191660011790556113dd3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b61142b8282610c86565b156106275760008281526097602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6033546001600160a01b03163314610ab15760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610614565b610627828261139b565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff166115655760405162461bcd60e51b815260040161061490611e4b565b610ab1611629565b600054610100900460ff166115945760405162461bcd60e51b815260040161061490611e4b565b6106278282611659565b600054610100900460ff16610ab15760405162461bcd60e51b815260040161061490611e4b565b6115cf8282610c86565b610627576115e7816001600160a01b03166014611699565b6115f2836020611699565b604051602001611603929190611e96565b60408051601f198184030181529082905262461bcd60e51b8252610614916004016118d8565b600054610100900460ff166116505760405162461bcd60e51b815260040161061490611e4b565b610ab1336114ec565b600054610100900460ff166116805760405162461bcd60e51b815260040161061490611e4b565b60ca61168c8382611cd9565b5060cb6105a38282611cd9565b606060006116a8836002611f0b565b6116b3906002611e38565b67ffffffffffffffff8111156116cb576116cb61190b565b6040519080825280601f01601f1916602001820160405280156116f5576020820181803683370190505b509050600360fc1b8160008151811061171057611710611d99565b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061173f5761173f611d99565b60200101906001600160f81b031916908160001a9053506000611763846002611f0b565b61176e906001611e38565b90505b60018111156117e6576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106117a2576117a2611d99565b1a60f81b8282815181106117b8576117b8611d99565b60200101906001600160f81b031916908160001a90535060049490941c936117df81611f2a565b9050611771565b5083156118355760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610614565b9392505050565b50805461184890611c35565b6000825580601f10611858575050565b601f01602090049060005260206000209081019061138e91905b808211156118865760008155600101611872565b5090565b60006020828403121561189c57600080fd5b81356001600160e01b03198116811461183557600080fd5b60005b838110156118cf5781810151838201526020016118b7565b50506000910152565b60208152600082518060208401526118f78160408501602087016118b4565b601f01601f19169190910160400192915050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561194a5761194a61190b565b604052919050565b6000602080838503121561196557600080fd5b823567ffffffffffffffff8082111561197d57600080fd5b818501915085601f83011261199157600080fd5b8135818111156119a3576119a361190b565b6119b5601f8201601f19168501611921565b915080825286848285010111156119cb57600080fd5b8084840185840137600090820190930192909252509392505050565b6000602082840312156119f957600080fd5b5035919050565b80356001600160a01b0381168114611a1757600080fd5b919050565b60008060408385031215611a2f57600080fd5b82359150611a3f60208401611a00565b90509250929050565b60006020808385031215611a5b57600080fd5b823567ffffffffffffffff80821115611a7357600080fd5b818501915085601f830112611a8757600080fd5b813581811115611a9957611a9961190b565b8060051b9150611aaa848301611921565b8181529183018401918481019088841115611ac457600080fd5b938501935b83851015611ae957611ada85611a00565b82529385019390850190611ac9565b98975050505050505050565b60008083601f840112611b0757600080fd5b50813567ffffffffffffffff811115611b1f57600080fd5b6020830191508360208260051b8501011115611b3a57600080fd5b9250929050565b60008060208385031215611b5457600080fd5b823567ffffffffffffffff811115611b6b57600080fd5b611b7785828601611af5565b90969095509350505050565b6020808252825182820181905260009190848201906040850190845b81811015611bbb57835183529284019291840191600101611b9f565b50909695505050505050565b600060208284031215611bd957600080fd5b61183582611a00565b600080600060408486031215611bf757600080fd5b611c0084611a00565b9250602084013567ffffffffffffffff811115611c1c57600080fd5b611c2886828701611af5565b9497909650939450505050565b600181811c90821680611c4957607f821691505b602082108103611c6957634e487b7160e01b600052602260045260246000fd5b50919050565b60008251611c818184602087016118b4565b9190910192915050565b601f8211156105a357600081815260208120601f850160051c81016020861015611cb25750805b601f850160051c820191505b81811015611cd157828155600101611cbe565b505050505050565b815167ffffffffffffffff811115611cf357611cf361190b565b611d0781611d018454611c35565b84611c8b565b602080601f831160018114611d3c5760008415611d245750858301515b600019600386901b1c1916600185901b178555611cd1565b600085815260208120601f198616915b82811015611d6b57888601518255948401946001909101908401611d4c565b5085821015611d895787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201611dd757611dd7611daf565b5060010190565b818103818111156104c2576104c2611daf565b6000808335601e19843603018112611e0857600080fd5b83018035915067ffffffffffffffff821115611e2357600080fd5b602001915036819003821315611b3a57600080fd5b808201808211156104c2576104c2611daf565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611ece8160178501602088016118b4565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611eff8160288401602088016118b4565b01602801949350505050565b6000816000190483118215151615611f2557611f25611daf565b500290565b600081611f3957611f39611daf565b50600019019056fe3c11d16cbaffd01df69ce1c404f6340ee057498f5f00246190ea54220576a8489f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6a26469706673582212206589addb177b9c968dabf6a35ba715079cef5632feee2e9217a0bd28a7d7d19e64736f6c63430008100033";

type GoldenNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GoldenNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GoldenNFT__factory extends ContractFactory {
  constructor(...args: GoldenNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GoldenNFT> {
    return super.deploy(overrides || {}) as Promise<GoldenNFT>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): GoldenNFT {
    return super.attach(address) as GoldenNFT;
  }
  override connect(signer: Signer): GoldenNFT__factory {
    return super.connect(signer) as GoldenNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GoldenNFTInterface {
    return new utils.Interface(_abi) as GoldenNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GoldenNFT {
    return new Contract(address, _abi, signerOrProvider) as GoldenNFT;
  }
}
