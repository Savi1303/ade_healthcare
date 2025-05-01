"use client"
import { motion } from "framer-motion";
import HomeClinic from './HomeClinic/HomeClinic';
import WorkProcess from './WorkProcess/WorkProcess';

function ClinicPage() {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
            >
                <HomeClinic />
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
            >
                <WorkProcess />
            </motion.div>
        </div>
    );
}

export default ClinicPage;
