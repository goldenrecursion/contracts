import { BaseContract } from 'ethers';
import { ethers } from 'hardhat';
import { Address } from 'hardhat-deploy/types';

import type { GoldenSchemaGovernor } from '../../typechain/contracts/GoldenSchemaGovernor';
import type { GoldenSchema } from '../../typechain/contracts/GoldenSchema';
import type { GoldenToken } from '../../typechain/contracts/token/GoldenToken';

export type Contracts = {
  GoldenSchemaGovernor: GoldenSchemaGovernor;
  GoldenSchema: GoldenSchema;
  GoldenToken: GoldenToken;
};

export type User<T> = { address: Address } & T;

export async function setupUsers<
  C extends BaseContract,
  T extends Record<string, C>
>(addresses: Address[], contracts: T) {
  return await Promise.all(
    addresses.map(async (address) => await setupUser(address, contracts))
  );
}

export async function setupUser<
  C extends BaseContract,
  T extends Record<string, C>
>(address: Address, contracts: T) {
  return {
    ...(Object.fromEntries(
      await Promise.all(
        Object.entries(contracts).map(
          async ([key, value]) =>
            [key, value.connect(await ethers.getSigner(address))] as const
        )
      )
    ) as T),
    address,
  };
}
