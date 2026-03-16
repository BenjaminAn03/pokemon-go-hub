import { type PokemonType } from "./pokemonTypeColorMap";

export function getPokemonTypeIcon(type: PokemonType) {
    return `./typeIcons/${type}.svg`
}
