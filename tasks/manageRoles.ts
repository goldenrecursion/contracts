import { task, types } from 'hardhat/config';
import getContractAddress from '../deployments/getContractAddress';
import { Contract } from 'ethers';

type Roles = 'owner' | 'minter' | 'burner' | 'pauser' | 'validator';
const contracts = ['goldenToken', 'lockedStaking'];

task(`hasRole`, 'Check whether address has role')
  .addParam('role', 'Choose a role to test')
  .addParam('contract', 'Choose a contract', 'goldenToken')
  .addParam('address', 'Address to check against')
  .setAction(async (params, hre) => {
    const { ethers } = hre;
    const goldenToken = await ethers.getContractAt(
      'GoldenToken',
      getContractAddress('GoldenToken', hre.network.name)
    );
    const lockedStaking = await ethers.getContractAt(
      'LockedStaking',
      getContractAddress('LockedStaking', hre.network.name)
    );

    const roleMap = {
      owner: {
        goldenToken,
        lockedStaking,
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
      pauser: {
        goldenToken,
        lockedStaking,
        fn: async (contract: Contract, address: string): Promise<boolean> => {
          return contract.isPauser(address);
        },
      },
      validator: {
        lockedStaking,
        fn: async (contract: Contract, address: string): Promise<boolean> => {
          return contract.isValidator(address);
        },
      },
    };

    if (!roleMap[params.role as Roles]) {
      throw new Error(
        `Invalid role! Available roles=${Object.keys(roleMap).toString()}`
      );
    }

    if (!contracts.includes(params.contract)) {
      throw new Error(`Invalid contract! Available contract=${contracts}`);
    }

    const role = params.role as Roles;
    const contract = params.contract as 'goldenToken' | 'lockedStaking';

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (roleMap[role][contract]) {
      const selectorFn = roleMap[role];
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const selectorContract = roleMap[role][contract];
      const result = await selectorFn.fn(selectorContract!, params.address);
      console.log(`is${role.toUpperCase()}`, result);
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
  .addParam(
    'admin',
    'Private key of the Owner role',
    undefined,
    types.string,
    false
  )
  .setAction(async (params, hre) => {
    const { ethers } = hre;
    const owner = new ethers.Wallet(params.admin);

    const goldenToken = await ethers.getContractAt(
      'GoldenToken',
      getContractAddress('GoldenToken', hre.network.name)
    );
    const lockedStaking = await ethers.getContractAt(
      'LockedStaking',
      getContractAddress('LockedStaking', hre.network.name)
    );

    if (
      !(await goldenToken.isOwner(owner.address)) ||
      !(await lockedStaking.isOwner(owner.address))
    ) {
      throw new Error(`Wallet=${owner.address} does not have Owner role!`);
    }

    const error = (statement: boolean, addr: string) => {
      if (statement) {
        throw new Error(`${addr} already has ${role} role`);
      }
    };

    const executionMap = {
      add: {
        owner: async (address: string) => {
          error(await goldenToken.isOwner(address), address);
          return goldenToken.addOwner(address);
        },
        pauser: async (address: string) => {
          error(await goldenToken.isPauser(address), address);
          return goldenToken.addPauser(address);
        },
        minter: async (address: string) => {
          error(await goldenToken.isMinter(address), address);
          return goldenToken.addMinter(address);
        },
        burner: async (address: string) => {
          error(await goldenToken.isBurner(address), address);
          return goldenToken.addBurner(address);
        },
        validator: async (address: string) => {
          error(await lockedStaking.isValidator(address), address);
          return lockedStaking.addValidator(address);
        },
      },
      remove: {
        owner: async (address: string) => {
          return goldenToken.removeOwner(address);
        },
        pauser: async (address: string) => {
          return goldenToken.removePauser(address);
        },
        minter: async (address: string) => {
          return goldenToken.removeMinter(address);
        },
        burner: async (address: string) => {
          return goldenToken.removeBurner(address);
        },
        validator: async (address: string) => {
          return lockedStaking.removeValidator(address);
        },
      },
    };

    const action = params.remove ? 'remove' : 'add';
    const role = params.role as keyof typeof executionMap['add' | 'remove'];

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

    await lockedStaking.connect(owner);
    await goldenToken.connect(owner);

    const result = await executionMap[action][role](params.address);
    console.log({
      role,
      action,
      address: params.address,
      result,
    });
  });
