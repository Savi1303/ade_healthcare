import Image from 'next/image';
import React from 'react';

const Story = () => {
    return (
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-16 px-6 md:px-12 space-y-10 md:space-y-0">
            {/* Left Content */}
            <div className="w-full md:w-1/2 flex justify-center">
                <Image
                    src="/Pretty-Health Website/Images/Group 8.png"
                    alt="Pretty Health Story"
                    width={500}
                    height={400}
                    className="object-contain"
                />
            </div>

            {/* Right Content */}
            <div className="w-full md:w-1/2 space-y-3 text-center md:text-left">
                {/* Section Label */}
                <p className="text-xs font-semibold text-indigo-600 tracking-wider">
                    Our Story
                </p>

                {/* Section Title */}
                <h3 className="text-2xl md:text-4xl font-thin text-gray-800 md:w-[90%] lg:w-[550px] mx-auto md:mx-0">
                    What Our Patients Tell Others{' '}
                    <span className="text-black font-extrabold">About Pretty Health</span>
                </h3>

                {/* Section Description */}
                <p className="text-gray-600 leading-relaxed md:w-[90%] lg:w-[550px] mx-auto md:mx-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique molestiae
                    vero cupiditate repudiandae cumque. Natus molestiae sunt porro? Veniam vel
                    enim obcaecati excepturi, repellendus iste dignissimos cupiditate velit
                    dolores doloremque delectus. Fugiat saepe nulla quam voluptates eos praesentium
                    quia quis velit vero quod, inventore fugit at esse amet nostrum neque, laboriosam
                    nobis voluptas culpa officiis molestiae!
                </p>
            </div>
        </div>
    );
};

export default Story;
