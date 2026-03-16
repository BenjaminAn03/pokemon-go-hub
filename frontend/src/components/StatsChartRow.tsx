import { getStatsConfig, type Stat } from "../utils/statsMap";

interface StatsChartRowProps {
  stat: Stat;
  statValue: number;
}

const StatChartRow = ({ stat, statValue }: StatsChartRowProps) => {
  const { label, unit, theme } = getStatsConfig(stat)

  return (
    <div className={`flex w-full items-center border-b text-xl font-bold shadow-inner even:bg-gray-100`}>
      <div className="flex w-2/5 justify-center py-2"><h2>{label}</h2></div>

      <h2 style={{ color: theme }}>{`${statValue} ${unit}`}</h2>
    </div>
  )
}

export default StatChartRow;