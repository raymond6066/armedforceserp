// src/lib/amplifyConfig.ts
import { Amplify } from 'aws-amplify';
// This is the interface for v6 resources:
import type { ResourcesConfig } from '@aws-amplify/core';
import outputs from '../amplify_outputs.json';

// Cast your Gen 2 outputs JSON into ResourcesConfig:
const config = (outputs as unknown) as ResourcesConfig;

// One‑and‑only call to configure Amplify (ssr: true if you use Next.js):
Amplify.configure(config, { ssr: true });