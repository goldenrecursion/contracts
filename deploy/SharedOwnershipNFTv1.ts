import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import {network} from 'hardhat';

// @ts-ignore
import testHelpersConfig from '@openzeppelin/test-helpers/configure';
// @ts-ignore
import {singletons} from '@openzeppelin/test-helpers';

testHelpersConfig({provider: network.provider});

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const {getUnnamedAccounts, network, ethers, upgrades} =
    hre;
  const {deployProxy} = upgrades;

  // const {deployer} = await getNamedAccounts();

  if (network.name === 'hardhat') {
    const users = await getUnnamedAccounts();
    await singletons.ERC1820Registry(users[0]);
  }

  const SharedOwnershipNFTv1 = await ethers.getContractFactory("SharedOwnershipNFTv1");

  await deployProxy(SharedOwnershipNFTv1, {
  });

  // if (network.name === 'hardhat') {
  //   const users = await getUnnamedAccounts();
  //   // Pre seed test accounts with tokens
  // const SharedOwnershipNFTv1 = (await ethers.getContract('SharedOwnershipNFTv1')).connect(
  //   await ethers.getSigner(deployer)
  // );
  console.log('DEPLOYED SharedOwnershipNFTv1', SharedOwnershipNFTv1)

  //   for (let i = 0, n = users.length; i < n; i++) {
  //     await SharedOwnershipNFTv1.transfer(users[i], SEED_AMOUNT);
  //   }
  // }
};

deploy.tags = ['SharedOwnershipNFTv1'];

export default deploy;
