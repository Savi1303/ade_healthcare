'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import LabTestCard from './LabTestCard';
import AwardBanner from './AwardBanner';
import Link from "next/link";

const PrettyHealth = () => {
    useEffect(() => {
        const handleResize = () => window.innerWidth >= 768 && window.innerWidth < 1024;
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="py-6">
            <div className="mx-auto sm:px-0">
                {/* Lab Test Section */}
                <div className="flex flex-col lg:flex-row justify-between space-y-5 lg:space-y-0 lg:space-x-5 w-full animate__animated animate__slideInUp">
                    <div className="lg:w-1/2 flex space-y-9 flex-col bg-cover p-5 rounded-lg relative PrettyHealth">
                        <div className="absolute inset-0 bg-gray-300 opacity-50 rounded-lg"></div>
                        <div>
                            <p className="text-xs text-indigo-500 font-bold relative z-10">LAB TEST</p>
                            <h3 className="lg:text-4xl w-full lg:w-[550px] font-thin mt-3 relative z-10">
                                We Have Lab Test Facilities <span className="font-extrabold">Book Yours Today</span>
                            </h3>
                        </div>

                        <div className="flex flex-col md:flex-row mt-20 gap-5 w-full relative z-10">
                            <LabTestCard
                                imgSrc="/Pretty-Health Website/Images/image 15.png"
                                title="Food Handlers Test"
                                description="We do all kinds of MRI & ICT Scan for our patients"
                                price="&#8358;12,550"
                            />
                            <LabTestCard
                                imgSrc="/Pretty-Health Website/Images/image 15.png"
                                title="Pre-Nupital Test"
                                description="We do all kind of MRI & CT Scan for our patient "
                                price="&#x20a6;14,850"
                            />
                        </div>

                        <input
                            title="range"
                            type="range"
                            min="0"
                            max="100"
                            step="1"
                            defaultValue="30"
                            className="mt-20 w-full h-1 bg-blue-500 rounded-lg appearance-none cursor-not-allowed relative z-10"
                            disabled
                        />

                        <div className='hidden lg:flex absolute bottom-0 -left-0 w-full'>
                            <Link href="/diagnostics" passHref>
                                <AwardBanner title='Book More' />
                            </Link>
                        </div>

                    </div>


                    {/* Image and Award Section */}
                    <div className="relative w-full lg:w-1/2">
                        {/* Image */}
                        <Image
                            src="/Pretty-Health Website/new_images/Rectangle 6.png"
                            alt="Lab Image"
                            width={600}
                            height={600}
                            layout="responsive"
                            className="object-cover"
                        />

                        <div className="relative z-20">
                            <Link href="/vaccine" passHref>
                                <AwardBanner
                                    title='Need Vaccination? Click to Book Now!'
                                />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PrettyHealth;
