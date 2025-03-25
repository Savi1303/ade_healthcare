'use client'
import Image from 'next/image'
import { useEffect, useRef, useState } from "react";

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
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className={` flex flex-col md:py-10 py-20 max-sm:py-10 transition-all duration-1000 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
        <div className='lg:py-16 md:py-16 py-0 lg:gap-10 flex flex-col justify-center items-center px-4 sm:px-4'>
            <div className='flex flex-col items-center justify-center gap-3 mb-12 text-center'>
                <h2 className='max-sm:text-[1.4rem] text-4xl md:text-5xl leading-tight'>
                    Your {''}
                    <span className='font-extrabold'>
                        Partner
                    </span> {''} in {''}
                    <span className='font-extrabold'>
                        Student Health 
                    </span> 
                </h2>
                <h2 className='max-sm:text-[1.4rem] text-4xl md:text-5xl leading-3'>
                    {''} and {''}
                    <span className='font-extrabold'>
                        Well-being 
                    </span>  
                </h2> 

            </div>

            {/* Image Section */}
            <div className='w-full max-w-4xl px-4'>
                <Image
                    src='/Pretty-Health Website/new_images/image.png'
                    alt='Students Image'
                    width={1000}
                    height={500}
                    layout="responsive"
                />
            </div>
        </div>
    </div>
  );
};

export default HeroSection;