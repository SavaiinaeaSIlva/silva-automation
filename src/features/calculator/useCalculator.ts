import { useState } from 'react';
import type { CalculatorInputs, CalculatorResults, CalculatorMonthlyPoint } from '@/types';

const WEEKS_PER_MONTH = 52 / 12;

export const useCalculator = (initialInputs: CalculatorInputs) => {
  const [inputs, setInputs] = useState<CalculatorInputs>(initialInputs);

  const updateInput = (field: keyof CalculatorInputs, value: number) => {
    const safeValue = Number.isFinite(value) ? Math.max(value, 0) : 0;
    setInputs((prev) => ({ ...prev, [field]: safeValue }));
  };

  const { hoursPerWeek, numEmployees, hourlyWage, setupFee, monthlyRetainer } = inputs;

  const manualHoursPerMonth = hoursPerWeek * WEEKS_PER_MONTH * numEmployees;
  const currentMonthlyCost = manualHoursPerMonth * hourlyWage;
  const monthlySavings = currentMonthlyCost - monthlyRetainer;
  const annualNetSavings = monthlySavings * 12 - setupFee;
  const firstYearInvestment = setupFee + monthlyRetainer * 12;
  const roiPercentage =
    firstYearInvestment > 0 ? ((annualNetSavings / firstYearInvestment) * 100).toFixed(0) : '0';

  const results: CalculatorResults = {
    manualHoursPerMonth: Math.round(manualHoursPerMonth),
    annualNetSavings: Math.round(annualNetSavings),
    roiPercentage,
  };

  const monthlyData: CalculatorMonthlyPoint[] = Array.from({ length: 12 }, (_, i) => {
    const month = i + 1;
    return {
      manualCost: Math.round(currentMonthlyCost * month),
      automationCost: Math.round(setupFee + monthlyRetainer * month),
    };
  });

  return { inputs, updateInput, results, monthlyData };
};
