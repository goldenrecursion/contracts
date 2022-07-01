import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, ethers } = hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  const GoldenTokenDeployment = await deployments.get('GoldenToken');

  await deploy('GoldenSchemaGovernor', {
    from: deployer,
    args: [GoldenTokenDeployment.address],
    log: true,
  });

  const GoldenSchemaGovernorDeployment = await deployments.get(
    'GoldenSchemaGovernor'
  );

  const GoldenSchema = (await ethers.getContract('GoldenSchema')).connect(
    await ethers.getSigner(deployer)
  );

  await GoldenSchema.transferOwnership(GoldenSchemaGovernorDeployment.address);
};

deploy.id = 'deploy_golden_schema_governance';
deploy.tags = ['GoldenSchemaGovernor'];
deploy.dependencies = ['GoldenToken', 'GoldenSchema'];

export default deploy;
