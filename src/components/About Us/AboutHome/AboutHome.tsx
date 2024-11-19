import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { PiHeartbeatBold } from "react-icons/pi";
import { TbCalendarTime } from "react-icons/tb";

const AboutHome = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center bg-gray-100 bg-opacity-90">
                {/* Background Image */}
                <Image
                    src="/Pretty-Health Website/Images/Group 20650.png"
                    alt="Background Image"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 -z-5 "
                />

                {/* Foreground Content */}
                <div className="absolute flex flex-col md:flex-row justify-center items-center px-6 md:px-32 w-full space-y-6 md:space-y-0">
                    {/* Top Image */}
                    <div className="w-full md:w-1/2 md:flex justify-center hidden">
                        <Image
                            src="/Pretty-Health Website/Images/Group 7.png"
                            alt="Overlay Image"
                            width={700}
                            height={100}
                            className=''
                        />
                    </div>

                    {/* Text Content */}
                    <div className="w-full md:w-1/2 flex flex-col space-y-4 md:space-y-6 text-center md:text-left">
                        <h3 className="text-3xl md:text-5xl font-bold text-white">
                            100,000+ Patients
                        </h3>
                        <span className="text-xl md:text-3xl font-thin text-white">
                            Trust in Our Clinic
                        </span>
                        <p className="mt-4 text-gray-800 text-sm font-medium">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus animi 
                            porro non minus soluta illo, perferendis vitae veniam, similique eligendi 
                            molestias dignissimos commodi totam earum harum, culpa alias nam.
                        </p>

                        {/* Button */}
                        <button className="mt-6 flex items-center text-sm px-4 py-2 text-indigo-600 bg-white rounded-full w-[150px] transition hover:bg-indigo-600 hover:text-white">
                            <FaArrowRight className="mr-2" />
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            {/* Info Section */}
            <div className="px-4 md:px-20 mt-8">
                <div className="flex flex-col md:flex-row border rounded-lg bg-[#250c2c] text-white p-6 md:p-10 space-y-6 md:space-y-0 md:space-x-5">
                    {/* Emergency Services */}
                    <div className="w-full md:w-1/2 space-y-5">
                        <h2 className="flex items-center gap-2 text-xl md:text-2xl font-semibold">
                            <PiHeartbeatBold size={30} />
                            Emergency Services
                        </h2>
                        <p className="text-sm md:text-base text-gray-100">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ullam asperiores eveniet, 
                            accusamus explicabo exercitationem. Ipsa aspernatur quam accusantium eveniet repudiandae, 
                            molestias vitae.
                        </p>
                        <h4 className="text-lg md:text-2xl font-bold">
                            Call: <span className="text-indigo-300">0-123-456-7890</span>
                        </h4>
                    </div>

                    {/* Opening Hours */}
                    <div className="w-full md:w-1/2 space-y-5">
                        <h2 className="flex items-center gap-2 text-xl md:text-2xl font-semibold">
                            <TbCalendarTime size={30} />
                            Opening Hours
                        </h2>
                        <p className="text-sm md:text-base text-gray-100">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ullam asperiores eveniet, 
                            accusamus explicabo exercitationem. Ipsa aspernatur quam accusantium eveniet repudiandae, 
                            molestias vitae.
                        </p>

                        <div className="flex flex-col space-y-3">
                            {[
                                { day: "Mon - Wed", time: "10:00AM - 04:00PM" },
                                { day: "Thu - Fri", time: "10:00AM - 04:00PM" },
                                { day: "Sat - Sun", time: "10:00AM - 04:00PM" },
                            ].map((schedule, index) => (
                                <div key={index} className="flex justify-between items-center font-bold text-sm">
                                    <span>{schedule.day}</span>
                                    <span>{schedule.time}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHome;
