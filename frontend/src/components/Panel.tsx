import type { PokemonType } from "../utils/pokemonTypeColorMap";
import PanelHeader from "./PanelHeader";

interface PanelProps {
  title: string;
  types: PokemonType[]
  children?: React.ReactNode;
  className?: string;
}

const Panel = ({ title, types, children, className }: PanelProps) => {
  return (
    <div className={`flex size-full flex-col rounded-xl bg-white shadow-md ${className}`}>
      <PanelHeader title={title} types={types} />
      <pre className="flex flex-col items-center justify-center gap-5">
        {children}
      </pre>
    </div>
  )
}

export default Panel;