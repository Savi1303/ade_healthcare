import React, { useState, useEffect } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

interface SubmenuItem {
    name: string;
    value: string;
}

interface LinkItem {
    name: string;
    submenu: SubmenuItem[];
}

interface NavLinksProps {
    isMobile: boolean;
    onClick?: () => void;
}

const NavLinks: React.FC<NavLinksProps> = ({ isMobile }) => {
    const pathname = usePathname(); 

    const links: LinkItem[] = [
        {
            name: 'Our Services',
            submenu: [
                { name: 'Vaccination', value: '/vaccine' },
                { name: 'Diagnostic Services', value: '/diagnostics' },
                { name: 'Clinic Services', value: '/clinic' },
                { name: 'School Health Program', value: '/school-health' },
                // { name: 'Health Promotion', value: '/health-promotion' },
                
            ],
        },
        // {
        //     name: 'About Us',
        //     submenu: [
        //         { name: 'FAQ', value: '/FAQs' },
        //         { name: 'Contact Us', value: '/contact-us' },
        //     ],
        // },
    ];

    const [activeLink, setActiveLink] = useState<number | null>(null);
    const [activeMobileLink, setActiveMobileLink] = useState<number | null>(null);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

    const handleMouseEnter = (index: number): void => {
        if (!isMobile) {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            setActiveLink(index);
        }
    };

    const handleMouseLeave = (): void => {
        if (!isMobile) {
            const id = setTimeout(() => {
                setActiveLink(null);
            }, 200);
            setTimeoutId(id);
        }
    };

    const handleMobileClick = (index: number): void => {
        setActiveMobileLink((prevIndex) => (prevIndex === index ? null : index));
    };

    useEffect(() => {
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [timeoutId]);

    const isMainLinkActive = (submenu: SubmenuItem[]): boolean =>
        submenu.some((item) => pathname === item.value);

    return (
        <div className="flex flex-col lg:flex-row gap-4">
            {links.map((link, index) => (
                <div
                    key={index}
                    onMouseEnter={() => !isMobile && handleMouseEnter(index)}
                    onMouseLeave={() => !isMobile && handleMouseLeave()}
                    className="relative group"
                >
                    <div
                        className={`text-gray-800 font-black cursor-pointer text-left px-3 py-2 flex items-center justify-between ${
                            isMobile ? 'text-lg' : ''
                        } relative group ${
                            isMainLinkActive(link.submenu) ? 'text-blue-600' : ''
                        }`}
                        onClick={() => isMobile && handleMobileClick(index)}
                    >
                        <h2>{link.name}</h2>

                        {link.submenu && (
                            <FaCaretDown
                                className={`ml-2 transition-transform duration-200 ease-in-out transform ${
                                    activeMobileLink === index || activeLink === index ? 'rotate-180 translate-y-[-6px]' : 'rotate-0 translate-y-0'
                                }`}
                            />
                        )}

                        <div
                            className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out`}
                            style={{
                                transformOrigin: 'left center',
                                visibility: isMainLinkActive(link.submenu) ? 'visible' : 'visible',
                            }}
                        ></div>
                    </div>

                    <div
                        className={`absolute left-0 lg:w-56 w-full top-full mt-7 rounded-br-xl bg-white shadow-lg z-20 transition-opacity duration-300 ease-in-out 
                        ${activeLink === index || activeMobileLink === index
                            ? 'opacity-100'
                            : 'opacity-0 pointer-events-none'}`}
                    >
                        {link.submenu && (
                            <ul>
                                {link.submenu.map((submenuItem, subIndex) => (
                                    <li
                                        key={subIndex}
                                        className={`px-4 py-2 text-gray-800 cursor-pointer ${
                                            pathname === submenuItem.value
                                                ? 'bg-blue-600 text-white font-bold'
                                                : 'hover:bg-blue-600 hover:text-white'
                                        } ${isMobile ? 'text-lg' : ''}`}
                                        onClick={() => {
                                            if (isMobile) {
                                                window.location.href = submenuItem.value;
                                                setActiveMobileLink(null);
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
