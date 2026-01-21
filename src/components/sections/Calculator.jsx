// Calculator component - ROI Calculator section with F-pattern layout
import { calculatorContent } from "../../data";
import { useCalculator } from "../../hooks";
import { Section } from "../layout";
import CalculatorInput from "./CalculatorInput";
import CalculatorResult from "./CalculatorResult";
import IndustryExample from "./IndustryExample";

function Calculator() {
  const {
    teamSize,
    setTeamSize,
    weeklyHours,
    setWeeklyHours,
    hourlyCost,
    setHourlyCost,
    monthlyCost,
    yearlyCost,
  } = useCalculator();

  return (
    <Section id="calculator">
      {/* F-pattern: Two-column layout */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left column - Calculator */}
        <div className="glass-card">
          <div className="mb-6">
            <h2 className="section-title">
              {calculatorContent.title}
            </h2>
            <p className="text-body">
              {calculatorContent.subtitle}
            </p>
          </div>
          
          <CalculatorInput
            label={calculatorContent.inputs.teamSize.label}
            value={teamSize}
            onChange={setTeamSize}
            min={calculatorContent.inputs.teamSize.min}
            max={calculatorContent.inputs.teamSize.max}
          />
          
          <CalculatorInput
            label={calculatorContent.inputs.weeklyHours.label}
            value={weeklyHours}
            onChange={setWeeklyHours}
            min={calculatorContent.inputs.weeklyHours.min}
            max={calculatorContent.inputs.weeklyHours.max}
          />
          
          <CalculatorInput
            label={calculatorContent.inputs.hourlyCost.label}
            value={hourlyCost}
            onChange={setHourlyCost}
            min={calculatorContent.inputs.hourlyCost.min}
            max={calculatorContent.inputs.hourlyCost.max}
          />
          
          <CalculatorResult monthlyCost={monthlyCost} yearlyCost={yearlyCost} />
        </div>
        
        {/* Right column - Analysis */}
        <div>
          <h3 className="section-title mb-3">
            {calculatorContent.analysisTitle}
          </h3>
          <p className="text-body mb-6">
            {calculatorContent.analysisDescription}
          </p>
          
          <div className="space-y-4">
            {calculatorContent.industryExamples.map((example) => (
              <IndustryExample
                key={example.id}
                title={example.title}
                description={example.description}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Calculator;
