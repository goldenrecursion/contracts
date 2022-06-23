import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { network } from 'hardhat';

// @ts-ignore
import testHelpersConfig from '@openzeppelin/test-helpers/configure';
// @ts-ignore
import { singletons } from '@openzeppelin/test-helpers';
import { ethers } from 'ethers';

testHelpersConfig({ provider: network.provider });

export const INITIAL_SUPPLY = ethers.utils.parseUnits('1' + '0'.repeat(9), 18);
export const SEED_AMOUNT = ethers.utils.parseUnits('10000', 18);
const STAKE_AMOUNT = ethers.utils.parseUnits('10', 18);

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, getUnnamedAccounts, network, ethers } =
    hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  if (network.name === 'hardhat') {
    const users = await getUnnamedAccounts();
    await singletons.ERC1820Registry(users[0]);
  }

  await deploy('GoldenToken', {
    log: true,
    from: deployer,
    proxy: {
      proxyContract: 'OpenZeppelinTransparentProxy',
      execute: {
        methodName: 'initialize',
        args: [INITIAL_SUPPLY],
      },
    },
  });

  if (network.name === 'hardhat') {
    const users = await getUnnamedAccounts();
    // Pre seed test accounts with tokens
    const GoldenToken = (await ethers.getContract('GoldenToken')).connect(
      await ethers.getSigner(deployer)
    );
    const userStakes = [];
    for (const user of [deployer, ...users]) {
      userStakes.push({
        addr: user,
        amount: STAKE_AMOUNT,
      });
    }
    const totalStakes = STAKE_AMOUNT.mul(users.length + 1);
    await GoldenToken.bulkStake(userStakes, totalStakes);
  }
};

deploy.tags = ['GoldenToken'];

export default deploy;
