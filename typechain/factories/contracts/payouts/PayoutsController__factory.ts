/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PayoutsController,
  PayoutsControllerInterface,
} from "../../../contracts/payouts/PayoutsController";

const _abi = [
  {
    inputs: [],
    name: "AlreadyClaimed",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidProof",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "epochId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
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
        internalType: "uint256",
        name: "newEpochId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "merkleRoot",
        type: "bytes32",
      },
    ],
    name: "MerkleRootAdded",
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
        internalType: "uint256[]",
        name: "rewardPrices",
        type: "uint256[]",
      },
    ],
    name: "RewardPricesChanged",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "merkleRoot",
        type: "bytes32",
      },
    ],
    name: "addMerkleRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epochId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
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
      {
        internalType: "bytes32[]",
        name: "merkleProof",
        type: "bytes32[]",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastEpoch",
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
        name: "epochId",
        type: "uint256",
      },
    ],
    name: "getMerkleRoot",
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
    name: "getToken",
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
        name: "token",
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
        internalType: "uint256",
        name: "epochId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "isClaimed",
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
        name: "token",
        type: "address",
      },
    ],
    name: "setToken",
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
  "0x608060405234801561001057600080fd5b50610d6a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80635d4df3bf116100715780635d4df3bf14610136578063715018a6146101495780638da5cb5b14610151578063c4d66de814610162578063f2fde38b14610175578063f364c90c1461018857600080fd5b80630aab8ba5146100ae578063144fa6d7146100e157806321df0da7146100f65780633323c8071461011b578063398bac631461012e575b600080fd5b6100ce6100bc366004610ac5565b60009081526066602052604090205490565b6040519081526020015b60405180910390f35b6100f46100ef366004610afa565b6101ab565b005b6065546001600160a01b03165b6040516001600160a01b0390911681526020016100d8565b6100f4610129366004610ac5565b61021c565b6100ce610290565b6100f4610144366004610b15565b6102a0565b6100f46103f3565b6033546001600160a01b0316610103565b6100f4610170366004610afa565b610407565b6100f4610183366004610afa565b610572565b61019b610196366004610bb7565b6105eb565b60405190151581526020016100d8565b6101b3610636565b6001600160a01b0381166101fa5760405162461bcd60e51b815260206004820152600960248201526830206164647265737360b81b60448201526064015b60405180910390fd5b606580546001600160a01b0319166001600160a01b0392909216919091179055565b610224610636565b610232606780546001019055565b600061023d60675490565b60008181526066602090815260409182902085905581518381529081018590529192507f14ae70b7538cb704d414f634689a12a1b4ac99bcce8305042069d26ee7fed3f391015b60405180910390a15050565b600061029b60675490565b905090565b6102aa85876105eb565b156102c857604051630c8d9eab60e31b815260040160405180910390fd5b60008681526066602052604090205460408051602081018890526bffffffffffffffffffffffff19606088901b16918101919091526054810185905260009060740160408051808303601f1901815282825280516020918201208682028085018301909352868452935061035c92918791879182918501908490808284376000920191909152508692508591506106909050565b610379576040516309bde33960e01b815260040160405180910390fd5b61038388886106a8565b60655461039a906001600160a01b031687876106f1565b60408051898152602081018990526001600160a01b038816818301526060810187905290517fb94bf7f9302edf52a596286915a69b4b0685574cffdedd0712e3c62f2550f0ba9181900360800190a15050505050505050565b6103fb610636565b6104056000610748565b565b600054610100900460ff16158080156104275750600054600160ff909116105b806104415750303b158015610441575060005460ff166001145b6104a45760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016101f1565b6000805460ff1916600117905580156104c7576000805461ff0019166101001790555b6001600160a01b0382166105095760405162461bcd60e51b815260206004820152600960248201526830206164647265737360b81b60448201526064016101f1565b61051161079a565b606580546001600160a01b0319166001600160a01b038416179055801561056e576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249890602001610284565b5050565b61057a610636565b6001600160a01b0381166105df5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016101f1565b6105e881610748565b50565b6000806105fa61010084610bef565b9050600061060a61010085610c03565b60009586526068602090815260408088209488529390529190942054600190911b908116149392505050565b6033546001600160a01b031633146104055760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101f1565b60008261069d85846107c9565b1490505b9392505050565b60006106b661010083610bef565b905060006106c661010084610c03565b6000948552606860209081526040808720948752939052919093208054600190921b90911790555050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610743908490610816565b505050565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff166107c15760405162461bcd60e51b81526004016101f190610c17565b6104056108e8565b600081815b845181101561080e576107fa828683815181106107ed576107ed610c62565b6020026020010151610918565b91508061080681610c78565b9150506107ce565b509392505050565b600061086b826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166109449092919063ffffffff16565b80519091501561074357808060200190518101906108899190610c9f565b6107435760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016101f1565b600054610100900460ff1661090f5760405162461bcd60e51b81526004016101f190610c17565b61040533610748565b60008183106109345760008281526020849052604090206106a1565b5060009182526020526040902090565b6060610953848460008561095b565b949350505050565b6060824710156109bc5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016101f1565b6001600160a01b0385163b610a135760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016101f1565b600080866001600160a01b03168587604051610a2f9190610ce5565b60006040518083038185875af1925050503d8060008114610a6c576040519150601f19603f3d011682016040523d82523d6000602084013e610a71565b606091505b5091509150610a81828286610a8c565b979650505050505050565b60608315610a9b5750816106a1565b825115610aab5782518084602001fd5b8160405162461bcd60e51b81526004016101f19190610d01565b600060208284031215610ad757600080fd5b5035919050565b80356001600160a01b0381168114610af557600080fd5b919050565b600060208284031215610b0c57600080fd5b6106a182610ade565b60008060008060008060a08789031215610b2e57600080fd5b8635955060208701359450610b4560408801610ade565b935060608701359250608087013567ffffffffffffffff80821115610b6957600080fd5b818901915089601f830112610b7d57600080fd5b813581811115610b8c57600080fd5b8a60208260051b8501011115610ba157600080fd5b6020830194508093505050509295509295509295565b60008060408385031215610bca57600080fd5b50508035926020909101359150565b634e487b7160e01b600052601260045260246000fd5b600082610bfe57610bfe610bd9565b500490565b600082610c1257610c12610bd9565b500690565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b600060018201610c9857634e487b7160e01b600052601160045260246000fd5b5060010190565b600060208284031215610cb157600080fd5b815180151581146106a157600080fd5b60005b83811015610cdc578181015183820152602001610cc4565b50506000910152565b60008251610cf7818460208701610cc1565b9190910192915050565b6020815260008251806020840152610d20816040850160208701610cc1565b601f01601f1916919091016040019291505056fea26469706673582212203cc26f4e24d1f645b1f895c8da1bf904b2cae8cb0c829029d6aa2c7dd8a0c89064736f6c63430008100033";

type PayoutsControllerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PayoutsControllerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PayoutsController__factory extends ContractFactory {
  constructor(...args: PayoutsControllerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PayoutsController> {
    return super.deploy(overrides || {}) as Promise<PayoutsController>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PayoutsController {
    return super.attach(address) as PayoutsController;
  }
  override connect(signer: Signer): PayoutsController__factory {
    return super.connect(signer) as PayoutsController__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PayoutsControllerInterface {
    return new utils.Interface(_abi) as PayoutsControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PayoutsController {
    return new Contract(address, _abi, signerOrProvider) as PayoutsController;
  }
}
