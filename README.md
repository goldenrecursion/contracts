# Golden Smart Contracts

- Managed with [Hardhat](https://hardhat.org/getting-started/) and [Hardhat Deploy](https://github.com/wighawag/hardhat-deploy)

## Development

First install dependencies

```
yarn
```

To reset your types and hardhat cache

```
yarn compile
```

For local development you shouldn't need anything else.

## Test

Run tests with

```
yarn test
```

In order to deploy to a testnet you'll need to setup some env variables.
Copy `.env.example` to `.env` and supply necessary variables as follows:

#### `ETHERSCAN_API_KEY`

You'll need to signup for an account here: https://etherscan.io/register and then get your api key here: https://etherscan.io/myapikey

#### `[SEPOLIA|GOERLI|POLYGON|MUMBAI|ETC]_URL`

This is a 3rd party node provider RPC url. You can set up an account at https://Alchemy.io.

#### `PRIVATE_KEY`

This is the private key to an account you want to use for deploy.

#### `REPORT_GAS`

This boolean determines whether to calculate gas costs for deployment of contracts.

##### `Deploy Sepolia: `

Latest deployed contracts details are stored in `deployments/` for each network that has been deployed to. The main file of interest is the `*.json` of a contract which has it's address.
To deploy to Sepolia testnet run:

```
npx hardhat deploy --network sepolia
```

To get the deployed contract verified with etherscan run

```
npx hardhat verify <contract_address> --network sepolia
```

To get the deployed contract with constructor arguments verified with etherscan run

```
npx hardhat verify --constructor-args arguments.js <contract_address> --network sepolia
```

where arguments.js is just a file returning an array of arguments `module.exports = ["0xabcdef", 51];`

##### `Deploy Arbitrum Goerli: `

_Only for NFT contracts_
Same commands but with network: arbitrumGoerli

## GoldenToken

Guide to get verified for thumbnail and other metadata [here](https://info.etherscan.com/token-update-guide/)

## Upgrades

**TEST!** on a local or alternative nodes first to make sure upgrade works from the prev state to new one.
Upgrades are dealt with automatically, just make a change in the contract and deploy, hardhat-deploy plugin will take care of the upgrade.

## Interacting with deployed contract

Once the contract is deployed you can interact with it. <br />These commands will use the address set in the `hardhat.config.ts` as the signer. <br />By default it's the same address that deployed the contract (owner).

## Staking

_These tasks will only work if your deployer owns the contract_

#### `sendToken`

```
npx hardhat sendToken --network hardhat --to 0xB9563F6aEd9a3986Fe0e4B57cA1Af40dBD7F7720 --amount 10
```

#### `slash`

```
npx hardhat slash --network hardhat --account 0xB9563F6aEd9a3986Fe0e4B57cA1Af40dBD7F7720 --amount 10
```

#### `stake`

```
npx hardhat stake --network hardhat --amount 10
```

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
