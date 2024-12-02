interface SubHeaderProps {
  text: string,
  className?: string
}
const SubHeader = ({ text, className, children }: React.PropsWithChildren< SubHeaderProps > ) => {
  return (
    <div className={` text-4xl lg:text-5xl ${ className } `}>
      <h1>{ text }</h1>
      { children }
    </div>
  )
}

export default SubHeader