import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ServiceCard: React.FC<{
    image: string;
    title: string;
}> = ({ image, title, }) => {
    return (
        <div
            className={`flex flex-col mx-auto justify-between p-6 bg-white shadow-lg rounded-2xl hover:bg-opacity-30 cursor-pointer w-full sm:w-[300px] gap-5 transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl`}
        >
            {/* Image */}
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                <Image src={image} alt={title} width={40} height={40} className="object-contain" />
            </div>

            {/* Title */}
            <p className="text-gray-800 font-bold text-lg text-center">{title}</p>

            {/* Learn More Button */}
            <a
                href="#"
                className="flex items-center justify-center space-x-2 hover:text-blue-600 text-black text-md"
            >
                <FaArrowRight />
                <span>Read More</span>
            </a>
        </div>
    );
};

export default ServiceCard;
