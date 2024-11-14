import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { LiaBoxOpenSolid } from 'react-icons/lia';

const CardVisit: React.FC<{ color: string }> = ({ color }) => {
    return (
        <div className={`${color} flex flex-col justify-between p-6 hover:bg-opacity-50 cursor-pointer rounded-2xl text-white shadow-lg w-full sm:w-[300px]`}>
            {/* Icon and Title */}
            <div className="flex items-center gap-3">
                <LiaBoxOpenSolid size={28} className="text-gray-600 bg-opacity-50 p-1 rounded-md" />
                <h3 className="text-lg font-bold text-gray-600">Visitor Information</h3>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm text-gray-600">
                Details about the visitor&#39;s card and functionality. View and follow all terms & conditions.
            </p>

            {/* Learn More Button */}
            <a
                href="#"
                className="flex items-center text-gray-600 justify-start mt-6 w-[150px] space-x-2 bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-full transition duration-300 ease-in-out"
            >
                <FaArrowRight />
                <span>Learn More</span>
            </a>
        </div>
    );
};

export default CardVisit;
