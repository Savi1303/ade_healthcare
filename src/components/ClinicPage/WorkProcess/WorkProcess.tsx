import Image from 'next/image';
import React from 'react';

function WorkProcess() {
    const steps = [
        { id: 4, title: 'Health screenings and wellness programs', icon: '/Pretty-Health Website/Images/Icon (8).png' },
        { id: 1, title: 'Emergency medical support', icon: '/Pretty-Health Website/Images/Icon (5).png' },
        { id: 2, title: 'On-site medical staffing', icon: '/Pretty-Health Website/Images/Icon (6).png' },
        { id: 3, title: 'Compliance with health and safety regulations', icon: '/Pretty-Health Website/Images/Icon (7).png' },
    ];

    return (
        <div className="bg-gray-50 py-20">
            <div className="px-6 sm:px-12 lg:px-12 mb-12 text-left">
                <p className="text-2xl text-gray-700 mt-4 max-w-3xl text-left">
                    We promote healthier environments all through the way
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 sm:px-12 lg:px-12">
                {steps.map((step) => (
                    <div
                        key={step.id}
                        className="flex flex-col cursor-pointer items-center text-center bg-white shadow-lg rounded-lg p-6 space-y-4 border-t-4 border-blue-600
                        hover:shadow-2xl hover:scale-105 hover:border-blue-800 transition-all duration-300 ease-in-out"
                    >
                        <div className="w-16 h-16 sm:w-20 sm:h-20">
                            <Image
                                src={step.icon}
                                alt={step.title}
                                width={100}
                                height={100}
                                className="w-full h-full"
                            />
                        </div>
                        <span className="text-base sm:text-lg font-semibold text-gray-700">{step.title}</span>
                    </div>
                ))}
            </div>
        </div>  
    );
}

export default WorkProcess;
