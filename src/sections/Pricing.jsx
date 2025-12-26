import React, { useState } from 'react';
import { Check, TrendingUp, Wrench, Landmark } from 'lucide-react';
import { Button } from '../components/ui';

const PRICING_DATA = {
  build: [
    {
      title: "Core Automation",
      price: "$1,950", 
      sub: "High-ROI Entry Point",
      features: [
        "Eliminate 10+ manual hours/week", 
        "Replace $200+/mo in SaaS fees", 
        "100% Source Code Ownership", 
        "Custom Workflow Architecture", 
        "90-Day Performance Guarantee"
      ],
      featured: false
    },
    {
      title: "Growth System",
      price: "$4,850", 
      sub: "Departmental Scale",
      features: [
        "Recover 40+ manual hours/week", 
        "AI-Driven Lead & Data Triage", 
        "End-to-End System Resiliency", 
        "Full Infrastructure Migration", 
        "Zero-Subscription Ecosystem"
      ],
      featured: true
    },
    {
      title: "Enterprise",
      price: "$8,500+", 
      sub: "Clinic-Grade Infrastructure",
      features: [
        "Maximum Operational Efficiency", 
        "HIPAA-Aware Security Patterns", 
        "Complex Multi-App Ecosystems", 
        "Advanced System Monitoring", 
        "Priority Engineering Access"
      ],
      featured: false
    }
  ]
};

export default function Pricing() {
  const [pricingMode, setPricingMode] = useState('build');

  return (
    <section id="pricing" className="relative py-20 md:py-32 overflow-hidden bg-primary text-white">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full blur-[120px] opacity-20 bg-blue-400" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[100px] opacity-10 bg-indigo-400" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        
        <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
              Stop Buying Software. <br className="hidden md:block"/> Start Building Assets.
            </h2>
            <p className="text-blue-100/80 text-lg max-w-2xl mx-auto">
              Convert your monthly overhead into permanent business infrastructure. Pay for engineering once—own the results forever.
            </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/10 backdrop-blur-md p-1.5 rounded-full border border-white/10 inline-flex">
            <button
              onClick={() => setPricingMode('build')}
              className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${
                pricingMode === 'build' 
                ? 'bg-white text-primary shadow-lg' 
                : 'text-blue-200 hover:text-white'
              }`}
            >
              Package Options
            </button>
            <button
              onClick={() => setPricingMode('support')}
              className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${
                pricingMode === 'support' 
                ? 'bg-accent text-white shadow-lg' 
                : 'text-blue-200 hover:text-white'
              }`}
            >
              Pay As You Go!
            </button>
          </div>
        </div>

        {pricingMode === 'build' ? (
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
            {PRICING_DATA.build.map((plan, i) => (
              <div 
                key={i} 
                className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-500 ${
                  plan.featured 
                  ? 'bg-white/10 backdrop-blur-xl border-accent/50 shadow-[0_0_30px_rgba(255,165,0,0.25)] z-20 scale-105' 
                  : 'bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 z-10'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg z-30 whitespace-nowrap">
                    Recommended
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className={`text-xs font-bold uppercase tracking-widest mb-3 ${plan.featured ? 'text-accent' : 'text-blue-300'}`}>
                    {plan.title}
                  </h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">{plan.price}</span>
                  </div>
                  <p className="text-xs text-blue-200/70 font-medium uppercase mt-2 tracking-wider">{plan.sub}</p>
                </div>

                <ul className="space-y-4 mb-8 flex-grow border-t border-white/10 pt-8">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-blue-50/90">
                      <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.featured ? 'text-accent' : 'text-blue-400'}`} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  variant={plan.featured ? "white" : "outline-white"} 
                  href="https://calendly.com/silvaautomation/consultation"
                  className="w-full"
                >
                  {plan.title === "Enterprise" ? "Request Quote" : "Secure My Build"}
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="relative p-8 md:p-12 rounded-3xl bg-white/10 backdrop-blur-xl border border-accent/50 shadow-2xl flex flex-col md:flex-row items-center gap-10">
              
              <div className="flex-1 text-left">
                <div className="inline-flex p-3 rounded-xl bg-accent/20 text-accent mb-6">
                  <TrendingUp size={32} />
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4">Pay As You Go</h3>
                <p className="text-blue-100/90 text-lg mb-8 leading-relaxed">
                  No monthly retainers. No platform taxes. Pay only for the engineering time you actually use.
                </p>
                <Button variant="white" href="https://calendly.com/silvaautomation/consultation">
                  Book On-Demand Support
                </Button>
              </div>

              <div className="flex-1 grid gap-4 w-full">
                <div className="p-6 rounded-2xl bg-black/20 border border-white/5 flex items-start gap-4">
                  <Wrench className="text-accent mt-1 shrink-0" size={20} />
                  <div>
                    <h4 className="text-white font-bold text-base mb-1">On-Demand Engineering</h4>
                    <p className="text-blue-200/70 text-sm">Billed at $150/hr. No monthly minimums or retainers.</p>
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-black/20 border border-white/5 flex items-start gap-4">
                  <Landmark className="text-accent mt-1 shrink-0" size={20} />
                  <div>
                    <h4 className="text-white font-bold text-base mb-1">Long-Term Cost Protection</h4>
                    <p className="text-blue-200/70 text-sm">A one-time build saves tens of thousands in lifetime SaaS taxes.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </section>
  );
}