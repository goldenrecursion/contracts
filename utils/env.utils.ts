const getEnvValue = (key: string, throwOnMissing = true): string => {
  const value = process.env[key];

  if (typeof value === 'undefined' && throwOnMissing) {
    throw new Error(`Missing ENV key - ${key}`);
  }

  return value as string;
};

export const getOwner = (): string => getEnvValue('OWNER_PRIVATE_KEY');

export const getMinter = (): string => getEnvValue('MINTER_PRIVATE_KEY');

export const getBurner = (): string => getEnvValue('BURNER_PRIVATE_KEY');

export const getGnosisWallet = (): string =>
  getEnvValue('GNOSIS_WALLET_PRIVATE_KEY');

export const getEtherScanApiKey = (throwOnMissing = false): string =>
  getEnvValue('ETHERSCAN_API_KEY', throwOnMissing);

export const getPolyScanApiKey = (throwOnMissing = false): string =>
  getEnvValue('POLYSCAN_API_KEY', throwOnMissing);

export const getArbitrumScanApiKey = (throwOnMissing = false): string =>
  getEnvValue('ARBISCAN_API_KEY', throwOnMissing);

export const getTenderlyUser = (throwOnMissing = false): string =>
  getEnvValue('TENDERLY_USER', throwOnMissing);

export const geTenderlyAccessKey = (throwOnMissing = false): string =>
  getEnvValue('TENDERLY_ACCESS_KEY', throwOnMissing);

export const getTenderlyProject = (throwOnMissing = false): string =>
  getEnvValue('TENDERLY_PROJECT', throwOnMissing);

export const getTenderlyForkId = (throwOnMissing = false): string =>
  getEnvValue('TENDERLY_FORK_ID', throwOnMissing);

export const getTenderlyForkChainId = (throwOnMissing = false): number =>
  parseInt(getEnvValue('TENDERLY_FORK_CHAIN_ID', throwOnMissing) ?? '5010');
