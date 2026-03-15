import { getPokemonTypeColor, type PokemonType } from "../../utils/pokemonTypeColorMap";

interface TypeLabelProps {
  type: PokemonType;
}

const TypeLabel = ({ type }: TypeLabelProps) => {
  return (
    <div
      className="flex h-3/5 items-center justify-center rounded-md px-2 [text-shadow:0_1px_2px_rgba(0,0,0,0.6)]"
      style={{ background: getPokemonTypeColor(type) }}
    >
      {type.charAt(0).toUpperCase() + type.slice(1)}
    </div>
  )
}

export default TypeLabel;