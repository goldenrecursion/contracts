import fs from 'fs';
import { ethers, deployments, getNamedAccounts } from 'hardhat';
import { INITIAL_SUPPLY } from '../deploy/3_GoldenToken';

const CHUNK_SIZE = 500;

const readPrestakeUsers = () => {
  return new Promise<string[]>((resolve) => {
    // This file does not exist in github, add with list of users
    const file = fs.readFileSync('./scripts/accounts.csv');
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

const appendBulkDatas = (content: any) => {
  return new Promise<void>((resolve) => {
    fs.appendFile('./scripts/prestake_users.txt', content + '\n', (err) => {
      if (err) {
        console.error(err);
      }
      // file written successfully
      resolve();
    });
  });
};

async function main() {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const users = await readPrestakeUsers();

  await deploy('GoldenToken', {
    log: true,
    from: deployer,
    proxy: {
      proxyContract: 'OpenZeppelinTransparentProxy',
      execute: {
        methodName: 'initialize',
        args: [INITIAL_SUPPLY],
      },
    },
  });
  const goldenToken = (await ethers.getContract('GoldenToken')).connect(
    await ethers.getSigner(deployer)
  );
  const amount = BigInt('10000000000000000000');

  let checkCount = 0; // in case we skip some or make changes that break the total iteration
  let batchCount = 0;

  for (let i = 0; i < users.length; i += CHUNK_SIZE) {
    const toStake: { addr: string; amount: string }[] = [];
    const chunk = users.slice(i, i + CHUNK_SIZE);
    let totalAmount = BigInt('0');
    batchCount++;
    for (let i = 0; i < chunk.length; i++) {
      checkCount++;
      toStake.push({
        addr: chunk[i],
        amount: amount.toString(),
      });
      totalAmount += amount;
    }

    console.log(
      'BulkStake Generating: ',
      batchCount,
      toStake.length,
      totalAmount.toString() + '\n'
    );
    console.log(
      'DONE',
      toStake.length,
      toStake[0],
      toStake[toStake.length - 1]
    );

    try {
      // This will fail as we aren't the owner, but we need the generated data parameter.
      await goldenToken.bulkStake(toStake, totalAmount);
    } catch (err: any) {
      await appendBulkDatas(
        'Batch nr: ' + batchCount + '\n' + err.transaction.data
      );
    }
  }

  if (checkCount !== users.length)
    throw new Error('checkCount != users.length');
}

main();
