import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { network } from 'hardhat';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import testHelpersConfig from '@openzeppelin/test-helpers/configure';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { singletons } from '@openzeppelin/test-helpers';

testHelpersConfig({ provider: network.provider });

const contractName = 'GoldenNFT';

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, getUnnamedAccounts, network } = hre;
  const { deploy, catchUnknownSigner } = deployments;

  const { deployer } = await getNamedAccounts();

  const GoldenTokenDeployment = await deployments.get('GoldenToken');
  const goldenTokenAddress = GoldenTokenDeployment.address;

  if (network.name === 'hardhat') {
    const users = await getUnnamedAccounts();
    await singletons.ERC1820Registry(users[0]);
  }
  const dev = ['hardhat', 'localhost'].includes(network.name);
  await catchUnknownSigner(
    deploy(contractName, {
      from: deployer,
      log: true,
      proxy: {
        proxyContract: 'OpenZeppelinTransparentProxy',
        owner: dev ? deployer : '0x4e2548274014F034Ffc71947bb7bA584C64E2315',
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

deploy.id = 'deploy_golden_nft';
deploy.tags = [contractName];
deploy.dependencies = ['GoldenToken'];

export default deploy;
