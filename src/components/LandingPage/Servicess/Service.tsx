import React from 'react';
import ServiceCard from './ServiceCard/ServiceCard';
import { FaArrowRight } from 'react-icons/fa';
import 'animate.css';


const services = [
    {
        image: '/Pretty-Health Website/Images/image 3.png',
        title: 'Food & Nutrition',
        description: '20+ Doctors are available under this department who serve.',
    },
    {
        image: '/Pretty-Health Website/Images/image 10.png',
        title: 'Medicine & Nephrology',
        description: '20+ Doctors are available under this department who serve.',
    },
    {
        image: '/Pretty-Health Website/Images/image 5.png',
        title: 'Ophthalmology',
        description: '20+ Doctors are available under this department who serve.',
    },
    {
        image: '/Pretty-Health Website/Images/image 6.png',
        title: 'Dental Care',
        description: '20+ Doctors are available under this department who serve.',
    },
    {
        image: '/Pretty-Health Website/Images/image 7.png',
        title: 'Surgery',
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
        <div className="py-16 bg-[#c0cceb94]">
            <div className="container mx-auto px-6 sm:px-8 lg:px-10 space-y-12">
                {/* Section Header */}
                <div className="text-center">
                    <span className="text-sm font-semibold text-indigo-600">Our Services</span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-thin text-gray-800 mt-2 md:w-[500px] mx-auto">
                        We Serve in Different{' '}
                        <span className="font-extrabold">Areas For Our Patients</span>
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 animate__animated animate__zoomIn">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            image={service.image}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>

                {/* View */}
                <p className="text-gray-600 text-sm text-center animate__animated animate__slideInLeft">
                    We have 8+ more care services including an emergency department.{' '}
                    <a
                        href="#"
                        className="text-indigo-600 font-semibold hover:underline inline-flex items-center"
                    >
                        View All
                        <FaArrowRight className="ml-1" />
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Service;
