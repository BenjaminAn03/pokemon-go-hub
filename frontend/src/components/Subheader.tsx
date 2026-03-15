interface SubheaderProps {
  title: string;
  className?: string;
}

const Subheader = ({ title, className }: SubheaderProps) => {
  return (
    <div className="flex h-12 w-full items-center rounded-xl border bg-mainGrey px-2 text-2xl font-bold">
      <h1 className={` ${className}`} >
        {title}
      </h1>
    </div>

  )
}

export default Subheader;