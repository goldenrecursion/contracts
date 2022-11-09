import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import initialPredicates from '../contracts/data/GoldenSchemaPredicates.json';
import initialEntityTypes from '../contracts/data/GoldenSchemaEntityTypes.json';

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;

  const { deployer } = await getNamedAccounts();

  await deployments.deploy('GoldenSchema', {
    from: deployer,
    skipIfAlreadyDeployed: true,
    args: [initialPredicates, initialEntityTypes],
    log: true,
  });
};

deploy.id = 'deploy_golden_schema';
deploy.tags = ['GoldenSchema'];

export default deploy;
