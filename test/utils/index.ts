import { BigNumber, BaseContract } from 'ethers';
import { ethers } from 'hardhat';
import { Address } from 'hardhat-deploy/types';

import type { GoldenSchemaGovernor } from '../../typechain/GoldenSchemaGovernor';
import type { GoldenSchema } from '../../typechain/GoldenSchema';
import type { GoldenToken } from '../../typechain/GoldenToken';
import getRandomBytes32HexString from './getRandomBytes32HexString';

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
    [
      getRandomBytes32HexString(),
      '0xd532722b936f07ac0f763d98d57bf55f57dba972f090fd5d511b56db2971bc8f',
    ],
    [
      getRandomBytes32HexString(),
      '0xbf246cfe9c750ed8839e0d99cc6546e4599d32194bb0a5ce89bf23dca2a33cdb',
    ],
    [
      getRandomBytes32HexString(),
      '0x6c73cec67c30c965910e6cd95c8978432d9c3fa33062a407f58ffbbfc18410d5',
    ],
    [
      getRandomBytes32HexString(),
      '0x06277f55f721dde4ff6ff0003de662197bf1d7e71cfd3022da33795bbb7afb47',
    ],
    [
      getRandomBytes32HexString(),
      '0x382aaa6fccde5c4acf2f07cab4380bcf51abdaa67888ce29dfaa5efd29e3cdae',
    ],
    [
      getRandomBytes32HexString(),
      '0xef30dadac8bf6ee1f550ab26c4780a277c930dd2ff4705fca2d3fe5d3e791568',
    ],
    [
      getRandomBytes32HexString(),
      '0xf40808fd6504525bc1b80ec3290f64acc05655e1cd5d03dc2edfbf77604c7a11',
    ],
    [
      getRandomBytes32HexString(),
      '0x164aeb0ffee6441147795fea60045858c23c231b69b691eb246a24e35aa64207',
    ],
    [
      getRandomBytes32HexString(),
      '0x6bc5a10da4dbaba89ee1c5bc415cfb32d238cced956c5b3963c56a73c8027ebc',
    ],
    [
      getRandomBytes32HexString(),
      '0x564006434470c1e11bf37ce870907a9aec1d6901ecb5fb447b5659eeaf8f0905',
    ],
    [
      getRandomBytes32HexString(),
      '0x05b3506f98f88fcea5d936c271ffc995b7f272c6dfef1384ed49cbcd0e7c0716',
    ],
    [
      getRandomBytes32HexString(),
      '0x8f469c130145e584ca28113c29c2a6f134eb935cb80a95c60d8d94daea61fccc',
    ],
    [
      getRandomBytes32HexString(),
      '0x696fd2614ac22219e50f98ebe9a5230b354daff9081568cfcc0668af7df7d70f',
    ],
    [
      getRandomBytes32HexString(),
      '0xaa989ef3aa5e1e63a7cd8d1fb464951cffef5e10762f9a6ce847ccc03e5c84bb',
    ],
    [
      getRandomBytes32HexString(),
      '0x61acb74c3cde55d29fca5a05b92084ec91a5b187b7737757366b4a1dba8176e1',
    ],
    [
      getRandomBytes32HexString(),
      '0x80838fbc330bf9fc5dab555e1614616a17d9e83af2d7be7a7b6534b2dc347924',
    ],
    [
      getRandomBytes32HexString(),
      '0xdbfae5be29c7ff5d61ce1e2b1289d2fee9776cbbda2dadce3d1377ce950326ec',
    ],
    [
      getRandomBytes32HexString(),
      '0x5c610c9a2e98e9050d580f73f016a062af2023398e88698a7911b5dc1d0fae80',
    ],
    [
      getRandomBytes32HexString(),
      '0x71babfe22abcc9a756d74c6b2d3ee0772fb483371f251ef9f2cba1162ca4740b',
    ],
    [
      getRandomBytes32HexString(),
      '0x738d87f5a08cd48b855f843023776fb16d63446baf1662344b31b166f8332136',
    ],
    [
      getRandomBytes32HexString(),
      '0x63756c3917d63edf8e6a7ddb2fc7f2d0f8e5a93b7382f6e91ab160d0131ad20f',
    ],
    [
      getRandomBytes32HexString(),
      '0x536ecccf47eb3b8ec9df9b75929695a6318fc1919a238447145f65449ec52575',
    ],
    [
      getRandomBytes32HexString(),
      '0x35b62c3c76c98ebf2379793da0919ebd6ca8d14ace782ae0a27a88babed5ba8c',
    ],
    [
      getRandomBytes32HexString(),
      '0xab3a49537951915bcd1ba14a6d9d80216e44071130fb0cc4e202641414efa074',
    ],
    [
      getRandomBytes32HexString(),
      '0x63abe5b6d2c6fb5edf788a0d1c6bcc42458b33a71da1e28121deb11cc63dd536',
    ],
    [
      getRandomBytes32HexString(),
      '0x9ef73b352a88f7a7c553a090d1cd9e5120c2f3fd92c72e2e1b03c49cad90a838',
    ],
    [
      getRandomBytes32HexString(),
      '0x0459fab1bd1a72e14057fa0da10dbd2d0032f630bab01392d7f61df72c2774ea',
    ],
    [
      getRandomBytes32HexString(),
      '0xccd41ffb802923c1b486d200627a07dc4277ba59bd87978b4d2f338d04af4a6a',
    ],
    [
      getRandomBytes32HexString(),
      '0x7bfebae52377b59174a34275358160e6bd51aecfc8648eda89a2c6aa4ac078ad',
    ],
    [
      getRandomBytes32HexString(),
      '0xf80c4ad50b3ffcd5a39c0254e144ca265dbf0aaca39380b73c5ccdbe32e13078',
    ],
    [
      getRandomBytes32HexString(),
      '0x31117314212f6c4fb1724fe0244d7f0563681d959e4817cdb895ff2008c587fd',
    ],
    [
      getRandomBytes32HexString(),
      '0x7b8aea3bc6f700dcd25da02139e51a910ec24d2ccfaa6fb612cf642ebeb60b67',
    ],
    [
      getRandomBytes32HexString(),
      '0x092aa577d670b162e0cc61c9052747bfa213429a0990d7024e54f0be62de6543',
    ],
    [
      getRandomBytes32HexString(),
      '0xa2c80bbf731e2a6ba93caa8420b5b4d26e89a8e039476124ccddb60b9ff3e9e1',
    ],
    [
      getRandomBytes32HexString(),
      '0xa5080c6cdcc916bd5763cd73dc471035ae831caa8007ef950a35cbff2d00f672',
    ],
    [
      getRandomBytes32HexString(),
      '0x3c6e09c3fa78269a2d0fb16d3008c768792e0e14f8243a539dec8536cbd58176',
    ],
    [
      getRandomBytes32HexString(),
      '0x9ffc39dc36cb880681f8e79559156bb812b931631e83738e941643fb1401b959',
    ],
  ] as [string, string][],
};
