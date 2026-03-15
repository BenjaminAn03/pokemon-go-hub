export const TYPE_EFFECTIVENESS = {
  doubleWeakness: { color: "#8d3232", value: 156 },
  weakness: { color: "#dd5757", value: 60 },
  resistance: { color: "#68a356", value: 37.5 },
  doubleResistance: { color: "#308b27", value: 60.9 }
} as const

export type Effectiveness = keyof typeof TYPE_EFFECTIVENESS

export function getTypeEffectiveness(effectiveness: Effectiveness) {
  return TYPE_EFFECTIVENESS[effectiveness]
}
