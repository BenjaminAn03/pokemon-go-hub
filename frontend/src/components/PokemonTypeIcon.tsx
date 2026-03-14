import { type PokemonType } from "../utils/pokemonTypeColorMap";
import TypeIcon from "./TypeIcon";

interface PokemonTypeIconProps {
  types: PokemonType[];
}

const PokemonTypeIcon = ({ types }: PokemonTypeIconProps) => {
  return (
    <div className="flex w-full items-center justify-center gap-2">
      <TypeIcon type={types[0]} />
      {types[1] && (
        <TypeIcon type={types[1]} />
      )}
    </div>
  )
}

export default PokemonTypeIcon;