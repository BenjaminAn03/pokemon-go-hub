import { type Stat } from "../utils/statsMap";
import StatChartRow from "./StatsChartRow";

interface StatsChartProps {
  stats: Record<string, number>;
}

const StatsChart = ({ stats }: StatsChartProps) => {
  return (
    <div className="flex flex-col">
      {(Object.entries(stats) as [Stat, number][])
        .map(([key, value]) => (
          <StatChartRow key={key} stat={key} statValue={value} />
        ))}
    </div>
  )
}

export default StatsChart;