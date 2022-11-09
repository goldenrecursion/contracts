import { IPFSEntityTypeBody } from '../IPFSapi';

const json: readonly IPFSEntityTypeBody[] = [
  {
    id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
    name: 'Company',
    mdt_and_rules: [
      {
        mdt_or_rules: [
          {
            predicate_id: 'a27218b8-6a4d-47bb-95b6-5a55334fac1c',
          },
        ],
      },
      {
        mdt_or_rules: [
          {
            predicate_id: '7f15d788-5df1-4ff3-a5e5-4c9e8e2c57af',
          },
          {
            predicate_id: '42cb158b-e836-45ed-9b56-034668b8f05a',
          },
          {
            predicate_id: '8c4d6279-199f-4e46-9ef7-8702bad1e152',
          },
          {
            predicate_id: '9934d828-963f-403a-a0da-7a52e0224ef5',
          },
        ],
      },
      {
        mdt_or_rules: [
          {
            predicate_id: '71ad3d9e-e211-472b-a16d-861737c57ecd',
          },
          {
            predicate_id: '0a87e996-34b4-46ba-909a-70ab67b1f811',
          },
        ],
      },
    ],
  },
  {
    id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
    name: 'Person',
    mdt_and_rules: [
      {
        mdt_or_rules: [
          {
            predicate_id: 'a27218b8-6a4d-47bb-95b6-5a55334fac1c',
          },
        ],
      },
      {
        mdt_or_rules: [
          {
            predicate_id: '3104de39-071c-47b8-86b4-d62ccc4a4fa6',
          },
          {
            predicate_id: '42cb158b-e836-45ed-9b56-034668b8f05a',
          },
          {
            predicate_id: '7f15d788-5df1-4ff3-a5e5-4c9e8e2c57af',
          },
          {
            predicate_id: '2f30a94e-cd5e-496f-bec8-01bfb01da128',
          },
          {
            predicate_id: '8c4d6279-199f-4e46-9ef7-8702bad1e152',
          },
          {
            predicate_id: 'e4f94b98-c56a-4bd2-a9fd-5fd11603e7e8',
          },
        ],
      },
    ],
  },
  {
    id: '635dd566-e3f2-4bcd-bc51-95f143b075c7',
    name: 'Cryptocurrency',
    mdt_and_rules: [
      {
        mdt_or_rules: [
          {
            predicate_id: 'a27218b8-6a4d-47bb-95b6-5a55334fac1c',
          },
        ],
      },
      {
        mdt_or_rules: [
          {
            predicate_id: '42cb158b-e836-45ed-9b56-034668b8f05a',
          },
          {
            predicate_id: '5387126a-fa27-4a42-8c7f-bf813a6a893d',
          },
        ],
      },
    ],
  },
  {
    id: '253b2d4f-bdb5-4e39-bd7d-26566cf024b0',
    name: 'Accelerator Batch',
    mdt_and_rules: [
      {
        mdt_or_rules: [
          {
            predicate_id: 'a27218b8-6a4d-47bb-95b6-5a55334fac1c',
          },
        ],
      },
      {
        mdt_or_rules: [
          {
            predicate_id: '1a2e5072-74ed-4043-8c29-d6e85b2fbd1a',
          },
        ],
      },
    ],
  },
] as const;

export default json;
