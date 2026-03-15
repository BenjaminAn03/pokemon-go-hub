import type { PokemonType } from "../../utils/pokemonTypeColorMap";
import { type Effectiveness } from "../../utils/typeEffectivenessMap";
import TypeChartSection from "./TypeChartSection";

interface TypeChartProps {
  pokemonName: string;
  effectiveness: Record<Effectiveness, PokemonType[]>;
}

const TypeChart = ({ pokemonName, effectiveness }: TypeChartProps) => {
  return (
    <div className="flex flex-col gap-4">
      <TypeChartSection
        title={`${pokemonName} takes increased damage from:`}
        rows={{ doubleWeakness: effectiveness.doubleWeakness, weakness: effectiveness.weakness }}
        weakness
      />
      <TypeChartSection
        title={`${pokemonName} takes reduced damage from:`}
        rows={{ resistance: effectiveness.resistance, doubleResistance: effectiveness.doubleResistance }}
      />
    </div>
  )
}

export default TypeChart;