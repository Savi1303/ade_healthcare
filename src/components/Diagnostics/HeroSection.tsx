import FindLocation from "../general/FindLocation";
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[url('/Pretty-Health%20Website/Images/Group%2020652.png')] bg-cover bg-center py-20 ">
      <div className="basis-full md:basis-3/5 flex flex-col justify-center">
        <div className="px-6 md:px-12 lg:px-16 xl:px-20 space-y-4 mb-12">
          <div>
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">Get Educated TO</h1>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light">Restore Your Health</h1>
          </div>
          <p className="text-base md:text-lg">Embrace a world of comprehensive healthcare where your well-being takes center stage. At Meca, we&apos;re dedicated to providing you with personalized and compassionate medical services.</p>
        </div>
        <FindLocation />
      </div>
      <div className="basis-full md:basis-2/5 flex justify-center items-end">
        <Image
          src="/Pretty-Health Website/Images/Image 17 (1).png"
          alt="Cardiology"
          width={500}
          height={500}
          className="w-full max-w-[400px] mb-[25px]"
        />
      </div>
    </div>
  );
};

export default HeroSection;