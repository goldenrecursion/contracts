import { network } from 'hardhat';
import { DeployFunction } from 'hardhat-deploy/types';
import { init, isDev } from '../utils';
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { deployerAddress } from '../hardhat.config';

const contractName = 'GoldenAirdropV1';

init(network);

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, network } = hre;
  const { deploy, catchUnknownSigner } = deployments;

  const { deployer } = await getNamedAccounts();
  const dev = isDev(network);

  if (!dev) {
    throw new Error(
      `GoldenAirdropV1 can only be deployed to development networks! Do not deploy on testnet or mainnet yet!!!`
    );
  }

  const depl = dev ? deployer : deployerAddress;
  const GoldenTokenDeployment = await deployments.get('GoldenToken');

  await catchUnknownSigner(
    deploy(contractName, {
      log: true,
      from: depl,
      args: [
        GoldenTokenDeployment.address,
        '0x0000000000000000000000000000000000000000000000000000000000000000',
      ],
    })
  );
};

deploy.id = 'deploy_golden_airdropV1';
deploy.tags = [contractName];
deploy.dependencies = ['GoldenToken'];

export default deploy;
