import { task, types } from 'hardhat/config';
import { Contract } from 'ethers';
import { getOwner } from '../utils/env.utils';
import { getContract, getProvider } from '../utils';

type Role = 'owner' | 'minter' | 'burner';
const contracts = ['goldenToken'];

type RoleMap = {
  [key in Role]: {
    goldenToken: Contract;
    fn: (contract: Contract, address: string) => Promise<boolean>;
  };
};

type ExecutionMap = {
  add: {
    [key in Role]: (address: string) => Promise<void>;
  };
  remove: {
    [key in Role]: (address: string) => Promise<void>;
  };
};

task(`hasRole`, 'Check whether address has role')
  .addParam('role', 'Choose a role to test')
  .addParam('contract', 'Choose a contract', 'goldenToken')
  .addParam('address', 'Address to check against')
  .setAction(async (params, hre) => {
    const { ethers, network } = hre;
    const goldenToken = await getContract(ethers, network, 'GoldenToken');
    await goldenToken.connect(getProvider(ethers, hre.network));

    const roleMap: RoleMap = {
      owner: {
        goldenToken,
        fn: async (contract: Contract, address: string): Promise<boolean> => {
          return contract.isOwner(address);
        },
      },
      minter: {
        goldenToken,
        fn: async (contract: Contract, address: string): Promise<boolean> => {
          return contract.isMinter(address);
        },
      },
      burner: {
        goldenToken,
        fn: async (contract: Contract, address: string): Promise<boolean> => {
          return contract.isBurner(address);
        },
      },
    };

    if (!roleMap[params.role as Role]) {
      throw new Error(
        `Invalid role! Available roles=${Object.keys(roleMap).toString()}`
      );
    }

    if (!contracts.includes(params.contract)) {
      throw new Error(`Invalid contract! Available contract=${contracts}`);
    }

    const role = params.role as Role;
    const contract = params.contract as 'goldenToken';

    if (roleMap[role][contract]) {
      const selector = roleMap[role];
      const selectorContract = roleMap[role][contract];

      if (!selectorContract) {
        throw new Error(`Invalid contract!`);
      }

      const hasRole = await selector.fn(selectorContract, params.address);

      console.log({
        contract: contract.toUpperCase(),
        role,
        hasRole,
      });
    } else {
      throw new Error(
        `Invalid parameters make sure to pass currect contract and role`
      );
    }
  });

task(`manage`, 'By default task will add role unless --remove flag is provided')
  .addFlag('remove', 'Remove role')
  .addParam('role', 'Role to add or remove', undefined, types.string, false)
  .addParam('address', 'Wallet address', undefined, types.string, false)
  .setAction(async (params, hre) => {
    const { ethers, network } = hre;
    const owner = new ethers.Wallet(
      getOwner(),
      getProvider(ethers, hre.network)
    );

    const goldenToken = await getContract(ethers, network, 'GoldenToken');

    if (!(await goldenToken.isOwner(owner.address))) {
      throw new Error(`Wallet=${owner.address} does not have Owner role!`);
    }

    const error = (statement: boolean, addr: string) => {
      if (statement) {
        throw new Error(`${addr} already has ${role} role`);
      }
    };

    const executionMap: ExecutionMap = {
      add: {
        owner: async (address: string) => {
          error(await goldenToken.isOwner(address), address);
          return goldenToken.addOwner(address);
        },
        minter: async (address: string) => {
          error(await goldenToken.isMinter(address), address);
          return goldenToken.addMinter(address);
        },
        burner: async (address: string) => {
          error(await goldenToken.isBurner(address), address);
          return goldenToken.addBurner(address);
        },
      },
      remove: {
        owner: async (address: string) => {
          return goldenToken.removeOwner(address);
        },
        minter: async (address: string) => {
          return goldenToken.removeMinter(address);
        },
        burner: async (address: string) => {
          return goldenToken.removeBurner(address);
        },
      },
    };

    const action = params.remove ? 'remove' : 'add';
    const role = params.role as keyof (typeof executionMap)['add' | 'remove'];

    if (typeof executionMap[action][role] === 'undefined') {
      throw new Error(
        `Invalid role! Available roles=${Object.keys(
          executionMap[action]
        ).toString()}`
      );
    }

    if (!ethers.utils.isAddress(params.address)) {
      throw new Error(`${params.address} is invalid Ethereum address`);
    }

    await goldenToken.connect(owner);

    const result = await executionMap[action][role](params.address);
    console.log({
      role,
      action,
      address: params.address,
      result,
    });
  });
