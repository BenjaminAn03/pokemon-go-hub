import { type PokemonType } from "../../utils/pokemonTypeColorMap";
import { getTypeEffectiveness, type Effectiveness } from "../../utils/typeEffectivenessMap";
import TypeLabel from "./TypeLabel";

interface TypeChartRowProps {
  effectiveness: Effectiveness;
  types: PokemonType[];
}

const TypeChartRow = ({ effectiveness, types }: TypeChartRowProps) => {
  const { value: multiplier, color: multiplierColor } = getTypeEffectiveness(effectiveness)
  const sign =
    effectiveness === "doubleWeakness" || effectiveness === "weakness"
      ? "+"
      : "-"

  return (
    <div className="flex h-[3.75rem] border-t text-white">
      <div className={`flex w-[16%] items-center justify-center border-r pl-2 pr-3`}>
        <div className="flex h-3/5 w-full items-center justify-center rounded-md" style={{ background: multiplierColor }}>
          {`${sign}${multiplier}%`}
        </div>
      </div>
      <div className="flex items-center justify-center gap-1 px-3">
        {types.map((type) => (
          <TypeLabel key={type} type={type} />
        ))}
      </div>
    </div>
  )
}

export default TypeChartRow;