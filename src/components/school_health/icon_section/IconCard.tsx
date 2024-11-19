import Image, { StaticImageData } from 'next/image'

const IconCard = ({ image, title, text }: { image: StaticImageData, title: string, text: string }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-3 w-[250px] text-center'>
        <Image src={ image } alt='Icon Image' width={ 80 } />
        <h3 className='font-bold text-xl'>{ title }</h3>
        <p className='text-sm'>{ text }</p>
    </div>
  )
}

export default IconCard