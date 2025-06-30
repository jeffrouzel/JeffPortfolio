// src/components/Navbar.jsx
'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-8 py-2 shadow bg-white">
      <h1 className="text-xl font-bold text-purple-700 mx-3">Personal Portfolio</h1>
      <nav className="hidden md:flex gap-12 text-gray-600 font-medium">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Portfolio</Link>
      </nav>
    </header>
  );
}
