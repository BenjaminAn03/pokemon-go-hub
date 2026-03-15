interface PanelLayoutProps {
  children: React.ReactNode;
}

const PanelLayout = ({ children }: PanelLayoutProps) => {
  return (
    <div className="grid w-full max-w-7xl grid-cols-1 gap-3 lg:grid-cols-2 lg:px-3">
      {children}
    </div>
  )
}

export default PanelLayout;