import Link from 'next/link';
import React from 'react';

const NavButton = () => {
    const buttons = [
        {
            name: 'Contact Us',
            href: '/contact-us',
            color: 'bg-white hover:bg-blue-600 text-black hover:text-white',
        },
        {
            name: 'Talk to a Doctor',
            href: '/',
            color: 'bg-blue-600 text-white hover:bg-white hover:text-blue-600 border border-blue-600',
        },
    ];

    return (
        <div className="flex flex-row gap-4">
            {buttons.map((button, index) => (
                <Link key={index} href={button.href}>
                    <button
                        className={`${button.color} font-medium py-2 px-6 rounded-md transition w-full sm:w-auto`}
                    >
                        {button.name}
                    </button>
                </Link>
            ))}
        </div>
    );
};

export default NavButton;
