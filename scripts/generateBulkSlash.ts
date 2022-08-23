import fs from 'fs';
import { ethers, getNamedAccounts } from 'hardhat';

const FILE_NAME = 'stake_duplicates.csv';

const readAddresses = (fileName: string) => {
  return new Promise<string[]>((resolve) => {
    // This file does not exist in github, add with list of users
    let file;
    try {
      file = fs.readFileSync('./scripts/' + fileName);
    } catch (err) {
      // Here you get the error when the file was not found,
      // but you also get any other error
      console.error(`Add a csv file named: ${fileName}, then run again`);
      return;
    }
    const userAccounts: string[] = [];
    file
      .toString()
      .split('\n')
      .slice(1) // Remove first line of headers
      .map(async (element) => {
        if (element.length > 0 && ethers.utils.isAddress(element)) {
          userAccounts.push(element);
        } else {
          console.log('Skipping: ', element);
        }
      });
    resolve(userAccounts);
  });
};

async function main() {
  const { deployer } = await getNamedAccounts();

  const users = await readAddresses(FILE_NAME);

  const goldenToken = (await ethers.getContract('GoldenToken')).connect(
    await ethers.getSigner(deployer)
  );

  const theAmount = BigInt('10000000000000000000');

  const toSlash: { addr: string; amount: string }[] = [];
  let totalAmount = BigInt('0');
  for (let i = 0; i < users.length; i++) {
    const stakeOf = await goldenToken.stakeOf(users[i]);
    console.log(`Stake of ${users[i]} is ${stakeOf.toString()}`);
    const amt = stakeOf.sub(theAmount);
    toSlash.push({
      addr: users[i],
      amount: amt.toString(),
    });
    totalAmount = totalAmount + BigInt(amt);
  }

  console.log(
    `Done: len is ${toSlash.length}, totalAmount is ${totalAmount.toString()}`
  );

  try {
    // This will fail as we aren't the owner, but we need the generated data parameter.
    await goldenToken.bulkSlash(toSlash, totalAmount);
  } catch (err: any) {
    // Use this data to create gnosis tx.
    console.log('slash data:\n' + err.transaction.data);
  }
}

main();
