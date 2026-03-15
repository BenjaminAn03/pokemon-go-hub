interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  return (
    <main className="flex w-full flex-col items-center bg-SectionTabBackgroundColor">
      {children}
    </main>
  )
}

export default Main;