import type { CalculatorResults as CalculatorResultsData } from '@/types';
import { Button, Card } from '@/components/ui';
import styles from './CalculatorResults.module.css';

export interface CalculatorResultsProps {
  results: CalculatorResultsData;
  statLabels: {
    hoursSaved: string;
    annualSavings: string;
    firstYearRoi: string;
  };
  units: { hours: string };
  currencySymbol: string;
  percentSymbol: string;
  downloadButton: string;
  emailButton: string;
  onDownload: () => void;
  onEmail: () => void;
  className?: string;
}

export const CalculatorResults = ({
  results,
  statLabels,
  units,
  currencySymbol,
  percentSymbol,
  downloadButton,
  emailButton,
  onDownload,
  onEmail,
  className,
}: CalculatorResultsProps) => (
  <Card variant="elevated" padding="medium" className={className}>
    <div className={styles.statsList}>
      <div className={styles.statCard}>
        <p className={styles.statLabel}>{statLabels.hoursSaved}</p>
        <p className={styles.statValue}>
          {results.manualHoursPerMonth.toLocaleString()} {units.hours}
        </p>
      </div>
      <div className={styles.statCard}>
        <p className={styles.statLabel}>{statLabels.annualSavings}</p>
        <p className={styles.statValue}>
          {currencySymbol}
          {results.annualNetSavings.toLocaleString()}
        </p>
      </div>
      <div className={styles.statCard}>
        <p className={styles.statLabel}>{statLabels.firstYearRoi}</p>
        <p className={styles.statValue}>
          {results.roiPercentage}
          {percentSymbol}
        </p>
      </div>
    </div>
    <div className={styles.actions}>
      <Button variant="outline" size="medium" onClick={onDownload}>
        {downloadButton}
      </Button>
      <Button variant="primary" size="medium" onClick={onEmail}>
        {emailButton}
      </Button>
    </div>
  </Card>
);
