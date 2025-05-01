"use client"
import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface ServiceCardProps {
  image: string
  title: React.ReactNode
  items: string[]
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, items }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <motion.div
      className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col"
      layout
      transition={{
        layout: { duration: 0.3, type: "spring" },
        ease: "easeInOut",
      }}
      viewport={{ once: false }}
    >
      <div className="p-6 flex flex-col h-full">
        <div className="flex justify-center mb-4">
          <motion.div
            className="relative w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            viewport={{ once: false }}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt="Service Icon"
              width={40}
              height={40}
              className="object-contain"
            />
          </motion.div>
        </div>

        <motion.div className="text-center mb-4 text-xl font-bold text-blue-600" layout="position">
          {title}
        </motion.div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: false }}
              className="flex-grow"
            >
              <ul className="space-y-2 text-center text-gray-700">
                {items.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    viewport={{ once: false }}
                    className="text-sm"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={toggleExpand}
          className={`mt-4 flex items-center justify-center mx-auto px-4 py-2 text-blue-600 font-medium ${isExpanded ? "border border-blue-600 rounded-full" : ""}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          layout="position"
        >
          <span>{isExpanded ? "Read Less" : "Read More"}</span>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </motion.button>
      </div>
    </motion.div>
  )
}

export default ServiceCard