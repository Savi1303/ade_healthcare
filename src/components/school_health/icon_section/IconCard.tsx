'use client'
import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface IconCardProps {
    image: StaticImageData,
    title: string,
    text: string,
    index: number,
    isVisible: boolean
}

const IconCard = ({ image, title, text, index, isVisible }: IconCardProps) => {
    return (
        <div
            className={`
                flex flex-col items-center text-center p-6 
                transition-all duration-1000 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
            style={{ transitionDelay: `${index * 200}ms` }}
        >
            <Image
                src={image}
                alt={title}
                width={80}
                height={80}
                className={`
                    mx-auto
                    transition-all duration-1000 ease-out
                    ${isVisible ? 'scale-100 rotate-0' : 'scale-50 rotate-180'}
                `}
                style={{ transitionDelay: `${index * 200}ms` }}
            />
            <h3
                className={`
                    flex justify-center items-center font-bold text-xl mt-4
                    transition-all duration-1000 ease-out text-gray-300
                    ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
                `}
                style={{ transitionDelay: `${index * 200 + 100}ms` }}
            >
                {title}
            </h3>
            <p
                className={`
                    text-sm mt-2 text-gray-100
                    transition-all duration-1000 ease-out
                    ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
                `}
                style={{ transitionDelay: `${index * 200 + 200}ms` }}
            >
                {text}
            </p>
        </div>
    )
}

export default IconCard;
