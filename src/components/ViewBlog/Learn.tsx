'use client'

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import logo from '../../../public/Pretty-Health Website/Images/Logo.png';
import button from '../../../public/Pretty-Health Website/Images/Button.png';

const Learn = () => {
  const [visibleElements, setVisibleElements] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const cardData = [
    {
      name: 'Resource Access',
      description: 'Visitors can access a wide range of resources, including ebooks, whitepapers, reports.',
      backgroundColor: '#FFE6D4',
    },
    {
      name: 'Health Events',
      description: 'Stay updated on upcoming health events, webinars & conferences to enhance your knowledge.',
      backgroundColor: '#6867AD',
    },
    {
      name: 'Community Forum',
      description: 'Join our active community forum to discuss industry trends and collaborate with peers.',
      backgroundColor: '#B6B5FF',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleElements((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        });
      },
      {
        threshold: 0.2, // Trigger animation when 20% of the element is visible
      }
    );

    const elements = containerRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div ref={containerRef} className="py-7 px-5 md:px-20 md:py-[100px]">
      <div className="header flex gap-7 flex-col md:flex-row mb-[30px] animate-on-scroll" data-index="0">
        <div className={`image-content transform transition-all duration-700 ${
          visibleElements.includes(0) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}>
          <Image src={logo} alt="logo" width={130} height={130} />
        </div>
        <div className={`text-content transform transition-all duration-700 ${
          visibleElements.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <article className="space-y-4 mb-[20px]">
            <span className='bg-[#BDA87B] p-2 rounded-md text-[13px] font-semibold'>
              Learn, Connect and Innovate
            </span>
            <h1 className="text-3xl font-bold">Be Part of the Future Health Revolution</h1>
          </article>
          <p className="text-[13px]">
            Immerse yourself in the world of future technology. Explore our
            comprehensive resources, connect with fellow tech enthusiasts, and
            drive innovation in the industry. Join a dynamic community of
            forward-thinkers.
          </p>
        </div>
      </div>

      <div className="container flex flex-col md:flex-row gap-2 bg-white border border-black rounded-lg p-2">
        {cardData.map((card, index) => (
          <div
            key={index}
            data-index={index + 1}
            className={`card p-5 rounded-lg border border-black animate-on-scroll transform transition-all duration-700 ${
              visibleElements.includes(index + 1)
                ? 'opacity-100 scale-100 rotate-0'
                : 'opacity-0 scale-90 -rotate-3'
            }`}
            style={{ backgroundColor: card.backgroundColor }}
          >
            <div className="head flex justify-between items-start mb-[15px]">
              <h4 className="font-semibold text-[18px] text-[#331C4C]">{card.name}</h4>
              <Image src={button} alt="button" width={40} height={40} />
            </div>
            <p className="text-[13px]">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learn;
