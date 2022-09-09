/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GoldenSchema,
  GoldenSchemaInterface,
} from "../../contracts/GoldenSchema";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes16",
            name: "predicateID",
            type: "bytes16",
          },
          {
            internalType: "bytes32",
            name: "latestCID",
            type: "bytes32",
          },
        ],
        internalType: "struct GoldenSchema.Predicate[]",
        name: "initialPredicates",
        type: "tuple[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        internalType: "bytes16",
        name: "predicateID",
        type: "bytes16",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "latestCID",
        type: "bytes32",
      },
    ],
    name: "PredicateAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes16",
        name: "predicateID",
        type: "bytes16",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "latestCID",
        type: "bytes32",
      },
    ],
    name: "PredicateRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes16",
        name: "predicateID",
        type: "bytes16",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "latestCID",
        type: "bytes32",
      },
    ],
    name: "PredicateUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes16",
        name: "predicateID",
        type: "bytes16",
      },
      {
        internalType: "bytes32",
        name: "predicateCID",
        type: "bytes32",
      },
    ],
    name: "addPredicate",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "bytes16",
        name: "",
        type: "bytes16",
      },
    ],
    name: "predicateIDToLatestCID",
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
    name: "predicates",
    outputs: [
      {
        components: [
          {
            internalType: "bytes16",
            name: "predicateID",
            type: "bytes16",
          },
          {
            internalType: "bytes32",
            name: "latestCID",
            type: "bytes32",
          },
        ],
        internalType: "struct GoldenSchema.Predicate[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes16",
        name: "predicateID",
        type: "bytes16",
      },
    ],
    name: "removePredicate",
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
        internalType: "bytes16",
        name: "predicateID",
        type: "bytes16",
      },
      {
        internalType: "bytes32",
        name: "predicateCID",
        type: "bytes32",
      },
    ],
    name: "updatePredicate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162000e8638038062000e8683398101604081905262000034916200034d565b6200003f33620000d5565b805160005b81811015620000cc57620000b78382815181106200007257634e487b7160e01b600052603260045260246000fd5b6020026020010151600001518483815181106200009f57634e487b7160e01b600052603260045260246000fd5b6020026020010151602001516200012560201b60201c565b80620000c38162000498565b91505062000044565b505050620004d6565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6200012f62000192565b6200014a826001620001f460201b6200041f1790919060201c565b6001600160801b03198216600081815260036020526040808220849055518392917fddbd9c69ad18561fc7cf11ff7be612fea0c255ddacedce5a41dd21a65a24ae8591a35050565b6000546001600160a01b03163314620001f25760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b565b620002008282620002c0565b15620002625760405162461bcd60e51b815260206004820152602a60248201527f427974657331365365743a206b657920616c726561647920657869737473206960448201526937103a34329039b2ba1760b11b6064820152608401620001e9565b600182810180546001600160801b0319841660009081526020958652604081208290558184018355918252939020600284040180546001600160801b03949092166010026101000a9384021990911660809290921c92909202179055565b6001820154600090620002d65750600062000347565b6001600160801b0319821660008181526020859052604090205460018501805490919081106200031657634e487b7160e01b600052603260045260246000fd5b90600052602060002090600291828204019190066010029054906101000a900460801b6001600160801b0319161490505b92915050565b6000602080838503121562000360578182fd5b82516001600160401b038082111562000377578384fd5b818501915085601f8301126200038b578384fd5b815181811115620003a057620003a0620004c0565b620003b0848260051b0162000465565b8181528481019250838501600683901b85018601891015620003d0578687fd5b8694505b828510156200042e57604080828b031215620003ee578788fd5b620003f86200043a565b82516001600160801b0319811681146200041057898afd5b815282880151888201528552600195909501949386019301620003d4565b50979650505050505050565b604080519081016001600160401b03811182821017156200045f576200045f620004c0565b60405290565b604051601f8201601f191681016001600160401b0381118282101715620004905762000490620004c0565b604052919050565b6000600019821415620004b957634e487b7160e01b81526011600452602481fd5b5060010190565b634e487b7160e01b600052604160045260246000fd5b6109a080620004e66000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c80638da5cb5b1161005b5780638da5cb5b146100db578063b4112e40146100f6578063d6b7636314610124578063f2fde38b1461013757600080fd5b806338b7a7d51461008d5780633c3efab4146100a2578063702f1f5d146100c0578063715018a6146100d3575b600080fd5b6100a061009b3660046108a0565b61014a565b005b6100aa61019a565b6040516100b791906108c9565b60405180910390f35b6100a06100ce3660046108a0565b6102d9565b6100a0610334565b6000546040516001600160a01b0390911681526020016100b7565b610116610104366004610886565b60036020526000908152604090205481565b6040519081526020016100b7565b6100a0610132366004610886565b610348565b6100a0610145366004610858565b6103a1565b6101526104e7565b6001600160801b03198216600081815260036020526040808220849055518392917f115c3e1d5164e8f7d3fc558e8a290f058c709114555eed7426c3c3b9d7d7318591a35050565b60025460609060009067ffffffffffffffff8111156101c957634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561020e57816020015b60408051808201909152600080825260208201528152602001906001900390816101e75790505b50905060005b81518110156102d357610228600182610541565b82828151811061024857634e487b7160e01b600052603260045260246000fd5b60209081029190910101516001600160801b0319909116905260036000610270600184610541565b6001600160801b0319166001600160801b0319168152602001908152602001600020548282815181106102b357634e487b7160e01b600052603260045260246000fd5b6020908102919091018101510152806102cb81610939565b915050610214565b50919050565b6102e16104e7565b6102ec60018361041f565b6001600160801b03198216600081815260036020526040808220849055518392917fddbd9c69ad18561fc7cf11ff7be612fea0c255ddacedce5a41dd21a65a24ae8591a35050565b61033c6104e7565b6103466000610592565b565b6103506104e7565b61035b6001826105e2565b6001600160801b031981166000818152600360205260408082205490519092917f0792080f73e0f4bd6ee184076e9f0924507e65f2aa6517aef7b6abd9bc45b96291a350565b6103a96104e7565b6001600160a01b0381166104135760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b61041c81610592565b50565b61042982826107b5565b156104895760405162461bcd60e51b815260206004820152602a60248201527f427974657331365365743a206b657920616c726561647920657869737473206960448201526937103a34329039b2ba1760b11b606482015260840161040a565b600182810180546001600160801b0319841660009081526020958652604081208290558184018355918252939020600284040180546001600160801b03949092166010026101000a9384021990911660809290921c92909202179055565b6000546001600160a01b031633146103465760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161040a565b600082600101828154811061056657634e487b7160e01b600052603260045260246000fd5b90600052602060002090600291828204019190066010029054906101000a900460801b90505b92915050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6105ec82826107b5565b61064b5760405162461bcd60e51b815260206004820152602a60248201527f427974657331365365743a206b657920646f6573206e6f74206578697374206960448201526937103a34329039b2ba1760b11b606482015260840161040a565b6000600161065a846001015490565b6106649190610922565b6001600160801b031983166000908152602085905260409020549091508082146107435760008460010183815481106106ad57634e487b7160e01b600052603260045260246000fd5b6000918252602080832060028304015460019283166010026101000a900460801b6001600160801b0319811684529088905260409092208490558601805491925082918490811061070e57634e487b7160e01b600052603260045260246000fd5b90600052602060002090600291828204019190066010026101000a8154816001600160801b03021916908360801c0217905550505b6001600160801b031983166000908152602085905260408120556001840180548061077e57634e487b7160e01b600052603160045260246000fd5b60008281526020902060026000199092019182040180546001600160801b03601060018516026101000a0219169055905550505050565b60018201546000906107c95750600061058c565b6001600160801b03198216600081815260208590526040902054600185018054909190811061080857634e487b7160e01b600052603260045260246000fd5b6000918252602090912060028204015460019091166010026101000a900460801b6001600160801b031916149392505050565b80356001600160801b03198116811461085357600080fd5b919050565b600060208284031215610869578081fd5b81356001600160a01b038116811461087f578182fd5b9392505050565b600060208284031215610897578081fd5b61087f8261083b565b600080604083850312156108b2578081fd5b6108bb8361083b565b946020939093013593505050565b602080825282518282018190526000919060409081850190868401855b8281101561091557815180516001600160801b03191685528601518685015292840192908501906001016108e6565b5091979650505050505050565b60008282101561093457610934610954565b500390565b600060001982141561094d5761094d610954565b5060010190565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220f92dc177ef752ff5b0ecc59b905f16803e10aff744bc413f1a77b5df64d477a364736f6c63430008040033";

type GoldenSchemaConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GoldenSchemaConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GoldenSchema__factory extends ContractFactory {
  constructor(...args: GoldenSchemaConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    initialPredicates: GoldenSchema.PredicateStruct[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GoldenSchema> {
    return super.deploy(
      initialPredicates,
      overrides || {}
    ) as Promise<GoldenSchema>;
  }
  override getDeployTransaction(
    initialPredicates: GoldenSchema.PredicateStruct[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(initialPredicates, overrides || {});
  }
  override attach(address: string): GoldenSchema {
    return super.attach(address) as GoldenSchema;
  }
  override connect(signer: Signer): GoldenSchema__factory {
    return super.connect(signer) as GoldenSchema__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GoldenSchemaInterface {
    return new utils.Interface(_abi) as GoldenSchemaInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GoldenSchema {
    return new Contract(address, _abi, signerOrProvider) as GoldenSchema;
  }
}
