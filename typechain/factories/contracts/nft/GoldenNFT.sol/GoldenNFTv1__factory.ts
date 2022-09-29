/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GoldenNFTv1,
  GoldenNFTv1Interface,
} from "../../../../contracts/nft/GoldenNFT.sol/GoldenNFTv1";

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
        name: "ceramicId",
        type: "string",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "ceramicId",
        type: "string",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "_ceramicIds",
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
    name: "_goldenTokenContractAddress",
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
    inputs: [],
    name: "_totalSupply",
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
        components: [
          {
            internalType: "string",
            name: "ceramicId",
            type: "string",
          },
          {
            internalType: "string",
            name: "entityId",
            type: "string",
          },
        ],
        internalType: "struct GoldenNFTv1.CeramicInfo[]",
        name: "infos",
        type: "tuple[]",
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
        internalType: "string",
        name: "ceramicId",
        type: "string",
      },
    ],
    name: "doesCeramicIdExist",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getCeramicId",
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
    name: "getCeramicIdsLength",
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
    inputs: [],
    name: "getGoldenTokenContractAddress",
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
        name: "goldenTokenContractAddress",
        type: "address",
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
        name: "ceramicId",
        type: "string",
      },
      {
        internalType: "string",
        name: "entityId",
        type: "string",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
  "0x608060405234801561001057600080fd5b506120d3806100206000396000f3fe608060405234801561001057600080fd5b50600436106102065760003560e01c806389d94ff31161011a578063ab55f1a0116100ad578063d3544d8f1161007c578063d3544d8f14610450578063d539139314610458578063d547741f1461046d578063e47d419b14610480578063f2fde38b1461049357600080fd5b8063ab55f1a014610404578063c4d66de814610417578063c6d246ee1461042a578063c87b56dd1461043d57600080fd5b806395d89b41116100e957806395d89b41146103ce5780639e1059b3146103d65780639e124d69146103e9578063a217fddf146103fc57600080fd5b806389d94ff3146103845780638aa0fdad146103975780638da5cb5b146103aa57806391d14854146103bb57600080fd5b806336568abe1161019d5780635f2603321161016c5780635f260332146103305780635fc1964f14610343578063715018a61461035657806371e2a6571461035e5780638638a46c1461037157600080fd5b806336568abe146102ee5780633ab84dd9146103015780633eaaf86b1461031457806342966c681461031d57600080fd5b8063248a9ca3116101d9578063248a9ca31461027c578063282c51f31461029f5780632a63b292146102b45780632f2ff15d146102d957600080fd5b806301ffc9a71461020b57806306fdde03146102335780630aebee27146102485780631e7663bc1461025b575b600080fd5b61021e610219366004611c32565b6104a6565b60405190151581526020015b60405180910390f35b61023b6104dd565b60405161022a9190611df5565b61023b610256366004611bef565b61056f565b61026e610269366004611c5a565b610611565b60405190815260200161022a565b61026e61028a366004611bef565b60009081526097602052604090206001015490565b61026e60008051602061205e83398151915281565b60ca546001600160a01b03165b6040516001600160a01b03909116815260200161022a565b6102ec6102e7366004611c07565b61063c565b005b6102ec6102fc366004611c07565b610666565b6102ec61030f366004611ad8565b6106e9565b61026e60cb5481565b6102ec61032b366004611bef565b610754565b6102ec61033e366004611abe565b6109b9565b6102ec610351366004611ad8565b610a5c565b6102ec610ac7565b6102ec61036c366004611ad8565b610adb565b61021e61037f366004611c5a565b610b46565b60ca546102c1906001600160a01b031681565b61026e6103a5366004611cc7565b610b75565b6033546001600160a01b03166102c1565b61021e6103c9366004611c07565b610da3565b61023b610dce565b61023b6103e4366004611bef565b610ddd565b6102ec6103f7366004611bc7565b610e89565b61026e600081565b61023b610412366004611bef565b610f38565b6102ec610425366004611abe565b610f58565b6102ec610438366004611b87565b6111b8565b61023b61044b366004611bef565b611283565b60d15461026e565b61026e60008051602061207e83398151915281565b6102ec61047b366004611c07565b6112ec565b6102ec61048e366004611ad8565b611311565b6102ec6104a1366004611abe565b61137c565b60006001600160e01b03198216637965db0b60e01b14806104d757506301ffc9a760e01b6001600160e01b03198316145b92915050565b606060cc80546104ec90611fdb565b80601f016020809104026020016040519081016040528092919081815260200182805461051890611fdb565b80156105655780601f1061053a57610100808354040283529160200191610565565b820191906000526020600020905b81548152906001019060200180831161054857829003601f168201915b5050505050905090565b600081815260ce6020526040902080546060919061058c90611fdb565b80601f01602080910402602001604051908101604052809291908181526020018280546105b890611fdb565b80156106055780601f106105da57610100808354040283529160200191610605565b820191906000526020600020905b8154815290600101906020018083116105e857829003601f168201915b50505050509050919050565b600060cf8383604051610625929190611d54565b908152602001604051809103902054905092915050565b600082815260976020526040902060010154610657816113f5565b61066183836113ff565b505050565b6001600160a01b03811633146106db5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6106e58282611485565b5050565b6106f16114ec565b60005b81518110156106e557600082828151811061071f57634e487b7160e01b600052603260045260246000fd5b6020026020010151905061074160008051602061205e83398151915282611546565b508061074c81612016565b9150506106f4565b60008051602061205e83398151915261076c816113f5565b600082815260ce60205260409020805461078590611fdb565b151590506107ce5760405162461bcd60e51b8152602060048201526016602482015275313ab937103737b732bc34b9ba32b73a103a37b5b2b760511b60448201526064016106d2565b600082815260ce602052604080822081518083019092528054829082906107f490611fdb565b80601f016020809104026020016040519081016040528092919081815260200182805461082090611fdb565b801561086d5780601f106108425761010080835404028352916020019161086d565b820191906000526020600020905b81548152906001019060200180831161085057829003601f168201915b5050505050815260200160018201805461088690611fdb565b80601f01602080910402602001604051908101604052809291908181526020018280546108b290611fdb565b80156108ff5780601f106108d4576101008083540402835291602001916108ff565b820191906000526020600020905b8154815290600101906020018083116108e257829003601f168201915b50505091909252505081516020830151604051939450909290915060cf90610928908490611d64565b908152604080516020928190038301902060009081905587815260ce909252812090610954828261191a565b61096260018301600061191a565b5050600160cb546109739190611efe565b60cb5560405185907f0382b2fef14b477d7957cef64d9f6ec53433de024d4e3c319194c7a554355e32906109aa9085908590611e08565b60405180910390a25050505050565b6109c16114ec565b6001600160a01b038116610a125760405162461bcd60e51b815260206004820152601860248201527716995c9bc81859191c995cdcc81b9bdd08185b1b1bddd95960421b60448201526064016106d2565b60ca80546001600160a01b0319166001600160a01b0383169081179091556040517fe2c34fba7a16caa93431a35c2f08f7f67264f0175978b111d35dbd9e014bb51690600090a250565b610a646114ec565b60005b81518110156106e5576000828281518110610a9257634e487b7160e01b600052603260045260246000fd5b60200260200101519050610ab460008051602061207e83398151915282611485565b5080610abf81612016565b915050610a67565b610acf6114ec565b610ad96000611550565b565b610ae36114ec565b60005b81518110156106e5576000828281518110610b1157634e487b7160e01b600052603260045260246000fd5b60200260200101519050610b3360008051602061207e83398151915282611546565b5080610b3e81612016565b915050610ae6565b600060d08383604051610b5a929190611d54565b9081526040519081900360200190205460ff16905092915050565b600060008051602061207e833981519152610b8f816113f5565b8351610bdd5760405162461bcd60e51b815260206004820152601960248201527f636572616d696349642063616e6e6f7420626520656d7074790000000000000060448201526064016106d2565b8251610c2b5760405162461bcd60e51b815260206004820152601860248201527f656e7469747949642063616e6e6f7420626520656d707479000000000000000060448201526064016106d2565b6000610c3660c95490565b90508060cf85604051610c499190611d64565b9081526040805160209281900383018120939093558281018152878352818301879052600084815260ce835220825180519192610c8b92849290910190611954565b506020828101518051610ca49260018501920190611954565b505060c9805460010190555060d085604051610cc09190611d64565b9081526040519081900360200190205460ff16610d4e57600160d086604051610ce99190611d64565b90815260405160209181900382019020805460ff19169215159290921790915560d180546001810182556000919091528651610d4c927f695fb3134ad82c3b8022bc5464edd0bcc9424ef672b52245dcb6ab2374327ce390920191880190611954565b505b60cb54610d5c906001611ec7565b60cb5560405181907fa927ac04d4d3734fe8f2c6d7e10171f210b004d3f2d2a4449bbc6a5f2e5427e390610d939088908890611e08565b60405180910390a2949350505050565b60009182526097602090815260408084206001600160a01b0393909316845291905290205460ff1690565b606060cd80546104ec90611fdb565b60d18181548110610ded57600080fd5b906000526020600020016000915090508054610e0890611fdb565b80601f0160208091040260200160405190810160405280929190818152602001828054610e3490611fdb565b8015610e815780601f10610e5657610100808354040283529160200191610e81565b820191906000526020600020905b815481529060010190602001808311610e6457829003601f168201915b505050505081565b60008051602061205e833981519152610ea1816113f5565b81610ee05760405162461bcd60e51b815260206004820152600f60248201526e62756c6b4275726e2030204e46547360881b60448201526064016106d2565b60005b82811015610f32576000848483818110610f0d57634e487b7160e01b600052603260045260246000fd5b905060200201359050610f1f81610754565b5080610f2a81612016565b915050610ee3565b50505050565b600081815260ce6020526040902060010180546060919061058c90611fdb565b600054610100900460ff1615808015610f785750600054600160ff909116105b80610f925750303b158015610f92575060005460ff166001145b610ff55760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016106d2565b6000805460ff191660011790558015611018576000805461ff0019166101001790555b6001600160a01b0382166110695760405162461bcd60e51b815260206004820152601860248201527716995c9bc81859191c995cdcc81b9bdd08185b1b1bddd95960421b60448201526064016106d2565b61107760c980546001019055565b61107f6115a2565b6110ca6040518060400160405280600d81526020016c476f6c64656e20456e7469747960981b81525060405180604001604052806004815260200163474c444560e01b8152506115d1565b60ca80546001600160a01b0319166001600160a01b0384161790556110ed611602565b6110f8600033611546565b60408051600180825281830190925260009160208083019080368337019050509050338160008151811061113c57634e487b7160e01b600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b03168152505061116581610adb565b61116e816106e9565b5080156106e5576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b60008051602061207e8339815191526111d0816113f5565b8161120f5760405162461bcd60e51b815260206004820152600f60248201526e62756c6b4d696e742030204e46547360881b60448201526064016106d2565b60005b82811015610f3257600084848381811061123c57634e487b7160e01b600052603260045260246000fd5b905060200281019061124e9190611e81565b61125790611f15565b805160208201519192509061126c8282610b75565b50505050808061127b90612016565b915050611212565b606061128e82611629565b6112d35760405162461bcd60e51b81526020600482015260166024820152751d1bdad95b925908191bd95cc81b9bdd08195e1a5cdd60521b60448201526064016106d2565b600082815260ce60205260409020805461058c90611fdb565b600082815260976020526040902060010154611307816113f5565b6106618383611485565b6113196114ec565b60005b81518110156106e557600082828151811061134757634e487b7160e01b600052603260045260246000fd5b6020026020010151905061136960008051602061205e83398151915282611485565b508061137481612016565b91505061131c565b6113846114ec565b6001600160a01b0381166113e95760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016106d2565b6113f281611550565b50565b6113f2813361164f565b6114098282610da3565b6106e55760008281526097602090815260408083206001600160a01b03851684529091529020805460ff191660011790556114413390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b61148f8282610da3565b156106e55760008281526097602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6033546001600160a01b03163314610ad95760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016106d2565b6106e582826113ff565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff166115c95760405162461bcd60e51b81526004016106d290611e36565b610ad96116b3565b600054610100900460ff166115f85760405162461bcd60e51b81526004016106d290611e36565b6106e582826116e3565b600054610100900460ff16610ad95760405162461bcd60e51b81526004016106d290611e36565b600081815260ce60205260408120805482919061164590611fdb565b9050119050919050565b6116598282610da3565b6106e557611671816001600160a01b03166014611731565b61167c836020611731565b60405160200161168d929190611d80565b60408051601f198184030181529082905262461bcd60e51b82526106d291600401611df5565b600054610100900460ff166116da5760405162461bcd60e51b81526004016106d290611e36565b610ad933611550565b600054610100900460ff1661170a5760405162461bcd60e51b81526004016106d290611e36565b815161171d9060cc906020850190611954565b5080516106619060cd906020840190611954565b60606000611740836002611edf565b61174b906002611ec7565b67ffffffffffffffff81111561177157634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f19166020018201604052801561179b576020820181803683370190505b509050600360fc1b816000815181106117c457634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061180157634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506000611825846002611edf565b611830906001611ec7565b90505b60018111156118c4576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061187257634e487b7160e01b600052603260045260246000fd5b1a60f81b82828151811061189657634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c936118bd81611fc4565b9050611833565b5083156119135760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016106d2565b9392505050565b50805461192690611fdb565b6000825580601f10611936575050565b601f0160209004906000526020600020908101906113f291906119d8565b82805461196090611fdb565b90600052602060002090601f01602090048101928261198257600085556119c8565b82601f1061199b57805160ff19168380011785556119c8565b828001600101855582156119c8579182015b828111156119c85782518255916020019190600101906119ad565b506119d49291506119d8565b5090565b5b808211156119d457600081556001016119d9565b80356001600160a01b0381168114611a0457600080fd5b919050565b60008083601f840112611a1a578182fd5b50813567ffffffffffffffff811115611a31578182fd5b6020830191508360208260051b8501011115611a4c57600080fd5b9250929050565b600082601f830112611a63578081fd5b813567ffffffffffffffff811115611a7d57611a7d612047565b611a90601f8201601f1916602001611e96565b818152846020838601011115611aa4578283fd5b816020850160208301379081016020019190915292915050565b600060208284031215611acf578081fd5b611913826119ed565b60006020808385031215611aea578182fd5b823567ffffffffffffffff80821115611b01578384fd5b818501915085601f830112611b14578384fd5b813581811115611b2657611b26612047565b8060051b9150611b37848301611e96565b8181528481019084860184860187018a1015611b51578788fd5b8795505b83861015611b7a57611b66816119ed565b835260019590950194918601918601611b55565b5098975050505050505050565b60008060208385031215611b99578081fd5b823567ffffffffffffffff811115611baf578182fd5b611bbb85828601611a09565b90969095509350505050565b60008060208385031215611bd9578182fd5b823567ffffffffffffffff811115611baf578283fd5b600060208284031215611c00578081fd5b5035919050565b60008060408385031215611c19578182fd5b82359150611c29602084016119ed565b90509250929050565b600060208284031215611c43578081fd5b81356001600160e01b031981168114611913578182fd5b60008060208385031215611c6c578182fd5b823567ffffffffffffffff80821115611c83578384fd5b818501915085601f830112611c96578384fd5b813581811115611ca4578485fd5b866020828501011115611cb5578485fd5b60209290920196919550909350505050565b60008060408385031215611cd9578182fd5b823567ffffffffffffffff80821115611cf0578384fd5b611cfc86838701611a53565b93506020850135915080821115611d11578283fd5b50611d1e85828601611a53565b9150509250929050565b60008151808452611d40816020860160208601611f98565b601f01601f19169290920160200192915050565b8183823760009101908152919050565b60008251611d76818460208701611f98565b9190910192915050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611db8816017850160208801611f98565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611de9816028840160208801611f98565b01602801949350505050565b6020815260006119136020830184611d28565b604081526000611e1b6040830185611d28565b8281036020840152611e2d8185611d28565b95945050505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60008235603e19833603018112611d76578182fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611ebf57611ebf612047565b604052919050565b60008219821115611eda57611eda612031565b500190565b6000816000190483118215151615611ef957611ef9612031565b500290565b600082821015611f1057611f10612031565b500390565b600060408236031215611f26578081fd5b6040516040810167ffffffffffffffff8282108183111715611f4a57611f4a612047565b816040528435915080821115611f5e578384fd5b611f6a36838701611a53565b83526020850135915080821115611f7f578384fd5b50611f8c36828601611a53565b60208301525092915050565b60005b83811015611fb3578181015183820152602001611f9b565b83811115610f325750506000910152565b600081611fd357611fd3612031565b506000190190565b600181811c90821680611fef57607f821691505b6020821081141561201057634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561202a5761202a612031565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfe3c11d16cbaffd01df69ce1c404f6340ee057498f5f00246190ea54220576a8489f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6a264697066735822122078d2e02f49a1bc1918e607602eec658ac33cbe912afd66701fba76fa1229473d64736f6c63430008040033";

type GoldenNFTv1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GoldenNFTv1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GoldenNFTv1__factory extends ContractFactory {
  constructor(...args: GoldenNFTv1ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GoldenNFTv1> {
    return super.deploy(overrides || {}) as Promise<GoldenNFTv1>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): GoldenNFTv1 {
    return super.attach(address) as GoldenNFTv1;
  }
  override connect(signer: Signer): GoldenNFTv1__factory {
    return super.connect(signer) as GoldenNFTv1__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GoldenNFTv1Interface {
    return new utils.Interface(_abi) as GoldenNFTv1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GoldenNFTv1 {
    return new Contract(address, _abi, signerOrProvider) as GoldenNFTv1;
  }
}
