'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { CgCloseR } from "react-icons/cg";


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Function to toggle the menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="bg-white shadow-md">
            <div className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-8">
                {/* Logo */}
                <div className="flex items-center">
                    <Image
                        src="/Pretty-Health Website/Images/nav.png"
                        alt="Navigation logo"
                        width={150}
                        height={150}
                        className="cursor-pointer"
                        onClick={() => window.location.href = "/"}
                    />
                </div>

                {/* Hamburger Menu for Small Screens */}
                <div className="md:hidden flex items-center z-20">
                    <button onClick={toggleMenu} className="text-2xl text-grey-700 focus:outline-none">
                        {menuOpen ? <CgCloseR className="text-black" /> : <FaBars className="text-black" />}
                    </button>
                </div>

                {/* Navigation Links */}
                <div
                    className={`absolute space-x-5 md:static top-0 left-0 w-full md:w-auto bg-white md:bg-transparent z-10 md:flex items-center justify-between transition-all duration-300 ${menuOpen ? 'h-screen flex flex-col justify-start space-y-6 py-60 px-6' : 'hidden md:flex'
                        }`}
                >
                    <ul className="md:flex md:space-x-6 space-y-6 md:space-y-0 items-center text-sm font-bold">
                        <li className="text-black-700 font-medium hover:text-blue-600 cursor-pointer transition"
                            onClick={() => window.location.href = "/"}
                        >
                            Home
                        </li>
                        <li className="text-black-700 font-medium hover:text-blue-600 cursor-pointer transition"
                            onClick={() => window.location.href = "/about_us"}
                        >
                            Why Us
                        </li>
                        <li>
                            <select
                                aria-label="Select Area of Care"
                                name="area of care"
                                id="AreaOfCare"
                                className="text-black-700 font-medium bg-transparent p-0 m-0 outline-none cursor-pointer hover:text-blue-600 rounded-lg"
                                onChange={(e) => {
                          
                                    if (e.target.value === "Specialty Care") {
                                        window.location.href = "/diagnostics";
                                    }
                                }}
                            >
                                <option value="">Area of Care</option>
                                <option value="Primary Care">Primary Care</option>
                                <option value="Specialty Care">Diagnostics</option>
                            </select>
                        </li>
                        <li>
                            <select
                                aria-label="Programs & Promotion"
                                name="programs"
                                id="Programs"
                                className="text-black-700 font-medium bg-transparent p-0 m-0 outline-none cursor-pointer hover:text-blue-600"
                                onChange={(e) => {
                                    if (e.target.value === "Health Programs") {
                                        window.location.href = "/school-health";
                                    }
                                }}
                            >
                                <option value="">Programs & Promotion</option>
                                <option value="Health Programs">Health Programs</option>
                                <option value="Promotions">Promotions</option>
                            </select>
                        </li>
                        <li>
                            <select
                                aria-label="More"
                                name="more"
                                id="More"
                                className="text-black-700 font-medium bg-transparent p-0 m-0 outline-none cursor-pointer hover:text-blue-600"
                                onChange={(e) => {
                                    if (e.target.value === "FAQ") {
                                        window.location.href = "/FAQs";
                                    }
                                    if (e.target.value === "Contact Us") {
                                        window.location.href = "/contact-us";
                                    }
                                }}
                            >
                                <option value="">More</option>
                                <option value="FAQ">FAQ</option>
                                <option value="Contact Us">Contact Us</option>
                            </select>
                        </li>
                    </ul>

                    {/* Buttons */}
                    <div className="md:flex items-center space-x-4 mt-6 md:mt-0">
                        <button className="bg-white border border-blue-600 text-blue-600 hover:bg-[#4E96D1] hover:text-white text-sm font-medium px-4 py-2 rounded-md transition"
                            onClick={() => window.location.href = "/contact-us"}
                        >
                            Contact Us
                        </button>
                        <button className="bg-[#4E96D1] text-white hover:bg-white hover:text-blue-600 border border-blue-600 text-sm font-medium px-4 py-2 rounded-md transition">
                            Talk to a Doctor
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
