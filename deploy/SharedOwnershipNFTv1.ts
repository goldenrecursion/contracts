import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { network } from 'hardhat';

// @ts-ignore
import testHelpersConfig from '@openzeppelin/test-helpers/configure';
// @ts-ignore
import { singletons } from '@openzeppelin/test-helpers';

testHelpersConfig({ provider: network.provider });

let goldenTokenAddress = '0x6B9a039f98eB5B613Bd1783AE728Bd04789ab5B8'

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, getUnnamedAccounts, network } =
    hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  const GoldenTokenDeployment = await deployments.get('GoldenToken');

  if (network.name === 'hardhat') {
    const users = await getUnnamedAccounts();
    await singletons.ERC1820Registry(users[0]);
    goldenTokenAddress = GoldenTokenDeployment.address
  }


  await deploy('SharedOwnershipNFTv1', {
    from: deployer,
    log: true,
    proxy: {
      proxyContract: 'OpenZeppelinTransparentProxy',
      execute: {
        methodName: 'initialize',
        args: ['0x1291Be112d480055DaFd8a610b7d1e203891C274', goldenTokenAddress],
      }
    }
  });
};

deploy.tags = ['SharedOwnershipNFTv1'];
deploy.dependencies = ['GoldenToken'];

export default deploy;
