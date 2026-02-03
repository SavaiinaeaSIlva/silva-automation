import { useState, useMemo } from 'react';
import { siteContent } from '../content/siteContent';
import SectionLayout from '../components/SectionLayout';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';
import { useAnimatedNumber } from '../hooks/useAnimatedNumber';

const WEEKS_PER_MONTH = 52 / 12;

export default function CalculatorSection() {
  const calc = siteContent.calculator;
  // Extract fields with guaranteed values
  const [field0, field1, field2, field3] = calc.fields;
  if (!field0 || !field1 || !field2 || !field3) {
    throw new Error('Calculator fields configuration is incomplete');
  }

  const [teamSize, setTeamSize] = useState<number | ''>('');
  const [weeklyHours, setWeeklyHours] = useState<number | ''>('');
  const [hourlyCost, setHourlyCost] = useState<number | ''>('');
  const [projectCost, setProjectCost] = useState<number | ''>('');

  const { monthlyAdminCost, yearlyRevenueLeak, paybackMonths } = useMemo(() => {
    // Monthly cost = team size * weekly hours per person * weeks/month * hourly cost
    const team = typeof teamSize === 'number' ? teamSize : 0;
    const hours = typeof weeklyHours === 'number' ? weeklyHours : 0;
    const cost = typeof hourlyCost === 'number' ? hourlyCost : 0;
    const project = typeof projectCost === 'number' ? projectCost : 0;

    const monthly = team * hours * WEEKS_PER_MONTH * cost;
    const yearly = monthly * 12;
    const payback = monthly > 0 ? project / monthly : 0;
    return {
      monthlyAdminCost: monthly,
      yearlyRevenueLeak: yearly,
      paybackMonths: payback,
    };
  }, [teamSize, weeklyHours, hourlyCost, projectCost]);

  // Animated display values
  const animatedMonthly = useAnimatedNumber(monthlyAdminCost);
  const animatedYearly = useAnimatedNumber(yearlyRevenueLeak);
  const animatedPayback = useAnimatedNumber(paybackMonths);

  // Animation refs
  const headerRef = useScrollReveal({ y: 30, duration: 0.7 });
  const cardsRef = useStaggerReveal({
    y: 40,
    duration: 0.6,
    stagger: 0.15,
    childSelector: '.glass-card',
  });

  return (
    <SectionLayout id="calculator" lightLeaks="v2">
      <div ref={headerRef}>
        <h2 className="section-header">{calc.title}</h2>
        <p className="section-subtitle">{calc.subtitle}</p>
      </div>

      <div ref={cardsRef} className="grid md:grid-cols-2 gap-6 mt-8 calculator-cards">
        <div className="glass-card glass-card-calculator p-6">
          <h3 className="font-semibold mb-4 text-white text-lg">{calc.inputsTitle}</h3>
          <div className="space-y-5">
            <label className="block">
              <span className="text-white/90 text-sm block mb-2 font-medium">{field0.label}</span>
              <input
                type="number"
                id="team-size"
                min={field0.min}
                max={field0.max}
                value={teamSize}
                placeholder={field0.placeholder}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === '') setTeamSize('');
                  else
                    setTeamSize(
                      Math.max(field0.min, Math.min(field0.max ?? Infinity, Number(val)))
                    );
                }}
                className="form-input-underlined calculator-input"
                aria-describedby="team-size-desc"
              />
              <span id="team-size-desc" className="sr-only">
                {field0.srDescription}
              </span>
            </label>
            <label className="block">
              <span className="text-white/90 text-sm block mb-2 font-medium">{field1.label}</span>
              <input
                type="number"
                id="weekly-hours"
                min={field1.min}
                max={field1.max}
                value={weeklyHours}
                placeholder={field1.placeholder}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === '') setWeeklyHours('');
                  else
                    setWeeklyHours(
                      Math.max(field1.min, Math.min(field1.max ?? Infinity, Number(val)))
                    );
                }}
                className="form-input-underlined calculator-input"
                aria-describedby="weekly-hours-desc"
              />
              <span id="weekly-hours-desc" className="sr-only">
                {field1.srDescription}
              </span>
            </label>
            <label className="block">
              <span className="text-white/90 text-sm block mb-2 font-medium">{field2.label}</span>
              <input
                type="number"
                id="hourly-cost"
                min={field2.min}
                max={field2.max}
                value={hourlyCost}
                placeholder={field2.placeholder}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === '') setHourlyCost('');
                  else
                    setHourlyCost(
                      Math.max(field2.min, Math.min(field2.max ?? Infinity, Number(val)))
                    );
                }}
                className="form-input-underlined calculator-input"
                aria-describedby="hourly-cost-desc"
              />
              <span id="hourly-cost-desc" className="sr-only">
                {field2.srDescription}
              </span>
            </label>
            <label className="block">
              <span className="text-white/90 text-sm block mb-2 font-medium">{field3.label}</span>
              <input
                type="number"
                id="project-cost"
                min={field3.min}
                value={projectCost}
                placeholder={field3.placeholder}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === '') setProjectCost('');
                  else setProjectCost(Math.max(field3.min, Number(val)));
                }}
                className="form-input-underlined calculator-input"
                aria-describedby="project-cost-desc"
              />
              <span id="project-cost-desc" className="sr-only">
                {field3.srDescription}
              </span>
            </label>
          </div>
        </div>

        <div className="glass-card glass-card-calculator p-6">
          <h3 className="font-semibold mb-4 text-white text-lg">{calc.resultsTitle}</h3>
          <ul className="space-y-5">
            <li className="flex items-baseline justify-between gap-4">
              <span className="text-white/90 font-medium">
                {calc.resultLabels.monthlyAdminCost}
              </span>
              <span className="font-display text-white text-xl tabular-nums">
                ${Math.round(animatedMonthly).toLocaleString('en-US')}
              </span>
            </li>
            <li className="flex items-baseline justify-between gap-4">
              <span className="text-white/90 font-medium">
                {calc.resultLabels.yearlyRevenueLeak}
              </span>
              <span className="font-display text-white text-xl tabular-nums">
                ${Math.round(animatedYearly).toLocaleString('en-US')}
              </span>
            </li>
            <li className="flex items-baseline justify-between gap-4 pt-3 mt-1 border-t border-white/20">
              <span className="text-white/90 font-medium">{calc.resultLabels.paybackPeriod}</span>
              <span className="font-display text-success text-xl tabular-nums">
                {animatedPayback > 0 && animatedPayback < 120
                  ? `${animatedPayback.toFixed(1)} months`
                  : animatedPayback >= 120
                    ? `${(animatedPayback / 12).toFixed(1)} years`
                    : '—'}
              </span>
            </li>
          </ul>
          <p className="text-white/90 font-medium mt-6 text-base">{calc.analysisTitle}</p>
          <p className="text-white/85 mt-2 text-base leading-relaxed">{calc.analysisCopy}</p>
        </div>
      </div>
    </SectionLayout>
  );
}
