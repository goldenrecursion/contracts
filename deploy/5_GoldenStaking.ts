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

const contractName = 'GoldenStaking';

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, getUnnamedAccounts, network } =
    hre;
  const { deploy, catchUnknownSigner } = deployments;

  const { deployer } = await getNamedAccounts();

  const dev = ['hardhat', 'localhost'].includes(network.name);


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
            args: [1, dev ? 5 : 5260000], // easier to test for dev
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