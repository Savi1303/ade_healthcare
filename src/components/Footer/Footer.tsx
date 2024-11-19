import Image from 'next/image';
import React from 'react';
import { FaYoutube, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-[#250c2c] text-white lg:rounded-tl-[60px] lg:rounded-tr-[60px]">
            <div className="container mx-auto py-12 px-6 md:px-10">
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
                    {/* Logo and Info */}
                    <div className="space-y-6 md:w-1/3">
                        <Image
                            src="/Pretty-Health Website/Images/footer _img.png"
                            alt="Footer Logo"
                            width={100}
                            height={100}
                        />
                        <p className="text-sm font-bold">
                            Location: <br />
                            <span className="font-normal text-gray-300">
                                485, Bayshore Blvd. Str. Ikeja, Lagos State, NG 95124
                            </span>
                        </p>
                        <div className="text-sm space-y-1">
                            <p className="font-bold">Visiting Hours:</p>
                            <p className="text-gray-300">Sunday: 08:00 AM - 10:00 PM</p>
                            <p className="text-gray-300">Monday - Friday: 06:00 AM - 12:00 AM</p>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 md:w-2/3">
                        {/* Product Links */}
                        <div>
                            <p className="text-lg font-bold mb-4">PRODUCT</p>
                            <ul className="space-y-3 text-sm">
                                <li className="text-gray-300 hover:text-gray-500 cursor-pointer">Pricing</li>
                                <li className="text-gray-300 hover:text-gray-500 cursor-pointer">Overview</li>
                                <li className="text-gray-300 hover:text-gray-500 cursor-pointer">Browse</li>
                                <li className="text-gray-300 hover:text-gray-500 cursor-pointer">Accessibility</li>
                                <li className="text-gray-300 hover:text-gray-500 cursor-pointer">Five</li>
                            </ul>
                        </div>

                        {/* Solution Links */}
                        <div>
                            <p className="text-lg font-bold mb-4">SOLUTION</p>
                            <ul className="space-y-3 text-sm">
                                <li className="hover:text-gray-500 text-gray-300 cursor-pointer">Brainstorming</li>
                                <li className="hover:text-gray-500 text-gray-300 cursor-pointer">Ideation</li>
                                <li className="hover:text-gray-500 text-gray-300 cursor-pointer">Wireframing</li>
                                <li className="hover:text-gray-500 text-gray-300 cursor-pointer">Research</li>
                            </ul>
                        </div>

                        {/* Resources Links */}
                        <div>
                            <p className="text-lg font-bold mb-4">RESOURCES</p>
                            <ul className="space-y-3 text-sm">
                                <li className="hover:text-gray-500 text-gray-300 cursor-pointer">Help Center</li>
                                <li className="hover:text-gray-500 text-gray-300 cursor-pointer">Blog</li>
                                <li className="hover:text-gray-500 text-gray-300 cursor-pointer">Tutorials</li>
                            </ul>
                        </div>

                        {/* Company Links */}
                        <div>
                            <p className="text-lg font-bold mb-4">COMPANY</p>
                            <ul className="space-y-3 text-sm">
                                <li className="hover:text-gray-500 text-gray-300 cursor-pointer">About</li>
                                <li className="hover:text-gray-500 text-gray-300 cursor-pointer">Press</li>
                                <li className="hover:text-gray-500 text-gray-300 cursor-pointer">Events</li>
                                <li className="hover:text-gray-500 text-gray-300 cursor-pointer">Careers</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-8 border-b border-gray-600"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm">
                    {/* Copyright */}
                    <p className="text-center md:text-left mb-4 md:mb-0 text-gray-300">
                        © 2024 Pretty Health Care, NG. All rights reserved.
                    </p>

                    {/* Links and Social Icons */}
                    <div className="flex flex-col md:flex-row items-center gap-5">
                        {/* Links */}
                        <div className="flex gap-5">
                            <p className="hover:text-gray-300 cursor-pointer">Terms</p>
                            <p className="hover:text-gray-300 cursor-pointer">Privacy</p>
                            <p className="hover:text-gray-300 cursor-pointer">Contact</p>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex gap-4">
                            <FaYoutube className="hover:text-gray-300 cursor-pointer" />
                            <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
                            <FaTwitter className="hover:text-gray-300 cursor-pointer" />
                            <FaInstagram className="hover:text-gray-300 cursor-pointer" />
                            <FaLinkedinIn className="hover:text-gray-300 cursor-pointer" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
