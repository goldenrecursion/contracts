import { BigNumber } from 'ethers';
import { task } from 'hardhat/config';
const MINTERS_AND_BURNERS = process.env.MINTERS_AND_BURNERS;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ARBITRUM_GOERLI_URL = process.env.ARBITRUM_GOERLI_URL;

/**
 *  These tasks will only work on local node where your deployer owns the contract
 */
task(
  'generateWallets',
  'Generate a number of wallets private keys and print out a json array with them'
)
  .addParam('nr', 'How many wallets')
  .setAction(async ({ nr }, { ethers, getNamedAccounts }) => {
    let nrOfWallets = parseInt(nr);
    const obj = [];
    const addresses = [];
    while (nrOfWallets > 0) {
      nrOfWallets--;
      const wallet = ethers.Wallet.createRandom();
      obj.push(wallet.privateKey);
      addresses.push(wallet.address);
    }
    console.log('Result', JSON.stringify(obj));
    const { deployer } = await getNamedAccounts();
    const contract = (await ethers.getContract('GoldenNFT')).connect(
      await ethers.getSigner(deployer)
    );
    try {
      // This will fail as we aren't the owner, but we need the generated data parameter.
      await (await contract.addMinters(addresses)).wait(1);
    } catch (err: any) {
      console.log(
        'addMinters: Paste this data into gnosis transaction with custom data:\n',
        err.transaction?.data
      );
      if (!err.transaction?.data) console.error(err);
    }
    try {
      // This will fail as we aren't the owner, but we need the generated data parameter.
      await (await contract.addBurners(addresses)).wait(1);
    } catch (err: any) {
      console.log(
        'addBurners: Paste this data into gnosis transaction with custom data:\n',
        err.transaction?.data
      );
      if (!err.transaction?.data) console.error(err);
    }
  });

/**
 *  This tasks will only work where your deployer owns the contract
 *  e.g: npx hardhat fundWallets --nr 10 --amount 0.2 --network arbitrumGoerli
 */
task(
  'fundWallets',
  'Fund all the wallets up to hardcoded amount, not a param just in case, wei can be confusing'
)
  // We have 30 wallets, but maybe you want to test 3
  .addParam('nr', 'Number of wallets to fund')
  // e.g: 0.2
  .addParam('amount', 'The amount to fund the wallet up to in ETH')
  .setAction(async ({ nr, amount }, { ethers, network }) => {
    let nrOfWallets = parseInt(nr);
    const desiredBalance = ethers.utils.parseUnits(amount, 'ether');
    if (!MINTERS_AND_BURNERS)
      throw new Error('MINTERS_AND_BURNERS is missing, aborting');
    if (!PRIVATE_KEY)
      throw new Error(
        'PRIVATE_KEY is missing, aborting, need wallet with GoeETH to send from'
      );

    const provider = new ethers.providers.JsonRpcProvider(ARBITRUM_GOERLI_URL); // THIS is hardcoded

    const mintersAndBurners = JSON.parse(MINTERS_AND_BURNERS);

    const moneyWallet = new ethers.Wallet(PRIVATE_KEY, provider);

    for (const mb of mintersAndBurners) {
      const wallet = new ethers.Wallet(mb);
      const balance = await provider.getBalance(wallet.address);
      const differenceToAdd = desiredBalance.sub(balance);
      if (differenceToAdd.lte(0)) {
        console.log(
          `Wallet ${wallet.address} balance is fine ${ethers.utils.formatEther(
            balance
          )}`
        );
      } else {
        // convert a currency unit from wei to ether
        const balanceInEth = ethers.utils.formatEther(differenceToAdd);
        console.log(`Adding ${balanceInEth} ETH to ${wallet.address}`);
        await (
          await moneyWallet.sendTransaction({
            to: wallet.address,
            value: differenceToAdd,
          })
        ).wait();
      }
      if (nrOfWallets === 0) break;
      nrOfWallets--;
    }
  });

/**
 *  Print the balances of all the wallets
 *  e.g: npx hardhat printBalances --network arbitrumGoerli
 */
task('printBalances', 'Print all the minter/burner wallets balances').setAction(
  async (_, { ethers, network }) => {
    if (!MINTERS_AND_BURNERS)
      throw new Error('MINTERS_AND_BURNERS is missing, aborting');
    if (!PRIVATE_KEY)
      throw new Error(
        'PRIVATE_KEY is missing, aborting, need wallet with GoeETH to send from'
      );

    const provider = new ethers.providers.JsonRpcProvider(ARBITRUM_GOERLI_URL); // THIS is hardcoded
    const mintersAndBurners = JSON.parse(MINTERS_AND_BURNERS);

    for (const mb of mintersAndBurners) {
      const wallet = new ethers.Wallet(mb);
      const balance = await provider.getBalance(wallet.address);
      console.log(
        `Wallet ${wallet.address} balance is ${ethers.utils.formatEther(
          balance
        )}`
      );
    }
  }
);

/**
 *  Return funds from wallets by range. E.g: from: 0, to: 5 will return the funds from wallet 1-5
 *  e.g: npx hardhat returnFunds --from 0 --to 5 --network arbitrumGoerli
 */
task('returnFunds', 'Print all the minter/burner wallets balances')
  // We have 30 wallets, but maybe you want to test 3
  .addParam('from', 'From wallet index, 0 based')
  .addParam('to', 'To wallet index, 0 based')
  .setAction(async ({ from, to }, { ethers, network }) => {
    const fromIndex = parseInt(from);
    const toIndex = parseInt(to);
    if (!MINTERS_AND_BURNERS)
      throw new Error('MINTERS_AND_BURNERS is missing, aborting');
    if (!PRIVATE_KEY)
      throw new Error(
        'PRIVATE_KEY is missing, aborting, need wallet with GoeETH to send from'
      );

    const provider = new ethers.providers.JsonRpcProvider(ARBITRUM_GOERLI_URL); // THIS is hardcoded
    const mintersAndBurners = JSON.parse(MINTERS_AND_BURNERS);

    const moneyWallet = new ethers.Wallet(PRIVATE_KEY, provider);

    for (let i = fromIndex; i < toIndex; i++) {
      const privKey = mintersAndBurners[i];
      const wallet = new ethers.Wallet(privKey, provider);
      const balance = await provider.getBalance(wallet.address);

      const tx = {
        to: moneyWallet.address,
        from: wallet.address,
        value: balance,
        gasLimit: BigNumber.from(21000),
      };

      const gasPrice = await provider.getGasPrice();
      const gasLimit = await provider.estimateGas(tx);

      const transactionFee = gasPrice.mul(gasLimit);

      const updatedTx = {
        ...tx,
        value: BigNumber.from(tx.value!).sub(transactionFee),
        maxFeePerGas: gasPrice,
        maxPriorityFeePerGas: gasPrice,
      };

      try {
        await (await wallet.sendTransaction(updatedTx)).wait(1);
        console.log(
          `Sent: Wallet ${wallet.address} balance is ${ethers.utils.formatEther(
            balance
          )}, fee ${ethers.utils.formatEther(transactionFee)}`
        );
      } catch (err) {
        console.error('Failed');
      }
    }
  });
