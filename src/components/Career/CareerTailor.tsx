import Image from 'next/image'
import React from 'react'

function CareerTailor() {
    return (
        <div className='flex flex-col md:flex-row py-12 justify-center w-full items-center px-4 sm:px-8 md:px-12'>
            {/* Text Section */}
            <div className='w-full md:w-1/2 flex flex-col gap-2 text-center md:text-left px-4 sm:px-10 md:px-0'>
                <span className='text-2xl sm:text-3xl md:text-4xl font-black'>
                    Get Tailored Job
                </span>

                <span className='text-2xl sm:text-3xl md:text-4xl'>
                    Recommendations <span className='font-black'>Based On</span>
                </span>

                <span className='text-2xl sm:text-3xl md:text-4xl'>
                    Your <span className='font-black'>Interests.</span>
                </span>
            </div>

            {/* Image Section */}
            <div className='w-full md:w-1/2 flex gap-6 sm:gap-10 justify-center items-center mt-6 md:mt-0'>
                <Image
                    src='/Pretty-Health Website/new_images/Rectangle 6298 (1).png'
                    alt='Image One'
                    width={200}
                    height={200}
                    className='w-[150px] sm:w-[180px] md:w-[200px] h-auto'
                />

                <Image
                    src='/Pretty-Health Website/new_images/Rectangle 6299.png'
                    alt='Image Two'
                    width={200}
                    height={200}
                    className='w-[150px] sm:w-[180px] md:w-[200px] h-auto'
                />
            </div>
        </div>
    )
}

export default CareerTailor;
