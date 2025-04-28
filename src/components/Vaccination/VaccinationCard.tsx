import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const vaccines = [
  { name: "HBV Vaccine", color: "bg-purple-200", link: "https://wa.me/message/KEAP2TUQOW6EN1" },
  { name: "HPV Vaccine", color: "bg-yellow-200", link: "https://wa.me/message/KEAP2TUQOW6EN1" },
  { name: "Meningococcal Vaccine", color: "bg-purple-300", link: "https://wa.me/message/KEAP2TUQOW6EN1" },
  { name: "Typhoid Vaccine", color: "bg-blue-200", link: "https://wa.me/message/KEAP2TUQOW6EN1" },
  { name: "MMR (Measles Mumps Rubella)", color: "bg-gray-300", link: "https://wa.me/message/KEAP2TUQOW6EN1" },
  { name: "Varicella Vaccine", color: "bg-yellow-300", link: "https://wa.me/message/KEAP2TUQOW6EN1" },
  { name: "Tdap Vaccine", color: "bg-purple-400", link: "https://wa.me/message/KEAP2TUQOW6EN1" },
];

const VaccinationNation = () => {
  return (
    <div className="lg:py-24 py-6 min-h-screen lg:px-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {vaccines.map((vaccine, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Link href={vaccine.link} passHref>
                <div className={`${vaccine.color} py-24 rounded-xl shadow-md flex flex-col items-center text-center cursor-pointer hover:shadow-lg transition`}>
                  <h3 className="text-md font-semibold text-gray-900 p-2">
                    {vaccine.name}
                  </h3>
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.4, delay: (index * 0.2) + 0.3 }}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-blue-600 transition"
                  >
                    <div className="p-2 bg-white rounded-full">
                      <FaArrowRight className="text-blue-600" />
                    </div>
                    Book Vaccine
                  </motion.button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VaccinationNation;
