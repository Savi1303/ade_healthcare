import { servicesProvided } from "@/constants"
import MiniHeader from "../general/MiniHeader"
import SubHeader from "../general/SubHeader"
import ServiceCard from "./service_Section/ServiceCard"
import { ArrowRight } from "lucide-react"

const ServicesSection = () => {
  return (
    <div className="py-8 bg-[#D8D8FF]">
        <div className='text-center'>
            <MiniHeader text='Our Service' />
            {/* <div className={` text-3xl lg:text-4xl `}>
                <h1>We Serve In Different <span className="font-bold">Areas For</span></h1>
                <p className="font-bold">Students</p>
            </div> */}
            <SubHeader text='We Serve In Different'>
                <p className='font-bold'>Areas For Students</p>
            </SubHeader>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8 px-4">
            {
                servicesProvided.map( service => <ServiceCard key={ service.title } title={ service.title } text={ service.text } image={ service.image } />)
            }
        </div>
        <div className="flex gap-1 items-center justify-center mt-4 px-4">
            <p className="text-sm text-center">We have 8+ more Care Service including Emergency Department. <span className="font-bold cursor-pointer">View All</span></p>
            <ArrowRight className="w-5 h-5 hidden md:block cursor-pointer" />
        </div>
    </div>
  )
}

export default ServicesSection