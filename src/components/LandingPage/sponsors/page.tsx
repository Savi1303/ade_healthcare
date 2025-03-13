"use client";
import Image from "next/image";
import React from "react";

const LogoScroller = () => {
  const logos = [
    "/Pretty-Health Website/new_images/s1.jpg",
    "/Pretty-Health Website/new_images/s2.jpg",
    "/Pretty-Health Website/new_images/s3.jpg",
    "/Pretty-Health Website/new_images/s5.jpg",
    "/Pretty-Health Website/new_images/s6.jpg",
    "/Pretty-Health Website/new_images/s7.jpg",
    "/Pretty-Health Website/new_images/s8.jpg",
    "/Pretty-Health Website/new_images/s9.jpg",
  ];

  return (
    <div className="lg:min-h-32 md:min-h-36 sm:min-h-40 flex items-center justify-center bg-white">
      <div className="overflow-hidden relative w-full">
        <div className="flex animate-scroll space-x-16">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-none w-16 h-20 md:w-32 md:h-24 mx-8"
            >
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={128}
                height={128}
                className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-150"
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
@media screen and (max-width: 1100px)  and (min-width: 700px) {
  
    @keyframes scroll {
              0% {
                transform: translateX(0%);
              }
              100% {
                transform: translateX(-150%);
              }
            }
}

@media screen and (max-width: 701px)  and (min-width: 7px) {
  
  @keyframes scroll {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-250%);
            }
          }
}
      `}</style>
    </div>
  );
};

export default LogoScroller;
