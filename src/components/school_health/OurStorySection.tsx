import Image from 'next/image'
import MiniHeader from '../general/MiniHeader'
import gridImage from '../../../public/Pretty-Health Website/Images/Col.png'
import tabletImage from '../../../public/Pretty-Health Website/Images/cd86f3f56c56bcd1833cf9da41275a85.jpg'
import playIcon from '../../../public/Pretty-Health Website/Images/Icon (22).png'
import SubHeader from '../general/SubHeader'
import TalkToADoctorCard from './our_story_section/TalkToADoctorCard'

const OurStorySection = () => {
  return (
    <div className='py-16 px-4 md:px-6 lg:px-16 xl:px-20 space-y-8'>
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="px-4 basis-full md:basis-1/2">
                <Image src={ gridImage } alt='Grid Image' className='w-full' />
            </div>
            <div className="px-4 basis-full md:basis-1/2">
                <MiniHeader text='Our Story' />
                <SubHeader text='Pretty-Health Always Take'>
                    <h1 className='font-bold'>Care of Their Patients</h1>
                </SubHeader>
                <p className='mt-2 opacity-70'>Consequat ea fugiat commodo eiusmod amet exercitation reprehenderit sint ex quis cupidatat. Lorem excepteur fugiat aute excepteur reprehenderit laboris veniam pariatur ad elit aliqua occaecat. Nisi aute dolore reprehenderit cillum sint magna velit quis consectetur excepteur incididunt amet in ullamco. Minim laboris ullamco nisi ullamco ex incididunt mollit labore sint nisi laboris non. Sint magna consectetur mollit sunt magna voluptate laboris aliquip proident. Labore qui eiusmod pariatur nostrud duis adipisicing excepteur.</p>
            </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="px-4 basis-full md:basis-1/2">
                <MiniHeader text='Our Story' />
                <SubHeader text='What Our Patients Tell Others'>
                    <h1 className='font-bold'>About Pretty-Health</h1>
                </SubHeader>
                <p className='mt-2 opacity-70'>Eiusmod velit pariatur ipsum adipisicing aliquip non aute sint tempor esse id. Consectetur velit sint culpa id non adipisicing dolore amet id cupidatat Lorem enim sint. Laboris mollit adipisicing minim veniam eu consequat aliquip labore reprehenderit nulla. Consectetur adipisicing anim irure aliqua eiusmod culpa.</p>
            </div>
            <div className="px-4 basis-full md:basis-1/2 md:flex justify-center items-center relative">
                <div className='relative w-full md:w-4/5 hidden md:block'>
                    <Image src={ tabletImage } alt='Tablet Image' className='w-full' />
                    <Image src={ playIcon } alt='Tablet Image' width={ 100 } className='absolute left-1/3 top-1/3' />
                </div>
                {/* <div className='hidden absolute bottom-0 z-10 md:flex flex-row gap-2 flex-wrap'>
                    <TalkToADoctorCard />
                    <TalkToADoctorCard />
                    <TalkToADoctorCard />
                </div> */}
                <div className='flex flex-col gap-4 justify-center items-center md:hidden mt-4'>
                    <TalkToADoctorCard />
                    <TalkToADoctorCard />
                    <TalkToADoctorCard />
                </div>

            </div>
        </div>
    </div>
  )
}

export default OurStorySection