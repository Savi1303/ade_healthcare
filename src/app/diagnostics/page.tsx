"use client"
import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/Diagnostics/HeroSection';
import DiagnosticsLab from '@/components/Diagnostics/DiagnosticsLab';
import DiagnosticsGrid from '@/components/Diagnostics/DiagnosticsCard/DiagnosticsGrid';
import WhyBookWithUs from '@/components/Diagnostics/DiagnosticsBook/WhyBookWithUs';

const page = () => {
  return (
    <div className='overflow-hidden'>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <HeroSection />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 90, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <DiagnosticsLab />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -80, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <DiagnosticsGrid />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -80, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <WhyBookWithUs />
      </motion.div>
    </div>
  );
};

export default page;
