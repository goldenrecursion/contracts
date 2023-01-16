import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { deployerAddress } from '../hardhat.config';

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network } = hre;
  const { deploy, catchUnknownSigner } = deployments;

  const { deployer } = await getNamedAccounts();
  const dev = ['hardhat', 'localhost'].includes(network.name);

  const contractName = 'GoldenSchema';
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
            // Don't need initials, we migrate from older contract state
            args: [[], []],
          },
        },
      },
    })
  );
};

deploy.id = 'deploy_golden_schema';
deploy.tags = ['GoldenSchema'];

export default deploy;
