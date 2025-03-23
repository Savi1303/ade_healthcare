import React, { FC } from "react";
import { CiHeart, CiLocationOn, CiFolderOn } from "react-icons/ci";

interface JobCardProps {
    title: string;
    location: string;
    qualification: string;
    isHighlighted?: boolean;
}

const CareerJob: FC<JobCardProps> = ({ title, location, qualification, isHighlighted }) => {
    return (
        <div
            className={`border rounded-lg p-6 shadow-sm bg-white flex flex-col gap-2 relative transition-all duration-300 ease-in-out 
                ${isHighlighted ? "border-blue-500 shadow-md" : "border-gray-300"}
                hover:shadow-lg`}
        >
            <h3 className={`text-lg mt-6 font-semibold ${isHighlighted ? "text-blue-600" : "text-black"}`}>
                {title}
            </h3>
            
            <p className="text-gray-600 flex items-center text-sm sm:text-base">
                <CiLocationOn className="mr-2" /> {location}
            </p>
            
            <p className="text-gray-600 flex items-center text-sm sm:text-base">
                <CiFolderOn className="mr-2" /> {qualification}
            </p>
            
            <p className="text-sm text-gray-500 mt-2">
                As a member of our elite team, you will feel like you&#39;re a part of something bigger than yourself.
            </p>
            
            <CiHeart className="absolute top-4 right-4 text-gray-400 hover:text-red-500 cursor-pointer" size={30} />
        </div>
    );
};

export default CareerJob;
