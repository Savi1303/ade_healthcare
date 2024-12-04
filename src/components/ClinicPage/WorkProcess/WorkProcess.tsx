import Image from 'next/image';
import React from 'react';

function WorkProcess() {
    // Data for process steps
    const steps = [
        { id: 1, title: 'Arrival in ED', icon: '/Pretty-Health Website/Images/Icon (5).png' },
        { id: 2, title: 'Triage', icon: '/Pretty-Health Website/Images/Icon (6).png' },
        { id: 3, title: 'Registration', icon: '/Pretty-Health Website/Images/Icon (7).png' },
        { id: 4, title: 'Medical Consultations', icon: '/Pretty-Health Website/Images/Icon (8).png' },
        { id: 5, title: 'Treatment', icon: '/Pretty-Health Website/Images/Icon (9).png' },
        { id: 6, title: 'Discharge / Admission', icon: '/Pretty-Health Website/Images/Icon (10).png' },
        { id: 7, title: 'History', icon: '/Pretty-Health Website/Images/Icon (11).png' },
        { id: 8, title: 'Blood Sample', icon: '/Pretty-Health Website/Images/Icon (12).png' },
        { id: 9, title: 'Testing', icon: '/Pretty-Health Website/Images/Icon (14).png' },
    ];

    return (
        <div className="bg-gray-50 py-20">
            {/* Header Section */}
            <div className="px-6 sm:px-12 lg:px-40 mb-12 text-center">
                <h1 className="text-lg font-bold uppercase text-blue-600 tracking-wider">Working Process</h1>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
                    Working Process{" "}
                    <span className="font-thin">Of Our Hospital For The Patients</span>
                </h2>
                <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
                    Your visit is measured from your arrival until you are sent home or admitted to the hospital.
                    Depending on your health-care needs, your visit can be lengthy to ensure that you get the care you need.
                </p>
            </div>

            {/* Steps Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-12 lg:px-32">
                {steps.map((step) => (
                    <div
                        key={step.id}
                        className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-6 space-y-4 border-t-4 border-blue-600 hover:shadow-xl transition duration-300"
                    >
                        {/* Icon */}
                        <div className="w-16 h-16 sm:w-20 sm:h-20">
                            <Image
                                src={step.icon}
                                alt={step.title}
                                width={100}
                                height={100}
                                className="w-full h-full"
                            />
                        </div>
                        {/* Title */}
                        <span className="text-base sm:text-lg font-semibold text-gray-700">{step.title}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WorkProcess;
