import React from 'react';
import { SectionHeading } from '../components/ui';

const steps = [
  { step: "01", title: "Assessment", desc: "We review your current tools and workflows to identify where automation makes sense." },
  { step: "02", title: "Design", desc: "A clear project scope, technical approach, and delivery timeline are defined before any work begins." },
  { step: "03", title: "Build & Deploy", desc: "Automation workflows are built, tested, and deployed directly into your cloud infrastructure." },
  { step: "04", title: "Handoff", desc: "You receive full documentation, training, and a 90-day support period." }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#051650 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading 
          title="Clear Process. Defined Scope." 
          subtitle="No black boxes. Just a straightforward path from chaos to clarity." 
        />
        
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12 mt-16">
          {steps.map((item, i) => (
            <div key={i} className="relative flex flex-col items-start group">
              
              {/* Connecting Line (Desktop Only) */}
              {i !== steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-20 right-[-20%] h-[2px] bg-slate-200 group-hover:bg-blue-200 transition-colors" />
              )}
              
              {/* Step Number */}
              <div className="relative z-10 w-16 h-16 rounded-xl bg-white border-2 border-slate-100 flex items-center justify-center text-2xl font-black text-primary shadow-lg mb-6 group-hover:-translate-y-1 transition-transform duration-300">
                {item.step}
              </div>

              <h3 className="text-xl font-bold mb-3 text-primary">
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;