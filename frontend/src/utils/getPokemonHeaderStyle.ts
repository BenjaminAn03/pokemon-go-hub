import { getPokemonTypeColor } from "./pokemonTypeColorMap"
import type { PokemonType } from "./pokemonTypeColorMap"

export function getPokemonHeaderStyle(types: PokemonType[]) {
  const color1 = getPokemonTypeColor(types[0])
  const color2 = types[1] && getPokemonTypeColor(types[1])

  return color2
    ? { background: `linear-gradient(45deg, ${color1} 80%, ${color2} 80%)` }
    : { backgroundColor: color1 }
}
