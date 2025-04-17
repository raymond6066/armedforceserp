// src/lib/amplifyClient.ts
import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: 'eu-central-1_48csj3dG6',
      userPoolClientId: '5jiustr6or5ef4ckmrrladeh1i',
      identityPoolId: 'eu-central-1:aa8d4a64-388a-4155-b0e3-d3398dedf1a5',
    },
  },
  API: {
    GraphQL: {
      endpoint: 'https://e2rymxskgne43aknvdrj52futi.appsync-api.eu-central-1.amazonaws.com/graphql',
      region: 'eu-central-1',
      defaultAuthMode: 'userPool', // ✅ this is enough, no need for additionalAuthModes
    },
  },
  Storage: {
    S3: {
      bucket: 'amplify-armedforceserp-ad-amplifyteamdrivebucket28-ttnejhxw4x9c',
      region: 'eu-central-1',
    },
  },
});