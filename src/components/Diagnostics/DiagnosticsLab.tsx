import Image from 'next/image'
import React from 'react'

function DiagnosticsLab() {
    return (
        <div className='flex flex-col md:flex-row py-12 justify-center w-full items-center px-4 sm:px-8 md:px-12'>
            {/* Text Section */}
            <div className='w-full md:w-1/2 flex flex-col gap-2 text-center md:text-left sm:px-0 md:px-0'>
                <span className='text-4xl sm:text-3xl md:text-3xl lg:text-5xl'>
                    Get your <span className='font-black'>Laboratory</span>
                </span>

                <span className='text-2xl sm:text-3xl md:text-3xl lg:text-5xl'>
                    <span className='font-black'>Tests</span> done with <span className='font-black'>Ease</span>
                </span>
            </div>

            {/* Image Section */}
            <div className='w-full md:w-1/2 flex gap-6 pr-5 sm:gap-10 justify-center items-center mt-6 md:mt-0'>
                <Image
                    src='/Pretty-Health Website/new_images/Rectangle 6298 (2).png'
                    alt='Image One'
                    width={200}
                    height={200}
                    className='w-[150px] sm:w-[180px] md:w-[200px] h-auto'
                />

                <Image
                    src='/Pretty-Health Website/new_images/Rectangle 6299 (1).png'
                    alt='Image Two'
                    width={200}
                    height={200}
                    className='w-[150px] sm:w-[180px] md:w-[200px] h-auto'
                />
            </div>
        </div>
    )
}

export default DiagnosticsLab;
