import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { network } from 'hardhat';
import dotenv from 'dotenv';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import testHelpersConfig from '@openzeppelin/test-helpers/configure';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { singletons } from '@openzeppelin/test-helpers';
import { ethers } from 'ethers';
import { DEFENDER_MULTISIG_CONTRACT_ADDRESS_GOERLI } from '../scripts/defenderHandoff';
dotenv.config();

testHelpersConfig({ provider: network.provider });

export const INITIAL_SUPPLY = ethers.utils.parseUnits('1' + '0'.repeat(9), 18);
export const SEED_AMOUNT = ethers.utils.parseUnits('10000', 18);
export const STAKE_AMOUNT = ethers.utils.parseUnits('10', 18);

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, getUnnamedAccounts, network, ethers } =
    hre;
  const { deploy, catchUnknownSigner } = deployments;

  const { deployer } = await getNamedAccounts();
  const dev = ['hardhat', 'localhost'].includes(network.name);
  if (dev) {
    const users = await getUnnamedAccounts();
    await singletons.ERC1820Registry(users[0]);
  }

  const contractName = 'GoldenToken';
  await catchUnknownSigner(
    deploy(contractName, {
      log: true,
      from: deployer,
      proxy: {
        owner: dev ? deployer : DEFENDER_MULTISIG_CONTRACT_ADDRESS_GOERLI,
        proxyContract: 'OpenZeppelinTransparentProxy',
        execute: {
          init: {
            methodName: 'initialize',
            args: [INITIAL_SUPPLY],
          },
        },
      },
    })
  );
  if (dev) {
    const users = await getUnnamedAccounts();
    const GoldenToken = (await ethers.getContract(contractName)).connect(
      await ethers.getSigner(deployer)
    );

    for (let i = 0, n = users.length; i < n; i++) {
      await GoldenToken.transfer(users[i], SEED_AMOUNT);
    }

    console.log('Bulk staking');
    await GoldenToken.bulkStake(
      [deployer, ...users].map((addr) => {
        return {
          addr,
          amount: STAKE_AMOUNT,
        };
      }),
      STAKE_AMOUNT.mul(users.length + 1)
    );
    console.log('bulk stake completed');
  }
};

deploy.id = 'deploy_golden_token';
deploy.tags = ['GoldenToken'];

export default deploy;
