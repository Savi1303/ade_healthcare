'use client'
import React, { useEffect, useRef, useState } from 'react';
import { servicesProvided } from "@/constants";
import MiniHeader from "../general/MiniHeader";
import SubHeader from "../general/SubHeader";
import ServiceCard from "./service_Section/ServiceCard";
import { ArrowRight } from "lucide-react";

// Custom hook for scroll-based animation
const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
};

// Enhanced Services Section with Scroll Animations
const ServicesSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1);
  const { ref: cardRef, isVisible: cardsVisible } = useScrollAnimation(0.2);

  return (
    <div 
      ref={sectionRef} 
      className={`py-8 bg-[#D8D8FF] transition-all duration-1000 ease-in-out ${
        sectionVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
    >
      <div className='text-center'>
        <MiniHeader text='Our Service' />
        <SubHeader text='We Serve In Different'>
          <p className='font-bold'>Areas For Students</p>
        </SubHeader>
      </div>
      
      <div 
        ref={cardRef}
        className={`
          flex flex-wrap items-center justify-center gap-4 mt-8 px-4 
          transition-all duration-1000 ease-in-out 
          ${cardsVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
          }
        `}
      >
        {servicesProvided.map((service, index) => (
          <div 
            key={service.title}
            className={`
              transition-all duration-1000 ease-in-out 
              ${cardsVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-20'
              }`}
            style={{ 
              transitionDelay: `${index * 100}ms` 
            }}
          >
            <ServiceCard 
              title={service.title} 
              text={service.text} 
              image={service.image} 
            />
          </div>
        ))}
      </div>

      <div 
        className={`
          flex gap-1 items-center justify-center mt-4 px-4 
          transition-all duration-1000 ease-in-out 
          ${sectionVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
          }`}
      >
        <p className="text-sm text-center">
          We have 8+ more Care Service including Emergency Department. 
          <span className="font-bold cursor-pointer hover:underline hover:underline-offset-2 transition">
            View All
          </span>
        </p>
        <ArrowRight className="w-5 h-5 hidden md:block cursor-pointer hover:scale-110" />
      </div>
    </div>
  );
};

export default ServicesSection;