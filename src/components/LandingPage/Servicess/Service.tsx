import React from 'react';
import ServiceCard from './ServiceCard/ServiceCard';

const services = [
    {
        image: '/Pretty-Health Website/Images/image 3.png',
        title: 'Vaccination Services',
        description: '20+ Doctors are available under this department who serve.',
    },
    {
        image: '/Pretty-Health Website/Images/image 10.png',
        title: 'Health Screening Services',
        description: '20+ Doctors are available under this department who serve.',
    },
    {
        image: '/Pretty-Health Website/Images/image 5.png',
        title: 'Integrated School Health and Adolescent Health Services',
        description: '20+ Doctors are available under this department who serve.',
    },
    {
        image: '/Pretty-Health Website/Images/image 6.png',
        title: 'Health Promotion Services and Research',
        description: '20+ Doctors are available under this department who serve.',
    },
    {
        image: '/Pretty-Health Website/Images/image 8.png',
        title: 'Orthopedic',
        description: '20+ Doctors are available under this department who serve.',
    },
    {
        image: '/Pretty-Health Website/Images/image 9.png',
        title: 'Neurology',
        description: '20+ Doctors are available under this department who serve.',
    },
    {
        image: '/Pretty-Health Website/Images/image 12.png',
        title: 'Cardiology',
        description: '20+ Doctors are available under this department who serve.',
    },
];

const Service = () => {
    return (
        <div className="py-16 bg-[#B6B5FF]">
            <div className="mx-auto px-6 sm:px-8 lg:px-10 space-y-12">
                {/* Section Header */}
                <div className="text-center">
                    <span className="text-lg font-semibold text-blue-600">Our Services</span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-thin text-gray-800 mt-2 md:w-[500px] lg:w-[600px] mx-auto">
                        We Serve in Different{' '}
                        <span className="font-[950]">Areas For Our Patients</span>
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            image={service.image}
                            title={service.title}
                            description={service.description}
                            className={index === services.length - 1 ? 'col-span-full flex justify-center' : ''}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Service;