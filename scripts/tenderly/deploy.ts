import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

import fs from 'fs';
import axios from 'axios';
import { ethers } from 'hardhat';
import { INITIAL_SUPPLY } from '../../deploy/3_GoldenToken';
import {
  geTenderlyAccessKey,
  getTenderlyForkId,
  getTenderlyProject,
  getTenderlyUser,
} from '../../utils/env.utils';

async function main() {
  const forkId = getTenderlyForkId(true);
  const response = await axios.get(
    `https://api.tenderly.co/api/v1/account/${getTenderlyUser()}/project/${getTenderlyProject()}/fork/${forkId}`,
    {
      headers: {
        'X-Access-Key': geTenderlyAccessKey(),
      },
    }
  );
  const accounts = response.data.simulation_fork.accounts;
  fs.writeFileSync(
    path.join(__dirname, 'accounts.json'),
    JSON.stringify(accounts)
  );

  const walletAddress = Object.keys(accounts);

  const provider = new ethers.providers.JsonRpcProvider(
    `https://rpc.tenderly.co/fork/${forkId}`
  );
  const owner = new ethers.Wallet(accounts[walletAddress[0]], provider);

  const params = [
    walletAddress,
    ethers.utils.hexValue(ethers.utils.parseUnits('10', 'ether').toHexString()),
  ];
  await provider.send('tenderly_addBalance', params);

  // Deploy
  const Golden = (await ethers.getContractFactory('GoldenToken')).connect(
    owner
  );
  const golden = await Golden.deploy();

  await golden.deployed();
  await golden.initialize(INITIAL_SUPPLY);

  process.stdout.write(golden.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
