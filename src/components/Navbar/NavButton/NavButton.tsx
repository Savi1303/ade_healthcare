import Link from 'next/link';
import React from 'react';

function NavButton() {
    const buttons = [
        { 
            name: 'Contact Us', 
            href: '/contact-us', 
            color: 'bg-white border-2 hover:bg-blue-600 hover:text-white border-blue-600 hover:border-blue-600 font-black text-blue-600' 
        },
        { 
            name: 'Talk to a Doctor', 
            href: '/', 
            color: 'bg-blue-600 border-2 border-blue-600 hover:bg-transparent font-black hover:text-blue-600 text-white' 
        },
    ];

    return (
        <div className="flex flex-col lg:flex-row gap-4 ">
            {buttons.map((button, index) => (
                <Link key={index} href={button.href}>
                    <button className={`${button.color} py-2 px-3 w-full lg:w-auto rounded-lg focus:outline-none transition`}>
                        {button.name}
                    </button>
                </Link>
            ))}
        </div>
    );
}

export default NavButton;
