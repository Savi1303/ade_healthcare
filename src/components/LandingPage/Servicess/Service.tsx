"use client"
import ServiceCard from "./ServiceCard/ServiceCard"
import Link from "next/link"
import { motion } from "framer-motion"

const services = [
  {
    image: "/Pretty-Health Website/Images/image 3.png",
    title: "Vaccination Services",
    link: "/vaccine",
    items: [
      "HBV Vaccine",
      "HPV Vaccine",
      "Typhoid Vaccine",
      "MMR (Measles, Mumps, Rubella Vaccine)",
      "Varicella Vaccine",
      "Tdap Vaccine",
      "Meningitis Vaccine",
    ],
  },
  {
    image: "/Pretty-Health Website/Images/image 10.png",
    title: "Health Screening Services",
    link: "/diagnostics",
    items: ["Laboratory Services", "Mammogram", "Wellness Screening"],
  },
  {
    image: "/Pretty-Health Website/Images/image 5.png",
    title: "Integrated School Health and Adolescent Health Services",
    link: "/school-health",
    items: [
      "School Clinics",
      "Pre-Admission Screening",
      "School Vaccination Services",
      "Integrated School Intervention",
    ],
  },
  {
    image: "/Pretty-Health Website/Images/image 7.png",
    title: "Health Promotion Services and Research",
    link: "/clinic",
    items: [
      "Health Education Design and Delivery",
      "Health Awareness Programs",
      "Public Health Seminars/Webinars",
      "Public Health Implementation Research",
    ],
  },
]

const Service = () => {
  return (
    <motion.div
      className="py-16 bg-[#cdccf3]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto px-6 sm:px-8 lg:px-10 space-y-12">
        <motion.div
          className="text-center"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.span
            className="sm:text-lg text-lg font-extrabold text-blue-600 inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Our Services
          </motion.span>
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-thin text-gray-800 mt-2 md:w-[500px] lg:w-[600px] mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We serve in different{" "}
            <motion.span
              className="font-extrabold"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              areas for our clients
            </motion.span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <ServiceCard
                image={service.image}
                title={
                  <Link href={service.link} className="hover:underline text-blue-600">
                    {service.title}
                  </Link>
                }
                items={service.items || []}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Service
