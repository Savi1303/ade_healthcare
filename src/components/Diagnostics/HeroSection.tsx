import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiPlusCircle } from 'react-icons/bi'
import { FaArrowRight } from 'react-icons/fa'

function HeroSection() {
  return (
    <div className='flex flex-col justify-center items-center py-12 gap-12 px-4 sm:px-6 md:px-8 text-center'>
      <h2 className='text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight'>
        High Precision Testing, Reliable Results
      </h2>

      <div className="flex justify-between items-center w-full max-w-xs sm:max-w-md md:max-w-lg bg-white space-x-5 px-4 sm:px-6 md:px-8 py-4 shadow-md rounded-full">
        <div className='flex gap-4 sm:gap-6'>
          <BiPlusCircle
            size={40}
            className='flex mt-1 bg-blue-950 rounded-full text-white border font-2xl p-2'
          />

          <div className='text-left'>
            <span className="font-extrabold uppercase text-xs sm:text-sm md:text-base text-gray-800">
              Book your test
            </span>

            <p className="text-xs sm:text-sm text-gray-700">
              Choose
            </p>
          </div>
        </div>

        <Link
          href="https://wa.me/message/KEAP2TUQOW6EN1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white p-3 sm:p-4 flex items-center border rounded-full bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out"
        >
          <FaArrowRight />
        </Link>
      </div>

      <div className='w-full max-w-3xl px-4'>
        <Image
          src='/Pretty-Health Website/new_images/Rectangle 6298.png'
          alt='Career Image'
          width={1000}
          height={500}
          layout="responsive"
        />
      </div>
    </div>
  )
}

export default HeroSection;
