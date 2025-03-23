import Link from 'next/link';
import React from 'react';
import { BiPlusCircle } from 'react-icons/bi';
import { FaArrowRight } from 'react-icons/fa';

function CareerTalent() {
    return (
        <div className='py-10 px-4 sm:px-8 md:px-0 lg:px-20'>
            <div className='flex flex-col items-center justify-center bg-[#c2934c] py-16 sm:py-24 md:py-28 mx-4 sm:mx-12 md:mx-24 rounded-3xl gap-4'>
                <h2 className='font-bold text-2xl sm:text-3xl md:text-4xl text-blue-950 text-center'>
                    Join Our <span className='font-medium'>Talent</span> Community
                </h2>

                <h2 className='text-center text-sm sm:text-lg md:text-xl font-thin text-gray-950 max-w-[90%] sm:max-w-[530px]'>
                    Join our Talent Network today and stay up-to-date on our openings as they continue to become available!
                </h2>

                <div className="flex justify-between items-center bg-white space-x-3 sm:space-x-5 px-4 sm:px-6 md:px-8 py-3 sm:py-4 border rounded-full w-full max-w-xs sm:max-w-md md:max-w-lg">
                    <div className='flex gap-4 sm:gap-6'>
                        <BiPlusCircle size={30} className='text-white flex mt-1 bg-blue-950 rounded-full border p-2' />

                        <div className='flex items-center'>
                            <span className="font-bold text-xs sm:text-sm md:text-base text-gray-800">
                                Join Our Talent Community
                            </span>
                        </div>
                    </div>

                    <Link
                        href="https://wa.me/message/KEAP2TUQOW6EN1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white p-2 sm:p-3 flex items-center border rounded-full hover:bg-blue-700 bg-blue-600 transition duration-300 ease-in-out"
                    >
                        <FaArrowRight size={16} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CareerTalent;
