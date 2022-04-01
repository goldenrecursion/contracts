# Golden Smart Contracts

- Managed with [Hardhat](https://hardhat.org/getting-started/) and [Hardhat Deploy](https://github.com/wighawag/hardhat-deploy)

## Development

Fist install all packages

```
npx install
```

For local development you shouldn't need anything else.

Run tests with

```
npx hardhat test
```

To test deploy to local hardhat network run

```
nps hardhat deploy
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
npx hardhat deploy --network rinkeby
```

Latest deployed contract details are stored in `deployments/rinkeby/GoldenToken.json`.

To get the deployed contract verified run

```
npx hardhat etherscan-verify --network rinkeby
```

## GoldenToken

Guide to get verified for thumbnail and other metadata [here](https://info.etherscan.com/token-update-guide/)

## Interacting with deployed contract

Once the token is deployed you can interact with it. These commands will use the address set in the `hardhat.config.ts` as the signer. So by default it's the same address that deployed the contract (owner).

#### `sendToken`

```
npx hardhat sendToken --network rinkeby --to 0xB9563F6aEd9a3986Fe0e4B57cA1Af40dBD7F7720 --amount 10
```

#### `slash`

```
npx hardhat slash --network rinkeby --account 0xB9563F6aEd9a3986Fe0e4B57cA1Af40dBD7F7720 --amount 10
```

#### `stake`

```
npx hardhat stake --network rinkeby --amount 10
```
