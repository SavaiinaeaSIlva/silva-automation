import { useState, useMemo } from 'react';
import { siteContent } from '../../content/siteContent';
import SectionLayout from '../../components/SectionLayout';
import { useScrollReveal, useStaggerReveal } from '../../hooks/useScrollReveal';
import { useAnimatedNumber } from '../../hooks/useAnimatedNumber';

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
  const [touched, setTouched] = useState({
    teamSize: false,
    weeklyHours: false,
    hourlyCost: false,
    projectCost: false,
  });

  // Animation refs
  const headerRef = useScrollReveal({ y: 30, duration: 0.7 });
  const cardsRef = useStaggerReveal({
    y: 40,
    duration: 0.6,
    stagger: 0.15,
    childSelector: '.glass-card',
  });

  const { monthlyAdminCost, yearlyRevenueLeak, paybackMonths, yearlyHoursSaved } = useMemo(() => {
    // Monthly cost = team size * weekly hours per person * weeks/month * hourly cost
    const team = typeof teamSize === 'number' ? teamSize : 0;
    const hours = typeof weeklyHours === 'number' ? weeklyHours : 0;
    const cost = typeof hourlyCost === 'number' ? hourlyCost : 0;
    const project = typeof projectCost === 'number' ? projectCost : 0;

    const monthly = team * hours * WEEKS_PER_MONTH * cost;
    const yearly = monthly * 12;
    const payback = monthly > 0 ? project / monthly : 0;
    const yearlyHours = team * hours * 52;
    return {
      monthlyAdminCost: monthly,
      yearlyRevenueLeak: yearly,
      paybackMonths: payback,
      yearlyHoursSaved: yearlyHours,
    };
  }, [teamSize, weeklyHours, hourlyCost, projectCost]);

  // Animated display values
  const animatedMonthly = useAnimatedNumber(monthlyAdminCost);
  const animatedYearly = useAnimatedNumber(yearlyRevenueLeak);
  const animatedPayback = useAnimatedNumber(paybackMonths);
  const animatedYearlyHours = useAnimatedNumber(yearlyHoursSaved);
  // Validation helpers
  const getError = (field: 'teamSize' | 'weeklyHours' | 'hourlyCost' | 'projectCost') => {
    const value = { teamSize, weeklyHours, hourlyCost, projectCost }[field];
    const config = [field0, field1, field2, field3][
      ['teamSize', 'weeklyHours', 'hourlyCost', 'projectCost'].indexOf(field)
    ];
    // defensive guard for TypeScript - the fields were asserted above, but keep runtime guard
    if (!config) return '';
    if (touched[field]) {
      if (value === '' || value === undefined) return 'Required';
      if (typeof value === 'number') {
        if (config.min !== undefined && value < config.min) return `Min: ${config.min}`;
        if (config.max !== undefined && value > config.max) return `Max: ${config.max}`;
      }
    }
    return '';
  };

  const resetForm = () => {
    setTeamSize('');
    setWeeklyHours('');
    setHourlyCost('');
    setProjectCost('');
    setTouched({ teamSize: false, weeklyHours: false, hourlyCost: false, projectCost: false });
    // Scroll to calculator section
    const calculatorSection = document.getElementById('calculator');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <SectionLayout id="calculator" lightLeaks="v2">
      <div ref={headerRef}>
        <h2 className="section-header">{calc.title}</h2>
        <p className="section-subtitle">{calc.subtitle}</p>
      </div>

      <div ref={cardsRef} className="grid md:grid-cols-2 gap-6 mt-8 calculator-cards relative">
        <div className="calculator-orb" aria-hidden="true" />
        <div className="calculator-orb-blue" aria-hidden="true" />
        <div className="glass-card glass-card-calculator p-6 bg-zinc-900 border border-zinc-800">
          <h3 className="font-semibold mb-4 text-white text-lg">{calc.inputsTitle}</h3>
          <div className="space-y-5">
            {/* Team Size */}
            <label className="block relative text-left">
              <span className="text-white-90 text-sm block mb-2 font-medium text-left">
                {field0.label}
              </span>
              <input
                type="number"
                id="team-size"
                min={field0.min}
                max={field0.max}
                value={teamSize}
                placeholder={field0.placeholder}
                onChange={(e) => {
                  const val = e.target.value;
                  setTouched((t) => ({ ...t, teamSize: true }));
                  if (val === '') setTeamSize('');
                  else
                    setTeamSize(
                      Math.max(field0.min, Math.min(field0.max ?? Infinity, Number(val)))
                    );
                }}
                className={`form-input-underlined calculator-input ${getError('teamSize') ? 'border-red-500' : ''}`}
                aria-describedby="team-size-desc"
                onBlur={() => setTouched((t) => ({ ...t, teamSize: true }))}
              />
              <span id="team-size-desc" className="sr-only">
                {field0.srDescription}
              </span>
              {getError('teamSize') && (
                <span className="text-red-400 text-xs mt-1 block">{getError('teamSize')}</span>
              )}
            </label>
            {/* Weekly Hours */}
            <label className="block relative text-left">
              <span className="text-white-90 text-sm block mb-2 font-medium text-left">
                {field1.label}
              </span>
              <input
                type="number"
                id="weekly-hours"
                min={field1.min}
                max={field1.max}
                value={weeklyHours}
                placeholder={field1.placeholder}
                onChange={(e) => {
                  const val = e.target.value;
                  setTouched((t) => ({ ...t, weeklyHours: true }));
                  if (val === '') setWeeklyHours('');
                  else
                    setWeeklyHours(
                      Math.max(field1.min, Math.min(field1.max ?? Infinity, Number(val)))
                    );
                }}
                className={`form-input-underlined calculator-input ${getError('weeklyHours') ? 'border-red-500' : ''}`}
                aria-describedby="weekly-hours-desc"
                onBlur={() => setTouched((t) => ({ ...t, weeklyHours: true }))}
              />
              <span id="weekly-hours-desc" className="sr-only">
                {field1.srDescription}
              </span>
              {getError('weeklyHours') && (
                <span className="text-red-400 text-xs mt-1 block">{getError('weeklyHours')}</span>
              )}
            </label>
            {/* Hourly Cost */}
            <label className="block relative text-left">
              <span className="text-white-90 text-sm block mb-2 font-medium text-left">
                {field2.label}
              </span>
              <input
                type="number"
                id="hourly-cost"
                min={field2.min}
                max={field2.max}
                value={hourlyCost}
                placeholder={field2.placeholder}
                onChange={(e) => {
                  const val = e.target.value;
                  setTouched((t) => ({ ...t, hourlyCost: true }));
                  if (val === '') setHourlyCost('');
                  else
                    setHourlyCost(
                      Math.max(field2.min, Math.min(field2.max ?? Infinity, Number(val)))
                    );
                }}
                className={`form-input-underlined calculator-input ${getError('hourlyCost') ? 'border-red-500' : ''}`}
                aria-describedby="hourly-cost-desc"
                onBlur={() => setTouched((t) => ({ ...t, hourlyCost: true }))}
              />
              <span id="hourly-cost-desc" className="sr-only">
                {field2.srDescription}
              </span>
              {getError('hourlyCost') && (
                <span className="text-red-400 text-xs mt-1 block">{getError('hourlyCost')}</span>
              )}
            </label>
            {/* Project Cost */}
            <label className="block relative text-left">
              <span className="text-white-90 text-sm block mb-2 font-medium text-left">
                {field3.label}
              </span>
              <input
                type="number"
                id="project-cost"
                min={field3.min}
                value={projectCost}
                placeholder={field3.placeholder}
                onChange={(e) => {
                  const val = e.target.value;
                  setTouched((t) => ({ ...t, projectCost: true }));
                  if (val === '') setProjectCost('');
                  else setProjectCost(Math.max(field3.min, Number(val)));
                }}
                className={`form-input-underlined calculator-input ${getError('projectCost') ? 'border-red-500' : ''}`}
                aria-describedby="project-cost-desc"
                onBlur={() => setTouched((t) => ({ ...t, projectCost: true }))}
              />
              <span id="project-cost-desc" className="sr-only">
                {field3.srDescription}
              </span>
              {getError('projectCost') && (
                <span className="text-red-400 text-xs mt-1 block">{getError('projectCost')}</span>
              )}
            </label>
            <button
              type="button"
              className="mt-4 px-4 py-2 rounded bg-gray-700 text-white hover:bg-gray-600 transition"
              onClick={resetForm}
            >
              Reset
            </button>
          </div>
        </div>

        <div className="glass-card glass-card-calculator p-6 transparent-card sticky top-4 flex flex-col justify-between">
          <h3 className="font-semibold mb-4 text-white text-lg">{calc.resultsTitle}</h3>
          <ul className="space-y-5 flex-1">
            <li className="flex items-baseline justify-between gap-4">
              <span className="text-accent-platinum font-medium">
                {calc.resultLabels.monthlyAdminCost}
              </span>
              <span className="font-display text-white text-xl tabular-nums">
                ${Math.round(animatedMonthly).toLocaleString('en-US')}
              </span>
            </li>
            <li className="flex items-baseline justify-between gap-4">
              <span className="text-accent-platinum font-medium">
                {calc.resultLabels.yearlyRevenueLeak}
              </span>
              <span className="font-display text-white text-xl tabular-nums">
                ${Math.round(animatedYearly).toLocaleString('en-US')}
              </span>
            </li>
            <li className="flex items-baseline justify-between gap-4">
              <span className="text-accent-platinum font-medium">Yearly hours saved</span>
              <span className="font-display text-white text-xl tabular-nums">
                {Math.round(animatedYearlyHours).toLocaleString('en-US')} hrs
              </span>
            </li>
            <li className="flex items-baseline justify-between gap-4 pt-3 mt-1 border-t border-divider-strong">
              <span className="text-accent-platinum font-medium">
                {calc.resultLabels.paybackPeriod}
              </span>
              <span className="font-display text-success text-xl tabular-nums">
                {animatedPayback > 0 && animatedPayback < 120
                  ? `${animatedPayback.toFixed(1)} months`
                  : animatedPayback >= 120
                    ? `${(animatedPayback / 12).toFixed(1)} years`
                    : '—'}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </SectionLayout>
  );
}
