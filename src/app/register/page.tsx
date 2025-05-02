// src/app/register/page.tsx
'use client';

import '@/lib/amplifyConfig';                        // boots Amplify (ssr:true)
import { useRouter } from 'next/navigation';
import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import '@aws-amplify/ui-react/styles.css';

import { getCurrentUser, fetchUserAttributes } from '@aws-amplify/auth';
import { uploadData } from '@aws-amplify/storage';
import { generateClient } from '@aws-amplify/api';
import type { GraphQLResult } from '@aws-amplify/api-graphql';

import {
  GetUserProfileQuery,
  CreateUserProfileInput,
  CreateUserProfileMutation,
  UserProfileRole,
} from '@/graphql/API';
import { getUserProfile } from '@/graphql/queries';
import { createUserProfile } from '@/graphql/mutations';

const client = generateClient();

export default function RegisterPage() {
  const router = useRouter();

  // ─── Auth & Profile-check flags ─────────────────────────
  const [authUser, setAuthUser] = useState<{ username: string } | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [loadingProfile, setLoadingProfile] = useState(true);

  // ─── Form state ─────────────────────────────────────────
  const [fullName,   setFullName]   = useState('');
  const [rank,       setRank]       = useState('');
  const [role,       setRole]       = useState<UserProfileRole>(UserProfileRole.STUDENT);
  const [course,     setCourse]     = useState('');
  const [phone,      setPhone]      = useState('');
  const [nextKin,    setNextKin]    = useState('');
  const [passportUrl,setPassportUrl]= useState('');
  const [medicalUrl, setMedicalUrl] = useState('');
  const [error,      setError]      = useState('');
  const [submitting, setSubmitting] = useState(false);

  // 1️⃣  Ensure user is signed in
  useEffect(() => {
    getCurrentUser()
      .then(u => setAuthUser({ username: u.username }))
      .catch(() => router.replace('/auth'))
      .finally(() => setLoadingAuth(false));
  }, [router]);

  // 2️⃣  Check if profile exists → redirect if it does
  useEffect(() => {
    if (!authUser) return;
    (async () => {
      try {
        const resp = (await client.graphql({
          query: getUserProfile,
          variables: { id: authUser.username },
        })) as GraphQLResult<GetUserProfileQuery>;

        if (resp.data?.getUserProfile) {
          router.replace('/dashboard');
          return;
        }
      } catch (err) {
        console.error('Error fetching profile:', err);
      } finally {
        setLoadingProfile(false);
      }
    })();
  }, [authUser, router]);

  // Show a loader until both checks finish
  if (loadingAuth || loadingProfile) {
    return <p className="text-center mt-10">Loading…</p>;
  }
  if (!authUser) {
    // user is not signed in – auth effect will have redirected them
    return null;
  }

  // ─── Utility: upload a file under `private/<prefix>/<identityId>/…` ───
  const uploadFile = async (file: File, prefix: string): Promise<string> => {
    const fileName = `${authUser.username}-${Date.now()}-${file.name}`;
    const task = uploadData({
      path: ({ identityId }) => `private/${prefix}/${identityId}/${fileName}`,
      data: file,
    });
    const res = await task.result;
    if (!res.path) throw new Error('Upload failed');
    return res.path;
  };

  // ─── Handlers for file inputs ────────────────────────────
  const handlePassportChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setError('');
    try {
      const path = await uploadFile(file, 'passports');
      setPassportUrl(path);
    } catch {
      setError('Failed to upload passport');
    }
  };
  const handleMedicalChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setError('');
    try {
      const path = await uploadFile(file, 'medical');
      setMedicalUrl(path);
    } catch {
      setError('Failed to upload medical records');
    }
  };

  // ─── Submit always CREATES (we know no profile exists) ───
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      const username = authUser.username;
      const attrs = (await fetchUserAttributes()) ?? {};
      const email = attrs['email'];
      if (!email) throw new Error('Email missing');

      const input: CreateUserProfileInput = {
        id:       username,
        fullName,
        rank,
        course,
        email,
        phone,
        nextKin,
        passportUrl,
        medicalUrl,
        role,
      };

      const resp = (await client.graphql({
        query:     createUserProfile,
        variables: { input },
      })) as GraphQLResult<CreateUserProfileMutation>;

      if (resp.errors && resp.errors.length > 0) {
        throw new Error(resp.errors[0].message);
      }

      router.push('/dashboard/${role.toLowerCase()}');
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : JSON.stringify(err);
      console.error('Registration error:', msg);
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  // ─── JSX ────────────────────────────────────────────────
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 dark:bg-neutral-900 py-16 px-4">
      <h1 className="text-3xl font-bold uppercase text-[#C8102E] mb-6">
        Complete Your Registration
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-lg space-y-4"
      >
        {/* Name & Rank */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            className="border p-2 rounded w-full dark:bg-neutral-700"
            placeholder="Full Name"
            required
            value={fullName}
            onChange={e => setFullName(e.target.value)}
          />
          <input
            className="border p-2 rounded w-full dark:bg-neutral-700"
            placeholder="Rank"
            required
            value={rank}
            onChange={e => setRank(e.target.value)}
          />
        </div>

        {/* Role & Course */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <select
            className="border p-2 rounded w-full dark:bg-neutral-700"
            value={role}
            onChange={e => setRole(e.target.value as UserProfileRole)}
          >
            <option value={UserProfileRole.STUDENT}>Student Officer</option>
            <option value={UserProfileRole.INSTRUCTOR}>Instructor</option>
            <option value={UserProfileRole.ADMIN}>Admin</option>
          </select>
          <input
            className="border p-2 rounded w-full dark:bg-neutral-700"
            placeholder="Course"
            required
            value={course}
            onChange={e => setCourse(e.target.value)}
          />
        </div>

        {/* Contact & Next of Kin */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="tel"
            className="border p-2 rounded w-full dark:bg-neutral-700"
            placeholder="Phone Number"
            required
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          <input
            className="border p-2 rounded w-full dark:bg-neutral-700"
            placeholder="Next of Kin"
            required
            value={nextKin}
            onChange={e => setNextKin(e.target.value)}
          />
        </div>

        {/* File Uploads */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Passport Photo</label>
            <input type="file" accept="image/*" onChange={handlePassportChange} />
          </div>
          <div>
            <label className="block text-sm font-medium">Medical Records</label>
            <input type="file" accept="application/pdf,image/*" onChange={handleMedicalChange} />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-black text-white py-3 rounded-full font-medium hover:bg-neutral-800 transition disabled:opacity-50"
        >
          {submitting ? 'Submitting…' : 'Submit Profile'}
        </button>

        {error && <p className="text-red-500 text-center">{error}</p>}
      </form>
    </div>
  );
}