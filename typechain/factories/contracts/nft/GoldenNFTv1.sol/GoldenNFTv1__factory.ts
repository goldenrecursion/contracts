/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  GoldenNFTv1,
  GoldenNFTv1Interface,
} from "../../../../contracts/nft/GoldenNFTv1.sol/GoldenNFTv1";

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
  "0x608060405234801561001057600080fd5b5061117c806100206000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c80637e3cdcb2116100a25780639e124d69116100715780639e124d69146101ff578063c4d66de814610212578063c87b56dd14610225578063d85d3d2714610238578063f2fde38b1461024b57600080fd5b80637e3cdcb2146101c057806389d94ff3146101d35780638da5cb5b146101e657806395d89b41146101f757600080fd5b80633eaaf86b116100de5780633eaaf86b1461018757806342966c68146101905780635f260332146101a5578063715018a6146101b857600080fd5b806306fdde03146101105780632a63b2921461012e5780632df283c51461015357806336ba6a8814610166575b600080fd5b61011861025e565b6040516101259190610fa2565b60405180910390f35b6066546001600160a01b03165b6040516001600160a01b039091168152602001610125565b610118610161366004610f5e565b6102f0565b610179610174366004610e47565b610392565b604051908152602001610125565b61017960675481565b6101a361019e366004610f5e565b6103bd565b005b6101a36101b3366004610db1565b610556565b6101a36105a8565b6101a36101ce366004610ddf565b6105bc565b60665461013b906001600160a01b031681565b6033546001600160a01b031661013b565b6101186106dc565b6101a361020d366004610e1f565b6106eb565b6101a3610220366004610db1565b610784565b610118610233366004610f5e565b6108fc565b610179610246366004610eb4565b610965565b6101a3610259366004610db1565b610a6b565b60606068805461026d906110c4565b80601f0160208091040260200160405190810160405280929190818152602001828054610299906110c4565b80156102e65780601f106102bb576101008083540402835291602001916102e6565b820191906000526020600020905b8154815290600101906020018083116102c957829003601f168201915b5050505050905090565b6000818152606a6020526040902080546060919061030d906110c4565b80601f0160208091040260200160405190810160405280929190818152602001828054610339906110c4565b80156103865780601f1061035b57610100808354040283529160200191610386565b820191906000526020600020905b81548152906001019060200180831161036957829003601f168201915b50505050509050919050565b6000606b83836040516103a6929190610f76565b908152602001604051809103902054905092915050565b6103c5610ae4565b6000818152606a6020526040902080546103de906110c4565b1515905061042c5760405162461bcd60e51b8152602060048201526016602482015275313ab937103737b732bc34b9ba32b73a103a37b5b2b760511b60448201526064015b60405180910390fd5b6000818152606a602052604081208054610445906110c4565b80601f0160208091040260200160405190810160405280929190818152602001828054610471906110c4565b80156104be5780601f10610493576101008083540402835291602001916104be565b820191906000526020600020905b8154815290600101906020018083116104a157829003601f168201915b50505050509050606b816040516104d59190610f86565b908152602001604051809103902060009055606a600083815260200190815260200160002060006105069190610c94565b6001606754610515919061107d565b60675560405182907f807d972db6803e8ebfe2ba7ce23584b5fbd0ef70584ff004d2184d2ab1d2e0ad9061054a908490610fa2565b60405180910390a25050565b61055e610ae4565b606680546001600160a01b0319166001600160a01b0383169081179091556040517fe2c34fba7a16caa93431a35c2f08f7f67264f0175978b111d35dbd9e014bb51690600090a250565b6105b0610ae4565b6105ba6000610b3e565b565b6105c4610ae4565b806106035760405162461bcd60e51b815260206004820152600f60248201526e62756c6b4d696e742030204e46547360881b6044820152606401610423565b60005b818110156106d757600083838381811061063057634e487b7160e01b600052603260045260246000fd5b90506020028101906106429190611020565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050825192935050506106b95760405162461bcd60e51b815260206004820152600f60248201526e195b5c1d1e4818d95c985b5a58d259608a1b6044820152606401610423565b6106c281610965565b505080806106cf906110ff565b915050610606565b505050565b60606069805461026d906110c4565b6106f3610ae4565b806107325760405162461bcd60e51b815260206004820152600f60248201526e62756c6b4275726e2030204e46547360881b6044820152606401610423565b60005b818110156106d757600083838381811061075f57634e487b7160e01b600052603260045260246000fd5b905060200201359050610771816103bd565b508061077c816110ff565b915050610735565b600054610100900460ff16158080156107a45750600054600160ff909116105b806107be5750303b1580156107be575060005460ff166001145b6108215760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610423565b6000805460ff191660011790558015610844576000805461ff0019166101001790555b61084c610b90565b6108976040518060400160405280600d81526020016c476f6c64656e20456e7469747960981b81525060405180604001604052806004815260200163474c444560e01b815250610bbf565b606680546001600160a01b0319166001600160a01b03841617905580156108f8576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b606061090782610bf0565b61094c5760405162461bcd60e51b81526020600482015260166024820152751d1bdad95b925908191bd95cc81b9bdd08195e1a5cdd60521b6044820152606401610423565b6000828152606a60205260409020805461030d906110c4565b600061096f610ae4565b81516109bd5760405162461bcd60e51b815260206004820152601960248201527f636572616d696349642063616e6e6f7420626520656d707479000000000000006044820152606401610423565b60006109c860655490565b905080606b846040516109db9190610f86565b9081526040805160209281900383019020929092556000838152606a8252919091208451610a0b92860190610cce565b50610a1a606580546001019055565b606754610a28906001611065565b60675560405181907fadef11a3979b8ceb0573eb6ef0678134a09c23a0d94e5ea47cd18ac3a9fc019490610a5d908690610fa2565b60405180910390a292915050565b610a73610ae4565b6001600160a01b038116610ad85760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610423565b610ae181610b3e565b50565b6033546001600160a01b031633146105ba5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610423565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff16610bb75760405162461bcd60e51b815260040161042390610fd5565b6105ba610c16565b600054610100900460ff16610be65760405162461bcd60e51b815260040161042390610fd5565b6108f88282610c46565b6000818152606a602052604081208054829190610c0c906110c4565b9050119050919050565b600054610100900460ff16610c3d5760405162461bcd60e51b815260040161042390610fd5565b6105ba33610b3e565b600054610100900460ff16610c6d5760405162461bcd60e51b815260040161042390610fd5565b8151610c80906068906020850190610cce565b5080516106d7906069906020840190610cce565b508054610ca0906110c4565b6000825580601f10610cb0575050565b601f016020900490600052602060002090810190610ae19190610d52565b828054610cda906110c4565b90600052602060002090601f016020900481019282610cfc5760008555610d42565b82601f10610d1557805160ff1916838001178555610d42565b82800160010185558215610d42579182015b82811115610d42578251825591602001919060010190610d27565b50610d4e929150610d52565b5090565b5b80821115610d4e5760008155600101610d53565b60008083601f840112610d78578081fd5b50813567ffffffffffffffff811115610d8f578182fd5b6020830191508360208260051b8501011115610daa57600080fd5b9250929050565b600060208284031215610dc2578081fd5b81356001600160a01b0381168114610dd8578182fd5b9392505050565b60008060208385031215610df1578081fd5b823567ffffffffffffffff811115610e07578182fd5b610e1385828601610d67565b90969095509350505050565b60008060208385031215610e31578182fd5b823567ffffffffffffffff811115610e07578283fd5b60008060208385031215610e59578182fd5b823567ffffffffffffffff80821115610e70578384fd5b818501915085601f830112610e83578384fd5b813581811115610e91578485fd5b866020828501011115610ea2578485fd5b60209290920196919550909350505050565b600060208284031215610ec5578081fd5b813567ffffffffffffffff80821115610edc578283fd5b818401915084601f830112610eef578283fd5b813581811115610f0157610f01611130565b604051601f8201601f19908116603f01168101908382118183101715610f2957610f29611130565b81604052828152876020848701011115610f41578586fd5b826020860160208301379182016020019490945295945050505050565b600060208284031215610f6f578081fd5b5035919050565b8183823760009101908152919050565b60008251610f98818460208701611094565b9190910192915050565b6020815260008251806020840152610fc1816040850160208701611094565b601f01601f19169190910160400192915050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b6000808335601e19843603018112611036578283fd5b83018035915067ffffffffffffffff821115611050578283fd5b602001915036819003821315610daa57600080fd5b600082198211156110785761107861111a565b500190565b60008282101561108f5761108f61111a565b500390565b60005b838110156110af578181015183820152602001611097565b838111156110be576000848401525b50505050565b600181811c908216806110d857607f821691505b602082108114156110f957634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156111135761111361111a565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fdfea2646970667358221220f6895509561937c089bd0503f9951857e0166e64f24ab5eb34e491f913b905dc64736f6c63430008040033";

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
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GoldenNFTv1> {
    return super.deploy(overrides || {}) as Promise<GoldenNFTv1>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
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
