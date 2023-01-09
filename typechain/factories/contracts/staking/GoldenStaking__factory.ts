/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GoldenStaking,
  GoldenStakingInterface,
} from "../../../contracts/staking/GoldenStaking";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lockedUntil",
        type: "uint256",
      },
    ],
    name: "Deposited",
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
        indexed: false,
        internalType: "uint256",
        name: "minimumStaking",
        type: "uint256",
      },
    ],
    name: "MinimumStakingChanged",
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
        indexed: false,
        internalType: "uint256",
        name: "stakingTime",
        type: "uint256",
      },
    ],
    name: "StakingTimeChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balances",
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
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMinimumStaking",
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
    inputs: [],
    name: "getStakingTime",
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
        name: "minimumStaking",
        type: "uint256",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "lockedUntilTimes",
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
        internalType: "uint256",
        name: "minimumStaking",
        type: "uint256",
      },
    ],
    name: "setMinimumStaking",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "stakingTime",
        type: "uint256",
      },
    ],
    name: "setStakingTime",
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
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610878806100206000396000f3fe6080604052600436106100a75760003560e01c80638da5cb5b116100645780638da5cb5b1461016d578063b643aa9214610195578063d0e30db0146101c2578063f1716527146101ca578063f2fde38b146101df578063fe4b84df146101ff57600080fd5b806327e235e3146100ac578063386172f3146100ec5780633ccfd60b1461010e578063583daf6e14610123578063715018a61461014357806389c4275f14610158575b600080fd5b3480156100b857600080fd5b506100d96100c7366004610787565b60656020526000908152604090205481565b6040519081526020015b60405180910390f35b3480156100f857600080fd5b5061010c6101073660046107b7565b61021f565b005b34801561011a57600080fd5b5061010c610263565b34801561012f57600080fd5b5061010c61013e3660046107b7565b610413565b34801561014f57600080fd5b5061010c610450565b34801561016457600080fd5b506067546100d9565b34801561017957600080fd5b506033546040516001600160a01b0390911681526020016100e3565b3480156101a157600080fd5b506100d96101b0366004610787565b60666020526000908152604090205481565b61010c610464565b3480156101d657600080fd5b506068546100d9565b3480156101eb57600080fd5b5061010c6101fa366004610787565b6104f1565b34801561020b57600080fd5b5061010c61021a3660046107b7565b61056a565b610227610681565b60688190556040518181527fcc9542961b896e927244c20381944233a49a46b5f40b792741ee34dab74880cb906020015b60405180910390a150565b336000818152606560205260409020546102b95760405162461bcd60e51b8152602060048201526012602482015271696e73756666696369656e742066756e647360701b60448201526064015b60405180910390fd5b6001600160a01b03811660009081526066602052604090205442116103205760405162461bcd60e51b815260206004820152601960248201527f6c6f636b2074696d6520686173206e6f7420657870697265640000000000000060448201526064016102b0565b6001600160a01b038116600081815260656020526040808220805490839055905190929083908381818185875af1925050503d806000811461037e576040519150601f19603f3d011682016040523d82523d6000602084013e610383565b606091505b50509050806103cb5760405162461bcd60e51b81526020600482015260146024820152732330b4b632b2103a379039b2b7321032ba3432b960611b60448201526064016102b0565b826001600160a01b03167f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d58360405161040691815260200190565b60405180910390a2505050565b61041b610681565b60678190556040518181527f5760a1f06604eac3c83c17c630047ffd012e8ba1c01634f0978ad54cf6dcd7b190602001610258565b610458610681565b61046260006106db565b565b336000818152606560205260408120805434928392916104859084906107d0565b909155505060685460009061049a90426107d0565b6001600160a01b038416600081815260666020908152604091829020849055815186815290810184905292935090917f73a19dd210f1a7f902193214c0ee91dd35ee5b4d920cba8d519eca65a7b488ca9101610406565b6104f9610681565b6001600160a01b03811661055e5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016102b0565b610567816106db565b50565b600054610100900460ff161580801561058a5750600054600160ff909116105b806105a45750303b1580156105a4575060005460ff166001145b6106075760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016102b0565b6000805460ff19166001179055801561062a576000805461ff0019166101001790555b61063261072d565b6067829055801561067d576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b6033546001600160a01b031633146104625760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102b0565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff166107545760405162461bcd60e51b81526004016102b0906107f7565b610462600054610100900460ff1661077e5760405162461bcd60e51b81526004016102b0906107f7565b610462336106db565b60006020828403121561079957600080fd5b81356001600160a01b03811681146107b057600080fd5b9392505050565b6000602082840312156107c957600080fd5b5035919050565b808201808211156107f157634e487b7160e01b600052601160045260246000fd5b92915050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b60608201526080019056fea26469706673582212205333431243e82833676cf4a954b16e7c2968631726b06138806bfd1353081d6164736f6c63430008100033";

type GoldenStakingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GoldenStakingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GoldenStaking__factory extends ContractFactory {
  constructor(...args: GoldenStakingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GoldenStaking> {
    return super.deploy(overrides || {}) as Promise<GoldenStaking>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): GoldenStaking {
    return super.attach(address) as GoldenStaking;
  }
  override connect(signer: Signer): GoldenStaking__factory {
    return super.connect(signer) as GoldenStaking__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GoldenStakingInterface {
    return new utils.Interface(_abi) as GoldenStakingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GoldenStaking {
    return new Contract(address, _abi, signerOrProvider) as GoldenStaking;
  }
}
