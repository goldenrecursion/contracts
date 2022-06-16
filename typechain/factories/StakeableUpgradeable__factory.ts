/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  StakeableUpgradeable,
  StakeableUpgradeableInterface,
} from "../StakeableUpgradeable";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
    name: "Staked",
    type: "event",
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
    ],
    name: "_bulkStake",
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
  "0x608060405234801561001057600080fd5b50610645806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638da5cb5b1161005b5780638da5cb5b146100db5780639a32cfa9146100f6578063eb36854e14610109578063f2fde38b1461011c57600080fd5b806323b6230214610082578063715018a6146100be5780637cb569de146100c8575b600080fd5b6100ab61009036600461048a565b6001600160a01b031660009081526065602052604090205490565b6040519081526020015b60405180910390f35b6100c661012f565b005b6100c66100d63660046104ac565b61016e565b6033546040516001600160a01b0390911681526020016100b5565b6100c66101043660046104d6565b610231565b6100c661011736600461054b565b6102fa565b6100c661012a36600461048a565b610381565b6033546001600160a01b031633146101625760405162461bcd60e51b815260040161015990610564565b60405180910390fd5b61016c600061041c565b565b6033546001600160a01b031633146101985760405162461bcd60e51b815260040161015990610564565b6001600160a01b0382166000908152606560205260409020548111156102005760405162461bcd60e51b815260206004820152601760248201527f5f736c6173683a20657863656564732062616c616e63650000000000000000006044820152606401610159565b6001600160a01b038216600090815260656020526040812080548392906102289084906105af565b90915550505050565b6033546001600160a01b0316331461025b5760405162461bcd60e51b815260040161015990610564565b60005b818110156102f557828282818110610278576102786105c6565b9050604002016020013560656000858585818110610298576102986105c6565b6102ae926020604090920201908101915061048a565b6001600160a01b03166001600160a01b0316815260200190815260200160002060008282546102dd91906105dc565b909155508190506102ed816105f4565b91505061025e565b505050565b336000818152606560205260409020548211156103595760405162461bcd60e51b815260206004820152601960248201527f5f756e7374616b653a20657863656564732062616c616e6365000000000000006044820152606401610159565b6001600160a01b038116600090815260656020526040812080548492906102289084906105af565b6033546001600160a01b031633146103ab5760405162461bcd60e51b815260040161015990610564565b6001600160a01b0381166104105760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610159565b6104198161041c565b50565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b80356001600160a01b038116811461048557600080fd5b919050565b60006020828403121561049c57600080fd5b6104a58261046e565b9392505050565b600080604083850312156104bf57600080fd5b6104c88361046e565b946020939093013593505050565b600080602083850312156104e957600080fd5b823567ffffffffffffffff8082111561050157600080fd5b818501915085601f83011261051557600080fd5b81358181111561052457600080fd5b8660208260061b850101111561053957600080fd5b60209290920196919550909350505050565b60006020828403121561055d57600080fd5b5035919050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b634e487b7160e01b600052601160045260246000fd5b6000828210156105c1576105c1610599565b500390565b634e487b7160e01b600052603260045260246000fd5b600082198211156105ef576105ef610599565b500190565b600060001982141561060857610608610599565b506001019056fea26469706673582212207c13dd092a75cadb45f2d6b0e0b7ce6966271e4ef270648f684d1af16db8b9e264736f6c634300080b0033";

export class StakeableUpgradeable__factory extends ContractFactory {
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
  ): Promise<StakeableUpgradeable> {
    return super.deploy(overrides || {}) as Promise<StakeableUpgradeable>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): StakeableUpgradeable {
    return super.attach(address) as StakeableUpgradeable;
  }
  connect(signer: Signer): StakeableUpgradeable__factory {
    return super.connect(signer) as StakeableUpgradeable__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakeableUpgradeableInterface {
    return new utils.Interface(_abi) as StakeableUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StakeableUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as StakeableUpgradeable;
  }
}
