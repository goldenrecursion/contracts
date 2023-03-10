/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MerkleDistributor,
  MerkleDistributorInterface,
} from "../../../../contracts/libraries/merkleDistributor/MerkleDistributor";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token_",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "merkleRoot_",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "merkleRoot",
        type: "bytes32",
      },
    ],
    name: "MerkleRootUpdated",
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
    inputs: [
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
    inputs: [
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
    name: "merkleRoot",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
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
  "0x60a060405234801561001057600080fd5b50604051610ab8380380610ab883398101604081905261002f9161009e565b6100383361004e565b6001600160a01b039091166080526001556100d8565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080604083850312156100b157600080fd5b82516001600160a01b03811681146100c857600080fd5b6020939093015192949293505050565b6080516109be6100fa6000396000818161011b015261022301526109be6000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638da5cb5b1161005b5780638da5cb5b146100bb5780639e34070f146100e0578063f2fde38b14610103578063fc0c546a1461011657600080fd5b80632e7ba6ef146100825780632eb4a7ab14610097578063715018a6146100b3575b600080fd5b6100956100903660046107ad565b61013d565b005b6100a060015481565b6040519081526020015b60405180910390f35b61009561029b565b6000546001600160a01b03165b6040516001600160a01b0390911681526020016100aa565b6100f36100ee366004610844565b6102af565b60405190151581526020016100aa565b61009561011136600461085d565b6102f0565b6100c87f000000000000000000000000000000000000000000000000000000000000000081565b610146856102af565b1561016457604051630c8d9eab60e31b815260040160405180910390fd5b60408051602081018790526bffffffffffffffffffffffff19606087901b1691810191909152605481018490526000906074016040516020818303038152906040528051906020012090506101f083838080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050600154915084905061036e565b61020d576040516309bde33960e01b815260040160405180910390fd5b61021686610386565b61024a6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001686866103c4565b604080518781526001600160a01b03871660208201529081018590527f4ec90e965519d92681267467f775ada5bd214aa92c0dc93d90a5e880ce9ed0269060600160405180910390a1505050505050565b6102a361041b565b6102ad6000610475565b565b6000806102be6101008461088e565b905060006102ce610100856108a2565b60009283526002602052604090922054600190921b9182169091149392505050565b6102f861041b565b6001600160a01b0381166103625760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b61036b81610475565b50565b60008261037b85846104c5565b1490505b9392505050565b60006103946101008361088e565b905060006103a4610100846108a2565b6000928352600260205260409092208054600190931b9092179091555050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610416908490610512565b505050565b6000546001600160a01b031633146102ad5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610359565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600081815b845181101561050a576104f6828683815181106104e9576104e96108b6565b60200260200101516105e4565b915080610502816108cc565b9150506104ca565b509392505050565b6000610567826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166106109092919063ffffffff16565b805190915015610416578080602001905181019061058591906108f3565b6104165760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610359565b600081831061060057600082815260208490526040902061037f565b5060009182526020526040902090565b606061061f8484600085610627565b949350505050565b6060824710156106885760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610359565b6001600160a01b0385163b6106df5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610359565b600080866001600160a01b031685876040516106fb9190610939565b60006040518083038185875af1925050503d8060008114610738576040519150601f19603f3d011682016040523d82523d6000602084013e61073d565b606091505b509150915061074d828286610758565b979650505050505050565b6060831561076757508161037f565b8251156107775782518084602001fd5b8160405162461bcd60e51b81526004016103599190610955565b80356001600160a01b03811681146107a857600080fd5b919050565b6000806000806000608086880312156107c557600080fd5b853594506107d560208701610791565b935060408601359250606086013567ffffffffffffffff808211156107f957600080fd5b818801915088601f83011261080d57600080fd5b81358181111561081c57600080fd5b8960208260051b850101111561083157600080fd5b9699959850939650602001949392505050565b60006020828403121561085657600080fd5b5035919050565b60006020828403121561086f57600080fd5b61037f82610791565b634e487b7160e01b600052601260045260246000fd5b60008261089d5761089d610878565b500490565b6000826108b1576108b1610878565b500690565b634e487b7160e01b600052603260045260246000fd5b6000600182016108ec57634e487b7160e01b600052601160045260246000fd5b5060010190565b60006020828403121561090557600080fd5b8151801515811461037f57600080fd5b60005b83811015610930578181015183820152602001610918565b50506000910152565b6000825161094b818460208701610915565b9190910192915050565b6020815260008251806020840152610974816040850160208701610915565b601f01601f1916919091016040019291505056fea2646970667358221220a028a5d2e1d60f920b878793a21fb4f5e6ab09251bd6ad42d0abd2e71e968b9964736f6c63430008100033";

type MerkleDistributorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MerkleDistributorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MerkleDistributor__factory extends ContractFactory {
  constructor(...args: MerkleDistributorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    token_: string,
    merkleRoot_: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MerkleDistributor> {
    return super.deploy(
      token_,
      merkleRoot_,
      overrides || {}
    ) as Promise<MerkleDistributor>;
  }
  override getDeployTransaction(
    token_: string,
    merkleRoot_: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(token_, merkleRoot_, overrides || {});
  }
  override attach(address: string): MerkleDistributor {
    return super.attach(address) as MerkleDistributor;
  }
  override connect(signer: Signer): MerkleDistributor__factory {
    return super.connect(signer) as MerkleDistributor__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MerkleDistributorInterface {
    return new utils.Interface(_abi) as MerkleDistributorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MerkleDistributor {
    return new Contract(address, _abi, signerOrProvider) as MerkleDistributor;
  }
}
