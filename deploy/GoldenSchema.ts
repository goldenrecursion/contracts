import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import initialPredicates from '../contracts/GoldenSchemaPredicates.json';

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  await deploy('GoldenSchema', {
    from: deployer,
    args: [initialPredicates],
    log: true,
  });
};

deploy.tags = ['GoldenSchema'];

export default deploy;
