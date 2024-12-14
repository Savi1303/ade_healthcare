import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import AboutCard from './AboutCard/AboutCard';

const AboutServices = [
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

function AboutService() {
    return (
        <div className="py-16 bg-[#f5b8f55b]">
            <div className="mx-auto px-6 sm:px-8 lg:px-10 space-y-12">
                {/* Section Header */}
                <div className="text-center">
                    <span className="text-lg font-semibold text-blue-600">Our Services</span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-thin text-gray-800 mt-2 md:w-[500px] mx-auto">
                        We Serve in Different{' '}
                        <span className="font-extrabold">Areas For Our Patients</span>
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-5">
                    {AboutServices.map((about, index) => (
                        <AboutCard
                            key={index}
                            image={about.image}
                            title={about.title}
                            description={about.description}
                        />
                    ))}
                </div>

                {/* View All Link */}
                <p className="text-gray-950 text-md text-center">
                    We have 8+ more care services including an emergency department.{' '}
                    <a
                        href="#"
                        className="text-indigo-600 font-semibold inline-flex items-center group"
                    >
                        <span className="inline-flex items-center border-b-2 border-transparent group-hover:border-indigo-600">
                            View All
                            <FaArrowRight className="ml-1" />
                        </span>
                    </a>
                </p>
            </div>
        </div>
    )
}

export default AboutService