import Image from 'next/image';
// import Link from 'next/link';
import React from 'react';
// import { BiPlusCircle } from "react-icons/bi";
// import { FaArrowRight } from 'react-icons/fa';

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
                <div className='absolute top-40 sm:top-40 md:top-48 lg:top-52'>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl  mb-2">
                        <span className='font-extrabold'>Nigeria&#39;s</span> Foremost
                    </h1>
                    <span className='text-3xl sm:text-4xl md:text-5xl font-bold mb-2'>
                        Preventive Health &
                    </span>

                    <p className="text-3xl sm:text-4xl md:text-5xl font-light mt-2">
                        Wellness Company! 
                    </p>                   
                </div>

                {/* Location Section */}
                {/* <div className="absolute left-0 lg:bottom-72 md:bottom-60 bottom-36 flex justify-between items-center bg-white space-x-5 px-4 sm:px-6 md:px-8 py-4 border rounded-tr-full rounded-br-full w-[400px] md:w-[600px] lg:w-[600px] ">
                    <div className='flex gap-6'>
                        <BiPlusCircle size={40} className='hidden md:flex mt-1 bg-[#2e1635] rounded-full border font-2xl p-2' />

                        <div>
                            <span className="font-extrabold uppercase text-xs sm:text-sm md:text-base text-gray-800">
                                Need Vaccination?
                            </span>

                            <p className="text-xs sm:text-sm font-medium md:text-lg text-gray-900">
                                Send us a message, let&#39;s get started
                            </p>
                        </div>
                    </div>

                    <Link
                        href="#"
                        className="text-white p-3 flex items-center border rounded-full bg-blue-600 transition duration-300 ease-in-out"
                    >
                        <FaArrowRight />
                    </Link>
                </div> */}
            </div>
        </div>
    );
};

export default HomeView;