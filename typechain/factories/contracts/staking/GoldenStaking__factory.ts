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
    name: "Received",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "stakingPeriod",
        type: "uint256",
      },
    ],
    name: "StakingPeriodChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokensRecovered",
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
    inputs: [
      {
        internalType: "uint256",
        name: "minimumStaking_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stakingPeriod_",
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
    name: "minimumStaking",
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
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "recoverERC20",
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
        internalType: "uint256",
        name: "minimumStaking_",
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
        name: "stakingPeriod_",
        type: "uint256",
      },
    ],
    name: "setStakingPeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakingPeriod",
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
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610ac8806100206000396000f3fe6080604052600436106100ab5760003560e01c80639e8c708e116100645780639e8c708e1461027a578063b643aa921461029a578063c03d5b47146102c7578063d479ed71146102dd578063e4a30116146102f3578063f2fde38b1461031357600080fd5b806327e235e3146101a65780633ccfd60b146101e6578063583daf6e146101fd578063715018a61461021d5780638da5cb5b14610232578063957d77801461025a57600080fd5b366101a157336000818152606560205260409020543490156101085760405162461bcd60e51b8152602060048201526011602482015270105b1c9958591e4819195c1bdcda5d1959607a1b60448201526064015b60405180910390fd5b6001600160a01b0382166000908152606560205260408120805483929061013090849061097a565b9091555050606854600090610145904261097a565b6001600160a01b038416600081815260666020908152604091829020849055815186815290810184905292935090917f74cf3d18d0ddca79038197ad0dd2c7fa5005ef61a5d1ed190e8a8a437e2fcf10910160405180910390a2005b600080fd5b3480156101b257600080fd5b506101d36101c13660046109a1565b60656020526000908152604090205481565b6040519081526020015b60405180910390f35b3480156101f257600080fd5b506101fb610333565b005b34801561020957600080fd5b506101fb6102183660046109d1565b6104b3565b34801561022957600080fd5b506101fb6104f7565b34801561023e57600080fd5b506033546040516001600160a01b0390911681526020016101dd565b34801561026657600080fd5b506101fb6102753660046109d1565b61050b565b34801561028657600080fd5b506101fb6102953660046109a1565b610548565b3480156102a657600080fd5b506101d36102b53660046109a1565b60666020526000908152604090205481565b3480156102d357600080fd5b506101d360685481565b3480156102e957600080fd5b506101d360675481565b3480156102ff57600080fd5b506101fb61030e3660046109ea565b6106de565b34801561031f57600080fd5b506101fb61032e3660046109a1565b6107fb565b336000818152606560205260409020546103845760405162461bcd60e51b8152602060048201526012602482015271496e73756666696369656e742066756e647360701b60448201526064016100ff565b6001600160a01b03811660009081526066602052604090205442116103eb5760405162461bcd60e51b815260206004820152601960248201527f4c6f636b2074696d6520686173206e6f7420657870697265640000000000000060448201526064016100ff565b6001600160a01b038116600081815260656020526040808220805490839055905190929083156108fc0290849084818181858888f1935050505090508061046b5760405162461bcd60e51b81526020600482015260146024820152732330b4b632b2103a379039b2b7321032ba3432b960611b60448201526064016100ff565b826001600160a01b03167f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5836040516104a691815260200190565b60405180910390a2505050565b6104bb610874565b60678190556040518181527f5760a1f06604eac3c83c17c630047ffd012e8ba1c01634f0978ad54cf6dcd7b1906020015b60405180910390a150565b6104ff610874565b61050960006108ce565b565b610513610874565b60688190556040518181527f0637078273a6ae66b3e557bfdec66084fbec260f11eb57e920f7007c241be947906020016104ec565b610550610874565b6040516370a0823160e01b815230600482015281906000906001600160a01b038316906370a0823190602401602060405180830381865afa158015610599573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105bd9190610a0c565b90506000826001600160a01b031663a9059cbb6105e26033546001600160a01b031690565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602481018590526044016020604051808303816000875af115801561062f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106539190610a25565b9050806106965760405162461bcd60e51b81526020600482015260116024820152702330b4b632b2103a37903932b1b7bb32b960791b60448201526064016100ff565b604080516001600160a01b0386168152602081018490527f46d2e6e71fc567877b817ff3d940571f989d4ee4d40f2b70806d36e738feef6f910160405180910390a150505050565b600054610100900460ff16158080156106fe5750600054600160ff909116105b806107185750303b158015610718575060005460ff166001145b61077b5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016100ff565b6000805460ff19166001179055801561079e576000805461ff0019166101001790555b6107a6610920565b6067839055606882905580156107f6576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b505050565b610803610874565b6001600160a01b0381166108685760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016100ff565b610871816108ce565b50565b6033546001600160a01b031633146105095760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016100ff565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff166109475760405162461bcd60e51b81526004016100ff90610a47565b610509600054610100900460ff166109715760405162461bcd60e51b81526004016100ff90610a47565b610509336108ce565b8082018082111561099b57634e487b7160e01b600052601160045260246000fd5b92915050565b6000602082840312156109b357600080fd5b81356001600160a01b03811681146109ca57600080fd5b9392505050565b6000602082840312156109e357600080fd5b5035919050565b600080604083850312156109fd57600080fd5b50508035926020909101359150565b600060208284031215610a1e57600080fd5b5051919050565b600060208284031215610a3757600080fd5b815180151581146109ca57600080fd5b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b60608201526080019056fea2646970667358221220a02009a604fa0694ac9e16115615185ededbf3d49984c0030652fd23f39dee6964736f6c63430008100033";

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
