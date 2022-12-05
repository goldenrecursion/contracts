import { task } from 'hardhat/config';
import { getBurner, getMinter } from '../utils';

const done = (hash: string, networkName: string) => {
  console.log('DONE');
  console.log(`https://${networkName}.etherscan.io/tx/${hash}`);
};

task(`mint`, `Mint to address, minter role is required`)
  .addParam(`address`, `Destination address`)
  .addParam(`amount`, `Amount of GLD to be minted`)
  .setAction(async (taskParams, hre) => {
    const { ethers } = hre;
    const minter = new ethers.Wallet(getMinter());
    const amount = ethers.utils.parseUnits(taskParams.amount, '18');
    const address = taskParams.address;
    const minterAddress = await minter.getAddress();
    const goldenToken = await ethers.getContract('GoldenToken');
    await goldenToken.connect(minter);

    if (!(await goldenToken.isMinter(minterAddress))) {
      throw new Error(`address=${minterAddress} does not have minter role!`);
    }

    const mintTx = await goldenToken.mint(address, amount);
    done(mintTx.hash, hre.network.name);
    console.log({
      balanceOf: ethers.utils.formatUnits(
        await goldenToken.balanceOf(address),
        '18'
      ),
      mintTx,
    });
  });

task(`burn`, `Burn tokens, burner role required`)
  .addParam(`address`, `Burn from address`)
  .addParam(`amount`, `Amount of GLD to be burned`)
  .setAction(async (taskParams, hre) => {
    const { ethers } = hre;
    const burner = new ethers.Wallet(getBurner());
    const amount = ethers.utils.parseUnits(taskParams.amount, '18');
    const address = taskParams.address;
    const burnerAddress = await burner.getAddress();
    const goldenToken = await ethers.getContract('GoldenToken');
    const addressBalance = await goldenToken.balanceOf(address);

    if (!(await goldenToken.isBurner(burnerAddress))) {
      throw new Error(`address=${burnerAddress} does not have burner role!`);
    }

    if (addressBalance < amount) {
      throw new Error(
        `Burn amount=${ethers.utils.formatUnits(
          amount,
          '18'
        )} exceeds balance=${ethers.utils.formatUnits(addressBalance, '18')}`
      );
    }

    const burnTx = await goldenToken.burn(address, amount);
    done(burnTx.hash, hre.network.name);
    console.log({
      balanceOf: ethers.utils.formatUnits(
        await goldenToken.balanceOf(address),
        '18'
      ),
      burnTx,
    });
  });
