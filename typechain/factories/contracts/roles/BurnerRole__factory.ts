/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BurnerRole,
  BurnerRoleInterface,
} from "../../../contracts/roles/BurnerRole";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addedBurner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "addedBy",
        type: "address",
      },
    ],
    name: "BurnerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "removedBurner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "removedBy",
        type: "address",
      },
    ],
    name: "BurnerRemoved",
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
    name: "addBurner",
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
    name: "isBurner",
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
    name: "removeBurner",
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
  "0x608060405234801561001057600080fd5b50610564806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80630284685814610067578063173825d91461007c5780632f54bf6e1461008f5780634334614a146100b65780637065cb48146100c9578063f44637ba146100dc575b600080fd5b61007a6100753660046104b0565b6100ef565b005b61007a61008a3660046104b0565b610129565b6100a261009d3660046104b0565b610157565b604051901515815260200160405180910390f35b6100a26100c43660046104b0565b61016a565b61007a6100d73660046104b0565b610177565b61007a6100ea3660046104b0565b6101a5565b6100f833610157565b61011d5760405162461bcd60e51b8152600401610114906104e0565b60405180910390fd5b610126816101d3565b50565b61013233610157565b61014e5760405162461bcd60e51b8152600401610114906104e0565b61012681610217565b600061016460008361025b565b92915050565b600061016460328361025b565b61018033610157565b61019c5760405162461bcd60e51b8152600401610114906104e0565b610126816102de565b6101ae33610157565b6101ca5760405162461bcd60e51b8152600401610114906104e0565b61012681610322565b6101de603282610366565b60405133906001600160a01b038316907f85222465e0d438163a28671b59fc9ebeb03bf39f880ddd36c8315da7512b31c090600090a350565b610222600082610366565b60405133906001600160a01b038316907fe594d081b4382713733fe631966432c9cea5199afb2db5c3c1931f9f9300367990600090a350565b60006001600160a01b0382166102be5760405162461bcd60e51b815260206004820152602260248201527f526f6c65733a206163636f756e7420697320746865207a65726f206164647265604482015261737360f01b6064820152608401610114565b506001600160a01b03166000908152602091909152604090205460ff1690565b6102e96000826103e8565b60405133906001600160a01b038316907fc82bdbbf677a2462f2a7e22e4ba9abd209496b69cd7b868b3b1d28f76e09a40a90600090a350565b61032d6032826103e8565b60405133906001600160a01b038316907f86515ebaad527298e98929c064c075f5a2604cc80afc0db29e73c01a36f8e98c90600090a350565b610370828261025b565b6103c65760405162461bcd60e51b815260206004820152602160248201527f526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c6044820152606560f81b6064820152608401610114565b6001600160a01b0316600090815260209190915260409020805460ff19169055565b6001600160a01b0381166104345760405162461bcd60e51b8152602060048201526013602482015272496e76616c696420307830206164647265737360681b6044820152606401610114565b61043e828261025b565b1561048b5760405162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c65006044820152606401610114565b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b6000602082840312156104c257600080fd5b81356001600160a01b03811681146104d957600080fd5b9392505050565b6020808252602e908201527f4f776e6572526f6c653a2063616c6c657220646f6573206e6f7420686176652060408201526d746865204f776e657220726f6c6560901b60608201526080019056fea26469706673582212201bef9ebce4140eafee0c854a04ccd903e3d96de083b280a66be0c3f51156fc8364736f6c63430008100033";

type BurnerRoleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BurnerRoleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BurnerRole__factory extends ContractFactory {
  constructor(...args: BurnerRoleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BurnerRole> {
    return super.deploy(overrides || {}) as Promise<BurnerRole>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BurnerRole {
    return super.attach(address) as BurnerRole;
  }
  override connect(signer: Signer): BurnerRole__factory {
    return super.connect(signer) as BurnerRole__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BurnerRoleInterface {
    return new utils.Interface(_abi) as BurnerRoleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BurnerRole {
    return new Contract(address, _abi, signerOrProvider) as BurnerRole;
  }
}
