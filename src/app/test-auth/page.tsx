'use client';

import { getCurrentUser } from 'aws-amplify/auth';
import { useEffect, useState } from 'react';

export default function TestAuthPage() {
  const [message, setMessage] = useState('Checking...');

  useEffect(() => {
    async function checkAuth() {
      try {
        const user = await getCurrentUser();
        console.log('✅ User fetched:', user);
        setMessage(`Signed in as ${user.username}`);
      } catch (err) {
        console.error('❌ Auth not configured or no user:', err);
        setMessage('Not signed in or Auth not configured');
      }
    }

    checkAuth();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center text-center">
      <p className="text-lg">{message}</p>
    </div>
  );
}