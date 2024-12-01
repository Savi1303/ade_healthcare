'use client';
import Image from 'next/image';
import Link from 'next/link';
import NavLinks from './NavLinks/NavLinks';
import NavButton from './NavButton/NavButton';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="mx-auto flex justify-between items-center px-6 py-4">
                {/* Logo */}
                <div className="flex items-center z-50">
                    <Image
                        src="/Pretty-Health Website/Images/nav.png" 
                        alt="Navigation logo"
                        width={150}
                        height={50}
                        className="cursor-pointer"
                        onClick={() => (window.location.href = "/")}
                        priority
                    />
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden lg:flex items-center text-sm">
                    <li>
                        <Link href="/" className="text-gray-800 hover:text-blue-600 transition py-2 px-3">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about_us" className="text-gray-800 hover:text-blue-600 transition py-2 px-3">
                            Why Us
                        </Link>
                    </li>
                    <NavLinks />
                    <NavButton />
                </ul>

                {/* Mobile Menu Button */}
                <div className="lg:hidden z-50">
                    <button
                        onClick={toggleMobileMenu}
                        className="text-gray-800 focus:outline-none p-2 rounded-md hover:bg-gray-200 transition"
                    >
                        {isMobileMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`lg:hidden fixed top-10 left-0 w-full h-full py-10 px-1 bg-white z-40 transform duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <ul className="flex flex-col items-start justify-start p-6 space-y-4 text-sm">
                    <li>
                        <Link
                            href="/"
                            className="text-gray-800 hover:text-blue-600 transition text-lg px-3"
                            onClick={toggleMobileMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about_us"
                            className="text-gray-800 hover:text-blue-600 transition text-lg px-3"
                            onClick={toggleMobileMenu}
                        >
                            Why Us
                        </Link>
                    </li>
                    <NavLinks isMobile onClick={toggleMobileMenu} />
                    <NavButton />
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
