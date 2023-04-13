import { task } from 'hardhat/config';
import { getContract, getProvider } from '../utils';
import { getOwner } from '../utils/env.utils';

task(`updateMerkleRoot`, `Update Merkle root`)
  .addParam(`root`, `Bytes32 Merkle root`)
  .setAction(async (param, hre) => {
    const { ethers, network } = hre;
    const AirdropV1 = await getContract(ethers, network, 'GoldenAirdropV1');
    const owner = new ethers.Wallet(getOwner(), getProvider(ethers, network));

    const airdropV1 = AirdropV1.connect(owner);
    const isOwner = (await airdropV1.owner()) === owner.address;

    if (!isOwner) {
      throw new Error(
        `Address=${
          owner.address
        } is not an owner. Valid owner=${await airdropV1.owner()}`
      );
    }

    const receipt = await airdropV1.updateMerkleRoot(param.root);

    console.log(receipt);
  });
