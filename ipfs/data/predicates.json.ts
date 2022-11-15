import {
  CitationRequirement,
  IPFSPredicateBody,
  PredicateConstraintTarget,
} from '../IPFSapi';

const json: readonly IPFSPredicateBody[] = [
  {
    name: 'Golden ID',
    label: 'The ID of this entity in Golden.',
    description: 'The unique ID associated with this entity on Golden.com.',
    id: 'bb463b8b-b76c-4f6a-9726-65ab5730b69b',
    object_type: 'integer',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    name: 'CEO of',
    label: 'Organization this person is CEO of.',
    description:
      'The organization this individual is charged with the management of – especially an independent legal entity such as a company or nonprofit institution. The CEO of an organization typically reports to the board of directors.',
    id: '3104de39-071c-47b8-86b4-d62ccc4a4fa6',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
    inverse_id: '0a87e996-34b4-46ba-909a-70ab67b1f811',
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
      },
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Object,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
      },
    ],
  },
  {
    name: 'Founder',
    label: 'Person associated with the founding of this entity.',
    description:
      'A person directly involved with the initial inception of this organization, often marked by the conception of the idea for the organization or the purchasing of operating assets. Even when a founding individual leaves the company and is no longer serving an active role, they can still be considered a founder due to their work establishing the organization.',
    id: '71ad3d9e-e211-472b-a16d-861737c57ecd',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
    inverse_id: 'e4f94b98-c56a-4bd2-a9fd-5fd11603e7e8',
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
      },
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Object,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
      },
    ],
  },
  {
    name: 'Start time',
    label: 'Point in time a triple was no longer true',
    description: '',
    id: '4b4ff1c9-a053-4bc3-87ef-0713453f9992',
    object_type: 'dateTime',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    name: 'End time',
    label: 'Point in time a triple became true',
    description: '',
    id: '6b95b113-e331-41bb-8e31-45b198a41ea8',
    object_type: 'dateTime',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    name: 'Tiktok',
    label: "URL of this entity's TikTok profile page",
    description:
      'The primary, official TikTok profile URL associated with this entity. TikTok profile URLs tend to take the form of https://www.tiktok.com/[username]. The TikTok URL should not point to a TikTok video post.',
    id: '7e593c0c-457a-464d-9dd2-8e1fc5a8b116',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
    constraints: [
      {
        type: 'format',
        regex_pattern:
          "^https?:\\/\\/(?:www\\.|vm\\.|vt\\.|m\\.)?(?:tiktok.com)\\/([\\w\\-_.!~*'()%:@&=+$,\\/?;#]+)$",
      },
    ],
  },
  {
    name: 'Source Code',
    label: "URL to this entity's official source code",
    description:
      'The primary, official source code URL associated with this entity. The primary and official source code URL should not be a fork off of a more primary and official version. Source code URLs may often be Github URLs, but do not always have to be. The source code URL should point to the source code specifically associated with the entity, not a product of the entity, a parent organization of the entity, etc.',
    id: '1e49b96d-f641-4226-91f0-ed42e6de742e',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    name: 'Contact URL',
    label: "URL of this entity's official contact page",
    description:
      'The primary and official contact page URL for an entity, such as but not limited to a link to a contact form, a website with aggregate contact details. A URL whose main purpose is not to provide contact details but happens to have some contact information on it should not be used. A social URL should not function as the primary and official contact page URL for an entity.',
    id: '27897e2f-5d08-40fe-904d-0b0647fa2ff4',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    name: 'Medium',
    label: "URL of this entity's Medium profile page",
    description:
      'The primary and official Medium profile URL associated with this entity.',
    id: '71f46d7f-6667-4600-90bf-eb82fbba8e17',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    name: 'Angellist URL',
    label: "URL of this entity's Angellist profile page",
    description:
      "The primary and official Angellist profile URL associated with this entity. The URL should ideally point towards the company's overview page (i.e. https://angel.co/company/<company_name>) and not another view (such as https://angel.co/company/<company_name>/jobs).",
    id: '7f15d788-5df1-4ff3-a5e5-4c9e8e2c57af',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
    constraints: [
      {
        type: 'format',
        regex_pattern:
          "^https?:\\/\\/(?:www\\.)?(?:angel.co)\\/((?:company|u|v|p)?\\/?(?:[\\w\\-_.!~*'()%:@&=+$,\\/?;#]+))$",
      },
    ],
  },
  {
    name: 'Apple App Store Link',
    label: "URL of this entity's app on the Apple App Store",
    description:
      "The primary and official URL for this product on Apple's app store. Apps that are not officially owned and associated with the entity should not be used.",
    id: '92ae90d8-d4f6-476b-9409-89b7d1b846c0',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
    constraints: [
      {
        type: 'format',
        regex_pattern:
          "^https?:\\/\\/(?:apps.apple.com)\\/((?:[-a-zA-Z0-9@:%._\\+~#=]{2,20}\\/)?app\\/(?:[\\w\\-_.!~*'()%:@&=+$,\\/?;#]+))$",
      },
    ],
  },
  {
    name: 'Instagram',
    label: "URL of this entity's Instagram profile page",
    description:
      'The primary and official Instagram URL for this entity. Instagram profiles that are not officially owned by and associated with the entity should not be used.',
    id: 'db592366-1c4c-4087-821e-44699ddd29b6',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    name: 'Twitter URL',
    label: "URL of this entity's Twitter profile page",
    description:
      'The primary and official Twitter profile URL associated with this entity.',
    id: '9934d828-963f-403a-a0da-7a52e0224ef5',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
    constraints: [
      {
        type: 'format',
        regex_pattern:
          "^https?:\\/\\/(?:[0-9a-z_!~*'()-]{1,63}\\.)?(?:twitter\\.com)\\/(?:#!\\/)?@?([^/?#]*)(?:[?#].*)?\\/?$",
      },
    ],
  },
  {
    name: 'Facebook URL',
    label: "URL of this entity's Facebook profile page",
    description:
      'The primary and official Facebook profile URL associated with this entity. A facebook profile URL for an associated entity (such as a fan club, a parent organization, or a subsidiary) should not be used.',
    id: 'fa39c1f2-bf06-45e9-8995-da919472deb8',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
    constraints: [
      {
        type: 'format',
        regex_pattern:
          "^https?:\\/\\/(?:[0-9a-z_!~*'()-]{1,63}\\.)?(?:(?:web|m)\\.)?(?:(?:facebook|fb)\\.com)\\/((?:pg|pages|pages\\/category|groups|profile.php\\?id=)?\\/?(?:[\\w\\-\\.\\+]+)\\/?(?:[\\w\\-\\.\\+]+)?\\/?)$",
      },
    ],
  },
  {
    name: 'Pinterest',
    label: "URL of this entity's Pinterest profile page",
    description:
      'The primary and official Pinterest profile URL associated with this entity. A link to a Pinterest collection or specific post should not be used.',
    id: '1d7d64c5-c4a1-4889-91c4-2d2da0424dcc',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    name: 'Google Play Store Link',
    label: "URL of this entity's app on the Google Play Store",
    description:
      'The primary and official Google Play store URL associated with this entity. Apps that are not officially owned by and associated with the entity should not be used.',
    id: 'fb06b903-52af-4a79-9126-f2589c2ca881',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
    constraints: [
      {
        type: 'format',
        regex_pattern:
          "^https?:\\/\\/(?:www\\.)?(?:play.google.com)\\/(?:store)\\/([\\w\\-_.!~*'()%:@&=+$,\\/?;#]+)$",
      },
    ],
  },
  {
    name: 'Community Forum',
    label: "URL of this entity's primary community forum",
    description:
      "URL of an organization's, product's, or cryptocurrency’s official community forum. Unofficial community forum's (such as those that the organization, product, or cryptocurrency has never officially affiliated themselves with) should not be used.",
    id: 'f348c532-bffd-4ad1-b79c-34258d05c1cd',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    name: 'Github URL',
    label: "URL of this entity's Github profile URL",
    description:
      'The primary and official Github profile URL associated with this entity. Links to repositories (rather than profiles) should not be used.',
    id: 'e3d0cfb4-3ec1-4ef2-ae08-93fa07aa27dc',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
    constraints: [
      {
        type: 'format',
        regex_pattern:
          '^https?:\\/\\/(?:www\\.)?(?:github\\.com)\\/((?:[\\w\\.@\\:\\-~]+\\/?){1,2})$',
      },
    ],
  },
  {
    name: 'Doctoral Thesis URL',
    label: "URL of this person's doctoral thesis",
    description:
      'The primary and official URL associated with a person’s PhD dissertation. Either a URL where the doctoral thesis can be directly downloaded or that contains the doctoral thesis contents itself may be used',
    id: '33461e27-5454-43c3-b300-88c02a96c280',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    name: 'Crunchbase URL',
    label: 'Crunchbase URL associated with this entity',
    description:
      "The primary and official URL associated with this entity's Crunchbase profile page. Only the Crunchbase profile directly affiliated with the entity should be used, not the Crunchbase profile for the entity's parent organization, subsidiaries, etc.",
    id: 'facb73aa-82db-45ff-bd87-5ce7983d8ca2',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
    constraints: [
      {
        type: 'format',
        regex_pattern:
          "^https?:\\/\\/(?:www\\.)?(?:(?:crunchbase)\\.com)\\/((?:person|organization|event|acquisition|funding_round|fund)\\/(?:[\\w\\-_.!~*'()%:@&=+$,\\/?;#]+))$",
      },
    ],
  },
  {
    name: 'Telegram',
    label: "URL of this entity's official Telegram channel",
    description:
      'The primary and official Telegram channel associated with this entity. Support channels, fan channels, or other channels not officially associated with the entity should not be used.',
    id: '68d490c8-d8d3-4efe-9670-390df48e1ad6',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
    constraints: [
      {
        type: 'format',
        regex_pattern:
          '^https?:\\/\\/(?:www\\.)?(?:telegram|t)\\.me\\/([a-zA-Z0-9_-]+)\\/?$',
      },
    ],
  },
  {
    name: 'Pitchbook URL',
    label: 'Pitchbook URL associated with this entity',
    description:
      "The primary and official Pitchbook URL associated with this entity. The primary and official Pitchbook URL should be directly associated with this entity and not a Pitchbook URL for the entity's parent/subsidiary organization.",
    id: '5bbcbd49-c255-4a6b-b84a-dc076849650d',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
    constraints: [
      {
        type: 'format',
        regex_pattern:
          "^https?:\\/\\/(?:www\\.)?(?:pitchbook.com)\\/profiles\\/?((?:investor|company|advisor|fund|limited-partner)\\/(?:[\\w\\-_.!~*'()%:@&=+$,\\/?;#]+))$",
      },
    ],
  },
  {
    name: 'Whitepaper',
    label: "Primary and official URL of this entity's Whitepaper",
    description:
      'The primary and official Whitepaper URL associated with this cryptocurrency. Litepapers are allowed as whitepapers.',
    id: '14fa743c-8161-42e8-a92f-5c29c70e87f8',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    name: 'Reddit URL',
    label: "URL of this entity's official Reddit profile or subreddit",
    description:
      "The primary and official Reddit profile or subreddit URL associated with this entity. A Reddit profile or subreddit URL associated with the entity should have an evidenced source of official affiliation - i.e. a reference to the Reddit on the entity's website.",
    id: '36d1a264-da26-4a1a-8f0e-726543749a5f',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
    constraints: [
      {
        type: 'format',
        regex_pattern:
          '^https?:\\/\\/(?:www\\.)?(?:reddit\\.com|redd.it)\\/(?:(?:user|(?:r)|(?:u))\\/)?([\\w\\.\\-\\+]+)\\/?$',
      },
    ],
  },
  {
    name: 'YouTube channel',
    label: "URL of this entity's official YouTube channel page",
    description:
      'The primary and official Youtube profile URL associated with this entity. Links to specific youtube videos should not be used.',
    id: '12acb8fe-0573-4ca8-8cc1-180cc6ba3486',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    name: 'Linkedin URL',
    label: "URL of this entity's LinkedIn profile page",
    description:
      'The primary and official LinkedIn profile URL associated with this entity. For example,  is the primary and official LinkedIn profile URL for Bill Gates.',
    id: '8c4d6279-199f-4e46-9ef7-8702bad1e152',
    object_type: 'anyURI',
    multiplier: 3,
    citation_requirement: CitationRequirement.Optional,
    constraints: [
      {
        type: 'format',
        regex_pattern:
          "^https?:\\/\\/(?:[0-9a-z_!~*'()-]{1,63}\\.)?(?:(?:linkedin)\\.com)\\/((?:in|company|school)\\/(?:[\\w\\-_.!~*'()%:@&=+$,\\/?;#]+))$",
      },
    ],
  },
  {
    name: 'Coinmarketcap URL',
    label: "URL of this cryptocurrency's Coinmarketcap page",
    description:
      "The primary and official Coinmarketcap URL associated with this cryptocurrency. Coinmarketcap URLs tend to be structured as https://coinmarketcap.com/currencies/<currency name> for currencies and https://coinmarketcap.com/exchanges/<exchange name> for exchanges. An entity's Coinmarketcap URL should not point to a currency that is forked off of or otherwise not officially associated with the entity.",
    id: '5387126a-fa27-4a42-8c7f-bf813a6a893d',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
    constraints: [
      {
        type: 'format',
        regex_pattern:
          "^https?:\\/\\/(?:www\\.)?(?:coinmarketcap.com)\\/((?:currencies|exchanges)\\/(?:[\\w\\-_.!~*'()%:@&=+$,\\/?;#]+))$",
      },
    ],
  },
  {
    name: 'Name',
    label: 'The primary name associated with this entity',
    description: '',
    id: 'a27218b8-6a4d-47bb-95b6-5a55334fac1c',
    object_type: 'string',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    name: 'Thumbnail',
    label: 'Thumbnail URL associated with this entity',
    description: '',
    id: '60627261-4e6c-4ebf-8879-914576ade417',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    name: 'Description',
    label: 'Description of an entity.',
    description: '',
    id: '7f3869c1-7dc9-4486-9045-6bade487a49d',
    object_type: 'string',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    name: 'CEO',
    label: 'The CEO of this organization.',
    description:
      'The CEO of an organization is the individual charged with the management of the organization – especially an independent legal entity such as a company or nonprofit institution. The CEO of an organization typically reports to the board of directors.',
    id: '0a87e996-34b4-46ba-909a-70ab67b1f811',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
    inverse_id: '3104de39-071c-47b8-86b4-d62ccc4a4fa6',
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
      },
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Object,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
      },
    ],
  },
  {
    name: 'Founder of',
    label: 'Organization known to be founded by this person.',
    description:
      'An organization that this person was directly involved with the initial inception of, often marked by the person’s intention to start the organization or the purchasing of operating assets for the organization.',
    id: 'e4f94b98-c56a-4bd2-a9fd-5fd11603e7e8',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
    inverse_id: '71ad3d9e-e211-472b-a16d-861737c57ecd',
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
      },
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Object,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
      },
    ],
  },
  {
    name: 'Is a',
    label: 'The entity type of this entity',
    description: '',
    id: '94a8d215-ce32-4379-b18e-2aebf0794882',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Optional,
    constraints: [
      {
        type: 'enum',
        target: PredicateConstraintTarget.Object,
        elements: [
          {
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
          {
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
          {
            object_entity_id: '635dd566-e3f2-4bcd-bc51-95f143b075c7',
          },
          {
            object_entity_id: 'c187937c-4d20-48d8-9378-00ed723d2486',
          },
          {
            object_entity_id: '253b2d4f-bdb5-4e39-bd7d-26566cf024b0',
          },
          {
            object_entity_id: '40548ec9-55e8-4b7e-95e3-c5d9a4590235',
          },
          {
            object_entity_id: 'f55f803b-a98c-49f0-a748-0ab2b5132297',
          },
          {
            object_entity_id: 'c93f9f81-cbfa-47b0-aae9-0e10d97b53f6',
          },
          {
            object_entity_id: '2b9258df-ecd1-4394-93f5-868934fd4e8a',
          },
          {
            object_entity_id: '2fada829-b268-4542-9dc2-8740248e975d',
          },
          {
            object_entity_id: '193af481-d970-4a28-b2aa-1d39f6f42c03',
          },
          {
            object_entity_id: '6b3b4f73-1548-4a54-96c7-f722c544df48',
          },
          {
            object_entity_id: '6d29d6b2-0256-4ae0-9cc4-bdc556ac7d8d',
          },
          {
            object_entity_id: '273f6736-1c67-4b46-ab23-e9348b466b41',
          },
          {
            object_entity_id: '104ac3a1-bf25-49be-9f0a-1b46104e06eb',
          },
          {
            object_entity_id: '163946c5-465f-47dd-8907-f8f2ca4b29da',
          },
          {
            object_entity_id: 'ca399d7a-e559-4062-9570-1b69c667ca10',
          },
        ],
      },
    ],
  },
  {
    name: 'Website',
    label:
      'URL of the primary and official website associated with this entity',
    description:
      "The primary and official website URL associated with this entity. The 'website' predicate should be reserved for URL's that represent a website directly associated with the entity. Social links that may be used as values in other predicates should not be used.",
    id: '42cb158b-e836-45ed-9b56-034668b8f05a',
    object_type: 'anyURI',
    multiplier: 3,
    citation_requirement: CitationRequirement.Optional,
    constraints: [
      {
        type: 'format',
        regex_pattern:
          "^https?:\\/\\/(?:www\\.|vm\\.|vt\\.|m\\.)?(?:tiktok.com)\\/([\\w\\-_.!~*'()%:@&=+$,\\/?;#]+)$",
        allow: false,
      },
      {
        type: 'format',
        regex_pattern:
          "^https?:\\/\\/(?:www\\.)?(?:angel.co)\\/((?:company|u|v|p)?\\/?(?:[\\w\\-_.!~*'()%:@&=+$,\\/?;#]+))$",
        allow: false,
      },
      {
        type: 'format',
        regex_pattern:
          "^https?:\\/\\/(?:apps.apple.com)\\/((?:[-a-zA-Z0-9@:%._\\+~#=]{2,20}\\/)?app\\/(?:[\\w\\-_.!~*'()%:@&=+$,\\/?;#]+))$",
        allow: false,
      },
      {
        type: 'format',
        regex_pattern:
          "^https?:\\/\\/(?:[0-9a-z_!~*'()-]{1,63}\\.)?(?:twitter\\.com)\\/(?:#!\\/)?@?([^/?#]*)(?:[?#].*)?\\/?$",
        allow: false,
      },
      {
        type: 'format',
        regex_pattern:
          "^https?:\\/\\/(?:[0-9a-z_!~*'()-]{1,63}\\.)?(?:(?:web|m)\\.)?(?:(?:facebook|fb)\\.com)\\/((?:pg|pages|pages\\/category|groups|profile.php\\?id=)?\\/?(?:[\\w\\-\\.\\+]+)\\/?(?:[\\w\\-\\.\\+]+)?\\/?)$",
        allow: false,
      },
      {
        type: 'format',
        regex_pattern:
          "^https?:\\/\\/(?:www\\.)?(?:play.google.com)\\/(?:store)\\/([\\w\\-_.!~*'()%:@&=+$,\\/?;#]+)$",
        allow: false,
      },
      {
        type: 'format',
        regex_pattern:
          '^https?:\\/\\/(?:www\\.)?(?:github\\.com)\\/((?:[\\w\\.@\\:\\-~]+\\/?){1,2})$',
        allow: false,
      },
      {
        type: 'format',
        regex_pattern:
          "^https?:\\/\\/(?:www\\.)?(?:(?:crunchbase)\\.com)\\/((?:person|organization|event|acquisition|funding_round|fund)\\/(?:[\\w\\-_.!~*'()%:@&=+$,\\/?;#]+))$",
        allow: false,
      },
      {
        type: 'format',
        regex_pattern:
          '^https?:\\/\\/(?:www\\.)?(?:telegram|t)\\.me\\/([a-zA-Z0-9_-]+)\\/?$',
        allow: false,
      },
      {
        type: 'format',
        regex_pattern:
          "^https?:\\/\\/(?:www\\.)?(?:pitchbook.com)\\/profiles\\/?((?:investor|company|advisor|fund|limited-partner)\\/(?:[\\w\\-_.!~*'()%:@&=+$,\\/?;#]+))$",
        allow: false,
      },
      {
        type: 'format',
        regex_pattern:
          '^https?:\\/\\/(?:www\\.)?(?:reddit\\.com|redd.it)\\/(?:(?:user|(?:r)|(?:u))\\/)?([\\w\\.\\-\\+]+)\\/?$',
        allow: false,
      },
      {
        type: 'format',
        regex_pattern:
          "^https?:\\/\\/(?:[0-9a-z_!~*'()-]{1,63}\\.)?(?:(?:linkedin)\\.com)\\/((?:in|company|school)\\/(?:[\\w\\-_.!~*'()%:@&=+$,\\/?;#]+))$",
        allow: false,
      },
      {
        type: 'format',
        regex_pattern:
          "^https?:\\/\\/(?:www\\.)?(?:coinmarketcap.com)\\/((?:currencies|exchanges)\\/(?:[\\w\\-_.!~*'()%:@&=+$,\\/?;#]+))$",
        allow: false,
      },
    ],
  },
  {
    name: 'Phone number',
    label: 'Phone number associated with an entity.',
    description:
      'The phone number associated with this entity that is 1. public (it is openly known the entity is associated with this phone number) and 2. official (the entity has formally associated themselves with this phone number by posting it on a website, social media link, etc. that they are in control of).',
    id: 'c090be24-6c35-45d8-8a81-32e57a3d48dd',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    name: 'Founded date',
    label: 'Date an entity was founded.',
    description:
      'The date that a company legally starts operating, as indicated by the intentions of the company’s founder(s) to start a particular business and usually the purchase or production of operating assets. The founding date would be the earliest of any of these two events in the company’s lifetime.',
    id: 'fa1a5ac7-480c-4e44-a545-b0f3dd9d24bf',
    object_type: 'date',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    name: 'Date of Birth',
    label: 'The official date of birth of a person',
    description:
      'The official date of birth of a person, as evidenced by a resource officially owned by, operated by, or directly affiliated with the person stating their birth date. Official documentation, such as a birth certificate, may also provide evidence.',
    id: '2f30a94e-cd5e-496f-bec8-01bfb01da128',
    object_type: 'date',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    name: 'Date of incorporation',
    label: 'Date an entity was legally incorporated.',
    description:
      'The date that the incorporation requirements for a company were legally filed in its initial country or state of incorporation. Each state sets its own incorporation requirements, but the date of incorporation is typically the filed date of the corporate charter.',
    id: '9cb6d628-a0f8-48b0-9828-253596b6ad00',
    object_type: 'date',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    name: 'Full address',
    label:
      'Full address (street, city, state, country) associated with an entity.',
    description:
      'collection of official information that describes the location of a building, apartment, or other structure following the Royal mail standard address form (described here: How to address mail clearly, guide to clear letter addressing). The full address value should be an address which this entity has majority ownership in.',
    id: '1551ee2a-f6a0-4a4b-b322-d98d3a696cf3',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    name: 'Email address',
    label: 'Email address associated with an entity.',
    description:
      'The email address associated with this entity that is 1. public (it is openly known the entity is associated with this email address) and 2. official (the entity has formally associated themselves with this phone number by posting it on a website, social media link, etc. that they are in control of).',
    id: '0efd0441-1ffc-4e30-8806-e58c434770c8',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    name: 'Wikidata ID',
    label: 'Wikidata ID for an entity, if there is a matching Wikidata entity',
    description:
      'The unique Wikidata ID (item, property, or lexem) associated with this entity on Wikidata. A Wikidata ID is a number prefixed by a letter. Items, also known as Q-items, are prefixed with ‘Q’. Properties are prefixed by ‘P’. Lexemes are prefixed by ‘L’.',
    id: 'b996dfba-6f3b-458e-bb98-61939160fd88',
    object_type: 'string',
    citation_requirement: CitationRequirement.Optional,
    constraints: [
      {
        type: 'unique_object',
      },
    ],
  },
  {
    name: 'Discord URL',
    label: 'URL of Discord channel',
    description:
      'The primary and official Discord URL for this entity. Discord URLs not officially affiliated with the entity should not be used.',
    id: 'c094b0f7-d34c-4f5e-86b3-801da1c82091',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    name: 'Official Blog',
    label: 'URL of official blog associated with this entity.',
    description:
      'The top-level URL of the official blog associated with this entity. A blog is a regularly updated website or web page, typically written in informal diary-style posts and displayed in reverse chronological order.',
    id: '896c9d73-a08b-44ae-8e4e-2a02e5c1e546',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    name: 'CIK Number',
    label: 'The CIK  number associated with this entity.',
    description:
      'The unique CIK (Central Index Key) number associated with this entity. The CIK number is used as a unique identifier for financial filings with the U.S. Security and Exchange Commission (SEC), and is assigned by the SEC.',
    id: '78142d14-3ffa-4250-a92a-23f6bfceca62',
    object_type: 'string',
    citation_requirement: CitationRequirement.Optional,
    constraints: [
      {
        type: 'format',
        regex_pattern: '^[1-9][0-9]{0,9}$',
      },
      {
        type: 'unique_object',
      },
    ],
  },
  {
    name: 'Glassdoor ID',
    label: 'The unique Glassdoor ID associated with this entity.',
    description:
      'The unique Glassdoor ID associated with this entity on Glassdoor. Glassdoor ID pages provide a profile of a company along with reviews of the company by current and former employees, reports on interviews with the company, and other data on the company.',
    id: '230c95f8-f674-4c08-bc07-773d5a6f198a',
    object_type: 'string',
    citation_requirement: CitationRequirement.Optional,
    constraints: [
      {
        type: 'format',
        regex_pattern: '^[0-9]+$',
      },
      {
        type: 'unique_object',
      },
    ],
  },
  {
    name: 'Google Scholar Author ID',
    label: 'The unique Google Scholar Author ID associated with this person.',
    description:
      'The unique Google Scholar Author ID associated with this person on Google Scholar.',
    id: 'edff5e5b-1f4f-469e-abcc-02eb9c5e4b67',
    object_type: 'string',
    citation_requirement: CitationRequirement.Optional,
    constraints: [
      {
        type: 'format',
        regex_pattern: '^[-_0-9A-Za-z]{12}$',
      },
      {
        type: 'unique_object',
      },
    ],
  },
  {
    name: 'CAGE Code',
    label:
      'Code assigned to a company or organization by the Defense Logistics Agency.',
    description:
      'Five-character alpha-numeric, unique identifier assigned and managed by the Defense Logistics Agency (DLA), which provide a standardized method of identifying a given facility at a specific location.',
    id: 'cc4fdda9-3f19-453b-b417-e691a771314f',
    object_type: 'string',
    citation_requirement: CitationRequirement.Optional,
    constraints: [
      {
        type: 'format',
        regex_pattern: '^[0-9A-Za-z]{5}$',
      },
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
      },
      {
        type: 'unique_object',
      },
    ],
  },
  {
    name: 'GSA Unique Entity Identifier',
    label:
      'Unique Entity Identifier (UEI) assigned to a company or organization by the US General Services Administration.',
    description:
      'A twelve character alphanumeric Unique Entity Identifier (UEI) assigned to a company or organization by the US General Services Administration (GSA).',
    id: 'a0dc896f-72b8-4d4e-b9c3-a447adfcf0e0',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'format',
        regex_pattern: '^[0-9A-Za-z]{12}$',
      },
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
      },
      {
        type: 'unique_object',
      },
    ],
  },
  {
    name: 'DUNS Number',
    label:
      'Nine-digit identifier issued by Dun & Bradstreet that uniquely identifies an organization.',
    id: 'fc693d47-54aa-4c9f-8c73-971637692e71',
    description:
      'Nine-digit identifier issued by Dun & Bradstreet that uniquely identifies an organization. ',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'format',
        regex_pattern: '^[0-9]{9}$',
      },
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
      },
      {
        type: 'unique_object',
      },
    ],
  },
  {
    name: 'Accelerator Batches',
    label:
      'One or more individual accelerator batches organized by a parent accelerator.',
    id: 'a91e59fd-5bda-4234-8823-5fa614773ca2',
    description:
      'One or more individual accelerator batches organized by a parent accelerator.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
    inverse_id: '1a2e5072-74ed-4043-8c29-d6e85b2fbd1a',
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
      },
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Object,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '253b2d4f-bdb5-4e39-bd7d-26566cf024b0',
          },
        ],
      },
    ],
  },
  {
    name: 'Parent Accelerator',
    label:
      'The organization that organizes and runs an individual accelerator batch.',
    id: '1a2e5072-74ed-4043-8c29-d6e85b2fbd1a',
    description:
      'The organization that organizes and runs an individual accelerator batch. While each accelerator batch may or may not have its own organization or legal entity, the parent accelerator is the organization that organizes each accelerator batch.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
    inverse_id: 'a91e59fd-5bda-4234-8823-5fa614773ca2',
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '253b2d4f-bdb5-4e39-bd7d-26566cf024b0',
          },
        ],
      },
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Object,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
      },
    ],
  },
  {
    name: 'Accelerator Batch Companies',
    label: 'A company funded as part of an accelerator batch.',
    id: '50f7f026-1a21-4bdf-b7ee-f6f6a8697740',
    description: 'A company funded as part of an accelerator batch.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
    inverse_id: 'd4f75a00-f517-4afa-8839-0add73e29f3b',
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '253b2d4f-bdb5-4e39-bd7d-26566cf024b0',
          },
        ],
      },
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Object,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
      },
    ],
  },
  {
    name: 'Accelerator Batch',
    label:
      'An accelerator batch is a group of companies that are funded and mentored as a batch.',
    id: 'd4f75a00-f517-4afa-8839-0add73e29f3b',
    description:
      'An accelerator batch is a group of companies that are funded and mentored as a batch.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
    inverse_id: '50f7f026-1a21-4bdf-b7ee-f6f6a8697740',
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
      },
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Object,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '253b2d4f-bdb5-4e39-bd7d-26566cf024b0',
          },
        ],
      },
    ],
  },
  {
    name: 'Apple Music Artist ID',
    label: 'Apple Music ID for a musical artist.',
    description: 'Apple Music ID for a musical artist.',
    id: '69e9e6d7-f011-432b-86c7-e484c828c1f7',
    object_type: 'string',
    citation_requirement: CitationRequirement.Optional,
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
      },
      {
        type: 'format',
        regex_pattern: '^[0-9A-Za-z]+$',
      },
      {
        type: 'unique_object',
      },
    ],
  },
  {
    name: 'Spotify Artist ID',
    label: 'Spotify ID for a musical artist.',
    description: 'Spotify ID for a musical artist.',
    id: '09dec055-52d8-42e6-9fc0-56ecac599a8b',
    object_type: 'string',
    citation_requirement: CitationRequirement.Optional,
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
      },
      {
        type: 'format',
        regex_pattern: '^[0-9A-Za-z]+$',
      },
      {
        type: 'unique_object',
      },
    ],
  },
  {
    name: 'Person IMDb ID',
    label: 'The IMDb ID for a musical artist.',
    description:
      'The IMDb ID that is used for this entity. An entity can be a person (for example an actor).',
    id: 'cc4df1f3-97e5-4062-ac74-f77242bfd76f',
    object_type: 'string',
    citation_requirement: CitationRequirement.Optional,
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
      },
      {
        type: 'format',
        regex_pattern: '^[0-9A-Za-z]+$',
      },
      {
        type: 'unique_object',
      },
    ],
  },
  {
    name: 'Сreative work IMDb ID',
    label: 'The IMDb ID associated with this entity.',
    description:
      'The IMDb ID that is used for this entity. An entity can be creative work (Movie, TV show, etc.)',
    id: '558771a6-bffc-49ec-9e96-c2f8c5b57123',
    object_type: 'string',
    citation_requirement: CitationRequirement.Optional,
    constraints: [
      {
        type: 'format',
        regex_pattern: '^[0-9A-Za-z]+$',
      },
      {
        type: 'unique_object',
      },
    ],
  },
  {
    name: 'Accelerator',
    id: 'd5e99b15-1e34-46fe-bbff-d000420eea60',
    label: 'Accelerator or incubator that a company participated in',
    description:
      'Accelerators are cohort-based organizations for startups and early stage companies, providing education, mentorship, and seed funding.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
      },
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Object,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
      },
    ],
  },
  {
    name: 'Y Combinator URL',
    id: 'a980fe34-2bc0-4477-93bb-6508656d4e56',
    label: 'Profile page URL for a Y Combinator company.',
    description:
      "URL for a company or organization's profile page in the Y Combinator directory",
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
      },
    ],
  },
  {
    name: 'Invested in',
    id: '4f0e69b1-a30f-4fb5-9d60-1fe4443e258d',
    label:
      'Companies, Organizations, or Cryptocurrencies that the entity has invested in.',
    description:
      'Companies, Organizations, or Cryptocurrencies that the entity has invested in.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
      },
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Object,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '635dd566-e3f2-4bcd-bc51-95f143b075c7',
          },
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
      },
    ],
  },
  {
    name: 'Investors',
    id: '8ccfda1e-b9cc-44e9-bfeb-18bf98cc3330',
    label: 'Investors in an entity.',
    description:
      'Investors are the companies, organizations, and people that have invested in an entity. ',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '635dd566-e3f2-4bcd-bc51-95f143b075c7',
          },
        ],
      },
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Object,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
      },
    ],
  },
  {
    name: 'Exchange',
    id: '36935242-5e49-4523-81f2-cb74492a5927',
    label:
      'Real or virtual facility where brokers and traders can buy and sell securities',
    description:
      'Real or virtual facility where brokers and traders can buy and sell securities, including stock, equities, securities, and bonds. Cryptocurrency exchanges should not be included as valid for this predicate.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
      },
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Object,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
      },
    ],
  },
  {
    name: 'Incorporation Reference',
    id: '24fc4f6d-c56d-4879-ac7a-76503341798b',
    label:
      'Reference number or ID for the company in the place of incorporation',
    description:
      'Reference number or ID for a company in the place of incorporation, as assigned by the incorporating agency.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
      },
    ],
  },
  {
    name: 'Number of Employees',
    id: '25e6d22a-564c-4d66-95e3-64787255b8a0',
    label: 'Number of individuals employed by an entity.',
    description: 'Number of individuals employed by a company or organization.',
    object_type: 'float',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
      },
    ],
  },
  {
    name: 'Fax Number',
    id: '26fe628b-0434-4cba-8536-a29f7e4e552c',
    label: 'Fax machine number associated with this entity.',
    description:
      'The fax number associated with this entity that is 1. public (it is openly known the entity is associated with this fax number) and 2. official (the entity has formally associated themselves with this fax number by posting it on a website, social media link, etc. that they are in control of).',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    name: 'Previous Name',
    id: 'd4f54627-aba2-45aa-a5ff-546faf07abf5',
    label: 'Legal or brand name previously associated with an entity.',
    description:
      'Legal or brand name previously associated with an entity, such as a company, organization, or product.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    name: 'Block Explorer URL',
    id: '7258475d-4d22-4182-91bc-c1199de6a009',
    label: "URL of this cryptocurrency's block explorer profile.",
    description:
      "URL of this cryptocurrency's profile for a blockchain explorer platform, which allows exploration of activity on a given blockchain.",
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '635dd566-e3f2-4bcd-bc51-95f143b075c7',
          },
        ],
      },
    ],
  },
  {
    name: 'Maximum Supply',
    id: 'da0b7a6f-7f01-447a-9ddc-f2bb8b51c4f9',
    label:
      'Maximum number of cryptocurrency coins/tokens that can be created and released.',
    description:
      'Maximum number of cryptocurrency coins/tokens that can ever be released. Once the maximum supply cap is reached, no additional coins or tokens will be mined, minted, or produced.',
    object_type: 'integer',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '635dd566-e3f2-4bcd-bc51-95f143b075c7',
          },
        ],
      },
    ],
  },
  {
    name: 'Genesis Block Date',
    id: 'b0986245-6a0c-48f9-abae-1c1b6f69996f',
    label: 'Date the genesis block of a cryptocurrency was created.',
    description:
      'Date the first block of a cryptocurrency was created, also referred to as Block 0.',
    object_type: 'date',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '635dd566-e3f2-4bcd-bc51-95f143b075c7',
          },
        ],
      },
    ],
  },
  {
    name: 'Award Amount (USD)',
    id: 'a737c8b2-ab44-44aa-a61a-e98b87fb9797',
    label:
      'Amount of funding (USD) that was awarded for a government award or contract.',
    description:
      'Amount of funding (USD) that was awarded for a government award or contract.',
    object_type: 'float',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    name: 'Government Agency',
    id: 'dfd19088-36ce-4219-a828-428ef38a303c',
    label: 'Government agency associated with this entity.',
    description:
      'Government agency associated with this entity, such as the agency awarding a grant or funding award.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Object,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
      },
    ],
  },
  {
    name: 'UKSIC Code',
    id: '4f977eb9-9d23-4873-a012-934c7cb9a6a4',
    label: 'The United Kingdom Standard Industrial Classification (SIC) Code',
    description:
      'The five-digit classification number associated with the United Kingdom Standard Industrial Classification (SIC) of Activities. ',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
      },
    ],
  },
  {
    name: 'SIC Code',
    id: '03744719-b7f6-4316-b105-93a94f3b53cc',
    label: 'Standard Industrial Classification (SIC) code',
    description:
      'The four-digit classification number associated with the U.S. Standard Industrial Classification (SIC) system.',
    object_type: 'integer',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
      },
    ],
  },
  {
    name: 'DSSTox ID',
    id: '6105470f-b87a-447d-be76-70f453298842',
    label: 'EPA DSSTox substance ID',
    description:
      'The unique identifier for the U.S. Environmental Protection Agency (EPA) Distributed Structure-Searchable Toxicity (DSSTox) database.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'unique_object',
      },
    ],
  },
  {
    name: 'NAICS Code',
    id: '08219f1e-6c57-4fad-99a3-a998038e663d',
    label: 'North American Industry Classification System (NAICS) code',
    description:
      'Classification code associated with the North American Industry Classification System (NAICS).',
    object_type: 'integer',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    name: 'COSPAR ID',
    id: '1a3dd7d7-0eab-4471-a41e-859611f9ed7c',
    label: 'COSPAR object identifier',
    description:
      'The alphanumeric identifier assigned to objects in space in the COSPAR system, administered by the UN Committee on Space Research.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'unique_object',
      },
    ],
  },
  {
    name: 'WHO International Nonproprietary Name',
    id: '87634851-cc76-47e1-a33b-eb7e8f6acbad',
    label: 'World Health Organization International Nonproprietary Name',
    description:
      'The generic or nonproprietary name assigned to a pharmaceutical substance by the World Health Organization (WHO) International Nonproprietary Name (INN) system.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'unique_object',
      },
    ],
  },
  {
    name: 'Gene Ontology ID',
    id: '4386accd-542b-44e7-a1e5-ba84700c5239',
    label: 'Seven digit identifier indicating the ontology of the gene.',
    description:
      'Seven digit identifier indicating the ontology of the gene in the Gene Ontology (GO) intitiative.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'unique_object',
      },
    ],
  },
  {
    name: 'ISBN',
    id: '2ffa561a-18da-4986-b169-f223528c76c7',
    label:
      'International Standard Book Number (ISBN) for a book (first edition of hardcover print by default)',
    description:
      'International Standard Book Number (ISBN) for a book (first edition of hardcover print by default). The ISBM is 10 digits long if assigned before 2007, and 13 digits long if assigned on or after 1 January 2007.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'unique_object',
      },
    ],
  },
  {
    name: 'NCBI Locus ID',
    id: 'f7c409b1-7695-4a94-adaf-1b843ee96995',
    label:
      'Reference sequences and stable database identifier associated with a gene.',
    description:
      'The alphanumeric reference sequences and stable database identifier associated with a gene by the National center for Biotechnology Information (NCBI) of the National Library of Medicine.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'unique_object',
      },
    ],
  },
  {
    name: 'Parent Organization',
    id: 'e7acb77b-8153-4467-95f5-31cff49134cd',
    label: 'The parent company that owns or controls another company.',
    description:
      'The parent company that owns or controls another company.  Holding or shell companies which do not have business operations and are set up specifically to passively own should not be included as valid for this predicate.\n',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
      },
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Object,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
      },
    ],
  },
  {
    name: 'Subsidiary',
    id: '64b90483-fa1c-4402-b20e-fc5c59ba49b1',
    label: 'The subsidiary company that is owned or controlled by the company.',
    description:
      'The subsidiary company that is owned or controlled by the parent company, meaning the parent company has or controls more than half of its stock.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
      },
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Object,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
      },
    ],
  },
  {
    name: 'Date of Death',
    id: '578aea9f-0339-4993-b61b-141ba5aa5d2d',
    label: 'Date when a person died.',
    description:
      "Date when a person died, verified by a reputable news source or a source owned or controlled by the entity's family, such as a LinkedIn profile or an official social media account.",
    object_type: 'date',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
      },
    ],
  },
  {
    name: 'Birth Name',
    id: '15159f2d-7885-4a83-a120-d154d83baa9d',
    label: "Person's name given to them at birth",
    description: "Person's name given to them at birth",
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
      },
    ],
  },
  {
    name: 'Child',
    id: '784e7f11-8895-40d4-b863-82ccf49c0a1a',
    label: 'Child of a person, by birth or legal adoption.',
    description: 'Child of a person, by birth or legal adoption.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
      },
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Object,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
      },
    ],
  },
  {
    name: 'Child of',
    id: '20008465-981d-407f-b085-81209577ffea',
    label: 'Parent of a person',
    description:
      'Parent of a person, including birth parent and parent through legal adoption.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
      },
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Object,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
      },
    ],
  },
  {
    name: 'Father of',
    id: '20b378a9-4787-4c15-8ed7-cd41a5339e15',
    label: 'Child of a (commonly male) person',
    description: 'Child of a (commonly male) person',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
      },
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Object,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
      },
    ],
  },
  {
    name: 'Father',
    id: 'fe245603-0eed-42ed-8068-6c7831729efc',
    label: 'Father (commonly male parent) of a person',
    description: 'Father (commonly male parent) of a person',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
      },
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Object,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
      },
    ],
  },
  {
    name: 'Mother of',
    id: 'dacb097b-b4eb-4e30-b720-be2a2bce01dd',
    label: 'Child of a (commonly female) person',
    description: 'Child of a (commonly female) person',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
      },
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Object,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
      },
    ],
  },
  {
    name: 'Mother',
    id: '37d41585-3816-4e55-ac7a-528dff0e8dae',
    label: 'Mother (commonly female parent) of a person',
    description: 'Mother (commonly female parent) of a person',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
      },
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Object,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
      },
    ],
  },
  {
    name: 'Spouse',
    id: 'bfa3f0bf-f5fe-43f5-a5d5-b5301634d299',
    label: 'Significant other in a marriage (husband, wife, partner).',
    description: 'Significant other in a marriage (husband, wife, partner).',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
      },
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Object,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
      },
    ],
  },
  {
    name: 'Sibling',
    id: 'bff15032-59a0-4de8-9677-66e13725727a',
    label: 'Person who shares one or both parents with a person',
    description: 'Person who shares one or both parents with a person.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
      },
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Object,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
      },
    ],
  },
  {
    name: 'Products',
    id: '93e1c40d-ea51-4c17-aaed-7d1b1b298d02',
    label:
      'Specific implementation by this entity of an object or system made for consumer use, developed/managed by this company.',
    description:
      'Specific implementation by this entity of an object or system made for consumer use, developed/managed by this company. Generic objects or systems should not be included as valid for this predicate.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
      },
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Object,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: 'c187937c-4d20-48d8-9378-00ed723d2486',
          },
        ],
      },
    ],
  },
  {
    name: 'Product Parent Company',
    id: 'ddb8b7ea-996b-43d3-b884-b044f51a67d0',
    label: 'Company that developed/manages a product.',
    description: 'Company that developed/manages a product. ',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: 'c187937c-4d20-48d8-9378-00ed723d2486',
          },
        ],
      },
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Object,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
      },
    ],
  },
  {
    name: 'Launch Date',
    id: '0e3e4e65-1d83-453f-bbd3-a31ac5865999',
    label: 'Date a product or service was publicly launched.',
    description:
      'Date a product or service was publicly launched, as verified by a source owned or controlled by the entity.',
    object_type: 'date',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: 'c187937c-4d20-48d8-9378-00ed723d2486',
          },
        ],
      },
    ],
  },
  {
    name: 'Discontinued Date',
    id: 'c23e7f13-f2ff-4e3a-9a21-2d04462838b1',
    label: 'Date a product or service was discontinued or closed.',
    description:
      'Date a product or service was discontinued or closed, as verified by a source owned or controlled by the entity',
    object_type: 'date',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: 'c187937c-4d20-48d8-9378-00ed723d2486',
          },
        ],
      },
    ],
  },
  {
    name: 'Board of Directors',
    id: 'a3b95c3c-c217-430e-acd1-053c95093024',
    label:
      'People who are current members of the Board of Directors of a company',
    description:
      'People who are current members of the Board of Directors of a company.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
      },
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Object,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
      },
    ],
  },
  {
    name: 'Member of Board of Directors of',
    id: '3b9532e4-bd30-4128-9196-dee1ee433bac',
    label: 'Entity a person is a current member of the Board of Directors of.',
    description:
      'Entity a person is a current member of the Board of Directors of.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
      },
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Object,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
      },
    ],
  },
  {
    name: 'Taxon',
    id: '7725a2f0-a0ab-4120-9f94-f24a1abde095',
    label:
      'Correct scientific name of a taxonomic group such as a species, family, or class.',
    description:
      'Taxon is the scientific name given to a taxonomic group such as a species, family, or class.\n\nTaxon should be applied to taxon names accepted by the scientific community, per citation from an authoritative source.\n\nTaxon names should be formatted so that only the first letter of the first word is capitalized. Ex. Persea americana (correct) vs. Persea Americana (incorrect).',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'unique_object',
      },
    ],
  },
  {
    name: 'Geonames ID',
    id: '866bb4b6-6b3a-4b42-b16a-c6b1f2ec5a59',
    label: 'The Geonames ID that corresponds to a particular location.',
    description: 'The Geonames ID that corresponds to a particular location.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'unique_object',
      },
    ],
  },
  {
    name: 'Duplicate of',
    id: '047cb849-0d0e-4c24-a4a4-51e53336b1ea',
    label: 'The subject entity is a duplicate of the object entity.',
    description:
      'An entity A ‘duplicate of’ another entity B when those entities A and B reference the same entity. If ‘entity A’ → ‘duplicate of’ → ‘entity B’ is accepted, entity B will remain and entity A will no longer accept new statements or allow its triples to be validated. The earliest created entity in the pair will be used as the object of this ‘duplicate of’ triple, and thus be the entity that remains in the case of a ‘duplicate of’ triple being accepted and deduplication occurring. Entities that are highly related but not direct duplicates of each other (i.e. a subsidiary company and its parent company) should not be marked as duplicates.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    name: 'IRS Employer Identification Number',
    id: '3dbed8c1-ebe5-453a-be9b-3530f471527b',
    label:
      'Employer Identification Number (EIN) assigned by the US Internal Revenue Service.',
    description:
      'The IRS Employer Identification Number is the 9-digit Employer Identification Number (EIN) assigned by the US Internal Revenue Service (IRS).',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'format',
        regex_pattern: '^[0-9]{9}$',
      },
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Subject,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
      },
    ],
  },
  {
    name: 'Location',
    id: 'fd4de165-da27-4261-b045-a8aca9baf99b',
    label: 'Geographical location of an entity.',
    description:
      'Geographical location of an entity. Location refers to an established geographical area or region, as well as the area relative to where something else is located.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
    constraints: [
      {
        type: 'predicate_object',
        target: PredicateConstraintTarget.Object,
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '40548ec9-55e8-4b7e-95e3-c5d9a4590235',
          },
        ],
      },
    ],
  },
   {
      name: 'Accreditation',
      id: '28269d4f-f02f-4d8b-82ea-e6d2636d26cc',
      label: 'Accrediting agencies for the educational institution.',
      description: 'Accrediting agencies for the educational institution.  The accreditation should be current (not expired or revoked).',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '28269d4f-f02f-4d8b-82ea-e6d2636d26cc',
                  object_entity_id: '193af481-d970-4a28-b2aa-1d39f6f42c03'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: '28269d4f-f02f-4d8b-82ea-e6d2636d26cc',
                  object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29'
               },
            ],
         },
      ],
   },
   {
      name: 'Affiliated with',
      id: '919db7a4-3c95-4be0-b6ad-b5429c6a7fd4',
      label: 'Organization or group to which this person belongs or is otherwise affiliated with.',
      description: 'Organization or group to which this person belongs or is otherwise affiliated with, such as a professional or social organization or club.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '919db7a4-3c95-4be0-b6ad-b5429c6a7fd4',
                  object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: '919db7a4-3c95-4be0-b6ad-b5429c6a7fd4',
                  object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29'
               },
            ],
         },
      ],
   },
   {
      name: 'Doctoral Students',
      id: '43b4bff0-c548-4e3f-9084-94d7b044e18d',
      label: 'People a doctoral advisor oversaw.',
      description: 'People a doctoral advisor oversaw during the process of writing their dissertations for a doctoral degree.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '43b4bff0-c548-4e3f-9084-94d7b044e18d',
                  object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: '43b4bff0-c548-4e3f-9084-94d7b044e18d',
                  object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755'
               },
            ],
         },
      ],
   },
   {
      name: 'Doctoral Advisor',
      id: 'e3260779-d338-483d-9de8-7096c55fac51',
      label: 'Person who served as an advisor to a doctoral candidate.',
      description: 'Person who served as an advisor to a doctoral candidate.  The doctoral advisor is a member of a university faculty, and is also known as a dissertation advisor, dissertation director, doctoral supervisor, or PhD advisor. ',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'e3260779-d338-483d-9de8-7096c55fac51',
                  object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: 'e3260779-d338-483d-9de8-7096c55fac51',
                  object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755'
               },
            ],
         },
      ],
   },
   {
      name: 'Doctoral Thesis Title',
      id: '408a2eb4-3d66-49e6-b007-0e88fa1471ea',
      label: 'Official title of a person\'s doctoral dissertation.',
      description: 'Official title of a person\'s doctoral dissertation.  The title should be the full title, in English, as it appears on the thesis that has been successfully defended.',
      object_type: 'string',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '408a2eb4-3d66-49e6-b007-0e88fa1471ea',
                  object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755'
               },
            ],
         },
      ],
   },
   {
      name: 'Doctoral Thesis Date',
      id: '3968e925-0f53-48c3-b3d4-3cc21132066f',
      label: 'Date a person\'s PhD or other doctoral dissertation was successfully defended.',
      description: 'Date a person\'s PhD or other doctoral dissertation was successfully defended.  Generally will be year or month/year.',
      object_type: 'date',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '3968e925-0f53-48c3-b3d4-3cc21132066f',
                  object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755'
               },
            ],
         },
      ],
   },
   {
      name: 'Acquirer',
      id: 'f8337728-2cce-42b1-8fa0-3c4ac5d38eb7',
      label: 'Company that acquired another company in this acquisition transaction.',
      description: 'Company that acquired another company in this acquisition transaction, per press release, blog, or other source owned or controlled by one or both of the companies in the transaction.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'f8337728-2cce-42b1-8fa0-3c4ac5d38eb7',
                  object_entity_id: '6d29d6b2-0256-4ae0-9cc4-bdc556ac7d8d'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: 'f8337728-2cce-42b1-8fa0-3c4ac5d38eb7',
                  object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29'
               },
            ],
         },
      ],
   },
   {
      name: 'Acquired Company',
      id: '13596c53-cc26-4750-b337-f8a85577aa7a',
      label: 'Company acquired by another company in an acquisition transaction.',
      description: 'Company acquired by another company in an acquisition transaction, per press release, blog, or other source owned or controlled by one or both of the companies in the transaction.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '13596c53-cc26-4750-b337-f8a85577aa7a',
                  object_entity_id: '6d29d6b2-0256-4ae0-9cc4-bdc556ac7d8d'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: '13596c53-cc26-4750-b337-f8a85577aa7a',
                  object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29'
               },
            ],
         },
      ],
   },
   {
      name: 'Acquisition Transaction',
      id: 'a4503571-c27d-47fd-bb70-2541719374b6',
      label: 'Acquisition transaction for the company.',
      description: 'Acquisition transaction for the company.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'a4503571-c27d-47fd-bb70-2541719374b6',
                  object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: 'a4503571-c27d-47fd-bb70-2541719374b6',
                  object_entity_id: '6d29d6b2-0256-4ae0-9cc4-bdc556ac7d8d'
               },
            ],
         },
      ],
   },
   {
      name: 'Acquisition Amount (USD)',
      id: 'febc8010-bb8b-4fd4-aaea-2e0f6074ba1c',
      label: 'Headline or total amount of the acquisition transaction.',
      description: 'Headline or total amount of the acquisition transaction, per press release, blog, or other source owned or controlled by one or both of the companies in the transaction.',
      object_type: 'integer',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'febc8010-bb8b-4fd4-aaea-2e0f6074ba1c',
                  object_entity_id: '6d29d6b2-0256-4ae0-9cc4-bdc556ac7d8d'
               },
            ],
         },
      ],
   },
   {
      name: 'Transaction Date Closed',
      id: '09296bfc-5ae0-4ec3-973d-648fbab61997',
      label: 'Date an acquisition transaction closed.',
      description: 'Date an acquisition transaction closed, per press release, blog, or other source owned or controlled by one or both of the companies in the transaction',
      object_type: 'date',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '09296bfc-5ae0-4ec3-973d-648fbab61997',
                  object_entity_id: '6d29d6b2-0256-4ae0-9cc4-bdc556ac7d8d'
               },
            ],
         },
      ],
   },
   {
      name: 'Ticker Symbol',
      id: 'c15fabd9-e7b0-4531-a6d9-7ffb75c835eb',
      label: 'Ticker symbol for publicly-traded stock (ie, AAPL) or cryptocurrency (ie, BTC)',
      description: 'Ticker symbol for publicly-traded stock (ie, AAPL) or cryptocurrency (ie, BTC)',
      object_type: 'text',
      citation_requirement: 'CitationRequirement.Recommended',
   },
   {
      name: 'Company Operating Status',
      id: '1c8266d0-3e95-41a5-ac52-f268b8944072',
      label: 'Operating status of a company.',
      description: 'Operating status (active or closed) of a company. ',
      object_type: 'string',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '1c8266d0-3e95-41a5-ac52-f268b8944072',
                  object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29'
               },
            ],
         },
         {
            type: 'enum',
            target: 'PredicateConstraintTarget.Object'
            elements: [
               {
                  object_value: 'Active'
               },
               {
                  object_value: 'Closed'
               },
            ],
         },
      ],
   },
   {
      name: 'Legal Classification',
      id: 'ba2372c0-d779-4b8f-9309-d47568b0d436',
      label: 'Legal structure of a company or organization.',
      description: 'Legal structure of a company or organization, such as limited liability company (LLC), joint-stock company, or nonprofit organization, per regulatory documentation or an official resource owned or controlled by the entity. Classification type should be specific when available, such as \'C corporation\' rather than \'Corporation.\'',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'ba2372c0-d779-4b8f-9309-d47568b0d436',
                  object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29'
               },
            ],
         },
      ],
   },
   {
      name: 'Headquarters',
      id: 'cacb3a4d-70c7-483c-8967-901a043ea42c',
      label: 'Location where a company has its headquarters.',
      description: 'Location where a company or organization has its headquarters, generally where the executive management is located. Typically this should only be a single location.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'cacb3a4d-70c7-483c-8967-901a043ea42c',
                  object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: 'cacb3a4d-70c7-483c-8967-901a043ea42c',
                  object_entity_id: '40548ec9-55e8-4b7e-95e3-c5d9a4590235'
               },
            ],
         },
      ],
   },
   {
      name: 'Public/Private',
      id: '97839c8a-cfff-443f-8d20-8bd4f5758f51',
      label: 'Status of a company, either public or private.',
      description: 'Status of a company, either public (publicly traded companies that sell stock to the general public on a stock exchange) or private (no public ownership of its shares or assets).  Subsidiaries of public companies are usually privately held.',
      object_type: 'string',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '97839c8a-cfff-443f-8d20-8bd4f5758f51',
                  object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29'
               },
            ],
         },
         {
            type: 'enum',
            target: 'PredicateConstraintTarget.Object',
            elements: [
               {
                  object_value: 'Public'
               },
               {
                  object_value: 'Private'
               },
            ],
         },
      ],
   },
   {
      name: 'Place of Incorporation',
      id: '2b38da50-b343-41c4-9808-d4e3ff4aa1fe',
      label: 'Location of legal incorporation of a company',
      description: 'Location of legal incorporation of a company, which may be different than the physical location of a company\u2019s offices.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '2b38da50-b343-41c4-9808-d4e3ff4aa1fe',
                  object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: '2b38da50-b343-41c4-9808-d4e3ff4aa1fe',
                  object_entity_id: '40548ec9-55e8-4b7e-95e3-c5d9a4590235'
               },
               {
                  predicate_id: '2b38da50-b343-41c4-9808-d4e3ff4aa1fe',
                  object_entity_id: 'ca399d7a-e559-4062-9570-1b69c667ca10'
               },
            ],
         },
      ],
   },
   {
      name: 'Legal Name',
      id: 'ceddf2bd-2e2d-4125-b6c3-9ab10cddc087',
      label: 'Name used by entity in legal documents.',
      description: 'Name used by entity in legal documents, per regulatory documentation or an official resource owned or controlled by the entity.  Legal Name should only be used if different from Name (primary name used by this entity). ',
      object_type: 'string',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'ceddf2bd-2e2d-4125-b6c3-9ab10cddc087',
                  object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29'
               },
               {
                  predicate_id: 'ceddf2bd-2e2d-4125-b6c3-9ab10cddc087',
                  object_entity_id: 'c187937c-4d20-48d8-9378-00ed723d2486'
               },
               {
                  
               },
               {
                  predicate_id: 'ceddf2bd-2e2d-4125-b6c3-9ab10cddc087',
                  object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755'
               },
            ],
         },
      ],
   },
   {
      name: 'End Date',
      id: 'ee27a931-cb1c-4d3e-a9f0-3a48df132182',
      label: 'Date that a mutually binding agreement, law, or contract expires.',
      description: 'Date that a mutually binding agreement, law, or contract expires, as listed on document itself or other official source.  For SBA Awards, this should be the Award End Date as listed in the official award information.',
      object_type: 'date',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'ee27a931-cb1c-4d3e-a9f0-3a48df132182',
                  object_entity_id: '273f6736-1c67-4b46-ab23-e9348b466b41'
               },
               {
                  predicate_id: 'ee27a931-cb1c-4d3e-a9f0-3a48df132182',
                  object_entity_id: 'f55f803b-a98c-49f0-a748-0ab2b5132297'
               },
            ],
         },
      ],
   },
   {
      name: 'Taxon Common Name',
      id: '61771b08-4064-45f1-bca9-90bfae59fcda',
      label: 'Common or vernacular name for a biological taxon.',
      description: 'Common or vernacular name for a biological taxon, as listed in reliable scientific sources.',
      object_type: 'string',
      citation_requirement: 'CitationRequirement.Recommended',
   },
   {
      name: 'Date Announced',
      id: 'dff8d031-1b22-4359-a9a3-30e7fb5153ec',
      label: 'Date of the first public announcement of an award, funding round, acquisition, or other entity.',
      description: 'Date of the first public announcement of an award, funding round, acquisition, or other entity that can be validated from a source owned or controlled by the entity, such as an official blog or a press release.',
      object_type: 'date',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'dff8d031-1b22-4359-a9a3-30e7fb5153ec',
                  object_entity_id: '6d29d6b2-0256-4ae0-9cc4-bdc556ac7d8d'
               },
               {
                  predicate_id: 'dff8d031-1b22-4359-a9a3-30e7fb5153ec',
                  object_entity_id: 'c93f9f81-cbfa-47b0-aae9-0e10d97b53f6'
               },
               {
                  predicate_id: 'dff8d031-1b22-4359-a9a3-30e7fb5153ec',
                  object_entity_id: 'c187937c-4d20-48d8-9378-00ed723d2486'
               },
               {
                  predicate_id: 'dff8d031-1b22-4359-a9a3-30e7fb5153ec',
                  object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29'
               },
               {
                  predicate_id: 'dff8d031-1b22-4359-a9a3-30e7fb5153ec',
                  object_entity_id: '2b9258df-ecd1-4394-93f5-868934fd4e8a'
               },
            ],
         },
      ],
   },
   {
      name: 'Also Known As',
      id: '108e5d1a-8cbe-4ae7-8740-68d0c99cd691',
      label: 'Other names for this entity, including aliases, nicknames, abbreviations, and alternative spellings.',
      description: 'Other names for this entity, including aliases, nicknames, abbreviations, and alternative spellings.  Should not include alternative word order (such as Last Name, First Name) or alternative capitalization for a name.',
      object_type: 'string',
      citation_requirement: 'CitationRequirement.Recommended',
   },
   {
      name: 'Pseudonym',
      id: 'ac553a3b-038f-40b9-b2dd-c06e6bc28cec',
      label: 'Fictitious name that a person or group assumes for a particular purpose, separate from their true name.',
      description: 'Fictitious name that a person or group assumes for a particular purpose, separate from their true name.  Commonly used for authors, and also known as \'pen name.\'',
      object_type: 'string',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'ac553a3b-038f-40b9-b2dd-c06e6bc28cec',
                  object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755'
               },
               {
                  predicate_id: 'ac553a3b-038f-40b9-b2dd-c06e6bc28cec',
                  object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29'
               },
            ],
         },
      ],
   },
   {
      name: 'Motto',
      id: '504259b4-8b25-4110-b77c-f653ec12b7fe',
      label: 'Short sentence or phrase commonly known to encapsulate the beliefs or values of an entity.',
      description: 'Short sentence or phrase commonly known to encapsulate the beliefs or values of an entity. Should not be confused with an organization\'s tagline used for marketing a brand or product.',
      object_type: 'string',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '504259b4-8b25-4110-b77c-f653ec12b7fe',
                  object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29'
               },
            ],
         },
      ],
   },
   {
      name: 'Tagline',
      id: '984cd4ab-85bd-4a08-acfd-8c3802b725fe',
      label: 'Official marketing tagline of the organization.',
      description: 'Official marketing tagline of the organization, usually a short catchpharse to sum up the meaning or value of the organization\'s brand or the brand\'s products. Taglines, which rarely change, should not be confused with slogans used short-term for an advertising campaign or website.',
      object_type: 'string',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '984cd4ab-85bd-4a08-acfd-8c3802b725fe',
                  object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29'
               },
            ],
         },
      ],
   },
   {
      name: 'Effective Date',
      id: '639f060c-8606-48f6-a7b5-ee9edbb84ea7',
      label: 'Date a law or policy becomes effective, which may be different than the date enacted.',
      description: 'Date a law or policy becomes effective, which may be different than the date enacted.',
      object_type: 'date',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '639f060c-8606-48f6-a7b5-ee9edbb84ea7',
                  object_entity_id: '273f6736-1c67-4b46-ab23-e9348b466b41'
               },
            ],
         },
      ],
   },
   {
      name: 'Token Standard',
      id: 'f776ec59-ce67-4508-bc36-acda2df456f7',
      label: 'A set of rules that allows the development of cryptocurrency tokens on a blockchain protocol, such as ERC-721 on Ethereum.',
      description: 'A set of rules that allows the development of cryptocurrency tokens on a blockchain protocol, such as ERC-721 on Ethereum.',
      object_type: 'string',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'f776ec59-ce67-4508-bc36-acda2df456f7',
                  object_entity_id: '635dd566-e3f2-4bcd-bc51-95f143b075c7'
               },
            ],
         },
      ],
   },
   {
      name: 'Hash Function',
      id: '5d29c9f2-7618-417c-ad12-2eed9a9dd779',
      label: 'Cryptographic hash function of a cryptocurrency.',
      description: 'Cryptographic hash function of a cryptocurrency, including keyed and unkeyed.  The hash function (such as ETHash) should be confused with the blockchain technology (such as Ethereum) that uses it.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '5d29c9f2-7618-417c-ad12-2eed9a9dd779',
                  object_entity_id: '635dd566-e3f2-4bcd-bc51-95f143b075c7'
               },
            ],
         },
      ],
   },
   {
      name: 'Clinical Trial Start Date',
      id: '6c7c41d6-ca87-4ee2-8ab9-9ca03762cbb2',
      label: 'Date on which the clinical trial starts.',
      description: 'Date on which the clinical trial starts, which is the date the actual date on which the first participant was enrolled in the study.',
      object_type: 'date',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '6c7c41d6-ca87-4ee2-8ab9-9ca03762cbb2',
                  object_entity_id: '2fada829-b268-4542-9dc2-8740248e975d'
               },
            ],
         },
      ],
   },
   {
      name: 'Primary Completion Date',
      id: '182d4c2f-a98b-440b-aeac-8caea8edf230',
      label: 'Primary date on which clinical trial concludes for the primary outcome measure.',
      description: 'Primary date on with date on which the last participant in a clinical study was examined or received an intervention to collect final data for the primary outcome measure. ',
      object_type: 'date',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '182d4c2f-a98b-440b-aeac-8caea8edf230',
                  object_entity_id: '2fada829-b268-4542-9dc2-8740248e975d'
               },
            ],
         },
      ],
   },
   {
      name: 'NCT Number',
      id: '2f65a0b3-8f11-4be8-9c37-7f03a7e5e744',
      label: 'National Clinical Trial number.',
      description: 'National Clinical Trial number, which is the  unique identification code given to a clinical study upon registration at ClinicalTrials.gov. Format is\'NCT\' followed by an 8-digit number.',
      object_type: 'anyURI',
      citation_requirement: 'CitationRequirement.Optional',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '2f65a0b3-8f11-4be8-9c37-7f03a7e5e744',
                  object_entity_id: '2fada829-b268-4542-9dc2-8740248e975d'
               },
            ],
         },
      ],
   },
   {
      name: 'Clinical Trial Study Type',
      id: 'bde884df-85bd-4d7f-aa59-c3369c3910f2',
      label: 'Type of clinical study.',
      description: 'Type of clinical study: Interventional (also known as clinical trial), Observational (including patient registries), or Expanded Access.',
      object_type: 'string',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'bde884df-85bd-4d7f-aa59-c3369c3910f2',
                  object_entity_id: '2fada829-b268-4542-9dc2-8740248e975d'
               },
            ],
         },
         {
            type: 'enum',
            target: 'PredicateConstraintTarget.Object',
            elements: [
               {
                  object_value: 'Interventional'
               },
               {
                  object_value: 'Observational'
               },
               {
                  object_value: 'Expanded access'
               },
            ],
         },
      ],
   },
   {
      name: 'Study completion date',
      id: '4fa01810-7b0f-48ea-a046-2b1049d9c406',
      label: 'Primary date on which clinical trial concludes for the primary and secondary outcome measures, and adverse events',
      description: 'The date on which the last participant in a clinical study was examined or received an intervention/treatment to collect final data for the primary outcome measures, secondary outcome measures, and adverse events',
      object_type: 'date',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '4fa01810-7b0f-48ea-a046-2b1049d9c406',
                  object_entity_id: '2fada829-b268-4542-9dc2-8740248e975d'
               },
            ],
         },
      ],
   },
   {
      name: 'Trial Recruitment Status',
      id: 'cb2ee7da-a696-44f2-84ef-9af7733c9ca9',
      label: 'Recruitment status of clinical study.',
      description: 'Recruitment status of clinical study: Not yet recruiting, Recruiting, Enrolling by invitation, Active not Recruiting, Suspended, Terminated, Completed, Withdrawn, Unknown.',
      object_type: 'string',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'cb2ee7da-a696-44f2-84ef-9af7733c9ca9',
                  object_entity_id: '2fada829-b268-4542-9dc2-8740248e975d'
               },
            ],
         },
         {
            type: 'enum',
            target: 'PredicateConstraintTarget.Object',
            elements: [
               {
                  object_value: 'Recruiting'
               },
               {
                  object_value: 'Not yet recruiting'
               },
               {
                  object_value: 'Available for expanded access'
               },
               {
                  object_value: 'Active'
               },
               {
                  object_value: 'not recruiting'
               },
               {
                  object_value: 'Completed'
               },
               {
                  object_value: 'Terminated'
               },
               {
                  object_value: 'Suspended'
               },
               {
                  object_value: 'Withdrawn'
               },
               {
                  object_value: 'Enrolling by invitation'
               },
               {
                  object_value: 'Temporarily not available for expanded access'
               },
               {
                  object_value: 'No longer available for expanded access'
               },
               {
                  object_value: 'Approved for marketing'
               },
               {
                  object_value: 'Unknown'
               },
            ],
         },
      ],
   },
   {
      name: 'Trial Sponsor',
      id: '9573b58e-b79d-4c45-a205-ff658d0e8628',
      label: 'Entity who initiates the study. ',
      description: 'Entity who initiates the study and who has authority and control over the study.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '9573b58e-b79d-4c45-a205-ff658d0e8628',
                  object_entity_id: '2fada829-b268-4542-9dc2-8740248e975d'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: '9573b58e-b79d-4c45-a205-ff658d0e8628',
                  object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29'
               },
            ],
         },
      ],
   },
   {
      name: 'Trial Recruitment Size',
      id: '9c23aab8-452d-4385-a607-be5792df4803',
      label: 'Number of participants in clinical trial.',
      description: 'Number of participants in clinical trial, as indicated by the enrollment number list in the trial documentation.',
      object_type: 'integer',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '9c23aab8-452d-4385-a607-be5792df4803',
                  object_entity_id: '2fada829-b268-4542-9dc2-8740248e975d'
               },
            ],
         },
      ],
   },
   {
      name: 'Interventional Trial Phase',
      id: '7c697039-ec87-4340-9226-188dfb0d685f',
      label: 'Phase of an interventional clinical trial.',
      description: 'Phase of an interventional clinical trial, which will be one of five phases: Early Phase 1 (formerly listed as Phase 0), Phase 1, Phase 2, Phase 3, and Phase 4. ',
      object_type: 'string',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '7c697039-ec87-4340-9226-188dfb0d685f',
                  object_entity_id: '2fada829-b268-4542-9dc2-8740248e975d'
               },
            ],
         },
         {
            type: 'enum',
            target: 'PredicateConstraintTarget.Object',
            elements: [
               {
                  object_value: 'Early Phase 1'
               },
               {
                  object_value: 'Phase 1'
               },
               {
                  object_value: 'Phase 2'
               },
               {
                  object_value: 'Phase 3'
               },
               {
                  object_value: 'Phase 4'
               },
               {
                  object_value: 'Not Applicable'
               },
            ],
         },
      ],
   },
   {
      name: 'Health conditions in trial',
      id: '438dce57-537b-44fe-80e2-b8417fa0089e',
      label: 'The health conditions studied in the clinical trial.',
      description: 'The health conditions studied in the clinical trial,  including diseases, disorders, syndromes, illness, injury or other health-related issues.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '438dce57-537b-44fe-80e2-b8417fa0089e',
                  object_entity_id: '2fada829-b268-4542-9dc2-8740248e975d'
               },
            ],
         },
      ],
   },
   {
      name: 'Observational Study Perspective',
      id: 'c2606bf5-8df4-4c46-b155-4a1811359007',
      label: 'Temporal relationship of observation period to time of participant enrollment in a clinical trial.',
      description: 'The temporal relationship of observation period to time of participant enrollment (Retrospective, Prospective, Cross-sectional, Other) as noted in the Study Design section of a clinical study.  Applies only when Clinical Trial Study Type is Observational.',
      object_type: 'string',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'c2606bf5-8df4-4c46-b155-4a1811359007',
                  object_entity_id: '2fada829-b268-4542-9dc2-8740248e975d'
               },
            ],
         },
         {
            type: 'enum',
            target: 'PredicateConstraintTarget.Object',
            elements: [
               {
                  object_value: 'Retrospective'
               },
               {
                  object_value: 'Prospective'
               },
               {
                  object_value: 'Other'
               },
               {
                  object_value: 'Cross-Sectional'
               },
            ],
         },
      ],
   },
   {
      name: 'Observational Clinical Trial Type',
      id: 'a3cb5373-b541-4057-ba8a-7b4202be86a4',
      label: 'Type of an observational clinical trial.',
      description: 'Type of an observational clinical trial, such as Cohort or Case-Control. Applies only when Clinical Trial Study Type is Observational.',
      object_type: 'string',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'a3cb5373-b541-4057-ba8a-7b4202be86a4',
                  object_entity_id: '2fada829-b268-4542-9dc2-8740248e975d'
               },
            ],
         },
         {
            type: 'enum',
            target: 'PredicateConstraintTarget.Object',
            elements: [
               {
                  object_value: 'Cohort'
               },
               {
                  object_value: 'Case-Control'
               },
               {
                  object_value: 'Case-Only'
               },
               {
                  object_value: 'Case-Crossover'
               },
               {
                  object_value: 'Family-Based'
               },
               {
                  object_value: 'Other'
               },
               {
                  object_value: 'Ecologic or Community'
               },
            ],
         },
      ],
   },
   {
      name: 'Interventional Trial Purpose',
      id: 'f3cdfa84-161c-4b19-b62e-6c47c9cb553b',
      label: 'The main objective of interventional clinical trial. \n',
      description: 'The main objective of interventional clinical trial.  The types primary purposes include:  treatment, prevention, diagnostic, supportive care, screening, health services research, basic science, and other.\n',
      object_type: 'string',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'f3cdfa84-161c-4b19-b62e-6c47c9cb553b',
                  object_entity_id: '2fada829-b268-4542-9dc2-8740248e975d'
               },
            ],
         },
         {
            type: 'enum',
            target: 'PredicateConstraintTarget.Object',
            elements: [
               {
                  object_value: 'Treatment'
               },
               {
                  object_value: 'Prevention'
               },
               {
                  object_value: 'Diagnostic'
               },
               {
                  object_value: 'Screening'
               },
               {
                  object_value: 'Other'
               },
               {
                  object_value: 'Supportive Care'
               },
               {
                  object_value: 'Health Services Research'
               },
               {
                  object_value: 'Basic Science'
               },
               {
                  object_value: 'Device Feasibility'
               },
            ],
         },
      ],
   },
   {
      name: 'Intervention Type',
      id: '9cebd57e-6a42-42d2-9714-36de8c42a32f',
      label: 'Type of intervention used in a clinical trial',
      description: 'Type of intervention used in a clinical trial, including drugs, medical devices, procedures, vaccines, and other products and approaches.  ',
      object_type: 'string',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '9cebd57e-6a42-42d2-9714-36de8c42a32f',
                  object_entity_id: '2fada829-b268-4542-9dc2-8740248e975d'
               },
            ],
         },
         {
            type: 'enum',
            target: 'PredicateConstraintTarget.Object',
            elements: [
               {
                  object_value: 'Drug'
               },
               {
                  object_value: 'Device'
               },
               {
                  object_value: 'Biological'
               },
               {
                  object_value: 'Procedure'
               },
               {
                  object_value: 'Radiation'
               },
               {
                  object_value: 'Behavioral'
               },
               {
                  object_value: 'Genetic'
               },
               {
                  object_value: 'Dietary supplement'
               },
               {
                  object_value: 'Combination product'
               },
               {
                  object_value: 'Diagnostic test'
               },
               {
                  object_value: 'Other'
               },
            ],
         },
      ],
   },
   {
      name: 'Trial Collaborator',
      id: 'b36e1e3b-337c-4a4d-9caa-4638d469f16c',
      label: 'Entity, other than the sponsor, providing support to the clinical trial.',
      description: 'Entity other than the sponsor that provides support for a clinical study, including activities such as funding, design, implementation, data analysis, or reporting.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'b36e1e3b-337c-4a4d-9caa-4638d469f16c',
                  object_entity_id: '2fada829-b268-4542-9dc2-8740248e975d'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: 'b36e1e3b-337c-4a4d-9caa-4638d469f16c',
                  object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29'
               },
            ],
         },
      ],
   },
   {
      name: 'Participating Facility',
      id: '5da8e975-88fc-4b8f-81ff-7c51b4efc834',
      label: 'Facility participating in a clinical trial.',
      description: 'Research or medical facility participating in a clinical trial, if available in the Location listing of the trial.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '5da8e975-88fc-4b8f-81ff-7c51b4efc834',
                  object_entity_id: '2fada829-b268-4542-9dc2-8740248e975d'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: '5da8e975-88fc-4b8f-81ff-7c51b4efc834',
                  object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29'
               },
            ],
         },
      ],
   },
   {
      name: 'Intervention Name',
      id: '3a885fa0-0ba1-410e-8417-e606f5802d50',
      label: 'Entity representing a specific named intervention',
      description: 'Entity representing a specific named intervention, which may include specific drugs, medical devices, procedures, vaccines, and other products and approaches.  ',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '3a885fa0-0ba1-410e-8417-e606f5802d50',
                  object_entity_id: '2fada829-b268-4542-9dc2-8740248e975d'
               },
            ],
         },
      ],
   },
   {
      name: 'Funding Rounds',
      id: '9bb1c4a7-246f-4643-9b56-a14d0027f9a4',
      label: 'Funding rounds that a company has received.',
      description: 'Entities for the funding rounds that a company has received.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '9bb1c4a7-246f-4643-9b56-a14d0027f9a4',
                  object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: '9bb1c4a7-246f-4643-9b56-a14d0027f9a4',
                  object_entity_id: 'c93f9f81-cbfa-47b0-aae9-0e10d97b53f6'
               },
            ],
         },
      ],
   },
   {
      name: 'Funded Company',
      id: '8fa38ac4-b0c5-4f46-a273-a2b6e03afae2',
      label: 'Company that received funding from this round.',
      description: 'Company that received funding from this round, per an official announcement or other source controlled or owned by the company.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '8fa38ac4-b0c5-4f46-a273-a2b6e03afae2',
                  object_entity_id: 'c93f9f81-cbfa-47b0-aae9-0e10d97b53f6'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: '8fa38ac4-b0c5-4f46-a273-a2b6e03afae2',
                  object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29'
               },
            ],
         },
      ],
   },
   {
      name: 'Funding Round Date',
      id: '7535e456-84a6-4c18-943c-59ba885ea74a',
      label: 'Date a funding round closed',
      description: 'Date a funding round closed, which may differ from the date a round is announced. ',
      object_type: 'date',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '7535e456-84a6-4c18-943c-59ba885ea74a',
                  object_entity_id: 'c93f9f81-cbfa-47b0-aae9-0e10d97b53f6'
               },
            ],
         },
      ],
   },
   {
      name: 'Funding Round Amount (USD)',
      id: '8cb26d1a-a209-43ea-90a4-e790dab9ce1e',
      label: 'Amount of money (in USD) raised in a funding round.',
      description: 'Amount of money (in USD) raised in a funding round, per an official announcement or other source controlled or owned by the company.  If the amount is listed in another currency, the conversion to USD should be calculated using the date the funding was announced.',
      object_type: 'integer',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '8cb26d1a-a209-43ea-90a4-e790dab9ce1e',
                  object_entity_id: 'c93f9f81-cbfa-47b0-aae9-0e10d97b53f6'
               },
            ],
         },
      ],
   },
   {
      name: 'Funding Type',
      id: '7901939d-ccc3-4c51-8636-2078ad9e3dfd',
      label: 'The type of funding associated with this funding round.',
      description: 'The type of funding associated with this funding round (such as Series A, Initial Public Offering (IPO), private equity) per an official announcement or other source controlled or owned by the company.',
      object_type: 'string',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '7901939d-ccc3-4c51-8636-2078ad9e3dfd',
                  object_entity_id: 'c93f9f81-cbfa-47b0-aae9-0e10d97b53f6'
               },
            ],
         },
         {
            type: 'enum',
            target: 'PredicateConstraintTarget.Object',
            elements: [
               {
                  object_value: 'Grant (money)'
               },
               {
                  object_value: 'Convertible note'
               },
               {
                  object_value: 'Angel round'
               },
               {
                  object_value: 'Pre-seed'
               },
               {
                  object_value: 'Seed round'
               },
               {
                  object_value: 'Crowdfunding'
               },
               {
                  object_value: 'Venture round'
               },
               {
                  object_value: 'Corporate funding round'
               },
               {
                  object_value: 'Series A round'
               },
               {
                  object_value: 'Series B round'
               },
               {
                  object_value: 'Series C round'
               },
               {
                  object_value: 'Series D round'
               },
               {
                  object_value: 'Series E round'
               },
               {
                  object_value: 'Series F round'
               },
               {
                  object_value: 'Series G round'
               },
               {
                  object_value: 'Series H round'
               },
               {
                  object_value: 'Series I round'
               },
               {
                  object_value: 'Series J round'
               },
               {
                  object_value: 'Series K round'
               },
               {
                  object_value: 'Series L round'
               },
               {
                  object_value: 'Private equity'
               },
               {
                  object_value: 'Initial Coin Offering (ICO)'
               },
               {
                  object_value: 'Initial public offering (IPO)'
               },
            ],
         },
      ],
   },
   {
      name: 'Announcement URL',
      id: 'f89d3138-f12f-4f1f-b1ed-652202d78b5b',
      label: 'URL of first public announcement of an award, funding round, acquisition, partnership, or other event.',
      description: 'URL of first public announcement of an award, funding round, acquisition, partnership, or other event. URL should be from a source owned or controlled by the entity, such as an official blog or a press release.',
      object_type: 'anyURI',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'f89d3138-f12f-4f1f-b1ed-652202d78b5b',
                  object_entity_id: '6d29d6b2-0256-4ae0-9cc4-bdc556ac7d8d'
               },
               {
                  predicate_id: 'f89d3138-f12f-4f1f-b1ed-652202d78b5b',
                  object_entity_id: 'c93f9f81-cbfa-47b0-aae9-0e10d97b53f6'
               },
               {
                  predicate_id: 'f89d3138-f12f-4f1f-b1ed-652202d78b5b',
                  object_entity_id: 'c187937c-4d20-48d8-9378-00ed723d2486'
               },
               {
                  predicate_id: 'f89d3138-f12f-4f1f-b1ed-652202d78b5b',
                  object_entity_id: '2b9258df-ecd1-4394-93f5-868934fd4e8a'
               },
               {
                  predicate_id: 'f89d3138-f12f-4f1f-b1ed-652202d78b5b',
                  object_entity_id: '104ac3a1-bf25-49be-9f0a-1b46104e06eb'
               },
            ],
         },
      ],
   },
   {
      name: 'Postmoney Valuation',
      id: '537fd632-b5f7-4f60-8d6a-9a61a1927ee0',
      label: 'Valuation of company after this funding round.',
      description: 'Valuation of company after this funding round.  Postmoney valuation is the equal to the premoney valuation plus amount of funding received in the round.',
      object_type: 'integer',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '537fd632-b5f7-4f60-8d6a-9a61a1927ee0',
                  object_entity_id: 'c93f9f81-cbfa-47b0-aae9-0e10d97b53f6'
               },
            ],
         },
      ],
   },
   {
      name: 'Premoney Valuation',
      id: '70dd4d7d-b5e9-427c-a8bf-e35c1d09f337',
      label: 'Premoney valuation of the company before the funding round.',
      description: 'Premoney valuation of the company before the funding round, in other words how much the company is worth before receiving the funding.',
      object_type: 'integer',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '70dd4d7d-b5e9-427c-a8bf-e35c1d09f337',
                  object_entity_id: 'c93f9f81-cbfa-47b0-aae9-0e10d97b53f6'
               },
            ],
         },
      ],
   },
   {
      name: 'Award Type',
      id: 'b473cfda-b7e4-420f-b8f7-88031621f971',
      label: 'Parent program of the award, either SBIR or STTR. ',
      description: 'Parent program of the award, either SBIR or STTR, as listed in the SBIR/STTR award information.',
      object_type: 'string',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'b473cfda-b7e4-420f-b8f7-88031621f971',
                  object_entity_id: 'f55f803b-a98c-49f0-a748-0ab2b5132297'
               },
            ],
         },
         {
            type: 'enum',
            target: 'PredicateConstraintTarget.Object',
            elements: [
               {
                  object_value: 'SBIR'
               },
               {
                  object_value: 'STTR'
               },
            ],
         },
      ],
   },
   {
      name: 'Award Phase',
      id: 'e175b0b0-fc8b-412c-9270-52158f7d7f37',
      label: 'Phase of a small business award, either Phase I or II.',
      description: 'Phase of a small business award, either Phase I or II, as listed in the SBIR/STTR award information.',
      object_type: 'string',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'e175b0b0-fc8b-412c-9270-52158f7d7f37',
                  object_entity_id: 'f55f803b-a98c-49f0-a748-0ab2b5132297'
               },
            ],
         },
         {
            type: 'enum',
            target: 'PredicateConstraintTarget.Object',
            elements: [
               {
                  object_value: 'Phase I'
               },
               {
                  object_value: 'Phase II'
               },
            ],
         },
      ],
   },
   {
      name: 'SBIR/STTR Award Recipient',
      id: 'af94d41e-aa33-47cc-bd3f-0eeb26894d27',
      label: 'Entity that received a particular small business award.',
      description: 'Entity that received a particular small business award.  Includes Small Business Innovation Research (SBIR) and Small Business Technology Transfer (STTR) awards.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'af94d41e-aa33-47cc-bd3f-0eeb26894d27',
                  object_entity_id: 'f55f803b-a98c-49f0-a748-0ab2b5132297'
               },
            ],
         },
      ],
   },
   {
      name: 'Contract Number (US Government)',
      id: '249f906a-855c-4eb7-b2fb-d5088f684010',
      label: 'Unique contract number associated with an a U.S. government contract.',
      description: 'Unique contract number associated with an a U.S. government contract, such as a SBIR/STTR award.',
      object_type: 'string',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '249f906a-855c-4eb7-b2fb-d5088f684010',
                  object_entity_id: 'f55f803b-a98c-49f0-a748-0ab2b5132297'
               },
            ],
         },
      ],
   },
   {
      name: 'SBIR/STTR Awards',
      id: '10c2c5d1-443d-43ea-86b2-a35e8c318196',
      label: 'National small business awards that have been given to an entity.',
      description: 'National small business awards that have been given to an entity.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '10c2c5d1-443d-43ea-86b2-a35e8c318196',
                  object_entity_id: 'f55f803b-a98c-49f0-a748-0ab2b5132297'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: '10c2c5d1-443d-43ea-86b2-a35e8c318196',
                  object_entity_id: 'f55f803b-a98c-49f0-a748-0ab2b5132297'
               },
            ],
         },
      ],
   },
   {
      name: 'Government Branch',
      id: '473b9f57-588a-4a7d-8e95-720f86d7bd78',
      label: 'Government branch associated with this entity's small business award.',
      description: 'Government branch associated with this entity's small business award.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '473b9f57-588a-4a7d-8e95-720f86d7bd78',
                  object_entity_id: 'f55f803b-a98c-49f0-a748-0ab2b5132297'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: '473b9f57-588a-4a7d-8e95-720f86d7bd78',
                  object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29'
               },
            ],
         },
      ],
   },
   {
      name: 'Country',
      id: '60179f2e-da7a-4f36-bd52-0861baff9818',
      label: 'Country associated with the current location of this person, company, organization, or port.  ',
      description: 'Country associated with the current location of this person, company, organization, or port.  ',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: '60179f2e-da7a-4f36-bd52-0861baff9818',
                  object_entity_id: 'ca399d7a-e559-4062-9570-1b69c667ca10'
               },
            ],
         },
      ],
   },
   {
      name: 'Currency',
      id: '02dc08e1-4db9-4463-a4e3-f95bc289db7e',
      label: 'Currencies in circulation for a country.',
      description: 'Currencies in circulation for a country.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '02dc08e1-4db9-4463-a4e3-f95bc289db7e',
                  object_entity_id: 'ca399d7a-e559-4062-9570-1b69c667ca10'
               },
            ],
         },
      ],
   },
   {
      name: 'UNII',
      id: 'b14d966a-4a66-4404-b1e4-dae9f53e2e1b',
      label: 'FDA UNII substance identifier',
      description: 'The Unique Ingredient Identifier (UNII) is an alphanumeric identifier for a species or substance that is generated by the Global Substance Registration System (GSRS) of the U.S. Food and Drug Administration (FDA).',
      object_type: 'anyURI',
      citation_requirement: 'CitationRequirement.Optional',
   },
   {
      name: 'ChEMBL ID',
      id: '64effb4b-0deb-422a-9110-df298a02f988',
      label: 'EBI ChEMBL chemical identifier',
      description: 'The unique identifier for the European Bioinformatics Institute (EBI) ChEMBL database of bioactive molecules.',
      object_type: 'anyURI',
      citation_requirement: 'CitationRequirement.Optional',
   },
   {
      name: 'HGNC Symbol',
      id: 'ac3f1cb1-8531-4ca1-beeb-b316e1ca20de',
      label: 'HGNC Gene Symbol',
      description: 'The unique identifier for a gene in the HUGO Gene Nomenclature Committee (HGNC) system.',
      object_type: 'anyURI',
      citation_requirement: 'CitationRequirement.Optional',
   },
   {
      name: 'ISO-4 Abbreviation',
      id: '08bebe3e-5564-4dd6-9937-cd04cb585528',
      label: 'ISO-4 abbreviation for a journal or scientific publication.',
      description: 'ISO-4 abbreviation for a journal or scientific publication, as assigned by the International Organization for Standardization (ISO).',
      object_type: 'string',
      citation_requirement: 'CitationRequirement.Recommended',
   },
   {
      name: 'PDB Ligand ID',
      id: 'ef8a899d-56c6-48bb-82a6-2fb192ccec57',
      label: 'Protein Data Bank Ligand ID',
      description: 'The alphanumeric identifier for a substance in the Research Collaboratory for Structural Bioinformatics (RCSB) Protein Data Bank.',
      object_type: 'anyURI',
      citation_requirement: 'CitationRequirement.Optional',
   },
   {
      name: 'Total Sold (USD)',
      id: '5394e4b1-26ac-4f2e-be3e-1b2f191109af',
      label: 'Total amount sold for an investment fund. ',
      description: 'Total amount sold for an investment fund, per U.S. Securities and Exchange (SEC) filings. ',
      object_type: 'float',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '5394e4b1-26ac-4f2e-be3e-1b2f191109af',
                  object_entity_id: '2b9258df-ecd1-4394-93f5-868934fd4e8a'
               },
            ],
         },
      ],
   },
   {
      name: 'Investment Fund Type',
      id: '4ae3d52d-bb3a-4f67-94f4-690d626afb40',
      label: 'Investment type associated with a fund.',
      description: 'Investment type associated with a fund, such as hedge or private equity fund.',
      object_type: 'string',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '4ae3d52d-bb3a-4f67-94f4-690d626afb40',
                  object_entity_id: '2b9258df-ecd1-4394-93f5-868934fd4e8a'
               },
            ],
         },
         {
            type: 'enum',
            target: 'PredicateConstraintTarget.Object',
            elements: [
               {
                  object_value: 'Sovereign wealth fund'
               },
               {
                  object_value: 'Pension fund'
               },
               {
                  object_value: 'Endowment fund'
               },
               {
                  object_value: 'Hedge fund'
               },
               {
                  object_value: 'Liquidity Fund'
               },
               {
                  object_value: 'Private equity fund'
               },
               {
                  object_value: 'Real estate fund'
               },
               {
                  object_value: 'Securitized Asset Fund'
               },
               {
                  object_value: 'Venture capital fund'
               },
               {
                  object_value: 'Other private fund'
               },
            ],
         },
      ],
   },
   {
      name: 'Total Offering (USD)',
      id: 'c67d1a01-f8ba-43d9-acfa-91b84d3d1d6e',
      label: 'Total offering amount for an investment fund. ',
      description: 'Total offering amount for an investment fund, per U.S. Securities and Exchange (SEC) filings. ',
      object_type: 'float',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'c67d1a01-f8ba-43d9-acfa-91b84d3d1d6e',
                  object_entity_id: '2b9258df-ecd1-4394-93f5-868934fd4e8a'
               },
            ],
         },
      ],
   },
   {
      name: 'Associated Investment Funds',
      id: '7a746742-2955-4a14-a40e-de232ced26c9',
      label: 'Fund entities associated with this investor.',
      description: 'Entities for the pooled investment funds of this venture capital firm or other investor.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '7a746742-2955-4a14-a40e-de232ced26c9',
                  object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29'
               },
               {
                  predicate_id: '7a746742-2955-4a14-a40e-de232ced26c9',
                  object_entity_id: '7dfe54f4-ac56-438d-97c9-df9f3630b0a9'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: '7a746742-2955-4a14-a40e-de232ced26c9',
                  object_entity_id: '2b9258df-ecd1-4394-93f5-868934fd4e8a'
               },
            ],
         },
      ],
   },
   {
      name: 'Parent Investment Firm',
      id: '6a8142a3-e66d-4198-aa4d-e8973e876833',
      label: 'Investment firm that manages an investment fund.',
      description: 'Entity for the venture capital or investment firm that manages the investment fund.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '6a8142a3-e66d-4198-aa4d-e8973e876833',
                  object_entity_id: '2b9258df-ecd1-4394-93f5-868934fd4e8a'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: '6a8142a3-e66d-4198-aa4d-e8973e876833',
                  object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29'
               },
               {
                  predicate_id: '6a8142a3-e66d-4198-aa4d-e8973e876833',
                  object_entity_id: '7dfe54f4-ac56-438d-97c9-df9f3630b0a9'
               },
            ],
         },
      ],
   },
   {
      name: 'Total Offering Amount (USD)',
      id: '933b82c0-6ac7-446d-ad94-cee5ca44ccac',
      label: 'Total amount offered for the investment fund or funding round. ',
      description: 'Total amount offered for the investment fund or funding round, per U.S. Securities and Exchange Commission (SEC) Form D filing.',
      object_type: 'integer',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '933b82c0-6ac7-446d-ad94-cee5ca44ccac',
                  object_entity_id: '2b9258df-ecd1-4394-93f5-868934fd4e8a'
               },
               {
                  predicate_id: '933b82c0-6ac7-446d-ad94-cee5ca44ccac',
                  object_entity_id: 'c93f9f81-cbfa-47b0-aae9-0e10d97b53f6'
               },
            ],
         },
      ],
   },
   {
      name: 'Date Signed',
      id: '4b8d2824-8095-42c0-9502-26fa58811876',
      label: 'Date a law or mutually binding agreement was signed.',
      description: 'Date a law or mutually binding agreement was signed.',
      object_type: 'date',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '4b8d2824-8095-42c0-9502-26fa58811876',
                  object_entity_id: '273f6736-1c67-4b46-ab23-e9348b466b41'
               },
            ],
         },
      ],
   },
   {
      name: 'Enacted by',
      id: 'f332c2e7-26ef-4777-8a96-be0353dd4c4f',
      label: 'Entity that enacted a law or policy.',
      description: 'The government agency, organization, country, or other entity that enacted a law or policy.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'f332c2e7-26ef-4777-8a96-be0353dd4c4f',
                  object_entity_id: '273f6736-1c67-4b46-ab23-e9348b466b41'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: 'f332c2e7-26ef-4777-8a96-be0353dd4c4f',
                  object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29'
               },
               {
                  predicate_id: 'f332c2e7-26ef-4777-8a96-be0353dd4c4f',
                  object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755'
               },
               {
                  predicate_id: 'f332c2e7-26ef-4777-8a96-be0353dd4c4f',
                  object_entity_id: '40548ec9-55e8-4b7e-95e3-c5d9a4590235'
               },
            ],
         },
      ],
   },
   {
      name: 'Date Enacted',
      id: '52741a44-aecc-44a7-9681-b47f86fe9b3a',
      label: 'Date a law or mutually binding agreement was enacted.',
      description: 'Date a law or mutually binding agreement was enacted. Applies only when subject is a Legislation.',
      object_type: 'date',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '52741a44-aecc-44a7-9681-b47f86fe9b3a',
                  object_entity_id: '273f6736-1c67-4b46-ab23-e9348b466b41'
               },
            ],
         },
      ],
   },
   {
      name: 'Jurisdiction',
      id: 'adaf84bc-35b4-41e2-a466-1157f5b932af',
      label: 'Area subject to a government and set of laws, such as a country or federated state.',
      description: 'Area subject to a government and set of laws, such as a country or federated state.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'adaf84bc-35b4-41e2-a466-1157f5b932af',
                  object_entity_id: '273f6736-1c67-4b46-ab23-e9348b466b41'
               },
               {
                  predicate_id: 'adaf84bc-35b4-41e2-a466-1157f5b932af',
                  object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: 'adaf84bc-35b4-41e2-a466-1157f5b932af',
                  object_entity_id: '40548ec9-55e8-4b7e-95e3-c5d9a4590235'
               },
            ],
         },
      ],
   },
   {
      name: 'Signed by',
      id: 'c54f1b8d-c8bb-463a-b056-fcd9d0445b4f',
      label: 'Entity that signed a legal document.',
      description: 'Entity that signed a legal document or mutually-binding agreement.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'c54f1b8d-c8bb-463a-b056-fcd9d0445b4f',
                  object_entity_id: '273f6736-1c67-4b46-ab23-e9348b466b41'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: 'c54f1b8d-c8bb-463a-b056-fcd9d0445b4f',
                  object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755'
               },
               {
                  predicate_id: 'c54f1b8d-c8bb-463a-b056-fcd9d0445b4f',
                  object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29'
               },
               {
                  predicate_id: 'c54f1b8d-c8bb-463a-b056-fcd9d0445b4f',
                  object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29'
               },
               {
                  predicate_id: 'c54f1b8d-c8bb-463a-b056-fcd9d0445b4f',
                  object_entity_id: '40548ec9-55e8-4b7e-95e3-c5d9a4590235'
               },
            ],
         },
      ],
   },
   {
      name: 'Genre',
      id: 'e5151506-26f3-48e9-afad-f683d3adbcfd',
      label: 'Genre of the book, album, game, or other creative work. ',
      description: 'Genre of the book, album, game, or other creative work.  Should only be applied to the creative work itself, not the creator of the work or the characters in the work.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'e5151506-26f3-48e9-afad-f683d3adbcfd',
                  object_entity_id: '163946c5-465f-47dd-8907-f8f2ca4b29da'
               },
            ],
         },
      ],
   },
   {
      name: 'Directed by (film)',
      id: 'b33ce45a-995b-4062-b9b3-5ae0df2db82f',
      label: 'Person or persons who directed a film.',
      description: 'Person or persons who directed a film.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'b33ce45a-995b-4062-b9b3-5ae0df2db82f',
                  object_entity_id: '163946c5-465f-47dd-8907-f8f2ca4b29da'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: 'b33ce45a-995b-4062-b9b3-5ae0df2db82f',
                  object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755'
               },
            ],
         },
      ],
   },
   {
      name: 'Director of (film)',
      id: '3bb06a8b-cc48-43e0-80fa-9bcfe3ac7fd8',
      label: 'Film or films a person is a director of.',
      description: 'Film or films a person is a director of.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '3bb06a8b-cc48-43e0-80fa-9bcfe3ac7fd8',
                  object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: '3bb06a8b-cc48-43e0-80fa-9bcfe3ac7fd8',
                  object_entity_id: '163946c5-465f-47dd-8907-f8f2ca4b29da'
               },
            ],
         },
      ],
   },
   {
      name: 'Author',
      id: 'dde5fe39-131d-4cf3-ad35-3638e450912c',
      label: 'Person who wrote a book or piece of writing.',
      description: 'Person who wrote a book or piece of writing.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'dde5fe39-131d-4cf3-ad35-3638e450912c',
                  object_entity_id: '163946c5-465f-47dd-8907-f8f2ca4b29da'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: 'dde5fe39-131d-4cf3-ad35-3638e450912c',
                  object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755'
               },
            ],
         },
      ],
   },
   {
      name: 'Author of',
      id: '79beaaba-8a43-428a-aafc-b803fdbacc37',
      label: 'A book or piece of writing this person is the author of',
      description: 'A book or piece of writing this person is the author of',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '79beaaba-8a43-428a-aafc-b803fdbacc37',
                  object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: '79beaaba-8a43-428a-aafc-b803fdbacc37',
                  object_entity_id: '163946c5-465f-47dd-8907-f8f2ca4b29da'
               },
            ],
         },
      ],
   },
   {
      name: 'Published Date',
      id: '9e1b9d58-6d7f-44a1-8eea-ba807d783ffe',
      label: 'Date a work, such as a book or game, was first published.',
      description: 'Date a work, such as a book or game, was first published. Dates for subsequent editions of a work should not be included here.',
      object_type: 'date',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '9e1b9d58-6d7f-44a1-8eea-ba807d783ffe',
                  object_entity_id: '163946c5-465f-47dd-8907-f8f2ca4b29da'
               },
            ],
         },
      ],
   },
   {
      name: 'Publisher',
      id: '504381f2-1738-49a2-9f4c-4530e0833e98',
      label: 'Organization or person that published a work, such as a book, periodical, or game.',
      description: 'Organization or person that published a work, such as a book, periodical, or game. Should only apply to the work itself, not the fictional characters featured in the work.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '504381f2-1738-49a2-9f4c-4530e0833e98',
                  object_entity_id: '163946c5-465f-47dd-8907-f8f2ca4b29da'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: '504381f2-1738-49a2-9f4c-4530e0833e98',
                  object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755'
               },
               {
                  predicate_id: '504381f2-1738-49a2-9f4c-4530e0833e98',
                  object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29'
               },
            ],
         },
      ],
   },
   {
      name: 'Creator',
      id: 'f704c995-f4cc-4e93-8b2c-2d0bade3633a',
      label: 'Person who created a work (such as a painting or sculpture) where no other specific field (such as Author) is applicable.',
      description: 'Person who created a work, where no other specific field (such as Author) is applicable. For founders of companies or organizations, \'Founder\' should be used instead.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'f704c995-f4cc-4e93-8b2c-2d0bade3633a',
                  object_entity_id: '163946c5-465f-47dd-8907-f8f2ca4b29da'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: 'f704c995-f4cc-4e93-8b2c-2d0bade3633a',
                  object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755'
               },
            ],
         },
      ],
   },
   {
      name: 'Creator of',
      id: 'ac6dcb77-9b6a-4894-8f4e-83f682b2391a',
      label: 'Works created by a person, such as paintings or sculptures.',
      description: 'Works created by a person, such as paintings or sculptures.  For companies and organization founded by this person, \'Founder of\' should be used instead.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'ac6dcb77-9b6a-4894-8f4e-83f682b2391a',
                  object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: 'ac6dcb77-9b6a-4894-8f4e-83f682b2391a',
                  object_entity_id: '163946c5-465f-47dd-8907-f8f2ca4b29da'
               },
            ],
         },
      ],
   },
   {
      name: 'Music by',
      id: '8b877783-238b-4804-bb55-1b23e182b129',
      label: 'Person who composed a piece of music for a movie, TV show, or other creative work.',
      description: 'Person who composed a piece of music for a movie, TV show, or other creative work.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '8b877783-238b-4804-bb55-1b23e182b129',
                  object_entity_id: '163946c5-465f-47dd-8907-f8f2ca4b29da'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: '8b877783-238b-4804-bb55-1b23e182b129',
                  object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755'
               },
            ],
         },
      ],
   },
   {
      name: 'Editor of',
      id: '098ef47e-6cff-47c3-a0fe-071dd4cf19da',
      label: 'Films or books edited by this person.',
      description: 'Films, books, or other works edited by this person.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '098ef47e-6cff-47c3-a0fe-071dd4cf19da',
                  object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: '098ef47e-6cff-47c3-a0fe-071dd4cf19da',
                  object_entity_id: '163946c5-465f-47dd-8907-f8f2ca4b29da'
               },
            ],
         },
      ],
   },
   {
      name: 'Cinematographer of',
      id: 'ff8c60ee-0b3b-43e5-a6ff-69917f9aa16d',
      label: 'Person who was the cinematographer of a film.',
      description: 'Person who was the cinematographer of a film, overseeing the photography and camerawork.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'ff8c60ee-0b3b-43e5-a6ff-69917f9aa16d',
                  object_entity_id: '163946c5-465f-47dd-8907-f8f2ca4b29da'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: 'ff8c60ee-0b3b-43e5-a6ff-69917f9aa16d',
                  object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755'
               },
            ],
         },
      ],
   },
   {
      name: 'Edited by',
      id: '72156ca4-02ac-4463-8b67-7e0090a378b1',
      label: 'Person who edited a film or book.',
      description: 'Person who edited a film, book, or other work.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '72156ca4-02ac-4463-8b67-7e0090a378b1',
                  object_entity_id: '163946c5-465f-47dd-8907-f8f2ca4b29da'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: '72156ca4-02ac-4463-8b67-7e0090a378b1',
                  object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755'
               },
            ],
         },
      ],
   },
   {
      name: 'Screenplay by',
      id: '07e1e959-7113-4f36-8130-c0900d4dc49a',
      label: 'Person(s) who wrote the screenplay for a film.',
      description: 'Person(s) who wrote the screenplay for a film.  Screenplay by credit goes to writers who physically wrote drafts or scenes that are included in the final version of the movie.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '07e1e959-7113-4f36-8130-c0900d4dc49a',
                  object_entity_id: '163946c5-465f-47dd-8907-f8f2ca4b29da'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: '07e1e959-7113-4f36-8130-c0900d4dc49a',
                  object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755'
               },
            ],
         },
      ],
   },
   {
      name: 'Lyrics by',
      id: '3639ab9f-ab38-4606-944a-0ab4b743bdb0',
      label: 'Person who wrote the lyrics for a piece of music.',
      description: 'Person who wrote the lyrics for a piece of music, for a song, musical, or other creative work.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '3639ab9f-ab38-4606-944a-0ab4b743bdb0',
                  object_entity_id: '163946c5-465f-47dd-8907-f8f2ca4b29da'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: '3639ab9f-ab38-4606-944a-0ab4b743bdb0',
                  object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755'
               },
            ],
         },
      ],
   },
   {
      name: 'Strategic Partnerships',
      id: 'b8d9e078-5c01-43b9-b601-c91b441e8421',
      label: 'Strategic partnerships an organization has entered into.',
      description: 'Strategic partnerships an organization has entered into, per press release, blog, or other source owned or controlled by one or both of the companies in the partnership.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'b8d9e078-5c01-43b9-b601-c91b441e8421',
                  object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: 'b8d9e078-5c01-43b9-b601-c91b441e8421',
                  object_entity_id: '104ac3a1-bf25-49be-9f0a-1b46104e06eb'
               },
            ],
         },
      ],
   },
   {
      name: 'Partner Organizations',
      id: 'b714a484-704d-4dc7-a71f-859c6583326e',
      label: 'Companies that are forming a strategic partnership.',
      description: 'Companies that are forming a strategic partnership, per press release, blog, or other source owned or controlled by one or both of the companies in the partnership.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'b714a484-704d-4dc7-a71f-859c6583326e',
                  object_entity_id: '104ac3a1-bf25-49be-9f0a-1b46104e06eb'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: 'b714a484-704d-4dc7-a71f-859c6583326e',
                  object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29'
               },
            ],
         },
      ],
   },
   {
      name: 'Spun Out From',
      id: '201bf70d-b693-48f5-934b-5431262d153b',
      label: 'Company that spun out this company, per regulatory documents or a source owned or controlled by the entity.',
      description: 'Company that spun out this company, per regulatory documents or a source owned or controlled by the entity. A spinout (not to be confused with a subsidiary) is a corporate action resulting in a new business spun out from the existing company with its own operations independent of the parent company.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '201bf70d-b693-48f5-934b-5431262d153b',
                  object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: '201bf70d-b693-48f5-934b-5431262d153b',
                  object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29'
               },
            ],
         },
      ],
   },
   {
      name: 'Spinout',
      id: '2664d9db-5b78-43e8-8104-9803ad4b8b82',
      label: 'Different entities spunout from the this entity, per regulatory documents or a source owned or controlled by the entity.',
      description: 'Different entities spunout from the this entity, per regulatory documents or a source owned or controlled by the entity.  A spinout (not to be confused with a subsidiary) is a corporate action resulting in a new business spun out from the existing company with its own operations independent of the parent company. ',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '2664d9db-5b78-43e8-8104-9803ad4b8b82',
                  object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: '2664d9db-5b78-43e8-8104-9803ad4b8b82',
                  object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29'
               },
            ],
         },
      ],
   },
   {
      name: 'Patent Number',
      id: '9aaba6ce-31a5-4bc0-8f26-390d354e96cd',
      label: 'Number identifier that is assigned to a patent application when it is published.',
      description: 'The Patent Number is the number identifier that is assigned to a patent application when it is published by the issuing patent office.',
      object_type: 'string',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '9aaba6ce-31a5-4bc0-8f26-390d354e96cd',
                  object_entity_id: '6b3b4f73-1548-4a54-96c7-f722c544df48'
               },
            ],
         },
      ],
   },
   {
      name: 'Date Filed',
      id: '6fe6e555-ee51-4a28-aae4-1ab84fdf291e',
      label: 'Filing date for a patent application.',
      description: 'Date Filed is the filing date for a patent application, as assigned by the issuing patent office. The Date Filed can be found on the line of a patent document labeled \'Filed.\'',
      object_type: 'date',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '6fe6e555-ee51-4a28-aae4-1ab84fdf291e',
                  object_entity_id: '6b3b4f73-1548-4a54-96c7-f722c544df48'
               },
            ],
         },
      ],
   },
   {
      name: 'Date of Patent',
      id: 'ecdb4b42-e12a-4084-8503-b1aeda5310ee',
      label: 'Date patent was granted.',
      description: 'Date of Patent is the official date for a patent granted, as assigned by the issuing patent office. Date of Patent can be located on the line at the top of a patent document labeled \'Date of Patent.\'',
      object_type: 'date',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'ecdb4b42-e12a-4084-8503-b1aeda5310ee',
                  object_entity_id: '6b3b4f73-1548-4a54-96c7-f722c544df48'
               },
            ],
         },
      ],
   },
   {
      name: 'Patent Application Number',
      id: 'b09db03a-29d4-42c3-a94d-76c6c7d32c58',
      label: 'Patent application identification number assigned to a patent by the United States Patent and Trademark Office.',
      description: 'The Patent Application Number is the identification number for a patent application assigned to a patent by the United States Patent and Trademark Office.\n\nThe patent application number should have commas, slashes, and other punctuation removed. Ie. 13/791,909 \u2192 Patent Application Number \u2192 13791909',
      object_type: 'string',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'b09db03a-29d4-42c3-a94d-76c6c7d32c58',
                  object_entity_id: '6b3b4f73-1548-4a54-96c7-f722c544df48'
               },
            ],
         },
      ],
   },
   {
      name: 'Patent Jurisdiction',
      id: 'ec741e8c-5589-4a64-b9e1-4fd41fd2b05f',
      label: 'Patent organization granting a given patent',
      description: 'Patent Jurisdiction is the patent organization granting a given patent, for example, the United States Patent and Trademark Office.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'ec741e8c-5589-4a64-b9e1-4fd41fd2b05f',
                  object_entity_id: '6b3b4f73-1548-4a54-96c7-f722c544df48'
               },
            ],
         },
      ],
   },
   {
      name: 'Patent Primary Examiner',
      id: '1af80437-a7ff-4d3c-8a1f-5a599554ebad',
      label: 'Person charged as the primary examiner of a patent during application.',
      description: 'Patent Primary Examiner is the person charged as the primary examiner of a patent during application. The Primary Patent Examiner can be found on the line of a patent document labeled \'Primary Examiner.\'',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '1af80437-a7ff-4d3c-8a1f-5a599554ebad',
                  object_entity_id: '6b3b4f73-1548-4a54-96c7-f722c544df48'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: '1af80437-a7ff-4d3c-8a1f-5a599554ebad',
                  object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755'
               },
            ],
         },
      ],
   },
   {
      name: 'Current Assignee',
      id: '29d38730-85bd-4bb6-a5fa-406a74436c72',
      label: 'Current assignee of a patent or another entity.',
      description: 'Current Assignee is the entity that is the current assignee of a patent or another entity. The Current Assignee can be found on the line of a patent document labeled \'Assignee.\'',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '29d38730-85bd-4bb6-a5fa-406a74436c72',
                  object_entity_id: '6b3b4f73-1548-4a54-96c7-f722c544df48'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: '29d38730-85bd-4bb6-a5fa-406a74436c72',
                  object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29'
               },
               {
                  predicate_id: '29d38730-85bd-4bb6-a5fa-406a74436c72',
                  object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755'
               },
            ],
         },
      ],
   },
   {
      name: 'Patent Applicant',
      id: '3de5fb73-a9ee-43c8-a9a7-c9a839a62b6b',
      label: 'Applicant for a particular patent',
      description: 'Patent Applicant is the entity that is the applicant for a particular patent. The Patent Applicant can be found on the line of a patent document labeled \'Applicant.\'',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '3de5fb73-a9ee-43c8-a9a7-c9a839a62b6b',
                  object_entity_id: '6b3b4f73-1548-4a54-96c7-f722c544df48'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: '3de5fb73-a9ee-43c8-a9a7-c9a839a62b6b',
                  object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29'
               },
               {
                  predicate_id: '3de5fb73-a9ee-43c8-a9a7-c9a839a62b6b',
                  object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755'
               },
            ],
         },
      ],
   },
   {
      name: 'Patent Citations',
      id: 'e7c03af8-b5a6-4b38-a5d4-cb766a66efeb',
      label: 'Patents cited by a particular patent',
      description: 'Patent Citations refers to the entities for other patents that are cited by a particular patent. Citations for a particular patent can be found in the full text of that patent\'s document.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'e7c03af8-b5a6-4b38-a5d4-cb766a66efeb',
                  object_entity_id: '6b3b4f73-1548-4a54-96c7-f722c544df48'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: 'e7c03af8-b5a6-4b38-a5d4-cb766a66efeb',
                  object_entity_id: '6b3b4f73-1548-4a54-96c7-f722c544df48'
               },
            ],
         },
      ],
   },
   {
      name: 'Patent Citations Received',
      id: '3b4f60d0-0fea-49e1-8c8b-b9676f870c4a',
      label: 'Patents that have cited this patent',
      description: 'Patent Citations Received refers to the entities for other patents that have cited this patent. Citation received for a particular patent can be found in the full text of the citing patent\'s document.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '3b4f60d0-0fea-49e1-8c8b-b9676f870c4a',
                  object_entity_id: '6b3b4f73-1548-4a54-96c7-f722c544df48'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: '3b4f60d0-0fea-49e1-8c8b-b9676f870c4a',
                  object_entity_id: '6b3b4f73-1548-4a54-96c7-f722c544df48'
               },
            ],
         },
      ],
   },
   {
      name: 'Patent Publication Date',
      id: '4a1f9158-90b7-47d3-a570-d264a2ac3c71',
      label: 'Date a patent application was published.',
      description: 'Date a patent application was published and available to the public.',
      object_type: 'date',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '4a1f9158-90b7-47d3-a570-d264a2ac3c71',
                  object_entity_id: '6b3b4f73-1548-4a54-96c7-f722c544df48'
               },
            ],
         },
      ],
   },
   {
      name: 'Patent Status',
      id: 'dee570dd-8b91-4251-9b9e-55a9fcfba709',
      label: 'Current status of a patent.',
      description: 'Current status of a patent, either \'Active\' or \'Pending\'',
      object_type: 'string',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'dee570dd-8b91-4251-9b9e-55a9fcfba709',
                  object_entity_id: '6b3b4f73-1548-4a54-96c7-f722c544df48'
               },
            ],
         },
         {
            type: 'enum',
            target: 'PredicateConstraintTarget.Object',
            elements: [
               {
                  object_value: 'Active'
               },
               {
                  object_value: 'Pending'
               },
            ],
         },
      ],
   },
   {
      name: 'Patent Publication Code',
      id: '1f50b09a-91ad-46d3-91e2-03c551af63f1',
      label: 'Code/number given to published (but not granted) patents.',
      description: 'Code/number given to published (but not granted) patents.',
      object_type: 'string',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '1f50b09a-91ad-46d3-91e2-03c551af63f1',
                  object_entity_id: '6b3b4f73-1548-4a54-96c7-f722c544df48'
               },
            ],
         },
      ],
   },
   {
      name: 'Occupation',
      id: 'e0c5455e-a7f6-483d-8cf0-6cd02404efd8',
      label: 'Job or profession of a person, both past and present.',
      description: 'Job or profession of a person, both past and present.  Occupation (such as Computer scientist) should not be confused with the related field of study (such as Computer science).',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
   },
   {
      name: 'Citizenship',
      id: '2a57becd-f9aa-4301-8818-e5c7efa48f9d',
      label: 'Nations where a person is recognized as being a legal member with active political rights.',
      description: 'Nations where a person is recognized as being a legal member with active political rights.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '2a57becd-f9aa-4301-8818-e5c7efa48f9d',
                  object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: '2a57becd-f9aa-4301-8818-e5c7efa48f9d',
                  object_entity_id: 'ca399d7a-e559-4062-9570-1b69c667ca10'
               },
            ],
         },
      ],
   },
   {
      name: 'Birthplace',
      id: '9fd5eff2-eaef-4fe2-bfdc-b0fbaa8a4406',
      label: 'Location where a person was born.',
      description: 'Location where a person was born, verified by a source owned or controlled by the entity, such as a LinkedIn profile or an official social media account.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '9fd5eff2-eaef-4fe2-bfdc-b0fbaa8a4406',
                  object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: '9fd5eff2-eaef-4fe2-bfdc-b0fbaa8a4406',
                  object_entity_id: '40548ec9-55e8-4b7e-95e3-c5d9a4590235'
               },
            ],
         },
      ],
   },
   {
      name: 'Educated at',
      id: '5487ef83-b759-4188-a424-4ae61d5e7420',
      label: 'Educational institutions that a person attended.',
      description: 'Educational institutions that a person attended, at all levels of education.  The person may or may not have received a degree, graduation, or completed the program.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '5487ef83-b759-4188-a424-4ae61d5e7420',
                  object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: '5487ef83-b759-4188-a424-4ae61d5e7420',
                  object_entity_id: '193af481-d970-4a28-b2aa-1d39f6f42c03'
               },
            ],
         },
      ],
   },
   {
      name: 'Place of Death',
      id: 'd0e2e7d5-96f4-4338-b81a-5a6eb7dfccbc',
      label: 'Location where a person died.',
      description: 'Date when a person died, verified by a reputable news source or a source owned or controlled by the entity\'s family, such as a LinkedIn profile or an official social media account.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'd0e2e7d5-96f4-4338-b81a-5a6eb7dfccbc',
                  object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: 'd0e2e7d5-96f4-4338-b81a-5a6eb7dfccbc',
                  object_entity_id: '40548ec9-55e8-4b7e-95e3-c5d9a4590235'
               },
            ],
         },
      ],
   },
   {
      name: 'Nationality',
      id: '62264cc6-3c5a-4c3c-a405-4e1c5b4748dd',
      label: 'Legal identification of a person in international law of belonging to a particular nation.',
      description: 'Legal identification of a person in international law of belonging to a particular nation, by birth or naturalization.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '62264cc6-3c5a-4c3c-a405-4e1c5b4748dd',
                  object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755'
               },
            ],
         },
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: '62264cc6-3c5a-4c3c-a405-4e1c5b4748dd',
                  object_entity_id: 'ca399d7a-e559-4062-9570-1b69c667ca10'
               },
            ],
         },
      ],
   },
   {
      name: 'Married Name',
      id: 'cd6898a9-a00b-4fb4-9997-a1553bcedbc4',
      label: 'Person\'s name after they are married.',
      description: 'Person\'s name after they are married, not to be confused with the name of the person\'s spouse.',
      object_type: 'string',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'cd6898a9-a00b-4fb4-9997-a1553bcedbc4',
                  object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755'
               },
            ],
         },
      ],
   },
   {
      name: 'Country',
      id: '59eae399-be09-4be5-a2c9-fe0a6fc36b70',
      label: 'Country associated with this person, company, organization, or port.',
      description: 'Country associated with this person, company, organization, or port. A country is a distinct region in political geography, and may be a sovereign state or part of a bigger state.',
      object_type: 'entity',
      citation_requirement: 'CitationRequirement.Recommended',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Object',
            rules: [
               {
                  predicate_id: '59eae399-be09-4be5-a2c9-fe0a6fc36b70',
                  object_entity_id: 'ca399d7a-e559-4062-9570-1b69c667ca10'
               },
            ],
         },
      ],
   },
   {
      name: 'Dribbble URL',
      id: 'd54b15ac-e837-4f5b-a235-5f334bba5681',
      label: 'The Dribbble URL associated with this entity.',
      description: 'The Dribbble profile owned and managed by an individual person or organization.',
      object_type: 'anyURI',
      citation_requirement: 'CitationRequirement.Optional',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: 'd54b15ac-e837-4f5b-a235-5f334bba5681',
                  object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29'
               },
               {
                  predicate_id: 'd54b15ac-e837-4f5b-a235-5f334bba5681',
                  object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755'
               },
            ],
         },
      ],
   },
   {
      name: 'Vimeo Channel URL',
      id: '61acf0c9-afdf-42cd-96df-d1fa814f85dd',
      label: 'The Vimeo channel URL associated with this entity.',
      description: 'The Vimeo channel URL owned and managed by an individual person or organization.',
      object_type: 'anyURI',
      citation_requirement: 'CitationRequirement.Optional',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '61acf0c9-afdf-42cd-96df-d1fa814f85dd',
                  object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29'
               },
               {
                  predicate_id: '61acf0c9-afdf-42cd-96df-d1fa814f85dd',
                  object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755'
               },
            ],
         },
      ],
   },
   {
      name: 'Behance URL',
      id: '082be9d7-8120-4633-902e-07d156c238e3',
      label: 'The Behance URL associated with this entity.',
      description: 'The Behance URL owned and managed by an individual person or organization.',
      object_type: 'anyURI',
      citation_requirement: 'CitationRequirement.Optional',
      constraints: [
         {
            type: 'predicate_object',
            target: 'PredicateConstraintTarget.Subject',
            rules: [
               {
                  predicate_id: '082be9d7-8120-4633-902e-07d156c238e3',
                  object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29'
               },
               {
                  predicate_id: '082be9d7-8120-4633-902e-07d156c238e3',
                  object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755'
               },
            ],
         },
      ],
   },
 ] as const;

export default json;
