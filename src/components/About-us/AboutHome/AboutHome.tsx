"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { PiHeartbeatBold } from "react-icons/pi"
import { TbCalendarTime } from "react-icons/tb"
import { motion } from "framer-motion"

const AboutHome = () => {
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
      {/* Enhanced Banner Section */}
      <div className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 z-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0"
          >
            <Image
              src="/Pretty-Health Website/new_images/Group 6.png"
              alt="Background Pattern"
              layout="fill"
              objectFit="cover"
              className="mix-blend-overlay"
            />
          </motion.div>

          {/* Animated wave shape at bottom */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute bottom-0 w-full"
          >
            <svg viewBox="0 0 1440 120" className="w-full h-auto">
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
                fill="#ffffff"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="2"
              />
            </svg>
          </motion.div>
        </div>

        {/* Content container */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 md:px-10 lg:px-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col space-y-4"
          >
            {/* Animated counter */}
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                {isVisible ? `${count.toLocaleString()}+` : "0+"}
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Clients
              </motion.span>
            </h3>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-light text-white"
            >
              Trust in Our Services
            </motion.span>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <p className="text-xl md:text-2xl text-white font-medium mt-2 max-w-2xl mx-auto">
                <span className="inline-block relative">
                  <span className="relative z-10">....We are your go-to preventive healthcare Organization</span>
                  <motion.span
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.2, delay: 1.2 }}
                    className="absolute bottom-0 left-0 h-3 bg-blue-300 opacity-30 z-0"
                  />
                </span>
              </p>
            </motion.div>
          </motion.div>

          {/* Floating elements for visual interest */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 3,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 right-1/4 w-12 h-12 rounded-full bg-white opacity-10"
          />

          <motion.div
            animate={{
              y: [0, 15, 0],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 4,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute bottom-1/3 left-1/4 w-8 h-8 rounded-full bg-white opacity-10"
          />
        </div>
      </div>

      {/* Info Section */}
      <div className="px-4 md:px-20 mt-8">
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
  )
}

export default AboutHome
