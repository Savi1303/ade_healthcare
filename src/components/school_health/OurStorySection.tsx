'use client'
import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image';
import ContactForm from '@/components/Contact-Us/ContactForm';

const OurStorySection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    const firstSectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(sectionRef.current);
            }
        };
    }, [sectionRef]);

    return (
        <div 
            ref={sectionRef}
            className={`
                py-16 px-4 md:px-6 lg:px-16 xl:px-20 space-y-8
                transition-all duration-1000 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
        >
            <div 
                ref={firstSectionRef}
                className={`
                    flex flex-col items-center justify-center lg:flex-row
                    transition-all duration-1000 ease-out
                    ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
                    ${isVisible ? 'delay-200' : ''}
                `}
            >
                <div className="px-4 basis-full md:basis-1/2 pb-5 ">
                    <div 
                        className={`
                            transition-all duration-1000 ease-out
                            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
                            ${isVisible ? 'delay-400' : ''}
                        `}
                    >            
                        <div className="grid justify-center lg:justify-normal">
                            <Image 
                                src="/Pretty-Health Website/Images/Icon (4).png" 
                                alt="Contact Icon"
                                width={70}
                                height={70}
                                className='lg:mb-[20px] lg:w-[70px] md:w-[60px] w-auto'
                            />
                        </div>            
                            <h2 className='font-bold lg:text-4xl md:text-4xl text-[1.3rem] text-center lg:text-start'>Send us a message to book our School Health Services!</h2>
                        <p 
                            className={`
                                mt-2 opacity-70
                                transition-all duration-1000 ease-out
                                ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
                                ${isVisible ? 'delay-500' : ''}
                            `}
                        >
                           
                        </p>
                    </div>
                </div>
                <div className="lg:px-4 basis-full md:basis-1/2 ">
                    < ContactForm />
                </div>
            </div>
        </div>
    )
}

export default OurStorySection