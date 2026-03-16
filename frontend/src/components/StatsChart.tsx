import { type Stat } from "../utils/statsMap";
import StatChartRow from "./StatsChartRow";

interface StatsChartProps {
  stats: Record<string, number>;
}

const StatsChart = ({ stats }: StatsChartProps) => {
  return (
    <div className="flex flex-col">
      {(Object.entries(stats) as [Stat, number][])
        .map(([key, value], index) => (
          <StatChartRow
            key={key}
            stat={key}
            statValue={value}
            className={`${index % 2 === 1 ? "bg-gray-100" : ""}`}
          />
        ))}
    </div>
  )
}

export default StatsChart;