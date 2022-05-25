import { BigNumber, BaseContract } from 'ethers';
import { ethers } from 'hardhat';
import { Address } from 'hardhat-deploy/types';

import type { GoldenSchemaGovernor } from '../../typechain/GoldenSchemaGovernor';
import type { GoldenSchema } from '../../typechain/GoldenSchema';
import type { GoldenToken } from '../../typechain/GoldenToken';

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

// Have to set the number as a string because of JavaScript "safe range" limitations.
// More info: https://docs.ethers.io/v5/api/utils/bignumber/#BigNumber
export const TOTAL_SUPPLY = BigNumber.from(
  '1' +
    '0'.repeat(9) + // 1 billy
    '0'.repeat(18) // 18 decimal point
);

// Some dummy CIDs for tests
export const testSchema = {
  predicates: [
    '0x909b70b5ab762122184bdb7850108e3fc841adde29cee589bf47993e7b565188',
    '0x1db8da3c7fb3f7a7be1281f2ffc593578058733dbad946abacd440336cecc998',
    '0xa1ea81ba562df21a49b805e652b7f8575df3bcca89835c444d3ccde93e09de11',
    '0xcf750c0374535db399adf4358736174399b867b3730685d3dfbed7d3d16f4dc3',
    '0x65b74d7cee678e9d51ae8d2c8455140b4e898b5e830aa911b5418383d0522f54',
    '0x295ce76b456051561eddea3900017da1efefb939ec2a53df58cb7ba6b160b3f4',
    '0xeb7208f0605ca107cb14c33176849c1b4e36ec84baa83193e09dac01571da354',
    '0x00fc89aeefb9260804a528792aaf7ec8bdfca83128524aee1bf87181351d5969',
    '0x9deb18c597f9d2b245d16020e017e37938d78e9c1b971d306ed6d3a35dc7e460',
    '0x394a8f328c38a233ffcbe086c24cf1eac1c45636cc10d67705a036aafc2c495d',
    '0x3d7139668669f3ec1c51311ced4dca7f14142f00a2d2250eaf20ffe5f15841e1',
    '0xa0ec72cbd22eee8b1435a490027e652067d4f6a8fcca27ae21c66662a6f2623c',
    '0x228652909eb9e39058fa24c48d9455b5272d9941407b234b374d45e79a4c4cac',
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
