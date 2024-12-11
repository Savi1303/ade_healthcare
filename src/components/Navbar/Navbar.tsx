'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import NavLinks from './NavLinks/NavLinks';
import NavButton from './NavButton/NavButton';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="bg-white shadow-md top-0 left-0 w-full z-50 px-3">
            <div className="mx-auto flex justify-between items-center px-6 py-4">
                {/* Logo */}
                <div className="flex items-center z-50">
                    <Image
                        src="/Pretty-Health Website/Images/nav.png"
                        alt="Navigation logo"
                        width={150}
                        height={50}
                        className="cursor-pointer"
                        onClick={() => window.location.href = "/"}
                    />
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden lg:flex items-center gap-3 text-sm font-black">
                    <li onClick={() => window.location.href = "/"}>
                        <Link href="/" className="text-gray-800 hover:text-indigo-600 transition py-2 px-3">Home</Link>
                    </li>
                    <li onClick={() => window.location.href = "/about-us"}>
                        <Link href="/" className="text-gray-800 hover:text-indigo-600 transition py-2 px-3">Why Us</Link>
                    </li>
                    <NavLinks isMobile={false} />
                    <NavButton />
                </ul>

                {/* Mobile Menu Button */}
                <div className="lg:hidden z-50">
                    <button onClick={toggleMobileMenu} className="text-gray-800 focus:outline-none">
                        {isMobileMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`lg:hidden fixed left-0 top-20 inset-x-0 font-black bg-white w-full h-full z-50 flex flex-col items-center justify-start transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-y-0' : 'translate-x-full'
                    }`}
            >
                <ul className="space-y-6 mt-4 w-full px-6">
                    <li>
                        <Link
                            href="/"
                            className="text-gray-800 hover:text-indigo-600 transition py-2 px-3 text-lg w-full block text-left"
                            onClick={toggleMobileMenu}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about-us"
                            className="text-gray-800 hover:text-indigo-600 transition py-2 px-3 text-lg w-full block text-left"
                            onClick={toggleMobileMenu}
                        >
                            Why Us
                        </Link>
                    </li>
                    <NavLinks isMobile={true} onClick={toggleMobileMenu} />
                    <NavButton />
                </ul>
            </div>

        </div>
    )
};

export default Navbar;