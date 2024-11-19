import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ServiceCard: React.FC<{ image: string; title: string; description: string }> = ({
    image,
    title,
    description,
}) => {
    return (
        <div className="flex flex-col justify-between p-6 bg-white shadow-lg rounded-2xl hover:bg-opacity-90 cursor-pointer w-full sm:w-[300px] gap-5 transition-all duration-300 ease-in-out">
            {/* Image */}
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                <Image src={image} alt={title} width={40} height={40} className="object-contain" />
            </div>

            {/* Title */}
            <p className="text-gray-800 font-bold text-lg text-center">{title}</p>

            {/* Description */}
            <p className="text-gray-600 text-sm text-center">{description}</p>

            {/* Learn More Button */}
            <a
                href="#"
                className="flex items-center justify-center space-x-2 text-indigo-600 hover:text-indigo-800 text-sm"
            >
                <FaArrowRight />
                <span>Read More</span>
            </a>
        </div>
    );
};

export default ServiceCard;
