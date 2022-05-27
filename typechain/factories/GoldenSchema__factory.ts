/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BytesLike,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GoldenSchema, GoldenSchemaInterface } from "../GoldenSchema";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "predicateID",
            type: "bytes32",
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
        internalType: "bytes32",
        name: "predicateID",
        type: "bytes32",
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
        internalType: "bytes32",
        name: "predicateID",
        type: "bytes32",
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
        internalType: "bytes32",
        name: "predicateID",
        type: "bytes32",
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
        internalType: "bytes32",
        name: "predicateID",
        type: "bytes32",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "predicateID",
        type: "bytes32",
      },
    ],
    name: "getPredicateLatestCID",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
            internalType: "bytes32",
            name: "predicateID",
            type: "bytes32",
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
        internalType: "bytes32",
        name: "predicateID",
        type: "bytes32",
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
        internalType: "bytes32",
        name: "predicateID",
        type: "bytes32",
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
  "0x60806040523480156200001157600080fd5b5060405162000d2438038062000d24833981016040819052620000349162000326565b6200003f33620000bd565b805160005b81811015620000b4576200009f83828151811062000066576200006662000400565b60200260200101516000015184838151811062000087576200008762000400565b6020026020010151602001516200010d60201b60201c565b80620000ab8162000416565b91505062000044565b50505062000440565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000546001600160a01b031633146200016d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b62000188826001620001c760201b620004b81790919060201c565b60008281526003602052604080822083905551829184917f0c6305c0066e1f6972ef7a5a5374478f603a5f86e1a27b4ba787f4d02da76a689190a35050565b620001d382826200025e565b15620002355760405162461bcd60e51b815260206004820152602a60248201527f427974657333325365743a206b657920616c726561647920657869737473206960448201526937103a34329039b2ba1760b11b606482015260840162000164565b600180830180546000848152602095865260408120829055928101825590825292902090910155565b60018201546000906200027457506000620002ac565b60008281526020849052604090205460018401805484929081106200029d576200029d62000400565b90600052602060002001541490505b92915050565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b0381118282101715620002ed57620002ed620002b2565b60405290565b604051601f8201601f191681016001600160401b03811182821017156200031e576200031e620002b2565b604052919050565b600060208083850312156200033a57600080fd5b82516001600160401b03808211156200035257600080fd5b818501915085601f8301126200036757600080fd5b8151818111156200037c576200037c620002b2565b6200038c848260051b01620002f3565b818152848101925060069190911b830184019087821115620003ad57600080fd5b928401925b81841015620003f55760408489031215620003cd5760008081fd5b620003d7620002c8565b845181528585015186820152835260409093019291840191620003b2565b979650505050505050565b634e487b7160e01b600052603260045260246000fd5b60006000198214156200043957634e487b7160e01b600052601160045260246000fd5b5060010190565b6108d480620004506000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c80637283f4f3116100665780637283f4f3146100fd5780638da5cb5b146101105780639ce5ac741461012b578063b5882c431461014b578063f2fde38b1461015e57600080fd5b8063022d68ad14610098578063262e3ee4146100cb5780633c3efab4146100e0578063715018a6146100f5575b600080fd5b6100b86100a6366004610725565b60036020526000908152604090205481565b6040519081526020015b60405180910390f35b6100de6100d9366004610725565b610171565b005b6100e86101ec565b6040516100c2919061073e565b6100de61030a565b6100de61010b36600461078d565b610340565b6000546040516001600160a01b0390911681526020016100c2565b6100b8610139366004610725565b60009081526003602052604090205490565b6100de61015936600461078d565b6103b4565b6100de61016c3660046107af565b61041d565b6000546001600160a01b031633146101a45760405162461bcd60e51b815260040161019b906107df565b60405180910390fd5b6101af60018261054b565b600081815260036020526040808220549051909183917fe8910083a88dda0af5e5f6b6b911077b882dce252822856218650ed47c2678de9190a350565b60025460609060009067ffffffffffffffff81111561020d5761020d610814565b60405190808252806020026020018201604052801561025257816020015b604080518082019091526000808252602082015281526020019060019003908161022b5790505b50905060005b81518110156103045760028054829081106102755761027561082a565b90600052602060002001548282815181106102925761029261082a565b60209081029190910101515260028054600391600091849081106102b8576102b861082a565b90600052602060002001548152602001908152602001600020548282815181106102e4576102e461082a565b6020908102919091018101510152806102fc81610856565b915050610258565b50919050565b6000546001600160a01b031633146103345760405162461bcd60e51b815260040161019b906107df565b61033e6000610686565b565b6000546001600160a01b0316331461036a5760405162461bcd60e51b815260040161019b906107df565b6103756001836104b8565b60008281526003602052604080822083905551829184917f0c6305c0066e1f6972ef7a5a5374478f603a5f86e1a27b4ba787f4d02da76a689190a35050565b6000546001600160a01b031633146103de5760405162461bcd60e51b815260040161019b906107df565b60008281526003602052604080822083905551829184917fc2b9a44d4fbc14f0e08b7012fd00c9f642635de7475b97ba6890d8af181aacd49190a35050565b6000546001600160a01b031633146104475760405162461bcd60e51b815260040161019b906107df565b6001600160a01b0381166104ac5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161019b565b6104b581610686565b50565b6104c282826106d6565b156105225760405162461bcd60e51b815260206004820152602a60248201527f427974657333325365743a206b657920616c726561647920657869737473206960448201526937103a34329039b2ba1760b11b606482015260840161019b565b600180830180546000848152602095865260408120829055928101825590825292902090910155565b61055582826106d6565b6105b45760405162461bcd60e51b815260206004820152602a60248201527f427974657333325365743a206b657920646f6573206e6f74206578697374206960448201526937103a34329039b2ba1760b11b606482015260840161019b565b600060016105c3846001015490565b6105cd9190610871565b6000838152602085905260409020549091508082146106485760008460010183815481106105fd576105fd61082a565b9060005260206000200154905081856000016000838152602001908152602001600020819055508085600101838154811061063a5761063a61082a565b600091825260209091200155505b6000838152602085905260408120556001840180548061066a5761066a610888565b6001900381819060005260206000200160009055905550505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60018201546000906106ea5750600061071f565b60008281526020849052604090205460018401805484929081106107105761071061082a565b90600052602060002001541490505b92915050565b60006020828403121561073757600080fd5b5035919050565b602080825282518282018190526000919060409081850190868401855b828110156107805781518051855286015186850152928401929085019060010161075b565b5091979650505050505050565b600080604083850312156107a057600080fd5b50508035926020909101359150565b6000602082840312156107c157600080fd5b81356001600160a01b03811681146107d857600080fd5b9392505050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060001982141561086a5761086a610840565b5060010190565b60008282101561088357610883610840565b500390565b634e487b7160e01b600052603160045260246000fdfea2646970667358221220e755795b4e8f5d2f3e904e9e25938b1fe8d27dd396a8662c706a14b94e6f312064736f6c634300080b0033";

export class GoldenSchema__factory extends ContractFactory {
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
    initialPredicates: { predicateID: BytesLike; latestCID: BytesLike }[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GoldenSchema> {
    return super.deploy(
      initialPredicates,
      overrides || {}
    ) as Promise<GoldenSchema>;
  }
  getDeployTransaction(
    initialPredicates: { predicateID: BytesLike; latestCID: BytesLike }[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(initialPredicates, overrides || {});
  }
  attach(address: string): GoldenSchema {
    return super.attach(address) as GoldenSchema;
  }
  connect(signer: Signer): GoldenSchema__factory {
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
