import { Minus, Plus } from "lucide-react";
import { useState } from "react"

const FaqDropdown = ({ main, sub }: { main: string; sub: string }) => {
    const [ open, setOpen ] = useState< boolean >( false );
  return (
    <div className="p-4 lg:p-6 border rounded-lg border-blue-500 shadow-lg w-full">
        <div className={` flex justify-between items-center ${ open && 'mb-6 lg:mb-4' } `}>
            <p className="capitalize">{ main }</p>
            {
                !open && (
                    <Plus
                        onClick={ () => setOpen( true ) } 
                        className="w-6 h-6 cursor-pointer text-blue-500"
                    />
                )
            }
            {
                open && (
                    <Minus
                        onClick={ () => setOpen( false ) } 
                        className="w-6 h-6 cursor-pointer text-blue-500"
                    />
                )
            }
        </div>
        <div>
            { open && <p>{ sub }</p> }
        </div>
    </div>
  )
}

export default FaqDropdown