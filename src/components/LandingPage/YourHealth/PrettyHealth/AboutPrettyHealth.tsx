import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

function AboutPrettyHealth() {
    return (
        <div>
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 animate__animated animate__bounceInLeft">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex gap-10">
                    <Image
                        src="/Pretty-Health Website/Images/Union.png"
                        alt="UnionPix"
                        width={500}
                        height={200}
                        className="mx-auto lg:mx-0"
                    />

                    {/* <Image
                        src="/Pretty-Health Website/Images/Union.png"
                        alt="UnionPix"
                        width={200}
                        height={200}
                        className="mx-auto lg:mx-0"
                    /> */}
                </div>

                {/* Text Content */}
                <div className="w-full lg:w-1/2 space-y-6 text-gray-800">
                    <span className="lg:text-md text-lg font-semibold text-indigo-400">
                        About PrettyHealth
                    </span>

                    <h2 className="text-xl sm:text-2xl lg:text-4xl font-thin text-gray-800 leading-tight">
                        We are the largest provider of{" "}
                        <span className="font-black">private vaccination services </span> in
                        Nigeria
                    </h2>

                    <p className="text-sm sm:text-base lg:text-lg text-gray-600">
                        Making vaccination work for you, one person at a time
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base text-gray-700">
                        <li>✔️ Individual Vaccination</li>
                        <li>✔️ Travel Vaccination</li>
                        <li>✔️ Home Vaccination</li>
                        <li>✔️ Expert Healthcare Workers</li>
                        <li>✔️ Group Vaccination</li>
                        <li>✔️ Easy Booking</li>
                        <li>✔️ Cutting-Edge Technology</li>
                        <li>✔️ Positive Reviews</li>
                    </ul>

                    <Link href="#">
                        <button className="px-4 py-2 mt-7 flex items-center gap-2 rounded-full bg-indigo-600 hover:bg-indigo-800 text-white w-fit">
                            <div className="flex justify-center items-center bg-white text-blue-500 w-4 h-4 rounded-full">
                                <FaArrowRight className="w-2 h-2" />
                            </div>
                            <p>Learn More</p>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default AboutPrettyHealth;
