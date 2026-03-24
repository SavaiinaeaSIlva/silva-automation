import styles from './CalculatorTooltip.module.css';

interface TooltipEntry {
  name: string;
  value: number | undefined;
}

export interface CalculatorTooltipProps {
  active?: boolean;
  payload?: TooltipEntry[];
  label?: string;
  currencySymbol: string;
}

export const CalculatorTooltip = ({
  active,
  payload,
  label,
  currencySymbol,
}: CalculatorTooltipProps) => {
  if (!active || !payload?.length) return null;

  return (
    <div className={styles.tooltip}>
      <p className={styles.label}>{label}</p>
      {payload.map((entry, i) => (
        <p
          key={entry.name}
          className={`${styles.item} ${i === 0 ? styles.itemManual : styles.itemAutomation}`}
        >
          {entry.name}: {currencySymbol}
          {(entry.value ?? 0).toLocaleString()}
        </p>
      ))}
    </div>
  );
};
