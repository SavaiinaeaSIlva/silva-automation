import type { CalculatorInputs, CalculatorResults, CalculatorContent } from '@/types';

export const buildSummaryText = (
  inputs: CalculatorInputs,
  results: CalculatorResults,
  calculator: CalculatorContent
): string =>
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
