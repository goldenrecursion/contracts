import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;

  const { deployer } = await getNamedAccounts();

  const GoldenTokenDeployment = await deployments.get('GoldenToken');

  await deployments.deploy('GoldenBounty', {
    from: deployer,
    // skipIfAlreadyDeployed: true,
    args: [GoldenTokenDeployment.address, 3],
    log: true,
  });
};

deploy.id = 'deploy_golden_protocol';
deploy.tags = ['GoldenBounty'];
deploy.dependencies = ['GoldenToken'];

export default deploy;
