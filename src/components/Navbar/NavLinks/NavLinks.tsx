'use client';
import React, { useState, useEffect } from 'react';
import { FaCaretDown } from 'react-icons/fa';

const NavLinks = ({ isMobile, onClick }) => {
    const links = [
        {
            name: 'Area of Care',
            submenu: [
                { name: 'Primary Care', value: '' },
                { name: 'Specialty Care', value: '/diagnostics' },
            ],
        },
        {
            name: 'Programs & Promotion',
            submenu: [
                { name: 'Health Programs', value: '/school-health' },
                { name: 'Promotions', value: '' },
            ],
        },
        {
            name: 'More',
            submenu: [
                { name: 'FAQ', value: '/FAQs' },
                { name: 'Contact Us', value: '/contact-us' },
            ],
        },
    ];

    const [activeLink, setActiveLink] = useState(null); // For desktop hover
    const [activeMobileLink, setActiveMobileLink] = useState(null); // For mobile click
    const [timeoutId, setTimeoutId] = useState(null); // Timeout for desktop hover

    const handleMouseEnter = (index) => {
        if (!isMobile) {
            clearTimeout(timeoutId);
            setActiveLink(index);
        }
    };

    const handleMouseLeave = () => {
        if (!isMobile) {
            const id = setTimeout(() => {
                setActiveLink(null);
            }, 200);
            setTimeoutId(id);
        }
    };

    const handleMobileClick = (index) => {
        setActiveMobileLink(prevIndex => (prevIndex === index ? null : index));
    };

    const handleDropdownChange = (e) => {
        if (e.target.value) {
            window.location.href = e.target.value;
        }
    };

    useEffect(() => {
        return () => clearTimeout(timeoutId);
    }, [timeoutId]);

    return (
        <div className="flex flex-col lg:flex-row gap-4">
            {links.map((link, index) => (
                <div
                    key={index}
                    onMouseEnter={() => !isMobile && handleMouseEnter(index)} 
                    onMouseLeave={() => !isMobile && handleMouseLeave()} 
                    className="relative group"
                >
                    {/* Main Link */}
                    <div 
                        className={`text-gray-800 cursor-pointer hover:text-blue-600 text-left px-3 py-2 flex items-center justify-between ${isMobile ? 'text-lg' : ''}`}
                        onClick={() => isMobile && handleMobileClick(index)} 
                    >
                        <h2>{link.name}</h2>
                        
                        {link.submenu && (
                            <FaCaretDown
                                className={`ml-2 transition-transform duration-200 ease-in-out transform ${activeMobileLink === index ? 'rotate-180' : ''}`}
                                onClick={() => isMobile ? handleMobileClick(index) : null} 
                            />
                        )}
                    </div>

                    {/* Submenu */}
                    <div
                        className={`absolute left-0 w-56 top-full mt-7 rounded-br-xl bg-white shadow-lg z-20 transition-opacity duration-300 ease-in-out 
                        ${activeLink === index || activeMobileLink === index ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                    >
                        {link.submenu && (
                            <ul>
                                {link.submenu.map((submenuItem, subIndex) => (
                                    <li
                                        key={subIndex}
                                        className={`px-4 py-2 text-gray-800 hover:bg-blue-600 cursor-pointer hover:text-white ${isMobile ? 'text-lg' : ''}`}
                                        onClick={() => {
                                            if (isMobile) {
                                                window.location.href = submenuItem.value;
                                                setActiveMobileLink(null); // Close the menu on mobile after selection
                                            }
                                            if (!isMobile && submenuItem.value) {
                                                window.location.href = submenuItem.value;
                                            }
                                        }}
                                    >
                                        {submenuItem.name}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NavLinks;
