import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

function AboutPrettyHealth() {
    return (
        <div className="px-4 sm:px-8 md:px-12 lg:px-24 py-12">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 animate__animated animate__bounceInLeft">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex gap-3 sm:gap-5 px-4 sm:px-8 md:px-12 lg:px-0 justify-center lg:justify-start">
                    <Image
                        src="/Pretty-Health Website/new_images/Rectangle 6298 (4).png"
                        alt="About Pretty One"
                        width={180}
                        height={130}
                        className="object-cover rounded-lg"
                    />

                    <Image
                        src="/Pretty-Health Website/new_images/Rectangle 6299 (2).png"
                        alt="About Pretty Two"
                        width={180}
                        height={130}
                        className="object-cover rounded-lg"
                    />
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-1/2 space-y-6 text-gray-800 text-left px-4 sm:px-8 lg:px-0">
                    <span className="text-sm sm:text-md lg:text-lg font-semibold text-indigo-400">
                        About PrettyHealth
                    </span>

                    <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-thin text-gray-800 leading-tight">
                        We are the largest provider of{" "}
                        <span className="font-black">private vaccination services </span> in
                        Nigeria
                    </h2>

                    <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                        Making vaccination work for you, one person at a time
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-sm sm:text-base text-gray-700">
                        <li>✔️ Individual Vaccination</li>
                        <li>✔️ Travel Vaccination </li>
                        <li>✔️ Home Vaccination</li>
                        <li>✔️ Expert Healthcare Workers</li>
                        <li>✔️ Group Vaccination</li>
                        <li>✔️ Easy Booking</li>
                        <li>✔️ Cutting-Edge Technology</li>
                        <li>✔️ Positive Reviews</li>
                    </ul>

                    <div className="flex justify-start">
                        <Link href="/vaccine">
                            <button className="px-4 py-2 mt-5 flex items-center gap-2 rounded-full bg-indigo-600 hover:bg-indigo-800 text-white w-fit">
                                <div className="flex justify-center items-center bg-white text-blue-500 w-5 h-5 rounded-full">
                                    <FaArrowRight className="w-3 h-3" />
                                </div>
                                <p className="text-sm sm:text-base">Learn More</p>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPrettyHealth;
