import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

export const QUORUM_NUMERATOR_VALUE = 51;

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;

  const { deployer } = await getNamedAccounts();

  const GoldenTokenDeployment = await deployments.get('GoldenToken');
  const goldenSchemaGovernor = await deployments.getOrNull(
    'GoldenSchemaGovernor'
  );
  if (!goldenSchemaGovernor) {
    await deployments.deploy('GoldenSchemaGovernor', {
      from: deployer,
      skipIfAlreadyDeployed: true,
      args: [GoldenTokenDeployment.address, QUORUM_NUMERATOR_VALUE],
      log: true,
    });

  }
};

deploy.id = 'deploy_golden_schema_governance';
deploy.tags = ['GoldenSchemaGovernor'];
deploy.dependencies = ['GoldenToken', 'GoldenSchema'];

export default deploy;
