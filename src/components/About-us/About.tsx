"use client"

import React from 'react';
import { motion, useInView } from 'framer-motion';
import AboutHome from './AboutHome/AboutHome';
import OurStory from './OurStory/OurStory';
// import Blog from '../LandingPage/Blog/Blog';
import Service from '../LandingPage/Servicess/Service';
import AboutHealth from './AboutHealth/AboutHealth';
import TeamSection from './TeamSection/TeamSection';

// A wrapper that applies a custom animation when the component scrolls into view
const SectionWrapper = ({ children, initial }: any) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  return (
    <div className='overflow-hidden'>
      {/* Slide in from left */}
      <SectionWrapper initial={{ opacity: 0, x: -100 }}>
        <AboutHome />
      </SectionWrapper>

      {/* Slide in from right */}
      <SectionWrapper initial={{ opacity: 0, x: 100 }}>
        <OurStory />
      </SectionWrapper>

      {/* Fade in */}
      <SectionWrapper initial={{ opacity: 0 }}>
        <Service />
      </SectionWrapper>

      {/* Zoom in */}
      <SectionWrapper initial={{ opacity: 0, scale: 0.8 }}>
        {/* <Blog /> */}
      </SectionWrapper>

      {/* Rotate in */}
      <SectionWrapper initial={{ opacity: 0, rotate: 15 }}>
        <AboutHealth />
      </SectionWrapper>

      {/* Slide up */}
      <SectionWrapper initial={{ opacity: 0, y: 50 }}>
        <TeamSection />
      </SectionWrapper>
    </div>
  );
};

export default About;
