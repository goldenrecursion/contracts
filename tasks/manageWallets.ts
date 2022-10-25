import { BigNumber } from 'ethers';
import { task } from 'hardhat/config';
const MINTERS_AND_BURNERS = process.env.MINTERS_AND_BURNERS;
const MONEY_WALLET = process.env.MONEY_WALLET;
const GOERLI_URL = process.env.GOERLI_URL;
const SEPOLIA_URL = process.env.SEPOLIA_URL;

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
 *  These tasks will only work on local node where your deployer owns the contract
 */
task(
  'fundWallets',
  'Fund all the wallets up to hardcoded amount, not a param just in case, wei can be confusing'
)
  .addParam('nr', 'Number of wallets to fund')
  .setAction(async ({ nr }, { ethers, network }) => {
    let nrOfWallets = parseInt(nr)
    const desiredBalance = BigNumber.from('200000000000000000'); // 0.2 ETH
    if (!MINTERS_AND_BURNERS)
      throw new Error('MINTERS_AND_BURNERS is missing, aborting');
    if (!MONEY_WALLET)
      throw new Error(
        'MONEY_WALLET is missing, aborting, need wallet with GoeETH to send from'
      );

    const provider = new ethers.providers.JsonRpcProvider(SEPOLIA_URL); // THIS is hardcoded

    const mintersAndBurners = JSON.parse(MINTERS_AND_BURNERS);

    const moneyWallet = new ethers.Wallet(MONEY_WALLET, provider);

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
        ).wait(1);
      }
      if (nrOfWallets == 0) break;
      nrOfWallets--;
    }
  });
