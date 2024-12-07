'use client'

import React, { useEffect, useRef, useState } from 'react';

const MainContent = () => {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleSections((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        });
      },
      { threshold: 0.2 } // Trigger animation when 20% of the section is visible
    );

    const sections = containerRef.current?.querySelectorAll('.section');
    sections?.forEach((section) => observer.observe(section));

    return () => {
      sections?.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="lg:w-[60%] mx-auto py-[30px] space-y-4"
    >
      {/* Section: Introduction */}
      <div
        data-index={0}
        className={`section space-y-4 md:py-[20px] px-[15px] lg:border-t border-blue-600 transform transition-all duration-1000 ease-in-out ${
          visibleSections.includes(0)
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >
        <h3 className="font-bold text-xl">Introduction</h3>
        <p>
          Artificial Intelligence (AI) has emerged as a transformative force in
          the healthcare industry, reshaping patient care, diagnostics, and
          research. In this blog post, we explore the profound impact of AI in
          healthcare, from revolutionizing diagnostic accuracy to enhancing
          patient outcomes.
        </p>
      </div>

      {/* Section: Artificial Intelligence */}
      <div
        data-index={1}
        className={`section space-y-4 md:py-[20px] px-[15px] lg:border-t border-blue-600 transform transition-all duration-1000 ease-in-out ${
          visibleSections.includes(1)
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >
        <h3 className="font-bold text-xl">Artificial Intelligence (AI)</h3>
        <p>
          Artificial Intelligence (AI) has permeated virtually every aspect of
          our lives, and healthcare is no exception. The integration of AI in
          healthcare is ushering in a new era of medical practice, where
          machines complement the capabilities of healthcare professionals,
          ultimately improving patient outcomes and the efficiency of the
          healthcare system.
        </p>
        <p>
          In this blog post, we will delve into the diverse applications of AI
          in healthcare, from diagnostic imaging to personalized treatment
          plans, and address the ethical considerations surrounding this
          revolutionary technology.
        </p>
        <p>
          Artificial Intelligence (AI) has permeated virtually every aspect of
          our lives, and healthcare is no exception. The integration of AI in
          healthcare is ushering in a new era of medical practice, where
          machines complement the capabilities of healthcare professionals,
          ultimately improving patient outcomes and the efficiency of the
          healthcare system.
        </p>
      </div>

      {/* Section: Predictive Analytics */}
      <div
        data-index={2}
        className={`section space-y-3 md:py-[20px] px-[15px] lg:border-t border-blue-600 transform transition-all duration-1000 ease-in-out ${
          visibleSections.includes(2)
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
        }`}
      >
        <h3 className="font-bold text-xl">
          Predictive Analytics and Disease Prevention
        </h3>
        <p>
          One of the most prominent applications of AI in healthcare is in
          diagnostic imaging. AI algorithms have demonstrated remarkable
          proficiency in interpreting medical images such as X-rays, MRIs, and
          CT scans. They can identify anomalies and deviations that might be
          overlooked by the human eye.
        </p>
        <p>
          This is particularly valuable in early disease detection. For
          instance, AI can aid radiologists in detecting minute irregularities
          in mammograms or identifying critical findings in chest X-rays,
          potentially indicative of life-threatening conditions.
        </p>
      </div>
    </div>
  );
};

export default MainContent;
