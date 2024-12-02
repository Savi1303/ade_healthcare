'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import CardiologyForm from './CardiologyForm';
import { CheckCheck } from 'lucide-react';
import MedicineNephrologyList from './MedicineNephrologyList';

// Custom hook for scroll-based animation (reused from Services Section)
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

const Cardiology = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1);
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation(0.2);
  const { ref: introRef, isVisible: introVisible } = useScrollAnimation(0.2);
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation(0.2);
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation(0.2);

  return (
    <section 
      ref={sectionRef}
      className={`
        container mx-auto px-4 md:px-8 lg:px-12 py-10 flex flex-col items-start lg:flex-row gap-8
        transition-all duration-1000 ease-in-out
        ${sectionVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
        }
      `}
    >
      {/* Sidebar */}
      <MedicineNephrologyList />

      {/* Main Content */}
      <div className="flex-1">
        {/* Banner Image */}
        <div 
          ref={imageRef}
          className={`
            transition-all duration-1000 ease-in-out mb-6
            ${imageVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-20'
            }
          `}
        >
          <Image
            src="/Pretty-Health Website/Images/Image (8).png"
            alt="Cardiology"
            layout="responsive"
            width={100}
            height={50} // Aspect ratio
            className="rounded-lg"
          />
        </div>

        {/* Cardiology Introduction */}
        <article 
          ref={introRef}
          className={`
            transition-all duration-1000 ease-in-out
            ${introVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-20'
            }
          `}
        >
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Cardiology</h1>
          <p className="text-sm md:text-base mb-6">
            Prettyhealth has one of the largest Cardio care programs in a community academic hospital in the GTA
            (Greater Toronto Area), providing treatment for many types of CVD, including heart transplant, open-heart
            surgery, and more.
          </p>
        </article>

        {/* Description */}
        <p 
          className={`
            text-sm md:text-base mb-6
            transition-all duration-1000 ease-in-out
            ${introVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-20'
            }
          `}
        >
          Prettyhealth General is constantly thinking and going beyond for our patients, community, and people. As
          people and communities change, Prettyhealth General will continuously evolve to meet their needs.
        </p>

        {/* Features */}
        <article 
          ref={featuresRef}
          className={`
            transition-all duration-1000 ease-in-out
            ${featuresVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-20'
            }
          `}
        >
          <h3 className="text-lg md:text-xl font-bold mb-4">
            Enhancing the Patient and Family Experience
          </h3>
          <p className="text-sm md:text-base mb-4">
            We ensure our patients receive the highest standard of cardio care. Patients and their families have access
            to a range of facilities:
          </p>
          <ul className="space-y-2 mb-8">
            {[
              "The BMO Breast Diagnostic Clinic, part of the Karen, Heather & Lynn Steinberg Breast Centre.",
              "The Baruch/Weisz Cardio Centre.",
              "Freeman Centre for the Advancement of Palliative Care.",
              "Gale and Graham Wright Prostate Centre."
            ].map((facility, index) => (
              <li 
                key={index}
                className={`
                  flex items-start gap-2
                  transition-all duration-1000 ease-in-out
                  ${featuresVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-20'
                  }
                `}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CheckCheck size={20} className="text-green-600" />
                {facility}
              </li>
            ))}
          </ul>
        </article>

        {/* Form */}
        <div 
          ref={formRef}
          className={`
            transition-all duration-1000 ease-in-out
            ${formVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-20'
            }
          `}
        >
          <CardiologyForm />
        </div>
      </div>
    </section>
  );
};

export default Cardiology;