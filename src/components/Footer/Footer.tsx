import Image from "next/image";
import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[#250c2c] text-white lg:rounded-tl-[60px] lg:rounded-tr-[60px]">
            <div className="container mx-auto py-12 px-6 md:px-10">
                {/* Top Section */}
                <div className="flex flex-col lg:flex-row lg:justify-between space-y-8 md:space-y-16">
                    {/* Navigation Links */}
                    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:flex items-start justify-between gap-24">
                        {/* Logo */}
                        <div className='hidden mt-6 sm:mt-12 lg:flex justify-center sm:justify-start'>
                            <Image
                                src="/Pretty-Health Website/Images/footer _img.png"
                                alt="Pretty Health Care Logo"
                                width={150}
                                height={120}
                                priority
                            />
                        </div>

                        {/* Location & Operating Hours */}
                        <div className='mt-7 text-center sm:text-left'>
                            <p className="text-lg lg:text-sm font-bold max-w-[330px]">
                                Location: <span className="font-normal text-gray-300">78/81, Obafemi Awolowo Way, Ikeja, Lagos State.</span>
                            </p>
                            <div className="text-lg lg:text-sm space-y-1 mt-3">
                                <p className="font-bold">Operating Hours:</p>
                                <p className="text-gray-300">Saturday: 09:00 AM - 04:00 PM</p>
                                <p className="text-gray-300">Monday - Friday: 08:00 AM - 05:00 PM</p>
                            </div>
                        </div>

                        {/* Company Links */}
                        <div>
                            <p className="text-lg font-bold mb-4 text-center sm:text-left">COMPANY</p>
                            <ul className="space-y-3 text-lg lg:text-sm text-center sm:text-left">
                                <li><Link href="/about-us" className="text-gray-300 hover:text-gray-500">Why Us</Link></li>
                                <li><Link href="/health-promotion" className="text-gray-300 hover:text-gray-500">Health Promotion</Link></li>
                                <li><Link href="/clinic" className="text-gray-300 hover:text-gray-500">Clinic Management</Link></li>
                                <li><Link href="/school-health" className="text-gray-300 hover:text-gray-500">School Health Program</Link></li>
                            </ul>
                        </div>

                        {/* Services Links */}
                        <div>
                            <p className="text-lg font-bold mb-4 text-center sm:text-left">SERVICES</p>
                            <ul className="space-y-3 text-lg lg:text-sm text-center sm:text-left">
                                <li><Link href="/diagnostics" className="hover:text-gray-500 text-gray-300">Diagnostics</Link></li>
                                <li><Link href="/vaccination" className="hover:text-gray-500 text-gray-300">Vaccination</Link></li>
                                <li>
                                    <Link href='https://wa.me/message/KEAP2TUQOW6EN1'
                                        target="_blank" rel="noopener noreferrer" 
                                        className="hover:text-gray-500 text-gray-300">
                                            Chat Now
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* More Links */}
                        <div>
                            <p className="text-lg font-bold mb-4 text-center sm:text-left">MORE</p>
                            <ul className="space-y-3 text-lg lg:text-sm text-center sm:text-left">
                                <li><Link href="/view-blog" className="hover:text-gray-500 text-gray-300">Blog</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-8 border-b border-gray-600"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center text-lg lg:text-sm text-center md:text-left">
                    {/* Copyright */}
                    <p className="mb-4 md:mb-0 text-gray-300">
                        © 2024 Pretty Health Care, NG. All rights reserved. | Designed By Mont Technologies
                    </p>

                    {/* Links and Social Icons */}
                    <div className="flex flex-col md:flex-row items-center gap-5">
                        {/* Links */}
                        <Link href="/contact-us" className="hover:text-gray-300 cursor-pointer">Contact</Link>

                        {/* Social Media Icons */}
                        <div className="flex gap-4 mt-2 md:mt-0">
                            <Link href='https://www.facebook.com/share/18cPYnVpda/?mibextid=wwXIfr'
                                target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-gray-300 cursor-pointer">
                                    <FaFacebookF />
                            </Link>

                            <Link href='https://x.com/prettyhealth_?s=21'
                                target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-gray-300 cursor-pointer">
                                    <FaXTwitter />
                            </Link>

                            <Link href='https://www.instagram.com/prettyhealthcareltd?igsh=MWV2b3dzYm1vYWdleA%3D%3D&utm_source=qr'
                                target="_blank" rel="noopener noreferrer"
                                aria-label="Instagram" className="hover:text-gray-300 cursor-pointer">
                                    <FaInstagram />
                            </Link>

                            <Link href='https://www.linkedin.com/company/pretty-healthcare-limited/'
                                target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-gray-300 cursor-pointer">
                                    <FaLinkedinIn />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;