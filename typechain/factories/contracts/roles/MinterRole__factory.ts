/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MinterRole,
  MinterRoleInterface,
} from "../../../contracts/roles/MinterRole";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addedMinter",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "addedBy",
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
        name: "removedMinter",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "removedBy",
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
        name: "addedOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "addedBy",
        type: "address",
      },
    ],
    name: "OwnerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "removedOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "removedBy",
        type: "address",
      },
    ],
    name: "OwnerRemoved",
    type: "event",
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
        name: "account",
        type: "address",
      },
    ],
    name: "addOwner",
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
        name: "account",
        type: "address",
      },
    ],
    name: "isOwner",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "removeOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610564806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c8063173825d9146100675780632f54bf6e1461007c5780633092afd5146100a35780637065cb48146100b6578063983b2d56146100c9578063aa271e1a146100dc575b600080fd5b61007a6100753660046104b0565b6100ef565b005b61008f61008a3660046104b0565b610129565b604051901515815260200160405180910390f35b61007a6100b13660046104b0565b61013c565b61007a6100c43660046104b0565b61016a565b61007a6100d73660046104b0565b610198565b61008f6100ea3660046104b0565b6101c6565b6100f833610129565b61011d5760405162461bcd60e51b8152600401610114906104e0565b60405180910390fd5b610126816101d3565b50565b6000610136600083610217565b92915050565b61014533610129565b6101615760405162461bcd60e51b8152600401610114906104e0565b6101268161029a565b61017333610129565b61018f5760405162461bcd60e51b8152600401610114906104e0565b610126816102de565b6101a133610129565b6101bd5760405162461bcd60e51b8152600401610114906104e0565b61012681610322565b6000610136603283610217565b6101de600082610366565b60405133906001600160a01b038316907fe594d081b4382713733fe631966432c9cea5199afb2db5c3c1931f9f9300367990600090a350565b60006001600160a01b03821661027a5760405162461bcd60e51b815260206004820152602260248201527f526f6c65733a206163636f756e7420697320746865207a65726f206164647265604482015261737360f01b6064820152608401610114565b506001600160a01b03166000908152602091909152604090205460ff1690565b6102a5603282610366565b60405133906001600160a01b038316907f4b5ef9a786cf64a7d82ebcf2d5132667edc9faef4ac36260d9a9e52c526b623290600090a350565b6102e96000826103e8565b60405133906001600160a01b038316907fc82bdbbf677a2462f2a7e22e4ba9abd209496b69cd7b868b3b1d28f76e09a40a90600090a350565b61032d6032826103e8565b60405133906001600160a01b038316907f3c091dafb1d99e4a4c333024492eac3b2cd8bf921a3dd547c937db33be307bb890600090a350565b6103708282610217565b6103c65760405162461bcd60e51b815260206004820152602160248201527f526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c6044820152606560f81b6064820152608401610114565b6001600160a01b0316600090815260209190915260409020805460ff19169055565b6001600160a01b0381166104345760405162461bcd60e51b8152602060048201526013602482015272496e76616c696420307830206164647265737360681b6044820152606401610114565b61043e8282610217565b1561048b5760405162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c65006044820152606401610114565b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b6000602082840312156104c257600080fd5b81356001600160a01b03811681146104d957600080fd5b9392505050565b6020808252602e908201527f4f776e6572526f6c653a2063616c6c657220646f6573206e6f7420686176652060408201526d746865204f776e657220726f6c6560901b60608201526080019056fea2646970667358221220c3896d618032fdb5f6e99e8ecd35961921f4672c9a19821976e8bd3f0f94252164736f6c63430008100033";

type MinterRoleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MinterRoleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MinterRole__factory extends ContractFactory {
  constructor(...args: MinterRoleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MinterRole> {
    return super.deploy(overrides || {}) as Promise<MinterRole>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MinterRole {
    return super.attach(address) as MinterRole;
  }
  override connect(signer: Signer): MinterRole__factory {
    return super.connect(signer) as MinterRole__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MinterRoleInterface {
    return new utils.Interface(_abi) as MinterRoleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MinterRole {
    return new Contract(address, _abi, signerOrProvider) as MinterRole;
  }
}
