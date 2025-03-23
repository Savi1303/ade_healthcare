'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface ServiceCardProps {
    image: string;
    title: React.ReactNode;
    items?: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col mx-auto justify-between hover:scale-105 p-6 bg-white shadow-lg rounded-2xl cursor-pointer w-full sm:w-[300px] gap-5 transition-transform duration-300 ease-in-out">
            {/* Image */}
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                <Image src={image} alt='' width={40} height={40} className="object-contain" />
            </div>

            {/* Title */}
            <h3 className="text-gray-800 font-bold text-lg text-center">{title}</h3>

            
            {isOpen && items && items.length > 0 && (
                <ul className="text-gray-900 text-center list-none mx-auto">
                    {items.map((item, i) => (
                        <li 
                            key={i} 
                            className="px-3 py-1 rounded-md transition-all duration-300 hover:bg-blue-600 hover:text-white"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
            
            {items && items.length > 0 && (
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="flex items-center justify-center space-x-2 hover:text-blue-600 text-black text-md"
                >
                    <FaArrowRight />
                    <span>{isOpen ? 'Read Less' : 'Read More'}</span>
                </button>
            )}
        </div>
    );
};

export default ServiceCard;
