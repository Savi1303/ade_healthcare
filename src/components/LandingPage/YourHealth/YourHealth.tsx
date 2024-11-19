import Image from 'next/image';
import React from 'react';
import { PiQuotes } from "react-icons/pi";
import { FaArrowRight, FaStar } from 'react-icons/fa';
import 'animate.css';


const YourHealth = () => {
    return (
        <div className="py-16 bg-gray-50">
            <div className="container mx-auto flex flex-col space-y-10 px-6 md:px-10">
                {/* Header Section */}
                <div className="text-center md:text-left animate__animated animate__slideInRight">
                    <span className="text-xs font-bold text-indigo-600">
                        Your Health is Our Top Priority
                    </span>
                    <p className="text-2xl md:text-3xl text-gray-900 font-thin mt-2 md:w-[650px] mx-auto md:mx-0 leading-relaxed">
                        Our track record speaks for itself. Many individuals have chosen{' '}
                        <span className="text-indigo-400 font-thin">
                            our medical center and have had positive, transformative experiences.
                        </span>
                    </p>
                </div>

                {/* Content Section */}
                <div className="flex flex-col lg:flex-row gap-6 animate__animated animate__slideInUp">
                    {/* Left Column */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        {/* Card Section */}
                        <div className="flex items-center gap-4 p-6 bg-[#edcaf1] hover:bg-opacity-90 cursor-pointer rounded-2xl shadow-lg transition duration-300 ease-in-out">
                            {/* Image */}
                            <Image
                                src="/Pretty-Health Website/Images/Frame 37.png"
                                alt="HIPAA COMPLIANT"
                                width={60}
                                height={60}
                                className="w-12 h-12 object-contain"
                            />
                            {/* Content */}
                            <div className="flex flex-col space-y-1">
                                <span className="text-sm font-bold text-gray-800">HIPAA COMPLIANT</span>
                                <p className="text-sm text-gray-600">
                                    Pretty Health provides award-winning quality care.
                                </p>
                                <a
                                    href="#"
                                    className="flex items-center space-x-2 text-indigo-600 font-medium hover:text-indigo-800 transition duration-200 ease-in-out"
                                >
                                    <FaArrowRight />
                                    <span>Read More</span>
                                </a>
                            </div>
                        </div>

                        {/* Rating Section */}
                        <div className="flex flex-col items-center">
                            {/* Image */}
                            <div className="border border-gray-300 rounded-lg overflow-hidden">
                                <Image
                                    src="/Pretty-Health Website/Images/Rectangle 5.png"
                                    alt="Google Ratings"
                                    width={600}
                                    height={400}
                                />
                            </div>
                            {/* Rating Info */}
                            <div className="mt-4 text-center p-6 bg-[#9fc1dd] hover:bg-opacity-90 cursor-pointer rounded-2xl shadow-lg transition duration-300 ease-in-out">
                                <p className="text-sm font-bold text-gray-900 uppercase">
                                    Average Google Ratings
                                </p>
                                <div className="flex items-center space-x-2 mt-2 justify-center">
                                    <FaStar className="text-[#52aa40]" size={26} />
                                    <span className="text-gray-800 text-5xl font-bold">4.9</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        {/* Image */}
                        <div className="flex justify-center">
                            <div className="rounded-lg overflow-hidden">
                                <Image
                                    src="/Pretty-Health Website/Images/Rectangle 4.png"
                                    alt="Healthcare Image"
                                    width={700}
                                    height={300}
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Testimonial */}
                        <div className="space-y-6 p-6 bg-[#c8dcec] hover:bg-opacity-90 cursor-pointer rounded-2xl shadow-lg transition duration-300 ease-in-out">
                            <PiQuotes className="transform rotate-180 text-gray-600" size={48} />
                            <p className="text-gray-600 text-sm leading-relaxed">
                                &#34;I had a great experience at this healthcare clinic. I was seen quickly, and the doctor
                                was able to diagnose and treat my condition very patiently.&#34;
                            </p>
                            <div className="flex items-center space-x-4">
                                <Image
                                    src="/Pretty-Health Website/Images/Photo by Etty Fidele.png"
                                    alt="Jane Ronan"
                                    width={60}
                                    height={60}
                                    className="w-12 h-12 rounded-full object-cover border border-gray-300"
                                />
                                <div>
                                    <h3 className="text-gray-800 font-semibold">Jane Ronan</h3>
                                    <p className="text-sm text-gray-600">Cardio Patient</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YourHealth;
