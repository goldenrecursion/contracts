import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

import { deployerAddress } from '../hardhat.config';
import { init, isDev } from '../utils';
import { network } from 'hardhat';

const MINTERS_AND_BURNERS = process.env.MINTERS_AND_BURNERS;

const contractName = 'GoldenNFT';

init(network)

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, ethers, network } = hre;
  const { deploy, catchUnknownSigner } = deployments;
  const { deployer } = await getNamedAccounts();

  const dev = isDev(network)

  const [owner] = await ethers.getSigners();

  const mintersAndBurners = JSON.parse(MINTERS_AND_BURNERS ?? '[]');
  const minterBurnerAddresses = [];
  if (mintersAndBurners.length > 0) {
    for (const mb of mintersAndBurners) {
      const wallet = new ethers.Wallet(mb);
      minterBurnerAddresses.push(wallet.address);
      if (dev) {
        await (
          await owner.sendTransaction({
            to: wallet.address,
            value: ethers.utils.parseEther('1'),
          })
        ).wait(1);
      }
    }
  }

  const GoldenTokenDeployment = await deployments.get('GoldenToken');
  const goldenTokenAddress = GoldenTokenDeployment.address;

  const depl = dev ? deployer : deployerAddress;
  await catchUnknownSigner(
    deploy(contractName, {
      from: depl,
      log: true,
      proxy: {
        proxyContract: 'OpenZeppelinTransparentProxy',
        owner: depl,
        execute: {
          init: {
            methodName: 'initialize',
            args: [goldenTokenAddress, minterBurnerAddresses],
          },
        },
      },
    })
  );
};

deploy.id = 'deploy_golden_nft';
deploy.tags = [contractName];
deploy.dependencies = ['GoldenToken'];

export default deploy;
