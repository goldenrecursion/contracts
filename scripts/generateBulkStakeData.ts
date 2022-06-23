import fs from 'fs'
import { ethers, deployments, getNamedAccounts } from 'hardhat'
import { INITIAL_SUPPLY } from '../deploy/GoldenToken'

const readPrestakeUsers = () => {
  return new Promise<string[]>((resolve) => {
    // This file does not exist in github, add with list of users
    const file = fs.readFileSync('./scripts/accounts.csv') 
    const userAccounts: string[] = []
    file
      .toString()
      .split('\n')
      .slice(1) // Remove first line of headers
      .map(async (element) => {
        if (element.length > 0 && ethers.utils.isAddress(element)) {
          userAccounts.push(element)
        } else {
          console.log('Skipping: ', element)
        }
      })
    resolve(userAccounts)
  })

}

// const appendBulkDatas = (content: any) => {
//   return new Promise<void>((resolve) => {
//     fs.appendFile('./scripts/prestake_users.txt', content + '\n', err => {
//       if (err) {
//         console.error(err)
//       }
//       // file written successfully
//       resolve()
//     })
//   })
// }

async function main() {

  const { deploy } = deployments
  const { deployer } = await getNamedAccounts()

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
  })
  const goldenToken = (await ethers.getContract('GoldenToken')).connect(
    await ethers.getSigner(deployer)
  )
  let amount = BigInt('10000000000000000000')
  const chunkSize = 500
  let checkCount = 0 // in case we skip some or make changes that break the total iteration
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

    console.log('BulkStake Generating: ', batchCount, toStake.length, totalAmount.toString() + '\n')
    console.log('DONE', toStake.length, toStake[0], toStake[toStake.length - 1])

    try {
      const tx = await goldenToken.bulkStake(toStake, totalAmount)
      console.log(tx)
    } catch (err: any) {
      // await appendBulkDatas('Batch nr: ' + batchCount + '\n' + err.transaction.data) // Dangerous! uncomment to use.
    }

  }

  if (checkCount != users.length) throw new Error('checkCount != users.length')

}

main()
