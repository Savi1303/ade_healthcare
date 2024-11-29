import Image from "next/image"
import React from 'react'

const BlogCard = () => {
    return (
        <div className="bg-white ">
            {/* Image Section */}
            <div className="w-full">
                <Image 
                    src="/Pretty-Health Website/Images/Frame 50.png" 
                    alt="blogCard" 
                    width={500}
                    height={100}
                    
                />
            </div>
        </div>
    )
}

export default BlogCard
