import { getPokemonTypeIcon } from "../utils/getPokemonTypeIcon";
import { getPokemonTypeColor, type PokemonType } from "../utils/pokemonTypeColorMap";

interface TypeIconProps {
  type: PokemonType;
}

const TypeIcon = ({ type }: TypeIconProps) => {
  return (
    <div className="flex size-10 items-center justify-center rounded-full" style={{ background: getPokemonTypeColor(type) }} >
      <img src={getPokemonTypeIcon(type)} alt={`${type} icon`} className="size-6" />
    </div>
  )
}

export default TypeIcon;