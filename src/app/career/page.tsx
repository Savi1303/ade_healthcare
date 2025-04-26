'use client';

import CareerGrow from '@/components/Career/CareerGrow';
import CareerHome from '@/components/Career/CareerHome';
import CareerTailor from '@/components/Career/CareerTailor';
import CareerTalent from '@/components/Career/CareerTalent';
// import CareerTeam from '@/components/Career/CareerTeam/CareerTeam'
import React from 'react';
import { motion } from 'framer-motion';

function Page() {
    return (
        <div className="space-y-10">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
            >
                <CareerHome />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
            >
                <CareerTailor />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
            >
                <CareerGrow />
            </motion.div>

            {/* Uncomment if you want the CareerTeam component later */}
            {/* <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
            >
                <CareerTeam />
            </motion.div> */}

            <motion.div
                initial={{ opacity: 0, rotate: -10 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: false }}
            >
                <CareerTalent />
            </motion.div>
        </div>
    );
}

export default Page;
