import Image from 'next/image';
import React from 'react';
import { PiHeartbeatBold } from "react-icons/pi";
import { TbCalendarTime } from "react-icons/tb";

const AboutHome = () => {
    return (
        <div>
            <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center bg-gray-100 bg-opacity-90">
                <Image
                    src="/Pretty-Health Website/new_images/Group 6.png"
                    alt="Background Image"
                    layout="fill"
                    objectFit="cover"
                    className="absolute"
                />

                <div className="absolute flex md:flex-row justify-between items-center px-6 md:px-6 lg:px-32 w-full space-y-6 md:space-y-0">
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

                    <div className="w-full top-60 md:w-1/2 flex flex-col space-y-1 md:space-y-2 md:text-left">
                        <h3 className="text-4xl md:text-4xl lg:text-6xl font-bold text-white">
                            100,000+ Patients
                        </h3>
                        <span className="lg:text-5xl md:text-4xl text-4xl font-thin text-white">
                            Trust in Our Services
                        </span>
                        <p className="text-white text-lg lg:text-md md:text-lg font-medium">
                            With over 100,000+ Clients, we are your go-to preventive healthcare Organsiation
                        </p>
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
                            For Our Services
                        </h2>
                        
                        <h4 className="text-lg md:text-2xl font-bold">
                            Call: <span className="text-indigo-300">+234 811 434 6325</span>
                        </h4>
                    </div>

                    {/* Opening Hours */}
                    <div className="w-full md:w-1/2 space-y-5">
                        <h2 className="flex items-center gap-2 text-xl md:text-2xl font-semibold">
                            <TbCalendarTime size={30} />
                            Opening Hours
                        </h2>

                        <div className="flex flex-col space-y-5">
                            {[
                                { day: "Mon - Fri", time: "08:00AM - 05:00PM" },
                                { day: "Saturdays", time: "09:00AM - 04:00PM" },
                            ].map((schedule, index) => (
                                <div key={index} className="flex justify-between items-center font-bold text-sm">
                                    <span className='m-2'>{schedule.day}</span>
                                    <span className='m-2'>{schedule.time}</span>
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
