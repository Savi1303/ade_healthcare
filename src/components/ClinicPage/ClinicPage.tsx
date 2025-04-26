"use client"
import { motion } from "framer-motion";
import HomeClinic from './HomeClinic/HomeClinic';
import WorkProcess from './WorkProcess/WorkProcess';
// import Blog from '../LandingPage/Blog/Blog'
// import AboutService from '../About-us/AboutService/AboutService'
// import ClinicHealth from './ClinicHealth/ClinicHealth'

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

            {/* <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <AboutService />
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <Blog />
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <ClinicHealth />
            </motion.div> */}
        </div>
    );
}

export default ClinicPage;
