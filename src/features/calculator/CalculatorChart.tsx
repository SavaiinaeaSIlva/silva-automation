import type { TooltipContentProps } from 'recharts';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Card } from '@/components/ui';
import { CalculatorTooltip } from './CalculatorTooltip';
import styles from './CalculatorChart.module.css';

type ChartDataPoint = Record<string, string | number>;

export interface CalculatorChartProps {
  data: ChartDataPoint[];
  chartTitle: string;
  manualKey: string;
  automationKey: string;
  currencySymbol: string;
  className?: string;
}

export const CalculatorChart = ({
  data,
  chartTitle,
  manualKey,
  automationKey,
  currencySymbol,
  className,
}: CalculatorChartProps) => {
  const tooltipContent = ({ active, payload, label }: TooltipContentProps<number, string>) => (
    <CalculatorTooltip
      active={active}
      payload={payload?.map((p: { name?: unknown; value?: unknown }) => ({
        name: String(p.name ?? ''),
        value: typeof p.value === 'number' ? p.value : undefined,
      }))}
      label={String(label ?? '')}
      currencySymbol={currencySymbol}
    />
  );

  return (
    <Card variant="elevated" padding="medium" className={className}>
      <p className={styles.chartTitle}>{chartTitle}</p>
      <div className={styles.chartArea}>
        <ResponsiveContainer width="100%" height="100%" aria-label={chartTitle}>
          <LineChart data={data} margin={{ top: 5, right: 8, left: 8, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={(v: number) => `${currencySymbol}${v}`} />
            <Tooltip content={tooltipContent} />
            <Line
              type="monotone"
              dataKey={manualKey}
              className={styles.lineManual}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey={automationKey}
              className={styles.lineAutomation}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
