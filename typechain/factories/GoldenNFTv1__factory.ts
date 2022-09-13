/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GoldenNFTv1, GoldenNFTv1Interface } from "../GoldenNFTv1";

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
        name: "ceramicIds",
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
    name: "ceramicIdByTokenId",
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
        internalType: "string",
        name: "ceramicId",
        type: "string",
      },
    ],
    name: "tokenIdByCeramicId",
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
  "0x608060405234801561001057600080fd5b50611284806100206000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80637e3cdcb2116100a25780639e124d69116100715780639e124d69146101ff578063c4d66de814610212578063c87b56dd14610225578063d85d3d2714610238578063f2fde38b1461024b57600080fd5b80637e3cdcb2146101c057806389d94ff3146101d35780638da5cb5b146101e657806395d89b41146101f757600080fd5b80633eaaf86b116100de5780633eaaf86b1461018757806342966c68146101905780635f260332146101a5578063715018a6146101b857600080fd5b806306fdde03146101105780632a63b2921461012e5780632df283c51461015357806336ba6a8814610166575b600080fd5b61011861025e565b6040516101259190611027565b60405180910390f35b6066546001600160a01b03165b6040516001600160a01b039091168152602001610125565b610118610161366004610fe3565b6102f0565b610179610174366004610ecc565b610392565b604051908152602001610125565b61017960675481565b6101a361019e366004610fe3565b6103bd565b005b6101a36101b3366004610e36565b61057c565b6101a36105f0565b6101a36101ce366004610e64565b610626565b60665461013b906001600160a01b031681565b6033546001600160a01b031661013b565b610118610768565b6101a361020d366004610ea4565b610777565b6101a3610220366004610e36565b610832565b610118610233366004610fe3565b61090e565b610179610246366004610f39565b610977565b6101a3610259366004610e36565b610aa0565b60606068805461026d906111cc565b80601f0160208091040260200160405190810160405280929190818152602001828054610299906111cc565b80156102e65780601f106102bb576101008083540402835291602001916102e6565b820191906000526020600020905b8154815290600101906020018083116102c957829003601f168201915b5050505050905090565b6000818152606a6020526040902080546060919061030d906111cc565b80601f0160208091040260200160405190810160405280929190818152602001828054610339906111cc565b80156103865780601f1061035b57610100808354040283529160200191610386565b820191906000526020600020905b81548152906001019060200180831161036957829003601f168201915b50505050509050919050565b6000606b83836040516103a6929190610ffb565b908152602001604051809103902054905092915050565b6033546001600160a01b031633146103f05760405162461bcd60e51b81526004016103e7906110a8565b60405180910390fd5b6000818152606a602052604090208054610409906111cc565b151590506104525760405162461bcd60e51b8152602060048201526016602482015275313ab937103737b732bc34b9ba32b73a103a37b5b2b760511b60448201526064016103e7565b6000818152606a60205260408120805461046b906111cc565b80601f0160208091040260200160405190810160405280929190818152602001828054610497906111cc565b80156104e45780601f106104b9576101008083540402835291602001916104e4565b820191906000526020600020905b8154815290600101906020018083116104c757829003601f168201915b50505050509050606b816040516104fb919061100b565b908152602001604051809103902060009055606a6000838152602001908152602001600020600061052c9190610d19565b600160675461053b9190611185565b60675560405182907f807d972db6803e8ebfe2ba7ce23584b5fbd0ef70584ff004d2184d2ab1d2e0ad90610570908490611027565b60405180910390a25050565b6033546001600160a01b031633146105a65760405162461bcd60e51b81526004016103e7906110a8565b606680546001600160a01b0319166001600160a01b0383169081179091556040517fe2c34fba7a16caa93431a35c2f08f7f67264f0175978b111d35dbd9e014bb51690600090a250565b6033546001600160a01b0316331461061a5760405162461bcd60e51b81526004016103e7906110a8565b6106246000610b3b565b565b6033546001600160a01b031633146106505760405162461bcd60e51b81526004016103e7906110a8565b8061068f5760405162461bcd60e51b815260206004820152600f60248201526e62756c6b4d696e742030204e46547360881b60448201526064016103e7565b60005b818110156107635760008383838181106106bc57634e487b7160e01b600052603260045260246000fd5b90506020028101906106ce9190611128565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050825192935050506107455760405162461bcd60e51b815260206004820152600f60248201526e195b5c1d1e4818d95c985b5a58d259608a1b60448201526064016103e7565b61074e81610977565b5050808061075b90611207565b915050610692565b505050565b60606069805461026d906111cc565b6033546001600160a01b031633146107a15760405162461bcd60e51b81526004016103e7906110a8565b806107e05760405162461bcd60e51b815260206004820152600f60248201526e62756c6b4275726e2030204e46547360881b60448201526064016103e7565b60005b8181101561076357600083838381811061080d57634e487b7160e01b600052603260045260246000fd5b90506020020135905061081f816103bd565b508061082a81611207565b9150506107e3565b600061083e6001610b8d565b90508015610856576000805461ff0019166101001790555b61085e610c15565b6108a96040518060400160405280600d81526020016c476f6c64656e20456e7469747960981b81525060405180604001604052806004815260200163474c444560e01b815250610c44565b606680546001600160a01b0319166001600160a01b038416179055801561090a576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b606061091982610c75565b61095e5760405162461bcd60e51b81526020600482015260166024820152751d1bdad95b925908191bd95cc81b9bdd08195e1a5cdd60521b60448201526064016103e7565b6000828152606a60205260409020805461030d906111cc565b6033546000906001600160a01b031633146109a45760405162461bcd60e51b81526004016103e7906110a8565b81516109f25760405162461bcd60e51b815260206004820152601960248201527f636572616d696349642063616e6e6f7420626520656d7074790000000000000060448201526064016103e7565b60006109fd60655490565b905080606b84604051610a10919061100b565b9081526040805160209281900383019020929092556000838152606a8252919091208451610a4092860190610d53565b50610a4f606580546001019055565b606754610a5d90600161116d565b60675560405181907fadef11a3979b8ceb0573eb6ef0678134a09c23a0d94e5ea47cd18ac3a9fc019490610a92908690611027565b60405180910390a292915050565b6033546001600160a01b03163314610aca5760405162461bcd60e51b81526004016103e7906110a8565b6001600160a01b038116610b2f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016103e7565b610b3881610b3b565b50565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60008054610100900460ff1615610bd4578160ff166001148015610bb05750303b155b610bcc5760405162461bcd60e51b81526004016103e79061105a565b506000919050565b60005460ff808416911610610bfb5760405162461bcd60e51b81526004016103e79061105a565b506000805460ff191660ff92909216919091179055600190565b600054610100900460ff16610c3c5760405162461bcd60e51b81526004016103e7906110dd565b610624610c9b565b600054610100900460ff16610c6b5760405162461bcd60e51b81526004016103e7906110dd565b61090a8282610ccb565b6000818152606a602052604081208054829190610c91906111cc565b9050119050919050565b600054610100900460ff16610cc25760405162461bcd60e51b81526004016103e7906110dd565b61062433610b3b565b600054610100900460ff16610cf25760405162461bcd60e51b81526004016103e7906110dd565b8151610d05906068906020850190610d53565b508051610763906069906020840190610d53565b508054610d25906111cc565b6000825580601f10610d35575050565b601f016020900490600052602060002090810190610b389190610dd7565b828054610d5f906111cc565b90600052602060002090601f016020900481019282610d815760008555610dc7565b82601f10610d9a57805160ff1916838001178555610dc7565b82800160010185558215610dc7579182015b82811115610dc7578251825591602001919060010190610dac565b50610dd3929150610dd7565b5090565b5b80821115610dd35760008155600101610dd8565b60008083601f840112610dfd578081fd5b50813567ffffffffffffffff811115610e14578182fd5b6020830191508360208260051b8501011115610e2f57600080fd5b9250929050565b600060208284031215610e47578081fd5b81356001600160a01b0381168114610e5d578182fd5b9392505050565b60008060208385031215610e76578081fd5b823567ffffffffffffffff811115610e8c578182fd5b610e9885828601610dec565b90969095509350505050565b60008060208385031215610eb6578182fd5b823567ffffffffffffffff811115610e8c578283fd5b60008060208385031215610ede578182fd5b823567ffffffffffffffff80821115610ef5578384fd5b818501915085601f830112610f08578384fd5b813581811115610f16578485fd5b866020828501011115610f27578485fd5b60209290920196919550909350505050565b600060208284031215610f4a578081fd5b813567ffffffffffffffff80821115610f61578283fd5b818401915084601f830112610f74578283fd5b813581811115610f8657610f86611238565b604051601f8201601f19908116603f01168101908382118183101715610fae57610fae611238565b81604052828152876020848701011115610fc6578586fd5b826020860160208301379182016020019490945295945050505050565b600060208284031215610ff4578081fd5b5035919050565b8183823760009101908152919050565b6000825161101d81846020870161119c565b9190910192915050565b602081526000825180602084015261104681604085016020870161119c565b601f01601f19169190910160400192915050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b6000808335601e1984360301811261113e578283fd5b83018035915067ffffffffffffffff821115611158578283fd5b602001915036819003821315610e2f57600080fd5b6000821982111561118057611180611222565b500190565b60008282101561119757611197611222565b500390565b60005b838110156111b757818101518382015260200161119f565b838111156111c6576000848401525b50505050565b600181811c908216806111e057607f821691505b6020821081141561120157634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561121b5761121b611222565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220c29b89e656a12b7516b24955d81f12ec1749d7dd157c40e74a0e04c1fffbaa9064736f6c63430008040033";

export class GoldenNFTv1__factory extends ContractFactory {
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
  ): Promise<GoldenNFTv1> {
    return super.deploy(overrides || {}) as Promise<GoldenNFTv1>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GoldenNFTv1 {
    return super.attach(address) as GoldenNFTv1;
  }
  connect(signer: Signer): GoldenNFTv1__factory {
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
