import { Minus, Plus } from "lucide-react";
import { useState } from "react"

const FaqDropdown = ({ main, sub }: { main: string; sub: string }) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className="p-4 lg:p-6 border rounded-lg border-blue-500 shadow-lg w-full">
            <div className={`flex justify-between items-center ${open ? 'mb-3 lg:mb-2' : ''}`}>
                <p className="capitalize basis-11/12 md:basis-auto">{main}</p>
                {!open && (
                    <Plus
                        onClick={() => setOpen(true)} 
                        className="w-6 h-6 cursor-pointer text-blue-500 basis-1/12 md:basis-auto transition-transform hover:scale-110 active:scale-95"
                    />
                )}
                {open && (
                    <Minus
                        onClick={() => setOpen(false)} 
                        className="w-6 h-6 cursor-pointer text-blue-500 basis-1/12 md:basis-auto transition-transform hover:scale-110 active:scale-95"
                    />
                )}
            </div>
            
            <div 
                className={`
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${open ? 'max-h-96 opacity-100 border-t pt-3 lg:pt-2 border-black' : 'max-h-0 opacity-0'}
                `}
            >
                <p className="transition-opacity duration-300">
                    {sub}
                </p>
            </div>
        </div>
    )
}

export default FaqDropdown;