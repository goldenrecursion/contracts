import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network } = hre;
  const { deploy, catchUnknownSigner } = deployments;

  const { deployer } = await getNamedAccounts();
  const dev = ['hardhat', 'localhost'].includes(network.name);

  const contractName = 'LockedStaking';

  const GoldenTokenDeployment = await deployments.get('GoldenToken');
  const goldenTokenAddress = GoldenTokenDeployment.address;

  if (typeof goldenTokenAddress !== 'string') {
    throw new Error(`Golden Token Proxy has not been deployed`);
  }

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
            args: [goldenTokenAddress],
          },
        },
      },
    })
  );
};

deploy.id = 'deploy_locked_staking';
deploy.tags = ['LockedStaking'];

export default deploy;
