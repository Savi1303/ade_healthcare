'use client'

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import heart from '../../../public/Pretty-Health Website/Images/Icon (19).png';
import eye from '../../../public/Pretty-Health Website/Images/Icon (20).png';
import messageIcon from '../../../public/Pretty-Health Website/Images/Icon (21).png';

const Details: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const detailsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (detailsRef.current) {
      observer.observe(detailsRef.current);
    }

    return () => {
      if (detailsRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(detailsRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={detailsRef}
      className={`
        lg:border-t md:border-t-blue-600 text-[#331C4C] mb-5 lg:w-[40%] 
        lg:border-l md:border-l-blue-600 lg:mt-[30px]
        transition-all duration-1000 ease-in-out
        ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-10'}
      `}
    >
      {/* Engagements Section */}
      <div
        className={`
          engagements flex items-center mx-auto lg:pl-4 justify-center py-[25px] 
          lg:border-b border-b-blue-600 mb-[30px] md:mb-0 md:justify-normal gap-5
          transform transition-all duration-700 delay-[200ms]
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
        `}
      >
        <div className="flex gap-[10px] items-center justify-center px-[20px] cursor-pointer py-[10px] border w-fit rounded-full border-blue-600 transition-all duration-300 ease-in-out hover:scale-105 hover:border-blue-800 hover:bg-blue-100">
         <Image src={heart} alt="heart icon" width={26} height={26} />
         <p className="text-[18px] transition-colors duration-300 ease-in-out hover:text-blue-800">24.5k</p>
        </div>

        <div className="flex gap-[10px] items-center justify-center px-[20px] py-[10px] border cursor-pointer w-fit rounded-full border-blue-600 transition-all duration-300 ease-in-out hover:scale-105 hover:border-blue-800 hover:bg-blue-100">
         <Image src={eye} alt="views icon" width={26} height={26} />
         <p className="text-[18px] transition-colors duration-300 ease-in-out hover:text-blue-800">50k</p>
        </div>

        <div className="flex gap-[10px] items-center justify-center px-[20px] py-[10px] border w-fit cursor-pointer rounded-full border-blue-600 transition-all duration-300 ease-in-out hover:scale-105 hover:border-blue-800 hover:bg-blue-100">
           <Image src={messageIcon} alt="shared icon" width={26} height={26} />
           <p className="text-[18px] transition-colors duration-300 ease-in-out hover:text-blue-800">206</p>
          </div>
      </div>

      {/* Details Section */}
      <div
        className={`
          lg:p-12
          transform transition-all duration-700 delay-[400ms]
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
        `}
      >
        <div className="details grid grid-cols-2 gap-5 text-[16px] mb-[30px] md:text-[14px]">
          <article>
            <p>Publication Date</p>
            <p className="font-semibold">October 15th, 2023</p>
          </article>
          <article>
            <p>Category</p>
            <p className="font-semibold">Health Care</p>
          </article>
          <article>
            <p>Reading Time</p>
            <p className="font-semibold">10 mins</p>
          </article>
          <article className="space-y-2">
            <p>Author Name</p>
            <p className="font-semibold">Dr Emily Walker</p>
          </article>
        </div>

        {/* Table of Contents Section */}
        <div className="table-of-contents">
          <h3
            className={`
              mb-2 transition-all duration-700 delay-[600ms]
              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}
            `}
          >
            Table of Contents
          </h3>
          <div
            className={`
              content bg-[#E7E6FF] p-5 text-[16px] rounded-[15px] 
              transform transition-all duration-700 delay-[800ms]
              ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
            `}
          >
            <ul className="space-y-2 list-disc pl-5">
              <li>Introduction</li>
              <li>AI in Diagnostic Imaging</li>
              <li>Predictive Analytics and Disease Prevention</li>
              <li>Personalized Treatment Plans</li>
              <li>Drug Discovery and Research</li>
              <li>AI in Telemedicine</li>
              <li>Ethical Considerations</li>
              <li>The Future of AI in Healthcare</li>
              <li>Conclusion</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
