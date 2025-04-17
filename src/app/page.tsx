'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-16 text-center bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-neutral-900">
      <Image
        src="/afcsc-logo.png"
        alt="AFCSC Logo"
        width={120}
        height={120}
        className="mb-6"
      />

      <h1 className="text-2xl sm:text-4xl font-semibold leading-tight mb-3 uppercase tracking-wide">
        Armed Forces Command and Staff College
      </h1>
      <h2 className="text-lg sm:text-xl font-medium text-gray-700 dark:text-gray-300 mb-10 uppercase tracking-wider">
        Nigeria
      </h2>

      <p className="text-base sm:text-lg max-w-xl text-gray-600 dark:text-gray-400 mb-10">
        Empowering student officers, instructors, and administrators with secure, modern learning tools.
      </p>

      <Link
        href="/auth"
        className="bg-black text-white hover:bg-neutral-800 transition px-6 py-3 rounded-full text-sm sm:text-base font-medium"
      >
        Get Started
      </Link>

      <footer className="mt-20 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} AFCSC Nigeria. All rights reserved.
      </footer>
    </main>
  );
}