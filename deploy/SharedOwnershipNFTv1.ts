import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';
import {network} from 'hardhat';

// @ts-ignore
import testHelpersConfig from '@openzeppelin/test-helpers/configure';
// @ts-ignore
import {singletons} from '@openzeppelin/test-helpers';

testHelpersConfig({provider: network.provider});

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, getUnnamedAccounts, network } =
    hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  if (network.name === 'hardhat') {
    const users = await getUnnamedAccounts();
    await singletons.ERC1820Registry(users[0]);
  }

  await deploy('SharedOwnershipNFTv1', {
    from: deployer,
    log: true,
    proxy: {
      proxyContract: 'OpenZeppelinTransparentProxy',
      execute: {
        methodName: 'initialize',
        args: ['0x1291Be112d480055DaFd8a610b7d1e203891C274', 300],
      }
    }
  });
};

deploy.tags = ['SharedOwnershipNFTv1'];

export default deploy;
