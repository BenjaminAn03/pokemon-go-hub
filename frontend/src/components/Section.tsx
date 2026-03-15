import Subheader from "./Subheader";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <div className="flex w-full flex-col gap-4 px-3">
      <Subheader title={title} />
      {children}
    </div>
  )
}

export default Section;