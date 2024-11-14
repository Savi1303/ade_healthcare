import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface PrettyCardProps {
    icon: React.ReactNode; // Accept React components like icons
    title: string;
    description: string;
}

const PrettyCard: React.FC<PrettyCardProps> = ({ icon, title, description }) => {
    return (
        <div className="flex flex-col p-6 bg-white w-full sm:w-[300px]">
            {/* Icon or Image */}
            <div className="w-16 h-16 flex items-center justify-center mb-4">
                {icon}
            </div>

            {/* Title */}
            <h3 className="text-gray-800 font-bold text-lg mb-2">{title}</h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4">{description}</p>

            {/* Read More */}
            <a
                href="#"
                className="flex space-x-2 items-center font-medium"
            >
                <FaArrowRight />
                <span>Learn More</span>
            </a>
        </div>
    );
};

export default PrettyCard;
