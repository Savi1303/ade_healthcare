import Image from "next/image";

const VaccinationNation = () => {
    return (
        <div className="lg:py-12 py-4 min-h-screen lg:flex flex-row gap-6 lg:px-12 px-3">
            {/* Main Section */}
            <div className="max-w-[750px] mx-auto p-6 ">
                <div className="flex flex-col  items-center gap-6">
                    {/* Image Section */}
                    <div className="">
                        <Image
                            src="/Pretty-Health Website/new_images/image (2).png"
                            alt="HPV Vaccination"
                            width={800}
                            height={400}
                            className="rounded-lg"
                        />
                    </div>
                    {/* Text Section */}
                    <div className="">
                        <h2 className="text-2xl font-bold text-blue-950">
                            National impact [Trailblazing protection from HPV vaccination]
                        </h2>
                        <p className="mt-4 text-gray-600 text-justify">
                            As Nigeria&#39;s leader in school-based HPV vaccination, we launched
                            the country&#39;s largest initiative in 2014 to protect young lives -
                            raising awareness and providing vaccinations using a low-cost
                            delivery model a full decade before the government&#39;s official
                            roll-out. Our pioneering work laid a vital foundation, equipping
                            communities and contributing critical expertise to drive a
                            successful national program.
                        </p>
                    </div>
                </div>
            </div>

            {/* Information Cards */}
            <div className="max-w-5xl mx-auto mt-6 grid gap-4 bg-[#fae4b480] p-6 rounded-xl">
                <div className="bg-gray-100 p-4 rounded-lg shadow">
                    <p className="font-normal text-blue-950 text-2xl text-justify">
                        We provide comprehensive vaccination offerings, including <span className='font-bold'>HPV,
                        Hepatitis B, Typhoid, Yellow Fever, and others. </span> Our provisions are
                        tailored to your needs. You can come to us or we can come to you.
                    </p>
                </div>

                <div className="bg-blue-950 p-4 rounded-lg shadow text-white text-2xl text-justify">
                    <p className='font-thin'>
                        We help assess your vaccination needs and advise on what you
                        require based on your age group and risk category.
                    </p>
                </div>

                <div className="bg-blue-300 p-4 rounded-lg shadow text-blue-800 text-2xl text-justify">
                    <p className='font-thin'>
                        We provide customized vaccination plans for <span className='font-bold'> individuals, schools,
                        workplaces, and communities </span> to ensure widespread access to
                        preventive care.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default VaccinationNation;
