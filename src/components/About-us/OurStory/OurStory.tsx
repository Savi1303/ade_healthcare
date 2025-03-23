import Image from 'next/image';
import React from 'react';

const OurStory = () => {
    return (
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between py-16 px-6 md:px-12 space-y-10 md:space-y-16">
            <div className="w-full lg:w-1/2 space-y-2 text-center md:text-left">
                <p className="text-3xl font-medium tracking-wider">
                    Our <span className='font-extrabold'>Story</span> 
                </p>

                {/* <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal text-gray-800 md:w-[90%] lg:w-[550px] mx-auto md:mx-0">
                    Pretty-Health Care Prioritize Her {' '}
                    <span className="text-black font-extrabold">Clients</span>
                </h3> */}

                {/* Section Description */}
                <p className="text-gray-600 text-justify leading-tight md:w-[90%] lg:w-[550px] mx-auto md:mx-0">
                    <span className='text-2xl'>I</span>n an environment where curative health care is out of reach for many, Prettyhealth began
                    as a powerful idea of one-physician &apos;Odunayo Talabi&apos; who believed that prevention
                    should be more than just an option, it should be a way of life. The journey began when he
                    was able to convince 3 doctors to join him in forming a passionate team determined to break
                    the barriers that kept people from living healthier lives. They knew that if they could empower
                    individuals to take charge of their health before problems arose, they could help prevent suffering,
                    lower healthcare costs, and extend lifespans. But how could they make this vision a reality in a world 
                    dominated by a bias for curative treatment? The answer lay in innovation. By embracing the latest in health technology 
                    and using tools such as vaccination, tailored health screening, and mobile health delivery, they created a 
                    system where people could easily access preventive care at a fraction of the cost. No longer would individuals 
                    have to wait for illness to strike before seeking care. Instead, they could proactively monitor and manage their 
                    health, preventing problems before they began. As the idea took shape, partnerships with communities, schools, 
                    and corporate organsiations grew. The company&apos;s reach expanded, bringing affordable, preventive health services 
                    to more and more people. With each passing day, the team saw lives transformed, people experiencing the ah ah 
                    moment of healthier, more fulfilling lives. What started as a simple idea, a desire to make prevention a way of life, 
                    had blossomed into a movement. A movement that continues to inspire change, improve well-being, and prove 
                    that health is not just about treating sickness, but about embracing wellness as a way of life.           
                </p>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center items-center">
                <Image
                    src="/Pretty-Health Website/Images/Group 8.png"
                    alt="Pretty Health Story"
                    width={500}
                    height={400}
                    className="object-contain w-full max-w-xs md:max-w-lg lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl"
                />
            </div>
        </div>
    );
};

export default OurStory;