import React from 'react';
import CardVisit from './Card/CardVisit';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const colors = [
    'bg-[#5183e0]',
    'bg-[#8aa9e0]',
    'bg-[#cca7ce]',
    'bg-[#d69c75]',
];

const VisitInfo = () => {
    return (
        <div className="p-6 sm:p-8 lg:p-10 bg-white">
            <div className="flex flex-col space-y-10">
                {/* Cards Section */}
                <div className="flex flex-wrap gap-2 justify-center sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 border rounded-3xl border-gray-400 p-5">
                    {colors.map((color, index) => (
                        <CardVisit key={index} color={color} />
                    ))}
                </div>


                {/* About Section */}
                <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 animate__animated animate__bounceInLeft">
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2">
                        <Image
                            src="/Pretty-Health Website/Images/Union.png"
                            alt="UnionPix"
                            width={600}
                            height={270}
                            className="mx-auto lg:mx-0"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 space-y-6 text-gray-800">
                        <span className="text-lg font-semibold text-blue-600">
                            About PrettyHealth
                        </span>

                        <h2 className="text-xl sm:w-[350px] md:w-[550px] lg:w-[550px] sm:text-2xl lg:text-4xl font-thin text-gray-800 leading-tight">
                            We are the largest provider of {' '}
                            <span className="text-black font-black">
                            private vaccination services
                            </span> {' '} 
                            in Nigeria
                        </h2>

                        <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                            Making vaccination work for you, one person at a time 
                        </p>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base text-gray-700">
                            <li>✔️ Individual Vaccination</li>
                            <li>✔️ Group Vaccination</li>
                            <li>✔️ Travel Vaccination</li>
                            <li>✔️ Easy Bookings</li>
                            <li>✔️ Home Vaccination</li>
                            <li>✔️ Cutting-Edge Technology</li>
                            <li>✔️ Expert Healthcare Workers</li>
                            <li>✔️ Positive Reviews</li>
                        </ul>

                        <button className="px-4 py-2 flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white w-fit">
                            <div className="flex justify-center items-center bg-white text-blue-600 w-4 h-4 rounded-full">
                                <FaArrowRight className="w-2 h-2" />
                            </div>
                            <p className='text-sm'>Learn More</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisitInfo;