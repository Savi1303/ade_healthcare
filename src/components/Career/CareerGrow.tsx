import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiPlusCircle } from 'react-icons/bi'
import { FaArrowRight } from 'react-icons/fa'

function CareerGrow() {
    return (
        <div className=''>
            <div className='flex flex-col lg:flex-row justify-between items-center w-full bg-blue-900 py-24 px-4 sm:px-8 md:px-0 lg:px-0'>
                {/* Image Section */}
                <div className='w-full lg:w-1/2 flex justify-center mb-8 md:mb-7'>
                    <Image
                        src='/Pretty-Health Website/new_images/Rectangle 817.png'
                        alt='Career Image'
                        width={600}
                        height={100}
                        className='w-[600px] sm:w-[600px] md:w-[600px] lg:w-[600px] h-auto'
                    />
                </div>

                {/* Text Section */}
                <div className='w-full lg:w-1/2 text-white lg:px-0 px-4 md:px-20'>
                    <h2 className='text-2xl sm:text-3xl uppercase font-bold'>
                        Grow with us
                    </h2>

                    <p className='text-sm sm:text-base md:text-lg text-gray-100 mt-4 lg:pr-20 text-justify'>
                        At Pretty Health, we are passionate about empowering individuals to live healthier lives through
                        preventive care. As leaders in the healthcare industry, we&#39;re dedicated to providing innovative
                        solutions that make a real impact.
                    </p>

                    <p className='text-sm sm:text-base md:text-lg text-gray-100 mt-4 lg:pr-20 text-justify'>
                        We&#39;re looking for forward-thinking, compassionate professionals to join our
                        mission. Whether you&#39;re in healthcare, technology, or customer service, you&#39;ll play a
                        vital role in helping people live better, healthier lives. Explore exciting career opportunities
                        with us and become part of a team that&#39;s transforming the future of preventive healthcare.
                    </p>

                    <p className='text-sm sm:text-base md:text-lg text-gray-100 mt-4 mb-6'>
                        Together, we can make health happen.
                    </p>

                    {/* CTA Button */}
                    <div className='flex lg:justify-end justify-center'>
                    <div className="flex justify-between items-center bg-white space-x-5 px-4 sm:px-6 md:px-8 py-4 border rounded-full lg:rounded-tl-full lg:rounded-tr-none lg:rounded-br-none lg:rounded-bl-full w-full max-w-[400px] md:max-w-[600px] lg:max-w-[450px]">
                        <div className='flex gap-6'>
                            <BiPlusCircle size={40} className='flex mt-1 bg-[#2e1635] rounded-full border font-2xl p-2' />

                            <div className='flex items-center'>
                                <span className="font-extrabold uppercase text-xs sm:text-sm md:text-base text-gray-800">
                                    Join Our Talent Community
                                </span>
                            </div>
                        </div>

                        <Link
                            href="https://wa.me/message/KEAP2TUQOW6EN1"
                            target="_blank" 
  rel="noopener noreferrer"
                            className="text-white p-3 flex items-center border rounded-full bg-blue-600 transition duration-300 ease-in-out"
                        >
                            <FaArrowRight />
                        </Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CareerGrow;
