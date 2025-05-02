// src/app/auth/page.tsx
'use client';

import '@/lib/amplifyConfig';          // ensure Amplify is bootstrapped in the browser
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import type { AuthUser } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function AuthPage() {
  const router = useRouter();
  const [signedInUser, setSignedInUser] = useState<AuthUser | null>(null);

  // once signed in, send them to the extended registration page
  useEffect(() => {
    if (signedInUser) {
      router.push('/register');
    }
  }, [signedInUser, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black">
      <Authenticator
        variation="modal"
        hideSignUp={false}
        signUpAttributes={['email']}
        components={{
          Header() {
            return (
              <div className="text-center p-4">
                <img
                  src="/afcsc-logo.png"
                  alt="AFCSC Logo"
                  className="mx-auto mb-4 h-20"
                />
                <h1 className="text-xl font-bold uppercase text-[#C8102E]">
                  AFCSC Nigeria
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Secure Login Portal
                </p>
              </div>
            );
          },
        }}
      >
        {({ user }) => {
          if (user && !signedInUser) {
            setSignedInUser(user);
          }

          return (
            <p className="text-center text-gray-400">
              {user ? 'Redirecting to registration…' : 'Loading…'}
            </p>
          );
        }}
      </Authenticator>
    </div>
  );
}