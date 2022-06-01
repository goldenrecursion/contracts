/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { GoldenToken, GoldenTokenInterface } from "../GoldenToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "initialSupply",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "fromDelegate",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toDelegate",
        type: "address",
      },
    ],
    name: "DelegateChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    name: "DelegateVotesChanged",
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
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
    name: "balanceOf",
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
        internalType: "uint32",
        name: "pos",
        type: "uint32",
      },
    ],
    name: "checkpoints",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "fromBlock",
            type: "uint32",
          },
          {
            internalType: "uint224",
            name: "votes",
            type: "uint224",
          },
        ],
        internalType: "struct ERC20Votes.Checkpoint",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "delegateBySig",
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
    name: "delegates",
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
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPastTotalSupply",
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
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPastVotes",
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
    ],
    name: "getStakeVotes",
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
    ],
    name: "getVotes",
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
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
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
    ],
    name: "numCheckpoints",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "payable",
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
    name: "stakeOf",
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
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101406040523480156200001257600080fd5b5060405162002c4e38038062002c4e833981016040819052620000359162000952565b6040518060400160405280600b81526020016a23b7b63232b72a37b5b2b760a91b81525080604051806040016040528060018152602001603160f81b8152506040518060400160405280600b81526020016a23b7b63232b72a37b5b2b760a91b8152506040518060400160405280600381526020016211d31160ea1b8152508160039080519060200190620000cc929190620008b6565b508051620000e2906004906020840190620008b6565b505050620000ff620000f9620001a260201b60201c565b620001a6565b815160209283012081519183019190912060e08290526101008190524660a0818152604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818801819052818301969096526060810194909452608080850193909352308483018190528151808603909301835260c09485019091528151919095012090529190915261012052506200019b3382620001f8565b5062000a0a565b3390565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6200020f82826200021360201b62000e4d1760201c565b5050565b6200022a8282620002ca60201b62000edd1760201c565b6001600160e01b036200023e620003c78216565b1115620002ab5760405162461bcd60e51b815260206004820152603060248201527f4552433230566f7465733a20746f74616c20737570706c79207269736b73206f60448201526f766572666c6f77696e6720766f74657360801b60648201526084015b60405180910390fd5b620002c4600a62000fd0620003cd60201b1783620003e2565b50505050565b6001600160a01b038216620003225760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401620002a2565b620003306000838362000594565b806002600082825462000344919062000982565b90915550506001600160a01b038216600090815260208190526040812080548392906200037390849062000982565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a36200020f600083836200064b565b60025490565b6000620003db828462000982565b9392505050565b825460009081908015620004345785620003fe6001836200099d565b81548110620004115762000411620009b7565b60009182526020909120015464010000000090046001600160e01b031662000437565b60005b6001600160e01b031692506200044e83858760201c565b915060008111801562000492575043866200046b6001846200099d565b815481106200047e576200047e620009b7565b60009182526020909120015463ffffffff16145b156200050657620004ae826200066360201b62000fdc1760201c565b86620004bc6001846200099d565b81548110620004cf57620004cf620009b7565b9060005260206000200160000160046101000a8154816001600160e01b0302191690836001600160e01b031602179055506200058b565b8560405180604001604052806200052843620006d260201b620010491760201c565b63ffffffff16815260200162000549856200066360201b62000fdc1760201c565b6001600160e01b0390811690915282546001810184556000938452602093849020835194909301519091166401000000000263ffffffff909316929092179101555b50935093915050565b620005ac8383836200064660201b6200066c1760201c565b6001600160a01b0383161580620005d057506005546001600160a01b038481169116145b80620005e457506001600160a01b03831630145b80620005f857506001600160a01b03821630145b620006465760405162461bcd60e51b815260206004820152601e60248201527f45524332303a204e6f7420616c6c6f77656420746f207472616e7366657200006044820152606401620002a2565b505050565b620006468383836200073960201b620010ae1760201c565b60006001600160e01b03821115620006ce5760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20326044820152663234206269747360c81b6064820152608401620002a2565b5090565b600063ffffffff821115620006ce5760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201526532206269747360d01b6064820152608401620002a2565b620007518383836200064660201b6200066c1760201c565b6001600160a01b038381166000908152600860205260408082205485841683529120546200064692918216911683818314801590620007905750600081115b1562000646576001600160a01b038316156200081d576001600160a01b038316600090815260096020908152604082208291620007da9190620008a8901b620010e01785620003e2565b91509150846001600160a01b031660008051602062002c2e833981519152838360405162000812929190918252602082015260400190565b60405180910390a250505b6001600160a01b0382161562000646576001600160a01b038216600090815260096020908152604082208291620008619190620003cd901b62000fd01785620003e2565b91509150836001600160a01b031660008051602062002c2e833981519152838360405162000899929190918252602082015260400190565b60405180910390a25050505050565b6000620003db82846200099d565b828054620008c490620009cd565b90600052602060002090601f016020900481019282620008e8576000855562000933565b82601f106200090357805160ff191683800117855562000933565b8280016001018555821562000933579182015b828111156200093357825182559160200191906001019062000916565b50620006ce9291505b80821115620006ce57600081556001016200093c565b6000602082840312156200096557600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b600082198211156200099857620009986200096c565b500190565b600082821015620009b257620009b26200096c565b500390565b634e487b7160e01b600052603260045260246000fd5b600181811c90821680620009e257607f821691505b6020821081141562000a0457634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05160e05161010051610120516121d462000a5a60003960006114ed0152600061153c01526000611517015260006114700152600061149a015260006114c401526121d46000f3fe6080604052600436106101cd5760003560e01c806370a08231116100f7578063a457c2d711610095578063d505accf11610064578063d505accf1461054c578063dd62ed3e1461056c578063f1127ed81461058c578063f2fde38b146105d657600080fd5b8063a457c2d7146104d9578063a694fc3a146104f9578063a9059cbb1461050c578063c3cda5201461052c57600080fd5b80638da5cb5b116100d15780638da5cb5b146104665780638e539e8c1461048457806395d89b41146104a45780639ab24eb0146104b957600080fd5b806370a08231146103fb578063715018a6146104315780637ecebe001461044657600080fd5b80633644e5151161016f57806355d3d27d1161013e57806355d3d27d1461031f578063587cde1e146103555780635c19a95c146103a65780636fcfff45146103c657600080fd5b80633644e515146102ca57806339509351146102df5780633a46b1a8146102ff578063426233601461031f57600080fd5b806318160ddd116101ab57806318160ddd1461024f57806323b872dd1461026e5780632e17de781461028e578063313ce567146102ae57600080fd5b806302fb4d85146101d257806306fdde03146101f4578063095ea7b31461021f575b600080fd5b3480156101de57600080fd5b506101f26101ed366004611e6c565b6105f6565b005b34801561020057600080fd5b50610209610671565b6040516102169190611e96565b60405180910390f35b34801561022b57600080fd5b5061023f61023a366004611e6c565b610703565b6040519015158152602001610216565b34801561025b57600080fd5b506002545b604051908152602001610216565b34801561027a57600080fd5b5061023f610289366004611eeb565b61071b565b34801561029a57600080fd5b506101f26102a9366004611f27565b61073f565b3480156102ba57600080fd5b5060405160128152602001610216565b3480156102d657600080fd5b506102606107db565b3480156102eb57600080fd5b5061023f6102fa366004611e6c565b6107ea565b34801561030b57600080fd5b5061026061031a366004611e6c565b61080c565b34801561032b57600080fd5b5061026061033a366004611f40565b6001600160a01b03166000908152600b602052604090205490565b34801561036157600080fd5b5061038e610370366004611f40565b6001600160a01b039081166000908152600860205260409020541690565b6040516001600160a01b039091168152602001610216565b3480156103b257600080fd5b506101f26103c1366004611f40565b610886565b3480156103d257600080fd5b506103e66103e1366004611f40565b610893565b60405163ffffffff9091168152602001610216565b34801561040757600080fd5b50610260610416366004611f40565b6001600160a01b031660009081526020819052604090205490565b34801561043d57600080fd5b506101f26108bb565b34801561045257600080fd5b50610260610461366004611f40565b6108f1565b34801561047257600080fd5b506005546001600160a01b031661038e565b34801561049057600080fd5b5061026061049f366004611f27565b61090f565b3480156104b057600080fd5b5061020961096b565b3480156104c557600080fd5b506102606104d4366004611f40565b61097a565b3480156104e557600080fd5b5061023f6104f4366004611e6c565b6109a6565b6101f2610507366004611f27565b610a21565b34801561051857600080fd5b5061023f610527366004611e6c565b610a5e565b34801561053857600080fd5b506101f2610547366004611f6c565b610a6c565b34801561055857600080fd5b506101f2610567366004611fc4565b610ba2565b34801561057857600080fd5b5061026061058736600461202e565b610d06565b34801561059857600080fd5b506105ac6105a7366004612061565b610d31565b60408051825163ffffffff1681526020928301516001600160e01b03169281019290925201610216565b3480156105e257600080fd5b506101f26105f1366004611f40565b610db5565b6005546001600160a01b031633146106295760405162461bcd60e51b8152600401610620906120a1565b60405180910390fd5b6001600160a01b0382166000908152600b6020526040812080548392906106519084906120ec565b909155505060055461066c906001600160a01b031682610a5e565b505050565b60606003805461068090612103565b80601f01602080910402602001604051908101604052809291908181526020018280546106ac90612103565b80156106f95780601f106106ce576101008083540402835291602001916106f9565b820191906000526020600020905b8154815290600101906020018083116106dc57829003601f168201915b5050505050905090565b6000336107118185856110ec565b5060019392505050565b600033610729858285611210565b610734858585611284565b506001949350505050565b336000818152600b602052604090205482111561079e5760405162461bcd60e51b815260206004820152601860248201527f5374616b696e673a20657863656564732062616c616e636500000000000000006044820152606401610620565b6001600160a01b0381166000908152600b6020526040812080548492906107c69084906120ec565b909155506107d79050308284611284565b5050565b60006107e5611463565b905090565b6000336107118185856107fd8383610d06565b6108079190612138565b6110ec565b600043821061085d5760405162461bcd60e51b815260206004820152601f60248201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e6564006044820152606401610620565b6001600160a01b038316600090815260096020526040902061087f908361158a565b9392505050565b6108903382611647565b50565b6001600160a01b0381166000908152600960205260408120546108b590611049565b92915050565b6005546001600160a01b031633146108e55760405162461bcd60e51b8152600401610620906120a1565b6108ef60006116c0565b565b6001600160a01b0381166000908152600660205260408120546108b5565b60004382106109605760405162461bcd60e51b815260206004820152601f60248201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e6564006044820152606401610620565b6108b5600a8361158a565b60606004805461068090612103565b6001600160a01b0381166000908152600b602052604081205461099c83611712565b6108b59190612138565b600033816109b48286610d06565b905083811015610a145760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610620565b61073482868684036110ec565b33610a2c3083610a5e565b506001600160a01b0381166000908152600b602052604081208054849290610a55908490612138565b90915550505050565b600033610711818585611284565b83421115610abc5760405162461bcd60e51b815260206004820152601d60248201527f4552433230566f7465733a207369676e617475726520657870697265640000006044820152606401610620565b604080517fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60208201526001600160a01b038816918101919091526060810186905260808101859052600090610b3690610b2e9060a00160405160208183030381529060405280519060200120611799565b8585856117e7565b9050610b418161180f565b8614610b8f5760405162461bcd60e51b815260206004820152601960248201527f4552433230566f7465733a20696e76616c6964206e6f6e6365000000000000006044820152606401610620565b610b998188611647565b50505050505050565b83421115610bf25760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e650000006044820152606401610620565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9888888610c218c61180f565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e0016040516020818303038152906040528051906020012090506000610c7c82611799565b90506000610c8c828787876117e7565b9050896001600160a01b0316816001600160a01b031614610cef5760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e617475726500006044820152606401610620565b610cfa8a8a8a6110ec565b50505050505050505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60408051808201909152600080825260208201526001600160a01b0383166000908152600960205260409020805463ffffffff8416908110610d7557610d75612150565b60009182526020918290206040805180820190915291015463ffffffff8116825264010000000090046001600160e01b0316918101919091529392505050565b6005546001600160a01b03163314610ddf5760405162461bcd60e51b8152600401610620906120a1565b6001600160a01b038116610e445760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610620565b610890816116c0565b610e578282610edd565b6002546001600160e01b031015610ec95760405162461bcd60e51b815260206004820152603060248201527f4552433230566f7465733a20746f74616c20737570706c79207269736b73206f60448201526f766572666c6f77696e6720766f74657360801b6064820152608401610620565b610ed7600a610fd083611837565b50505050565b6001600160a01b038216610f335760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610620565b610f3f600083836119b0565b8060026000828254610f519190612138565b90915550506001600160a01b03821660009081526020819052604081208054839290610f7e908490612138565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a36107d760008383611a45565b600061087f8284612138565b60006001600160e01b038211156110455760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20326044820152663234206269747360c81b6064820152608401610620565b5090565b600063ffffffff8211156110455760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201526532206269747360d01b6064820152608401610620565b6001600160a01b0383811660009081526008602052604080822054858416835291205461066c92918216911683611a50565b600061087f82846120ec565b6001600160a01b03831661114e5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610620565b6001600160a01b0382166111af5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610620565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b600061121c8484610d06565b90506000198114610ed757818110156112775760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610620565b610ed784848484036110ec565b6001600160a01b0383166112e85760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610620565b6001600160a01b03821661134a5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610620565b6113558383836119b0565b6001600160a01b038316600090815260208190526040902054818110156113cd5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610620565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290611404908490612138565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161145091815260200190565b60405180910390a3610ed7848484611a45565b6000306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480156114bc57507f000000000000000000000000000000000000000000000000000000000000000046145b156114e657507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b8154600090815b818110156115ee5760006115a58284611b8d565b9050848682815481106115ba576115ba612150565b60009182526020909120015463ffffffff1611156115da578092506115e8565b6115e5816001612138565b91505b50611591565b811561163257846116006001846120ec565b8154811061161057611610612150565b60009182526020909120015464010000000090046001600160e01b0316611635565b60005b6001600160e01b031695945050505050565b6001600160a01b038281166000818152600860208181526040808420805485845282862054949093528787166001600160a01b03198416811790915590519190951694919391928592917f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a4610ed7828483611a50565b600580546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0381166000908152600960205260408120548015611786576001600160a01b03831660009081526009602052604090206117546001836120ec565b8154811061176457611764612150565b60009182526020909120015464010000000090046001600160e01b0316611789565b60005b6001600160e01b03169392505050565b60006108b56117a6611463565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b60008060006117f887878787611ba8565b9150915061180581611c95565b5095945050505050565b6001600160a01b03811660009081526006602052604090208054600181018255905b50919050565b82546000908190801561188257856118506001836120ec565b8154811061186057611860612150565b60009182526020909120015464010000000090046001600160e01b0316611885565b60005b6001600160e01b0316925061189e83858763ffffffff16565b91506000811180156118dc575043866118b86001846120ec565b815481106118c8576118c8612150565b60009182526020909120015463ffffffff16145b1561193c576118ea82610fdc565b866118f66001846120ec565b8154811061190657611906612150565b9060005260206000200160000160046101000a8154816001600160e01b0302191690836001600160e01b031602179055506119a7565b85604051806040016040528061195143611049565b63ffffffff16815260200161196585610fdc565b6001600160e01b0390811690915282546001810184556000938452602093849020835194909301519091166401000000000263ffffffff909316929092179101555b50935093915050565b6001600160a01b03831615806119d357506005546001600160a01b038481169116145b806119e657506001600160a01b03831630145b806119f957506001600160a01b03821630145b61066c5760405162461bcd60e51b815260206004820152601e60248201527f45524332303a204e6f7420616c6c6f77656420746f207472616e7366657200006044820152606401610620565b61066c8383836110ae565b816001600160a01b0316836001600160a01b031614158015611a725750600081115b1561066c576001600160a01b03831615611b00576001600160a01b03831660009081526009602052604081208190611aad906110e085611837565b91509150846001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611af5929190918252602082015260400190565b60405180910390a250505b6001600160a01b0382161561066c576001600160a01b03821660009081526009602052604081208190611b3690610fd085611837565b91509150836001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611b7e929190918252602082015260400190565b60405180910390a25050505050565b6000611b9c6002848418612166565b61087f90848416612138565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611bdf5750600090506003611c8c565b8460ff16601b14158015611bf757508460ff16601c14155b15611c085750600090506004611c8c565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611c5c573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611c8557600060019250925050611c8c565b9150600090505b94509492505050565b6000816004811115611ca957611ca9612188565b1415611cb25750565b6001816004811115611cc657611cc6612188565b1415611d145760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610620565b6002816004811115611d2857611d28612188565b1415611d765760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610620565b6003816004811115611d8a57611d8a612188565b1415611de35760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610620565b6004816004811115611df757611df7612188565b14156108905760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b6064820152608401610620565b80356001600160a01b0381168114611e6757600080fd5b919050565b60008060408385031215611e7f57600080fd5b611e8883611e50565b946020939093013593505050565b600060208083528351808285015260005b81811015611ec357858101830151858201604001528201611ea7565b81811115611ed5576000604083870101525b50601f01601f1916929092016040019392505050565b600080600060608486031215611f0057600080fd5b611f0984611e50565b9250611f1760208501611e50565b9150604084013590509250925092565b600060208284031215611f3957600080fd5b5035919050565b600060208284031215611f5257600080fd5b61087f82611e50565b803560ff81168114611e6757600080fd5b60008060008060008060c08789031215611f8557600080fd5b611f8e87611e50565b95506020870135945060408701359350611faa60608801611f5b565b92506080870135915060a087013590509295509295509295565b600080600080600080600060e0888a031215611fdf57600080fd5b611fe888611e50565b9650611ff660208901611e50565b9550604088013594506060880135935061201260808901611f5b565b925060a0880135915060c0880135905092959891949750929550565b6000806040838503121561204157600080fd5b61204a83611e50565b915061205860208401611e50565b90509250929050565b6000806040838503121561207457600080fd5b61207d83611e50565b9150602083013563ffffffff8116811461209657600080fd5b809150509250929050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b634e487b7160e01b600052601160045260246000fd5b6000828210156120fe576120fe6120d6565b500390565b600181811c9082168061211757607f821691505b6020821081141561183157634e487b7160e01b600052602260045260246000fd5b6000821982111561214b5761214b6120d6565b500190565b634e487b7160e01b600052603260045260246000fd5b60008261218357634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052602160045260246000fdfea26469706673582212206781b77b95b64b027a6e0a6e955501310f35852dd18b6d6d42f3fdf47611603464736f6c634300080b0033dec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724";

export class GoldenToken__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    initialSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GoldenToken> {
    return super.deploy(initialSupply, overrides || {}) as Promise<GoldenToken>;
  }
  getDeployTransaction(
    initialSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(initialSupply, overrides || {});
  }
  attach(address: string): GoldenToken {
    return super.attach(address) as GoldenToken;
  }
  connect(signer: Signer): GoldenToken__factory {
    return super.connect(signer) as GoldenToken__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GoldenTokenInterface {
    return new utils.Interface(_abi) as GoldenTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GoldenToken {
    return new Contract(address, _abi, signerOrProvider) as GoldenToken;
  }
}
