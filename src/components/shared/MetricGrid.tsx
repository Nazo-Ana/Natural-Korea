import type { Stat } from '../../types/content';

type MetricGridProps = {
  stats: readonly Stat[];
  className: string;
};

export default function MetricGrid({ stats, className }: MetricGridProps) {
  return (
    <div className={className}>
      {stats.map((stat) => (
        <div key={stat.label}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
