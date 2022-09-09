import { CID, create } from 'ipfs-http-client';
import { config } from 'dotenv';

config();

// A format constraint defines a regex that must be matched
// by the object value associated with the predicate.
type FormatPredicateConstraint = {
  type: 'format';
  regex_pattern: string;
  allow?: boolean;
};

// A predicate constraint can specify what is the target of the
// restrictions (the subject or object of the triple).
export enum PredicateConstraintTarget {
  Subject = 'subject',
  Object = 'object',
}

// A predicate object rule specifies a statement that must be true for the predicate
// constraint target (subject or object of the triple).
type PredicateObjectPredicateConstraintRule = {
  predicate_id: string;
  object_entity_id?: string;
  object_value?: string;
};

// A predicate object constraint specifies that the predicate constraint target (subject or object of the triple)
// must have at least one of statements defined in the rules constraint field.
type PredicateObjectPredicateConstraint = {
  type: 'predicate_object';
  target: PredicateConstraintTarget;
  rules: ReadonlyArray<PredicateObjectPredicateConstraintRule>;
};

type EnumPredicateConstraintElement = {
  object_entity_id?: string;
  object_value?: string;
};

// An enum constraint specifies that the predicate constraint target (subject or object of the triple)
// must have as object one of the objects defined in the elements constraint field.
type EnumPredicateConstraint = {
  type: 'enum';
  target: PredicateConstraintTarget;
  elements: ReadonlyArray<EnumPredicateConstraintElement>;
};

// Predicate constraints are restrictions on how the predicates can
// be used in triples.
type PredicateConstraint =
  | FormatPredicateConstraint
  | PredicateObjectPredicateConstraint
  | EnumPredicateConstraint;

// Citation requirement which can be one of the following
// - mandatory: citations are required
// - optional: citations are optional
// - not_allowed: citation are not allowed
export enum CitationRequirement {
  Mandatory = 'mandatory',
  Optional = 'optional',
  NotAllowed = 'not_allowed',
}

export type IPFSPredicateBase = {
  // Predicate ID
  id: string;
  // Predicate Name
  name: string;
  // Type of the object which can be one of the following:
  // entity, integer, float, decimal, string, anyURI, dateTime, date
  object_type: string;
  // Predicate Description
  description: string;
  // Predicate label used as tooltip
  label: string;
  // Citation requirement. See CitationRequirement type for doc.
  citation_requirement: CitationRequirement;
  // Predicate constraints. See PredicateConstraint type for doc.
  constraints?: readonly PredicateConstraint[];
};

export type IPFSPredicatePayload = IPFSPredicateBase & {
  prevVersion?: CID;
};

export type IPFSPredicate = IPFSPredicateBase & {
  cid: string;
  prevVersions?: IPFSPredicate[];
};

let CLIENT: ReturnType<typeof create>;

const getClient = () => {
  if (!CLIENT) {
    CLIENT = create(
      process.env.INFURA_AUTH_TOKEN
        ? {
            host: 'ipfs.infura.io',
            port: 5001,
            protocol: 'https',
            headers: {
              authorization:
                'Basic ' +
                Buffer.from(process.env.INFURA_AUTH_TOKEN).toString('base64'),
            },
          }
        : { timeout: 10000 }
    );
  }
  return CLIENT;
};

const formatNode = async (node: IPFSPredicatePayload, cid: CID) => {
  const { prevVersion, ...data } = node;
  const prevVersions = await getPrevVersions(prevVersion);
  return {
    data: {
      ...data,
      cid: cid.toString(),
    },
    prevVersions,
  };
};

const getPrevVersions = async (cid?: CID): Promise<IPFSPredicate[]> => {
  const versions: IPFSPredicate[] = [];

  if (!cid) {
    return versions;
  }

  try {
    const data = await getClient().dag.get(cid);
    const { prevVersions, data: cleanData } = await formatNode(data.value, cid);
    return [...versions, cleanData, ...prevVersions];
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }

  return versions;
};

const _getDataFromIPFSByCID = async (
  hash: string
): Promise<IPFSPredicate | null> => {
  const cid = CID.parse(hash);

  if (!cid) {
    return null;
  }

  try {
    const data = await getClient().dag.get(cid);
    const { prevVersions, data: cleanData } = await formatNode(data.value, cid);
    return { ...cleanData, prevVersions };
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }

  return null;
};

export function getDataFromIPFSByCID(
  hashes: string
): Promise<IPFSPredicate | null>;
export function getDataFromIPFSByCID(
  hashes: string[]
): Promise<IPFSPredicate[]>;
export async function getDataFromIPFSByCID(hashes: string | string[]) {
  if (!Array.isArray(hashes)) {
    return await _getDataFromIPFSByCID(hashes);
  }

  const data = [];
  for (let i = 0; i < hashes.length; i++) {
    const hash = hashes[i];
    if (!hash) {
      continue;
    }
    const nodeData = await _getDataFromIPFSByCID(hash);
    if (!nodeData) {
      continue;
    }
    data.push(nodeData);
  }

  return data;
}

export const addToIPFS = async (data: IPFSPredicatePayload) => {
  const cid = await getClient().dag.put(data, { pin: true });
  return cid;
};
