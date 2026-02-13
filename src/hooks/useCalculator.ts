import { useState } from 'react';

export interface CalculatorInputs {
  people: number;
  hoursPerWeek: number;
  costPerHour: number;
  automationCost: number;
}

export interface CalculatorResults {
  monthlyAdminCost: number;
  yearlyRevenueLeak: number;
  yearlyHoursSaved: number;
  paybackPeriod: number;
  firstYearRoi: number;
  yearlySavings: number;
}

export const useCalculator = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    people: 10,
    hoursPerWeek: 15,
    costPerHour: 45,
    automationCost: 6000,
  });

  const updateInput = (field: keyof CalculatorInputs, value: number) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
  };

  const reset = () => {
    setInputs({
      people: 10,
      hoursPerWeek: 15,
      costPerHour: 45,
      automationCost: 6000,
    });
  };

  const calculateResults = (): CalculatorResults => {
    const { people, hoursPerWeek, costPerHour, automationCost } = inputs;

    const weeklyAdminCost = people * hoursPerWeek * costPerHour;
    const monthlyAdminCost = weeklyAdminCost * 4.33; // Average weeks per month
    const yearlyRevenueLeak = weeklyAdminCost * 52;
    const yearlyHoursSaved = people * hoursPerWeek * 52;
    const yearlySavings = yearlyRevenueLeak;
    const paybackPeriod = automationCost / monthlyAdminCost;
    const firstYearRoi = ((yearlySavings - automationCost) / automationCost) * 100;

    return {
      monthlyAdminCost,
      yearlyRevenueLeak,
      yearlyHoursSaved,
      paybackPeriod,
      firstYearRoi,
      yearlySavings,
    };
  };

  return {
    inputs,
    updateInput,
    reset,
    results: calculateResults(),
  };
};
