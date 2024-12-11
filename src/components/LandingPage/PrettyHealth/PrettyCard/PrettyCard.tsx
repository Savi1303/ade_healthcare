import React from 'react';

interface PrettyCardProps {
    icon: React.ReactNode; // Accept React components like icons
    title: string;
    description: string;
    className: string;
}

const PrettyCard: React.FC<PrettyCardProps> = ({ icon, title, description, className }) => {
    return (
        <div className={`flex flex-col p-6 mx-auto bg-white w-full sm:w-[290px] md:w-[400px] lg:w-[400px] ${className}`}>
            {/* Icon or Image */}
            <div className="w-16 h-16 flex items-center justify-center mb-4">
                {icon}
            </div>

            {/* Title */}
            <h3 className="text-black font-bold text-lg mb-2 min-h-[40px] w-full">
                {title}
            </h3>

            {/* Description */}
            <p className="text-gray-950 text-lg mb-4 min-h-[80px]">
                {description}
            </p>
        </div>
    );
};

export default PrettyCard;
