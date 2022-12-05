const getEnvValue = (key: string, throwOnMissing = true): string => {
  const value = process.env[key];

  if (!value && throwOnMissing) {
    throw new Error(`Missing ENV key - ${key}`);
  }

  return value as string;
};

export const getOwner = (): string => getEnvValue('OWNER_PRIVATE_KEY');
export const getMinter = (): string => getEnvValue('MINTER_PRIVATE_KEY');
export const getBurner = (): string => getEnvValue('BURNER_PRIVATE_KEY');
export const getGnosisWallet = (): string =>
  getEnvValue('GNOSIS_WALLET_PRIVATE_KEY');
