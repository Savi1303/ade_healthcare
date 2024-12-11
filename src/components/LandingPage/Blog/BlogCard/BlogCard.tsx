'use client'
import Image from "next/image"
import React from 'react'
import { FaArrowRight } from "react-icons/fa";


interface LandingBlogCardProps {
    type: string;
    date: string;
    readTime: string;
    title: string;
    className: string;
}

const BlogCard = ({ type,
    date,
    readTime,
    title,
    className
}: LandingBlogCardProps) => {
    return (
        <div className={`w-[350px] md:w-[375px] flex flex-col items-center rounded-t-3xl rounded-b-3xl duration-1000 ease-out hover:shadow-xl hover:scale-105 transition-transform ${className}`}>
            <div className='relative'>
                <Image
                    src='Pretty-Health Website/Images/Rectangle 7.png'
                    width={350}
                    height={100}
                    alt="blogCard"
                    className="transition-all duration-1000 ease-out"
                />

                <button
                    className='z-10 absolute bottom-5 left-5 py-1 px-3 rounded-full bg-blue-500 text-white transition-all duration-1000 ease-out'>
                    {type}
                </button>


            </div>

            <div className='py-4 px-5'>
                <p className='text-xs opacity-70 transition-all duration-1000 ease-out'>
                    {date} - <span className='uppercase'>{readTime} read</span>
                </p>

                <p className='font-bold my-2 transition-all duration-1000 ease-out'>
                    {title}
                </p>
                <button
                    className='flex gap-2 items-center cursor-pointer text-sm mt-6 hover:text-blue-600'
                >
                    <FaArrowRight className='w-5 h-5' />
                    <p>Read More</p>
                </button>
            </div>
        </div>
    )
}

export default BlogCard
