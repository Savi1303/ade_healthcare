import React from "react";
import CareerJob from "./CareerJob";

const CareerTeam: React.FC = () => {
    const jobs = [
        { title: "Medical Doctor", location: "Ikeja, Lagos.", qualification: "MBBS" },
        { title: "Registered Nurse", location: "Maryland, Lagos", qualification: "RN/RM", isHighlighted: true },
        { title: "Content Strategist", location: "Remote", qualification: "Communications" },
    ];

    return (
        <div className="bg-gray-200 py-12 px-4 sm:px-6 md:px-12 lg:px-20">
            <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-blue-600 font-semibold text-sm sm:text-base">Join Our Team</h3>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                    Discover Our <span className="text-black">Career Opportunities</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto">
                {jobs.map((job, index) => (
                    <CareerJob key={index} {...job} />
                ))}
            </div>
        </div>
    );
};

export default CareerTeam;
