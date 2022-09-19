import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { network } from 'hardhat';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import testHelpersConfig from '@openzeppelin/test-helpers/configure';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { singletons } from '@openzeppelin/test-helpers';
import json from '../deployments/goerli/GoldenToken_Proxy.json';

testHelpersConfig({ provider: network.provider });
console.log('json', json.address);
let goldenTokenAddress = json.address;
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
        owner: '0xd8f26e63c9b3a4c8d1cab70eb252a15c7d180f04',
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
