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
    <SectionLayout id="calculator">
      <div ref={headerRef}>
        <h2 className="section-header">{calc.title}</h2>
        <p className="section-subtitle">{calc.subtitle}</p>
      </div>

      <div ref={cardsRef} className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="glass-card p-6">
          <h3 className="font-semibold mb-4 text-text-main">Inputs</h3>
          <div className="space-y-4">
            <label className="block">
              <span className="text-muted text-sm block mb-1">
                Team size (crew/agents doing admin work)
              </span>
              <input
                type="number"
                id="team-size"
                min={1}
                max={50}
                value={teamSize}
                placeholder="e.g., 10"
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === '') {
                    setTeamSize('');
                  } else {
                    setTeamSize(Math.max(1, Math.min(50, Number(val))));
                  }
                }}
                className="form-input-underlined"
                aria-describedby="team-size-desc"
              />
              <span id="team-size-desc" className="sr-only">
                Enter the number of team members doing administrative work (1-50)
              </span>
            </label>
            <label className="block">
              <span className="text-muted text-sm block mb-1">
                Weekly paperwork hours per person (hrs/week)
              </span>
              <input
                type="number"
                id="weekly-hours"
                min={1}
                max={40}
                value={weeklyHours}
                placeholder="e.g., 15"
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === '') {
                    setWeeklyHours('');
                  } else {
                    setWeeklyHours(Math.max(1, Math.min(40, Number(val))));
                  }
                }}
                className="form-input-underlined"
                aria-describedby="weekly-hours-desc"
              />
              <span id="weekly-hours-desc" className="sr-only">
                Enter hours spent on paperwork per person per week (1-40)
              </span>
            </label>
            <label className="block">
              <span className="text-muted text-sm block mb-1">Average hourly cost ($/hr)</span>
              <input
                type="number"
                id="hourly-cost"
                min={20}
                max={200}
                value={hourlyCost}
                placeholder="e.g., 45"
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === '') {
                    setHourlyCost('');
                  } else {
                    setHourlyCost(Math.max(20, Math.min(200, Number(val))));
                  }
                }}
                className="form-input-underlined"
                aria-describedby="hourly-cost-desc"
              />
              <span id="hourly-cost-desc" className="sr-only">
                Enter average hourly cost per employee ($20-$200)
              </span>
            </label>
            <label className="block">
              <span className="text-muted text-sm block mb-1">
                Estimated automation project cost ($)
              </span>
              <input
                type="number"
                id="project-cost"
                min={0}
                value={projectCost}
                placeholder="e.g., 6000"
                onChange={(e) => {
                  const val = e.target.value;
                  if (val === '') {
                    setProjectCost('');
                  } else {
                    setProjectCost(Math.max(0, Number(val)));
                  }
                }}
                className="form-input-underlined"
                aria-describedby="project-cost-desc"
              />
              <span id="project-cost-desc" className="sr-only">
                Enter estimated cost for automation project in dollars
              </span>
            </label>
          </div>
        </div>

        <div className="glass-card p-6">
          <h3 className="font-semibold mb-4 text-text-main">Results</h3>
          <ul className="space-y-4">
            <li className="flex items-baseline justify-between gap-4">
              <span className="text-muted">Monthly admin cost</span>
              <span className="font-display text-cta">
                ${monthlyAdminCost.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </span>
            </li>
            <li className="flex items-baseline justify-between gap-4">
              <span className="text-muted">Yearly revenue leak</span>
              <span className="font-display text-cta">
                ${yearlyRevenueLeak.toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </span>
            </li>
            <li className="flex items-baseline justify-between gap-4 pt-2 border-t border-white/10">
              <span className="text-muted">Payback period</span>
              <span className="font-display text-success">
                {paybackMonths > 0 && paybackMonths < 120
                  ? `${paybackMonths.toFixed(1)} months`
                  : paybackMonths >= 120
                    ? `${(paybackMonths / 12).toFixed(1)} years`
                    : '—'}
              </span>
            </li>
          </ul>
          <p className="text-muted text-sm mt-6">{calc.analysisTitle}</p>
          <p className="text-muted text-sm mt-2">{calc.analysisCopy}</p>
        </div>
      </div>
    </SectionLayout>
  );
}
