import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { network } from 'hardhat';

import testHelpersConfig from '@openzeppelin/test-helpers/configure';
import { singletons } from '@openzeppelin/test-helpers';

testHelpersConfig({ provider: network.provider });

let goldenTokenAddress = '0x6B9a039f98eB5B613Bd1783AE728Bd04789ab5B8';
const contractName = 'GoldenNFTv1';

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, getUnnamedAccounts, network } = hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  const GoldenTokenDeployment = await deployments.get('GoldenToken');

  if (network.name === 'hardhat') {
    const users = await getUnnamedAccounts();
    await singletons.ERC1820Registry(users[0]);
    goldenTokenAddress = GoldenTokenDeployment.address;
  }

  const goldenNft = await deployments.getOrNull(contractName);
  if (!goldenNft) {
    await deploy(contractName, {
      from: deployer,
      log: true,
      proxy: {
        proxyContract: 'OpenZeppelinTransparentProxy',
        execute: {
          methodName: 'initialize',
          args: [goldenTokenAddress],
        },
      },
    });
  }
};

deploy.id = 'deploy_golden_nft';
deploy.tags = [contractName];
deploy.dependencies = ['GoldenToken'];

export default deploy;