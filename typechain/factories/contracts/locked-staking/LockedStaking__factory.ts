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
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
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
    name: "PAUSER_ROLE",
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
    name: "VALIDATOR",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
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
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
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
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001961001e565b6100eb565b600254600160a81b900460ff161561008c5760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60025460ff600160a01b909104811610156100e9576002805460ff60a01b191660ff60a01b17905560405160ff81527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b6117b3806100fa6000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c8063628a8a92116100ad578063c4d66de811610071578063c4d66de8146102a5578063d547741f146102b8578063d760873b146102cb578063e63ab1e9146102de578063f96d9e9d146102f357600080fd5b8063628a8a921461023b5780637c50309f1461024e5780638456cb591461028257806391d148541461028a578063a217fddf1461029d57600080fd5b8063379607f5116100f4578063379607f5146101c5578063393df8cb146101d85780633f4ba83a146101ff578063533981b4146102075780635c975abb1461023057600080fd5b806301ffc9a7146101315780631523995e14610159578063248a9ca31461016e5780632f2ff15d1461019f57806336568abe146101b2575b600080fd5b61014461013f3660046113ed565b610306565b60405190151581526020015b60405180910390f35b61016c610167366004611417565b61033d565b005b61019161017c366004611417565b60009081526099602052604090206001015490565b604051908152602001610150565b61016c6101ad36600461144c565b6103b3565b61016c6101c036600461144c565b6103dd565b61016c6101d3366004611417565b61045c565b6101917fa95257aebefccffaada4758f028bce81ea992693be70592f620c4c9a0d9e715a81565b61016c6105ba565b610191610215366004611478565b6001600160a01b031660009081526001602052604090205490565b60355460ff16610144565b61016c610249366004611493565b6105dd565b61019161025c3660046114cc565b6001600160a01b0391909116600090815260208181526040808320938352929052205490565b61016c6107a4565b61014461029836600461144c565b6107c4565b610191600081565b61016c6102b3366004611478565b6107ef565b61016c6102c636600461144c565b6109b7565b61016c6102d93660046114f6565b6109dc565b61019160008051602061175e83398151915281565b61016c610301366004611529565b610b5c565b60006001600160e01b03198216637965db0b60e01b148061033757506301ffc9a760e01b6001600160e01b03198316145b92915050565b60025433600090815260016020526040812080546001600160a01b039093169284929061036b908490611561565b909155505060405182815233907f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d9060200160405180910390a26103af8183610cda565b5050565b6000828152609960205260409020600101546103ce81610d9a565b6103d88383610da4565b505050565b6001600160a01b03811633146104525760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084015b60405180910390fd5b6103af8282610e2a565b610464610e91565b6002546040516314ce606d60e21b81523360048201526001600160a01b0390911690600090309063533981b490602401602060405180830381865afa1580156104b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104d59190611574565b9050600081116105275760405162461bcd60e51b815260206004820152601760248201527f636c61696d3a206e6f7468696e6720746f20636c61696d0000000000000000006044820152606401610449565b808311156105705760405162461bcd60e51b8152602060048201526016602482015275636c61696d3a20657863656564732062616c616e636560501b6044820152606401610449565b61057a3384610ed9565b60405183815233907fd8138f8a3f377c5259ca548e70e4c2de94f129f5a11036a15b69513cba2b426a9060200160405180910390a26103d8823385610f43565b60008051602061175e8339815191526105d281610d9a565b6105da610ffb565b50565b7fa95257aebefccffaada4758f028bce81ea992693be70592f620c4c9a0d9e715a61060781610d9a565b6001600160a01b038516600090815260208181526040808320878452909152902054806106875760405162461bcd60e51b815260206004820152602860248201527f756e6c6f636b3a2063616e6e6f7420756e6c6f636b206e6f6e206578697374696044820152676e67207374616b6560c01b6064820152608401610449565b808411156106e25760405162461bcd60e51b815260206004820152602260248201527f756e6c6f636b3a206578636565647320746f74616c206c6f636b6564207374616044820152616b6560f01b6064820152608401610449565b6001600160a01b0386166000908152602081815260408083208884529091528120805486929061071390849061158d565b9091555060009050610725858561104d565b6001600160a01b038816600090815260016020526040812080549293508392909190610752908490611561565b9091555050604080516001600160a01b03891681526020810183905287917f0c35a7765dc80648aa68cb8cf542e73a11500a6e58527cfe7aea2bf7e6b89c87910160405180910390a250505050505050565b60008051602061175e8339815191526107bc81610d9a565b6105da611076565b60009182526099602090815260408084206001600160a01b0393909316845291905290205460ff1690565b600254600160a81b900460ff161580801561081757506002546001600160a01b90910460ff16105b806108385750303b1580156108385750600254600160a01b900460ff166001145b61089b5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610449565b6002805460ff60a01b1916600160a01b17905580156108c8576002805460ff60a81b1916600160a81b1790555b6001600160a01b03821661091e5760405162461bcd60e51b815260206004820152601b60248201527f696e697469616c697a653a20696e76616c6964206164647265737300000000006044820152606401610449565b600280546001600160a01b0319166001600160a01b0384161790556109416110b3565b6109496110e4565b610954600033610da4565b61096c60008051602061175e83398151915233610da4565b80156103af576002805460ff60a81b19169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15050565b6000828152609960205260409020600101546109d281610d9a565b6103d88383610e2a565b7fa95257aebefccffaada4758f028bce81ea992693be70592f620c4c9a0d9e715a610a0681610d9a565b6002546001600160a01b0385811660009081526020818152604080832088845290915290205491169080610a875760405162461bcd60e51b815260206004820152602260248201527f736c6173683a2063616e6e6f7420736c6173682030206c6f636b6564207374616044820152616b6560f01b6064820152608401610449565b80841115610ad05760405162461bcd60e51b8152602060048201526016602482015275736c6173683a20657863656564732062616c616e636560501b6044820152606401610449565b6001600160a01b03861660009081526020818152604080832088845290915281208054869290610b0190849061158d565b9091555050604080516001600160a01b03881681526020810186905286917f2887521d70e1519e5bed2827ed5cfdb9096f69048a3a685fe9d544528b6e2a1b910160405180910390a2610b54828561110d565b505050505050565b338115801590610b8457506001600160a01b0381166000908152600160205260409020548211155b610bc75760405162461bcd60e51b81526020600482015260146024820152731b1bd8dace881a5b9d985b1a5908185b5bdd5b9d60621b6044820152606401610449565b6001600160a01b03811660009081526020818152604080832086845290915290205415610c2e5760405162461bcd60e51b81526020600482015260156024820152746c6f636b3a206475706c696361746520656e74727960581b6044820152606401610449565b6001600160a01b03811660009081526001602052604081208054849290610c5690849061158d565b90915550506001600160a01b03811660009081526020818152604080832086845290915281208054849290610c8c908490611561565b9091555050604080516001600160a01b03831681526020810184905284917f18d26f73c5c1270ac0f69e3d755e615e8921f35e8c2d394e3c95bc33ee57f577910160405180910390a2505050565b80156103af576040516323b872dd60e01b8152336004820152306024820152604481018290526001600160a01b038316906323b872dd906064016020604051808303816000875af1158015610d33573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d5791906115a0565b6103af5760405162461bcd60e51b81526020600482015260146024820152731d1c985b9cd9995c919c9bdb4e8819985a5b195960621b6044820152606401610449565b6105da813361116f565b610dae82826107c4565b6103af5760008281526099602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610de63390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610e3482826107c4565b156103af5760008281526099602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60355460ff1615610ed75760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b6044820152606401610449565b565b6001600160a01b038216600090815260016020526040812054610efd90839061158d565b905060008111610f235750506001600160a01b0316600090815260016020526040812055565b6001600160a01b0383166000908152600160205260409020819055505050565b80156103d85760405163a9059cbb60e01b81526001600160a01b0383811660048301526024820183905284169063a9059cbb906044016020604051808303816000875af1158015610f98573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fbc91906115a0565b6103d85760405162461bcd60e51b815260206004820152601060248201526f1d1c985b9cd9995c8e8819985a5b195960821b6044820152606401610449565b6110036111d3565b6035805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b6000606461105b83856115c2565b61106591906115e1565b61106f9084611561565b9392505050565b61107e610e91565b6035805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586110303390565b600254600160a81b900460ff166110dc5760405162461bcd60e51b815260040161044990611603565b610ed761121c565b600254600160a81b900460ff16610ed75760405162461bcd60e51b815260040161044990611603565b80156103af57604051632770a7eb60e21b8152306004820152602481018290526001600160a01b03831690639dc29fac90604401600060405180830381600087803b15801561115b57600080fd5b505af1158015610b54573d6000803e3d6000fd5b61117982826107c4565b6103af57611191816001600160a01b03166014611251565b61119c836020611251565b6040516020016111ad929190611672565b60408051601f198184030181529082905262461bcd60e51b8252610449916004016116e7565b60355460ff16610ed75760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b6044820152606401610449565b600254600160a81b900460ff166112455760405162461bcd60e51b815260040161044990611603565b6035805460ff19169055565b606060006112608360026115c2565b61126b906002611561565b67ffffffffffffffff8111156112835761128361171a565b6040519080825280601f01601f1916602001820160405280156112ad576020820181803683370190505b509050600360fc1b816000815181106112c8576112c8611730565b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106112f7576112f7611730565b60200101906001600160f81b031916908160001a905350600061131b8460026115c2565b611326906001611561565b90505b600181111561139e576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061135a5761135a611730565b1a60f81b82828151811061137057611370611730565b60200101906001600160f81b031916908160001a90535060049490941c9361139781611746565b9050611329565b50831561106f5760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e746044820152606401610449565b6000602082840312156113ff57600080fd5b81356001600160e01b03198116811461106f57600080fd5b60006020828403121561142957600080fd5b5035919050565b80356001600160a01b038116811461144757600080fd5b919050565b6000806040838503121561145f57600080fd5b8235915061146f60208401611430565b90509250929050565b60006020828403121561148a57600080fd5b61106f82611430565b600080600080608085870312156114a957600080fd5b6114b285611430565b966020860135965060408601359560600135945092505050565b600080604083850312156114df57600080fd5b6114e883611430565b946020939093013593505050565b60008060006060848603121561150b57600080fd5b61151484611430565b95602085013595506040909401359392505050565b6000806040838503121561153c57600080fd5b50508035926020909101359150565b634e487b7160e01b600052601160045260246000fd5b808201808211156103375761033761154b565b60006020828403121561158657600080fd5b5051919050565b818103818111156103375761033761154b565b6000602082840312156115b257600080fd5b8151801515811461106f57600080fd5b60008160001904831182151516156115dc576115dc61154b565b500290565b6000826115fe57634e487b7160e01b600052601260045260246000fd5b500490565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b60005b83811015611669578181015183820152602001611651565b50506000910152565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516116aa81601785016020880161164e565b7001034b99036b4b9b9b4b733903937b6329607d1b60179184019182015283516116db81602884016020880161164e565b01602801949350505050565b602081526000825180602084015261170681604085016020870161164e565b601f01601f19169190910160400192915050565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6000816117555761175561154b565b50600019019056fe65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862aa26469706673582212201ecf3172697f15f19e7b748f49d7adaaec9848db77f63ae4725e2d7855942e9164736f6c63430008100033";

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
