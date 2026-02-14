import { useState } from 'react';
import { siteContent } from '@/constants';
import { Container, Section } from '@/components/layout';
import { Input, Button, Card } from '@/components/ui';
import { useCalculator } from '@/hooks';
import styles from './Calculator.module.css';

export const Calculator = () => {
  const { calculator } = siteContent;
  const { inputs, updateInput, reset, results } = useCalculator();
  const [copied, setCopied] = useState(false);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      maximumFractionDigits: 1,
    }).format(value);
  };

  const handleCopy = () => {
    const text = `
Monthly Admin Cost: ${formatCurrency(results.monthlyAdminCost)}
Yearly Cost: ${formatCurrency(results.yearlyRevenueLeak)}
Hours Saved: ${formatNumber(results.yearlyHoursSaved)}
Payback Period: ${formatNumber(results.paybackPeriod)} months
First Year ROI: ${formatNumber(results.firstYearRoi)}%
Yearly Savings: ${formatCurrency(results.yearlySavings)}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id={calculator.id} background="white" padding="large">
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>{calculator.title}</h2>
          <p className={styles.subtitle}>{calculator.subtitle}</p>
        </div>

        <div className={styles.calculator}>
          <Card variant="bordered" padding="large" className={styles.inputCard}>
            <h3 className={styles.cardTitle}>{calculator.inputsTitle}</h3>
            <div className={styles.inputs}>
              <Input
                type="number"
                label={calculator.fields[0].label}
                placeholder={calculator.fields[0].placeholder}
                value={inputs.people}
                onChange={(e) => updateInput('people', Number(e.target.value))}
                min={calculator.fields[0].min}
                max={calculator.fields[0].max}
              />

              <Input
                type="number"
                label={calculator.fields[1].label}
                placeholder={calculator.fields[1].placeholder}
                value={inputs.hoursPerWeek}
                onChange={(e) => updateInput('hoursPerWeek', Number(e.target.value))}
                min={calculator.fields[1].min}
                max={calculator.fields[1].max}
              />

              <Input
                type="number"
                label={calculator.fields[2].label}
                placeholder={calculator.fields[2].placeholder}
                value={inputs.costPerHour}
                onChange={(e) => updateInput('costPerHour', Number(e.target.value))}
                min={calculator.fields[2].min}
                max={calculator.fields[2].max}
              />

              <Input
                type="number"
                label={calculator.fields[3].label}
                placeholder={calculator.fields[3].placeholder}
                value={inputs.automationCost}
                onChange={(e) => updateInput('automationCost', Number(e.target.value))}
                min={calculator.fields[3].min}
              />
            </div>
            <Button variant="outline" onClick={reset} className={styles.resetButton}>
              {calculator.resetButton}
            </Button>
          </Card>

          <Card variant="bordered" padding="large" className={styles.resultsCard}>
            <div className={styles.resultsHeader}>
              <h3 className={styles.cardTitle}>{calculator.resultsTitle}</h3>
              <Button
                variant="outline"
                size="small"
                onClick={handleCopy}
                aria-label={calculator.copyAriaLabel}
              >
                {copied ? calculator.copiedButton : calculator.copyButton}
              </Button>
            </div>

            <div className={styles.results}>
              <div className={styles.result}>
                <span className={styles.resultLabel}>
                  {calculator.resultLabels.monthlyAdminCost}
                </span>
                <span className={styles.resultValue}>
                  {formatCurrency(results.monthlyAdminCost)}
                </span>
              </div>

              <div className={styles.result}>
                <span className={styles.resultLabel}>
                  {calculator.resultLabels.yearlyRevenueLeak}
                </span>
                <span className={styles.resultValue}>
                  {formatCurrency(results.yearlyRevenueLeak)}
                </span>
              </div>

              <div className={styles.result}>
                <span className={styles.resultLabel}>
                  {calculator.resultLabels.yearlyHoursSaved}
                </span>
                <span className={styles.resultValue}>{formatNumber(results.yearlyHoursSaved)}</span>
              </div>

              <div className={styles.result}>
                <span className={styles.resultLabel}>{calculator.resultLabels.paybackPeriod}</span>
                <span className={styles.resultValue}>
                  {formatNumber(results.paybackPeriod)} months
                </span>
              </div>

              <div className={styles.result}>
                <span className={styles.resultLabel}>{calculator.resultLabels.firstYearRoi}</span>
                <span className={styles.resultValue}>{formatNumber(results.firstYearRoi)}%</span>
              </div>

              <div className={styles.result}>
                <span className={styles.resultLabel}>{calculator.resultLabels.yearlySavings}</span>
                <span className={styles.resultValue}>{formatCurrency(results.yearlySavings)}</span>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
};
