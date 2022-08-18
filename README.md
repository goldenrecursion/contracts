# Golden Smart Contracts

- Managed with [Hardhat](https://hardhat.org/getting-started/) and [Hardhat Deploy](https://github.com/wighawag/hardhat-deploy)

## Development

First install dependencies

```
yarn
```

For local development you shouldn't need anything else.

Run tests with

```
yarn test
```

To test deploy to local hardhat network run

```
yarn deploy
```

In order to deploy to a testnet (i.e.: Rinkeby) you'll need to setup some env variables.
Copy `.env.example` to your `.env` and add all necessary variables.

#### `ETHERSCAN_API_KEY`

You'll need to signup for an account here: https://etherscan.io/register and then get your api key here: https://etherscan.io/myapikey

#### `RINKEBY_URL`

This is a 3rd party node provider url. We have an account set up at Alchemy.io. You can use the one from the `.env.example` or set to any other one you'd like.

#### `PRIVATE_KEY`

This is the private key to an account you want to use for deploy. `.env.example` has a key to our Rinkeby testnet account `0xB9563F6aEd9a3986Fe0e4B57cA1Af40dBD7F7720`.

`!!! NOTE: Never share or commit a private key to an account on the mainet with real money in it !!!`

To deploy to Rinkeby testnet run

```
npx hardhat deploy --network goerli
```

Latest deployed contracts details are stored in `deployments/` for each network that has been deployed to. The main file of interest is the `*.json` of a contract which has it's ethereum address.

To get the deployed contract verified run

```
npx hardhat etherscan-verify --network goerli
```

## GoldenToken

Guide to get verified for thumbnail and other metadata [here](https://info.etherscan.com/token-update-guide/)

## Upgrades

To create a new GoldenToken version just copy the latest version into GoldenTokenV<number>
Add a script to deploy for upgrade, see the last upgrade.

## Interacting with deployed contract

Once the token is deployed you can interact with it. These commands will use the address set in the `hardhat.config.ts` as the signer. So by default it's the same address that deployed the contract (owner).

### Staking

#### `sendToken`

```
npx hardhat sendToken --network goerli --to 0xB9563F6aEd9a3986Fe0e4B57cA1Af40dBD7F7720 --amount 10
```

#### `slash`

```
npx hardhat slash --network goerli --account 0xB9563F6aEd9a3986Fe0e4B57cA1Af40dBD7F7720 --amount 10
```

#### `stake`

```
npx hardhat stake --network goerli --amount 10
```

### Schema governance proposals

#### `addPredicate`

```
npx hardhat addPredicate --name Test --description "Test hardhat task predicate proposal" --object-type string --network goerli
```

#### `updatePredicate`

```
npx hardhat updatePredicate --id "bb463b8b-b76c-4f6a-9726-65ab5730b63c" --description "Updated description" --network goerli
```

OR

```
npx hardhat updatePredicate --cid "bafyreihen3snj4vfkagjssdeiahx4sjaq3ok5sy5t2nmfsrvyg6jah4dkx" --description "Updated description" --network goerli
```

#### `removePredicate`

```
npx hardhat removePredicate --id "bb463b8b-b76c-4f6a-9726-65ab5730b63c" --network goerli
```

OR

```
npx hardhat removePredicate --cid "bafyreihen3snj4vfkagjssdeiahx4sjaq3ok5sy5t2nmfsrvyg6jah4dkx" --network goerli
```
