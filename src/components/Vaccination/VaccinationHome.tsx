'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiPlusCircle } from 'react-icons/bi';
import { FaArrowRight } from 'react-icons/fa';

function VaccinationHome() {
    return (
        <div className="relative w-full h-[550px] sm:h-[600px] md:h-[650px] lg:h-[650px]">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full -top-7 -z-10">
                <Image
                    src="/Pretty-Health Website/new_images/Group 20647.png"
                    alt="homeView"
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-4 sm:px-8 lg:px-12 space-y-6">
                <div className='absolute top-40 sm:top-40 md:top-32 lg:top-36 '>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl  mb-3 lg:w-[510px]">
                        We are the largest provider of private {''}<span className='font-extrabold'>vaccination services</span>{''} in Nigeria
                    </h1>

                    <span>
                        Making vaccination work for you, one person at a time
                    </span>
                </div>

                {/* Location Section */}
                <div className="absolute left-0 lg:bottom-44 md:bottom-60 bottom-36 flex justify-between items-center bg-white space-x-5 px-4 sm:px-6 md:px-8 py-4 border rounded-tr-full rounded-br-full w-[400px] md:w-[600px] lg:w-[600px] ">
                    <div className='flex items-center gap-6'>
                        <BiPlusCircle size={50} className='hidden md:flex mt-1 bg-[#2e1635] rounded-full border font-2xl p-2' />
                        
                        <span className="font-extrabold uppercase text-xs lg:text-lg sm:text-sm md:text-base text-gray-800">
                                Book Your Vaccination Today!
                        </span>
                    </div>

                    <Link
                        href='https://wa.me/message/KEAP2TUQOW6EN1' 
                        target='_blank'
                        className="text-white p-3 flex items-center border rounded-full bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out"
                    >
                        <FaArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default VaccinationHome;
