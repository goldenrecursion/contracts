import { expect } from 'chai';
import {
  deployments,
  ethers,
} from 'hardhat';

import { Contracts as _Contracts } from '../utils';
import type { SharedOwnershipNFTv1 } from '../../typechain/SharedOwnershipNFTv1';

describe('SharedOwnershipNFT - NFT Component', function () {
  let SharedOwnershipNFTv1: SharedOwnershipNFTv1

  beforeEach(async function () {
    await deployments.fixture(['SharedOwnershipNFTv1']);
    SharedOwnershipNFTv1 = await ethers.getContract('SharedOwnershipNFTv1');
  });

  describe('Deployment', function () {
    it('Should have treasuryAddress', async function () {
      expect(SharedOwnershipNFTv1.address).to.not.equal(null);
      console.log('SharedOwnershipNFTv1.address >>> ', SharedOwnershipNFTv1.address)
      expect(await SharedOwnershipNFTv1.treasuryAddress()).to.equal('0x1291Be112d480055DaFd8a610b7d1e203891C274');
    });
  });
  describe('Deployment', function () {
    it('Should test user weights', async function () {
      expect(await SharedOwnershipNFTv1.treasuryAddress()).to.equal('0x1291Be112d480055DaFd8a610b7d1e203891C274');
      expect(await SharedOwnershipNFTv1.totalWeight()).to.equal(0);
      await SharedOwnershipNFTv1.addWeight('0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266', 10)
      await SharedOwnershipNFTv1.addWeight('0xc5a5c42992decbae36851359345fe25997f5c42d', 30)
      expect(await SharedOwnershipNFTv1.userContributionWeightsPerToken('0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266')).to.equal(10);
      expect(await SharedOwnershipNFTv1.userContributionWeights('0xc5a5c42992decbae36851359345fe25997f5c42d')).to.equal(30);
      expect(await SharedOwnershipNFTv1.totalWeight()).to.equal(40);
    });
  });
});
