"use client"
import ContactHeader from '@/components/Contact-Us/ContactHeader';
import ContactForm from '@/components/Contact-Us/ContactForm';
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { PiHeartbeatBold } from "react-icons/pi"
import { TbCalendarTime } from "react-icons/tb"
import { motion } from "framer-motion"
const Page = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [count, setCount] = useState(0)

  // Counter animation effect
  useEffect(() => {
    setIsVisible(true)

    if (count < 250000) {
      const timeout = setTimeout(() => {
        setCount((prev) => {
          const increment = Math.floor((250000 - prev) / 10) + 1
          return Math.min(prev + increment, 250000)
        })
      }, 20)

      return () => clearTimeout(timeout)
    }
  }, [count])
  return (
    <div>
   <div className='py-[45px] md:py-[100px] md:px-[100px] px-[25px] flex justify-between flex-col lg:flex-row gap-[30px] md:items-center'>
     <ContactHeader />
     <ContactForm />
   </div>
   <div>
   <h1 className='text-4xl text-center font-bold'>More questions? </h1>
   <p className='text-center text-xl '>Contact or visit us : </p>
      <div className="px-4 md:px-20 mx-8 mb-14">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row border rounded-2xl bg-[#250c2c] text-white p-6 md:p-10 space-y-6 md:space-y-0 md:space-x-5"
            >
              {/* Emergency Services */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-full md:w-1/2 space-y-5"
              >
                <h2 className="flex items-center gap-2 text-xl md:text-2xl font-semibold">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      color: ["#ffffff", "#a5b4fc", "#ffffff"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  >
                    <PiHeartbeatBold size={30} />
                  </motion.div>
                  For Our Services
                </h2>

                <div className="flex flex-col space-y-5 font-bold text-sm">
                  <motion.div
                    whileHover={{ scale: 1.05, x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Link href="tel:+2348114346325">
                      <span>
                        Phone: <span className="text-indigo-300 md:text-lg text-[16px]">+234 811 434 6325</span>
                      </span>
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Link href="https://wa.me/message/KEAP2TUQOW6EN1">
                      <span>
                        WhatsApp: <span className="text-indigo-300 md:text-lg text-[15px]">+234 811 434 6325</span>
                      </span>
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Link href="mailto:Info@prettyhealthcare.com.ng">
                      <span>
                        E-mail: <span className="text-indigo-300 md:text-lg text-[16px]">Info@prettyhealthcare.com.ng</span>
                      </span>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>

              {/* Opening Hours */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-full md:w-1/2 space-y-5"
              >
                <h2 className="flex items-center gap-2 text-xl md:text-2xl font-semibold">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                  >
                    <TbCalendarTime size={30} />
                  </motion.div>
                  Opening Hours
                </h2>

                <div className="flex flex-col space-y-5">
                  {[
                    { day: "Mon - Fri", time: "08:00AM - 05:00PM" },
                    { day: "Saturdays", time: "09:00AM - 04:00PM" },
                  ].map((schedule, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.2 }}
                      className="flex justify-between items-center font-bold text-sm"
                    >
                      <span className="m-1">{schedule.day}</span>
                      <span className="m-1">{schedule.time}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
      </div>
   </div>
    </div>
  );
};

export default Page;

