'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import PrettyHealth from '../YourHealth/PrettyHealth/PrettyHealth';
import Sponsors from '../sponsors/page';
import AboutPrettyHealth from './PrettyHealth/AboutPrettyHealth';
import Image from 'next/image';
import { PiQuotes } from 'react-icons/pi';
import { FaStar } from 'react-icons/fa';

// Wrapper to animate on scroll into view
const SectionWrapper = ({ children, initial = { opacity: 0, y: 50 }, transition = { duration: 0.6, ease: 'easeInOut' } }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};
const slideVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};
const testimonials = [
    {
        quote: "I had a great experience at this healthcare office. I was seen quickly, and the team were very calm and I got my HPV vaccine administered and my next appointment was set up on my phone.",
        // image: "/Pretty-Health Website/Images/Photo by Etty Fidele.png",
        name: "Adekunle Florence",
        role: "Vaccination Client",
    },
    {
        quote: "The staff was professional and kind. The vaccination process was smooth and the environment was clean and welcoming.",
        // image: "/Pretty-Health Website/Images/Image (1).png",
        name: "Chukwuma Obinna",
        role: "Health Screening Client",
    },
    {
        quote: "I appreciate the timely service and the detailed explanations I received about my health. Highly recommend Prettyhealth Care.",
        // image: "/Pretty-Health Website/Images/Image (2).png",
        name: "Fatima Ibrahim",
        role: "Regular Client",
    },
    {
        quote: "The team made me feel comfortable during my visit, and the follow-up care has been excellent. Great service!",
        // image: "/Pretty-Health Website/Images/Image (3).png",
        name: "Oluwatobi Adebayo",
        role: "Vaccination Client",
    },
    {
        quote: "The environment is aesthetic and nice. Really a nice place to get your wellness tests done",
        // image: "/Pretty-Health Website/Images/Image (3).png",
        name: "Cynthia Uche",
        role: "Client",
    },
];

const YourHealth = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(i => (i + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16">
      <div className="container mx-auto flex flex-col space-y-10 px-6 md:px-10">

        {/* Header Section */}
        <SectionWrapper initial={{ opacity: 0, y: -50 }}>
        <motion.div className="text-center md:text-left" variants={itemVariants}>
          <span className="text-lg font-bold text-blue-600">
            Your Health Is Our Top Priority
          </span>
          <motion.div className="w-full whitespace-nowrap overflow-hidden mt-4" variants={slideVariants}>
            <div className="inline-block animate-scroll">
              <p className="pr-32 text-2xl md:text-3xl lg:text-4xl text-gray-900 font-thin leading-relaxed">
                Our track record speaks for itself. We led{' '}
                <span className="font-extrabold">HPV vaccine</span> introduction in Nigeria through the private sector, using an{' '}
                <span className="font-extrabold">innovative low-cost delivery model.</span>
              </p>
            </div>
          </motion.div>
        </motion.div>

        </SectionWrapper>

        {/* PrettyHealth */}
        <SectionWrapper initial={{ opacity: 0, x: -50 }} >
          <PrettyHealth />
        </SectionWrapper>

        {/* Sponsors */}
        <SectionWrapper initial={{ opacity: 0, x: 50 }}>
          <Sponsors />
        </SectionWrapper>

        {/* AboutPrettyHealth */}
        <SectionWrapper initial={{ opacity: 0, y: 50 }}>
          <AboutPrettyHealth />
        </SectionWrapper>

        {/* Cards + Slider Row */}
        <SectionWrapper initial={{ opacity: 0, y: 50 }}>  
          <div className="flex justify-center w-full items-start flex-col lg:flex-row gap-4">

            {/* Static Cards */}
            <div className="flex flex-col items-end justify-center basis-full lg:basis-1/2 gap-4">
              <div className="bg-[#f8e9f1] rounded-xl flex gap-4 px-6 py-7 items-center w-full">
                <Image src="/Pretty-Health Website/Images/Frame 37.png" alt="HIPAA COMPLIANT" width={60} height={60} />
                <p className="md:text-2xl text-xl text-gray-800 font-medium">What Prettyhealth clients think about us</p>
              </div>
              <div className="w-full md:w-3/4 lg:w-1/2 rounded-xl py-4 bg-[#B6B5FF] text-center flex flex-col items-center">
                <p className="text-sm font-bold text-gray-900 uppercase">Average Google Ratings</p>
                <div className="flex items-center space-x-2 mt-2 justify-center">
                  <FaStar className="text-[#52aa40]" size={26} />
                  <span className="text-gray-800 text-5xl font-black">5.0</span>
                </div>
              </div>
            </div>

            {/* Animated Testimonials Slider */}
            <div className="w-full lg:w-3/4 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6 }}
                  className="overflow-hidden rounded-2xl shadow-lg bg-[#B6B5FF] py-6 px-10 sm:px-6 md:px-16 lg:px-20"
                >
                  <PiQuotes className="transform rotate-180 text-gray-600" size={48} />
                  <p className="text-gray-900 md:text-lg sm:text-sm lg:text-lg line-clamp-2">
                    “{testimonials[currentIndex].quote}”
                  </p>
                  <div className="flex items-center space-x-4 mt-4">
                    {/* <Image src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} width={60} height={60} className="rounded-full" /> */}
                    <div>
                      <h3 className="text-gray-800 text-sm md:text-md lg:text-lg font-semibold uppercase">{testimonials[currentIndex].name}</h3>
                      <p className="text-sm lg:text-lg text-gray-900">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </SectionWrapper>

      </div>
    </div>
  );
};

export default YourHealth;
