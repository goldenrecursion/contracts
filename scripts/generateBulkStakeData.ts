import { ethers } from 'hardhat'

// import goldenTokenAbi from '../abis/GoldenTokenGoerli.json'

const toStake: { addr: string, amount: string }[] = [
  {
    addr: '0x6B9a039f98eB5B613Bd1783AE728Bd04789ab5B8',
    amount: '10000000000000000000'
  }
]
// const GOLDEN_TOKEN_GOERLI = '0x6B9a039f98eB5B613Bd1783AE728Bd04789ab5B8' //Prod Goldeb
const GOLDEN_TOKEN_LOCAL = '0xc5a5C42992dECbae36851359345FE25997F5C42d'


async function main() {

  // const provider = ethers.providers.getDefaultProvider()
  // const address = GOLDEN_TOKEN_LOCAL
  const Token = await ethers.getContractFactory("GoldenToken")
  const token = await Token.attach(GOLDEN_TOKEN_LOCAL)

  // const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider)

  // const contract = new ethers.Contract(address, goldenTokenAbi, wallet)

  let totalAmount = BigInt('10000000000000000000')

  const tx = await token.bulkStake(toStake, totalAmount)

  console.log('DONE', tx.data)
  console.log('This should have stake', (await token.stakeOf('0x6B9a039f98eB5B613Bd1783AE728Bd04789ab5B8')).toString())
  console.log('This should NOT have stake', (await token.stakeOf('0xc5a5C42992dECbae36851359345FE25997F5C42d')).toString())

}


main()
