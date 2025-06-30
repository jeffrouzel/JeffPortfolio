'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: "SeaXChange",
    description: "A blockchain-driven app for tuna supply chain management",
    image: "/seaxchange.png",
    link: "https://sea-x-change-web-yo45.vercel.app/",
    isExternal: true,
  },
  {
    title: "Boo,Rats!",
    shortDescription: "A fast-paced 3D platformer where players race as rats...",
    fullDescription: `a fast-paced 3D platformer where players race as rats through obstacle-filled courses to reach the cheese finish line. 
    With shortcuts, power-ups, and checkpoints, each level becomes a dynamic puzzle of speed and strategy. 
    The game also features local split-screen multiplayer allowing competitive gameplay.`,
    image: "/boorats.png",
    link: "/projects/boorats",
    isExternal: false,
  },
  {
    title: "PawPal",
    shortDescription: "A veterinary mobile app that helps pet owners in Iloilo...",
    fullDescription: `PawPal is a veterinary mobile app designed to help pet owners quickly find veterinary clinics in Iloilo. 
    It provides contact information, clinic locations, and easy access to directions for pet owners in need.`,
    image: "/pawpal.png",
    link: "/projects/pawpal",
    isExternal: false,
  },
];

export default function ProjectsPage() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-center mb-12 text-purple-600">My Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
            <Image src={project.image} alt={project.title} width={600} height={400} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 text-sm mb-4 whitespace-pre-line">
                {project.isExternal
                  ? project.description
                  : expandedIndex === index
                    ? `${project.fullDescription}`
                    : project.shortDescription}
              </p>

              {project.isExternal ? (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 font-medium hover:underline"
                >
                  View Project →
                </Link>
              ) : (
                <div className="space-y-2">
                  <button
                    onClick={() => toggleExpand(index)}
                    className="text-purple-600 font-medium hover:underline focus:outline-none"
                  >
                    {expandedIndex === index ? 'Show Less ↑' : 'Read More →'}
                  </button>

                  {expandedIndex === index && (
                    <div>
                      <Link
                        href={project.link}
                        className="text-sm text-purple-500 hover:underline block mt-2"
                      >
                        See project desription →
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
