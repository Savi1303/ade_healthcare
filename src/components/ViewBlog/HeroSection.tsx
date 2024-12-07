'use client'
import React,{ useRef, useState, useEffect } from 'react';

const HeroSection = () => {
 const [isVisible, setIsVisible] = useState(true);
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
      observer.unobserve(heroRef.current);
    }
  };
}, []);
  

  return (
    <div 
      ref={heroRef}
      className= {
        `bg-[url('/Pretty-Health%20Website/Images/Image%20(4).png')] 
       lg:h-screen w-full
       py-[100px] px-[20px] text-center bg-cover
       bg-center text-white flex flex-col justify-end
       transition-all duration-1000 ease-in-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`
      }
      >
      <h1 className="font-semibold text-2xl md:text-4xl ">
        The Rise of Artificial Intelligence in Healthcare
      </h1>
    </div>
  );
};

export default HeroSection;
