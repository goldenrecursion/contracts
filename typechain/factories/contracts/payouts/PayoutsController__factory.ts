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
  "0x608060405234801561001057600080fd5b50610cef806100206000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80635d4df3bf116100715780635d4df3bf14610136578063715018a6146101495780638da5cb5b14610151578063c4d66de814610162578063f2fde38b14610175578063f364c90c1461018857600080fd5b80630aab8ba5146100ae578063144fa6d7146100e157806321df0da7146100f65780633323c8071461011b578063398bac631461012e575b600080fd5b6100ce6100bc366004610a4a565b60009081526066602052604090205490565b6040519081526020015b60405180910390f35b6100f46100ef366004610a7f565b6101ab565b005b6065546001600160a01b03165b6040516001600160a01b0390911681526020016100d8565b6100f4610129366004610a4a565b6101d5565b6100ce610257565b6100f4610144366004610a9a565b610267565b6100f46103ba565b6033546001600160a01b0316610103565b6100f4610170366004610a7f565b6103ce565b6100f4610183366004610a7f565b6104f7565b61019b610196366004610b3c565b610570565b60405190151581526020016100d8565b6101b36105bb565b606580546001600160a01b0319166001600160a01b0392909216919091179055565b6101dd6105bb565b6101eb565b60405180910390fd5b6101f9606780546001019055565b600061020460675490565b60008181526066602090815260409182902085905581518381529081018590529192507f14ae70b7538cb704d414f634689a12a1b4ac99bcce8305042069d26ee7fed3f391015b60405180910390a15050565b600061026260675490565b905090565b6102718587610570565b1561028f57604051630c8d9eab60e31b815260040160405180910390fd5b60008681526066602052604090205460408051602081018890526bffffffffffffffffffffffff19606088901b16918101919091526054810185905260009060740160408051808303601f1901815282825280516020918201208682028085018301909352868452935061032392918791879182918501908490808284376000920191909152508692508591506106159050565b610340576040516309bde33960e01b815260040160405180910390fd5b61034a888861062d565b606554610361906001600160a01b03168787610676565b60408051898152602081018990526001600160a01b038816818301526060810187905290517fb94bf7f9302edf52a596286915a69b4b0685574cffdedd0712e3c62f2550f0ba9181900360800190a15050505050505050565b6103c26105bb565b6103cc60006106cd565b565b600054610100900460ff16158080156103ee5750600054600160ff909116105b806104085750303b158015610408575060005460ff166001145b61046b5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016101e2565b6000805460ff19166001179055801561048e576000805461ff0019166101001790555b61049661071f565b606580546001600160a01b0319166001600160a01b03841617905580156104f3576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200161024b565b5050565b6104ff6105bb565b6001600160a01b0381166105645760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016101e2565b61056d816106cd565b50565b60008061057f61010084610b74565b9050600061058f61010085610b88565b60009586526068602090815260408088209488529390529190942054600190911b908116149392505050565b6033546001600160a01b031633146103cc5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016101e2565b600082610622858461074e565b1490505b9392505050565b600061063b61010083610b74565b9050600061064b61010084610b88565b6000948552606860209081526040808720948752939052919093208054600190921b90911790555050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526106c890849061079b565b505050565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff166107465760405162461bcd60e51b81526004016101e290610b9c565b6103cc61086d565b600081815b84518110156107935761077f8286838151811061077257610772610be7565b602002602001015161089d565b91508061078b81610bfd565b915050610753565b509392505050565b60006107f0826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166108c99092919063ffffffff16565b8051909150156106c8578080602001905181019061080e9190610c24565b6106c85760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016101e2565b600054610100900460ff166108945760405162461bcd60e51b81526004016101e290610b9c565b6103cc336106cd565b60008183106108b9576000828152602084905260409020610626565b5060009182526020526040902090565b60606108d884846000856108e0565b949350505050565b6060824710156109415760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016101e2565b6001600160a01b0385163b6109985760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016101e2565b600080866001600160a01b031685876040516109b49190610c6a565b60006040518083038185875af1925050503d80600081146109f1576040519150601f19603f3d011682016040523d82523d6000602084013e6109f6565b606091505b5091509150610a06828286610a11565b979650505050505050565b60608315610a20575081610626565b825115610a305782518084602001fd5b8160405162461bcd60e51b81526004016101e29190610c86565b600060208284031215610a5c57600080fd5b5035919050565b80356001600160a01b0381168114610a7a57600080fd5b919050565b600060208284031215610a9157600080fd5b61062682610a63565b60008060008060008060a08789031215610ab357600080fd5b8635955060208701359450610aca60408801610a63565b935060608701359250608087013567ffffffffffffffff80821115610aee57600080fd5b818901915089601f830112610b0257600080fd5b813581811115610b1157600080fd5b8a60208260051b8501011115610b2657600080fd5b6020830194508093505050509295509295509295565b60008060408385031215610b4f57600080fd5b50508035926020909101359150565b634e487b7160e01b600052601260045260246000fd5b600082610b8357610b83610b5e565b500490565b600082610b9757610b97610b5e565b500690565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b600060018201610c1d57634e487b7160e01b600052601160045260246000fd5b5060010190565b600060208284031215610c3657600080fd5b8151801515811461062657600080fd5b60005b83811015610c61578181015183820152602001610c49565b50506000910152565b60008251610c7c818460208701610c46565b9190910192915050565b6020815260008251806020840152610ca5816040850160208701610c46565b601f01601f1916919091016040019291505056fea2646970667358221220481cef43c4a24e104456cb7bbce187af55fba773b264f4f7ef923404d88ba80664736f6c63430008100033";

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
