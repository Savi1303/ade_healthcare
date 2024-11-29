'use client'
import React from 'react'
import Image from 'next/image'
import blogImage from '../../../../public/Pretty-Health Website/Images/Rectangle 7.png'
import { ArrowRight } from 'lucide-react'

interface BlogCardProps {
    type: string; 
    date: string; 
    readTime: string; 
    title: string;
    index: number;
    isVisible: boolean;
}

const BlogCard = ({ 
    type, 
    date, 
    readTime, 
    title, 
    index,
    isVisible 
}: BlogCardProps) => {
    return (
        <div 
            className={`
                w-[350px] md:w-[375px] 
                flex flex-col items-center 
                border rounded-t-3xl rounded-b-3xl border-black
                transition-all duration-1000 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                ${isVisible ? `delay-[${500 + index * 200}ms]` : ''}
                hover:shadow-xl hover:scale-105 transition-transform
            `}
        >
            <div className='relative'>
                <Image 
                    src={blogImage} 
                    alt='Blog Post Image' 
                    width={350} 
                    className={`
                        md:hidden
                        transition-all duration-1000 ease-out
                        ${isVisible ? 'scale-100 rotate-0' : 'scale-90 rotate-3'}
                        ${isVisible ? `delay-[${600 + index * 200}ms]` : ''}
                    `} 
                />
                <Image 
                    src={blogImage} 
                    alt='Blog Post Image' 
                    width={375} 
                    className={`
                        hidden md:block
                        transition-all duration-1000 ease-out
                        ${isVisible ? 'scale-100 rotate-0' : 'scale-90 rotate-3'}
                        ${isVisible ? `delay-[${600 + index * 200}ms]` : ''}
                    `} 
                />
                <button 
                    className={`
                        z-10 absolute bottom-5 left-5 
                        py-1 px-3 rounded-full bg-blue-500 text-white
                        transition-all duration-1000 ease-out
                        ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}
                        ${isVisible ? `delay-[${700 + index * 200}ms]` : ''}
                    `}
                >
                    {type}
                </button>
            </div>
            <div className='py-4 px-5'>
                <p 
                    className={`
                        text-xs opacity-70
                        transition-all duration-1000 ease-out
                        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
                        ${isVisible ? `delay-[${800 + index * 200}ms]` : ''}
                    `}
                >
                    {date} - <span className='uppercase'>{readTime} read</span>
                </p>
                <p 
                    className={`
                        font-bold my-2
                        transition-all duration-1000 ease-out
                        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
                        ${isVisible ? `delay-[${900 + index * 200}ms]` : ''}
                    `}
                >
                    {title}
                </p>
                <button 
                    className={`
                        flex gap-2 items-center cursor-pointer 
                        text-sm mt-6 hover:scale-105 transition
                        transition-all duration-1000 ease-out
                        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
                        ${isVisible ? `delay-[${1000 + index * 200}ms]` : ''}
                    `}
                >
                    <ArrowRight className='w-5 h-5' />
                    <p>Read More</p>
                </button>
            </div>
        </div>
    )
}

export default BlogCard