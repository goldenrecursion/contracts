/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  LockedStaking,
  LockedStakingInterface,
} from "../../../contracts/locked-staking/LockedStaking";

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
    ],
    name: "Claimed",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Lock",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
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
    name: "Staked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "rewardedAmount",
        type: "uint256",
      },
    ],
    name: "Unlock",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "claim",
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
    name: "getClaimableStake",
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
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    name: "getLockedStake",
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
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "lockStake",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "preStake",
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
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "slash",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "reward",
        type: "uint256",
      },
    ],
    name: "unlockStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611014806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80637c50309f116100715780637c50309f1461012d5780638da5cb5b14610140578063c4d66de81461015b578063d760873b1461016e578063f2fde38b14610181578063f96d9e9d1461019457600080fd5b80631523995e146100ae578063379607f5146100c3578063533981b4146100d6578063628a8a9214610112578063715018a614610125575b600080fd5b6100c16100bc366004610dd3565b6101a7565b005b6100c16100d1366004610dd3565b61021d565b6100ff6100e4366004610e08565b6001600160a01b031660009081526001602052604090205490565b6040519081526020015b60405180910390f35b6100c1610120366004610e23565b61037d565b6100c1610521565b6100ff61013b366004610e5c565b610535565b6035546040516001600160a01b039091168152602001610109565b6100c1610169366004610e08565b61055e565b6100c161017c366004610e86565b6106fb565b6100c161018f366004610e08565b610858565b6100c16101a2366004610eb9565b6108d1565b60025433600090815260016020526040812080546001600160a01b03909316928492906101d5908490610ef1565b909155505060405182815233907f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d9060200160405180910390a26102198183610a4f565b5050565b6002546040516314ce606d60e21b81523360048201526001600160a01b0390911690600090309063533981b490602401602060405180830381865afa15801561026a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061028e9190610f04565b9050600081116102e55760405162461bcd60e51b815260206004820152601760248201527f636c61696d3a206e6f7468696e6720746f20636c61696d00000000000000000060448201526064015b60405180910390fd5b8083111561032e5760405162461bcd60e51b8152602060048201526016602482015275636c61696d3a20657863656564732062616c616e636560501b60448201526064016102dc565b6103383384610b0f565b60405183815233907fd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a9060200160405180910390a2610378823385610b79565b505050565b610385610c31565b6001600160a01b038416600090815260208181526040808320868452909152902054806104055760405162461bcd60e51b815260206004820152602860248201527f756e6c6f636b3a2063616e6e6f7420756e6c6f636b206e6f6e206578697374696044820152676e67207374616b6560c01b60648201526084016102dc565b808311156104605760405162461bcd60e51b815260206004820152602260248201527f756e6c6f636b3a206578636565647320746f74616c206c6f636b6564207374616044820152616b6560f01b60648201526084016102dc565b6001600160a01b03851660009081526020818152604080832087845290915281208054859290610491908490610f1d565b90915550600090506104a38484610c8b565b6001600160a01b0387166000908152600160205260408120805492935083929091906104d0908490610ef1565b9091555050604080516001600160a01b03881681526020810183905286917f0c35a7765dc80648aa68cb8cf542e73a11500a6e58527cfe7aea2bf7e6b89c87910160405180910390a2505050505050565b610529610c31565b6105336000610cb4565b565b6001600160a01b0382166000908152602081815260408083208484529091529020545b92915050565b600254600160a81b900460ff161580801561058657506002546001600160a01b90910460ff16105b806105a75750303b1580156105a75750600254600160a01b900460ff166001145b61060a5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016102dc565b6002805460ff60a01b1916600160a01b1790558015610637576002805460ff60a81b1916600160a81b1790555b6001600160a01b03821661068d5760405162461bcd60e51b815260206004820152601b60248201527f696e697469616c697a653a20696e76616c69642061646472657373000000000060448201526064016102dc565b600280546001600160a01b0319166001600160a01b0384161790556106b0610d06565b8015610219576002805460ff60a81b19169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b610703610c31565b6002546001600160a01b03848116600090815260208181526040808320878452909152902054911690806107845760405162461bcd60e51b815260206004820152602260248201527f736c6173683a2063616e6e6f7420736c6173682030206c6f636b6564207374616044820152616b6560f01b60648201526084016102dc565b808311156107cd5760405162461bcd60e51b8152602060048201526016602482015275736c6173683a20657863656564732062616c616e636560501b60448201526064016102dc565b6001600160a01b038516600090815260208181526040808320878452909152812080548592906107fe908490610f1d565b9091555050604080516001600160a01b03871681526020810185905285917f2887521d70e1519e5bed2827ed5cfdb9096f69048a3a685fe9d544528b6e2a1b910160405180910390a26108518284610d37565b5050505050565b610860610c31565b6001600160a01b0381166108c55760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016102dc565b6108ce81610cb4565b50565b3381158015906108f957506001600160a01b0381166000908152600160205260409020548211155b61093c5760405162461bcd60e51b81526020600482015260146024820152731b1bd8dace881a5b9d985b1a5908185b5bdd5b9d60621b60448201526064016102dc565b6001600160a01b038116600090815260208181526040808320868452909152902054156109a35760405162461bcd60e51b81526020600482015260156024820152746c6f636b3a206475706c696361746520656e74727960581b60448201526064016102dc565b6001600160a01b038116600090815260016020526040812080548492906109cb908490610f1d565b90915550506001600160a01b03811660009081526020818152604080832086845290915281208054849290610a01908490610ef1565b9091555050604080516001600160a01b03831681526020810184905284917f18d26f73c5c1270ac0f69e3d755e615e8921f35e8c2d394e3c95bc33ee57f577910160405180910390a2505050565b8015610219576040516323b872dd60e01b8152336004820152306024820152604481018290526001600160a01b038316906323b872dd906064016020604051808303816000875af1158015610aa8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610acc9190610f30565b6102195760405162461bcd60e51b81526020600482015260146024820152731d1c985b9cd9995c919c9bdb4e8819985a5b195960621b60448201526064016102dc565b6001600160a01b038216600090815260016020526040812054610b33908390610f1d565b905060008111610b595750506001600160a01b0316600090815260016020526040812055565b6001600160a01b0383166000908152600160205260409020819055505050565b80156103785760405163a9059cbb60e01b81526001600160a01b0383811660048301526024820183905284169063a9059cbb906044016020604051808303816000875af1158015610bce573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bf29190610f30565b6103785760405162461bcd60e51b815260206004820152601060248201526f1d1c985b9cd9995c8e8819985a5b195960821b60448201526064016102dc565b6035546001600160a01b031633146105335760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016102dc565b60006064610c998385610f52565b610ca39190610f71565b610cad9084610ef1565b9392505050565b603580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600254600160a81b900460ff16610d2f5760405162461bcd60e51b81526004016102dc90610f93565b610533610da1565b801561021957604051632770a7eb60e21b8152306004820152602481018290526001600160a01b03831690639dc29fac90604401600060405180830381600087803b158015610d8557600080fd5b505af1158015610d99573d6000803e3d6000fd5b505050505050565b600254600160a81b900460ff16610dca5760405162461bcd60e51b81526004016102dc90610f93565b61053333610cb4565b600060208284031215610de557600080fd5b5035919050565b80356001600160a01b0381168114610e0357600080fd5b919050565b600060208284031215610e1a57600080fd5b610cad82610dec565b60008060008060808587031215610e3957600080fd5b610e4285610dec565b966020860135965060408601359560600135945092505050565b60008060408385031215610e6f57600080fd5b610e7883610dec565b946020939093013593505050565b600080600060608486031215610e9b57600080fd5b610ea484610dec565b95602085013595506040909401359392505050565b60008060408385031215610ecc57600080fd5b50508035926020909101359150565b634e487b7160e01b600052601160045260246000fd5b8082018082111561055857610558610edb565b600060208284031215610f1657600080fd5b5051919050565b8181038181111561055857610558610edb565b600060208284031215610f4257600080fd5b81518015158114610cad57600080fd5b6000816000190483118215151615610f6c57610f6c610edb565b500290565b600082610f8e57634e487b7160e01b600052601260045260246000fd5b500490565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b60608201526080019056fea26469706673582212201917d53850bcf59c56351a6ebe2ce59ddbeb3bb0981fc4141e65102a75bba4f764736f6c63430008100033";

type LockedStakingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LockedStakingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LockedStaking__factory extends ContractFactory {
  constructor(...args: LockedStakingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LockedStaking> {
    return super.deploy(overrides || {}) as Promise<LockedStaking>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LockedStaking {
    return super.attach(address) as LockedStaking;
  }
  override connect(signer: Signer): LockedStaking__factory {
    return super.connect(signer) as LockedStaking__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LockedStakingInterface {
    return new utils.Interface(_abi) as LockedStakingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LockedStaking {
    return new Contract(address, _abi, signerOrProvider) as LockedStaking;
  }
}
