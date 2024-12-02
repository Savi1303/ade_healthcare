import React from 'react';
import ContactHeader from '@/components/Contact Us/ContactHeader';
import ContactForm from '@/components/Contact Us/ContactForm';

const Page = () => {
  return (
   <div className='py-[45px] md:py-[100px] md:px-[100px] px-[25px] flex justify-between flex-col md:flex-row gap-[30px] md:items-center'>
     <ContactHeader />
     <ContactForm />
   </div>
  );
};

export default Page;

