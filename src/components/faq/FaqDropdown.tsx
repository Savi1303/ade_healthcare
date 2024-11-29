import { Minus, Plus } from "lucide-react";
import { useState } from "react"

const FaqDropdown = ({ main, sub }: { main: string; sub: string }) => {
    const [ open, setOpen ] = useState< boolean >( false );
  return (
    <div className="p-4 lg:p-6 border rounded-lg border-blue-500 shadow-lg w-full">
        <div className={` flex justify-between items-center ${ open && 'mb-3 lg:mb-2' } `}>
            <p className="capitalize basis-11/12">{ main }</p>
            {
                !open && (
                    <Plus
                        onClick={ () => setOpen( true ) } 
                        className="w-6 h-6 cursor-pointer text-blue-500 basis-1/12"
                        style={{ width: '16px', height: '16px' }}
                    />
                )
            }
            {
                open && (
                    <Minus
                        onClick={ () => setOpen( false ) } 
                        className="w-6 h-6 cursor-pointer text-blue-500 basis-1/12"
                    />
                )
            }
        </div>
        <div className={` ${ open && 'border-t pt-3 lg:pt-2 border-black' }`}>
            { open && <p>{ sub }</p> }
        </div>
    </div>
  )
}

export default FaqDropdown