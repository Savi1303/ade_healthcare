import { ArrowRight } from 'lucide-react'

const TalkToADoctorCard = () => {
  return (
    <div className='bg-white p-4 rounded-lg space-y-2 w-[300px] md:w-[200px] border border-gray-800/40 md:border-none'>
        <div className='bg-purple-300/80 text-purple-800 px-2 py-1 rounded-md font-bold w-fit'>
            <p>Featured</p>
        </div>
        <h3 className='font-bold'>The map of mathematics</h3>
        <p className='text-sm'>Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
        <button className="px-3 py-1 flex items-center gap-2 rounded-full bg-blue-500 text-white w-fit text-sm">
            <div className="flex justify-center items-center bg-white text-blue-500 w-4 h-4 rounded-full">
                <ArrowRight className="w-2 h-2" />
            </div>
            <p>Talk To A Doctor</p>
        </button>
    </div>
  )
}

export default TalkToADoctorCard