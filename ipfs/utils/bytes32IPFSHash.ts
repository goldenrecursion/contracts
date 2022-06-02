import { base16 } from 'multiformats/bases/base16';
import { CID } from 'multiformats/cid';

export const cidToBytes32 = (cid: CID) => {
  const formattedCid = cid
    .toV1() // Ensure we're dealing with v1 CID
    .toString(base16)
    .replace(/^f01711220/, '0x');

  return formattedCid;
};

export const bytes32ToCid = (bytes32Hex: string) => {
  return CID.parse(bytes32Hex.replace(/^0x/, 'f01711220'), base16).toString();
};
