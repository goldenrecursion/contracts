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
      {
        internalType: "address[]",
        name: "defaultOperators",
        type: "address[]",
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
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenHolder",
        type: "address",
      },
    ],
    name: "AuthorizedOperator",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "from",
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
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "Burned",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
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
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "Minted",
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
        name: "operator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenHolder",
        type: "address",
      },
    ],
    name: "RevokedOperator",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
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
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "Sent",
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
    inputs: [
      {
        internalType: "address",
        name: "holder",
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
        name: "value",
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
        name: "operator",
        type: "address",
      },
    ],
    name: "authorizeOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenHolder",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
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
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "defaultOperators",
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
    name: "granularity",
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
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenHolder",
        type: "address",
      },
    ],
    name: "isOperatorFor",
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
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "operatorBurn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "operatorData",
        type: "bytes",
      },
    ],
    name: "operatorSend",
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
        name: "operator",
        type: "address",
      },
    ],
    name: "revokeOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "send",
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
        name: "recipient",
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
        name: "holder",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
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
  "0x60806040523480156200001157600080fd5b506040516200280e3803806200280e8339810160408190526200003491620007a7565b6040518060400160405280600b81526020016a23b7b63232b72a37b5b2b760a91b8152506040518060400160405280600381526020016211d31160ea1b815250826200008f62000089620002c260201b60201c565b620002c6565b8251620000a490600390602086019062000676565b508151620000ba90600490602085019062000676565b508051620000d090600590602084019062000705565b5060005b81518110156200014057600160066000848481518110620000f957620000f962000887565b6020908102919091018101516001600160a01b03168252810191909152604001600020805460ff1916911515919091179055806200013781620008b3565b915050620000d4565b506040516329965a1d60e01b815230600482018190527fac7fbab5f54a3ca8194167523c6753bfeb96a445279294b6125b68cce217705460248301526044820152731820a4b7618bde71dce8cdc73aab6c95905fad24906329965a1d90606401600060405180830381600087803b158015620001bb57600080fd5b505af1158015620001d0573d6000803e3d6000fd5b50506040516329965a1d60e01b815230600482018190527faea199e31a596269b42cdafd93407f14436db6e4cad65417994c2eb37381e05a60248301526044820152731820a4b7618bde71dce8cdc73aab6c95905fad2492506329965a1d9150606401600060405180830381600087803b1580156200024e57600080fd5b505af115801562000263573d6000803e3d6000fd5b50505050505050620002ba6200027e620002c260201b60201c565b6200028c6012600a620009d0565b620002989085620009e8565b6040805160208082018352600080835283519182019093529182529062000316565b505062000b67565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b620003268484848460016200032c565b50505050565b6001600160a01b038516620003885760405162461bcd60e51b815260206004820181905260248201527f4552433737373a206d696e7420746f20746865207a65726f206164647265737360448201526064015b60405180910390fd5b60003390508460026000828254620003a1919062000a0a565b90915550506001600160a01b03861660009081526001602052604081208054879290620003d090849062000a0a565b90915550620003e89050816000888888888862000482565b856001600160a01b0316816001600160a01b03167f2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d878787604051620004319392919062000a75565b60405180910390a36040518581526001600160a01b038716906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3505050505050565b60405163555ddc6560e11b81526001600160a01b03861660048201527fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b6024820152600090731820a4b7618bde71dce8cdc73aab6c95905fad249063aabbb8ca90604401602060405180830381865afa15801562000504573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200052a919062000aae565b90506001600160a01b03811615620005ac576040516223de2960e01b81526001600160a01b038216906223de299062000572908b908b908b908b908b908b9060040162000acc565b600060405180830381600087803b1580156200058d57600080fd5b505af1158015620005a2573d6000803e3d6000fd5b505050506200065d565b81156200065d57620005d2866001600160a01b03166200066760201b62000c601760201c565b156200065d5760405162461bcd60e51b815260206004820152604d60248201527f4552433737373a20746f6b656e20726563697069656e7420636f6e747261637460448201527f20686173206e6f20696d706c656d656e74657220666f7220455243373737546f60648201526c1ad95b9cd49958da5c1a595b9d609a1b608482015260a4016200037f565b5050505050505050565b6001600160a01b03163b151590565b828054620006849062000b2a565b90600052602060002090601f016020900481019282620006a85760008555620006f3565b82601f10620006c357805160ff1916838001178555620006f3565b82800160010185558215620006f3579182015b82811115620006f3578251825591602001919060010190620006d6565b50620007019291506200075d565b5090565b828054828255906000526020600020908101928215620006f3579160200282015b82811115620006f357825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019062000726565b5b808211156200070157600081556001016200075e565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620007a257600080fd5b919050565b60008060408385031215620007bb57600080fd5b8251602080850151919350906001600160401b0380821115620007dd57600080fd5b818601915086601f830112620007f257600080fd5b81518181111562000807576200080762000774565b8060051b604051601f19603f830116810181811085821117156200082f576200082f62000774565b6040529182528482019250838101850191898311156200084e57600080fd5b938501935b82851015620008775762000867856200078a565b8452938501939285019262000853565b8096505050505050509250929050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415620008ca57620008ca6200089d565b5060010190565b600181815b8085111562000912578160001904821115620008f657620008f66200089d565b808516156200090457918102915b93841c9390800290620008d6565b509250929050565b6000826200092b57506001620009ca565b816200093a57506000620009ca565b81600181146200095357600281146200095e576200097e565b6001915050620009ca565b60ff8411156200097257620009726200089d565b50506001821b620009ca565b5060208310610133831016604e8410600b8410161715620009a3575081810a620009ca565b620009af8383620008d1565b8060001904821115620009c657620009c66200089d565b0290505b92915050565b6000620009e160ff8416836200091a565b9392505050565b600081600019048311821515161562000a055762000a056200089d565b500290565b6000821982111562000a205762000a206200089d565b500190565b6000815180845260005b8181101562000a4d5760208185018101518683018201520162000a2f565b8181111562000a60576000602083870101525b50601f01601f19169290920160200192915050565b83815260606020820152600062000a90606083018562000a25565b828103604084015262000aa4818562000a25565b9695505050505050565b60006020828403121562000ac157600080fd5b620009e1826200078a565b6001600160a01b0387811682528681166020830152851660408201526060810184905260c06080820181905260009062000b099083018562000a25565b82810360a084015262000b1d818562000a25565b9998505050505050505050565b600181811c9082168062000b3f57607f821691505b6020821081141562000b6157634e487b7160e01b600052602260045260246000fd5b50919050565b611c978062000b776000396000f3fe6080604052600436106101665760003560e01c8063715018a6116100d1578063a9059cbb1161008a578063f2fde38b11610064578063f2fde38b14610450578063fad8b32a14610470578063fc673c4f14610490578063fe9d9303146104b057600080fd5b8063a9059cbb146103ca578063d95b6371146103ea578063dd62ed3e1461040a57600080fd5b8063715018a6146103255780638da5cb5b1461033a578063959b8c3f1461036257806395d89b41146103825780639bd9bbc614610397578063a694fc3a146103b757600080fd5b80632e17de78116101235780632e17de7814610249578063313ce567146102695780634262336014610285578063556f0dc7146102bb57806362ad1b83146102cf57806370a08231146102ef57600080fd5b806302fb4d851461016b57806306e485381461018d57806306fdde03146101b8578063095ea7b3146101da57806318160ddd1461020a57806323b872dd14610229575b600080fd5b34801561017757600080fd5b5061018b6101863660046116d5565b6104d0565b005b34801561019957600080fd5b506101a261056a565b6040516101af9190611701565b60405180910390f35b3480156101c457600080fd5b506101cd6105cc565b6040516101af919061179b565b3480156101e657600080fd5b506101fa6101f53660046116d5565b610655565b60405190151581526020016101af565b34801561021657600080fd5b506002545b6040519081526020016101af565b34801561023557600080fd5b506101fa6102443660046117ae565b61066d565b34801561025557600080fd5b5061018b6102643660046117ef565b6106b3565b34801561027557600080fd5b50604051601281526020016101af565b34801561029157600080fd5b5061021b6102a0366004611808565b6001600160a01b03166000908152600a602052604090205490565b3480156102c757600080fd5b50600161021b565b3480156102db57600080fd5b5061018b6102ea3660046118c8565b61076b565b3480156102fb57600080fd5b5061021b61030a366004611808565b6001600160a01b031660009081526001602052604090205490565b34801561033157600080fd5b5061018b6107a7565b34801561034657600080fd5b506000546040516001600160a01b0390911681526020016101af565b34801561036e57600080fd5b5061018b61037d366004611808565b6107dd565b34801561038e57600080fd5b506101cd6108fb565b3480156103a357600080fd5b5061018b6103b236600461195b565b61090a565b61018b6103c53660046117ef565b61092d565b3480156103d657600080fd5b506101fa6103e53660046116d5565b61097c565b3480156103f657600080fd5b506101fa6104053660046119b4565b6109b4565b34801561041657600080fd5b5061021b6104253660046119b4565b6001600160a01b03918216600090815260096020908152604080832093909416825291909152205490565b34801561045c57600080fd5b5061018b61046b366004611808565b610a56565b34801561047c57600080fd5b5061018b61048b366004611808565b610af1565b34801561049c57600080fd5b5061018b6104ab3660046119ed565b610c0d565b3480156104bc57600080fd5b5061018b6104cb366004611a6d565b610c45565b6000546001600160a01b031633146105035760405162461bcd60e51b81526004016104fa90611ab4565b60405180910390fd5b6001600160a01b0382166000908152600a60205260408120805483929061052b908490611aff565b9091555050600054610566906001600160a01b0316826040518060200160405280600081525060405180602001604052806000815250610c6f565b5050565b606060058054806020026020016040519081016040528092919081815260200182805480156105c257602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116105a4575b5050505050905090565b6060600380546105db90611b16565b80601f016020809104026020016040519081016040528092919081815260200182805461060790611b16565b80156105c25780601f10610629576101008083540402835291602001916105c2565b820191906000526020600020905b81548152906001019060200180831161063757509395945050505050565b600033610663818585610c7d565b5060019392505050565b60003361067b858285610da4565b6106a885858560405180602001604052806000815250604051806020016040528060008152506000610e30565b506001949350505050565b336000818152600a60205260409020548211156107125760405162461bcd60e51b815260206004820152601860248201527f5374616b696e673a20657863656564732062616c616e6365000000000000000060448201526064016104fa565b6001600160a01b0381166000908152600a60205260408120805484929061073a908490611aff565b9250508190555061056681836040518060200160405280600081525060405180602001604052806000815250610c6f565b61077533866109b4565b6107915760405162461bcd60e51b81526004016104fa90611b51565b6107a085858585856001610e30565b5050505050565b6000546001600160a01b031633146107d15760405162461bcd60e51b81526004016104fa90611ab4565b6107db6000610f2c565b565b336001600160a01b03821614156108425760405162461bcd60e51b8152602060048201526024808201527f4552433737373a20617574686f72697a696e672073656c66206173206f70657260448201526330ba37b960e11b60648201526084016104fa565b6001600160a01b03811660009081526006602052604090205460ff1615610893573360009081526008602090815260408083206001600160a01b03851684529091529020805460ff191690556108c2565b3360009081526007602090815260408083206001600160a01b03851684529091529020805460ff191660011790555b60405133906001600160a01b038316907ff4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f990600090a350565b6060600480546105db90611b16565b61092833848484604051806020016040528060008152506001610e30565b505050565b600033905061094b8260405180602001604052806000815250610c45565b6001600160a01b0381166000908152600a602052604081208054849290610973908490611b9d565b90915550505050565b60006109ab33848460405180602001604052806000815250604051806020016040528060008152506000610e30565b50600192915050565b6000816001600160a01b0316836001600160a01b03161480610a1f57506001600160a01b03831660009081526006602052604090205460ff168015610a1f57506001600160a01b0380831660009081526008602090815260408083209387168352929052205460ff16155b80610a4f57506001600160a01b0380831660009081526007602090815260408083209387168352929052205460ff165b9392505050565b6000546001600160a01b03163314610a805760405162461bcd60e51b81526004016104fa90611ab4565b6001600160a01b038116610ae55760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016104fa565b610aee81610f2c565b50565b6001600160a01b038116331415610b545760405162461bcd60e51b815260206004820152602160248201527f4552433737373a207265766f6b696e672073656c66206173206f70657261746f6044820152603960f91b60648201526084016104fa565b6001600160a01b03811660009081526006602052604090205460ff1615610ba8573360009081526008602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610bd4565b3360009081526007602090815260408083206001600160a01b03851684529091529020805460ff191690555b60405133906001600160a01b038316907f50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa190600090a350565b610c1733856109b4565b610c335760405162461bcd60e51b81526004016104fa90611b51565b610c3f84848484610f7c565b50505050565b61056633838360405180602001604052806000815250610f7c565b6001600160a01b03163b151590565b610c3f848484846001611131565b6001600160a01b038316610ce15760405162461bcd60e51b815260206004820152602560248201527f4552433737373a20617070726f76652066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016104fa565b6001600160a01b038216610d435760405162461bcd60e51b815260206004820152602360248201527f4552433737373a20617070726f766520746f20746865207a65726f206164647260448201526265737360e81b60648201526084016104fa565b6001600160a01b0383811660008181526009602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038381166000908152600960209081526040808320938616835292905220546000198114610c3f5781811015610e235760405162461bcd60e51b815260206004820152601e60248201527f4552433737373a20696e73756666696369656e7420616c6c6f77616e6365000060448201526064016104fa565b610c3f8484848403610c7d565b6001600160a01b038616610e955760405162461bcd60e51b815260206004820152602660248201527f4552433737373a207472616e736665722066726f6d20746865207a65726f206160448201526564647265737360d01b60648201526084016104fa565b6001600160a01b038516610ef75760405162461bcd60e51b8152602060048201526024808201527f4552433737373a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016104fa565b33610f0681888888888861126e565b610f14818888888888611395565b610f23818888888888886114fb565b50505050505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b038416610fdd5760405162461bcd60e51b815260206004820152602260248201527f4552433737373a206275726e2066726f6d20746865207a65726f206164647265604482015261737360f01b60648201526084016104fa565b33610fed8186600087878761126e565b6001600160a01b038516600090815260016020526040902054848110156110625760405162461bcd60e51b815260206004820152602360248201527f4552433737373a206275726e20616d6f756e7420657863656564732062616c616044820152626e636560e81b60648201526084016104fa565b6001600160a01b0386166000908152600160205260408120868303905560028054879290611091908490611aff565b92505081905550856001600160a01b0316826001600160a01b03167fa78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a40988787876040516110df93929190611bb5565b60405180910390a36040518581526000906001600160a01b038816907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020015b60405180910390a3505050505050565b6001600160a01b0385166111875760405162461bcd60e51b815260206004820181905260248201527f4552433737373a206d696e7420746f20746865207a65726f206164647265737360448201526064016104fa565b6000339050846002600082825461119e9190611b9d565b90915550506001600160a01b038616600090815260016020526040812080548792906111cb908490611b9d565b909155506111e1905081600088888888886114fb565b856001600160a01b0316816001600160a01b03167f2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d87878760405161122893929190611bb5565b60405180910390a36040518581526001600160a01b038716906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001611121565b60405163555ddc6560e11b81526001600160a01b03861660048201527f29ddb589b1fb5fc7cf394961c1adf5f8c6454761adf795e67fe149f658abe8956024820152600090731820a4b7618bde71dce8cdc73aab6c95905fad249063aabbb8ca90604401602060405180830381865afa1580156112ef573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113139190611bea565b90506001600160a01b03811615610f2357604051633ad5cbc160e11b81526001600160a01b038216906375ab97829061135a908a908a908a908a908a908a90600401611c07565b600060405180830381600087803b15801561137457600080fd5b505af1158015611388573d6000803e3d6000fd5b5050505050505050505050565b6001600160a01b0385166000908152600160205260409020548381101561140e5760405162461bcd60e51b815260206004820152602760248201527f4552433737373a207472616e7366657220616d6f756e7420657863656564732060448201526662616c616e636560c81b60648201526084016104fa565b6001600160a01b03808716600090815260016020526040808220878503905591871681529081208054869290611445908490611b9d565b92505081905550846001600160a01b0316866001600160a01b0316886001600160a01b03167f06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc8261467798787878760405161149d93929190611bb5565b60405180910390a4846001600160a01b0316866001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef866040516114ea91815260200190565b60405180910390a350505050505050565b60405163555ddc6560e11b81526001600160a01b03861660048201527fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b6024820152600090731820a4b7618bde71dce8cdc73aab6c95905fad249063aabbb8ca90604401602060405180830381865afa15801561157c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115a09190611bea565b90506001600160a01b0381161561161c576040516223de2960e01b81526001600160a01b038216906223de29906115e5908b908b908b908b908b908b90600401611c07565b600060405180830381600087803b1580156115ff57600080fd5b505af1158015611613573d6000803e3d6000fd5b505050506116b6565b81156116b6576001600160a01b0386163b156116b65760405162461bcd60e51b815260206004820152604d60248201527f4552433737373a20746f6b656e20726563697069656e7420636f6e747261637460448201527f20686173206e6f20696d706c656d656e74657220666f7220455243373737546f60648201526c1ad95b9cd49958da5c1a595b9d609a1b608482015260a4016104fa565b5050505050505050565b6001600160a01b0381168114610aee57600080fd5b600080604083850312156116e857600080fd5b82356116f3816116c0565b946020939093013593505050565b6020808252825182820181905260009190848201906040850190845b818110156117425783516001600160a01b03168352928401929184019160010161171d565b50909695505050505050565b6000815180845260005b8181101561177457602081850181015186830182015201611758565b81811115611786576000602083870101525b50601f01601f19169290920160200192915050565b602081526000610a4f602083018461174e565b6000806000606084860312156117c357600080fd5b83356117ce816116c0565b925060208401356117de816116c0565b929592945050506040919091013590565b60006020828403121561180157600080fd5b5035919050565b60006020828403121561181a57600080fd5b8135610a4f816116c0565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261184c57600080fd5b813567ffffffffffffffff8082111561186757611867611825565b604051601f8301601f19908116603f0116810190828211818310171561188f5761188f611825565b816040528381528660208588010111156118a857600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600080600060a086880312156118e057600080fd5b85356118eb816116c0565b945060208601356118fb816116c0565b935060408601359250606086013567ffffffffffffffff8082111561191f57600080fd5b61192b89838a0161183b565b9350608088013591508082111561194157600080fd5b5061194e8882890161183b565b9150509295509295909350565b60008060006060848603121561197057600080fd5b833561197b816116c0565b925060208401359150604084013567ffffffffffffffff81111561199e57600080fd5b6119aa8682870161183b565b9150509250925092565b600080604083850312156119c757600080fd5b82356119d2816116c0565b915060208301356119e2816116c0565b809150509250929050565b60008060008060808587031215611a0357600080fd5b8435611a0e816116c0565b935060208501359250604085013567ffffffffffffffff80821115611a3257600080fd5b611a3e8883890161183b565b93506060870135915080821115611a5457600080fd5b50611a618782880161183b565b91505092959194509250565b60008060408385031215611a8057600080fd5b82359150602083013567ffffffffffffffff811115611a9e57600080fd5b611aaa8582860161183b565b9150509250929050565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b634e487b7160e01b600052601160045260246000fd5b600082821015611b1157611b11611ae9565b500390565b600181811c90821680611b2a57607f821691505b60208210811415611b4b57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602c908201527f4552433737373a2063616c6c6572206973206e6f7420616e206f70657261746f60408201526b39103337b9103437b63232b960a11b606082015260800190565b60008219821115611bb057611bb0611ae9565b500190565b838152606060208201526000611bce606083018561174e565b8281036040840152611be0818561174e565b9695505050505050565b600060208284031215611bfc57600080fd5b8151610a4f816116c0565b6001600160a01b0387811682528681166020830152851660408201526060810184905260c060808201819052600090611c429083018561174e565b82810360a0840152611c54818561174e565b999850505050505050505056fea26469706673582212200e867a57c717834dcc84c00d71281909ebdaa12c3d90665a7654c991965b418b64736f6c634300080b0033";

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
    defaultOperators: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GoldenToken> {
    return super.deploy(
      initialSupply,
      defaultOperators,
      overrides || {}
    ) as Promise<GoldenToken>;
  }
  getDeployTransaction(
    initialSupply: BigNumberish,
    defaultOperators: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      initialSupply,
      defaultOperators,
      overrides || {}
    );
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