'use client'
import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard/BlogCard';

const LandingBlogPost = [
    {
        date: 'April 19, 2025',
        readTime: '4 mins',
        title: 'Tech Talk: Exploring Cutting Edge Medical Technologies at Pretty-Health',
        type: 'Clinical Health'
    },
    {
        date: 'April 19, 2025',
        readTime: '4 mins',
        title: 'Tech Talk: Exploring Cutting Edge Medical Technologies at Pretty-Health',
        type: 'Clinical Health'
    },
    {
        date: 'April 19, 2025',
        readTime: '4 mins',
        title: 'Tech Talk: Exploring Cutting Edge Medical Technologies at Pretty-Health',
        type: 'Clinical Health'
    }
]

const Blog = () => {
    const [isMediumScreen, setIsMediumScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && window.innerWidth < 1024) {
                setIsMediumScreen(true);
            } else {
                setIsMediumScreen(false);
            }
        };

        handleResize(); 
        window.addEventListener('resize', handleResize); 
        return () => window.removeEventListener('resize', handleResize); 
    }, []);

    return (
        <div className="container mx-auto py-5">
            {/* Header Section */}
            <div className="text-center mb-10">
                <h2 className="sm:text-lg text-lg font-bold text-blue-600">
                    Blog & Articles
                </h2>
                <h3 className="lg:text-5xl text-2xl md:w-[400px] w-[300px] lg:w-[550px] mx-auto sm:text-2xl md:text-3xl mt-3 text-gray-900">
                    Read top articles to <span className="text-black font-extrabold">protect your health</span>
                </h3>
            </div>

            {/* Blog Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center px-6 gap-6 mt-12">
                {LandingBlogPost.map((post, index) => (
                    <div
                        key={`${post.date}-${index}`}
                        className={`${
                            index === LandingBlogPost.length - 1 && isMediumScreen
                                ? 'col-span-1 md:col-span-3 md:flex md:justify-center' // Center last card on medium screens
                                : ''
                        }`}
                    >
                        <BlogCard
                            title={post.title}
                            readTime={post.readTime}
                            date={post.date}
                            type={post.type}
                            className={index === LandingBlogPost.length - 1 && isMediumScreen ? 'col-span-1 md:col-span-3 md:flex md:justify-center' : ''} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Blog;
