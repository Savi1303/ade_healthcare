import React from 'react';
import ServiceCard from './ServiceCard/ServiceCard';

const services = [
    {
        image: '/Pretty-Health Website/Images/image 3.png',
        title: 'Vaccination Services',
        items: ["HBV Vaccine", "HPV Vaccine", "Typhoid Vaccine", "MMR (Measles, Mumps, Rubella Vaccine)", "Varicella Vaccine", "Tdap Vaccine", "Meningitis Vaccine",],
    },
    {
        image: '/Pretty-Health Website/Images/image 10.png',
        title: 'Health Screening Services',
        items: ["Laboratory Services", "Mammogram", "Wellness Screening",],
    },
    {
        image: '/Pretty-Health Website/Images/image 5.png',
        title: 'Integrated School Health and Adolescent Health Services',
        items: ["School Clinics", "Pre - Admission Screening", "School Vaccination Services", "Intergrated School Intervention"],
    },
    {
        image: '/Pretty-Health Website/Images/image 7.png',
        title: 'Health Promotion Services and Research',
    },
];

const Service = () => {
    return (
        <div className="py-16 bg-[#cdccf3]">
            <div className="mx-auto px-6 sm:px-8 lg:px-10 space-y-12">
                {/* Section Header */}
                <div className="text-center">
                    <span className="text-lg font-extrabold text-blue-600">Our Services</span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-thin text-gray-800 mt-2 md:w-[500px] lg:w-[600px] mx-auto">
                        We Serve in Different{' '}
                        <span className="font-extrabold">Areas For Our Clients</span>
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            image={service.image}
                            title={service.title}
                            items={service.items || []}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Service;
