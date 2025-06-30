// src/components/Hero.jsx
'use client';
import Image from 'next/image';
import { FaLinkedin, FaGithub} from 'react-icons/fa';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-8">
      
      {/* Description */}
      <div className="max-w-xl ml-28">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">
          Hi, I'm <span className="text-purple-600">Jeff Rouzel Bat-og</span>
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Computer Science Graduate</h2>
        <p className="text-gray-600 mb-6">
          As a Computer Science graduate, I am enthusiastic about delving into 
          the world of technology and eager to learn and grow in the field. I 
          bring a strong desire to develop my skills and contribute meaningfully 
          to projects. I approach challenges with a positive attitude and a 
          willingness to put in the effort needed to overcome obstacles.
        </p>
        <div className="flex gap-4 mb-6">
          <Link href="/projects">
            <button className="border border-purple-600 text-purple-600 px-6 py-2 rounded-full">See Projects</button>
          </Link>
        </div>

        {/* LinkedIn and Github Icon Links */}
        <div className="flex gap-4 text-purple-600 text-5xl">
          <a href="https://www.linkedin.com/in/jeff-rouzel-bat-og-b866032b1" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://www.github.com/jeffrouzel" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        </div>
      </div>

      {/* Personal Picture */}
      <div className="mt-10 md:mt-0 mr-28 ">
        <Image src="/profile.png" alt="Profile" width={450} height={400} className="rounded-full" />
      </div>
    </section>
  );
}
