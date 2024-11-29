import { ArrowRight } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'

const ServiceCard = ({ image, title, text }: { image: StaticImageData, title: string, text: string }) => {
  return (
    <div className='rounded-xl px-4 py-8 w-[275px] bg-white'>
        <Image src={ image } alt='Service Image' width={ 50 } />
        <h3 className='text-xl font-semibold mt-3'>{ title }</h3>
        <p className='opacity-70 mt-3'>{ text }</p>
        <button className='flex gap-2 items-center cursor-pointer text-sm mt-6 hover:scale-105 transition'>
            <ArrowRight className='w-5 h-5' />
            <p>Read More</p>
        </button>
    </div>
  )
}

export default ServiceCard