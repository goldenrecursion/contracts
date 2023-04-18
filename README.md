# Golden.xyz

Contracts to support Golden's decentralized protocol for knowledge. These contracts are in the R&D phase. [Learn More.](https://docs.golden.xyz/)

# Contributions

Contributions are welcomed and encouraged! You can contribute by:

- Creating an issue
- Opening a PR. If you are opening a PR, it is a good idea to first join our [Discord](https://discord.com/invite/golden-protocol) and discuss your idea!

## Development

1. `yarn install`
2. `yarn compile`
3. Run tests `yarn test`

## Upgrades

**TEST!** on a local or alternative nodes first to make sure upgrade works from the prev state to new one.
Upgrades are dealt with automatically, just make a change in the contract and deploy, hardhat-deploy plugin will take care of the upgrade.

## Interacting with deployed contract

Once the contract is deployed you can interact with it. <br />These commands will use the address set in the `hardhat.config.ts` as the signer. <br />By default it's the same address that deployed the contract (owner).

### Schema governance proposals

#### `addPredicate`

```
npx hardhat addPredicate --name Test --description "Test hardhat task predicate proposal" --object-type string --network sepolia
```

#### `updatePredicate`

```
npx hardhat updatePredicate --id "bb463b8b-b76c-4f6a-9726-65ab5730b63c" --description "Updated description" --network sepolia
```

OR

```
npx hardhat updatePredicate --cid "bafyreihen3snj4vfkagjssdeiahx4sjaq3ok5sy5t2nmfsrvyg6jah4dkx" --description "Updated description" --network sepolia
```

#### `removePredicate`

```
npx hardhat removePredicate --id "bb463b8b-b76c-4f6a-9726-65ab5730b63c" --network sepolia
```

OR

```
npx hardhat removePredicate --cid "bafyreihen3snj4vfkagjssdeiahx4sjaq3ok5sy5t2nmfsrvyg6jah4dkx" --network sepolia
```
