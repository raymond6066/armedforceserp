// src/theme/authenticatorTheme.ts
import { Theme } from '@aws-amplify/ui-react';

export const authenticatorTheme: Theme = {
  name: 'afcsc-theme',
  tokens: {
    colors: {
      background: {
        primary: {
          value: '#ffffff', // light background
        },
      },
      font: {
        primary: {
          value: '#1a1a1a', // dark text
        },
      },
      brand: {
        primary: {
          '10': '#FFEBEB',
          '80': '#C8102E', // red
          '90': '#91071A',
          '100': '#6D0015',
        },
        secondary: {
          '80': '#00205B', // navy
          '100': '#001d4a',
        },
      },
    },
    // 🚫 Removed invalid components.router.borderRadius
  },
};