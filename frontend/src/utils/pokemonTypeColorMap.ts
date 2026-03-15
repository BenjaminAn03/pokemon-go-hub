export const POKEMON_TYPE_COLORS = {
  normal: "rgb(157, 159, 160)",
  fire: "rgb(240, 149, 22)",
  water: "rgb(80, 146, 213)",
  electric: "rgb(255, 206, 62)",
  grass: "rgb(53, 171, 93)",
  ice: "rgb(150, 217, 214)",
  fighting: "rgb(210, 60, 80)",
  poison: "rgb(210, 79, 187)",
  ground: "rgb(217, 120, 69)",
  flying: "rgb(144,170,220)",
  psychic: "rgb(247, 110, 115)",
  bug: "rgb(146, 201, 43)",
  rock: "rgb(205, 186, 108)",
  ghost: "rgb(119, 107, 182)",
  dragon: "rgb(5, 102, 188)",
  dark: "rgb(87, 84, 103)",
  steel: "rgb(83, 139, 159)",
  fairy: "rgb(235, 142, 226)"
} as const

export type PokemonType = keyof typeof POKEMON_TYPE_COLORS

export function getPokemonTypeColor(type: PokemonType) {
  return POKEMON_TYPE_COLORS[type]
}

export function lightenRGB(rgb: string, amount: number) {
  const values = rgb.match(/\d+/g)!.map(Number)

  const [r, g, b] = values.map(v =>
    Math.round(v + (255 - v) * amount)
  )

  return `rgb(${r}, ${g}, ${b})`
}