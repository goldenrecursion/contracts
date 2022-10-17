/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GoldenProtocol,
  GoldenProtocolInterface,
} from "../../../contracts/GoldenProtocol.sol/GoldenProtocol";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_minimumVotes",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
        internalType: "bytes16",
        name: "subjectUUID",
        type: "bytes16",
      },
      {
        internalType: "bytes16",
        name: "predicateUUID",
        type: "bytes16",
      },
      {
        internalType: "uint256",
        name: "bounty",
        type: "uint256",
      },
    ],
    name: "createQuestion",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "minimumVotes",
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
    name: "questions",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
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
        name: "_minimumVotes",
        type: "uint256",
      },
    ],
    name: "setMinimumVotes",
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
  "0x608060405234801561001057600080fd5b5060405161181938038061181983398101604081905261002f91610090565b61003833610040565b6004556100a9565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100a257600080fd5b5051919050565b611761806100b86000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80638da5cb5b1161005b5780638da5cb5b146100bd5780639902b633146100e2578063d6fbfb24146100f5578063f2fde38b1461010857600080fd5b80636407e0d414610082578063715018a61461009e57806377a49821146100a8575b600080fd5b61008b60045481565b6040519081526020015b60405180910390f35b6100a661011b565b005b6100b061012f565b60405161009591906104ff565b6000546001600160a01b03165b6040516001600160a01b039091168152602001610095565b6100a66100f036600461054c565b610193565b6100ca610103366004610582565b6101a0565b6100a66101163660046105be565b61021d565b61012361029b565b61012d60006102f5565b565b60606001800180548060200260200160405190810160405280929190818152602001828054801561018957602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161016b575b5050505050905090565b61019b61029b565b600455565b60008030338686866040516101b4906104f2565b6001600160a01b0395861681529490931660208501526001600160801b03199182166040850152166060830152608082015260a001604051809103906000f080158015610205573d6000803e3d6000fd5b50905080610214600182610345565b95945050505050565b61022561029b565b6001600160a01b03811661028f5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b610298816102f5565b50565b6000546001600160a01b0316331461012d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610286565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b0381166103ac5760405162461bcd60e51b815260206004820152602860248201527f556e6f7264657265644b65795365742831303029202d204b65792063616e6e6f604482015267074206265203078360c41b6064820152608401610286565b6103b6828261048d565b156104355760405162461bcd60e51b815260206004820152604360248201527f556e6f726465726564416464726573735365742831303129202d20416464726560448201527f737320286b65792920616c72656164792065786973747320696e20746865207360648201526232ba1760e91b608482015260a401610286565b6001828101805480830182556000828152602090200180546001600160a01b0319166001600160a01b0385161790555461046f91906105ee565b6001600160a01b039091166000908152602092909252604090912055565b600182015460009081036104a3575060006104ec565b6001600160a01b03821660008181526020859052604090205460018501805490919081106104d3576104d361060f565b6000918252602090912001546001600160a01b03161490505b92915050565b6111068061062683390190565b6020808252825182820181905260009190848201906040850190845b818110156105405783516001600160a01b03168352928401929184019160010161051b565b50909695505050505050565b60006020828403121561055e57600080fd5b5035919050565b80356001600160801b03198116811461057d57600080fd5b919050565b60008060006060848603121561059757600080fd5b6105a084610565565b92506105ae60208501610565565b9150604084013590509250925092565b6000602082840312156105d057600080fd5b81356001600160a01b03811681146105e757600080fd5b9392505050565b818103818111156104ec57634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fdfe608060405234801561001057600080fd5b506040516200110638038062001106833981016040819052610031916100b1565b600080546001600160a01b039687166001600160a01b0319918216179091556001805495909616941693909317909355608092831c600160801b02921c9190911760035560025561010f565b80516001600160a01b038116811461009457600080fd5b919050565b80516001600160801b03198116811461009457600080fd5b600080600080600060a086880312156100c957600080fd5b6100d28661007d565b94506100e06020870161007d565b93506100ee60408701610099565b92506100fc60608701610099565b9150608086015190509295509295909350565b610fe7806200011f6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c806388fae0e91161008c578063bbe0ba8511610066578063bbe0ba85146101b7578063c7a66eb3146101cb578063e1145e4b146101de578063e168c3ec146101f357600080fd5b806388fae0e91461016e5780638da5cb5b14610183578063943dfef1146101ae57600080fd5b806301ddf070146100d4578063366b2baa146100e957806363bd1d4a1461010f5780637a2faee01461011757806385bb7d691461014657806388775d8f1461015b575b600080fd5b6100e76100e2366004610b03565b610208565b005b6100fc6100f7366004610b32565b6102ef565b6040519081526020015b60405180910390f35b6100e7610326565b6003546101249060801b81565b6040516fffffffffffffffffffffffffffffffff199091168152602001610106565b61014e6104b4565b6040516101069190610c48565b6100e7610169366004610c62565b610542565b610176610584565b6040516101069190610cd4565b600054610196906001600160a01b031681565b6040516001600160a01b039091168152602001610106565b6100fc60025481565b60035461012490600160801b900460801b81565b600154610196906001600160a01b031681565b6101e66106fe565b6040516101069190610d18565b6101fb610850565b6040516101069190610d7a565b60065481106102845760405162461bcd60e51b815260206004820152603860248201527f476f6c64656e50726f746f636f6c5175657374696f6e3a20746865726520697360448201527f206e6f20616e73776572206174207468617420696e646578000000000000000060648201526084015b60405180910390fd5b6000610291600583610909565b6001600160a01b0381166000908152600b6020526040812080549293503392600192906102bf908490610dd4565b90915550506001600160a01b0381166000908152600a602052604090208390556102ea60078261093c565b505050565b60008282604051602001610304929190610de7565b6040516020818303038152906040528051906020012060001c90505b92915050565b6001546001600160a01b0316331461038a5760405162461bcd60e51b815260206004820152602160248201527f476f6c64656e50726f746f636f6c5175657374696f6e3a206f6e6c7941736b656044820152603960f91b606482015260840161027b565b6000610394610584565b6000546040808301518151631901f83560e21b815291519394506001600160a01b03909216928391636407e0d49160048083019260209291908290030181865afa1580156103e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061040a9190610e13565b11156104755760405162461bcd60e51b815260206004820152603460248201527f476f6c64656e50726f746f636f6c5175657374696f6e3a207061796f75743a206044820152731b5a5b9a5b5d5b559bdd195cc81b9bdd081b595d60621b606482015260840161027b565b81516002546040516001600160a01b0383169180156108fc02916000818181858888f193505050501580156104ae573d6000803e3d6000fd5b50505050565b600480546104c190610e2c565b80601f01602080910402602001604051908101604052809291908181526020018280546104ed90610e2c565b801561053a5780601f1061050f5761010080835404028352916020019161053a565b820191906000526020600020905b81548152906001019060200180831161051d57829003601f168201915b505050505081565b33600081815260096020526040902061055c838583610eae565b5061056860058261093c565b6001600160a01b03166000908152600b60205260408120555050565b6105b1604051806060016040528060006001600160a01b0316815260200160608152602001600081525090565b60008060005b600654811015610615576000600b816105d1600585610909565b6001600160a01b03166001600160a01b03168152602001908152602001600020549050838110610602578093508192505b508061060d81610f6f565b9150506105b7565b506000610623600583610909565b90506040518060600160405280826001600160a01b0316815260200160096000846001600160a01b03166001600160a01b03168152602001908152602001600020805461066f90610e2c565b80601f016020809104026020016040519081016040528092919081815260200182805461069b90610e2c565b80156106e85780601f106106bd576101008083540402835291602001916106e8565b820191906000526020600020905b8154815290600101906020018083116106cb57829003601f168201915b5050505050815260200184815250935050505090565b60065460609060009067ffffffffffffffff81111561071f5761071f610b1c565b60405190808252806020026020018201604052801561075257816020015b606081526020019060019003908161073d5790505b50905060005b60065481101561084a5760096000610771600584610909565b6001600160a01b03166001600160a01b03168152602001908152602001600020805461079c90610e2c565b80601f01602080910402602001604051908101604052809291908181526020018280546107c890610e2c565b80156108155780601f106107ea57610100808354040283529160200191610815565b820191906000526020600020905b8154815290600101906020018083116107f857829003601f168201915b505050505082828151811061082c5761082c610f88565b6020026020010181905250808061084290610f6f565b915050610758565b50919050565b60065460609060009067ffffffffffffffff81111561087157610871610b1c565b60405190808252806020026020018201604052801561089a578160200160208202803683370190505b50905060005b60065481101561084a57600b60006108b9600584610909565b6001600160a01b03166001600160a01b03168152602001908152602001600020548282815181106108ec576108ec610f88565b60209081029190910101528061090181610f6f565b9150506108a0565b600082600101828154811061092057610920610f88565b6000918252602090912001546001600160a01b03169392505050565b6109468282610958565b6109545761095482826109bb565b5050565b6001820154600090810361096e57506000610320565b6001600160a01b038216600081815260208590526040902054600185018054909190811061099e5761099e610f88565b6000918252602090912001546001600160a01b0316149392505050565b6001600160a01b038116610a225760405162461bcd60e51b815260206004820152602860248201527f556e6f7264657265644b65795365742831303029202d204b65792063616e6e6f604482015267074206265203078360c41b606482015260840161027b565b610a2c8282610958565b15610aab5760405162461bcd60e51b815260206004820152604360248201527f556e6f726465726564416464726573735365742831303129202d20416464726560448201527f737320286b65792920616c72656164792065786973747320696e20746865207360648201526232ba1760e91b608482015260a40161027b565b6001828101805480830182556000828152602090200180546001600160a01b0319166001600160a01b03851617905554610ae59190610f9e565b6001600160a01b039091166000908152602092909252604090912055565b600060208284031215610b1557600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b60008060408385031215610b4557600080fd5b82356001600160a01b0381168114610b5c57600080fd5b9150602083013567ffffffffffffffff80821115610b7957600080fd5b818501915085601f830112610b8d57600080fd5b813581811115610b9f57610b9f610b1c565b604051601f8201601f19908116603f01168101908382118183101715610bc757610bc7610b1c565b81604052828152886020848701011115610be057600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b6000815180845260005b81811015610c2857602081850181015186830182015201610c0c565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000610c5b6020830184610c02565b9392505050565b60008060208385031215610c7557600080fd5b823567ffffffffffffffff80821115610c8d57600080fd5b818501915085601f830112610ca157600080fd5b813581811115610cb057600080fd5b866020828501011115610cc257600080fd5b60209290920196919550909350505050565b602080825282516001600160a01b03168282015282015160606040830152600090610d026080840182610c02565b9050604084015160608401528091505092915050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b82811015610d6d57603f19888603018452610d5b858351610c02565b94509285019290850190600101610d3f565b5092979650505050505050565b6020808252825182820181905260009190848201906040850190845b81811015610db257835183529284019291840191600101610d96565b50909695505050505050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561032057610320610dbe565b6001600160a01b0383168152604060208201819052600090610e0b90830184610c02565b949350505050565b600060208284031215610e2557600080fd5b5051919050565b600181811c90821680610e4057607f821691505b60208210810361084a57634e487b7160e01b600052602260045260246000fd5b601f8211156102ea57600081815260208120601f850160051c81016020861015610e875750805b601f850160051c820191505b81811015610ea657828155600101610e93565b505050505050565b67ffffffffffffffff831115610ec657610ec6610b1c565b610eda83610ed48354610e2c565b83610e60565b6000601f841160018114610f0e5760008515610ef65750838201355b600019600387901b1c1916600186901b178355610f68565b600083815260209020601f19861690835b82811015610f3f5786850135825560209485019460019092019101610f1f565b5086821015610f5c5760001960f88860031b161c19848701351681555b505060018560011b0183555b5050505050565b600060018201610f8157610f81610dbe565b5060010190565b634e487b7160e01b600052603260045260246000fd5b8181038181111561032057610320610dbe56fea26469706673582212200b2068918e463536645476419e8a6876e0ccd17cd7b90a02860f03af20c8c0c864736f6c63430008100033a264697066735822122094e937df5c35e55520283d8808f4fa4a0866c146129b2e0869c2f84eb801edf864736f6c63430008100033";

type GoldenProtocolConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GoldenProtocolConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GoldenProtocol__factory extends ContractFactory {
  constructor(...args: GoldenProtocolConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _minimumVotes: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GoldenProtocol> {
    return super.deploy(
      _minimumVotes,
      overrides || {}
    ) as Promise<GoldenProtocol>;
  }
  override getDeployTransaction(
    _minimumVotes: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_minimumVotes, overrides || {});
  }
  override attach(address: string): GoldenProtocol {
    return super.attach(address) as GoldenProtocol;
  }
  override connect(signer: Signer): GoldenProtocol__factory {
    return super.connect(signer) as GoldenProtocol__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GoldenProtocolInterface {
    return new utils.Interface(_abi) as GoldenProtocolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GoldenProtocol {
    return new Contract(address, _abi, signerOrProvider) as GoldenProtocol;
  }
}
