import React from 'react'
import Image from 'next/image';

const ContactHeader = () => {
  return (
    <div>
   <div className="flex justify-center">
   <Image 
      src="/Pretty-Health Website/Images/Icon (4).png" 
      alt="Contact Icon"
      width={70} 
      height={70}
      className='mb-[20px]'
    />
   </div>

    <article>
        <span className='text-[#0094DE] font-bold text-[17px]'>Contact us</span>
        <h1 className='text-3xl md:text-5xl'>You&apos;ve got questions? <br />
        <span className='font-bold'>Feel free to ask</span></h1>
    </article>
  </div>
  )
}

export default ContactHeader
