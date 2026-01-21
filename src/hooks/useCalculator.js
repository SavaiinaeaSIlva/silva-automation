// Custom hook for calculator logic
import { useState, useMemo } from "react";
import { calculatorContent } from "../data";
import { WEEKS_PER_MONTH, MONTHS_PER_YEAR } from "../constants";

function useCalculator() {
  const [teamSize, setTeamSize] = useState(calculatorContent.inputs.teamSize.default);
  const [weeklyHours, setWeeklyHours] = useState(calculatorContent.inputs.weeklyHours.default);
  const [hourlyCost, setHourlyCost] = useState(calculatorContent.inputs.hourlyCost.default);

  const results = useMemo(() => {
    const monthlyCost = teamSize * weeklyHours * hourlyCost * WEEKS_PER_MONTH;
    const yearlyCost = monthlyCost * MONTHS_PER_YEAR;
    return { monthlyCost, yearlyCost };
  }, [teamSize, weeklyHours, hourlyCost]);

  return {
    teamSize,
    setTeamSize,
    weeklyHours,
    setWeeklyHours,
    hourlyCost,
    setHourlyCost,
    ...results,
  };
}

export default useCalculator;
