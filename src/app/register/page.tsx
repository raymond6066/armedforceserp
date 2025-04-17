'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import FileUploader from '@/components/FileUploader';

export default function RegisterPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState('');
  const [rank, setRank] = useState('');
  const [role, setRole] = useState<'student' | 'instructor' | 'admin'>('student');
  const [course, setCourse] = useState('');
  const [phone, setPhone] = useState('');
  const [passportUrl, setPassportUrl] = useState('');
  const [medicalUrl, setMedicalUrl] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    setError('');
    setSubmitting(true);

    try {
      // Replace this with actual API call to save the profile to backend
      console.log({
        fullName,
        rank,
        role,
        course,
        phone,
        passportUrl,
        medicalUrl,
      });

      router.push('/dashboard');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError('Failed to save profile');
    }

    setSubmitting(false);
  };

  return (
    <div className="max-w-lg mx-auto py-12 space-y-6">
      <h1 className="text-2xl font-semibold">Complete Your Profile</h1>

      <input
        className="border w-full p-2 rounded"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <input
        className="border w-full p-2 rounded"
        placeholder="Rank"
        value={rank}
        onChange={(e) => setRank(e.target.value)}
      />

      <select
        className="border w-full p-2 rounded"
        value={role}
        onChange={(e) => setRole(e.target.value as typeof role)}
      >
        <option value="student">Student</option>
        <option value="instructor">Instructor</option>
        <option value="admin">Admin</option>
      </select>

      <input
        className="border w-full p-2 rounded"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <input
        className="border w-full p-2 rounded"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <FileUploader
        label="Upload Passport Photo"
        folderPrefix="passport"
        onUploadSuccess={setPassportUrl}
        accept="image/*"
      />

      <FileUploader
        label="Upload Medical Records"
        folderPrefix="medical"
        onUploadSuccess={setMedicalUrl}
        accept="application/pdf"
      />

      <button
        className="bg-black text-white w-full py-2 rounded disabled:opacity-50"
        onClick={handleSubmit}
        disabled={submitting}
      >
        Submit Profile
      </button>

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}