'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaArrowRight, FaChevronDown } from 'react-icons/fa';

interface ServiceCardProps {
    image: string;
    title: string;
    items?: string[];
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

            {/* Title with Dropdown Icon */}
            <button className="text-gray-800 font-bold text-lg text-center flex items-center justify-center gap-2">
                {title} 
                <FaChevronDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Service List */}
            {isOpen && (
                <ul className="text-gray-900 text-center list-none mx-auto">
                    {items && items.length > 0 ? (
                        items.map((item, i) => (
                            <li 
                                key={i} 
                                className="px-3 py-1 rounded-md transition-all duration-300 hover:bg-blue-600 hover:text-white"
                            >
                                {item}
                            </li>
                        ))
                    ) : (
                        <p>No specific services listed.</p>
                    )}
                </ul>
            )}

            {/* Learn More Button */}
            <Link href="#" className="flex items-center justify-center space-x-2 hover:text-blue-600 text-black text-md">
                <FaArrowRight />
                <span>Read More</span>
            </Link>
        </div>
    );
};

export default ServiceCard;
