import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { GoldenSchema } from '../typechain';

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, ethers } = hre;

  const { deployer } = await getNamedAccounts();

  const GoldenTokenDeployment = await deployments.get('GoldenToken');
  const goldenSchemaGovernor = await deployments.getOrNull(
    'GoldenSchemaGovernor'
  );
  if (!goldenSchemaGovernor) {
    await deployments.deploy('GoldenSchemaGovernor', {
      from: deployer,
      skipIfAlreadyDeployed: true,
      args: [GoldenTokenDeployment.address],
      log: true,
    });
    const GoldenSchemaGovernorDeployment = await deployments.get(
      'GoldenSchemaGovernor'
    );

    await (await ethers.getContract<GoldenSchema>('GoldenSchema'))
      .connect(await ethers.getSigner(deployer))
      .transferOwnership(GoldenSchemaGovernorDeployment.address);
  }
};

deploy.id = 'deploy_golden_schema_governance';
deploy.tags = ['GoldenSchemaGovernor'];
deploy.dependencies = ['GoldenToken', 'GoldenSchema'];

export default deploy;
