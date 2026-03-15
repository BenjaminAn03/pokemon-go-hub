import { getPokemonTypeColor, lightenRGB, type PokemonType } from "../../utils/pokemonTypeColorMap";
import { type Effectiveness } from "../../utils/typeEffectivenessMap";
import TypeChartDisplayRow from "./TypeChartRow";

interface TypeChartDisplayProps {
  title: string;
  rows: Partial<Record<Effectiveness, PokemonType[]>>
  weakness?: boolean;
  icon?: boolean;
  src?: string;
  alt?: string;
}

const TypeChartSection = ({ title, rows, weakness }: TypeChartDisplayProps) => {
  const className = weakness
    ? "bg-type-weakness"
    : "bg-type-resistance"

  const style = weakness
    ? { "--type-color": lightenRGB(getPokemonTypeColor("fighting"), 0.4) }
    : { "--type-color": lightenRGB(getPokemonTypeColor("grass"), 0.4) }


  return (
    <div className={`flex flex-col rounded-xl border shadow-lg ${className}`} style={style as React.CSSProperties} >
      <div className="flex h-10 items-center px-2">
        <h1>{title}</h1>
      </div>
      {(Object.entries(rows) as [Effectiveness, PokemonType[]][])
        .filter(([, types]) => types && types.length > 0)
        .map(([key, types]) => (
          <TypeChartDisplayRow key={key} effectiveness={key} types={types} />
        ))
      }
    </div>
  )
}

export default TypeChartSection;

