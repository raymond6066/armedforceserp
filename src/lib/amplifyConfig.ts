// src/lib/amplifyConfig.ts
import { Amplify } from 'aws-amplify';
import type { ResourcesConfig } from '@aws-amplify/core';
import outputs from '../../amplify_outputs.json';

// Cast your Gen 2 JSON into the ResourcesConfig interface
const config = (outputs as unknown) as ResourcesConfig;

// Configure Amplify once—ssr:true lets it run in Next.js’ server code too
Amplify.configure(config, { ssr: true });