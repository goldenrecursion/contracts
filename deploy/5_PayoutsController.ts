import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

import { deployerAddress } from '../hardhat.config';
import { isDev, init } from '../utils';
import { network } from 'hardhat';

const contractName = 'PayoutsController';

init(network);

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network } = hre;
  const { deploy, catchUnknownSigner } = deployments;

  const { deployer } = await getNamedAccounts();

  const dev = isDev(network);

  const GoldenTokenDeployment = await deployments.get('GoldenToken');
  const goldenTokenAddress = GoldenTokenDeployment.address;

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
            args: [goldenTokenAddress],
          },
        },
      },
    })
  );
};

deploy.id = 'deploy_payouts_controller';
deploy.tags = [contractName];
deploy.dependencies = ['GoldenToken'];

export default deploy;
