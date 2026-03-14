import { POKEMON_TYPE_COLORS } from "./pokemonTypeColorMap"
import type { PokemonType } from "./pokemonTypeColorMap"

export function getPokemonHeaderStyle(types: PokemonType[]) {
  const color1 = POKEMON_TYPE_COLORS[types[0]]
  const color2 = types[1] && POKEMON_TYPE_COLORS[types[1]]

  return color2
    ? { background: `linear-gradient(45deg, ${color1} 80%, ${color2} 80%)` }
    : { backgroundColor: color1 }
}
