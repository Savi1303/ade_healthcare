"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavLinks from "./NavLinks/NavLinks";
import NavButton from "./NavButton/NavButton";
import { FaWhatsapp } from "react-icons/fa6";

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const isActive = (path: string) => pathname === path;

    const menuItems = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about-us" },
        { name: 'Career', href: '/career' },
    ];

    return (
        <div>
            <div className="flex justify-center items-center bg-[#b69b44] gap-10 text-white text-center py-2 sm:py-3 text-[10px] sm:text-[12px] md:text-[14px]">
                <p className="hidden md:flex">Not Sure Where To Start? Chat With Our Health Advisor</p>

                <Link
                    href="#"
                    onClick={() => window.open('https://wa.me/message/KEAP2TUQOW6EN1', '_blank', 'noopener,noreferrer')}
                    className="flex items-center gap-2 bg-transparent border border-white mt-2 sm:mt-0 ml-0 sm:ml-2 px-3 py-1 rounded-full"
                >
                    <FaWhatsapp className="text-white rounded-full bg-green-500 p-1 w-5 h-5" />
                    Chat Now
                </Link>
            </div>


            <div className="bg-white shadow-lg top-0 left-0 w-full z-50 px-0">
                <div className="mx-auto flex justify-between items-center px-6 py-4">
                    <div className="flex items-center z-50">
                        <Image
                            src="/Pretty-Health Website/Images/nav.png"
                            alt="Navigation logo"
                            width={150}
                            height={50}
                            className="cursor-pointer"
                            onClick={() => (window.location.href = "/")}
                        />
                    </div>

                    <ul className="hidden lg:flex items-center gap-3 text-sm font-black">
                        {menuItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`relative group text-gray-800 hover:text-indigo-600 py-2 px-3 ${isActive(item.href) ? "text-indigo-600" : ""
                                        }`}
                                >
                                    {item.name}
                                    <span
                                        className={`absolute left-0 bottom-0 h-0.5 w-full bg-indigo-600 transform ${isActive(item.href)
                                            ? "scale-x-100"
                                            : "scale-x-0 group-hover:scale-x-100"
                                            } transition-transform duration-300`}
                                        style={{
                                            transformOrigin: "left center",
                                        }}
                                    ></span>
                                </Link>
                            </li>
                        ))}
                        <NavLinks isMobile={false} />
                        <NavButton />
                    </ul>

                    <div className="lg:hidden z-50">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-gray-800 focus:outline-none"
                        >
                            {isMobileMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                        </button>
                    </div>
                </div>

                <div
                    className={`lg:hidden fixed left-0 top-20 inset-x-0 font-black bg-white w-full h-full z-50 flex flex-col items-center justify-start transform transition-transform duration-300 ${isMobileMenuOpen ? "translate-y-0" : "translate-x-full"
                        }`}
                >
                    <ul className="space-y-6 mt-4 w-full px-6">
                        {menuItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`relative group text-gray-800 hover:text-indigo-600 py-2 px-3 text-lg w-full block text-left ${isActive(item.href) ? "text-indigo-600" : ""
                                        }`}
                                    onClick={toggleMobileMenu}
                                >
                                    {item.name}
                                    <span
                                        className={`absolute left-0 bottom-0 h-0.5 w-full bg-indigo-600 transform ${isActive(item.href)
                                            ? "scale-x-100"
                                            : "scale-x-0 group-hover:scale-x-100"
                                            } transition-transform duration-300`}
                                        style={{
                                            transformOrigin: "left center",
                                        }}
                                    ></span>
                                </Link>
                            </li>
                        ))}
                        <NavLinks isMobile={true} onClick={toggleMobileMenu} />
                        <NavButton />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
