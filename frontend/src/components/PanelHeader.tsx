import { getPokemonHeaderStyle } from "../utils/getPokemonHeaderStyle";
import type { PokemonType } from "../utils/pokemonTypeColorMap";

interface PanelHeaderProps {
  title: string;
  types: PokemonType[];
  icon?: string;
  src?: string;
  alt?: string;
}

const PanelHeader = ({ title, types, icon, src, alt }: PanelHeaderProps) => {
  return (
    <div className="flex items-center justify-between p-4 text-white lg:rounded-t-xl" style={getPokemonHeaderStyle(types)}>
      <h1 className="text-2xl font-bold">{title}</h1>
      {icon && (
        <img src={src} alt={alt} className="" />
      )}
    </div>
  )
}

export default PanelHeader;