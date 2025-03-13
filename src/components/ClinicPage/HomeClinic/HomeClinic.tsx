import Image from "next/image";

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
                    <div className="absolute space-y-4 top-40 sm:top-20 md:top-32 lg:top-28 ">
                        {/* Heading */}
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl -mt-12 max-w-[90%] md:max-w-[45%] lg:max-w-[500px]">
                            <p>
                                We <b>design</b> and <b>manage clinics</b> to meet the <b>unique requirements</b>
                                of your <b>workplace or institution.</b> 
                            </p>
                        </h1>
                    </div>
                </div>

                {/* Right-Side Image */}
                <div className="absolute right-0 hidden sm:flex pt-6 md:pt-1">
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
