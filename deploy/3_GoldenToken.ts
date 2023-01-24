import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

import { ethers } from 'ethers';
import { deployerAddress } from '../hardhat.config';
import { init, isDev } from '../utils';
import { network } from 'hardhat';

const contractName = 'GoldenToken';

init(network);

export const INITIAL_SUPPLY = ethers.utils.parseUnits('1' + '0'.repeat(9), 18);

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network } = hre;
  const { deploy, catchUnknownSigner } = deployments;

  const { deployer } = await getNamedAccounts();
  const dev = isDev(network);

  const depl = dev ? deployer : deployerAddress;
  await catchUnknownSigner(
    deploy(contractName, {
      log: true,
      from: depl,
      proxy: {
        owner: depl,
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
deploy.tags = [contractName];

export default deploy;
