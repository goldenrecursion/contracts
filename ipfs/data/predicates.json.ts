import {
  CitationRequirement,
  IPFSPredicateBase,
  PredicateConstraintTarget,
} from '../IPFSapi';

const json: readonly IPFSPredicateBase[] = [
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
            object_entity_id: '192162d0-f38f-4d40-924a-7686113c6a35',
          },
          {
            object_entity_id: 'e1abe2bc-6359-43a6-bb0f-35a3b843beec',
          },
          {
            object_entity_id: 'd96a7dfb-b703-4ad7-b7d4-dce50cb6a7c4',
          },
          {
            object_entity_id: '7dfe54f4-ac56-438d-97c9-df9f3630b0a9',
          },
          {
            object_entity_id: '849ffbbe-c125-49c2-ac7d-5064cce11913',
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
    constraints: [],
  },
] as const;

export default json;
