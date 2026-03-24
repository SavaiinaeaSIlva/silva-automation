import { Container, Section } from '@/components/layout';
import { Card, InputField } from '@/components/ui';
import { siteContent } from '@/constants';
import { useCalculator } from './useCalculator';
import { buildSummaryText } from './calculatorUtils';
import { CalculatorChart } from './CalculatorChart';
import { CalculatorResults } from './CalculatorResults';
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

  const summaryText = buildSummaryText(inputs, results, calculator);

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([summaryText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = calculator.downloadFilename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleEmail = () => {
    const subject = encodeURIComponent(calculator.emailSubject);
    const body = encodeURIComponent(summaryText);
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
          <CalculatorChart
            data={chartData}
            chartTitle={calculator.chartTitle}
            manualKey={calculator.chartKeys.manualCost}
            automationKey={calculator.chartKeys.automationCost}
            currencySymbol={calculator.currencySymbol}
            className={`${styles.panel} ${styles.chartPanel}`}
          />

          <Card
            variant="elevated"
            padding="medium"
            className={`${styles.panel} ${styles.inputPanel}`}
          >
            <div className={styles.fields}>
              <InputField
                id="calc-hours-per-week"
                label={calculator.roiInputs.hoursPerWeek.label}
                value={inputs.hoursPerWeek}
                onChange={(value) => updateInput('hoursPerWeek', value)}
                min={0}
                step={1}
              />
              <InputField
                id="calc-num-employees"
                label={calculator.roiInputs.numEmployees.label}
                value={inputs.numEmployees}
                onChange={(value) => updateInput('numEmployees', value)}
                min={1}
                step={1}
              />
              <InputField
                id="calc-hourly-wage"
                label={calculator.roiInputs.hourlyWage.label}
                value={inputs.hourlyWage}
                onChange={(value) => updateInput('hourlyWage', value)}
                min={0}
                step={0.01}
              />
              <div className={`${styles.fieldGroup} ${styles.divider}`}>
                <InputField
                  id="calc-setup-fee"
                  label={calculator.roiInputs.setupFee.label}
                  value={inputs.setupFee}
                  onChange={(value) => updateInput('setupFee', value)}
                  min={0}
                  step={1}
                />
              </div>
              <InputField
                id="calc-monthly-retainer"
                label={calculator.roiInputs.monthlyRetainer.label}
                value={inputs.monthlyRetainer}
                onChange={(value) => updateInput('monthlyRetainer', value)}
                min={0}
                step={1}
              />
            </div>
          </Card>

          <CalculatorResults
            results={results}
            statLabels={calculator.statLabels}
            units={calculator.units}
            currencySymbol={calculator.currencySymbol}
            percentSymbol={calculator.percentSymbol}
            downloadButton={calculator.downloadButton}
            emailButton={calculator.emailButton}
            onDownload={handleDownload}
            onEmail={handleEmail}
            className={`${styles.panel} ${styles.resultsPanel}`}
          />
        </div>
      </Container>
    </Section>
  );
};
