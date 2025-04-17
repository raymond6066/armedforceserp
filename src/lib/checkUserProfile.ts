import { fetchUserAttributes } from 'aws-amplify/auth';

/**
 * Temporary mock to simulate profile lookup.
 * Replace this with a real backend query later.
 */
export async function checkUserProfileExists(): Promise<boolean> {
  try {
    const attributes = await fetchUserAttributes();
    const userEmail = attributes?.email;

    // Simulate backend check
    const knownUsers = ['admin@example.com', 'student1@college.edu'];
    return knownUsers.includes(userEmail ?? '');
  } catch (err) {
    console.error('checkUserProfile error:', err);
    return false;
  }
}