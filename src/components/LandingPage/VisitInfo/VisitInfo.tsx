import React from 'react';
import CardVisit from './Card/CardVisit';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import 'animate.css';

const colors = ['bg-[#5183e0]', 'bg-[#8aa9e0]', 'bg-[#cca7ce]', 'bg-[#d69c75]'];

const VisitInfo = () => {
    return (
        <div className="p-6 sm:p-8 lg:p-10 bg-white">
            <div className="flex flex-col space-y-10">
                {/* Cards Section */}
                <div className="flex flex-wrap gap-5 justify-center sm:justify-start animate__animated animate__bounceInRight">
                    {colors.map((color, index) => (
                        <CardVisit key={index} color={color} />
                    ))}
                </div>

                {/* About Section */}
                <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 animate__animated animate__bounceInLeft">
                    {/* Image Section */}
                    <div className="w-full lg:w-1/2">
                        <Image
                            src="/Pretty-Health Website/Images/Union.png"
                            alt="UnionPix"
                            width={500}
                            height={200}
                            className="mx-auto lg:mx-0"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2 space-y-6 text-gray-800">
                        <span className="text-sm font-semibold text-indigo-400">
                            About PrettyHealth
                        </span>

                        <h2 className="text-xl sm:text-2xl lg:text-4xl font-thin text-gray-800 leading-tight">
                            We Provide Finest Patient&#39;s {' '} <br />
                            <span className='text-black font-black'>
                                Care & Amenities
                            </span>
                        </h2>

                        <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                            Embrace a world of comprehensive healthcare where your well-being takes
                            center stage. At PrettyHealth, we&#39;re dedicated to providing you with
                            personalized and compassionate medical services.
                        </p>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base text-gray-700">
                            <li>✔️ Seamless Care</li>
                            <li>✔️ Warm and Welcoming Environment</li>
                            <li>✔️ Comprehensive Care</li>
                            <li>✔️ Expert Doctors</li>
                            <li>✔️ Patient-Centered Care</li>
                            <li>✔️ Personalized Approach</li>
                            <li>✔️ Cutting-Edge Technology</li>
                            <li>✔️ Positive Reviews</li>
                        </ul>

                        <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                            Embrace a world of comprehensive healthcare where your well-being takes
                            center stage. At PrettyHealth, we&#39;re dedicated to providing you with
                            personalized and compassionate medical services.
                        </p>

                        <a
                            href="#"
                            className="flex items-center space-x-2 text-white bg-[#2e1635] hover:bg-[#451652] px-4 py-2 rounded-full transition duration-300 ease-in-out w-[150px] sm:w-[180px] lg:w-[200px]"
                        >
                            <FaArrowRight />
                            <span>Learn More</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VisitInfo;
