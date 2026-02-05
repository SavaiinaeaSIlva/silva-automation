import { useCallback, useMemo, useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { SectionLayout } from '@/components';
import { siteContent } from '@/content/siteContent';
import { useAnimatedNumber, useScrollReveal, useStaggerReveal } from '@/hooks';

const WEEKS_PER_MONTH = 52 / 12;

export default function CalculatorSection() {
  const calc = siteContent.calculator;
  // Extract fields with guaranteed values
  const [field0, field1, field2, field3] = calc.fields;

  // All hooks must be called unconditionally at the top
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
  const [copied, setCopied] = useState(false);
  const [shakeField, setShakeField] = useState<string | null>(null);

  // Animation refs
  const headerRef = useScrollReveal({ y: 30, duration: 0.7 });
  const cardsRef = useStaggerReveal({
    y: 40,
    duration: 0.6,
    stagger: 0.15,
    childSelector: '.glass-card',
  });

  const {
    monthlyAdminCost,
    yearlyRevenueLeak,
    paybackMonths,
    yearlyHoursSaved,
    savingsPercentage,
  } = useMemo(() => {
    // Monthly cost = team size * weekly hours per person * weeks/month * hourly cost
    const team = typeof teamSize === 'number' ? teamSize : 0;
    const hours = typeof weeklyHours === 'number' ? weeklyHours : 0;
    const cost = typeof hourlyCost === 'number' ? hourlyCost : 0;
    const project = typeof projectCost === 'number' ? projectCost : 0;

    const monthly = team * hours * WEEKS_PER_MONTH * cost;
    const yearly = monthly * 12;
    const payback = monthly > 0 ? project / monthly : 0;
    const yearlyHours = team * hours * 52;
    // Calculate percentage savings (assuming 70% automation efficiency)
    const automationEfficiency = 0.7;
    const yearlySavings = yearly * automationEfficiency;
    const savingsPercent =
      project > 0 && yearlySavings > 0 ? ((yearlySavings - project) / project) * 100 : 0;

    return {
      monthlyAdminCost: monthly,
      yearlyRevenueLeak: yearly,
      paybackMonths: payback,
      yearlyHoursSaved: yearlyHours,
      savingsPercentage: savingsPercent,
    };
  }, [teamSize, weeklyHours, hourlyCost, projectCost]);

  // Animated display values
  const animatedMonthly = useAnimatedNumber(monthlyAdminCost);
  const animatedYearly = useAnimatedNumber(yearlyRevenueLeak);
  const animatedPayback = useAnimatedNumber(paybackMonths);
  const animatedYearlyHours = useAnimatedNumber(yearlyHoursSaved);
  const animatedSavingsPercent = useAnimatedNumber(savingsPercentage);

  // Copy results to clipboard
  const copyResults = useCallback(() => {
    const results = `Admin Cost Calculator Results
Monthly Admin Cost: $${Math.round(monthlyAdminCost).toLocaleString('en-US')}
Yearly Revenue Leak: $${Math.round(yearlyRevenueLeak).toLocaleString('en-US')}
Yearly Hours Saved: ${Math.round(yearlyHoursSaved).toLocaleString('en-US')} hrs
Payback Period: ${paybackMonths > 0 && paybackMonths < 120 ? `${paybackMonths.toFixed(1)} months` : paybackMonths >= 120 ? `${(paybackMonths / 12).toFixed(1)} years` : 'N/A'}
First Year ROI: ${savingsPercentage > 0 ? `${Math.round(savingsPercentage)}%` : 'N/A'}

Calculated by Silva Automation`;

    navigator.clipboard.writeText(results).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [monthlyAdminCost, yearlyRevenueLeak, yearlyHoursSaved, paybackMonths, savingsPercentage]);

  // Validation check after all hooks
  const hasValidConfig = !!(field0 && field1 && field2 && field3);
  if (!hasValidConfig) {
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.warn('CalculatorSection: fields configuration is incomplete');
    }
    return null;
  }

  // Validation helpers with shake animation
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

  const triggerShake = (field: string) => {
    setShakeField(field);
    setTimeout(() => setShakeField(null), 400);
  };

  const handleBlurWithShake = (
    field: 'teamSize' | 'weeklyHours' | 'hourlyCost' | 'projectCost'
  ) => {
    setTouched((t) => ({ ...t, [field]: true }));
    if (getError(field)) {
      triggerShake(field);
    }
  };

  const isFieldValid = (field: 'teamSize' | 'weeklyHours' | 'hourlyCost' | 'projectCost') => {
    const value = { teamSize, weeklyHours, hourlyCost, projectCost }[field];
    return touched[field] && value !== '' && !getError(field);
  };

  const resetForm = () => {
    setTeamSize('');
    setWeeklyHours('');
    setHourlyCost('');
    setProjectCost('');
    setTouched({ teamSize: false, weeklyHours: false, hourlyCost: false, projectCost: false });
    // Focus first input after reset
    const firstInput = document.getElementById('team-size');
    if (firstInput) {
      firstInput.focus();
    }
  };

  return (
    <SectionLayout id="calculator">
      <div ref={headerRef}>
        <h2 className="section-header">{calc.title}</h2>
        <p className="section-subtitle">{calc.subtitle}</p>
      </div>

      <div ref={cardsRef} className="grid md:grid-cols-2 gap-6 mt-8 relative">
        <div className="glass-card glass-card-calculator p-6">
          <h3 className="font-semibold mb-4 text-white text-lg">{calc.inputsTitle}</h3>
          <div className="space-y-5">
            {/* Team Size */}
            <label className="block relative text-left">
              <span className="text-white-90 text-sm mb-2 font-medium text-left flex items-center gap-2">
                {field0.label}
                {isFieldValid('teamSize') && (
                  <Check className="w-4 h-4 text-green-500" aria-hidden="true" />
                )}
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
                className={`form-input-underlined calculator-input ${getError('teamSize') ? 'border-red-500' : ''} ${isFieldValid('teamSize') ? 'input-valid' : ''} ${shakeField === 'teamSize' ? 'input-error' : ''}`}
                aria-describedby="team-size-desc"
                aria-invalid={!!getError('teamSize')}
                onBlur={() => handleBlurWithShake('teamSize')}
              />
              <span id="team-size-desc" className="sr-only">
                {field0.srDescription}
              </span>
              {getError('teamSize') && (
                <span className="text-red-400 text-xs mt-1 block" role="alert">
                  {getError('teamSize')}
                </span>
              )}
            </label>
            {/* Weekly Hours */}
            <label className="block relative text-left">
              <span className="text-white-90 text-sm mb-2 font-medium text-left flex items-center gap-2">
                {field1.label}
                {isFieldValid('weeklyHours') && (
                  <Check className="w-4 h-4 text-green-500" aria-hidden="true" />
                )}
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
                className={`form-input-underlined calculator-input ${getError('weeklyHours') ? 'border-red-500' : ''} ${isFieldValid('weeklyHours') ? 'input-valid' : ''} ${shakeField === 'weeklyHours' ? 'input-error' : ''}`}
                aria-describedby="weekly-hours-desc"
                aria-invalid={!!getError('weeklyHours')}
                onBlur={() => handleBlurWithShake('weeklyHours')}
              />
              <span id="weekly-hours-desc" className="sr-only">
                {field1.srDescription}
              </span>
              {getError('weeklyHours') && (
                <span className="text-red-400 text-xs mt-1 block" role="alert">
                  {getError('weeklyHours')}
                </span>
              )}
            </label>
            {/* Hourly Cost */}
            <label className="block relative text-left">
              <span className="text-white-90 text-sm mb-2 font-medium text-left flex items-center gap-2">
                {field2.label}
                {isFieldValid('hourlyCost') && (
                  <Check className="w-4 h-4 text-green-500" aria-hidden="true" />
                )}
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
                className={`form-input-underlined calculator-input ${getError('hourlyCost') ? 'border-red-500' : ''} ${isFieldValid('hourlyCost') ? 'input-valid' : ''} ${shakeField === 'hourlyCost' ? 'input-error' : ''}`}
                aria-describedby="hourly-cost-desc"
                aria-invalid={!!getError('hourlyCost')}
                onBlur={() => handleBlurWithShake('hourlyCost')}
              />
              <span id="hourly-cost-desc" className="sr-only">
                {field2.srDescription}
              </span>
              {getError('hourlyCost') && (
                <span className="text-red-400 text-xs mt-1 block" role="alert">
                  {getError('hourlyCost')}
                </span>
              )}
            </label>
            {/* Project Cost */}
            <label className="block relative text-left">
              <span className="text-white-90 text-sm mb-2 font-medium text-left flex items-center gap-2">
                {field3.label}
                {isFieldValid('projectCost') && (
                  <Check className="w-4 h-4 text-green-500" aria-hidden="true" />
                )}
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
                className={`form-input-underlined calculator-input ${getError('projectCost') ? 'border-red-500' : ''} ${isFieldValid('projectCost') ? 'input-valid' : ''} ${shakeField === 'projectCost' ? 'input-error' : ''}`}
                aria-describedby="project-cost-desc"
                aria-invalid={!!getError('projectCost')}
                onBlur={() => handleBlurWithShake('projectCost')}
              />
              <span id="project-cost-desc" className="sr-only">
                {field3.srDescription}
              </span>
              {getError('projectCost') && (
                <span className="text-red-400 text-xs mt-1 block" role="alert">
                  {getError('projectCost')}
                </span>
              )}
            </label>
            <button
              type="button"
              className="mt-4 px-5 py-3 rounded-full bg-glass-medium text-white hover:bg-glass-strong border border-subtle hover:border-medium transition-all reset-button-large"
              onClick={resetForm}
            >
              Reset
            </button>
          </div>
        </div>

        <div className="glass-card glass-card-calculator p-6 transparent-card sticky top-4 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-white text-lg">{calc.resultsTitle}</h3>
            <button
              type="button"
              onClick={copyResults}
              className="copy-button"
              aria-label="Copy results to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" aria-hidden="true" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" aria-hidden="true" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          <ul className="space-y-5 flex-1" aria-live="polite" aria-atomic="true">
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
            <li className="flex items-baseline justify-between gap-4">
              <span className="text-accent-platinum font-medium">First year ROI</span>
              <span className="font-display text-green-400 text-xl tabular-nums">
                {animatedSavingsPercent > 0 ? `${Math.round(animatedSavingsPercent)}%` : '—'}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </SectionLayout>
  );
}
