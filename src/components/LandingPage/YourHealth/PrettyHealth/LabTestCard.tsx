'use client';

import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

interface LabTestCardProps {
    imgSrc: string;
    title: string;
    description: string;
    price: string;
}

const LabTestCard: React.FC<LabTestCardProps> = ({ imgSrc, title, description, price }) => {
    const handleClick = () => {
        window.open('https://wa.me/message/KEAP2TUQOW6EN1', '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="bg-white p-5 rounded-lg w-full lg:w-1/2 shadow-md space-y-3 flex flex-col items-start">
            <div>
                <Image src={imgSrc} alt={title} width={50} height={50} className="object-contain" />
            </div>

            <p className="text-lg font-semibold text-gray-700">{title}</p>
            <span className="text-gray-500 text-xs font-thin w-[200px]">{description}</span>

            <span className="text-xs font-thin text-gray-600">
                STARTING FROM <span className="text-gray-800 font-extrabold">{price}</span>
            </span>

            <button 
                onClick={handleClick} 
                className="flex items-center border space-x-2 text-white px-3 py-1 rounded-3xl bg-[#3cb5d3] hover:bg-[#349bb3] focus:ring-2 focus:ring-[#3cb5d3] focus:outline-none"
            >
                <FaArrowRight className="text-blue-600 bg-white rounded-full p-1" size={14} />
                <span className="text-sm font-medium">Schedule a test</span>
            </button>
        </div>
    );
};

export default LabTestCard;
