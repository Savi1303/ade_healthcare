import React, { FC } from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from 'next/link'

interface DiagnosticsCardProps {
    title: string;
    price: string;
}

const DiagnosticsCard: FC<DiagnosticsCardProps> = ({ title, price }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center border border-gray-200">
            {/* Icon */}
            <Image
                src='/Pretty-Health Website/Images/image 15.png'
                alt="Doctor Icon"
                width={40}
                height={40}
                className="flex justify-start mb-4"
            />

            {/* Test Title */}
            <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">{title}</h3>

            {/* Price */}
            <p className="text-gray-500 text-sm mt-2">
                STARTING FROM <span className="font-bold text-gray-900">{price}</span>
            </p>

            {/* Schedule Button */}
            <Link
                href="https://wa.me/message/KEAP2TUQOW6EN1"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-2">
                    <div className="p-1 rounded-full bg-white">
                        <FaArrowRight className="text-blue-600" />
                    </div>
                    Schedule A Test
                </button>
            </Link>
        </div>
    );
};

export default DiagnosticsCard;
