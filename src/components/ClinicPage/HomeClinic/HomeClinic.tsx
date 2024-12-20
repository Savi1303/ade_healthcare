import Image from "next/image";
import Link from "next/link";
import { BiPlusCircle } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";

const HomeClinic = () => {
    return (
        <div className="relative w-full h-[550px] sm:h-[400px] md:h-[550px] lg:h-[530px]">
            {/* Background */}
            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/Pretty-Health Website/new_images/Group 20650.png"
                    alt="clinicImage"
                    layout="fill"
                    objectFit="cover"
                    className="-z-10"
                />
            </div>

            {/* Home Clinic */}
            <div className="absolute inset-0 flex flex-col justify-center items-start text-white px-4 sm:px-8 lg:px-12 space-y-6">
                <div className="flex">
                    <div className="absolute space-y-4 top-16 sm:top-20 md:top-20 lg:top-28 ">
                        {/* Heading */}
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold max-w-[90%] md:max-w-[45%] lg:max-w-[550px]">
                            Get Better Care{" "}
                            <span className="block sm:inline font-thin">
                                For Your Health
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg font-thin max-w-[90%] md:max-w-[45%] lg:max-w-[650px] md:line-clamp-3">
                            Embrace a world of comprehensive healthcare where your well-being takes
                            center stage. At Meca, we&apos;re dedicated to providing you with personalized and
                            compassionate medical services.
                        </p>

                        {/* Button */}
                        <button className="px-4 py-2 flex items-center gap-2 rounded-full bg-[#2e1635] text-white w-fit">
                            <div className="flex justify-center items-center bg-white text-[#2e1635] w-4 h-4 rounded-full">
                                <FaArrowRight className="w-2 h-2" />
                            </div>
                            <p className="text-lg">Learn More</p>
                        </button>
                    </div>

                    {/* Find Location Section */}
                    <div className="absolute left-0 lg:bottom-8 md:bottom-24 z-40 bottom-24 flex justify-between items-center bg-white space-x-5 px-4 sm:px-6 md:px-8 py-4 border rounded-tr-full rounded-br-full w-[400px] md:w-[600px] lg:w-[600px] ">
                        <div className='flex gap-6'>
                            <BiPlusCircle size={40} className='flex mt-1 bg-[#2e1635] rounded-full border font-2xl p-2' />

                            <div>
                                <span className="font-extrabold uppercase text-xs sm:text-sm md:text-base text-gray-800">
                                    Need Vaccination?
                                </span>

                                <p className="text-xs sm:text-sm font-thin md:text-lg text-gray-800">
                                    Send us a message, let&#39;s get started
                                </p>
                            </div>
                        </div>

                        <Link
                            href="#"
                            className="text-white p-3 flex items-center border rounded-full bg-blue-600 transition duration-300 ease-in-out"
                        >
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>

                {/* Right-Side Image */}
                <div className="absolute right-0 hidden sm:flex pt-6 md:pt-12">
                    <Image
                        src="/Pretty-Health Website/new_images/image 22.png"
                        alt=""
                        width={770}
                        height={600}
                        className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[770px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default HomeClinic;
