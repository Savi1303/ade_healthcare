import { ArrowRight } from "lucide-react"
import FindLocation from "../general/FindLocation"

const HeroSection = () => {
  return (
    <div className="md:h-screen flex flex-col md:flex-row py-20 md:py-0" >
        <div className="basis-full md:basis-3/5 bg-white flex flex-col justify-center" >
            <div className="px-6 md:px-12 lg:px-16 xl:px-20 space-y-4 mb-12" >
                <div>
                    <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl">Get Educated To</h1>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-light">Restore Your Health</h1>                
                </div>
                <p>Embrace a world of comprehensive healthcare where your well-being takes center stage. At Meca, we&apos;re dedicated to providing you with personalized and compassionate medical services.</p>
                <button className="px-3 py-1 flex items-center gap-2 rounded-full bg-blue-500 text-white w-fit">
                    <div className="flex justify-center items-center bg-white text-blue-500 w-4 h-4 rounded-full">
                        <ArrowRight className="w-2 h-2" />
                    </div>
                    <p>Learn More</p>
                </button>
            </div>
            <FindLocation />
        </div>
        <div className="basis-full md:basis-2/5 bg-[#B6B5FF]">
        
        </div>
    </div>
  )
}

export default HeroSection