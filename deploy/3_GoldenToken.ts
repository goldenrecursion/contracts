import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { network } from 'hardhat';
import dotenv from 'dotenv';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import testHelpersConfig from '@openzeppelin/test-helpers/configure';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { singletons } from '@openzeppelin/test-helpers';
import { ethers } from 'ethers';
dotenv.config();

testHelpersConfig({ provider: network.provider });

export const INITIAL_SUPPLY = ethers.utils.parseUnits('1' + '0'.repeat(9), 18);

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, getUnnamedAccounts, network } = hre;
  const { deploy, catchUnknownSigner } = deployments;

  const { deployer } = await getNamedAccounts();
  const dev = ['hardhat', 'localhost'].includes(network.name);
  if (dev) {
    const users = await getUnnamedAccounts();
    await singletons.ERC1820Registry(users[0]);
  }

  const contractName = 'GoldenToken';
  await catchUnknownSigner(
    deploy(contractName, {
      log: true,
      from: deployer,
      proxy: {
        owner: dev ? deployer : '0x4e2548274014F034Ffc71947bb7bA584C64E2315',
        proxyContract: 'OpenZeppelinTransparentProxy',
        execute: {
          init: {
            methodName: 'initialize',
            args: [INITIAL_SUPPLY],
          },
        },
      },
    })
  );
};

deploy.id = 'deploy_golden_token';
deploy.tags = ['GoldenToken'];

export default deploy;
