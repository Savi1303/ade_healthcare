import React from 'react'

const ContactForm = () => {
  return (
    <div className='form-container'>
      <form
       action=""
       className="flex flex-col gap-[15px] font-semibold md:py-[20px] md:pl-[20px] md:border-l-2 md:border-blue-500"
    >

        <div className="group flex md:flex-row flex-col gap-[15px] md:gap-[40px]">
            <div className="form-group flex flex-col gap-[10px]">
                <label htmlFor="" className='text-[13px]'>First Name</label>
                <input type="text" placeholder='Enter First Name' className='border border-[#0094DE] md:w-[250px] outline-none md:py-[5px] pl-[20px] py-[10px] rounded-[5px] placeholder:text-black placeholder:text-[12px]' />
            </div>
            <div className="form-group flex flex-col gap-[10px]">
                <label htmlFor="" className='text-[13px]'>Last Name</label>
                <input type="text" placeholder='Enter Last Name' className='border border-[#0094DE] md:w-[250px] outline-none md:py-[5px] pl-[20px] py-[10px] rounded-[5px] placeholder:text-black placeholder:text-[12px]' />
            </div>
        </div>

        <div className="group flex flex-col md:flex-row gap-[15px] md:gap-[40px]">
            <div className="form-group flex flex-col gap-[10px]">
                <label htmlFor="" className='text-[13px]'>Email</label>
                <input type="email" placeholder='Enter your Email' className='border border-[#0094DE] outline-none md:w-[250px] md:py-[5px] pl-[20px] py-[10px] rounded-[5px] placeholder:text-black placeholder:text-[12px]' />
            </div>
            <div className="form-group flex flex-col gap-[10px]">
                <label htmlFor="" className='text-[13px]'>Phone Number</label>
                <input type="text" placeholder='Enter Phone Number' className='border border-[#0094DE] outline-none md:w-[250px] md:py-[5px] pl-[20px] py-[10px] rounded-[5px] placeholder:text-black placeholder:text-[12px]' />
            </div>
        </div>

        <div className="form-group flex flex-col gap-[10px]">
            <label htmlFor="" className='text-[13px]'>Message</label>
            <textarea name="" id="" placeholder='Enter your Message' className='border border-[#0094DE] outline-none pl-[20px] pt-[10px]  rounded-[5px] placeholder:text-black placeholder:text-[12px]'></textarea>
        </div>

        <div className="group flex flex-col gap-[15px] md:flex-row md:justify-between">
            <div className="form-group flex gap-[10px]  items-center">
              <input type="checkbox" name="terms" id="terms" className='border border-[#0094DE] p-[10px]' />
              <label htmlFor="terms" className='text-[11px] md:text-[13px]'>I agree with Terms of Use and Privacy Policy</label>
            </div>
            <button type='submit' className='text-white bg-[#4E96D1] py-[10px] px-[30px] rounded-[5px] w-full md:w-fit'>Send</button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
