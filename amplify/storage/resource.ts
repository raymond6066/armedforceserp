// amplify/storage/resource.ts
import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'teamDrive',
  isDefault: true,                // marks this as your default bucket
  access: (allow) => ({
    // {entity_id} is immediately before the wildcard – required by Gen 2
    'private/passports/{entity_id}/*': [
      allow.entity('identity').to(['read','write','delete']),
    ],
    'private/medical/{entity_id}/*': [
      allow.entity('identity').to(['read','write','delete']),
    ],
  }),
});