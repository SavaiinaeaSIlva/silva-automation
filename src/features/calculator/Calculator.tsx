import { useEffect, useRef, useState } from 'react';
import { siteContent } from '@/constants';
import { Container, Section } from '@/components/layout';
import { Button, Card } from '@/components/ui';
import { useCalculator } from './useCalculator';
import { Input } from './Input';
import { formatCurrency, formatNumber } from '@/utils';
import styles from './Calculator.module.css';

export const Calculator = () => {
  const { calculator } = siteContent;
  const { inputs, updateInput, reset, results } = useCalculator();
  const [copied, setCopied] = useState(false);
  const copyResetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (copyResetTimeoutRef.current) {
        clearTimeout(copyResetTimeoutRef.current);
      }
    };
  }, []);

  const handleCopy = async () => {
    const text = `
${calculator.resultLabels.monthlyAdminCost}: ${formatCurrency(results.monthlyAdminCost)}
${calculator.resultLabels.yearlyRevenueLeak}: ${formatCurrency(results.yearlyRevenueLeak)}
${calculator.resultLabels.yearlyHoursSaved}: ${formatNumber(results.yearlyHoursSaved)}
${calculator.resultLabels.paybackPeriod}: ${formatNumber(results.paybackPeriod)} ${calculator.monthsUnit}
${calculator.resultLabels.firstYearRoi}: ${formatNumber(results.firstYearRoi)}${calculator.percentUnit}
${calculator.resultLabels.yearlySavings}: ${formatCurrency(results.yearlySavings)}
    `.trim();

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      if (copyResetTimeoutRef.current) {
        clearTimeout(copyResetTimeoutRef.current);
      }
      copyResetTimeoutRef.current = setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Section id={calculator.id} background="white" padding="large" className={styles.section}>
      <img src="/assets/back.svg" alt="" className={styles.backgroundDecor} aria-hidden="true" />
      <Container className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>{calculator.title}</h2>
          <p className={styles.subtitle}>{calculator.subtitle}</p>
        </div>

        <div className={styles.calculator}>
          <Card variant="elevated" padding="medium" className={styles.inputCard}>
            <h3 className={styles.cardTitle}>{calculator.inputsTitle}</h3>
            <div className={styles.inputs}>
              <Input
                id="calculator-people"
                type="number"
                label={calculator.fields[0].label}
                placeholder={calculator.fields[0].placeholder}
                helperText={calculator.fields[0].srDescription}
                value={inputs.people}
                onChange={(e) => updateInput('people', Number(e.target.value))}
                min={calculator.fields[0].min}
                max={calculator.fields[0].max}
              />

              <Input
                id="calculator-hours-per-week"
                type="number"
                label={calculator.fields[1].label}
                placeholder={calculator.fields[1].placeholder}
                helperText={calculator.fields[1].srDescription}
                value={inputs.hoursPerWeek}
                onChange={(e) => updateInput('hoursPerWeek', Number(e.target.value))}
                min={calculator.fields[1].min}
                max={calculator.fields[1].max}
              />

              <Input
                id="calculator-cost-per-hour"
                type="number"
                label={calculator.fields[2].label}
                placeholder={calculator.fields[2].placeholder}
                helperText={calculator.fields[2].srDescription}
                value={inputs.costPerHour}
                onChange={(e) => updateInput('costPerHour', Number(e.target.value))}
                min={calculator.fields[2].min}
                max={calculator.fields[2].max}
              />

              <Input
                id="calculator-automation-cost"
                type="number"
                label={calculator.fields[3].label}
                placeholder={calculator.fields[3].placeholder}
                helperText={calculator.fields[3].srDescription}
                value={inputs.automationCost}
                onChange={(e) => updateInput('automationCost', Number(e.target.value))}
                min={calculator.fields[3].min}
              />
            </div>
            <Button variant="outline" onClick={reset} className={styles.resetButton}>
              {calculator.resetButton}
            </Button>
          </Card>

          <Card variant="elevated" padding="medium" className={styles.resultsCard}>
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
                  {formatNumber(results.paybackPeriod)} {calculator.monthsUnit}
                </span>
              </div>

              <div className={styles.result}>
                <span className={styles.resultLabel}>{calculator.resultLabels.firstYearRoi}</span>
                <span className={styles.resultValue}>
                  {formatNumber(results.firstYearRoi)}
                  {calculator.percentUnit}
                </span>
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
