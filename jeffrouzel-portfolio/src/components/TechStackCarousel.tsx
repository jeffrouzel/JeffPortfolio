'use client';
import { useEffect } from 'react';
import ScrollCarousel from 'scroll-carousel';
import Image from 'next/image';
import techStack from '@/data/techstack';

export default function TechStackCarousel() {
  useEffect(() => {
    new ScrollCarousel('.tech-carousel', {
      autoplay: true,
      autoplaySpeed: 2,
      smartSpeed: true,
      disableScroll: true,
      reverseScroll: false,
    });
  }, []);

  return (
    <div className="w-full overflow-hidden">
      {/* Force horizontal layout */}
      <div className="tech-carousel scroll-carousel flex flex-row gap-4 !whitespace-nowrap">
        {techStack.map(({ name, image }, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white rounded-xl px-4 py-3 shadow text-center text-sm font-medium text-gray-800 w-28 h-28 shrink-0"
          >
            <Image
              src={image}
              alt={name}
              width={40}
              height={40}
              className="mb-2 object-contain"
            />
            <span className="text-xs">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
