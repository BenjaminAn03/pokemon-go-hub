interface PanelProps {
  title: string;
  headerStyle: React.CSSProperties;
  icon?: string;
  src?: string;
  alt?: string;
  children?: React.ReactNode;
  className?: string;
}

const Panel = ({ title, headerStyle, icon, src, alt, children, className }: PanelProps) => {
  return (
    <div className={`flex size-full flex-col rounded-xl bg-white shadow-md ${className}`}>
      <div className="flex items-center justify-between p-4 text-white lg:rounded-t-xl" style={headerStyle}>
        <h1 className="text-2xl font-bold">{title}</h1>
        {icon && (
          <img src={src} alt={alt} className="" />
        )}
      </div>
      <pre className="border border-red-300 px-3">
        {children}
      </pre>
    </div>
  )
}

export default Panel;