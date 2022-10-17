import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;

  const { deployer } = await getNamedAccounts();

  await deployments.deploy('GoldenProtocol', {
    from: deployer,
    // skipIfAlreadyDeployed: true,
    args: [3],
    log: true,
  });
};

deploy.id = 'deploy_golden_protocol';
deploy.tags = ['GoldenProtocol'];

export default deploy;
