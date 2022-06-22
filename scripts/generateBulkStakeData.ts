import { ethers, deployments, getNamedAccounts } from 'hardhat'
import { INITIAL_SUPPLY } from '../deploy/GoldenToken';

const toStake: { addr: string, amount: string }[] = [
  {
    addr: '0x6B9a039f98eB5B613Bd1783AE728Bd04789ab5B8',
    amount: '10000000000000000000'
  }
]

async function main() {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy('GoldenToken', {
    log: true,
    from: deployer,
    proxy: {
      proxyContract: 'OpenZeppelinTransparentProxy',
      execute: {
        methodName: 'initialize',
        args: [INITIAL_SUPPLY],
      }
    }
  });
  const goldenToken = (await ethers.getContract('GoldenToken')).connect(
    await ethers.getSigner(deployer)
  );

  let totalAmount = BigInt('10000000000000000000')

  const tx = await goldenToken.bulkStake(toStake, totalAmount)

  console.log('DONE', tx.data)
  console.log('This should have stake', (await goldenToken.stakeOf('0x6B9a039f98eB5B613Bd1783AE728Bd04789ab5B8')).toString())
  console.log('This should NOT have stake', (await goldenToken.stakeOf('0xc5a5C42992dECbae36851359345FE25997F5C42d')).toString())

}

main()
