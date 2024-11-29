import { ArrowRight, Cross } from "lucide-react"
const FindLocation = () => {
  return (
    <div className="md:rounded-r-full p-4 flex items-center gap-3 md:gap-4 xl:gap-6 shadow-xl w-full md:w-10/12 border-t border-t-black/20 md:border-none">
        <div className="basis-1/12 flex justify-center">
            <div className="bg-[#331C4C] text-white h-14 w-14 rounded-full flex items-center justify-center">
                <Cross className="w-6 h-6" />
            </div>
        </div>
        <div className="basis-10/12">
            <h3 className="font-semibold uppercase text-[#331C4C]">Find a location nearby</h3>
            <p className="text-[#6867AD] text-xm opacity-80" >Hospitial medical center operates more than 120 locations. Find the 
            nearest...</p>
        </div>
        <div className="basis-1/12 flex justify-center">
            <div className="bg-blue-500 text-white h-14 w-14 rounded-full flex items-center justify-center cursor-pointer">
                <ArrowRight className="w-6 h-6" />
            </div>
        </div>
    </div>
  )
}

export default FindLocation