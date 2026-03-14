import { type PokemonType } from "./pokemonTypeColorMap";

export function getPokemonTypeIcon(type: PokemonType) {
    return `./icons/${type}.svg`
}
