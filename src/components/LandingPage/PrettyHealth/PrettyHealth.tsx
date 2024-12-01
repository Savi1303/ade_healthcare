import React from 'react';
import PrettyCard from './PrettyCard/PrettyCard';
import { IoSettings } from 'react-icons/io5';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { BiPlusCircle } from 'react-icons/bi';
import Link from 'next/link';

const PrettyHealthCare = [
    {
        image: <IoSettings size={100} className="text-gray-300" />,
        title: 'Not Just Better Care, But A Better Experience',
        description:
            'At our medical center, we believe in providing not just better care but better experience overall. We understand that your journey to health.',
    },
    {
        image: <IoSettings size={100} className="text-gray-300" />,
        title: 'Not Just Better Care, But A Better Experience',
        description:
            'At our medical center, we believe in providing not just better care but better experience overall. We understand that your journey to health.',
    },
    {
        image: <IoSettings size={100} className="text-gray-300" />,
        title: 'Not Just Better Care, But A Better Experience',
        description:
            'At our medical center, we believe in providing not just better care but better experience overall. We understand that your journey to health.',
    },
];

const PrettyHealth = () => {
    return (
        <div className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-10">
                <div>
                    {/* Heading */}
                    <div className="text-center mb-10">
                        <h2 className="lg:text-md text-lg font-bold text-indigo-600 mb-4">
                            Why Choose Pretty Health
                        </h2>
                        <p className="text-gray-900 lg:text-4xl text-2xl lg:w-[450px] mx-auto sm:w-[345px] md:w-[345px]">
                            We Are Different to{' '}
                            <span className="text-gray-900 font-bold">Protect Your Health</span>
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 animate__animated animate__slideInUp">
                        {PrettyHealthCare.map((service, index) => (
                            <PrettyCard
                                key={index}
                                icon={service.image}
                                title={service.title}
                                description={service.description}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 lg:space-x-5 w-full animate__animated animate__slideInUp">
                    <div className="lg:w-1/2 flex flex-col bg-indigo-50 p-5 rounded-lg">
                        <p className="text-lg lg:text-xs text-indigo-500 font-bold">LAB TEST</p>

                        <h3 className="text-2xl w-full lg:w-[350px] font-thin mt-10">
                            We Have Lab Test Facilities{' '}
                            <span className="font-bold">Book Yours Today</span>
                        </h3>

                        <div className="flex flex-col lg:flex-row mt-20 gap-5 w-full">
                            {/* Card 1 */}
                            <div className="bg-white p-5 rounded-lg w-full lg:w-1/2 shadow-md space-y-5 flex flex-col items-start">
                                {/* Discount Badge */}
                                <span className="self-end text-xs bg-indigo-100 text-[#5fa759] px-3 py-1 rounded-3xl">
                                    40% Off
                                </span>

                                {/* Image Section */}
                                <span className="mt-10">
                                    <Image
                                        src="/Pretty-Health Website/Images/image 15.png"
                                        alt="X-Ray Icon"
                                        width={50}
                                        height={50}
                                        className="object-contain"
                                    />
                                </span>

                                {/* Content Section */}
                                <p className="text-lg font-semibold text-gray-700">X-Rays</p>
                                <span className="text-gray-500 text-xs font-thin w-[200px]">
                                    We do all kinds of MRI & ICT Scan for our patients
                                </span>

                                {/* Pricing Section */}
                                <span className="text-xs font-thin text gray-600">
                                    STARTING FROM{' '}
                                    <span className="text-gray-800 font-extrabold">N3000</span>
                                </span>

                                {/* CTA Section */}
                                <span className="flex items-center border space-x-2 text-white px-3 py-1 rounded-3xl bg-[#3cb5d3] cursor-pointer hover:bg-[#349bb3] focus:ring-2 focus:ring-[#3cb5d3] focus:outline-none">
                                    <FaArrowRight
                                        size={10}
                                        className="flex text-center text-black bg-white rounded-full p-3"
                                    />
                                    <span className="text-sm font-medium">Schedule A Test</span>
                                </span>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white p-5 rounded-lg w-full lg:w-1/2 shadow-md space-y-5 flex flex-col items-start">
                                {/* Discount Badge */}
                                <span className="self-end text-xs bg-indigo-100 text-[#5fa759] px-3 py-1 rounded-3xl">
                                    40% Off
                                </span>

                                {/* Image Section */}
                                <span className="mt-10">
                                    <Image
                                        src="/Pretty-Health Website/Images/image 15.png"
                                        alt="X-Ray Icon"
                                        width={50}
                                        height={50}
                                        className="object-contain"
                                    />
                                </span>

                                {/* Content Section */}
                                <p className="text-lg font-semibold text-gray-700">X-Rays</p>
                                <span className="text-gray-500 text-xs font-thin w-[200px]">
                                    We do all kinds of MRI & ICT Scan for our patients
                                </span>

                                {/* Pricing Section */}
                                <span className="text-xs font-thin text-gray-600">
                                    STARTING FROM{' '}
                                    <span className="text-gray-800 font-extrabold">N3000</span>
                                </span>

                                {/* CTA Section */}
                                <span className="flex items-center border space-x-2 text-white px-3 py-1 rounded-3xl bg-[#3cb5d3] cursor-pointer hover:bg-[#349bb3] focus:ring-2 focus:ring-[#3cb5d3] focus:outline-none">
                                    <FaArrowRight
                                        size={10}
                                        className="flex text-center text-black bg-white rounded-full p-3"
                                    />
                                    <span className="text-sm font-medium">Schedule A Test</span>
                                </span>
                            </div>
                        </div>

                        <input
                            title="range"
                            type="range"
                            min="0"
                            max="100"
                            step="1"
                            defaultValue="30"
                            className="mt-20 w-full h-1 bg-blue-500 rounded-lg disabled:bg-blue-500 cursor-not-allowed appearance-none"
                            style={{
                                background: `linear-gradient(to right, #3b82f6 ${30}%, #e5e7eb ${30}%)`,
                            }}
                            disabled
                        />
                    </div>

                    {/* Image Section */}
                    <div className="relative w-full lg:w-1/2">
                        <Image
                            src="/Pretty-Health Website/Images/Rectangle 6.png"
                            alt=""
                            width={600}
                            height={0}
                            layout="responsive"
                        />

                        <div className="absolute bottom-20 flex items-center bg-white space-x-5 px-5 py-2 border rounded-lg">
                            <BiPlusCircle size={44} className="bg-[#fdfdfd] rounded-full border font-2xl" />

                            <div>
                                <span className="font-extrabold text-xs text-gray-800 uppercase">
                                    Precision Proficiency Award
                                </span>

                                <p className="text-xs max-w-xs text-gray-600 line-clamp-1 md:line-clamp-3">
                                    Awarded to Our Lab Test Center for consistency achieving unparalleled precision in test results.
                                </p>
                            </div>

                            <Link
                                href="#"
                                className="text-white p-3 flex items-center border rounded-full bg-blue-600 hover:bg-[#273c61] transition duration-300 ease-in-out"
                            >
                                <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrettyHealth;