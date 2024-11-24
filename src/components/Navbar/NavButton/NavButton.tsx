import Link from 'next/link';
import React from 'react';

const NavButton = () => {
    const buttons = [
        { name: 'Contact Us', href: '/', color: 'bg-white hover:bg-indigo-600 text-black hover:text-white' },
        { name: 'Talk to a Doctor', href: '/', color: 'bg-indigo-600 hover:bg-indigo-800 text-white' },
    ];

    return (
        <div className="flex gap-4">
            {buttons.map((button, index) => (
                <Link key={index} href={button.href}>
                    <button className={`${button.color} font-medium py-2 px-3 rounded-lg focus:outline-none transition`}>
                        {button.name}
                    </button>
                </Link>
            ))}
        </div>
    );
};

export default NavButton;