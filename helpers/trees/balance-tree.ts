import { MerkleTree } from './merkle-tree';
import { BigNumber, utils } from 'ethers';

// Forked from Uniswap: https://github.com/Uniswap/merkle-distributor

export class BalanceTree {
  private readonly tree: MerkleTree;
  constructor(
    balances: { account: string; amount: BigNumber; index?: number }[],
    customIndex = false
  ) {
    if (customIndex) {
      this.tree = new MerkleTree(
        balances.map(({ account, amount, index }) => {
          if (typeof index !== 'undefined') {
            return BalanceTree.toNode(index, account, amount);
          }
          throw new Error(
            `BalanceTree: instantiated with custom index but index is missing`
          );
        })
      );
    } else {
      this.tree = new MerkleTree(
        balances.map(({ account, amount }, index) => {
          return BalanceTree.toNode(index, account, amount);
        })
      );
    }
  }

  public static verifyProof(
    index: number | BigNumber,
    account: string,
    amount: BigNumber,
    proof: Buffer[],
    root: Buffer
  ): boolean {
    let pair = BalanceTree.toNode(index, account, amount);
    for (const item of proof) {
      pair = MerkleTree.combinedHash(pair, item);
    }

    return pair.equals(root);
  }

  // keccak256(abi.encode(index, account, amount))
  public static toNode(
    index: number | BigNumber,
    account: string,
    amount: BigNumber
  ): Buffer {
    return Buffer.from(
      utils
        .solidityKeccak256(
          ['uint256', 'address', 'uint256'],
          [index, account, amount]
        )
        .substr(2),
      'hex'
    );
  }

  public getHexRoot(): string {
    return this.tree.getHexRoot();
  }

  // returns the hex bytes32 values of the proof
  public getProof(
    index: number | BigNumber,
    account: string,
    amount: BigNumber
  ): string[] {
    return this.tree.getHexProof(BalanceTree.toNode(index, account, amount));
  }
}
