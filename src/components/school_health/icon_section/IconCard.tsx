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
                flex flex-col items-center justify-center gap-3 w-[250px] text-center
                transition-all duration-1000 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                ${isVisible ? `delay-[${index * 200}ms]` : ''}
            `}
        >
            <Image 
                src={image} 
                alt='Icon Image' 
                width={80} 
                className={`
                    transition-all duration-1000 ease-out
                    ${isVisible ? 'scale-100 rotate-0' : 'scale-50 rotate-180'}
                    ${isVisible ? `delay-[${index * 200}ms]` : ''}
                `}
            />
            <h3 
                className={`
                    font-bold text-xl
                    transition-all duration-1000 ease-out
                    ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
                    ${isVisible ? `delay-[${index * 200 + 100}ms]` : ''}
                `}
            >
                {title}
            </h3>
            <p 
                className={`
                    text-sm
                    transition-all duration-1000 ease-out
                    ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
                    ${isVisible ? `delay-[${index * 200 + 200}ms]` : ''}
                `}
            >
                {text}
            </p>
        </div>
    )
}

export default IconCard