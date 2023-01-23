import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { network } from 'hardhat';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import testHelpersConfig from '@openzeppelin/test-helpers/configure';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { singletons } from '@openzeppelin/test-helpers';
import { deployerAddress } from '../hardhat.config';

testHelpersConfig({ provider: network.provider });

const contractName = 'PayoutsController';

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, getUnnamedAccounts, network } = hre;
  const { deploy, catchUnknownSigner } = deployments;

  const { deployer } = await getNamedAccounts();

  const dev = ['hardhat', 'localhost'].includes(network.name);

  const GoldenTokenDeployment = await deployments.get('GoldenToken');
  const goldenTokenAddress = GoldenTokenDeployment.address;

  if (network.name === 'hardhat') {
    const users = await getUnnamedAccounts();
    await singletons.ERC1820Registry(users[0]);
  }
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
