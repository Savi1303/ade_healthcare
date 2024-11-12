interface SubHeaderProps {
  text: string,
  className?: string
}
const SubHeader = ({ text, className, children }: React.PropsWithChildren< SubHeaderProps > ) => {
  return (
    <div className={` text-3xl lg:text-4xl ${ className } `}>
      <h1>{ text }</h1>
      { children }
    </div>
  )
}

export default SubHeader