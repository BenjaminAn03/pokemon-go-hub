interface TabProps {
  title: string;
  src: string;
  alt: string;
  active: boolean;
  isIcon?: boolean;
  onClick: () => void;
  className?: string;
}

const Tab = ({ title, src, alt, active, isIcon, onClick, className }: TabProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${className ?? ""}
        flex items-center gap-1
        rounded-2xl
        border
        px-3
        text-xl font-[650]
        shadow-xl
        transition
        ${active
          ? "border-tabHoverColor bg-tabHoverColor text-white hover:opacity-90"
          : "hover:border-tabHoverColor hover:bg-tabHoverColor border-gray-300 bg-white hover:text-white"
        }
      `}
    >
      <div className="flex size-12 items-center justify-center">
        <img src={src} alt={alt} className={`
            max-h-full max-w-full
            ${isIcon ? (active ? "brightness-0 invert" : "brightness-0") : ""}
          `}
        />
      </div>
      <div className="flex h-12 items-center">
        <span>{title}</span>
      </div>
    </button>
  )
}

export default Tab;