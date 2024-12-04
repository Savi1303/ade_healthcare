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
                    layout="intrinsic" 
                    width={500}
                    height={300}
                    style={{
                        position: 'absolute',
                        height: '100%%',
                        width: '100%',
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: 'cover',
                        color: 'transparent'
                    }}
                />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-4 sm:px-8 lg:px-12 space-y-6">
                <div className='absolute space-y-4 top-16 sm:top-20 md:top-32 lg:top-32'>
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

                    <button className="px-4 py-2 flex items-center gap-2 rounded-full bg-indigo-600 hover:bg-indigo-800 text-white w-fit">
                        <div className="flex justify-center items-center bg-white text-blue-500 w-4 h-4 rounded-full">
                            <FaArrowRight className="w-2 h-2" />
                        </div>
                        <p>Learn More</p>
                    </button>
                </div>

                {/* Location Section */}
                <div className="absolute left-0 bottom-44 sm:bottom-16 md:bottom-40 lg:bottom-52 flex items-center bg-white space-x-5 px-4 sm:px-6 md:px-8 py-2 border rounded-tr-full rounded-br-full max-w-xs sm:max-w-md lg:max-w-lg">
                    <BiPlusCircle size={40} className='hidden md:flex bg-[#2e1635] rounded-full border font-2xl p-2' />

                    <div>
                        <span className="font-extrabold text-xs sm:text-sm md:text-base text-gray-800">FIND A LOCATION NEARBY</span>

                        <p className="text-xs sm:text-sm font-thin md:text-base max-w-xs text-gray-600 line-clamp-1 md:line-clamp-2">
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