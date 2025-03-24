'use client'
import React, { useRef, useState, useEffect } from 'react'
import { iconsGroup } from "@/constants"
import IconCard from "./icon_section/IconCard"

const IconsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

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
                bg-[#331C4C] text-white mt-40 py-16 px-4 
                flex justify-center items-center flex-wrap gap-8
                transition-all duration-1000 ease-out h-[450px]
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
        >
            {iconsGroup.map((icon, index) => (
                <IconCard 
                    key={icon.title} 
                    text={icon.text} 
                    title={icon.title} 
                    image={icon.image} 
                    index={index}
                    isVisible={isVisible}
                />
            ))}
        </div>
    )
}

export default IconsSection