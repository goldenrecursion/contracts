import { network } from 'hardhat';
import { DeployFunction } from 'hardhat-deploy/types';
import { init, isDev } from '../utils';
import { HardhatRuntimeEnvironment } from 'hardhat/types';

const contractName = 'GoldenAirdropV1';

init(network);

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, network } = hre;
  const { deploy, catchUnknownSigner } = deployments;

  // const { deployer } = await getNamedAccounts();
  const dev = isDev(network);

  if (!dev) {
    throw new Error(
      `GoldenAirdropV1 can only be deployed to development networks! Do not deploy on testnet or mainnet yet!!!`
    );
  }

  const [owner] = await hre.ethers.getSigners();
  const GoldenTokenDeployment = await deployments.get('GoldenToken');

  await catchUnknownSigner(
    deploy(contractName, {
      log: true,
      from: owner.address,
      args: [
        GoldenTokenDeployment.address,
        '0x0000000000000000000000000000000000000000000000000000000000000000',
      ],
    })
  );

  // ONLY FOR DEVELOPMENT
  const million = hre.ethers.utils.parseUnits('1000000', 'ether');

  const gldToken = await hre.ethers.getContract('GoldenToken', owner);
  const airdropV1 = await hre.ethers.getContract('GoldenAirdropV1', owner);

  await gldToken.grantTransfer(airdropV1.address);
  await gldToken.transfer(airdropV1.address, million);

  console.log({
    balanceOfAirdropContract: hre.ethers.utils.formatUnits(
      (await gldToken.balanceOf(airdropV1.address)).toString(),
      '18'
    ),
    hasGrantsToTransfer: await gldToken.hasGrantsToTransfer(airdropV1.address),
  });
};

deploy.id = 'deploy_golden_airdropV1';
deploy.tags = [contractName];
deploy.dependencies = ['GoldenToken'];

export default deploy;
