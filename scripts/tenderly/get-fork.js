require('dotenv').config();
const axios = require('axios');
const {
  TENDERLY_USER,
  TENDERLY_PROJECT,
  TENDERLY_ACCESS_KEY,
  FORK_NAME,
} = process.env;

if (!FORK_NAME) {
    throw new Error(`Missing env: FORK_NAME`);
}

// return forks from project
const TENDERLY_FORK_ACCESS_URL = `https://api.tenderly.co/api/v2/project/${TENDERLY_PROJECT}/forks`;

axios
  .get(TENDERLY_FORK_ACCESS_URL, {
    headers: {
      'X-Access-Key': TENDERLY_ACCESS_KEY,
    },
  })
  .then((res) => {
    try {
        var fetchedForks = [];
        for(let i = 0; i < res.data.length; i++){
            fetchedForks.push(res.data[i].id,res.data[i].name);
        }
        console.log(fetchedForks);
        return process.stdout.write(fetchedForks[0]);
    } catch (e) {
        console.error(e);
    }
  })
  .catch(process.stderr.write);