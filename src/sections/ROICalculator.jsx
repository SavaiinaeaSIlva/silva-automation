import React, { useState, useEffect } from 'react';
import { Clock, DollarSign, Users } from 'lucide-react';
import { SectionHeading, Button } from '../components/ui';
import { Reveal } from '../components';

export default function ROICalculator() {
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(35);
  const [employees, setEmployees] = useState(1);
  const [annualManualCost, setAnnualManualCost] = useState(0);
  const [firstYearSavings, setFirstYearSavings] = useState(0);
  const [paybackMonths, setPaybackMonths] = useState(0);

  useEffect(() => {
    const yearlyManual = (hoursPerWeek * 52) * hourlyRate * employees;
    setAnnualManualCost(yearlyManual);

    const automationCost = 3000; // Estimated average build cost
    const firstYear = yearlyManual - automationCost;
    setFirstYearSavings(firstYear);

    const monthlyManualCost = yearlyManual / 12;
    let months = 0;
    if (monthlyManualCost > 0) {
      months = automationCost / monthlyManualCost;
    }
    setPaybackMonths(months);
  }, [hoursPerWeek, hourlyRate, employees]);

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section id="roi-calculator" className="py-20 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Reveal animation="fade-in" delay={0}>
            <SectionHeading 
              title="Calculate Your Savings" 
              subtitle="See exactly how much time and money custom automation can save your business." 
            />
          </Reveal>

          <Reveal animation="scale-in" delay={200}>
            <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8 mb-10 relative overflow-hidden">
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-indigo-600"></div>

              {/* INPUTS GRID */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                
                {/* HOURS SLIDER */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-emerald-600" />
                    <label className="block text-sm font-bold text-slate-700">Hours Wasted / Week</label>
                  </div>
                  <div className="relative pt-2">
                    <input 
                      type="range" 
                      min="2" max="40" step="2"
                      value={hoursPerWeek}
                      onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                    />
                    <div className="flex justify-between mt-3 text-sm font-medium">
                      <span className="text-slate-400">2 hrs</span>
                      <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">{hoursPerWeek} hrs</span>
                      <span className="text-slate-400">40 hrs</span>
                    </div>
                  </div>
                </div>

                {/* RATE SELECT */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <DollarSign className="w-5 h-5 text-emerald-600" />
                    <label className="block text-sm font-bold text-slate-700">Hourly Cost</label>
                  </div>
                  <div className="relative">
                    <select
                      value={hourlyRate}
                      onChange={(e) => setHourlyRate(Number(e.target.value))}
                      className="block w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none font-medium text-slate-700"
                    >
                      <option value="25">$25 / hr</option>
                      <option value="35">$35 / hr</option>
                      <option value="50">$50 / hr</option>
                      <option value="75">$75 / hr</option>
                      <option value="100">$100 / hr</option>
                    </select>
                  </div>
                </div>

                {/* EMPLOYEES SELECT */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="w-5 h-5 text-emerald-600" />
                    <label className="block text-sm font-bold text-slate-700">Team Size</label>
                  </div>
                  <div className="relative">
                    <select
                      value={employees}
                      onChange={(e) => setEmployees(Number(e.target.value))}
                      className="block w-full px-4 py-3 border border-slate-200 rounded-xl bg-slate-50 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all outline-none font-medium text-slate-700"
                    >
                      <option value="1">1 person</option>
                      <option value="2">2 people</option>
                      <option value="3">3 people</option>
                      <option value="5">5+ people</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* RESULTS GRID */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Annual Waste</div>
                  <div className="text-3xl font-black text-slate-900">{formatCurrency(annualManualCost)}</div>
                  <div className="text-xs text-slate-500 mt-2">Spent on manual work</div>
                </div>

                <div className="text-center p-6 bg-emerald-50 rounded-2xl border border-emerald-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-emerald-200 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-bl-lg">PROFIT</div>
                  <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">1st Year Savings</div>
                  <div className="text-3xl font-black text-emerald-700">{formatCurrency(firstYearSavings)}</div>
                  <div className="text-xs text-emerald-600/70 mt-2">Net after build cost</div>
                </div>

                <div className="text-center p-6 bg-blue-50 rounded-2xl border border-blue-100">
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">Break Even In</div>
                  <div className="text-3xl font-black text-slate-900">
                    {paybackMonths === Infinity ? "N/A" : paybackMonths.toFixed(1)} <span className="text-lg font-medium text-slate-500">mo</span>
                  </div>
                  <div className="text-xs text-blue-500 mt-2">Return on Investment</div>
                </div>
              </div>

            </div>
          </Reveal>

          <Reveal animation="fade-in" delay={400}>
            <div className="text-center">
              <Button href="https://calendly.com/silvaautomation/consultation" className="shadow-xl shadow-emerald-600/20 bg-emerald-600 border-emerald-600 hover:bg-emerald-700">
                Start Saving Time & Money
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
  );
}