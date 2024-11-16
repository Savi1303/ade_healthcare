import { iconsGroup } from "@/constants"
import IconCard from "./icon_section/IconCard"

const IconsSection = () => {
  return (
    <div className="bg-[#331C4C] text-white py-16 px-4 flex justify-center items-center flex-wrap gap-8">
        {
            iconsGroup.map( icon => <IconCard key={ icon.text } text={ icon.text } title={ icon.title } image={ icon.image } />)
        }
    </div>
  )
}

export default IconsSection