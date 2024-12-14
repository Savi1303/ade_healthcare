'use client'
import React, { useState, useEffect } from 'react';
import PrettyCard from './PrettyCard/PrettyCard';
import { IoSettings } from 'react-icons/io5';
// import Image from 'next/image';
// import { FaArrowRight } from 'react-icons/fa';
// import { BiPlusCircle } from 'react-icons/bi';
// import Link from 'next/link';

const PrettyHealthCare = [
    {
        image: <IoSettings size={100} className="text-gray-300" />,
        title: 'Holistic Preventive Care',
        description:
            'From vaccinations to screenings, wellness programs, and educational campaigns, we offer a full spectrum of services to prevent illness before it starts.',
    },
    {
        image: <IoSettings size={100} className="text-gray-300" />,
        title: 'Largest Private Vaccination Provider',
        description:
            'We hold the distinction of being the largest private sector provider of vaccination services in Nigeria, trusted by individuals, families, and corporations alike.',
    },
    {
        image: <IoSettings size={100} className="text-gray-300" />,
        title: 'Reach and Mobility',
        description:
            'With a strong presence in Nigeria and flexible health delivery at our fingertips, we bring healthcare services right to your doorstep.',
    },
];

const PrettyHealth = () => {
    const [isMediumScreen, setIsMediumScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && window.innerWidth < 1024) {
                setIsMediumScreen(true);
            } else {
                setIsMediumScreen(false);
            }
        };

        handleResize(); 
        window.addEventListener('resize', handleResize); 
        return () => window.removeEventListener('resize', handleResize); 
    }, []);

    return (
        <div className="py-10 bg-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-10">
                <div>
                    {/* Heading */}
                    <div className="text-center mb-10">
                        <h2 className="text-lg font-bold text-blue-600 mb-4">
                            Why Choose Pretty Health
                        </h2>
                        <p className="text-gray-900 lg:text-4xl text-2xl lg:w-[450px] mx-auto sm:w-[345px] md:w-[345px]">
                            We Are Different to{' '}
                            <span className="text-gray-900 font-extrabold">Protect Your Health</span>
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-6">
                        {PrettyHealthCare.map((service, index) => (
                            <PrettyCard
                                key={index}
                                icon={service.image}
                                title={service.title}
                                description={service.description}
                                className={index === PrettyHealthCare.length - 1 && isMediumScreen ? 'col-span-1 md:col-span-3 md:flex md:justify-center' : ''}
                            />
                        ))}
                    </div>
                </div>

                {/* Lab Test Section */}
                {/* <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 lg:space-x-5 w-full mt-10"> */}
                    {/* <div className="lg:w-1/2 flex flex-col bg-indigo-50 p-5 rounded-lg"> */}
                        {/* <p className="text-lg text-blue-600 font-bold">LAB TEST</p> */}

                        {/* <h3 className="text-4xl w-full lg:w-[600px] font-thin">
                            We Have Lab Test Facilities{' '}
                            <span className="font-bold">Book Yours Today</span>
                        </h3> */}

                        {/* <div className="flex flex-col lg:flex-row mt-10 gap-5 w-full"> */}
                            {/* Card 1 */}
                            {/* <div className="bg-white p-5 rounded-lg w-full lg:w-1/2 shadow-md space-y-5 flex flex-col items-start"> */}
                                {/* Image Section */}
                                {/* <span className="mt-10">
                                    <Image
                                        src="/Pretty-Health Website/Images/image 15.png"
                                        alt="X-Ray Icon"
                                        width={50}
                                        height={50}
                                        className="object-contain"
                                    />
                                </span> */}

                                {/* Content Section */}
                                {/* <p className="text-lg font-semibold text-gray-700">X-Rays</p> */}
                                {/* <span className="text-gray-500 lg:text-xs md:text-lg font-thin sm:w-[300px] md:w-[450px] lg:w-[200px]">
                                    We do all kinds of MRI & CT Scan for our patients
                                </span> */}

                                {/* Pricing Section */}
                                {/* <span className="lg:text-xs md:text-lg font-thin text-gray-600">
                                    STARTING FROM{' '}
                                    <span className="text-gray-800 lg:text-xs md:text-lg font-extrabold">N3000</span>
                                </span> */}

                                {/* CTA Section */}
                                {/* <button className="px-4 py-2 flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white w-fit">
                                    <div className="flex justify-center items-center bg-white text-blue-600 w-4 h-4 rounded-full">
                                        <FaArrowRight className="w-2 h-2" />
                                    </div>
                                    <p className='lg:text-xs md:text-lg'>Schedule A Test</p>
                                </button> */}
                            {/* </div> */}

                            {/* Card 2 */}
                            {/* <div className="bg-white p-5 rounded-lg w-full lg:w-1/2 shadow-md space-y-5 flex flex-col items-start"> */}
                                {/* Image Section */}
                                {/* <span className="mt-10">
                                    <Image
                                        src="/Pretty-Health Website/Images/image 15.png"
                                        alt="X-Ray Icon"
                                        width={50}
                                        height={50}
                                        className="object-contain"
                                    />
                                </span> */}

                                {/* Content Section */}
                                {/* <p className="text-lg font-semibold text-gray-700">X-Rays</p> */}
                                {/* <span className="text-gray-500 lg:text-xs md:text-lg font-thin sm:w-[300px] md:w-[450px] lg:w-[200px]">
                                    We do all kinds of MRI & CT Scan for our patients
                                </span> */}

                                {/* Pricing Section */}
                                {/* <span className="lg:text-xs md:text-lg font-thin text-gray-600">
                                    STARTING FROM{' '}
                                    <span className="text-gray-800 lg:text-xs md:text-lg font-extrabold">N3000</span>
                                </span> */}

                                {/* CTA Section */}
                                {/* <button className="px-4 py-2 flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white w-fit">
                                    <div className="flex justify-center items-center bg-white text-blue-600 w-4 h-4 rounded-full">
                                        <FaArrowRight className="w-2 h-2" />
                                    </div>
                                    <p className='lg:text-xs md:text-lg'>Schedule A Test</p>
                                </button> */}
                            {/* </div> */}
                        {/* </div> */}

                        {/* <input
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
                        /> */}
                    {/* </div> */}

                    {/* Image Section */}
                    {/* <div className="relative w-full lg:w-1/2"> */}
                        {/* <Image
                            src="/Pretty-Health Website/Images/Rectangle 6.png"
                            alt=""
                            width={600}
                            height={0}
                            layout="responsive"
                            className=''
                        /> */}

                        {/* <div className="absolute bottom-20 left-0 flex items-center bg-white space-x-5 px-10 py-2 border rounded-br-full rounded-tr-full">
                            <BiPlusCircle size={44} className="bg-[#fdfdfd] rounded-full border font-2xl hidden md:flex" />

                            <div>
                                <span className="font-extrabold text-[11px] md:text-[15px] lg:text-xs text-gray-800 uppercase">
                                    Precision Proficiency Award
                                </span>

                                <p className="lg:text-xs text-lg max-w-xs text-gray-600 line-clamp-1 lg:line-clamp-none">
                                    Awarded to our Lab Test Center for consistency achieving unparalleled precision in test results.
                                </p>
                            </div>

                            <Link
                                href="#"
                                className="text-white p-3 flex items-center border rounded-full bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out"
                            >
                                <FaArrowRight />
                            </Link>
                        </div> */}
                    {/* </div> */}
                {/* </div> */}
            </div>
        </div>
    );
};

export default PrettyHealth;
