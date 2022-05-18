import { task } from 'hardhat/config';

const done = (hash: string, networkName: string) => {
  console.log('DONE');
  console.log(`https://${networkName}.etherscan.io/tx/${hash}`);
};

task('addPredicate', 'Add predicate IPFS hash to contract')
  .addParam('hash', 'The IPFS hash of the predicate')
  .setAction(async ({ hash }, { ethers, getNamedAccounts, network }) => {
    const { deployer } = await getNamedAccounts();
    const contract = await ethers.getContract('GoldenSchema');
    const contractSigned = contract.connect(await ethers.getSigner(deployer));
    const { hash: _transactionHash } = await contractSigned.addPredicate(hash);
    done(_transactionHash, network.name);
  });
