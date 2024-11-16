import React from 'react'
import Image from 'next/image';

const ContactHeader = () => {
  return (
    <div>
   <div className="flex justify-center">
   <Image 
      src="/Pretty-Health Website/Images/Icon (4).png" // Path relative to the public folder
      alt="Contact Icon"
      width={50} // Set width and height based on your design needs
      height={50}
      className='mb-[20px]'
    />
   </div>

    <article>
        <span className='text-[#0094DE] font-bold text-[12px]'>Contact us</span>
        <h1 className='text-3xl md:text-5xl'>You’ve Got Questions <br />
        <span className='font-bold'>Feel Free to Ask</span></h1>
    </article>
  </div>
  )
}

export default ContactHeader
