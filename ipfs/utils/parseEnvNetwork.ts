export const parseEnvNetwork = (network: string) => {
  const [id, url] = network.split(/:(.*)/s) as [string, string];
  return [Number.parseInt(id), url] as const;
};