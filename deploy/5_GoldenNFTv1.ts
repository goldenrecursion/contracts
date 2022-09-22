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
  const dev = ['hardhat', 'localhost'].includes(network.name);

  await deploy(contractName, {
    from: deployer,
    log: true,
    proxy: {
      proxyContract: 'OpenZeppelinTransparentProxy',
      owner: dev ? deployer : '0xF3dC74fDB8b3F53Ab11889bc6F27D9a5654bCBb4',
      execute: {
        methodName: 'initialize',
        args: [goldenTokenAddress],
      },
    },
  });
};

deploy.id = 'deploy_golden_nft';
deploy.tags = [contractName];
deploy.dependencies = ['GoldenToken'];

export default deploy;
