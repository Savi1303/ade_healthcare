  import Image from 'next/image'
import blogImage from '../../../../public/Pretty-Health Website/Images/Rectangle 7.png'
import { ArrowRight } from 'lucide-react'

const BlogCard = ({ type, date, readTime, title }: { type: string; date: string, readTime: string, title: string }) => {
  return (
    <div className='w-[350px] md:w-[375px] flex flex-col items-center border rounded-t-3xl rounded-b-3xl border-black'>
        <div className='relative' >
            <Image src={ blogImage } alt='Blog Post Image' width={ 350 } className='md:hidden' />
            <Image src={ blogImage } alt='Blog Post Image' width={ 375 } className='hidden md:block' />
            <button className='z-10 absolute bottom-5 left-5 py-1 px-3 rounded-full bg-blue-500 text-white'>{ type }</button>
        </div>
        <div className='py-4 px-5'>
            <p className='text-xs opacity-70'>{ date } - <span className='uppercase'>{ readTime } read</span></p>
            <p className='font-bold my-2'>{ title }</p>
            <button className='flex gap-2 items-center cursor-pointer text-sm mt-6 hover:scale-105 transition'>
                <ArrowRight className='w-5 h-5' />
                <p>Read More</p>
            </button>
        </div>
    </div>
  )
}

export default BlogCard