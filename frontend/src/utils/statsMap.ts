export const STATS_CONFIG = {
  maxCp: { label: "Max CP", unit: "CP", theme: "rgb(60, 160, 100)" },
  baseAttack: { label: "Attack", unit: "ATK", theme: "rgb(70, 130, 160)" },
  baseDefense: { label: "Defense", unit: "DEF", theme: "rgb(140, 130, 50)" },
  baseStamina: { label: "Stamina", unit: "HP", theme: "rgb(160, 40, 90)" }
} as const

export type Stat = keyof typeof STATS_CONFIG

export function getStatsConfig(stat: Stat) {
  return STATS_CONFIG[stat]
}
