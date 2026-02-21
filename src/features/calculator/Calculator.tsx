import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Container, Section } from '@/components/layout';
import { Card, Button } from '@/components/ui';
import { siteContent } from '@/constants';
import { useCalculator } from './useCalculator';
import styles from './Calculator.module.css';

export const Calculator = () => {
  const { calculator } = siteContent;

  const initialInputs = {
    hoursPerWeek: calculator.roiInputs.hoursPerWeek.defaultValue,
    numEmployees: calculator.roiInputs.numEmployees.defaultValue,
    hourlyWage: calculator.roiInputs.hourlyWage.defaultValue,
    setupFee: calculator.roiInputs.setupFee.defaultValue,
    monthlyRetainer: calculator.roiInputs.monthlyRetainer.defaultValue,
  };

  const { inputs, updateInput, results, monthlyData } = useCalculator(initialInputs);

  const chartData = monthlyData.map((point, i) => ({
    name: `${calculator.monthPrefix} ${i + 1}`,
    [calculator.chartKeys.manualCost]: point.manualCost,
    [calculator.chartKeys.automationCost]: point.automationCost,
  }));

  const getSummaryText = () =>
    `${calculator.summaryTitle}\n\n` +
    `--- ${calculator.summaryCurrentProcess} ---\n` +
    `${calculator.summaryLabels.hoursPerWeek}: ${inputs.hoursPerWeek}\n` +
    `${calculator.summaryLabels.numEmployees}: ${inputs.numEmployees}\n` +
    `${calculator.summaryLabels.hourlyWage}: ${calculator.currencySymbol}${inputs.hourlyWage}\n\n` +
    `--- ${calculator.summaryPricing} ---\n` +
    `${calculator.summaryLabels.setupFee}: ${calculator.currencySymbol}${inputs.setupFee}\n` +
    `${calculator.summaryLabels.monthlyRetainer}: ${calculator.currencySymbol}${inputs.monthlyRetainer}\n\n` +
    `--- ${calculator.summaryResults} ---\n` +
    `${calculator.summaryLabels.hoursSaved}: ${results.manualHoursPerMonth.toLocaleString()} ${calculator.units.hours}\n` +
    `${calculator.summaryLabels.annualSavings}: ${calculator.currencySymbol}${results.annualNetSavings.toLocaleString()}\n` +
    `${calculator.summaryLabels.firstYearRoi}: ${results.roiPercentage}${calculator.percentSymbol}\n`;

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([getSummaryText()], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = calculator.downloadFilename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleEmail = () => {
    const subject = encodeURIComponent(calculator.emailSubject);
    const body = encodeURIComponent(getSummaryText());
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  return (
    <Section id={calculator.id} background="dark" padding="large" className={styles.section}>
      <Container className={styles.content}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>{calculator.eyebrow}</span>
          <h2 className={styles.title}>{calculator.title}</h2>
          <p className={styles.subtitle}>{calculator.subtitle}</p>
        </div>

        <div className={styles.widget}>
          {/* Top: Chart (full width) */}
          <Card
            variant="elevated"
            padding="medium"
            className={`${styles.panel} ${styles.chartPanel}`}
          >
            <p className={styles.chartTitle}>{calculator.chartTitle}</p>
            <div className={styles.chartArea}>
              <ResponsiveContainer width="100%" height="100%" aria-label={calculator.chartTitle}>
                <LineChart data={chartData} margin={{ top: 5, right: 8, left: 8, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis tickFormatter={(v) => `${calculator.currencySymbol}${v}`} />
                  <Tooltip
                    formatter={(value: number | undefined) => [
                      `${calculator.currencySymbol}${(value ?? 0).toLocaleString()}`,
                      undefined,
                    ]}
                  />
                  <Line
                    type="monotone"
                    dataKey={calculator.chartKeys.manualCost}
                    className={styles.lineManual}
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 4 }}
                  />
                  <Line
                    type="monotone"
                    dataKey={calculator.chartKeys.automationCost}
                    className={styles.lineAutomation}
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Bottom-left: Input Panel */}
          <Card
            variant="elevated"
            padding="medium"
            className={`${styles.panel} ${styles.inputPanel}`}
          >
            <div className={styles.fields}>
              <div className={styles.fieldGroup}>
                <label htmlFor="calc-hours-per-week" className={styles.label}>
                  {calculator.roiInputs.hoursPerWeek.label}
                </label>
                <input
                  id="calc-hours-per-week"
                  type="number"
                  min="0"
                  step="1"
                  className={styles.input}
                  value={inputs.hoursPerWeek === 0 ? '' : inputs.hoursPerWeek}
                  onChange={(e) =>
                    updateInput('hoursPerWeek', e.target.value === '' ? 0 : Number(e.target.value))
                  }
                  aria-label={calculator.roiInputs.hoursPerWeek.label}
                />
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="calc-num-employees" className={styles.label}>
                  {calculator.roiInputs.numEmployees.label}
                </label>
                <input
                  id="calc-num-employees"
                  type="number"
                  min="1"
                  step="1"
                  className={styles.input}
                  value={inputs.numEmployees === 0 ? '' : inputs.numEmployees}
                  onChange={(e) =>
                    updateInput('numEmployees', e.target.value === '' ? 0 : Number(e.target.value))
                  }
                  aria-label={calculator.roiInputs.numEmployees.label}
                />
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="calc-hourly-wage" className={styles.label}>
                  {calculator.roiInputs.hourlyWage.label}
                </label>
                <input
                  id="calc-hourly-wage"
                  type="number"
                  min="0"
                  step="0.01"
                  className={styles.input}
                  value={inputs.hourlyWage === 0 ? '' : inputs.hourlyWage}
                  onChange={(e) =>
                    updateInput('hourlyWage', e.target.value === '' ? 0 : Number(e.target.value))
                  }
                  aria-label={calculator.roiInputs.hourlyWage.label}
                />
              </div>

              <div className={`${styles.fieldGroup} ${styles.divider}`}>
                <label htmlFor="calc-setup-fee" className={styles.label}>
                  {calculator.roiInputs.setupFee.label}
                </label>
                <input
                  id="calc-setup-fee"
                  type="number"
                  min="0"
                  step="1"
                  className={styles.input}
                  value={inputs.setupFee === 0 ? '' : inputs.setupFee}
                  onChange={(e) =>
                    updateInput('setupFee', e.target.value === '' ? 0 : Number(e.target.value))
                  }
                  aria-label={calculator.roiInputs.setupFee.label}
                />
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="calc-monthly-retainer" className={styles.label}>
                  {calculator.roiInputs.monthlyRetainer.label}
                </label>
                <input
                  id="calc-monthly-retainer"
                  type="number"
                  min="0"
                  step="1"
                  className={styles.input}
                  value={inputs.monthlyRetainer === 0 ? '' : inputs.monthlyRetainer}
                  onChange={(e) =>
                    updateInput(
                      'monthlyRetainer',
                      e.target.value === '' ? 0 : Number(e.target.value)
                    )
                  }
                  aria-label={calculator.roiInputs.monthlyRetainer.label}
                />
              </div>
            </div>
          </Card>

          {/* Bottom-right: Results Panel */}
          <Card
            variant="elevated"
            padding="medium"
            className={`${styles.panel} ${styles.resultsPanel}`}
          >
            <div className={styles.statsList}>
              <div className={styles.statCard}>
                <p className={styles.statLabel}>{calculator.statLabels.hoursSaved}</p>
                <p className={styles.statValue}>
                  {results.manualHoursPerMonth.toLocaleString()} {calculator.units.hours}
                </p>
              </div>
              <div className={styles.statCard}>
                <p className={styles.statLabel}>{calculator.statLabels.annualSavings}</p>
                <p className={styles.statValue}>
                  {calculator.currencySymbol}
                  {results.annualNetSavings.toLocaleString()}
                </p>
              </div>
              <div className={styles.statCard}>
                <p className={styles.statLabel}>{calculator.statLabels.firstYearRoi}</p>
                <p className={styles.statValue}>
                  {results.roiPercentage}
                  {calculator.percentSymbol}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className={styles.actions}>
              <Button variant="outline" size="medium" onClick={handleDownload}>
                {calculator.downloadButton}
              </Button>
              <Button variant="primary" size="medium" onClick={handleEmail}>
                {calculator.emailButton}
              </Button>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
};
