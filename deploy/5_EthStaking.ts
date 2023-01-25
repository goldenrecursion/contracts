import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

import { deployerAddress } from '../hardhat.config';
import { init, isDev } from '../utils';
import { network } from 'hardhat';

export const stakingPeriodDev = 2;
const stakingPeriod = 438333; // in blocks, approx 2 months

const contractName = 'EthStaking';

init(network);

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network } = hre;
  const { deploy, catchUnknownSigner } = deployments;

  const { deployer } = await getNamedAccounts();

  const dev = isDev(network);

  const depl = dev ? deployer : deployerAddress;
  await catchUnknownSigner(
    deploy(contractName, {
      from: depl,
      log: true,
      proxy: {
        proxyContract: 'OpenZeppelinTransparentProxy',
        owner: depl,
        execute: {
          init: {
            methodName: 'initialize',
            args: [1, dev ? stakingPeriodDev : stakingPeriod],
          },
        },
      },
    })
  );
};

deploy.id = 'deploy_golden_staking';
deploy.tags = [contractName];
deploy.dependencies = ['GoldenToken'];

export default deploy;
