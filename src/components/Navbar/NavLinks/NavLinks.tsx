'use client';
import React, { useState, useEffect } from 'react';
import { FaCaretDown } from 'react-icons/fa';

const NavLinks = ({ isMobile, onClick }) => {
    const links = [
        { 
            name: 'Area of Care',
            submenu: ['Cardiology', 'Neurology', 'Orthopedics'], 
        },
        { 
            name: 'Programs & Promotion', 
            submenu: ['Health Campaigns', 'Free Consultations', 'Community Events'],
        },
        { 
            name: 'More', 
            submenu: ['About Us', 'Careers'], 
        },
    ];

    const [activeLink, setActiveLink] = useState(null); // For desktop 
    const [activeMobileLink, setActiveMobileLink] = useState(null); // For mobile click 
    const [timeoutId, setTimeoutId] = useState(null); // timeout desktop dropdown

    const handleMouseEnter = (index) => {
        clearTimeout(timeoutId); 
        setActiveLink(index);
    };

    const handleMouseLeave = () => {
        const id = setTimeout(() => {
            setActiveLink(null);
        }, 200); 
        setTimeoutId(id);
    };

    const handleMobileClick = (index) => {
        setActiveMobileLink(activeMobileLink === index ? null : index);
    };

    useEffect(() => {
        return () => clearTimeout(timeoutId); 
    }, [timeoutId]);

    return (
        <>
            {links.map((link, index) => (
                <div
                    key={index}
                    onMouseEnter={() => !isMobile && handleMouseEnter(index)} 
                    onMouseLeave={() => !isMobile && handleMouseLeave()} 
                    className="relative group"
                >
                    {/* Main Link */}
                    <div 
                        className={`text-gray-800 cursor-pointer hover:text-indigo-600 text-left px-3 py-2 flex items-center justify-between ${isMobile ? 'text-lg' : ''}`}
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
                                        className={`px-4 py-2 text-gray-800 hover:bg-indigo-600 cursor-pointer hover:text-white ${isMobile ? 'text-lg' : ''}`}
                                        onClick={isMobile ? onClick : null} 
                                    >
                                        {submenuItem}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            ))}
        </>
    );
};

export default NavLinks;