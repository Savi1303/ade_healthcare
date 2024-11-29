'use client'
import React, { useRef, useState, useEffect } from 'react'
import MiniHeader from '../general/MiniHeader'
import SubHeader from '../general/SubHeader'
import BlogCard from './blog_section/BlogCard'
import { blogPosts } from '@/constants'

const BlogSection = () => {
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
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div 
            ref={sectionRef}
            className={`
                py-8
                transition-all duration-1000 ease-out
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}
        >
            <div 
                className={`
                    text-center
                    transition-all duration-1000 ease-out
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}
                    ${isVisible ? 'delay-200' : ''}
                `}
            >
                <MiniHeader text='Blog & Articles' />
                <SubHeader text='Read Top Articles To'>
                    <p className='font-bold'>Protect Your Health</p>
                </SubHeader>
            </div>
            <div 
                className={`
                    flex flex-wrap gap-4 flex-col md:flex-row items-center justify-center mt-12
                    transition-all duration-1000 ease-out
                    ${isVisible ? 'opacity-100' : 'opacity-0'}
                    ${isVisible ? 'delay-400' : ''}
                `}
            >
                {blogPosts.map((post, index) => (
                    <BlogCard 
                        key={`${post.date}-${index}`}
                        title={post.title} 
                        readTime={post.readTime} 
                        date={post.date} 
                        type={post.type}
                        index={index}
                        isVisible={isVisible}
                    />
                ))}
            </div>
        </div>
    )
}

export default BlogSection