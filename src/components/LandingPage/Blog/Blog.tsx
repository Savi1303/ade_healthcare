import React from 'react'
import BlogCard from './BlogCard/BlogCard'
import 'animate.css';

const Blog: React.FC = () => {
    return (
        <div className="container mx-auto p-5">
            {/* Header Section */}
            <div className="text-center mb-10 animate__animated animate__slideInLeft">
                <h2 className="text-xs font-bold text-indigo-400">Blog & Articles</h2>
                <h3 className="text-xl mt-3 text-gray-600">
                    Read Top Articles to <span className="text-black font-bold">Protect Your Health</span>
                </h3>
            </div>

            {/* Blog Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate__animated animate__slideInRight">
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
    )
}

export default Blog
