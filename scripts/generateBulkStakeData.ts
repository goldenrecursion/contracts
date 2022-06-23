import fs from 'fs';
import { ethers, deployments, getNamedAccounts } from 'hardhat'
import { INITIAL_SUPPLY } from '../deploy/GoldenToken';

const readPrestakeUsers = () => {
  return new Promise<string[]>((resolve) => {
    const file = fs.readFileSync('./scripts/sqllab_testnet_airdrop_list_20220623T190541.csv');
    const userAccounts: string[] = []
    file
      .toString()
      .split('\n')
      .slice(1) // Remove first line of headers
      .map(async (line) => {
        const elements = line.split(',')
        for (let element of elements) {
          if (element.length > 0 && ethers.utils.isAddress(element)) {
            userAccounts.push(element)
          } else {
            console.log('Skipping: ', element)
          }
        }
      });
    resolve(userAccounts)
  })

}

const appendBulkDatas = (content: any) => {
  return new Promise<void>((resolve) => {
    fs.appendFile('./scripts/prestake_users.txt', content + '\n', err => {
      if (err) {
        console.error(err);
      }
      // file written successfully
      resolve()
    });
  })

}

async function main() {

  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const users = await readPrestakeUsers()

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
  let amount = BigInt('10000000000000000000')
  const chunkSize = 500
  let checkCount = 0
  let batchCount = 0
  for (let i = 0; i < users.length; i += 500) {
    const toStake: { addr: string, amount: string }[] = []
    const chunk = users.slice(i, i + chunkSize)
    let totalAmount = BigInt('0')
    batchCount++
    for (let i = 0; i < chunk.length; i++) {
      checkCount++
      toStake.push({
        addr: chunk[i],
        amount: amount.toString()
      })
      totalAmount += amount
    }
    console.log('DONE', toStake.length, toStake[0], toStake[toStake.length - 1])

    try {
      console.log('BulkStake Generating: ', batchCount, toStake.length, totalAmount.toString())
      const tx = await goldenToken.bulkStake(toStake, totalAmount)
      console.log(tx)
    } catch (err: any) {
      await appendBulkDatas('Batch nr: ' + batchCount + '\n' + err.transaction.data)
    }

  }

  if (checkCount != users.length) throw new Error('checkCount != users.length')

  // console.log('This should have stake', (await goldenToken.stakeOf('0x6B9a039f98eB5B613Bd1783AE728Bd04789ab5B8')).toString())
  // console.log('This should NOT have stake', (await goldenToken.stakeOf('0xc5a5C42992dECbae36851359345FE25997F5C42d')).toString())

}

main()
