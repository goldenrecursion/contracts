import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { deployerAddress } from '../hardhat.config';

const contractName = 'LockedStaking';

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network } = hre;
  const { deploy, catchUnknownSigner } = deployments;

  const { deployer } = await getNamedAccounts();
  const dev = ['hardhat', 'localhost'].includes(network.name);

  const GoldenTokenDeployment = await deployments.getOrNull('GoldenToken');

  if (
    !GoldenTokenDeployment ||
    typeof GoldenTokenDeployment?.address !== 'string'
  ) {
    throw new Error(`Golden Token Proxy has not been deployed`);
  }

  await catchUnknownSigner(
    deploy(contractName, {
      log: true,
      from: deployer,
      proxy: {
        owner: dev ? deployer : deployerAddress,
        proxyContract: 'OpenZeppelinTransparentProxy',
        execute: {
          init: {
            methodName: 'initialize',
            args: [GoldenTokenDeployment.address],
          },
        },
      },
    })
  );
};

deploy.id = 'deploy_locked_staking';
deploy.tags = [contractName];
deploy.dependencies = ['GoldenToken'];

export default deploy;
