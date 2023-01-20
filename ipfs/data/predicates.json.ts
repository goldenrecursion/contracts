import {
  CitationRequirement,
  IPFSPredicateBody,
  PredicateConstraintTarget,
} from '../IPFSapi';

// TODO create script to update these

const json: readonly IPFSPredicateBody[] = [
  {
    id: 'bb463b8b-b76c-4f6a-9726-65ab5730b69b',
    name: 'Golden ID',
    label: 'The ID of this entity in Golden.',
    description: 'The unique ID associated with this entity on Golden.com.',
    object_type: 'integer',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: '3104de39-071c-47b8-86b4-d62ccc4a4fa6',
    name: 'CEO of',
    label: 'Organization this person is CEO of.',
    inverse_id: '0a87e996-34b4-46ba-909a-70ab67b1f811',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'The organization this individual is charged with the management of – especially an independent legal entity such as a company or nonprofit institution. The CEO of an organization typically reports to the board of directors.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '71ad3d9e-e211-472b-a16d-861737c57ecd',
    name: 'Founder',
    label: 'Person associated with the founding of this entity.',
    inverse_id: 'e4f94b98-c56a-4bd2-a9fd-5fd11603e7e8',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'A person directly involved with the initial inception of this organization, often marked by the conception of the idea for the organization or the purchasing of operating assets. Even when a founding individual leaves the company and is no longer serving an active role, they can still be considered a founder due to their work establishing the organization.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '4b4ff1c9-a053-4bc3-87ef-0713453f9992',
    name: 'Start Time',
    label: 'Point in time a triple was no longer true',
    description: '',
    object_type: 'dateTime',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '6b95b113-e331-41bb-8e31-45b198a41ea8',
    name: 'End Time',
    label: 'Point in time a triple became true',
    description: '',
    object_type: 'dateTime',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '7e593c0c-457a-464d-9dd2-8e1fc5a8b116',
    name: 'Tiktok',
    label: "URL of this entity's TikTok profile page",
    constraints: [
      {
        type: 'format',
        regex_pattern:
          "^https?:\\/\\/(?:www\\.|vm\\.|vt\\.|m\\.)?(?:tiktok.com)\\/([\\w\\-_.!~*'()%:@&=+$,\\/?;#]+)$",
      },
    ],
    description:
      'The primary, official TikTok profile URL associated with this entity. TikTok profile URLs tend to take the form of https://www.tiktok.com/[username]. The TikTok URL should not point to a TikTok video post.',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: '1e49b96d-f641-4226-91f0-ed42e6de742e',
    name: 'Source Code',
    label: "URL to this entity's official source code",
    description:
      'The primary, official source code URL associated with this entity. The primary and official source code URL should not be a fork off of a more primary and official version. Source code URLs may often be Github URLs, but do not always have to be. The source code URL should point to the source code specifically associated with the entity, not a product of the entity, a parent organization of the entity, etc.',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: '27897e2f-5d08-40fe-904d-0b0647fa2ff4',
    name: 'Contact URL',
    label: "URL of this entity's official contact page",
    description:
      'The primary and official contact page URL for an entity, such as but not limited to a link to a contact form, a website with aggregate contact details. A URL whose main purpose is not to provide contact details but happens to have some contact information on it should not be used. A social URL should not function as the primary and official contact page URL for an entity.',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: '71f46d7f-6667-4600-90bf-eb82fbba8e17',
    name: 'Medium',
    label: "URL of this entity's Medium profile page",
    description:
      'The primary and official Medium profile URL associated with this entity.',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: '7f15d788-5df1-4ff3-a5e5-4c9e8e2c57af',
    name: 'Angellist URL',
    label: "URL of this entity's Angellist profile page",
    constraints: [
      {
        type: 'format',
        regex_pattern:
          "^https?:\\/\\/(?:www\\.)?(?:angel.co)\\/((?:company|u|v|p)?\\/?(?:[\\w\\-_.!~*'()%:@&=+$,\\/?;#]+))$",
      },
    ],
    description:
      "The primary and official Angellist profile URL associated with this entity. The URL should ideally point towards the company's overview page (i.e. https://angel.co/company/<company_name>) and not another view (such as https://angel.co/company/<company_name>/jobs).",
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: '92ae90d8-d4f6-476b-9409-89b7d1b846c0',
    name: 'Apple App Store Link',
    label: "URL of this entity's app on the Apple App Store",
    constraints: [
      {
        type: 'format',
        regex_pattern:
          "^https?:\\/\\/(?:apps.apple.com)\\/((?:[-a-zA-Z0-9@:%._\\+~#=]{2,20}\\/)?(?:app|developer)\\/(?:[\\w\\-_.!~*'()%:@&=+$,\\/?;#]+))$",
      },
    ],
    description:
      "The primary and official URL for this product on Apple's app store. Apps that are not officially owned and associated with the entity should not be used.",
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: 'db592366-1c4c-4087-821e-44699ddd29b6',
    name: 'Instagram',
    label: "URL of this entity's Instagram profile page",
    description:
      'The primary and official Instagram URL for this entity. Instagram profiles that are not officially owned by and associated with the entity should not be used.',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: '9934d828-963f-403a-a0da-7a52e0224ef5',
    name: 'Twitter URL',
    label: "URL of this entity's Twitter profile page",
    constraints: [
      {
        type: 'format',
        regex_pattern:
          "^https?:\\/\\/(?:[0-9a-z_!~*'()-]{1,63}\\.)?(?:twitter\\.com)\\/(?:#!\\/)?@?([^/?#]*)(?:[?#].*)?\\/?$",
      },
    ],
    description:
      'The primary and official Twitter profile URL associated with this entity.',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: 'fa39c1f2-bf06-45e9-8995-da919472deb8',
    name: 'Facebook URL',
    label: "URL of this entity's Facebook profile page",
    constraints: [
      {
        type: 'format',
        regex_pattern:
          "^https?:\\/\\/(?:[0-9a-z_!~*'()-]{1,63}\\.)?(?:(?:web|m)\\.)?(?:(?:facebook|fb)\\.com)\\/((?:pg|pages|pages\\/category|groups|profile.php\\?id=)?\\/?(?:[\\w\\-\\.\\+]+)\\/?(?:[\\w\\-\\.\\+]+)?\\/?)$",
      },
    ],
    description:
      'The primary and official Facebook profile URL associated with this entity. A facebook profile URL for an associated entity (such as a fan club, a parent organization, or a subsidiary) should not be used.',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: '1d7d64c5-c4a1-4889-91c4-2d2da0424dcc',
    name: 'Pinterest',
    label: "URL of this entity's Pinterest profile page",
    description:
      'The primary and official Pinterest profile URL associated with this entity. A link to a Pinterest collection or specific post should not be used.',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: 'fb06b903-52af-4a79-9126-f2589c2ca881',
    name: 'Google Play Store Link',
    label: "URL of this entity's app on the Google Play Store",
    constraints: [
      {
        type: 'format',
        regex_pattern:
          "^https?:\\/\\/(?:www\\.)?(?:play.google.com)\\/(?:store)\\/([\\w\\-_.!~*'()%:@&=+$,\\/?;#]+)$",
      },
    ],
    description:
      'The primary and official Google Play store URL associated with this entity. Apps that are not officially owned by and associated with the entity should not be used.',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: 'f348c532-bffd-4ad1-b79c-34258d05c1cd',
    name: 'Community Forum',
    label: "URL of this entity's primary community forum",
    description:
      "URL of an organization's, product's, or cryptocurrency’s official community forum. Unofficial community forum's (such as those that the organization, product, or cryptocurrency has never officially affiliated themselves with) should not be used.",
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: 'e3d0cfb4-3ec1-4ef2-ae08-93fa07aa27dc',
    name: 'Github URL',
    label: "URL of this entity's Github profile URL",
    constraints: [
      {
        type: 'format',
        regex_pattern:
          '^https?:\\/\\/(?:www\\.)?(?:github\\.com)\\/((?:[\\w\\.@\\:\\-~]+\\/?){1,2})$',
      },
    ],
    description:
      'The primary and official Github profile URL associated with this entity. Links to repositories (rather than profiles) should not be used.',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: '33461e27-5454-43c3-b300-88c02a96c280',
    name: 'Doctoral Thesis URL',
    label: "URL of this person's doctoral thesis",
    description:
      'The primary and official URL associated with a person’s PhD dissertation. Either a URL where the doctoral thesis can be directly downloaded or that contains the doctoral thesis contents itself may be used',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: 'facb73aa-82db-45ff-bd87-5ce7983d8ca2',
    name: 'Crunchbase URL',
    label: 'Crunchbase URL associated with this entity',
    constraints: [
      {
        type: 'format',
        regex_pattern:
          "^https?:\\/\\/(?:www\\.)?(?:(?:crunchbase)\\.com)\\/((?:person|organization|event|acquisition|funding_round|fund)\\/(?:[\\w\\-_.!~*'()%:@&=+$,\\/?;#]+))$",
      },
    ],
    description:
      "The primary and official URL associated with this entity's Crunchbase profile page. Only the Crunchbase profile directly affiliated with the entity should be used, not the Crunchbase profile for the entity's parent organization, subsidiaries, etc.",
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: '68d490c8-d8d3-4efe-9670-390df48e1ad6',
    name: 'Telegram',
    label: "URL of this entity's official Telegram channel",
    constraints: [
      {
        type: 'format',
        regex_pattern:
          '^https?:\\/\\/(?:www\\.)?(?:telegram|t)\\.me\\/([a-zA-Z0-9_-]+)\\/?$',
      },
    ],
    description:
      'The primary and official Telegram channel associated with this entity. Support channels, fan channels, or other channels not officially associated with the entity should not be used.',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: '5bbcbd49-c255-4a6b-b84a-dc076849650d',
    name: 'Pitchbook URL',
    label: 'Pitchbook URL associated with this entity',
    constraints: [
      {
        type: 'format',
        regex_pattern:
          "^https?:\\/\\/(?:www\\.)?(?:pitchbook.com)\\/profiles\\/?((?:investor|company|advisor|fund|limited-partner)\\/(?:[\\w\\-_.!~*'()%:@&=+$,\\/?;#]+))$",
      },
    ],
    description:
      "The primary and official Pitchbook URL associated with this entity. The primary and official Pitchbook URL should be directly associated with this entity and not a Pitchbook URL for the entity's parent/subsidiary organization.",
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: '14fa743c-8161-42e8-a92f-5c29c70e87f8',
    name: 'Whitepaper',
    label: "Primary and official URL of this entity's Whitepaper",
    description:
      'The primary and official Whitepaper URL associated with this cryptocurrency. Litepapers are allowed as whitepapers.',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: '36d1a264-da26-4a1a-8f0e-726543749a5f',
    name: 'Reddit URL',
    label: "URL of this entity's official Reddit profile or subreddit",
    constraints: [
      {
        type: 'format',
        regex_pattern:
          '^https?:\\/\\/(?:www\\.)?(?:reddit\\.com|redd.it)\\/(?:(?:user|(?:r)|(?:u))\\/)?([\\w\\.\\-\\+]+)\\/?$',
      },
    ],
    description:
      "The primary and official Reddit profile or subreddit URL associated with this entity. A Reddit profile or subreddit URL associated with the entity should have an evidenced source of official affiliation - i.e. a reference to the Reddit on the entity's website.",
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: '12acb8fe-0573-4ca8-8cc1-180cc6ba3486',
    name: 'YouTube Channel',
    label: "URL of this entity's official YouTube channel page",
    description:
      'The primary and official Youtube profile URL associated with this entity. Links to specific youtube videos should not be used.',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: '8c4d6279-199f-4e46-9ef7-8702bad1e152',
    name: 'Linkedin URL',
    label: "URL of this entity's LinkedIn profile page",
    multiplier: 3,
    constraints: [
      {
        type: 'format',
        regex_pattern:
          "^https?:\\/\\/(?:[0-9a-z_!~*'()-]{1,63}\\.)?(?:(?:linkedin)\\.com)\\/((?:in|company|school)\\/(?:[\\w\\-_.!~*'()%:@&=+$,\\/?;#]+))$",
      },
    ],
    description:
      'The primary and official LinkedIn profile URL associated with this entity. For example,  is the primary and official LinkedIn profile URL for Bill Gates.',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: '5387126a-fa27-4a42-8c7f-bf813a6a893d',
    name: 'Coinmarketcap URL',
    label: "URL of this cryptocurrency's Coinmarketcap page",
    constraints: [
      {
        type: 'format',
        regex_pattern:
          "^https?:\\/\\/(?:www\\.)?(?:coinmarketcap.com)\\/((?:currencies|exchanges)\\/(?:[\\w\\-_.!~*'()%:@&=+$,\\/?;#]+))$",
      },
    ],
    description:
      "The primary and official Coinmarketcap URL associated with this cryptocurrency. Coinmarketcap URLs tend to be structured as https://coinmarketcap.com/currencies/<currency name> for currencies and https://coinmarketcap.com/exchanges/<exchange name> for exchanges. An entity's Coinmarketcap URL should not point to a currency that is forked off of or otherwise not officially associated with the entity.",
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: 'a27218b8-6a4d-47bb-95b6-5a55334fac1c',
    name: 'Name',
    label: 'The primary name associated with this entity',
    description: '',
    object_type: 'string',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: '60627261-4e6c-4ebf-8879-914576ade417',
    name: 'Thumbnail',
    label: 'Thumbnail URL associated with this entity',
    description: '',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: '7f3869c1-7dc9-4486-9045-6bade487a49d',
    name: 'Description',
    label: 'Description of an entity.',
    description: '',
    object_type: 'string',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: '0a87e996-34b4-46ba-909a-70ab67b1f811',
    name: 'CEO',
    label: 'The CEO of this organization.',
    inverse_id: '3104de39-071c-47b8-86b4-d62ccc4a4fa6',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'The CEO of an organization is the individual charged with the management of the organization – especially an independent legal entity such as a company or nonprofit institution. The CEO of an organization typically reports to the board of directors.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'e4f94b98-c56a-4bd2-a9fd-5fd11603e7e8',
    name: 'Founder of',
    label: 'Organization known to be founded by this person.',
    inverse_id: '71ad3d9e-e211-472b-a16d-861737c57ecd',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'An organization that this person was directly involved with the initial inception of, often marked by the person’s intention to start the organization or the purchasing of operating assets for the organization.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '94a8d215-ce32-4379-b18e-2aebf0794882',
    name: 'Is a',
    label: 'The entity type of this entity',
    description: '',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: '42cb158b-e836-45ed-9b56-034668b8f05a',
    name: 'Website',
    label:
      'URL of the primary and official website associated with this entity',
    multiplier: 3,
    constraints: [
      {
        type: 'format',
        allow: false,
        regex_pattern:
          "^https?:\\/\\/(?:www\\.|vm\\.|vt\\.|m\\.)?(?:tiktok.com)\\/([\\w\\-_.!~*'()%:@&=+$,\\/?;#]+)$",
      },
      {
        type: 'format',
        allow: false,
        regex_pattern:
          "^https?:\\/\\/(?:www\\.)?(?:angel.co)\\/((?:company|u|v|p)?\\/?(?:[\\w\\-_.!~*'()%:@&=+$,\\/?;#]+))$",
      },
      {
        type: 'format',
        allow: false,
        regex_pattern:
          "^https?:\\/\\/(?:apps.apple.com)\\/((?:[-a-zA-Z0-9@:%._\\+~#=]{2,20}\\/)?app\\/(?:[\\w\\-_.!~*'()%:@&=+$,\\/?;#]+))$",
      },
      {
        type: 'format',
        allow: false,
        regex_pattern:
          "^https?:\\/\\/(?:[0-9a-z_!~*'()-]{1,63}\\.)?(?:twitter\\.com)\\/(?:#!\\/)?@?([^/?#]*)(?:[?#].*)?\\/?$",
      },
      {
        type: 'format',
        allow: false,
        regex_pattern:
          "^https?:\\/\\/(?:[0-9a-z_!~*'()-]{1,63}\\.)?(?:(?:web|m)\\.)?(?:(?:facebook|fb)\\.com)\\/((?:pg|pages|pages\\/category|groups|profile.php\\?id=)?\\/?(?:[\\w\\-\\.\\+]+)\\/?(?:[\\w\\-\\.\\+]+)?\\/?)$",
      },
      {
        type: 'format',
        allow: false,
        regex_pattern:
          "^https?:\\/\\/(?:www\\.)?(?:play.google.com)\\/(?:store)\\/([\\w\\-_.!~*'()%:@&=+$,\\/?;#]+)$",
      },
      {
        type: 'format',
        allow: false,
        regex_pattern:
          '^https?:\\/\\/(?:www\\.)?(?:github\\.com)\\/((?:[\\w\\.@\\:\\-~]+\\/?){1,2})$',
      },
      {
        type: 'format',
        allow: false,
        regex_pattern:
          "^https?:\\/\\/(?:www\\.)?(?:(?:crunchbase)\\.com)\\/((?:person|organization|event|acquisition|funding_round|fund)\\/(?:[\\w\\-_.!~*'()%:@&=+$,\\/?;#]+))$",
      },
      {
        type: 'format',
        allow: false,
        regex_pattern:
          '^https?:\\/\\/(?:www\\.)?(?:telegram|t)\\.me\\/([a-zA-Z0-9_-]+)\\/?$',
      },
      {
        type: 'format',
        allow: false,
        regex_pattern:
          "^https?:\\/\\/(?:www\\.)?(?:pitchbook.com)\\/profiles\\/?((?:investor|company|advisor|fund|limited-partner)\\/(?:[\\w\\-_.!~*'()%:@&=+$,\\/?;#]+))$",
      },
      {
        type: 'format',
        allow: false,
        regex_pattern:
          '^https?:\\/\\/(?:www\\.)?(?:reddit\\.com|redd.it)\\/(?:(?:user|(?:r)|(?:u))\\/)?([\\w\\.\\-\\+]+)\\/?$',
      },
      {
        type: 'format',
        allow: false,
        regex_pattern:
          "^https?:\\/\\/(?:[0-9a-z_!~*'()-]{1,63}\\.)?(?:(?:linkedin)\\.com)\\/((?:in|company|school)\\/(?:[\\w\\-_.!~*'()%:@&=+$,\\/?;#]+))$",
      },
      {
        type: 'format',
        allow: false,
        regex_pattern:
          "^https?:\\/\\/(?:www\\.)?(?:coinmarketcap.com)\\/((?:currencies|exchanges)\\/(?:[\\w\\-_.!~*'()%:@&=+$,\\/?;#]+))$",
      },
    ],
    description:
      "The primary and official website URL associated with this entity. The 'website' predicate should be reserved for URL's that represent a website directly associated with the entity. Social links that may be used as values in other predicates should not be used.",
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: 'c090be24-6c35-45d8-8a81-32e57a3d48dd',
    name: 'Phone Number',
    label: 'Phone number associated with an entity.',
    description:
      'The phone number associated with this entity that is 1. public (it is openly known the entity is associated with this phone number) and 2. official (the entity has formally associated themselves with this phone number by posting it on a website, social media link, etc. that they are in control of).',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'fa1a5ac7-480c-4e44-a545-b0f3dd9d24bf',
    name: 'Founded Date',
    label: 'Date an entity was founded.',
    description:
      'The date that a company legally starts operating, as indicated by the intentions of the company’s founder(s) to start a particular business and usually the purchase or production of operating assets. The founding date would be the earliest of any of these two events in the company’s lifetime.',
    object_type: 'date',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '2f30a94e-cd5e-496f-bec8-01bfb01da128',
    name: 'Date of Birth',
    label: 'The official date of birth of a person',
    description:
      'The official date of birth of a person, as evidenced by a resource officially owned by, operated by, or directly affiliated with the person stating their birth date. Official documentation, such as a birth certificate, may also provide evidence.',
    object_type: 'date',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '9cb6d628-a0f8-48b0-9828-253596b6ad00',
    name: 'Date of Incorporation',
    label: 'Date an entity was legally incorporated.',
    description:
      'The date that the incorporation requirements for a company were legally filed in its initial country or state of incorporation. Each state sets its own incorporation requirements, but the date of incorporation is typically the filed date of the corporate charter.',
    object_type: 'date',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '1551ee2a-f6a0-4a4b-b322-d98d3a696cf3',
    name: 'Full Address',
    label:
      'Full address (street, city, state, country) associated with an entity.',
    description:
      'collection of official information that describes the location of a building, apartment, or other structure following the Royal mail standard address form (described here: How to address mail clearly, guide to clear letter addressing). The full address value should be an address which this entity has majority ownership in.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '0efd0441-1ffc-4e30-8806-e58c434770c8',
    name: 'Email Address',
    label: 'Email address associated with an entity.',
    description:
      'The email address associated with this entity that is 1. public (it is openly known the entity is associated with this email address) and 2. official (the entity has formally associated themselves with this phone number by posting it on a website, social media link, etc. that they are in control of).',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'b996dfba-6f3b-458e-bb98-61939160fd88',
    name: 'Wikidata ID',
    label: 'Wikidata ID for an entity, if there is a matching Wikidata entity',
    constraints: [
      {
        type: 'unique_object',
      },
    ],
    description:
      'The unique Wikidata ID (item, property, or lexem) associated with this entity on Wikidata. A Wikidata ID is a number prefixed by a letter. Items, also known as Q-items, are prefixed with ‘Q’. Properties are prefixed by ‘P’. Lexemes are prefixed by ‘L’.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: 'c094b0f7-d34c-4f5e-86b3-801da1c82091',
    name: 'Discord URL',
    label: 'URL of Discord channel',
    description:
      'The primary and official Discord URL for this entity. Discord URLs not officially affiliated with the entity should not be used.',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: '896c9d73-a08b-44ae-8e4e-2a02e5c1e546',
    name: 'Official Blog',
    label: 'URL of official blog associated with this entity.',
    description:
      'The top-level URL of the official blog associated with this entity. A blog is a regularly updated website or web page, typically written in informal diary-style posts and displayed in reverse chronological order.',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: '78142d14-3ffa-4250-a92a-23f6bfceca62',
    name: 'CIK Number',
    label: 'The CIK  number associated with this entity.',
    constraints: [
      {
        type: 'format',
        regex_pattern: '^[1-9][0-9]{0,9}$',
      },
      {
        type: 'unique_object',
      },
    ],
    description:
      'The unique CIK (Central Index Key) number associated with this entity. The CIK number is used as a unique identifier for financial filings with the U.S. Security and Exchange Commission (SEC), and is assigned by the SEC.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: '230c95f8-f674-4c08-bc07-773d5a6f198a',
    name: 'Glassdoor ID',
    label: 'The unique Glassdoor ID associated with this entity.',
    constraints: [
      {
        type: 'format',
        regex_pattern: '^[0-9]+$',
      },
      {
        type: 'unique_object',
      },
    ],
    description:
      'The unique Glassdoor ID associated with this entity on Glassdoor. Glassdoor ID pages provide a profile of a company along with reviews of the company by current and former employees, reports on interviews with the company, and other data on the company.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: 'edff5e5b-1f4f-469e-abcc-02eb9c5e4b67',
    name: 'Google Scholar Author ID',
    label: 'The unique Google Scholar Author ID associated with this person.',
    constraints: [
      {
        type: 'format',
        regex_pattern: '^[-_0-9A-Za-z]{12}$',
      },
      {
        type: 'unique_object',
      },
    ],
    description:
      'The unique Google Scholar Author ID associated with this person on Google Scholar.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: 'cc4fdda9-3f19-453b-b417-e691a771314f',
    name: 'CAGE Code',
    label:
      'Code assigned to a company or organization by the Defense Logistics Agency.',
    constraints: [
      {
        type: 'format',
        regex_pattern: '^[0-9A-Za-z]{5}$',
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'unique_object',
      },
    ],
    description:
      'Five-character alpha-numeric, unique identifier assigned and managed by the Defense Logistics Agency (DLA), which provide a standardized method of identifying a given facility at a specific location.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: 'a0dc896f-72b8-4d4e-b9c3-a447adfcf0e0',
    name: 'GSA Unique Entity Identifier',
    label:
      'Unique Entity Identifier (UEI) assigned to a company or organization by the US General Services Administration.',
    constraints: [
      {
        type: 'format',
        regex_pattern: '^[0-9A-Za-z]{12}$',
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'unique_object',
      },
    ],
    description:
      'A twelve character alphanumeric Unique Entity Identifier (UEI) assigned to a company or organization by the US General Services Administration (GSA).',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'fc693d47-54aa-4c9f-8c73-971637692e71',
    name: 'DUNS Number',
    label:
      'Nine-digit identifier issued by Dun & Bradstreet that uniquely identifies an organization.',
    constraints: [
      {
        type: 'format',
        regex_pattern: '^[0-9]{9}$',
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'unique_object',
      },
    ],
    description:
      'Nine-digit identifier issued by Dun & Bradstreet that uniquely identifies an organization. ',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'a91e59fd-5bda-4234-8823-5fa614773ca2',
    name: 'Accelerator Batches',
    label:
      'One or more individual accelerator batches organized by a parent accelerator.',
    inverse_id: '1a2e5072-74ed-4043-8c29-d6e85b2fbd1a',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '253b2d4f-bdb5-4e39-bd7d-26566cf024b0',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'One or more individual accelerator batches organized by a parent accelerator.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '1a2e5072-74ed-4043-8c29-d6e85b2fbd1a',
    name: 'Parent Accelerator',
    label:
      'The organization that organizes and runs an individual accelerator batch.',
    inverse_id: 'a91e59fd-5bda-4234-8823-5fa614773ca2',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '253b2d4f-bdb5-4e39-bd7d-26566cf024b0',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'The organization that organizes and runs an individual accelerator batch. While each accelerator batch may or may not have its own organization or legal entity, the parent accelerator is the organization that organizes each accelerator batch.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '50f7f026-1a21-4bdf-b7ee-f6f6a8697740',
    name: 'Accelerator Batch Companies',
    label: 'A company funded as part of an accelerator batch.',
    inverse_id: 'd4f75a00-f517-4afa-8839-0add73e29f3b',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '253b2d4f-bdb5-4e39-bd7d-26566cf024b0',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description: 'A company funded as part of an accelerator batch.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'd4f75a00-f517-4afa-8839-0add73e29f3b',
    name: 'Accelerator Batch',
    label:
      'An accelerator batch is a group of companies that are funded and mentored as a batch.',
    inverse_id: '50f7f026-1a21-4bdf-b7ee-f6f6a8697740',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '253b2d4f-bdb5-4e39-bd7d-26566cf024b0',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'An accelerator batch is a group of companies that are funded and mentored as a batch.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '69e9e6d7-f011-432b-86c7-e484c828c1f7',
    name: 'Apple Music Artist ID',
    label: 'Apple Music ID for a musical artist.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'format',
        regex_pattern: '^[0-9A-Za-z]+$',
      },
      {
        type: 'unique_object',
      },
    ],
    description: 'Apple Music ID for a musical artist.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: '09dec055-52d8-42e6-9fc0-56ecac599a8b',
    name: 'Spotify Artist ID',
    label: 'Spotify ID for a musical artist.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'format',
        regex_pattern: '^[0-9A-Za-z]+$',
      },
      {
        type: 'unique_object',
      },
    ],
    description: 'Spotify ID for a musical artist.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: 'cc4df1f3-97e5-4062-ac74-f77242bfd76f',
    name: 'Person IMDb ID',
    label: 'The IMDb ID for a musical artist.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'format',
        regex_pattern: '^[0-9A-Za-z]+$',
      },
      {
        type: 'unique_object',
      },
    ],
    description:
      'The IMDb ID that is used for this entity. An entity can be a person (for example an actor).',
    object_type: 'string',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: '558771a6-bffc-49ec-9e96-c2f8c5b57123',
    name: 'Сreative Work IMDb ID',
    label: 'The IMDb ID associated with this entity.',
    constraints: [
      {
        type: 'format',
        regex_pattern: '^[0-9A-Za-z]+$',
      },
      {
        type: 'unique_object',
      },
    ],
    description:
      'The IMDb ID that is used for this entity. An entity can be creative work (Movie, TV show, etc.)',
    object_type: 'string',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: 'd5e99b15-1e34-46fe-bbff-d000420eea60',
    name: 'Accelerator',
    label: 'Accelerator or incubator that a company participated in',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'Accelerators are cohort-based organizations for startups and early stage companies, providing education, mentorship, and seed funding.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'a980fe34-2bc0-4477-93bb-6508656d4e56',
    name: 'Y Combinator URL',
    label: 'Profile page URL for a Y Combinator company.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      "URL for a company or organization's profile page in the Y Combinator directory",
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: '4f0e69b1-a30f-4fb5-9d60-1fe4443e258d',
    name: 'Invested in',
    label:
      'Companies, Organizations, or Cryptocurrencies that the entity has invested in.',
    constraints: [
      {
        type: 'predicate_object',
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
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
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
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'Companies, Organizations, or Cryptocurrencies that the entity has invested in.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '8ccfda1e-b9cc-44e9-bfeb-18bf98cc3330',
    name: 'Investors',
    label: 'Investors in an entity.',
    constraints: [
      {
        type: 'predicate_object',
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
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
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
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'Investors are the companies, organizations, and people that have invested in an entity. ',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '36935242-5e49-4523-81f2-cb74492a5927',
    name: 'Exchange',
    label:
      'Real or virtual facility where brokers and traders can buy and sell securities',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'Real or virtual facility where brokers and traders can buy and sell securities, including stock, equities, securities, and bonds. Cryptocurrency exchanges should not be included as valid for this predicate.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '24fc4f6d-c56d-4879-ac7a-76503341798b',
    name: 'Incorporation Reference',
    label:
      'Reference number or ID for the company in the place of incorporation',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      'Reference number or ID for a company in the place of incorporation, as assigned by the incorporating agency.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '25e6d22a-564c-4d66-95e3-64787255b8a0',
    name: 'Number of Employees',
    label: 'Number of individuals employed by an entity.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description: 'Number of individuals employed by a company or organization.',
    object_type: 'float',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '26fe628b-0434-4cba-8536-a29f7e4e552c',
    name: 'Fax Number',
    label: 'Fax machine number associated with this entity.',
    description:
      'The fax number associated with this entity that is 1. public (it is openly known the entity is associated with this fax number) and 2. official (the entity has formally associated themselves with this fax number by posting it on a website, social media link, etc. that they are in control of).',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'd4f54627-aba2-45aa-a5ff-546faf07abf5',
    name: 'Previous Name',
    label: 'Legal or brand name previously associated with an entity.',
    description:
      'Legal or brand name previously associated with an entity, such as a company, organization, or product.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '7258475d-4d22-4182-91bc-c1199de6a009',
    name: 'Block Explorer URL',
    label: "URL of this cryptocurrency's block explorer profile.",
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '635dd566-e3f2-4bcd-bc51-95f143b075c7',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      "URL of this cryptocurrency's profile for a blockchain explorer platform, which allows exploration of activity on a given blockchain.",
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: 'da0b7a6f-7f01-447a-9ddc-f2bb8b51c4f9',
    name: 'Maximum Supply',
    label:
      'Maximum number of cryptocurrency coins/tokens that can be created and released.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '635dd566-e3f2-4bcd-bc51-95f143b075c7',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      'Maximum number of cryptocurrency coins/tokens that can ever be released. Once the maximum supply cap is reached, no additional coins or tokens will be mined, minted, or produced.',
    object_type: 'integer',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'b0986245-6a0c-48f9-abae-1c1b6f69996f',
    name: 'Genesis Block Date',
    label: 'Date the genesis block of a cryptocurrency was created.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '635dd566-e3f2-4bcd-bc51-95f143b075c7',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      'Date the first block of a cryptocurrency was created, also referred to as Block 0.',
    object_type: 'date',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'a737c8b2-ab44-44aa-a61a-e98b87fb9797',
    name: 'Award Amount (USD)',
    label:
      'Amount of funding (USD) that was awarded for a government award or contract.',
    description:
      'Amount of funding (USD) that was awarded for a government award or contract.',
    object_type: 'float',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'dfd19088-36ce-4219-a828-428ef38a303c',
    name: 'Government Agency',
    label: 'Government agency associated with this entity.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'Government agency associated with this entity, such as the agency awarding a grant or funding award.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '4f977eb9-9d23-4873-a012-934c7cb9a6a4',
    name: 'UKSIC Code',
    label: 'The United Kingdom Standard Industrial Classification (SIC) Code',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      'The five-digit classification number associated with the United Kingdom Standard Industrial Classification (SIC) of Activities. ',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '03744719-b7f6-4316-b105-93a94f3b53cc',
    name: 'SIC Code',
    label: 'Standard Industrial Classification (SIC) code',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      'The four-digit classification number associated with the U.S. Standard Industrial Classification (SIC) system.',
    object_type: 'integer',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '6105470f-b87a-447d-be76-70f453298842',
    name: 'DSSTox ID',
    label: 'EPA DSSTox substance ID',
    constraints: [
      {
        type: 'unique_object',
      },
    ],
    description:
      'The unique identifier for the U.S. Environmental Protection Agency (EPA) Distributed Structure-Searchable Toxicity (DSSTox) database.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '08219f1e-6c57-4fad-99a3-a998038e663d',
    name: 'NAICS Code',
    label: 'North American Industry Classification System (NAICS) code',
    description:
      'Classification code associated with the North American Industry Classification System (NAICS).',
    object_type: 'integer',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '1a3dd7d7-0eab-4471-a41e-859611f9ed7c',
    name: 'COSPAR ID',
    label: 'COSPAR object identifier',
    constraints: [
      {
        type: 'unique_object',
      },
    ],
    description:
      'The alphanumeric identifier assigned to objects in space in the COSPAR system, administered by the UN Committee on Space Research.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '87634851-cc76-47e1-a33b-eb7e8f6acbad',
    name: 'WHO International Nonproprietary Name',
    label: 'World Health Organization International Nonproprietary Name',
    constraints: [
      {
        type: 'unique_object',
      },
    ],
    description:
      'The generic or nonproprietary name assigned to a pharmaceutical substance by the World Health Organization (WHO) International Nonproprietary Name (INN) system.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '4386accd-542b-44e7-a1e5-ba84700c5239',
    name: 'Gene Ontology ID',
    label: 'Seven digit identifier indicating the ontology of the gene.',
    constraints: [
      {
        type: 'unique_object',
      },
    ],
    description:
      'Seven digit identifier indicating the ontology of the gene in the Gene Ontology (GO) intitiative.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '2ffa561a-18da-4986-b169-f223528c76c7',
    name: 'ISBN',
    label:
      'International Standard Book Number (ISBN) for a book (first edition of hardcover print by default)',
    constraints: [
      {
        type: 'unique_object',
      },
    ],
    description:
      'International Standard Book Number (ISBN) for a book (first edition of hardcover print by default). The ISBM is 10 digits long if assigned before 2007, and 13 digits long if assigned on or after 1 January 2007.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'f7c409b1-7695-4a94-adaf-1b843ee96995',
    name: 'NCBI Locus ID',
    label:
      'Reference sequences and stable database identifier associated with a gene.',
    constraints: [
      {
        type: 'unique_object',
      },
    ],
    description:
      'The alphanumeric reference sequences and stable database identifier associated with a gene by the National center for Biotechnology Information (NCBI) of the National Library of Medicine.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'e7acb77b-8153-4467-95f5-31cff49134cd',
    name: 'Parent Organization',
    label: 'The parent company that owns or controls another company.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'The parent company that owns or controls another company.  Holding or shell companies which do not have business operations and are set up specifically to passively own should not be included as valid for this predicate.\n',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '64b90483-fa1c-4402-b20e-fc5c59ba49b1',
    name: 'Subsidiary',
    label: 'The subsidiary company that is owned or controlled by the company.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'The subsidiary company that is owned or controlled by the parent company, meaning the parent company has or controls more than half of its stock.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '578aea9f-0339-4993-b61b-141ba5aa5d2d',
    name: 'Date of Death',
    label: 'Date when a person died.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      "Date when a person died, verified by a reputable news source or a source owned or controlled by the entity's family, such as a LinkedIn profile or an official social media account.",
    object_type: 'date',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '15159f2d-7885-4a83-a120-d154d83baa9d',
    name: 'Birth Name',
    label: "Person's name given to them at birth",
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description: "Person's name given to them at birth",
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '784e7f11-8895-40d4-b863-82ccf49c0a1a',
    name: 'Child',
    label: 'Child of a person, by birth or legal adoption.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description: 'Child of a person, by birth or legal adoption.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '20008465-981d-407f-b085-81209577ffea',
    name: 'Child of',
    label: 'Parent of a person',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'Parent of a person, including birth parent and parent through legal adoption.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '20b378a9-4787-4c15-8ed7-cd41a5339e15',
    name: 'Father of',
    label: 'Child of a (commonly male) person',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description: 'Child of a (commonly male) person',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'fe245603-0eed-42ed-8068-6c7831729efc',
    name: 'Father',
    label: 'Father (commonly male parent) of a person',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description: 'Father (commonly male parent) of a person',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'dacb097b-b4eb-4e30-b720-be2a2bce01dd',
    name: 'Mother of',
    label: 'Child of a (commonly female) person',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description: 'Child of a (commonly female) person',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '37d41585-3816-4e55-ac7a-528dff0e8dae',
    name: 'Mother',
    label: 'Mother (commonly female parent) of a person',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description: 'Mother (commonly female parent) of a person',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'bfa3f0bf-f5fe-43f5-a5d5-b5301634d299',
    name: 'Spouse',
    label: 'Significant other in a marriage (husband, wife, partner).',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description: 'Significant other in a marriage (husband, wife, partner).',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'bff15032-59a0-4de8-9677-66e13725727a',
    name: 'Sibling',
    label: 'Person who shares one or both parents with a person',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description: 'Person who shares one or both parents with a person.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '6a678ea4-ae64-409f-adff-c4ec87417460',
    name: 'Canonical SMILES',
    label:
      'Canonical form of the simplified molecular-input line-entry system.',
    description:
      'Canonical SMILES is the canonical form of the simplified molecular-input line-entry system, a format to describe the connectivity and chirality of a molecule. Canonical SMILES will only be applicable to entities that are chemical elements or compounds. Entities that are named after a chemical compound should not have Canonical SMILES data. Canonical SMILES for a chemical entity can be obtained by using the National Library of Medicine PubChem database.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '082be9d7-8120-4633-902e-07d156c238e3',
    name: 'Behance URL',
    label: 'The Behance URL associated with this entity.',
    constraints: [
      {
        type: 'predicate_object',
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
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      'The Behance URL owned and managed by an individual person or organization.',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: '2561461d-2b4d-4aa4-87b0-86147bedecfc',
    name: 'Snapchat ID',
    label: 'The ID of Snapchat profile page of an entity.',
    constraints: [
      {
        type: 'format',
        regex_pattern: '^[0-9A-Za-z]+$',
      },
      {
        type: 'unique_object',
      },
    ],
    description: 'The ID of Snapchat profile page of an entity.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: '44697ad3-cf98-4736-8f59-dec72733d437',
    name: 'CoinGecko ID',
    label: 'The official CoinGecko ID associated with this entity.',
    constraints: [
      {
        type: 'format',
        regex_pattern: '^[0-9A-Za-z]+$',
      },
      {
        type: 'unique_object',
      },
    ],
    description: 'The official CoinGecko ID associated with this entity.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: 'a3b95c3c-c217-430e-acd1-053c95093024',
    name: 'Board of Directors',
    label:
      'People who are current members of the Board of Directors of a company',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'People who are current members of the Board of Directors of a company.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '3b9532e4-bd30-4128-9196-dee1ee433bac',
    name: 'Member of Board of Directors of',
    label: 'Entity a person is a current member of the Board of Directors of.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'Entity a person is a current member of the Board of Directors of.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '7725a2f0-a0ab-4120-9f94-f24a1abde095',
    name: 'Taxon',
    label:
      'Correct scientific name of a taxonomic group such as a species, family, or class.',
    constraints: [
      {
        type: 'unique_object',
      },
    ],
    description:
      'Taxon is the scientific name given to a taxonomic group such as a species, family, or class.\n\nTaxon should be applied to taxon names accepted by the scientific community, per citation from an authoritative source.\n\nTaxon names should be formatted so that only the first letter of the first word is capitalized. Ex. Persea americana (correct) vs. Persea Americana (incorrect).',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '866bb4b6-6b3a-4b42-b16a-c6b1f2ec5a59',
    name: 'Geoname ID',
    label: 'The Geoname ID that corresponds to a particular location.',
    constraints: [
      {
        type: 'unique_object',
      },
    ],
    description: 'The Geoname ID that corresponds to a particular location.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '047cb849-0d0e-4c24-a4a4-51e53336b1ea',
    name: 'Duplicate of',
    label: 'The subject entity is a duplicate of the object entity.',
    description:
      'An entity A ‘duplicate of’ another entity B when those entities A and B reference the same entity. If ‘entity A’ → ‘duplicate of’ → ‘entity B’ is accepted, entity B will remain and entity A will no longer accept new statements or allow its triples to be validated. The earliest created entity in the pair will be used as the object of this ‘duplicate of’ triple, and thus be the entity that remains in the case of a ‘duplicate of’ triple being accepted and deduplication occurring. Entities that are highly related but not direct duplicates of each other (i.e. a subsidiary company and its parent company) should not be marked as duplicates.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: '3dbed8c1-ebe5-453a-be9b-3530f471527b',
    name: 'IRS Employer Identification Number',
    label:
      'Employer Identification Number (EIN) assigned by the US Internal Revenue Service.',
    constraints: [
      {
        type: 'format',
        regex_pattern: '^[0-9]{9}$',
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      'The IRS Employer Identification Number is the 9-digit Employer Identification Number (EIN) assigned by the US Internal Revenue Service (IRS).',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'fd4de165-da27-4261-b045-a8aca9baf99b',
    name: 'Location',
    label: 'Geographical location of an entity.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '40548ec9-55e8-4b7e-95e3-c5d9a4590235',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'Geographical location of an entity. Location refers to an established geographical area or region, as well as the area relative to where something else is located.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '28269d4f-f02f-4d8b-82ea-e6d2636d26cc',
    name: 'Accreditation',
    label: 'Accrediting agencies for the educational institution.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '193af481-d970-4a28-b2aa-1d39f6f42c03',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'Accrediting agencies for the educational institution.  The accreditation should be current (not expired or revoked).',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '919db7a4-3c95-4be0-b6ad-b5429c6a7fd4',
    name: 'Affiliated with',
    label:
      'Organization or group to which this person belongs or is otherwise affiliated with.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'Organization or group to which this person belongs or is otherwise affiliated with, such as a professional or social organization or club.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '43b4bff0-c548-4e3f-9084-94d7b044e18d',
    name: 'Doctoral Students',
    label: 'People a doctoral advisor oversaw.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'People a doctoral advisor oversaw during the process of writing their dissertations for a doctoral degree.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'e3260779-d338-483d-9de8-7096c55fac51',
    name: 'Doctoral Advisor',
    label: 'Person who served as an advisor to a doctoral candidate.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'Person who served as an advisor to a doctoral candidate.  The doctoral advisor is a member of a university faculty, and is also known as a dissertation advisor, dissertation director, doctoral supervisor, or PhD advisor. ',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '408a2eb4-3d66-49e6-b007-0e88fa1471ea',
    name: 'Doctoral Thesis Title',
    label: "Official title of a person's doctoral dissertation.",
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      "Official title of a person's doctoral dissertation.  The title should be the full title, in English, as it appears on the thesis that has been successfully defended.",
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '3968e925-0f53-48c3-b3d4-3cc21132066f',
    name: 'Doctoral Thesis Date',
    label:
      "Date a person's PhD or other doctoral dissertation was successfully defended.",
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      "Date a person's PhD or other doctoral dissertation was successfully defended.  Generally will be year or month/year.",
    object_type: 'date',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'f8337728-2cce-42b1-8fa0-3c4ac5d38eb7',
    name: 'Acquirer',
    label:
      'Company that acquired another company in this acquisition transaction.',
    inverse_id: 'ac4a3a78-affe-42f1-a8a7-d9096d1a0d2a',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '6d29d6b2-0256-4ae0-9cc4-bdc556ac7d8d',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'Company that acquired another company in this acquisition transaction, per press release, blog, or other source owned or controlled by one or both of the companies in the transaction.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '13596c53-cc26-4750-b337-f8a85577aa7a',
    name: 'Acquired Company',
    label: 'Company acquired by another company in an acquisition transaction.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '6d29d6b2-0256-4ae0-9cc4-bdc556ac7d8d',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'Company acquired by another company in an acquisition transaction, per press release, blog, or other source owned or controlled by one or both of the companies in the transaction.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'a4503571-c27d-47fd-bb70-2541719374b6',
    name: 'Acquisition Transaction',
    label: 'Acquisition transaction for the company.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '6d29d6b2-0256-4ae0-9cc4-bdc556ac7d8d',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description: 'Acquisition transaction for the company.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'febc8010-bb8b-4fd4-aaea-2e0f6074ba1c',
    name: 'Acquisition Amount (USD)',
    label: 'Headline or total amount of the acquisition transaction.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '6d29d6b2-0256-4ae0-9cc4-bdc556ac7d8d',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      'Headline or total amount of the acquisition transaction, per press release, blog, or other source owned or controlled by one or both of the companies in the transaction.',
    object_type: 'integer',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '09296bfc-5ae0-4ec3-973d-648fbab61997',
    name: 'Transaction Date Closed',
    label: 'Date an acquisition transaction closed.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '6d29d6b2-0256-4ae0-9cc4-bdc556ac7d8d',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      'Date an acquisition transaction closed, per press release, blog, or other source owned or controlled by one or both of the companies in the transaction',
    object_type: 'date',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'c15fabd9-e7b0-4531-a6d9-7ffb75c835eb',
    name: 'Ticker Symbol',
    label:
      'Ticker symbol for publicly-traded stock (ie, AAPL) or cryptocurrency (ie, BTC)',
    description:
      'Ticker symbol for publicly-traded stock (ie, AAPL) or cryptocurrency (ie, BTC)',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '1c8266d0-3e95-41a5-ac52-f268b8944072',
    name: 'Company Operating Status',
    label: 'Operating status of a company.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'enum',
        target: PredicateConstraintTarget.Object,
        elements: [
          {
            object_value: 'Active',
          },
          {
            object_value: 'Closed',
          },
        ],
      },
    ],
    description: 'Operating status (active or closed) of a company. ',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'ba2372c0-d779-4b8f-9309-d47568b0d436',
    name: 'Legal Classification',
    label: 'Legal structure of a company or organization.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      "Legal structure of a company or organization, such as limited liability company (LLC), joint-stock company, or nonprofit organization, per regulatory documentation or an official resource owned or controlled by the entity. Classification type should be specific when available, such as 'C corporation' rather than 'Corporation.'",
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'cacb3a4d-70c7-483c-8967-901a043ea42c',
    name: 'Headquarters',
    label: 'Location where a company has its headquarters.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '40548ec9-55e8-4b7e-95e3-c5d9a4590235',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'Location where a company or organization has its headquarters, generally where the executive management is located. Typically this should only be a single location.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '97839c8a-cfff-443f-8d20-8bd4f5758f51',
    name: 'Public/Private',
    label: 'Status of a company, either public or private.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'enum',
        target: PredicateConstraintTarget.Object,
        elements: [
          {
            object_value: 'Public',
          },
          {
            object_value: 'Private',
          },
        ],
      },
    ],
    description:
      'Status of a company, either public (publicly traded companies that sell stock to the general public on a stock exchange) or private (no public ownership of its shares or assets).  Subsidiaries of public companies are usually privately held.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '2b38da50-b343-41c4-9808-d4e3ff4aa1fe',
    name: 'Place of Incorporation',
    label: 'Location of legal incorporation of a company',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '40548ec9-55e8-4b7e-95e3-c5d9a4590235',
          },
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: 'ca399d7a-e559-4062-9570-1b69c667ca10',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'Location of legal incorporation of a company, which may be different than the physical location of a company’s offices.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'ceddf2bd-2e2d-4125-b6c3-9ab10cddc087',
    name: 'Legal Name',
    label: 'Name used by entity in legal documents.',
    constraints: [
      {
        type: 'predicate_object',
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
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      'Name used by entity in legal documents, per regulatory documentation or an official resource owned or controlled by the entity.  Legal Name should only be used if different from Name (primary name used by this entity). ',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'ee27a931-cb1c-4d3e-a9f0-3a48df132182',
    name: 'End Date',
    label: 'Date that a mutually binding agreement, law, or contract expires.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '273f6736-1c67-4b46-ab23-e9348b466b41',
          },
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: 'f55f803b-a98c-49f0-a748-0ab2b5132297',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      'Date that a mutually binding agreement, law, or contract expires, as listed on document itself or other official source.  For SBA Awards, this should be the Award End Date as listed in the official award information.',
    object_type: 'date',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '61771b08-4064-45f1-bca9-90bfae59fcda',
    name: 'Taxon Common Name',
    label: 'Common or vernacular name for a biological taxon.',
    description:
      'Common or vernacular name for a biological taxon, as listed in reliable scientific sources.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'dff8d031-1b22-4359-a9a3-30e7fb5153ec',
    name: 'Date Announced',
    label:
      'Date of the first public announcement of an award, funding round, acquisition, or other entity.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '6d29d6b2-0256-4ae0-9cc4-bdc556ac7d8d',
          },
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: 'c93f9f81-cbfa-47b0-aae9-0e10d97b53f6',
          },
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '2b9258df-ecd1-4394-93f5-868934fd4e8a',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      'Date of the first public announcement of an award, funding round, acquisition, or other entity that can be validated from a source owned or controlled by the entity, such as an official blog or a press release.',
    object_type: 'date',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '108e5d1a-8cbe-4ae7-8740-68d0c99cd691',
    name: 'Also Known As',
    label:
      'Other names for this entity, including aliases, nicknames, abbreviations, and alternative spellings.',
    description:
      'Other names for this entity, including aliases, nicknames, abbreviations, and alternative spellings.  Should not include alternative word order (such as Last Name, First Name) or alternative capitalization for a name.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'ac553a3b-038f-40b9-b2dd-c06e6bc28cec',
    name: 'Pseudonym',
    label:
      'Fictitious name that a person or group assumes for a particular purpose, separate from their true name.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      "Fictitious name that a person or group assumes for a particular purpose, separate from their true name.  Commonly used for authors, and also known as 'pen name.'",
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '504259b4-8b25-4110-b77c-f653ec12b7fe',
    name: 'Motto',
    label:
      'Short sentence or phrase commonly known to encapsulate the beliefs or values of an entity.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      "Short sentence or phrase commonly known to encapsulate the beliefs or values of an entity. Should not be confused with an organization's tagline used for marketing a brand or product.",
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '984cd4ab-85bd-4a08-acfd-8c3802b725fe',
    name: 'Tagline',
    label: 'Official marketing tagline of the organization.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      "Official marketing tagline of the organization, usually a short catchpharse to sum up the meaning or value of the organization's brand or the brand's products. Taglines, which rarely change, should not be confused with slogans used short-term for an advertising campaign or website.",
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '639f060c-8606-48f6-a7b5-ee9edbb84ea7',
    name: 'Effective Date',
    label:
      'Date a law or policy becomes effective, which may be different than the date enacted.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '273f6736-1c67-4b46-ab23-e9348b466b41',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      'Date a law or policy becomes effective, which may be different than the date enacted.',
    object_type: 'date',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'f776ec59-ce67-4508-bc36-acda2df456f7',
    name: 'Token Standard',
    label:
      'A set of rules that allows the development of cryptocurrency tokens on a blockchain protocol, such as ERC-721 on Ethereum.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '635dd566-e3f2-4bcd-bc51-95f143b075c7',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      'A set of rules that allows the development of cryptocurrency tokens on a blockchain protocol, such as ERC-721 on Ethereum.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '5d29c9f2-7618-417c-ad12-2eed9a9dd779',
    name: 'Hash Function',
    label: 'Cryptographic hash function of a cryptocurrency.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '635dd566-e3f2-4bcd-bc51-95f143b075c7',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      'Cryptographic hash function of a cryptocurrency, including keyed and unkeyed.  The hash function (such as ETHash) should be confused with the blockchain technology (such as Ethereum) that uses it.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '6c7c41d6-ca87-4ee2-8ab9-9ca03762cbb2',
    name: 'Clinical Trial Start Date',
    label: 'Date on which the clinical trial starts.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '2fada829-b268-4542-9dc2-8740248e975d',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      'Date on which the clinical trial starts, which is the date the actual date on which the first participant was enrolled in the study.',
    object_type: 'date',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '182d4c2f-a98b-440b-aeac-8caea8edf230',
    name: 'Primary Completion Date',
    label:
      'Primary date on which clinical trial concludes for the primary outcome measure.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '2fada829-b268-4542-9dc2-8740248e975d',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      'Primary date on with date on which the last participant in a clinical study was examined or received an intervention to collect final data for the primary outcome measure. ',
    object_type: 'date',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '2f65a0b3-8f11-4be8-9c37-7f03a7e5e744',
    name: 'NCT Number',
    label: 'National Clinical Trial number.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '2fada829-b268-4542-9dc2-8740248e975d',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      "National Clinical Trial number, which is the  unique identification code given to a clinical study upon registration at ClinicalTrials.gov. Format is'NCT' followed by an 8-digit number.",
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'bde884df-85bd-4d7f-aa59-c3369c3910f2',
    name: 'Clinical Trial Study Type',
    label: 'Type of clinical study.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '2fada829-b268-4542-9dc2-8740248e975d',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'enum',
        target: PredicateConstraintTarget.Object,
        elements: [
          {
            object_value: 'Interventional',
          },
          {
            object_value: 'Observational',
          },
          {
            object_value: 'Expanded access',
          },
        ],
      },
    ],
    description:
      'Type of clinical study: Interventional (also known as clinical trial), Observational (including patient registries), or Expanded Access.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '4fa01810-7b0f-48ea-a046-2b1049d9c406',
    name: 'Study Completion Date',
    label:
      'Primary date on which clinical trial concludes for the primary and secondary outcome measures, and adverse events',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '2fada829-b268-4542-9dc2-8740248e975d',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      'The date on which the last participant in a clinical study was examined or received an intervention/treatment to collect final data for the primary outcome measures, secondary outcome measures, and adverse events',
    object_type: 'date',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'cb2ee7da-a696-44f2-84ef-9af7733c9ca9',
    name: 'Trial Recruitment Status',
    label: 'Recruitment status of clinical study.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '2fada829-b268-4542-9dc2-8740248e975d',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'enum',
        target: PredicateConstraintTarget.Object,
        elements: [
          {
            object_value: 'Recruiting',
          },
          {
            object_value: 'Not yet recruiting',
          },
          {
            object_value: 'Available for expanded access',
          },
          {
            object_value: 'Active',
          },
          {
            object_value: 'Completed',
          },
          {
            object_value: 'Terminated',
          },
          {
            object_value: 'Suspended',
          },
          {
            object_value: 'Withdrawn',
          },
          {
            object_value: 'Enrolling by invitation',
          },
          {
            object_value: 'Temporarily not available for expanded access',
          },
          {
            object_value: 'No longer available for expanded access',
          },
          {
            object_value: 'Approved for marketing',
          },
          {
            object_value: 'Unknown',
          },
        ],
      },
    ],
    description:
      'Recruitment status of clinical study: Not yet recruiting, Recruiting, Enrolling by invitation, Active not Recruiting, Suspended, Terminated, Completed, Withdrawn, Unknown.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '9573b58e-b79d-4c45-a205-ff658d0e8628',
    name: 'Trial Sponsor',
    label: 'Entity who initiates the study. ',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '2fada829-b268-4542-9dc2-8740248e975d',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'Entity who initiates the study and who has authority and control over the study.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '9c23aab8-452d-4385-a607-be5792df4803',
    name: 'Trial Recruitment Size',
    label: 'Number of participants in clinical trial.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '2fada829-b268-4542-9dc2-8740248e975d',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      'Number of participants in clinical trial, as indicated by the enrollment number list in the trial documentation.',
    object_type: 'integer',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '7c697039-ec87-4340-9226-188dfb0d685f',
    name: 'Interventional Trial Phase',
    label: 'Phase of an interventional clinical trial.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '2fada829-b268-4542-9dc2-8740248e975d',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'enum',
        target: PredicateConstraintTarget.Object,
        elements: [
          {
            object_value: 'Early Phase 1',
          },
          {
            object_value: 'Phase 1',
          },
          {
            object_value: 'Phase 2',
          },
          {
            object_value: 'Phase 3',
          },
          {
            object_value: 'Phase 4',
          },
          {
            object_value: 'Not Applicable',
          },
        ],
      },
    ],
    description:
      'Phase of an interventional clinical trial, which will be one of five phases: Early Phase 1 (formerly listed as Phase 0), Phase 1, Phase 2, Phase 3, and Phase 4. ',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '438dce57-537b-44fe-80e2-b8417fa0089e',
    name: 'Health Conditions in Trial',
    label: 'The health conditions studied in the clinical trial.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '2fada829-b268-4542-9dc2-8740248e975d',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      'The health conditions studied in the clinical trial,  including diseases, disorders, syndromes, illness, injury or other health-related issues.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'c2606bf5-8df4-4c46-b155-4a1811359007',
    name: 'Observational Study Perspective',
    label:
      'Temporal relationship of observation period to time of participant enrollment in a clinical trial.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '2fada829-b268-4542-9dc2-8740248e975d',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'enum',
        target: PredicateConstraintTarget.Object,
        elements: [
          {
            object_value: 'Retrospective',
          },
          {
            object_value: 'Prospective',
          },
          {
            object_value: 'Other',
          },
          {
            object_value: 'Cross-Sectional',
          },
        ],
      },
    ],
    description:
      'The temporal relationship of observation period to time of participant enrollment (Retrospective, Prospective, Cross-sectional, Other) as noted in the Study Design section of a clinical study.  Applies only when Clinical Trial Study Type is Observational.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'a3cb5373-b541-4057-ba8a-7b4202be86a4',
    name: 'Observational Clinical Trial Type',
    label: 'Type of an observational clinical trial.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '2fada829-b268-4542-9dc2-8740248e975d',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'enum',
        target: PredicateConstraintTarget.Object,
        elements: [
          {
            object_value: 'Cohort',
          },
          {
            object_value: 'Case-Control',
          },
          {
            object_value: 'Case-Only',
          },
          {
            object_value: 'Case-Crossover',
          },
          {
            object_value: 'Family-Based',
          },
          {
            object_value: 'Other',
          },
          {
            object_value: 'Ecologic or Community',
          },
        ],
      },
    ],
    description:
      'Type of an observational clinical trial, such as Cohort or Case-Control. Applies only when Clinical Trial Study Type is Observational.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'f3cdfa84-161c-4b19-b62e-6c47c9cb553b',
    name: 'Interventional Trial Purpose',
    label: 'The main objective of interventional clinical trial. \n',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '2fada829-b268-4542-9dc2-8740248e975d',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'enum',
        target: PredicateConstraintTarget.Object,
        elements: [
          {
            object_value: 'Treatment',
          },
          {
            object_value: 'Prevention',
          },
          {
            object_value: 'Diagnostic',
          },
          {
            object_value: 'Screening',
          },
          {
            object_value: 'Other',
          },
          {
            object_value: 'Supportive Care',
          },
          {
            object_value: 'Health Services Research',
          },
          {
            object_value: 'Basic Science',
          },
          {
            object_value: 'Device Feasibility',
          },
        ],
      },
    ],
    description:
      'The main objective of interventional clinical trial.  The types primary purposes include:  treatment, prevention, diagnostic, supportive care, screening, health services research, basic science, and other.\n',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '9cebd57e-6a42-42d2-9714-36de8c42a32f',
    name: 'Intervention Type',
    label: 'Type of intervention used in a clinical trial',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '2fada829-b268-4542-9dc2-8740248e975d',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'enum',
        target: PredicateConstraintTarget.Object,
        elements: [
          {
            object_value: 'Drug',
          },
          {
            object_value: 'Device',
          },
          {
            object_value: 'Biological',
          },
          {
            object_value: 'Procedure',
          },
          {
            object_value: 'Radiation',
          },
          {
            object_value: 'Behavioral',
          },
          {
            object_value: 'Genetic',
          },
          {
            object_value: 'Dietary supplement',
          },
          {
            object_value: 'Combination product',
          },
          {
            object_value: 'Diagnostic test',
          },
          {
            object_value: 'Other',
          },
        ],
      },
    ],
    description:
      'Type of intervention used in a clinical trial, including drugs, medical devices, procedures, vaccines, and other products and approaches.  ',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'b36e1e3b-337c-4a4d-9caa-4638d469f16c',
    name: 'Trial Collaborator',
    label:
      'Entity, other than the sponsor, providing support to the clinical trial.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '2fada829-b268-4542-9dc2-8740248e975d',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'Entity other than the sponsor that provides support for a clinical study, including activities such as funding, design, implementation, data analysis, or reporting.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '5da8e975-88fc-4b8f-81ff-7c51b4efc834',
    name: 'Participating Facility',
    label: 'Facility participating in a clinical trial.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '2fada829-b268-4542-9dc2-8740248e975d',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'Research or medical facility participating in a clinical trial, if available in the Location listing of the trial.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '3a885fa0-0ba1-410e-8417-e606f5802d50',
    name: 'Intervention Name',
    label: 'Entity representing a specific named intervention',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '2fada829-b268-4542-9dc2-8740248e975d',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      'Entity representing a specific named intervention, which may include specific drugs, medical devices, procedures, vaccines, and other products and approaches.  ',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '9bb1c4a7-246f-4643-9b56-a14d0027f9a4',
    name: 'Funding Rounds',
    label: 'Funding rounds that a company has received.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: 'c93f9f81-cbfa-47b0-aae9-0e10d97b53f6',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description: 'Entities for the funding rounds that a company has received.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '8fa38ac4-b0c5-4f46-a273-a2b6e03afae2',
    name: 'Funded Company',
    label: 'Company that received funding from this round.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: 'c93f9f81-cbfa-47b0-aae9-0e10d97b53f6',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'Company that received funding from this round, per an official announcement or other source controlled or owned by the company.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '7535e456-84a6-4c18-943c-59ba885ea74a',
    name: 'Funding Round Date',
    label: 'Date a funding round closed',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: 'c93f9f81-cbfa-47b0-aae9-0e10d97b53f6',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      'Date a funding round closed, which may differ from the date a round is announced. ',
    object_type: 'date',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '8cb26d1a-a209-43ea-90a4-e790dab9ce1e',
    name: 'Funding Round Amount (USD)',
    label: 'Amount of money (in USD) raised in a funding round.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: 'c93f9f81-cbfa-47b0-aae9-0e10d97b53f6',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      'Amount of money (in USD) raised in a funding round, per an official announcement or other source controlled or owned by the company.  If the amount is listed in another currency, the conversion to USD should be calculated using the date the funding was announced.',
    object_type: 'integer',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '7901939d-ccc3-4c51-8636-2078ad9e3dfd',
    name: 'Funding Type',
    label: 'The type of funding associated with this funding round.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: 'c93f9f81-cbfa-47b0-aae9-0e10d97b53f6',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'enum',
        target: PredicateConstraintTarget.Object,
        elements: [
          {
            object_value: 'Grant (money)',
          },
          {
            object_value: 'Convertible note',
          },
          {
            object_value: 'Angel round',
          },
          {
            object_value: 'Pre-seed',
          },
          {
            object_value: 'Seed round',
          },
          {
            object_value: 'Crowdfunding',
          },
          {
            object_value: 'Venture round',
          },
          {
            object_value: 'Corporate funding round',
          },
          {
            object_value: 'Series A round',
          },
          {
            object_value: 'Series B round',
          },
          {
            object_value: 'Series C round',
          },
          {
            object_value: 'Series D round',
          },
          {
            object_value: 'Series E round',
          },
          {
            object_value: 'Series F round',
          },
          {
            object_value: 'Series G round',
          },
          {
            object_value: 'Series H round',
          },
          {
            object_value: 'Series I round',
          },
          {
            object_value: 'Series J round',
          },
          {
            object_value: 'Series K round',
          },
          {
            object_value: 'Series L round',
          },
          {
            object_value: 'Private equity',
          },
          {
            object_value: 'Initial Coin Offering (ICO)',
          },
          {
            object_value: 'Initial public offering (IPO)',
          },
        ],
      },
    ],
    description:
      'The type of funding associated with this funding round (such as Series A, Initial Public Offering (IPO), private equity) per an official announcement or other source controlled or owned by the company.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'f89d3138-f12f-4f1f-b1ed-652202d78b5b',
    name: 'Announcement URL',
    label:
      'URL of first public announcement of an award, funding round, acquisition, partnership, or other event.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '6d29d6b2-0256-4ae0-9cc4-bdc556ac7d8d',
          },
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: 'c93f9f81-cbfa-47b0-aae9-0e10d97b53f6',
          },
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '2b9258df-ecd1-4394-93f5-868934fd4e8a',
          },
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '104ac3a1-bf25-49be-9f0a-1b46104e06eb',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      'URL of first public announcement of an award, funding round, acquisition, partnership, or other event. URL should be from a source owned or controlled by the entity, such as an official blog or a press release.',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '537fd632-b5f7-4f60-8d6a-9a61a1927ee0',
    name: 'Postmoney Valuation',
    label: 'Valuation of company after this funding round.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: 'c93f9f81-cbfa-47b0-aae9-0e10d97b53f6',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      'Valuation of company after this funding round.  Postmoney valuation is the equal to the premoney valuation plus amount of funding received in the round.',
    object_type: 'integer',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '70dd4d7d-b5e9-427c-a8bf-e35c1d09f337',
    name: 'Premoney Valuation',
    label: 'Premoney valuation of the company before the funding round.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: 'c93f9f81-cbfa-47b0-aae9-0e10d97b53f6',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      'Premoney valuation of the company before the funding round, in other words how much the company is worth before receiving the funding.',
    object_type: 'integer',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'b473cfda-b7e4-420f-b8f7-88031621f971',
    name: 'Award Type',
    label: 'Parent program of the award, either SBIR or STTR. ',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: 'f55f803b-a98c-49f0-a748-0ab2b5132297',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'enum',
        target: PredicateConstraintTarget.Object,
        elements: [
          {
            object_value: 'SBIR',
          },
          {
            object_value: 'STTR',
          },
        ],
      },
    ],
    description:
      'Parent program of the award, either SBIR or STTR, as listed in the SBIR/STTR award information.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'e175b0b0-fc8b-412c-9270-52158f7d7f37',
    name: 'Award Phase',
    label: 'Phase of a small business award, either Phase I or II.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: 'f55f803b-a98c-49f0-a748-0ab2b5132297',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'enum',
        target: PredicateConstraintTarget.Object,
        elements: [
          {
            object_value: 'Phase I',
          },
          {
            object_value: 'Phase II',
          },
        ],
      },
    ],
    description:
      'Phase of a small business award, either Phase I or II, as listed in the SBIR/STTR award information.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'af94d41e-aa33-47cc-bd3f-0eeb26894d27',
    name: 'SBIR/STTR Award Recipient',
    label: 'Entity that received a particular small business award.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: 'f55f803b-a98c-49f0-a748-0ab2b5132297',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      'Entity that received a particular small business award.  Includes Small Business Innovation Research (SBIR) and Small Business Technology Transfer (STTR) awards.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '249f906a-855c-4eb7-b2fb-d5088f684010',
    name: 'Contract Number (US Government)',
    label:
      'Unique contract number associated with an a U.S. government contract.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: 'f55f803b-a98c-49f0-a748-0ab2b5132297',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      'Unique contract number associated with an a U.S. government contract, such as a SBIR/STTR award.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '10c2c5d1-443d-43ea-86b2-a35e8c318196',
    name: 'SBIR/STTR Awards',
    label: 'National small business awards that have been given to an entity.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: 'f55f803b-a98c-49f0-a748-0ab2b5132297',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: 'f55f803b-a98c-49f0-a748-0ab2b5132297',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'National small business awards that have been given to an entity.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '473b9f57-588a-4a7d-8e95-720f86d7bd78',
    name: 'Government Branch',
    label:
      "Government branch associated with this entity's small business award.",
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: 'f55f803b-a98c-49f0-a748-0ab2b5132297',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      "Government branch associated with this entity's small business award.",
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '02dc08e1-4db9-4463-a4e3-f95bc289db7e',
    name: 'Currency',
    label: 'Currencies in circulation for a country.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: 'ca399d7a-e559-4062-9570-1b69c667ca10',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description: 'Currencies in circulation for a country.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'b14d966a-4a66-4404-b1e4-dae9f53e2e1b',
    name: 'UNII',
    label: 'FDA UNII substance identifier',
    description:
      'The Unique Ingredient Identifier (UNII) is an alphanumeric identifier for a species or substance that is generated by the Global Substance Registration System (GSRS) of the U.S. Food and Drug Administration (FDA).',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: '64effb4b-0deb-422a-9110-df298a02f988',
    name: 'ChEMBL ID',
    label: 'EBI ChEMBL chemical identifier',
    description:
      'The unique identifier for the European Bioinformatics Institute (EBI) ChEMBL database of bioactive molecules.',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: 'ac3f1cb1-8531-4ca1-beeb-b316e1ca20de',
    name: 'HGNC Symbol',
    label: 'HGNC Gene Symbol',
    description:
      'The unique identifier for a gene in the HUGO Gene Nomenclature Committee (HGNC) system.',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: '08bebe3e-5564-4dd6-9937-cd04cb585528',
    name: 'ISO-4 Abbreviation',
    label: 'ISO-4 abbreviation for a journal or scientific publication.',
    description:
      'ISO-4 abbreviation for a journal or scientific publication, as assigned by the International Organization for Standardization (ISO).',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'ef8a899d-56c6-48bb-82a6-2fb192ccec57',
    name: 'PDB Ligand ID',
    label: 'Protein Data Bank Ligand ID',
    description:
      'The alphanumeric identifier for a substance in the Research Collaboratory for Structural Bioinformatics (RCSB) Protein Data Bank.',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: '5394e4b1-26ac-4f2e-be3e-1b2f191109af',
    name: 'Total Sold (USD)',
    label: 'Total amount sold for an investment fund. ',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '2b9258df-ecd1-4394-93f5-868934fd4e8a',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      'Total amount sold for an investment fund, per U.S. Securities and Exchange (SEC) filings. ',
    object_type: 'float',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '4ae3d52d-bb3a-4f67-94f4-690d626afb40',
    name: 'Investment Fund Type',
    label: 'Investment type associated with a fund.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '2b9258df-ecd1-4394-93f5-868934fd4e8a',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'enum',
        target: PredicateConstraintTarget.Object,
        elements: [
          {
            object_value: 'Sovereign wealth fund',
          },
          {
            object_value: 'Pension fund',
          },
          {
            object_value: 'Endowment fund',
          },
          {
            object_value: 'Hedge fund',
          },
          {
            object_value: 'Liquidity Fund',
          },
          {
            object_value: 'Private equity fund',
          },
          {
            object_value: 'Real estate fund',
          },
          {
            object_value: 'Securitized Asset Fund',
          },
          {
            object_value: 'Venture capital fund',
          },
          {
            object_value: 'Other private fund',
          },
        ],
      },
    ],
    description:
      'Investment type associated with a fund, such as hedge or private equity fund.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'c67d1a01-f8ba-43d9-acfa-91b84d3d1d6e',
    name: 'Total Offering (USD)',
    label: 'Total offering amount for an investment fund. ',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '2b9258df-ecd1-4394-93f5-868934fd4e8a',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      'Total offering amount for an investment fund, per U.S. Securities and Exchange (SEC) filings. ',
    object_type: 'float',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '7a746742-2955-4a14-a40e-de232ced26c9',
    name: 'Associated Investment Funds',
    label: 'Fund entities associated with this investor.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '7dfe54f4-ac56-438d-97c9-df9f3630b0a9',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '2b9258df-ecd1-4394-93f5-868934fd4e8a',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'Entities for the pooled investment funds of this venture capital firm or other investor.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '6a8142a3-e66d-4198-aa4d-e8973e876833',
    name: 'Parent Investment Firm',
    label: 'Investment firm that manages an investment fund.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '2b9258df-ecd1-4394-93f5-868934fd4e8a',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '7dfe54f4-ac56-438d-97c9-df9f3630b0a9',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'Entity for the venture capital or investment firm that manages the investment fund.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '933b82c0-6ac7-446d-ad94-cee5ca44ccac',
    name: 'Total Offering Amount (USD)',
    label: 'Total amount offered for the investment fund or funding round. ',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '2b9258df-ecd1-4394-93f5-868934fd4e8a',
          },
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: 'c93f9f81-cbfa-47b0-aae9-0e10d97b53f6',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      'Total amount offered for the investment fund or funding round, per U.S. Securities and Exchange Commission (SEC) Form D filing.',
    object_type: 'integer',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '4b8d2824-8095-42c0-9502-26fa58811876',
    name: 'Date Signed',
    label: 'Date a law or mutually binding agreement was signed.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '273f6736-1c67-4b46-ab23-e9348b466b41',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description: 'Date a law or mutually binding agreement was signed.',
    object_type: 'date',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'f332c2e7-26ef-4777-8a96-be0353dd4c4f',
    name: 'Enacted by',
    label: 'Entity that enacted a law or policy.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '273f6736-1c67-4b46-ab23-e9348b466b41',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '40548ec9-55e8-4b7e-95e3-c5d9a4590235',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'The government agency, organization, country, or other entity that enacted a law or policy.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '52741a44-aecc-44a7-9681-b47f86fe9b3a',
    name: 'Date Enacted',
    label: 'Date a law or mutually binding agreement was enacted.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '273f6736-1c67-4b46-ab23-e9348b466b41',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      'Date a law or mutually binding agreement was enacted. Applies only when subject is a Legislation.',
    object_type: 'date',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'adaf84bc-35b4-41e2-a466-1157f5b932af',
    name: 'Jurisdiction',
    label:
      'Area subject to a government and set of laws, such as a country or federated state.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '273f6736-1c67-4b46-ab23-e9348b466b41',
          },
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '40548ec9-55e8-4b7e-95e3-c5d9a4590235',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'Area subject to a government and set of laws, such as a country or federated state.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'c54f1b8d-c8bb-463a-b056-fcd9d0445b4f',
    name: 'Signed by',
    label: 'Entity that signed a legal document.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '273f6736-1c67-4b46-ab23-e9348b466b41',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '40548ec9-55e8-4b7e-95e3-c5d9a4590235',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'Entity that signed a legal document or mutually-binding agreement.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'e5151506-26f3-48e9-afad-f683d3adbcfd',
    name: 'Genre',
    label: 'Genre of the book, album, game, or other creative work. ',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '163946c5-465f-47dd-8907-f8f2ca4b29da',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      'Genre of the book, album, game, or other creative work.  Should only be applied to the creative work itself, not the creator of the work or the characters in the work.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'b33ce45a-995b-4062-b9b3-5ae0df2db82f',
    name: 'Directed by (film)',
    label: 'Person or persons who directed a film.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '163946c5-465f-47dd-8907-f8f2ca4b29da',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description: 'Person or persons who directed a film.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '3bb06a8b-cc48-43e0-80fa-9bcfe3ac7fd8',
    name: 'Director of (film)',
    label: 'Film or films a person is a director of.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '163946c5-465f-47dd-8907-f8f2ca4b29da',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description: 'Film or films a person is a director of.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'dde5fe39-131d-4cf3-ad35-3638e450912c',
    name: 'Author',
    label: 'Person who wrote a book or piece of writing.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '163946c5-465f-47dd-8907-f8f2ca4b29da',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description: 'Person who wrote a book or piece of writing.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '79beaaba-8a43-428a-aafc-b803fdbacc37',
    name: 'Author of',
    label: 'A book or piece of writing this person is the author of',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '163946c5-465f-47dd-8907-f8f2ca4b29da',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description: 'A book or piece of writing this person is the author of',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '9e1b9d58-6d7f-44a1-8eea-ba807d783ffe',
    name: 'Published Date',
    label: 'Date a work, such as a book or game, was first published.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '163946c5-465f-47dd-8907-f8f2ca4b29da',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      'Date a work, such as a book or game, was first published. Dates for subsequent editions of a work should not be included here.',
    object_type: 'date',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '504381f2-1738-49a2-9f4c-4530e0833e98',
    name: 'Publisher',
    label:
      'Organization or person that published a work, such as a book, periodical, or game.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '163946c5-465f-47dd-8907-f8f2ca4b29da',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'Organization or person that published a work, such as a book, periodical, or game. Should only apply to the work itself, not the fictional characters featured in the work.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'f704c995-f4cc-4e93-8b2c-2d0bade3633a',
    name: 'Creator',
    label:
      'Person who created a work (such as a painting or sculpture) where no other specific field (such as Author) is applicable.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '163946c5-465f-47dd-8907-f8f2ca4b29da',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      "Person who created a work, where no other specific field (such as Author) is applicable. For founders of companies or organizations, 'Founder' should be used instead.",
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'ac6dcb77-9b6a-4894-8f4e-83f682b2391a',
    name: 'Creator of',
    label: 'Works created by a person, such as paintings or sculptures.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '163946c5-465f-47dd-8907-f8f2ca4b29da',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      "Works created by a person, such as paintings or sculptures.  For companies and organization founded by this person, 'Founder of' should be used instead.",
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '8b877783-238b-4804-bb55-1b23e182b129',
    name: 'Music by',
    label:
      'Person who composed a piece of music for a movie, TV show, or other creative work.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '163946c5-465f-47dd-8907-f8f2ca4b29da',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'Person who composed a piece of music for a movie, TV show, or other creative work.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '098ef47e-6cff-47c3-a0fe-071dd4cf19da',
    name: 'Editor of',
    label: 'Films or books edited by this person.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '163946c5-465f-47dd-8907-f8f2ca4b29da',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description: 'Films, books, or other works edited by this person.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'ff8c60ee-0b3b-43e5-a6ff-69917f9aa16d',
    name: 'Cinematographer of',
    label: 'Person who was the cinematographer of a film.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '163946c5-465f-47dd-8907-f8f2ca4b29da',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'Person who was the cinematographer of a film, overseeing the photography and camerawork.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '72156ca4-02ac-4463-8b67-7e0090a378b1',
    name: 'Edited by',
    label: 'Person who edited a film or book.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '163946c5-465f-47dd-8907-f8f2ca4b29da',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description: 'Person who edited a film, book, or other work.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '07e1e959-7113-4f36-8130-c0900d4dc49a',
    name: 'Screenplay by',
    label: 'Person(s) who wrote the screenplay for a film.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '163946c5-465f-47dd-8907-f8f2ca4b29da',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'Person(s) who wrote the screenplay for a film.  Screenplay by credit goes to writers who physically wrote drafts or scenes that are included in the final version of the movie.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '3639ab9f-ab38-4606-944a-0ab4b743bdb0',
    name: 'Lyrics by',
    label: 'Person who wrote the lyrics for a piece of music.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '163946c5-465f-47dd-8907-f8f2ca4b29da',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'Person who wrote the lyrics for a piece of music, for a song, musical, or other creative work.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'b8d9e078-5c01-43b9-b601-c91b441e8421',
    name: 'Strategic Partnerships',
    label: 'Strategic partnerships an organization has entered into.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '104ac3a1-bf25-49be-9f0a-1b46104e06eb',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'Strategic partnerships an organization has entered into, per press release, blog, or other source owned or controlled by one or both of the companies in the partnership.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'b714a484-704d-4dc7-a71f-859c6583326e',
    name: 'Partner Organizations',
    label: 'Companies that are forming a strategic partnership.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '104ac3a1-bf25-49be-9f0a-1b46104e06eb',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'Companies that are forming a strategic partnership, per press release, blog, or other source owned or controlled by one or both of the companies in the partnership.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '201bf70d-b693-48f5-934b-5431262d153b',
    name: 'Spun Out From',
    label:
      'Company that spun out this company, per regulatory documents or a source owned or controlled by the entity.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'Company that spun out this company, per regulatory documents or a source owned or controlled by the entity. A spinout (not to be confused with a subsidiary) is a corporate action resulting in a new business spun out from the existing company with its own operations independent of the parent company.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '2664d9db-5b78-43e8-8104-9803ad4b8b82',
    name: 'Spinout',
    label:
      'Different entities spunout from the this entity, per regulatory documents or a source owned or controlled by the entity.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'Different entities spunout from the this entity, per regulatory documents or a source owned or controlled by the entity.  A spinout (not to be confused with a subsidiary) is a corporate action resulting in a new business spun out from the existing company with its own operations independent of the parent company. ',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '9aaba6ce-31a5-4bc0-8f26-390d354e96cd',
    name: 'Patent Number',
    label:
      'Number identifier that is assigned to a patent application when it is published.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '6b3b4f73-1548-4a54-96c7-f722c544df48',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      'The Patent Number is the number identifier that is assigned to a patent application when it is published by the issuing patent office.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '6fe6e555-ee51-4a28-aae4-1ab84fdf291e',
    name: 'Date Filed',
    label: 'Filing date for a patent application.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '6b3b4f73-1548-4a54-96c7-f722c544df48',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      "Date Filed is the filing date for a patent application, as assigned by the issuing patent office. The Date Filed can be found on the line of a patent document labeled 'Filed.'",
    object_type: 'date',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'ecdb4b42-e12a-4084-8503-b1aeda5310ee',
    name: 'Date of Patent',
    label: 'Date patent was granted.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '6b3b4f73-1548-4a54-96c7-f722c544df48',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      "Date of Patent is the official date for a patent granted, as assigned by the issuing patent office. Date of Patent can be located on the line at the top of a patent document labeled 'Date of Patent.'",
    object_type: 'date',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'b09db03a-29d4-42c3-a94d-76c6c7d32c58',
    name: 'Patent Application Number',
    label:
      'Patent application identification number assigned to a patent by the United States Patent and Trademark Office.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '6b3b4f73-1548-4a54-96c7-f722c544df48',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      'The Patent Application Number is the identification number for a patent application assigned to a patent by the United States Patent and Trademark Office. The patent application number should have commas, slashes, and other punctuation removed. Ie. 13/791,909 → Patent Application Number → 13791909',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'ec741e8c-5589-4a64-b9e1-4fd41fd2b05f',
    name: 'Patent Jurisdiction',
    label: 'Patent organization granting a given patent',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '6b3b4f73-1548-4a54-96c7-f722c544df48',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      'Patent Jurisdiction is the patent organization granting a given patent, for example, the United States Patent and Trademark Office.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '1af80437-a7ff-4d3c-8a1f-5a599554ebad',
    name: 'Patent Primary Examiner',
    label:
      'Person charged as the primary examiner of a patent during application.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '6b3b4f73-1548-4a54-96c7-f722c544df48',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      "Patent Primary Examiner is the person charged as the primary examiner of a patent during application. The Primary Patent Examiner can be found on the line of a patent document labeled 'Primary Examiner.'",
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '29d38730-85bd-4bb6-a5fa-406a74436c72',
    name: 'Current Assignee',
    label: 'Current assignee of a patent or another entity.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '6b3b4f73-1548-4a54-96c7-f722c544df48',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
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
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      "Current Assignee is the entity that is the current assignee of a patent or another entity. The Current Assignee can be found on the line of a patent document labeled 'Assignee.'",
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '3de5fb73-a9ee-43c8-a9a7-c9a839a62b6b',
    name: 'Patent Applicant',
    label: 'Applicant for a particular patent',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '6b3b4f73-1548-4a54-96c7-f722c544df48',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
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
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      "Patent Applicant is the entity that is the applicant for a particular patent. The Patent Applicant can be found on the line of a patent document labeled 'Applicant.'",
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'e7c03af8-b5a6-4b38-a5d4-cb766a66efeb',
    name: 'Patent Citations',
    label: 'Patents cited by a particular patent',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '6b3b4f73-1548-4a54-96c7-f722c544df48',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '6b3b4f73-1548-4a54-96c7-f722c544df48',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      "Patent Citations refers to the entities for other patents that are cited by a particular patent. Citations for a particular patent can be found in the full text of that patent's document.",
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '3b4f60d0-0fea-49e1-8c8b-b9676f870c4a',
    name: 'Patent Citations Received',
    label: 'Patents that have cited this patent',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '6b3b4f73-1548-4a54-96c7-f722c544df48',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '6b3b4f73-1548-4a54-96c7-f722c544df48',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      "Patent Citations Received refers to the entities for other patents that have cited this patent. Citation received for a particular patent can be found in the full text of the citing patent's document.",
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '4a1f9158-90b7-47d3-a570-d264a2ac3c71',
    name: 'Patent Publication Date',
    label: 'Date a patent application was published.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '6b3b4f73-1548-4a54-96c7-f722c544df48',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      'Date a patent application was published and available to the public.',
    object_type: 'date',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'dee570dd-8b91-4251-9b9e-55a9fcfba709',
    name: 'Patent Status',
    label: 'Current status of a patent.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '6b3b4f73-1548-4a54-96c7-f722c544df48',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'enum',
        target: PredicateConstraintTarget.Object,
        elements: [
          {
            object_value: 'Active',
          },
          {
            object_value: 'Pending',
          },
        ],
      },
    ],
    description: "Current status of a patent, either 'Active' or 'Pending'",
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '1f50b09a-91ad-46d3-91e2-03c551af63f1',
    name: 'Patent Publication Code',
    label: 'Code/number given to published (but not granted) patents.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '6b3b4f73-1548-4a54-96c7-f722c544df48',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description: 'Code/number given to published (but not granted) patents.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'e0c5455e-a7f6-483d-8cf0-6cd02404efd8',
    name: 'Occupation',
    label: 'Job or profession of a person, both past and present.',
    description:
      'Job or profession of a person, both past and present.  Occupation (such as Computer scientist) should not be confused with the related field of study (such as Computer science).',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '2a57becd-f9aa-4301-8818-e5c7efa48f9d',
    name: 'Citizenship',
    label:
      'Nations where a person is recognized as being a legal member with active political rights.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: 'ca399d7a-e559-4062-9570-1b69c667ca10',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'Nations where a person is recognized as being a legal member with active political rights.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '9fd5eff2-eaef-4fe2-bfdc-b0fbaa8a4406',
    name: 'Birthplace',
    label: 'Location where a person was born.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '40548ec9-55e8-4b7e-95e3-c5d9a4590235',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'Location where a person was born, verified by a source owned or controlled by the entity, such as a LinkedIn profile or an official social media account.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '5487ef83-b759-4188-a424-4ae61d5e7420',
    name: 'Educated at',
    label: 'Educational institutions that a person attended.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '193af481-d970-4a28-b2aa-1d39f6f42c03',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'Educational institutions that a person attended, at all levels of education.  The person may or may not have received a degree, graduation, or completed the program.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'd0e2e7d5-96f4-4338-b81a-5a6eb7dfccbc',
    name: 'Place of Death',
    label: 'Location where a person died.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '40548ec9-55e8-4b7e-95e3-c5d9a4590235',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      "Date when a person died, verified by a reputable news source or a source owned or controlled by the entity's family, such as a LinkedIn profile or an official social media account.",
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '62264cc6-3c5a-4c3c-a405-4e1c5b4748dd',
    name: 'Nationality',
    label:
      'Legal identification of a person in international law of belonging to a particular nation.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: 'ca399d7a-e559-4062-9570-1b69c667ca10',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'Legal identification of a person in international law of belonging to a particular nation, by birth or naturalization.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'cd6898a9-a00b-4fb4-9997-a1553bcedbc4',
    name: 'Married Name',
    label: "Person's name after they are married.",
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0c4e6054-5fd8-48a8-817c-f6611278f755',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      "Person's name after they are married, not to be confused with the name of the person's spouse.",
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '59eae399-be09-4be5-a2c9-fe0a6fc36b70',
    name: 'Country',
    label:
      'Country associated with this person, company, organization, or port.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: 'ca399d7a-e559-4062-9570-1b69c667ca10',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'Country associated with this person, company, organization, or port. A country is a distinct region in political geography, and may be a sovereign state or part of a bigger state.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'd54b15ac-e837-4f5b-a235-5f334bba5681',
    name: 'Dribbble URL',
    label: 'The Dribbble URL associated with this entity.',
    constraints: [
      {
        type: 'predicate_object',
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
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      'The Dribbble profile owned and managed by an individual person or organization.',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: '61acf0c9-afdf-42cd-96df-d1fa814f85dd',
    name: 'Vimeo Channel URL',
    label: 'The Vimeo channel URL associated with this entity.',
    constraints: [
      {
        type: 'predicate_object',
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
        target: PredicateConstraintTarget.Subject,
      },
    ],
    description:
      'The Vimeo channel URL owned and managed by an individual person or organization.',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: '617829b2-4858-4977-96a5-84764d29747e',
    name: 'CAS Registry Number',
    label: 'CAS Registry chemical substance number.',
    description:
      'CAS Registry Number is a unique numeric identifier assigned by CAS, a division of the American Chemical Society that owns the CAS Registry. The CAS Registry is a collection of chemical substance information. A CAS Registry Number can contain up to 10 digits, divided by hyphens into three parts. CAS Registry Number will only be applicable to entities that are chemical elements or compounds. Entities that are named after a chemical compound should not have CAS Registry Number data. The CAS Registry Number for a chemical entity can be obtained by using the National Library of Medicine PubChem database, CAS Common Chemistry, https://commonchemistry.cas.org/ or other public government sources.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: '5fa8193c-0b02-4484-9403-093281872706',
    name: 'Start Date',
    label: 'Date that an event or other entity starts.',
    description:
      'Date that an event or other entity starts, per a source owned or controlled by the entity such as an official blog or a press release.',
    object_type: 'date',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'ac4a3a78-affe-42f1-a8a7-d9096d1a0d2a',
    name: 'Acquisitions',
    label: 'Acquisitions made by the company.',
    inverse_id: 'f8337728-2cce-42b1-8fa0-3c4ac5d38eb7',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '6d29d6b2-0256-4ae0-9cc4-bdc556ac7d8d',
          },
        ],
        target: PredicateConstraintTarget.Object,
      },
    ],
    description:
      'Acquisitions made by the company, per a source owned or controlled by the entity such as an official blog or a press release.',
    object_type: 'entity',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: 'b3514f9f-180d-47ff-9b3d-d360d0ea56ba',
    name: 'Legislation Status',
    label: 'Status of a bill in the legislative process.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '273f6736-1c67-4b46-ab23-e9348b466b41',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'enum',
        target: PredicateConstraintTarget.Object,
        elements: [
          {
            object_value: 'Enacted',
          },
          {
            object_value: 'Rejected',
          },
          {
            object_value: 'Pending',
          },
          {
            object_value: 'Repealed',
          },
        ],
      },
    ],
    description:
      'Status of a bill in the legislative process: enacted, rejected, pending, appealed.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Recommended,
  },
  {
    id: '0888fe4d-1497-46a2-85f8-9f83d0860e84',
    name: 'Indeed ID',
    label: 'The official Indeed URL associated with this entity.',
    constraints: [
      {
        type: 'format',
        regex_pattern: '^[0-9A-Za-z]+$',
      },
      {
        type: 'unique_object',
      },
    ],
    description: 'The official Indeed URL associated with this entity.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: 'ad89742f-92c0-43de-b762-2a582dbd1e07',
    name: 'Linktree ID',
    label: 'The Linktree profile associated and owned by an entity.',
    constraints: [
      {
        type: 'format',
        regex_pattern: '^[0-9A-Za-z]+$',
      },
      {
        type: 'unique_object',
      },
    ],
    description: 'The Linktree profile associated and owned by an entity.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: 'f6a8cb8f-f2b1-40fd-ba03-a931eb61de95',
    name: 'Liquipedia ID',
    label: 'The ID for a Liquipedia page.',
    constraints: [
      {
        type: 'format',
        regex_pattern: '^[0-9A-Za-z]+$',
      },
      {
        type: 'unique_object',
      },
    ],
    description: 'The ID for a Liquipedia page.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: '8ef05ec5-dff7-4f9a-b004-b1eb4905dc8c',
    name: 'Twitch Channel ID',
    label: 'The official Twitch channel ID associated with this entity.',
    constraints: [
      {
        type: 'format',
        regex_pattern: '^[0-9A-Za-z]+$',
      },
      {
        type: 'unique_object',
      },
    ],
    description: 'The official Twitch channel ID associated with this entity.',
    object_type: 'string',
    citation_requirement: CitationRequirement.Optional,
  },
  {
    id: '49ca79c4-20fb-4451-a7c2-024eb0be515b',
    name: 'Michelin Guide URL',
    label:
      'The webpage attributed to a particular restaurant in the Michelin Guide.',
    constraints: [
      {
        type: 'predicate_object',
        rules: [
          {
            predicate_id: '94a8d215-ce32-4379-b18e-2aebf0794882',
            object_entity_id: '0a9fcc89-e14b-47af-85c3-8465ca607c29',
          },
        ],
        target: PredicateConstraintTarget.Subject,
      },
      {
        type: 'format',
        regex_pattern:
          '^https:\\/\\/guide\\.michelin\\.com\\/\\w{2}(?:\\/\\w{2})?\\/([^\\s]+)',
      },
    ],
    description:
      'The webpage attributed to a particular restaurant in the Michelin Guide.',
    object_type: 'anyURI',
    citation_requirement: CitationRequirement.Optional,
  },
] as const;

export default json;
