// 'use client'
// import Image from 'next/image'
// import { motion } from 'framer-motion'
// import { useEffect, useRef, useState } from "react";

// const HeroSection = () => {
//   const [isVisible, setIsVisible] = useState(true);
//   const heroRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.2 } // Trigger when 20% of the section is visible
//     );

//     if (heroRef.current) {
//       observer.observe(heroRef.current);
//     }

//     return () => {
//       if (heroRef.current) {
//                 // eslint-disable-next-line react-hooks/exhaustive-deps
//                 observer.unobserve(heroRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div
//       ref={heroRef}
//       className={` flex flex-col md:py-10 py-20 max-sm:py-10 transition-all duration-1000 ease-in-out ${
//         isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//       }`}
//     >
//       <div className="flex flex-col md:py-10 py-20 max-sm:py-10">
//       <div className="lg:py-16 md:py-16 py-0 lg:gap-10 flex flex-col justify-center items-center px-4 sm:px-4">
//         <div className="flex flex-col items-center justify-center gap-3 mb-12 text-center">
//           {/* Animated Heading */}
//           <motion.h2
//             className="max-sm:text-[1.4rem] text-4xl md:text-5xl leading-tight"
//             initial={{ opacity: 0, x: -100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//           >
//             Your{' '}
//             <span className="font-extrabold">
//               Partner
//             </span>{' '}
//             in{' '}
//             <span className="font-extrabold">
//               Student Health
//             </span>
//           </motion.h2>
//           <motion.h2
//             className="max-sm:text-[1.4rem] text-4xl md:text-5xl leading-3"
//             initial={{ opacity: 0, x: 100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             viewport={{ once: true }}
//           >
//             and{' '}
//             <span className="font-extrabold">
//               Well-being
//             </span>
//           </motion.h2>
//         </div>

//         {/* Animated Image */}
//         <motion.div
//           className="w-full max-w-4xl px-4"
//           initial={{ opacity: 0, y: 100 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//         >
//           <Image
//             src="/Pretty-Health Website/new_images/Rectangle 5.png"
//             alt="Students Image"
//             width={1000}
//             height={500}
//             layout="responsive"
//           />
//         </motion.div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default HeroSection;

"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Set initial visibility after component mounts to avoid hydration issues
    setIsVisible(true)

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only update visibility state when needed
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        } else if (!entry.isIntersecting && isVisible) {
          setIsVisible(false)
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px", // Trigger slightly before section is fully visible
      },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current)
      }
    }
  }, [isVisible])

  // Text animation variants
  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.04,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  const wordAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  const highlightedTextAnimation = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      filter: "blur(8px)",
    },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.15 + 0.3,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  }

  const lineAnimation = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "12rem",
      opacity: 1,
      transition: {
        delay: 1.2,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  // Split text into words for animation
  const firstLine = "Your Partner in Student Health".split(" ")
  const secondLine = "and Well-being".split(" ")

  return (
    <section
      ref={heroRef}
      className={`relative min-h-[80vh] flex flex-col justify-center items-center py-16 md:py-24 lg:py-32 overflow-hidden transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white opacity-50 z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          {/* First line animation */}
          <div className="overflow-hidden mb-4 md:mb-6">
            <div className="flex flex-wrap justify-center text-4xl md:text-5xl lg:text-6xl font-light">
              {firstLine.map((word, index) => (
                <div key={index} className="mx-1 overflow-hidden">
                  {index === 1 || index === 3 || index === 4 ? (
                    <motion.span
                      className="font-extrabold bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent inline-block"
                      custom={index}
                      initial="hidden"
                      animate={isVisible ? "visible" : "hidden"}
                      variants={highlightedTextAnimation}
                    >
                      {word}
                    </motion.span>
                  ) : (
                    <motion.span
                      className="inline-block"
                      custom={index}
                      initial="hidden"
                      animate={isVisible ? "visible" : "hidden"}
                      variants={wordAnimation}
                    >
                      {word}
                    </motion.span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Second line animation */}
          <div className="overflow-hidden">
            <div className="flex flex-wrap justify-center text-4xl md:text-5xl lg:text-6xl font-light">
              {secondLine.map((word, index) => (
                <div key={index} className="mx-1 overflow-hidden">
                  {index === 1 ? (
                    <motion.span
                      className="font-extrabold bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent inline-block"
                      custom={index + firstLine.length} 
                      initial="hidden"
                      animate={isVisible ? "visible" : "hidden"}
                      variants={highlightedTextAnimation}
                    >
                      {word}
                    </motion.span>
                  ) : (
                    <motion.span
                      className="inline-block"
                      custom={index + firstLine.length}   
                      initial="hidden"
                      animate={isVisible ? "visible" : "hidden"}
                      variants={wordAnimation}
                    >
                      {word}
                    </motion.span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Animated underline */}
          <motion.div
            className="h-1 bg-gradient-to-r from-gray-800 to-gray-400 rounded-full mx-auto mt-12"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={lineAnimation}
          />

          {/* Letter-by-letter animation for tagline */}
          <motion.div
            className="mt-8 text-md md:text-xl text-gray-600"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            {Array.from("Supporting students every step of the way").map((letter, index) => (
              <motion.span
                key={index}
                custom={index}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={letterAnimation}
                className="inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute -bottom-16 -left-16 w-32 h-32 rounded-full bg-gray-100 opacity-50"
        initial={{ scale: 0 }}
        animate={isVisible ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 1, delay: 1.6 }}
      />

      <motion.div
        className="absolute top-24 -right-16 w-48 h-48 rounded-full bg-gray-100 opacity-50"
        initial={{ scale: 0 }}
        animate={isVisible ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 1, delay: 1.8 }}
      />
    </section>
  )
}

export default HeroSection

