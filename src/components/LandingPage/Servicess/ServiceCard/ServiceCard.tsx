'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { FaArrowRight, FaChevronDown } from 'react-icons/fa';

interface ServiceCardProps {
    image: string;
    title: string;
    items: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className={`flex flex-col mx-auto justify-between p-6 bg-white shadow-lg rounded-2xl cursor-pointer w-full sm:w-[300px] gap-5 transition-transform duration-300 ease-in-out transform ${isHovered ? 'scale-105 shadow-xl' : 'scale-100'}`}
            onMouseEnter={() => {
                setIsHovered(true);
                setIsOpen(true);
            }}
            onMouseLeave={() => {
                setIsHovered(false);
                setIsOpen(false);
            }}
        >
            {/* Image */}
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                <Image src={image} alt={title} width={40} height={40} className="object-contain" />
            </div>

            <button
                className="text-gray-800 font-bold text-lg text-center flex items-center justify-center gap-2"
            >
                {title} <FaChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <ul className="text-gray-900 text-center list-none mx-auto">
                    {items.map((item, index) => (
                        <li key={index} className="hover:bg-blue-600 px-4 py-2 rounded-2xl hover:text-white">{item}</li>
                    ))}
                </ul>
            )}

            {/* Learn More Button */}
            <a href="#" className="flex items-center justify-center space-x-2 hover:text-blue-600 text-black text-md">
                <FaArrowRight />
                <span>Read More</span>
            </a>
        </div>
    );
};

export default ServiceCard;
