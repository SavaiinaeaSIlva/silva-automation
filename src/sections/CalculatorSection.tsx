import { useState, useMemo } from 'react';
import { siteContent } from '../content/siteContent';
import SectionLayout from '../components/SectionLayout';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

const WEEKS_PER_MONTH = 52 / 12;

export default function CalculatorSection() {
  const calc = siteContent.calculator;

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
              <span className="text-white/90 text-sm block mb-2 font-medium">
                {calc.fields[0].label}
              </span>
              <input
                type="number"
                id="team-size"
                min={calc.fields[0].min}
                max={calc.fields[0].max}
                value={teamSize}
                placeholder={calc.fields[0].placeholder}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === '') setTeamSize('');
                  else
                    setTeamSize(
                      Math.max(calc.fields[0].min!, Math.min(calc.fields[0].max!, Number(val)))
                    );
                }}
                className="form-input-underlined calculator-input"
                aria-describedby="team-size-desc"
              />
              <span id="team-size-desc" className="sr-only">
                {calc.fields[0].srDescription}
              </span>
            </label>
            <label className="block">
              <span className="text-white/90 text-sm block mb-2 font-medium">
                {calc.fields[1].label}
              </span>
              <input
                type="number"
                id="weekly-hours"
                min={calc.fields[1].min}
                max={calc.fields[1].max}
                value={weeklyHours}
                placeholder={calc.fields[1].placeholder}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === '') setWeeklyHours('');
                  else
                    setWeeklyHours(
                      Math.max(calc.fields[1].min!, Math.min(calc.fields[1].max!, Number(val)))
                    );
                }}
                className="form-input-underlined calculator-input"
                aria-describedby="weekly-hours-desc"
              />
              <span id="weekly-hours-desc" className="sr-only">
                {calc.fields[1].srDescription}
              </span>
            </label>
            <label className="block">
              <span className="text-white/90 text-sm block mb-2 font-medium">
                {calc.fields[2].label}
              </span>
              <input
                type="number"
                id="hourly-cost"
                min={calc.fields[2].min}
                max={calc.fields[2].max}
                value={hourlyCost}
                placeholder={calc.fields[2].placeholder}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === '') setHourlyCost('');
                  else
                    setHourlyCost(
                      Math.max(calc.fields[2].min!, Math.min(calc.fields[2].max!, Number(val)))
                    );
                }}
                className="form-input-underlined calculator-input"
                aria-describedby="hourly-cost-desc"
              />
              <span id="hourly-cost-desc" className="sr-only">
                {calc.fields[2].srDescription}
              </span>
            </label>
            <label className="block">
              <span className="text-white/90 text-sm block mb-2 font-medium">
                {calc.fields[3].label}
              </span>
              <input
                type="number"
                id="project-cost"
                min={calc.fields[3].min}
                value={projectCost}
                placeholder={calc.fields[3].placeholder}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === '') setProjectCost('');
                  else setProjectCost(Math.max(calc.fields[3].min!, Number(val)));
                }}
                className="form-input-underlined calculator-input"
                aria-describedby="project-cost-desc"
              />
              <span id="project-cost-desc" className="sr-only">
                {calc.fields[3].srDescription}
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
                ${monthlyAdminCost.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </span>
            </li>
            <li className="flex items-baseline justify-between gap-4">
              <span className="text-white/90 font-medium">
                {calc.resultLabels.yearlyRevenueLeak}
              </span>
              <span className="font-display text-white text-xl tabular-nums">
                ${yearlyRevenueLeak.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </span>
            </li>
            <li className="flex items-baseline justify-between gap-4 pt-3 mt-1 border-t border-white/20">
              <span className="text-white/90 font-medium">{calc.resultLabels.paybackPeriod}</span>
              <span className="font-display text-success text-xl tabular-nums">
                {paybackMonths > 0 && paybackMonths < 120
                  ? `${paybackMonths.toFixed(1)} months`
                  : paybackMonths >= 120
                    ? `${(paybackMonths / 12).toFixed(1)} years`
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
