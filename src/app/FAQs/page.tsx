'use client'
import FaqDropdown from "@/components/faq/FaqDropdown"
import MiniHeader from "@/components/general/MiniHeader"
import SubHeader from "@/components/general/SubHeader"
import { faqs } from '@/constants'

const FaqsPage = () => {
  return (
    <div className="mt-12">
      <div className="w-full text-center space-y-1">
        <MiniHeader text="FAQs" />
        <SubHeader text="Here You Will Find">
          <p className="font-bold">Most Asked Questions</p>
        </SubHeader>
      </div>
      <div className="flex flex-col items-center justify-center p-6 lg:p-20 gap-4 w-full">
        {
          faqs.map( faq => <FaqDropdown main={ faq.main } sub={ faq.sub } key={ faq.main } /> )
        }
      </div>
    </div>
  )
}

export default FaqsPage