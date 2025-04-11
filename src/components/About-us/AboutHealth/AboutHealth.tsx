'use client';
import React, { useState, useEffect } from "react";
import { PiQuotes } from "react-icons/pi";
import { FaArrowRight, FaArrowLeft, FaStar } from "react-icons/fa";
import Image from "next/image";


const testimonials = [
    {
        quote: "I had a great experience at this healthcare office. I was seen quickly, and the team were very calm and I got my HPV vaccine administered and my next appointment was set up on my phone.",
        image: "/Pretty-Health Website/Images/Photo by Etty Fidele.png",
        name: "Adekunle Florence",
        role: "Vaccination Client",
    },
    {
        quote: "The staff was professional and kind. The vaccination process was smooth and the environment was clean and welcoming.",
        image: "/Pretty-Health Website/Images/Image (1).png",
        name: "Chukwuma Obinna",
        role: "Health Screening Client",
    },
    {
        quote: "I appreciate the timely service and the detailed explanations I received about my health. Highly recommend Prettyhealth Care.",
        image: "/Pretty-Health Website/Images/Image (2).png",
        name: "Fatima Ibrahim",
        role: "Regular Client",
    },
    {
        quote: "The team made me feel comfortable during my visit, and the follow-up care has been excellent. Great service!",
        image: "/Pretty-Health Website/Images/Image (3).png",
        name: "Oluwatobi Adebayo",
        role: "Vaccination Client",
    },
    {
        quote: "The environment is aesthetic and nice. Really a nice place to get your wellness tests done",
        image: "/Pretty-Health Website/Images/Image (3).png",
        name: "Cynthia Uche",
        role: "Client",
    },
];

function AboutHealth() {
    const [currentIndex, setCurrentIndex] = useState(0);
    
        useEffect(() => {
            const timer = setInterval(() => {
                nextSlide();
            }, 3000);
            return () => clearInterval(timer);
        }, [currentIndex]);
    
        const nextSlide = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        };
    
        const prevSlide = () => {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
            );
        };
    return (
        <div className='py-16'>
            <div className="container mx-auto flex flex-col space-y-10 px-6 md:px-10">
                <div className="text-center md:text-left">
                    <span className="text-lg font-bold text-blue-600">
                        Your Health Is Our Top Priority
                    </span>
                    <div className="w-full whitespace-nowrap overflow-hidden">
                        <div className="inline-block animate-scroll">
                            <p className="pr-32 text-2xl md:text-3xl lg:text-4xl text-gray-900 font-thin mt-2 leading-relaxed">
                                Our track record speaks for itself. We led{" "}
                                <span className="font-extrabold">HPV vaccine</span> introduction in Nigeria through the private sector, using an{" "}
                                <span className="font-extrabold">innovative low-cost delivery model.</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center w-full items-end flex-col lg:flex-row gap-4">
                    {/* Left Column */}
                    <div className="flex flex-col items-end justify-center basis-full lg:basis-1/2 gap-4">
                        {/* Card Section */}
                        <div className="bg-[#f8e9f1] rounded-xl flex gap-4 px-6 py-7 items-center w-full md:w-2/2">
                            {/* Image */}
                            <Image
                                src="/Pretty-Health Website/Images/Frame 37.png"
                                alt="HIPAA COMPLIANT"
                                width={60}
                                height={60}
                                className="w-12 h-12 object-contain"
                            />
                            {/* Content */}
                            <div className="flex flex-col space-y-1">
                                <p className="text-2xl text-gray-800 font-medium">
                                    What PrettyHealth client think about us.
                                </p>
                            </div>
                        </div>

                        {/* Rating Info */}
                        <div className="w-full md:w-3/4 lg:w-1/2 rounded-xl py-4 bg-[#B6B5FF] text-center flex flex-col items-center">
                            <p className="text-sm font-bold text-gray-900 uppercase">
                                Average Google Ratings
                            </p>
                            <div className="flex items-center space-x-2 mt-2 justify-center">
                                <FaStar className="text-[#52aa40]" size={26} />
                                <span className="text-gray-800 text-5xl font-black">5.0</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full lg:w-3/4 space-y-6">
                        {/* Testimonials Slider */}
                        <div className="relative w-full mx-auto">
                            <div className="overflow-hidden rounded-2xl shadow-lg space-y-5 bg-[#B6B5FF] py-6 px-10 sm:px-6 md:px-16 lg:px-20">
                                <PiQuotes className="transform rotate-180 text-gray-600" size={48} />
                                <p className="text-gray-900 md:text-lg sm:text-sm lg:text-lg line-clamp-2">
                                    &#34;{testimonials[currentIndex].quote}&#34;
                                </p>
                                <div className="flex items-center space-x-4 mt-4">
                                    <Image
                                        src={testimonials[currentIndex].image}
                                        alt={testimonials[currentIndex].name}
                                        width={60}
                                        height={60}
                                        className="w-12 h-12 rounded-full object-cover border border-gray-300"
                                    />
                                    <div>
                                        <h3 className="text-gray-800 md:text-md sm:text-sm lg:text-lg  font-semibold uppercase">
                                            {testimonials[currentIndex].name}
                                        </h3>
                                        <p className="md:text-md sm:text-sm lg:text-lg  text-gray-900">
                                            {testimonials[currentIndex].role}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="absolute top-1/2 right-2 transform -translate-y-1/2 w-full flex justify-between px-4">
                                <button
                                    title="prev"
                                    className="p-2 bg-blue-100 text-white rounded-full hover:bg-blue-400 transition"
                                    onClick={prevSlide}
                                >
                                    <FaArrowLeft />
                                </button>
                                <button
                                    title='next'
                                    className="p-2 bg-blue-100 text-white rounded-full hover:bg-blue-400 transition"
                                    onClick={nextSlide}
                                >
                                    <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutHealth;
