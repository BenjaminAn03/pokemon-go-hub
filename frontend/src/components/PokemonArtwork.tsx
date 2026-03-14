import { getPokemonImage } from "../utils/getPokemonImage";
import { getPokemonTypeColor, type PokemonType } from "../utils/pokemonTypeColorMap";
import PokemonTypeIcon from "./PokemonTypeIcon";

interface PokemonArtworkProps {
  id: number;
  name: string;
  types: PokemonType[];
  className?: string;
}

const PokemonArtwork = ({ id, name, types, className }: PokemonArtworkProps) => {
  return (
    <div className="flex h-auto w-full flex-col items-center justify-center gap-3 bg-black py-4" style={{ background: `linear-gradient(white 40%, ${getPokemonTypeColor(types[0])})` }}>
      <img src={getPokemonImage(id)} alt={`Official ${name} Artwork`} className={`max-h-60 max-w-full object-contain ${className}`} />
      <PokemonTypeIcon types={types} />
    </div>
  )
}

export default PokemonArtwork;