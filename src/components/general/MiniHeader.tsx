const MiniHeader = ({ text, className }: { text: string; className?: string }) => {
  return (
    <h2 className={` text-bold text-base lg:text-sm text-blue-500 ${ className } `}>{ text }</h2>
  )
}

export default MiniHeader