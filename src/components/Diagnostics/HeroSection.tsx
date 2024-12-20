'use client'
import Image from 'next/image';
import FindLocation from '../general/FindLocation';
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(true); // Change from false to true
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Desktop and Tablet Version */}
      <div
        ref={heroRef}
        className={`
          hidden md:flex flex-col md:flex-row 
          bg-[url('/Pretty-Health%20Website/Images/Group%2020652.png')] 
          bg-cover bg-center pt-20
          transition-all duration-1000 ease-in-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <div className="basis-full md:basis-3/5 flex flex-col justify-center">
          <div className="px-6 md:px-12 lg:px-16 xl:px-20 space-y-4 mb-12">
            <div>
              <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">Get Educated To</h1>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light">Restore Your Health</h1>
            </div>
            <p className="text-base md:text-lg">
              Embrace a world of comprehensive healthcare where your well-being takes center stage. At Meca, we&apos;re dedicated to providing you with personalized and compassionate medical services.
            </p>
          </div>
          <FindLocation />
        </div>
        <div className="basis-full md:basis-2/5 flex justify-center items-end">
          <Image
            src="/Pretty-Health Website/Images/Image 17 (1).png"
            alt="Cardiology"
            width={500}
            height={500}
            className="w-full w-h-[120%] h-full max-w-[400px]"
          />
        </div>
      </div>

      {/* Mobile Version */}
      <div 
        ref={heroRef}
        className={`
          flex md:hidden 
          bg-[url('/Pretty-Health%20Website/Images/Group%2020652.png')] 
          bg-cover bg-center py-20
          transition-all duration-1000 ease-in-out
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <div className="text-center px-6 space-y-4">
          <h1 className="font-bold text-3xl">Get Educated TO</h1>
          <h1 className="text-3xl font-light">Restore Your Health</h1>
          <p className="text-base text-white">
            Embrace a world of comprehensive healthcare where your well-being takes center stage. At Meca, we&apos;re dedicated to providing you with personalized and compassionate medical services.
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;