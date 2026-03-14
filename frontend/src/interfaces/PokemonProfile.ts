import type { PokemonType } from "../utils/pokemonTypeColorMap";

export interface PokemonProfile {
    id: number;
    name: string;
    types: PokemonType[];
    maxCp: number;
    stats: PokemonStats;
    typeEffectiveness: TypeEffectiveness;
}

export interface PokemonStats {
    baseAttack: number;
    baseDefense: number;
    baseStamina: number;
}

export interface TypeEffectiveness {
    doubleWeakness: PokemonType[];
    weakness: PokemonType[];
    resistance: PokemonType[];
    doubleResistance: PokemonType[];
}
