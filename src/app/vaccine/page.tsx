'use client';

import VaccinationCard from '@/components/Vaccination/VaccinationCard';
import VaccinationHome from '@/components/Vaccination/VaccinationHome';
import VaccinationNation from '@/components/Vaccination/VaccinationNation';
import React from 'react';
import { motion } from 'framer-motion';

const Page = () => {
    return (
        <div className="space-y-10">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
            >
                <VaccinationHome />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
            >
                <VaccinationNation />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
            >
                <VaccinationCard />
            </motion.div>
        </div>
    );
}

export default Page;
