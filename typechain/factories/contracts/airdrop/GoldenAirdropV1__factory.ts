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
  GoldenAirdropV1,
  GoldenAirdropV1Interface,
} from "../../../contracts/airdrop/GoldenAirdropV1";

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
      {
        indexed: false,
        internalType: "bytes32",
        name: "merkleRoot",
        type: "bytes32",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "withdrawnBy",
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
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "merkleRoot_",
        type: "bytes32",
      },
    ],
    name: "updateMerkleRoot",
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
  "0x60a060405234801561001057600080fd5b50604051610c7d380380610c7d83398101604081905261002f916100a3565b818161003a33610053565b6001600160a01b03909116608052600155506100dd9050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600080604083850312156100b657600080fd5b82516001600160a01b03811681146100cd57600080fd5b6020939093015192949293505050565b608051610b7061010d6000396000818161014c015281816102a6015281816102f501526103bf0152610b706000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063715018a611610066578063715018a6146100e45780638da5cb5b146100ec5780639e34070f14610111578063f2fde38b14610134578063fc0c546a1461014757600080fd5b80632e7ba6ef146100985780632eb4a7ab146100ad5780633ccfd60b146100c95780634783f0ef146100d1575b600080fd5b6100ab6100a6366004610946565b61016e565b005b6100b660015481565b6040519081526020015b60405180910390f35b6100ab6102d5565b6100ab6100df3660046109dd565b6103e9565b6100ab6103f2565b6000546001600160a01b03165b6040516001600160a01b0390911681526020016100c0565b61012461011f3660046109dd565b610406565b60405190151581526020016100c0565b6100ab6101423660046109f6565b610447565b6100f97f000000000000000000000000000000000000000000000000000000000000000081565b61017785610406565b1561019557604051630c8d9eab60e31b815260040160405180910390fd5b60408051602081018790526bffffffffffffffffffffffff19606087901b1691810191909152605481018490526000906074016040516020818303038152906040528051906020012090506102218383808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152505060015491508490506104c2565b61023e576040516309bde33960e01b815260040160405180910390fd5b610247866104da565b600154604080518881526001600160a01b03881660208201528082018790526060810192909252517f04672052dcb6b5b19a9cc2ec1b8f447f1f5e47b5e24cfa5e4ffb640d63ca2be79181900360800190a16102cd6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168686610518565b505050505050565b6102dd61056f565b6040516370a0823160e01b81523060048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906370a0823190602401602060405180830381865afa158015610344573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103689190610a11565b60405181815290915033907f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d59060200160405180910390a26103e66103b56000546001600160a01b031690565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169083610518565b50565b6103e6816105c9565b6103fa61056f565b610404600061060e565b565b60008061041561010084610a40565b9050600061042561010085610a54565b60009283526002602052604090922054600190921b9182169091149392505050565b61044f61056f565b6001600160a01b0381166104b95760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b6103e68161060e565b6000826104cf858461065e565b1490505b9392505050565b60006104e861010083610a40565b905060006104f861010084610a54565b6000928352600260205260409092208054600190931b9092179091555050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b17905261056a9084906106ab565b505050565b6000546001600160a01b031633146104045760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104b0565b6105d161056f565b600181905560405133815281907f2d3b238aa223af835b06f5ddeb56c45951f7cf4a29ab728434765ef33cb7598f9060200160405180910390a250565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600081815b84518110156106a35761068f8286838151811061068257610682610a68565b602002602001015161077d565b91508061069b81610a7e565b915050610663565b509392505050565b6000610700826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166107a99092919063ffffffff16565b80519091501561056a578080602001905181019061071e9190610aa5565b61056a5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016104b0565b60008183106107995760008281526020849052604090206104d3565b5060009182526020526040902090565b60606107b884846000856107c0565b949350505050565b6060824710156108215760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016104b0565b6001600160a01b0385163b6108785760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016104b0565b600080866001600160a01b031685876040516108949190610aeb565b60006040518083038185875af1925050503d80600081146108d1576040519150601f19603f3d011682016040523d82523d6000602084013e6108d6565b606091505b50915091506108e68282866108f1565b979650505050505050565b606083156109005750816104d3565b8251156109105782518084602001fd5b8160405162461bcd60e51b81526004016104b09190610b07565b80356001600160a01b038116811461094157600080fd5b919050565b60008060008060006080868803121561095e57600080fd5b8535945061096e6020870161092a565b935060408601359250606086013567ffffffffffffffff8082111561099257600080fd5b818801915088601f8301126109a657600080fd5b8135818111156109b557600080fd5b8960208260051b85010111156109ca57600080fd5b9699959850939650602001949392505050565b6000602082840312156109ef57600080fd5b5035919050565b600060208284031215610a0857600080fd5b6104d38261092a565b600060208284031215610a2357600080fd5b5051919050565b634e487b7160e01b600052601260045260246000fd5b600082610a4f57610a4f610a2a565b500490565b600082610a6357610a63610a2a565b500690565b634e487b7160e01b600052603260045260246000fd5b600060018201610a9e57634e487b7160e01b600052601160045260246000fd5b5060010190565b600060208284031215610ab757600080fd5b815180151581146104d357600080fd5b60005b83811015610ae2578181015183820152602001610aca565b50506000910152565b60008251610afd818460208701610ac7565b9190910192915050565b6020815260008251806020840152610b26816040850160208701610ac7565b601f01601f1916919091016040019291505056fea2646970667358221220cb2086cd6c829a45c71627689415d9fb640d0d04d7bf8a6df0788a73ac994e7f64736f6c63430008100033";

type GoldenAirdropV1ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GoldenAirdropV1ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GoldenAirdropV1__factory extends ContractFactory {
  constructor(...args: GoldenAirdropV1ConstructorParams) {
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
  ): Promise<GoldenAirdropV1> {
    return super.deploy(
      token_,
      merkleRoot_,
      overrides || {}
    ) as Promise<GoldenAirdropV1>;
  }
  override getDeployTransaction(
    token_: string,
    merkleRoot_: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(token_, merkleRoot_, overrides || {});
  }
  override attach(address: string): GoldenAirdropV1 {
    return super.attach(address) as GoldenAirdropV1;
  }
  override connect(signer: Signer): GoldenAirdropV1__factory {
    return super.connect(signer) as GoldenAirdropV1__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GoldenAirdropV1Interface {
    return new utils.Interface(_abi) as GoldenAirdropV1Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GoldenAirdropV1 {
    return new Contract(address, _abi, signerOrProvider) as GoldenAirdropV1;
  }
}
