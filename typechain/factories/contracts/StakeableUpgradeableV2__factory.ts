/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  StakeableUpgradeableV2,
  StakeableUpgradeableV2Interface,
} from "../../contracts/StakeableUpgradeableV2";

const _abi = [
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
  "0x608060405234801561001057600080fd5b506104b0806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806323b6230214610067578063715018a6146100a35780637cb569de146100ad5780638da5cb5b146100c0578063eb36854e146100db578063f2fde38b146100ee575b600080fd5b6100906100753660046103f5565b6001600160a01b031660009081526065602052604090205490565b6040519081526020015b60405180910390f35b6100ab610101565b005b6100ab6100bb366004610416565b610115565b6033546040516001600160a01b03909116815260200161009a565b6100ab6100e936600461043f565b6101f9565b6100ab6100fc3660046103f5565b6102b4565b61010961032d565b6101136000610387565b565b61011d61032d565b6001600160a01b03821660009081526065602052604090205481111561018a5760405162461bcd60e51b815260206004820152601760248201527f5f736c6173683a20657863656564732062616c616e636500000000000000000060448201526064015b60405180910390fd5b6001600160a01b038216600090815260656020526040812080548392906101b2908490610457565b90915550506040518181526001600160a01b038316907f4ed05e9673c26d2ed44f7ef6a7f2942df0ee3b5e1e17db4b99f9dcd261a339cd9060200160405180910390a25050565b336000908152606560205260409020548111156102585760405162461bcd60e51b815260206004820152601960248201527f5f756e7374616b653a20657863656564732062616c616e6365000000000000006044820152606401610181565b3360009081526065602052604081208054839290610277908490610457565b909155505060405181815233907f79d3df6837cc49ff0e09fd3258e6e45594e0703445bb06825e9d75156eaee8f09060200160405180910390a250565b6102bc61032d565b6001600160a01b0381166103215760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610181565b61032a81610387565b50565b6033546001600160a01b031633146101135760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610181565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b80356001600160a01b03811681146103f057600080fd5b919050565b600060208284031215610406578081fd5b61040f826103d9565b9392505050565b60008060408385031215610428578081fd5b610431836103d9565b946020939093013593505050565b600060208284031215610450578081fd5b5035919050565b60008282101561047557634e487b7160e01b81526011600452602481fd5b50039056fea2646970667358221220b0f054509f0d50522c83fd5edfcd1a58088d61e0ff577f46f94010e36faba89264736f6c63430008040033";

type StakeableUpgradeableV2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StakeableUpgradeableV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StakeableUpgradeableV2__factory extends ContractFactory {
  constructor(...args: StakeableUpgradeableV2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<StakeableUpgradeableV2> {
    return super.deploy(overrides || {}) as Promise<StakeableUpgradeableV2>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): StakeableUpgradeableV2 {
    return super.attach(address) as StakeableUpgradeableV2;
  }
  override connect(signer: Signer): StakeableUpgradeableV2__factory {
    return super.connect(signer) as StakeableUpgradeableV2__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakeableUpgradeableV2Interface {
    return new utils.Interface(_abi) as StakeableUpgradeableV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StakeableUpgradeableV2 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as StakeableUpgradeableV2;
  }
}
