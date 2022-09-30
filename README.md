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

To deploy to Goerli testnet run

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

Upgrades are dealt with automatically, just make a change in the contract and deploy, hardhat-deploy plugin will take care of the upgrade. **TEST** on a local node first to make sure nothing breaks.

## Interacting with deployed contract

Once the token is deployed you can interact with it. These commands will use the address set in the `hardhat.config.ts` as the signer. So by default it's the same address that deployed the contract (owner).

### Staking

_!! These tasks will only work on local node where your deployer owns the contract !!_

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

_!! The following tasks are for goerli (and mainnet later), since ownership is transfered to
gnosis safe we can't sign transactions.
<br />These tasks will instead generate the data
that you can pass to a gnosis transaction with custom data.
<br />`NOTE: Your MM wallet must be one of our gnosis owners`
<br />(Replace 0x0 with the needed account)
<br />Go to our [gnosis safe](https://gnosis-safe.io/app/gor:0xF3dC74fDB8b3F53Ab11889bc6F27D9a5654bCBb4/home)
and create a new `Contract Interaction` transaction and togle `Use custom data (hex encoded)`.
<br />Use values:<br /> - Our contract address: 0x6B9a039f98eB5B613Bd1783AE728Bd04789ab5B8, <br /> - value: 0, <br /> - data: {`the hex data you copy from the task`}.<br />Then press `review` then `submit` and confirm with MM.
!!_

#### `stakeForUser`

```
npx hardhat --network goerli stakeForUser --account 0x0000000000000000000000000000000000000000
```

#### `slashForUser`

```
npx hardhat --network goerli slashForUser --account 0x0000000000000000000000000000000000000000
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
