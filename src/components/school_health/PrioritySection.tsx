import React from 'react'
import MiniHeader from '../general/MiniHeader'
import { ArrowRight, Star } from 'lucide-react'
import compliantImage from '../../../public/Pretty-Health Website/Images/Frame 37.png';
import grid1Image from '../../../public/Pretty-Health Website/Images/Rectangle 5.png';
import grid2Image from '../../../public/Pretty-Health Website/Images/Rectangle 4.png';
import boldQuoteImage from '../../../public/Pretty-Health Website/Images/ph_quotes-bold.png';
import avatarImage from '../../../public/Pretty-Health Website/Images/Photo by Etty Fidele.png';
import Image from 'next/image'

const PrioritySection = () => {
  return (
    <div className='px-6 md:px-8 lg:px-10 xl:px-20  py-8'>
        <MiniHeader text='Your Health Is Our Top Priority' />
        <div className='text-4xl font-medium'>
            <h1>Our track record speaks for itself. Many</h1>
            <h1>individuals have chosen <span className='text-[#6867AD]'>our medical center</span></h1> 
            <h1 className='text-[#6867AD]'>and have had positive, transformative</h1>
            <h1 className='text-[#6867AD]'>experiences</h1>
        </div>
        
        <div className='mt-8 flex justify-center items-center flex-col md:flex-row gap-4'>
            <div className="flex flex-col items-end justify-center basis-full md:basis-1/2 gap-4">
                <div className="bg-[#E8D3FF] rounded-xl flex gap-4 p-6 items-center w-full lg:w-3/4">
                    <Image src={ compliantImage } alt='Compliant Image' width={ 75 } />
                    <div className='space-y-4'>
                        <p>HIPAA COMPLIANT</p>
                        <p className='font-semibold text-xl'>Pretty Health provides award 
                        winning quality care</p>
                        <button className='flex gap-2 items-center cursor-pointer text-base mt-6'>
                            <ArrowRight className='w-5 h-5' />
                            <p>Learn More</p>
                        </button>
                    </div>
                </div>
                <Image src={ grid1Image } alt='Doctors in operating room image' className='w-full' />
                <div className='w-full md:w-3/4 lg:w-1/2 rounded-xl py-4 bg-[#B6B5FF] text-center flex flex-col items-center'>
                    <p className='text-lg font-semibold'>Average Google Ratings</p>
                    <div className="flex gap-2 items-center mt-4">
                        <Star className='w-8 h-8' />
                        <p className='text-6xl font-semibold'>4.9</p>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col items-end justify-center basis-full md:basis-1/2 gap-4">
                <Image src={ grid2Image } alt='Doctor standing in front of two talking patients image' className='w-full' />
                <div className='w-full rounded-xl bg-[#B6B5FF] p-8'>
                    <Image src={ boldQuoteImage } alt='Bold Quotes Image' width={ 75 } />
                    <p className='mt-4'>&quot;I had a great experience at this healthcare clinic. I was seen quickly, and the doctor was able to diagnose and treat my condition very patiently&quot;</p>
                    <div className='flex gap-3 items-center mt-14'>
                        <Image src={ avatarImage } alt='Avatar Image' width={ 55 } />
                        <div className='space-y-1'>
                            <p className='font-bold uppercase'>Jane Ronan</p>
                            <p>Cardio Patient</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PrioritySection