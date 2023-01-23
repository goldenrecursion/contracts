import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { GoldenSchema } from '../typechain';

export const QUORUM_NUMERATOR_VALUE = 51;
const contractName = 'GoldenSchemaGovernor';

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, ethers } = hre;
  const { deploy, catchUnknownSigner } = deployments;

  const { deployer } = await getNamedAccounts();

  const GoldenTokenDeployment = await deployments.get('GoldenToken');
  await catchUnknownSigner(
    deploy(contractName, {
      from: deployer,
      skipIfAlreadyDeployed: true,
      args: [GoldenTokenDeployment.address, QUORUM_NUMERATOR_VALUE],
      log: true,
    }));
  const GoldenSchemaGovernorDeployment = await deployments.get(
    contractName
  );

  await (await ethers.getContract<GoldenSchema>('GoldenSchema'))
    .connect(await ethers.getSigner(deployer))
    .transferOwnership(GoldenSchemaGovernorDeployment.address);
};

deploy.id = 'deploy_golden_schema_governance';
deploy.tags = [contractName];
deploy.dependencies = ['GoldenToken', 'GoldenSchema'];

export default deploy;
