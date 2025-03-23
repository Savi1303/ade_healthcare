import Image from 'next/image'
import React from 'react'

function CareerHome() {
    return (
        <div className='py-16 gap-10 flex flex-col justify-center items-center px-4 sm:px-8'>
            {/* Text Section */}
            <div className='flex flex-col items-center justify-center gap-3 mb-12 text-center'>
                <h2 className='text-3xl sm:text-4xl md:text-5xl leading-tight'>
                    Build a {''}
                    <span className='font-extrabold'>
                        Healthier Future
                    </span> {''} with Us!
                </h2>

                <h2 className='text-2xl sm:text-3xl md:text-4xl'>
                    Join Our Team
                </h2>
            </div>

            {/* Image Section */}
            <div className='w-full max-w-4xl px-4'>
                <Image
                    src='/Pretty-Health Website/new_images/Rectangle 6298 (3).png'
                    alt='Career Image'
                    width={1000}
                    height={500}
                    layout="responsive"
                />
            </div>
        </div>
    )
}

export default CareerHome;
