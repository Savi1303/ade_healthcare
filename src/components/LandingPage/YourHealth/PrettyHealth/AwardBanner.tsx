'use client';
import Link from 'next/link';
import React from 'react';
import { BiPlusCircle } from 'react-icons/bi';
import { FaArrowRight } from 'react-icons/fa';

interface AwardBannerProps {
    title: string;
}

const AwardBanner: React.FC<AwardBannerProps> = ({ title,  }) => (
    
        <div className="absolute bottom-20 flex items-center bg-white space-x-5 px-10 py-4 rounded-tr-full rounded-br-full shadow-md">
            <BiPlusCircle size={44} className="bg-[#fdfdfd] hidden md:flex rounded-full border" />

            <div>
                <span className="font-extrabold text-xs text-gray-800 uppercase">
                    {title}
                </span>
            </div>

            <Link
                href="#"
                className="text-white p-3 flex items-center border rounded-full bg-blue-500 hover:bg-blue-700 transition duration-300 ease-in-out"
            >
                <FaArrowRight />
            </Link>
        </div>
    );

    export default AwardBanner;
