import React from 'react'
import MiniHeader from '../general/MiniHeader'
import SubHeader from '../general/SubHeader'
import BlogCard from './blog_section/BlogCard'
import { blogPosts } from '@/constants'

const BlogSection = () => {
  return (
    <div className='py-8'>
        <div className='text-center'>
            <MiniHeader text='Blog & Articles' />
            <SubHeader text='Read Top Articles To'>
                <p className='font-bold'>Protect Your Health</p>
            </SubHeader>
        </div>
        <div className='flex flex-wrap gap-4 flex-col md:flex-row items-center justify-center mt-12 px-6'>
            {
                blogPosts.map( ( post, i ) => <BlogCard title={ post.title } readTime={ post.readTime } date={ post.date } type={ post.type } key={` ${ post.date } + ${ i } `} />)
            }
        </div>
    </div>
  )
}

export default BlogSection