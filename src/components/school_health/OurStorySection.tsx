'use client'
import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import MiniHeader from '../general/MiniHeader'
import gridImage from '../../../public/Pretty-Health Website/Images/Col.png'
import tabletImage from '../../../public/Pretty-Health Website/Images/cd86f3f56c56bcd1833cf9da41275a85.jpg'
import playIcon from '../../../public/Pretty-Health Website/Images/Icon (22).png'
import SubHeader from '../general/SubHeader'
import TalkToADoctorCard from './our_story_section/TalkToADoctorCard'

const OurStorySection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    // Refs for individual sections to stagger animations
    const firstSectionRef = useRef<HTMLDivElement>(null);
    const secondSectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the section is visible
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
    }, []);

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
                    flex flex-col md:flex-row items-center justify-center
                    transition-all duration-1000 ease-out
                    ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
                    ${isVisible ? 'delay-200' : ''}
                `}
            >
                <div className="px-4 basis-full md:basis-1/2">
                    <Image 
                        src={gridImage} 
                        alt='Grid Image' 
                        className={`
                            w-full
                            transition-all duration-1000 ease-out
                            ${isVisible ? 'scale-100 rotate-0' : 'scale-90 rotate-6'}
                            ${isVisible ? 'delay-300' : ''}
                        `}
                    />
                </div>
                <div className="px-4 basis-full md:basis-1/2">
                    <div 
                        className={`
                            transition-all duration-1000 ease-out
                            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
                            ${isVisible ? 'delay-400' : ''}
                        `}
                    >
                        <MiniHeader text='Our Story' />
                        <SubHeader text='Pretty-Health Always Take'>
                            <h1 className='font-bold'>Care of Their Patients</h1>
                        </SubHeader>
                        <p 
                            className={`
                                mt-2 opacity-70
                                transition-all duration-1000 ease-out
                                ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
                                ${isVisible ? 'delay-500' : ''}
                            `}
                        >
                            Consequat ea fugiat commodo eiusmod amet exercitation reprehenderit sint ex quis cupidatat. Lorem excepteur fugiat aute excepteur reprehenderit laboris veniam pariatur ad elit aliqua occaecat. Nisi aute dolore reprehenderit cillum sint magna velit quis consectetur excepteur incididunt amet in ullamco. Minim laboris ullamco nisi ullamco ex incididunt mollit labore sint nisi laboris non. Sint magna consectetur mollit sunt magna voluptate laboris aliquip proident. Labore qui eiusmod pariatur nostrud duis adipisicing excepteur.
                        </p>
                    </div>
                </div>
            </div>

            <div 
                ref={secondSectionRef}
                className={`
                    flex flex-col md:flex-row items-center justify-center
                    transition-all duration-1000 ease-out
                    ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
                    ${isVisible ? 'delay-600' : ''}
                `}
            >
                <div className="px-4 basis-full md:basis-1/2">
                    <div 
                        className={`
                            transition-all duration-1000 ease-out
                            ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
                            ${isVisible ? 'delay-700' : ''}
                        `}
                    >
                        <MiniHeader text='Our Story' />
                        <SubHeader text='What Our Patients Tell Others'>
                            <h1 className='font-bold'>About Pretty-Health</h1>
                        </SubHeader>
                        <p 
                            className={`
                                mt-2 opacity-70
                                transition-all duration-1000 ease-out
                                ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
                                ${isVisible ? 'delay-800' : ''}
                            `}
                        >
                            Eiusmod velit pariatur ipsum adipisicing aliquip non aute sint tempor esse id. Consectetur velit sint culpa id non adipisicing dolore amet id cupidatat Lorem enim sint. Laboris mollit adipisicing minim veniam eu consequat aliquip labore reprehenderit nulla. Consectetur adipisicing anim irure aliqua eiusmod culpa.
                        </p>
                    </div>
                </div>
                <div className="px-4 basis-full md:basis-1/2 md:flex justify-center items-center relative">
                    <div 
                        className={`
                            relative w-full md:w-4/5 hidden md:block
                            transition-all duration-1000 ease-out
                            ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
                            ${isVisible ? 'delay-900' : ''}
                        `}
                    >
                        <Image 
                            src={tabletImage} 
                            alt='Tablet Image' 
                            className='w-full'
                        />
                        <Image 
                            src={playIcon} 
                            alt='Play Icon' 
                            width={100} 
                            className={`
                                absolute left-1/3 top-1/3
                                transition-all duration-1000 ease-out
                                ${isVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-180'}
                                ${isVisible ? 'delay-1000' : ''}
                            `}
                        />
                    </div>
                    <div className='flex flex-col gap-4 justify-center items-center md:hidden mt-4'>
                        {[1, 2, 3].map((index) => (
                            <div
                                key={index}
                                className={`
                                    transition-all duration-1000 ease-out
                                    ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
                                    ${isVisible ? `delay-[${1100 + index * 200}ms]` : ''}
                                `}
                            >
                                <TalkToADoctorCard />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurStorySection