"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'

const HomeView = () => {
  return (
    <div className="relative w-full h-[550px] sm:h-[600px] md:h-[650px] lg:h-[650px]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/Pretty-Health Website/Images/Group 20647.png"
          alt="homeView"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-4 sm:px-8 lg:px-12 space-y-6">
        <motion.div
          className="absolute top-40 sm:top-40 md:top-48 lg:top-52"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-2">
            <span className="font-extrabold">Nigeria&apos;s</span> Foremost
          </h1>
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            Preventive Health &
          </span>
          <p className="text-3xl sm:text-4xl md:text-5xl font-light mt-2">
            Wellness Company!
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default HomeView
