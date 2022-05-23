import { BigNumber, BaseContract } from 'ethers';
import { ethers } from 'hardhat';
import { Address } from 'hardhat-deploy/types';

import type { GoldenSchemaGovernor } from '../../typechain/GoldenSchemaGovernor';
import type { GoldenSchema } from '../../typechain/GoldenSchema';
import type { GoldenToken } from '../../typechain/GoldenToken';

export type User<T> = { address: Address } & T;

export type Contracts = {
  GoldenSchemaGovernor: GoldenSchemaGovernor;
  GoldenSchema: GoldenSchema;
  GoldenToken: GoldenToken;
};

export async function setupUsers<
  T extends { [contractName: string]: BaseContract }
>(addresses: Address[], contracts: T): Promise<({ address: Address } & T)[]> {
  const users: ({ address: Address } & T)[] = [];
  for (const address of addresses) {
    users.push(await setupUser(address, contracts));
  }
  return users;
}

export async function setupUser<
  T extends { [contractName: string]: BaseContract }
>(address: Address, contracts: T): Promise<{ address: Address } & T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user: any = { address };
  for (const key of Object.keys(contracts)) {
    user[key] = contracts[key].connect(await ethers.getSigner(address));
  }
  return user as { address: Address } & T;
}

// Have to set the number as a string because of JavaScript "safe range" limitations.
// More info: https://docs.ethers.io/v5/api/utils/bignumber/#BigNumber
export const TOTAL_SUPPLY = BigNumber.from(
  '1' +
    '0'.repeat(9) + // 1 billy
    '0'.repeat(18) // 18 decimal point
);

export function getRandomBytes32HexString(): string {
  return ethers.utils.hexlify(ethers.utils.randomBytes(32));
}

// Some dummy CIDs for tests
export const testSchema = {
  predicates: [
    '0x8b06112d425941fa2fa5b2b3d746899595f6c48972bd7c669113fa176a7aa241',
    '0x66f322cff0d856abf862490d9f66e47b58afc19720ebebf7dad57aa2d2c32059',
    '0x8604157e9894be520570f8bbae0450e09f6fae47a82104d95e91228eaccb44df',
  ],
  entityTypes: [
    '0xee67d24a4bf7a08663c6bb0dabaffefdff002390224878e5ead35c6eec95b374',
    '0x11e0df360c4546b9d51b60a6aff031175f65c2fda0c50f4ffcbe0eb7a16efde5',
  ],
  predicatesByEntityTypes: [
    [
      '0xee67d24a4bf7a08663c6bb0dabaffefdff002390224878e5ead35c6eec95b374',
      [
        '0x8b06112d425941fa2fa5b2b3d746899595f6c48972bd7c669113fa176a7aa241',
        '0x66f322cff0d856abf862490d9f66e47b58afc19720ebebf7dad57aa2d2c32059',
      ],
    ],
    [
      '0x11e0df360c4546b9d51b60a6aff031175f65c2fda0c50f4ffcbe0eb7a16efde5',
      ['0x8604157e9894be520570f8bbae0450e09f6fae47a82104d95e91228eaccb44df'],
    ],
  ] as [string, string[]][],
};
