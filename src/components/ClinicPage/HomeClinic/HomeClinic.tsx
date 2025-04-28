"use client"
import { motion } from "framer-motion";
import Image from "next/image";

const HomeClinic = () => {
    return (
        <div className="relative w-full h-[550px] sm:h-[400px] md:h-[550px] lg:h-[530px] overflow-hidden">
            {/* Background */}
            <motion.div
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: false }}
            >
                <Image
                    src="/Pretty-Health Website/new_images/Group 20650.png"
                    alt="clinicImage"
                    layout="fill"
                    objectFit="cover"
                    className="-z-10"
                />
            </motion.div>

            {/* Home Clinic */}
            <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-4 sm:px-8 lg:px-12 space-y-6">
                <div className="flex">
                    <div className="absolute space-y-4 top-40 sm:top-20 md:top-32 lg:top-28">
                        {/* Heading */}
                        <motion.h1
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl -mt-12 max-w-[90%] md:max-w-[45%] lg:max-w-[650px]"
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: false }}
                        >
                            <p>
                                We <b>design</b> and <b>manage clinics</b> to meet the <b>unique requirements</b>
                                of your <b>workplace or institution.</b>
                            </p>
                        </motion.h1>
                    </div>
                </div>

                {/* Right-Side Image */}
                <motion.div
                    className="absolute right-0 hidden sm:flex pt-6 md:pt-1"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false }}
                >
                    <Image
                        src="/Pretty-Health Website/new_images/image 22.png"
                        alt=""
                        width={770}
                        height={600}
                        className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[770px]"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default HomeClinic;
