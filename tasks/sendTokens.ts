import { task } from "hardhat/config";

const done = (hash: string) => {
  console.log("DONE");
  console.log(`https://rinkeby.etherscan.io/tx/${hash}`);
};

task("sendTokens", "Sends tokens from owner to address")
  .addParam("to", "The receiver account's address")
  .addParam("amount", "The amount of tokens to send")
  .setAction(async ({ to, amount }, { ethers, getNamedAccounts }) => {
    const { deployer } = await getNamedAccounts();
    const contract = await ethers.getContract("GoldenToken");
    const contractSigned = contract.connect(await ethers.getSigner(deployer));
    const _amount = ethers.utils.parseUnits(amount.toString(), 18);
    const { hash } = await contractSigned.transfer(to, _amount);
    done(hash);
  });

task("stake", "Stake tokens as owner")
  .addParam("amount", "The amount of tokens to send")
  .setAction(async ({ amount }, { ethers, getNamedAccounts }) => {
    const { deployer } = await getNamedAccounts();
    const contract = await ethers.getContract("GoldenToken");
    const contractSigned = contract.connect(await ethers.getSigner(deployer));
    const _amount = ethers.utils.parseUnits(amount.toString(), 18);
    const { hash } = await contractSigned.stake(_amount);
    done(hash);
  });

task("slash", "Slash tokens from account")
  .addParam("account", "The account's address to slash")
  .addParam("amount", "The amount of tokens to slash")
  .setAction(async ({ account, amount }, { ethers, getNamedAccounts }) => {
    const { deployer } = await getNamedAccounts();
    const contract = await ethers.getContract("GoldenToken");
    const contractSigned = contract.connect(await ethers.getSigner(deployer));
    const _amount = ethers.utils.parseUnits(amount.toString(), 18);
    const { hash } = await contractSigned.slash(account, _amount);
    done(hash);
  });
