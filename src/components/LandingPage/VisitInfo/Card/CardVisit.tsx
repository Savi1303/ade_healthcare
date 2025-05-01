import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { LiaBoxOpenSolid } from 'react-icons/lia';

const CardVisit: React.FC<{ color: string }> = ({ color }) => {
    return (
        <div
            className={`${color} flex flex-col mx-auto justify-between bg-opacity-50 p-6 hover:bg-opacity-80 cursor-pointer rounded-2xl text-white shadow-lg w-full sm:w-[300px]`}
        >
            <div className="flex items-center">
                <LiaBoxOpenSolid
                    size={28}
                    color="#2a1257"
                    className="text-gray-600 bg-opacity-30 p-1 rounded-md"
                />
                <h3 className="text-lg font-bold uppercase text-[#2a1257]">Visitor Information</h3>
            </div>

            <p className="mt-4 text-sm text-blue-800">
                View all information of the visitors and follow all terms & conditions.
            </p>

            <Link
                href="#"
                className="flex text-sm items-center text-[#20123a] justify-start mt-6 w-[150px] space-x-2 px-4 py-2 hover:bg-white hover:bg-opacity-50 rounded-full transition duration-300 ease-in-out"
            >
                <FaArrowRight />
                <span>Learn More</span>
            </Link>
        </div>
    );
};

export default CardVisit;
