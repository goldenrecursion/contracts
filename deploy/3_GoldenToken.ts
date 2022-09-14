import { DeployFunction } from 'hardhat-deploy/types';
import { network } from 'hardhat';
import dotenv from 'dotenv';
dotenv.config();

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import testHelpersConfig from '@openzeppelin/test-helpers/configure';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { singletons } from '@openzeppelin/test-helpers';
import { ethers } from 'ethers';

testHelpersConfig({ provider: network.provider });

export const INITIAL_SUPPLY = ethers.utils.parseUnits('1' + '0'.repeat(9), 18);
export const SEED_AMOUNT = ethers.utils.parseUnits('10000', 18);
export const STAKE_AMOUNT = ethers.utils.parseUnits('10', 18);

const deploy: DeployFunction = async function ({
  deployments,
  getNamedAccounts,
  getUnnamedAccounts,
  network,
  ethers,
}) {
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  if (['hardhat', 'localhost'].includes(network.name)) {
    const users = await getUnnamedAccounts();
    await singletons.ERC1820Registry(users[0]);
  }

  const contractName = 'GoldenToken';
  const goldenToken = await deployments.getOrNull(contractName);
  if (!goldenToken) {
    await deploy(contractName, {
      log: true,
      from: deployer,
      skipIfAlreadyDeployed: true,
      proxy: {
        proxyContract: 'OpenZeppelinTransparentProxy',
        execute: {
          methodName: 'initialize',
          args: [INITIAL_SUPPLY],
        },
      },
    });
  }

  if (['hardhat', 'localhost'].includes(network.name)) {
    const users = await getUnnamedAccounts();
    const GoldenToken = (await ethers.getContract('GoldenToken')).connect(
      await ethers.getSigner(deployer)
    );

    for (let i = 0, n = users.length; i < n; i++) {
      await GoldenToken.transfer(users[i], SEED_AMOUNT);
    }

    console.log('Bulk staking');
    await GoldenToken.bulkStake(
      [deployer, ...users].map((addr) => {
        return {
          addr,
          amount: STAKE_AMOUNT,
        };
      }),
      STAKE_AMOUNT.mul(users.length + 1)
    );
    console.log('bulk stake completed');
  }
};

deploy.id = 'deploy_golden_token';
deploy.tags = ['GoldenToken'];

export default deploy;
