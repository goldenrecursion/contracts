/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GoldenNFTv1,
  GoldenNFTv1Interface,
} from "../../../contracts/nft/GoldenNFTv1";

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
        internalType: "address",
        name: "addr",
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
        name: "addr",
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
        internalType: "address",
        name: "addr",
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
        name: "addr",
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
  "0x608060405234801561001057600080fd5b50611f8e806100206000396000f3fe608060405234801561001057600080fd5b50600436106102065760003560e01c80638aa0fdad1161011a578063ab55f1a0116100ad578063d3544d8f1161007c578063d3544d8f14610450578063d539139314610458578063d547741f1461046d578063f2fde38b14610480578063f44637ba1461049357600080fd5b8063ab55f1a014610404578063c4d66de814610417578063c6d246ee1461042a578063c87b56dd1461043d57600080fd5b8063983b2d56116100e9578063983b2d56146103c35780639e1059b3146103d65780639e124d69146103e9578063a217fddf146103fc57600080fd5b80638aa0fdad146103845780638da5cb5b1461039757806391d14854146103a857806395d89b41146103bb57600080fd5b80632f2ff15d1161019d57806342966c681161016c57806342966c68146103305780635f26033214610343578063715018a6146103565780638638a46c1461035e57806389d94ff31461037157600080fd5b80632f2ff15d146102ee5780633092afd51461030157806336568abe146103145780633eaaf86b1461032757600080fd5b80631e7663bc116101d95780631e7663bc14610270578063248a9ca314610291578063282c51f3146102b45780632a63b292146102c957600080fd5b806301ffc9a71461020b578063028468581461023357806306fdde03146102485780630aebee271461025d575b600080fd5b61021e610219366004611b1a565b6104a6565b60405190151581526020015b60405180910390f35b610246610241366004611a55565b6104dd565b005b610250610500565b60405161022a9190611cdd565b61025061026b366004611ad7565b610592565b61028361027e366004611b42565b610634565b60405190815260200161022a565b61028361029f366004611ad7565b60009081526097602052604090206001015490565b610283600080516020611f1983398151915281565b60ca546001600160a01b03165b6040516001600160a01b03909116815260200161022a565b6102466102fc366004611aef565b61065f565b61024661030f366004611a55565b610689565b610246610322366004611aef565b6106a9565b61028360cb5481565b61024661033e366004611ad7565b61072c565b610246610351366004611a55565b6109d5565b610246610a78565b61021e61036c366004611b42565b610a8c565b60ca546102d6906001600160a01b031681565b610283610392366004611baf565b610abb565b6033546001600160a01b03166102d6565b61021e6103b6366004611aef565b610d2d565b610250610d58565b6102466103d1366004611a55565b610d67565b6102506103e4366004611ad7565b610d87565b6102466103f7366004611aaf565b610e33565b610283600081565b610250610412366004611ad7565b610f21565b610246610425366004611a55565b610f41565b610246610438366004611a6f565b61113c565b61025061044b366004611ad7565b61124c565b60d154610283565b610283600080516020611f3983398151915281565b61024661047b366004611aef565b6112b5565b61024661048e366004611a55565b6112da565b6102466104a1366004611a55565b611350565b60006001600160e01b03198216637965db0b60e01b14806104d757506301ffc9a760e01b6001600160e01b03198316145b92915050565b6104e5611370565b6104fd600080516020611f19833981519152826113ca565b50565b606060cc805461050f90611e96565b80601f016020809104026020016040519081016040528092919081815260200182805461053b90611e96565b80156105885780601f1061055d57610100808354040283529160200191610588565b820191906000526020600020905b81548152906001019060200180831161056b57829003601f168201915b5050505050905090565b600081815260ce602052604090208054606091906105af90611e96565b80601f01602080910402602001604051908101604052809291908181526020018280546105db90611e96565b80156106285780601f106105fd57610100808354040283529160200191610628565b820191906000526020600020905b81548152906001019060200180831161060b57829003601f168201915b50505050509050919050565b600060cf8383604051610648929190611c3c565b908152602001604051809103902054905092915050565b60008281526097602052604090206001015461067a81611431565b610684838361143b565b505050565b610691611370565b6104fd600080516020611f39833981519152826113ca565b6001600160a01b038116331461071e5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b61072882826113ca565b5050565b610744600080516020611f1983398151915233610d2d565b6107895760405162461bcd60e51b815260206004820152601660248201527521b0b63632b91034b9903737ba103090313ab93732b960511b6044820152606401610715565b600081815260ce6020526040902080546107a290611e96565b151590506107eb5760405162461bcd60e51b8152602060048201526016602482015275313ab937103737b732bc34b9ba32b73a103a37b5b2b760511b6044820152606401610715565b600081815260ce6020526040808220815180830190925280548290829061081190611e96565b80601f016020809104026020016040519081016040528092919081815260200182805461083d90611e96565b801561088a5780601f1061085f5761010080835404028352916020019161088a565b820191906000526020600020905b81548152906001019060200180831161086d57829003601f168201915b505050505081526020016001820180546108a390611e96565b80601f01602080910402602001604051908101604052809291908181526020018280546108cf90611e96565b801561091c5780601f106108f15761010080835404028352916020019161091c565b820191906000526020600020905b8154815290600101906020018083116108ff57829003601f168201915b50505091909252505081516020830151604051939450909290915060cf90610945908490611c4c565b908152604080516020928190038301902060009081905586815260ce9092528120906109718282611895565b61097f600183016000611895565b5050600160cb546109909190611db5565b60cb5560405184907f0382b2fef14b477d7957cef64d9f6ec53433de024d4e3c319194c7a554355e32906109c79085908590611cf0565b60405180910390a250505050565b6109dd611370565b6001600160a01b038116610a2e5760405162461bcd60e51b815260206004820152601860248201527716995c9bc81859191c995cdcc81b9bdd08185b1b1bddd95960421b6044820152606401610715565b60ca80546001600160a01b0319166001600160a01b0383169081179091556040517fe2c34fba7a16caa93431a35c2f08f7f67264f0175978b111d35dbd9e014bb51690600090a250565b610a80611370565b610a8a60006114c1565b565b600060d08383604051610aa0929190611c3c565b9081526040519081900360200190205460ff16905092915050565b6000610ad5600080516020611f3983398151915233610d2d565b610b1a5760405162461bcd60e51b815260206004820152601660248201527521b0b63632b91034b9903737ba10309036b4b73a32b960511b6044820152606401610715565b8251610b685760405162461bcd60e51b815260206004820152601960248201527f636572616d696349642063616e6e6f7420626520656d707479000000000000006044820152606401610715565b8151610bb65760405162461bcd60e51b815260206004820152601860248201527f656e7469747949642063616e6e6f7420626520656d70747900000000000000006044820152606401610715565b6000610bc160c95490565b90508060cf84604051610bd49190611c4c565b9081526040805160209281900383018120939093558281018152868352818301869052600084815260ce835220825180519192610c16928492909101906118cf565b506020828101518051610c2f92600185019201906118cf565b505060c9805460010190555060d084604051610c4b9190611c4c565b9081526040519081900360200190205460ff16610cd957600160d085604051610c749190611c4c565b90815260405160209181900382019020805460ff19169215159290921790915560d180546001810182556000919091528551610cd7927f695fb3134ad82c3b8022bc5464edd0bcc9424ef672b52245dcb6ab2374327ce3909201918701906118cf565b505b60cb54610ce7906001611d7e565b60cb5560405181907fa927ac04d4d3734fe8f2c6d7e10171f210b004d3f2d2a4449bbc6a5f2e5427e390610d1e9087908790611cf0565b60405180910390a29392505050565b60009182526097602090815260408084206001600160a01b0393909316845291905290205460ff1690565b606060cd805461050f90611e96565b610d6f611370565b6104fd600080516020611f3983398151915282611513565b60d18181548110610d9757600080fd5b906000526020600020016000915090508054610db290611e96565b80601f0160208091040260200160405190810160405280929190818152602001828054610dde90611e96565b8015610e2b5780601f10610e0057610100808354040283529160200191610e2b565b820191906000526020600020905b815481529060010190602001808311610e0e57829003601f168201915b505050505081565b610e4b600080516020611f1983398151915233610d2d565b610e905760405162461bcd60e51b815260206004820152601660248201527521b0b63632b91034b9903737ba103090313ab93732b960511b6044820152606401610715565b80610ecf5760405162461bcd60e51b815260206004820152600f60248201526e62756c6b4275726e2030204e46547360881b6044820152606401610715565b60005b81811015610684576000838383818110610efc57634e487b7160e01b600052603260045260246000fd5b905060200201359050610f0e8161072c565b5080610f1981611ed1565b915050610ed2565b600081815260ce602052604090206001018054606091906105af90611e96565b600054610100900460ff1615808015610f615750600054600160ff909116105b80610f7b5750303b158015610f7b575060005460ff166001145b610fde5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610715565b6000805460ff191660011790558015611001576000805461ff0019166101001790555b6001600160a01b0382166110525760405162461bcd60e51b815260206004820152601860248201527716995c9bc81859191c995cdcc81b9bdd08185b1b1bddd95960421b6044820152606401610715565b61106060c980546001019055565b61106861151d565b6110b36040518060400160405280600d81526020016c476f6c64656e20456e7469747960981b81525060405180604001604052806004815260200163474c444560e01b81525061154c565b60ca80546001600160a01b0319166001600160a01b0384161790556110d661157d565b6110e1600033611513565b6110ea33610d67565b6110f333611350565b8015610728576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b611154600080516020611f3983398151915233610d2d565b6111995760405162461bcd60e51b815260206004820152601660248201527521b0b63632b91034b9903737ba10309036b4b73a32b960511b6044820152606401610715565b806111d85760405162461bcd60e51b815260206004820152600f60248201526e62756c6b4d696e742030204e46547360881b6044820152606401610715565b60005b8181101561068457600083838381811061120557634e487b7160e01b600052603260045260246000fd5b90506020028101906112179190611d69565b61122090611dcc565b80516020820151919250906112358282610abb565b50505050808061124490611ed1565b9150506111db565b6060611257826115a4565b61129c5760405162461bcd60e51b81526020600482015260166024820152751d1bdad95b925908191bd95cc81b9bdd08195e1a5cdd60521b6044820152606401610715565b600082815260ce6020526040902080546105af90611e96565b6000828152609760205260409020600101546112d081611431565b61068483836113ca565b6112e2611370565b6001600160a01b0381166113475760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610715565b6104fd816114c1565b611358611370565b6104fd600080516020611f1983398151915282611513565b6033546001600160a01b03163314610a8a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610715565b6113d48282610d2d565b156107285760008281526097602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6104fd81336115ca565b6114458282610d2d565b6107285760008281526097602090815260408083206001600160a01b03851684529091529020805460ff1916600117905561147d3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b610728828261143b565b600054610100900460ff166115445760405162461bcd60e51b815260040161071590611d1e565b610a8a61162e565b600054610100900460ff166115735760405162461bcd60e51b815260040161071590611d1e565b610728828261165e565b600054610100900460ff16610a8a5760405162461bcd60e51b815260040161071590611d1e565b600081815260ce6020526040812080548291906115c090611e96565b9050119050919050565b6115d48282610d2d565b610728576115ec816001600160a01b031660146116ac565b6115f78360206116ac565b604051602001611608929190611c68565b60408051601f198184030181529082905262461bcd60e51b825261071591600401611cdd565b600054610100900460ff166116555760405162461bcd60e51b815260040161071590611d1e565b610a8a336114c1565b600054610100900460ff166116855760405162461bcd60e51b815260040161071590611d1e565b81516116989060cc9060208501906118cf565b5080516106849060cd9060208401906118cf565b606060006116bb836002611d96565b6116c6906002611d7e565b67ffffffffffffffff8111156116ec57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611716576020820181803683370190505b509050600360fc1b8160008151811061173f57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350600f60fb1b8160018151811061177c57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060006117a0846002611d96565b6117ab906001611d7e565b90505b600181111561183f576f181899199a1a9b1b9c1cb0b131b232b360811b85600f16601081106117ed57634e487b7160e01b600052603260045260246000fd5b1a60f81b82828151811061181157634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a90535060049490941c9361183881611e7f565b90506117ae565b50831561188e5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610715565b9392505050565b5080546118a190611e96565b6000825580601f106118b1575050565b601f0160209004906000526020600020908101906104fd9190611953565b8280546118db90611e96565b90600052602060002090601f0160209004810192826118fd5760008555611943565b82601f1061191657805160ff1916838001178555611943565b82800160010185558215611943579182015b82811115611943578251825591602001919060010190611928565b5061194f929150611953565b5090565b5b8082111561194f5760008155600101611954565b80356001600160a01b038116811461197f57600080fd5b919050565b60008083601f840112611995578081fd5b50813567ffffffffffffffff8111156119ac578182fd5b6020830191508360208260051b85010111156119c757600080fd5b9250929050565b600082601f8301126119de578081fd5b813567ffffffffffffffff808211156119f9576119f9611f02565b604051601f8301601f19908116603f01168101908282118183101715611a2157611a21611f02565b81604052838152866020858801011115611a39578485fd5b8360208701602083013792830160200193909352509392505050565b600060208284031215611a66578081fd5b61188e82611968565b60008060208385031215611a81578081fd5b823567ffffffffffffffff811115611a97578182fd5b611aa385828601611984565b90969095509350505050565b60008060208385031215611ac1578182fd5b823567ffffffffffffffff811115611a97578283fd5b600060208284031215611ae8578081fd5b5035919050565b60008060408385031215611b01578182fd5b82359150611b1160208401611968565b90509250929050565b600060208284031215611b2b578081fd5b81356001600160e01b03198116811461188e578182fd5b60008060208385031215611b54578182fd5b823567ffffffffffffffff80821115611b6b578384fd5b818501915085601f830112611b7e578384fd5b813581811115611b8c578485fd5b866020828501011115611b9d578485fd5b60209290920196919550909350505050565b60008060408385031215611bc1578182fd5b823567ffffffffffffffff80821115611bd8578384fd5b611be4868387016119ce565b93506020850135915080821115611bf9578283fd5b50611c06858286016119ce565b9150509250929050565b60008151808452611c28816020860160208601611e4f565b601f01601f19169290920160200192915050565b8183823760009101908152919050565b60008251611c5e818460208701611e4f565b9190910192915050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611ca0816017850160208801611e4f565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611cd1816028840160208801611e4f565b01602801949350505050565b60208152600061188e6020830184611c10565b604081526000611d036040830185611c10565b8281036020840152611d158185611c10565b95945050505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60008235603e19833603018112611c5e578182fd5b60008219821115611d9157611d91611eec565b500190565b6000816000190483118215151615611db057611db0611eec565b500290565b600082821015611dc757611dc7611eec565b500390565b600060408236031215611ddd578081fd5b6040516040810167ffffffffffffffff8282108183111715611e0157611e01611f02565b816040528435915080821115611e15578384fd5b611e21368387016119ce565b83526020850135915080821115611e36578384fd5b50611e43368286016119ce565b60208301525092915050565b60005b83811015611e6a578181015183820152602001611e52565b83811115611e79576000848401525b50505050565b600081611e8e57611e8e611eec565b506000190190565b600181811c90821680611eaa57607f821691505b60208210811415611ecb57634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415611ee557611ee5611eec565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfe3c11d16cbaffd01df69ce1c404f6340ee057498f5f00246190ea54220576a8489f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6a26469706673582212209ab9222b9184fd51aac6120ff42312b1f45bd678b9f81064dcdd7fc5bc241d6e64736f6c63430008040033";

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
