import { expect } from 'chai';
import {
  deployments,
  ethers,
  getNamedAccounts,
  getUnnamedAccounts,
} from 'hardhat';

import { setupUsers, setupUser, User, Contracts as _Contracts } from '../utils';

type Contracts = Pick<_Contracts, 'SharedOwnershipNFTv1'>;

describe('SharedOwnershipNFT - NFT Component', function () {
  let SharedOwnershipNFTv1: Contracts['SharedOwnershipNFTv1'];
  let owner: User<Contracts>;
  let users: User<Contracts>[];

  beforeEach(async function () {
    await deployments.fixture(['SharedOwnershipNFTv1']);
    SharedOwnershipNFTv1 = await ethers.getContract('SharedOwnershipNFTv1');
    const contracts = { SharedOwnershipNFTv1 };
    const { deployer } = await getNamedAccounts();
    owner = await setupUser(deployer, contracts);
    console.log('owner', owner.address)
    users = await setupUsers(await getUnnamedAccounts(), contracts);
    console.log('users', users.length)
  });

  describe('Deployment', function () {
    it('Should have some', async function () {
      expect(SharedOwnershipNFTv1.address).to.not.equal(null);
      console.log('SharedOwnershipNFTv1.address >>> ', SharedOwnershipNFTv1.address)
      expect(await SharedOwnershipNFTv1.getSome()).to.equal('some');
    });
  });
});
