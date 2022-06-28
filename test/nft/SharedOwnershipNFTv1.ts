import { expect } from 'chai';
import {
  deployments,
  ethers,
  getNamedAccounts
} from 'hardhat';

import { Contracts as _Contracts } from '../utils';
import type { SharedOwnershipNFTv1 } from '../../typechain/SharedOwnershipNFTv1';

describe('SharedOwnershipNFT - NFT Component', function () {
  let SharedOwnershipNFTv1: SharedOwnershipNFTv1
  let user: string = ''

  beforeEach(async function () {
    await deployments.fixture(['SharedOwnershipNFTv1']);
    SharedOwnershipNFTv1 = await ethers.getContract('SharedOwnershipNFTv1');
    const { deployer } = await getNamedAccounts();
    user = deployer;
    console.log('user', user.length);
  });

  describe('Deployment', function () {
    it('Should have default parameters', async function () {
      expect(SharedOwnershipNFTv1.address).to.not.equal(null);
      console.log('SharedOwnershipNFTv1.address >>> ', SharedOwnershipNFTv1.address)
      expect(await SharedOwnershipNFTv1.treasuryAddress()).to.equal('0x1291Be112d480055DaFd8a610b7d1e203891C274');
      expect(await SharedOwnershipNFTv1.name()).to.equal('Golden Entity');
      expect(await SharedOwnershipNFTv1.symbol()).to.equal('GLDE');
      expect(await SharedOwnershipNFTv1.goldenTokenContractAddress()).to.not.equal('0x0');
      expect(await SharedOwnershipNFTv1.minStakeToMint()).to.equal('10000000000000000000');
      expect(await SharedOwnershipNFTv1.minterReward()).to.equal('0');
    });
  });
  // describe('Deployment', function () {
  //   it('Should test minting', async function () {
  //     expect(await SharedOwnershipNFTv1.tokensToContributions(0).totalWeight).to.equal(0);
  //     await SharedOwnershipNFTv1.mint('0x00000000006c3852cbef3e08e8df289169ede581')
  //   });
  // });
});
