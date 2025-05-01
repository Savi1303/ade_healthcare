'use client'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const listItems = [
  'Individual Vaccination',
  'Travel Vaccination',
  'Home Vaccination',
  'Expert Healthcare Workers',
  'Group Vaccination',
  'Easy Booking',
  'Cutting-Edge Technology',
  'Positive Reviews',
]

function AboutPrettyHealth() {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-24 py-12">
      <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">
        <motion.div
          className="w-full lg:w-1/2 flex gap-3 sm:gap-5 px-4 sm:px-8 md:px-12 lg:px-0 justify-center lg:justify-start"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Image
            src="/Pretty-Health Website/new_images/Rectangle 6298 (4).png"
            alt="About Pretty One"
            width={160}
            height={130}
            className="object-cover rounded-lg"
          />
          <Image
            src="/Pretty-Health Website/new_images/Rectangle 6299 (2).png"
            alt="About Pretty Two"
            width={160}
            height={130}
            className="object-cover rounded-lg"
          />
        </motion.div>

        <motion.div
          className="w-full lg:w-1/2 space-y-6 text-gray-800 text-left px-0 sm:px-8 lg:px-0"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <span className="sm:text-lg text-lg md:text-2xl lg:text-2xl font-semibold text-indigo-600">
            About PrettyHealth
          </span>

          <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-thin text-gray-800 leading-tight">
            We are the largest provider of{' '}
            <span className="font-black">private vaccination services</span> in
            Nigeria
          </h2>

          <p className="text-lg sm:text-xl lg:text-xl text-gray-600">
            Making vaccination work for you, one person at a time
          </p>

            <motion.ul
          className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-lg sm:text-lg text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <AnimatePresence>
            {listItems.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.5,
                  delay: index * 1,
                  ease: 'easeInOut',
                }}
              >
                ✔️ {item}
              </motion.li>
            ))}
          </AnimatePresence>
            </motion.ul>

          <div className="flex justify-start">
            <Link href="/vaccine">
              <button className="px-4 py-2 mt-5 flex items-center gap-2 rounded-full bg-indigo-600 hover:bg-indigo-800 text-white w-fit">
                <div className="flex justify-center items-center bg-white text-blue-500 w-5 h-5 rounded-full">
                  <FaArrowRight className="w-3 h-3" />
                </div>
                <p className="text-lg sm:text-base">Learn More</p>
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutPrettyHealth
