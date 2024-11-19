import Image from 'next/image';
import React from 'react';
import { BiPlusCircle } from "react-icons/bi";
import { FaArrowRight } from 'react-icons/fa';

const HomeView = () => {
    return (
        <div className="relative w-full h-[550px] sm:h-[600px] md:h-[650px] lg:h-[750px]">
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
                <div className='absolute space-y-4 top-24 sm:top-28 md:top-36 lg:top-48'>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                        Transforming Lives,
                    </h1>
                    <span className='text-3xl sm:text-4xl md:text-5xl font-thin'>
                        Restoring Your Health
                    </span>

                    <p className="text-xs sm:text-sm md:text-base max-w-lg">
                        Embrace a world of comprehensive healthcare where your well-being takes
                        center stage. At Meca, we&#39;re dedicated to providing you with personalized and
                        compassionate medical services.
                    </p>

                    <a
                        href="#"
                        className="flex items-center justify-start w-[150px] sm:w-[180px] md:w-[200px] space-x-2 text-white bg-[#2e1635] hover:bg-[#451652] px-4 py-2 rounded-full transition duration-300 ease-in-out"
                    >
                        <FaArrowRight />
                        <span>Learn More</span>
                    </a>
                </div>

                {/* Location Section */}
                <div className="absolute left-0 bottom-12 sm:bottom-16 md:bottom-20 lg:bottom-28 flex items-center bg-white space-x-5 px-4 sm:px-6 md:px-8 py-2 border rounded-tr-full rounded-br-full max-w-xs sm:max-w-md lg:max-w-lg">
                    <BiPlusCircle size={40} className='bg-[#2e1635] rounded-full border font-2xl p-2' />

                    <div>
                        <span className="font-extrabold text-xs sm:text-xs md:text-base text-gray-800">FIND A LOCATION NEARBY</span>
                        
                        <p className="text-xs sm:text-sm font-thin md:text-base max-w-xs text-gray-600">
                            Hospa medical center operates more than 120 locations. Find the nearest...
                        </p>
                    </div>

                    <a
                        href="#"
                        className="text-white p-3 flex items-center border rounded-full bg-[#8cabe4] hover:bg-[#273c61] transition duration-300 ease-in-out"
                    >
                        <FaArrowRight />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HomeView;
