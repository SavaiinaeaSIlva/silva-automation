import React from 'react';
import { Check, Shield, Zap, ArrowRight, Layers, Smartphone, BarChart3 } from 'lucide-react';
import { Button } from '../components/ui';
import { Reveal } from '../components';

const BUILDS = [
  {
    title: "Starter Build",
    sub: "Focused Automation",
    description: "A precision-engineered automation that eliminates a specific repetitive bottleneck in your workflow. Ideal for individual agents or specialized teams.",
    features: [
      "Lead & inquiry capture automation", 
      "Automated showing & appointment coordination", 
      "Instant notification & dashboard setup", 
      "Full technical handover & documentation",
      "90 days of dedicated performance support"
    ],
    featured: false
  },
  {
    title: "Professional Build",
    sub: "Full-System Architecture",
    description: "A comprehensive infrastructure build designed to handle high-volume pipelines and multi-agent coordination across your entire listing catalog.",
    features: [
      "End-to-end client onboarding ecosystems", 
      "Automated transaction document generation", 
      "Multi-channel nurture & follow-up sequences", 
      "Cross-platform data synchronization",
      "90 days of priority engineering access"
    ],
    featured: true
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 md:py-32 overflow-hidden bg-primary text-white">
      
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full blur-[120px] opacity-20 bg-blue-400" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full blur-[100px] opacity-10 bg-indigo-400" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
        
        <Reveal animation="fade-in" delay={0}>
          <div className="mb-16 text-center">
              <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
                Invest in Infrastructure, Not Subscriptions.
              </h2>
              <p className="text-blue-100/80 text-lg max-w-2xl mx-auto">
                We build custom software assets that you own forever. Stop paying monthly taxes on your productivity and start scaling with permanent efficiency.
              </p>
          </div>
        </Reveal>

        {/* Top Row: The Two Packages */}
        <div className="grid md:grid-cols-2 gap-8 mb-8 items-stretch">
          {BUILDS.map((plan, i) => (
            <Reveal key={i} animation="scale-in" delay={i * 200}>
              <div 
                className={`relative flex flex-col p-8 md:p-10 rounded-3xl border-2 transition-all duration-500 ${
                  plan.featured 
                  ? 'bg-white/10 backdrop-blur-xl border-accent shadow-xl z-20' 
                  : 'bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 z-10'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-8 bg-white text-primary text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider z-30 border border-accent">
                    Recommended
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className={`text-sm font-bold uppercase tracking-widest mb-2 ${plan.featured ? 'text-accent' : 'text-blue-300'}`}>
                    {plan.title}
                  </h3>
                  <div className="text-2xl font-bold text-white mb-2">{plan.sub}</div>
                  <p className="mt-4 text-sm text-blue-100/70 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8 flex-grow border-t border-white/10 pt-6">
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
                  className="w-full flex items-center justify-center gap-2 group"
                >
                  Request Custom Quote
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom Row: Wide "Ownership" Card */}
        <Reveal animation="reveal-up" delay={600}>
          <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-blue-500/20 rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative p-8 md:p-10 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-10">
                  <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 rounded-lg bg-accent/20 text-accent">
                              <Shield size={20} />
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-white">Full Asset Ownership & Portability</h3>
                      </div>
                      <p className="text-blue-100/70 text-base max-w-2xl">
                          Unlike "all-in-one" CRMs, you own <strong>entire source code</strong> and architecture of your automation. If you move teams or change tools, your infrastructure moves with you. No lock-in, no "data ransoms," ever.
                      </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 shrink-0">
                      <div className="flex flex-col items-center p-4 rounded-2xl bg-black/20 border border-white/5">
                          <Smartphone size={24} className="text-accent mb-2" />
                          <span className="text-[10px] uppercase font-bold tracking-widest text-blue-200">Mobile Ready</span>
                      </div>
                      <div className="flex flex-col items-center p-4 rounded-2xl bg-black/20 border border-white/5">
                          <Layers size={24} className="text-accent mb-2" />
                          <span className="text-[10px] uppercase font-bold tracking-widest text-blue-200">Scalable</span>
                      </div>
                  </div>
              </div>
          </div>
        </Reveal>

        <Reveal animation="fade-in" delay={800}>
          <div className="mt-12 text-center">
              <p className="text-blue-200/50 text-xs flex items-center justify-center gap-2">
                  <BarChart3 size={14} />
                  Most teams see a full ROI within first 4-6 months of implementation.
              </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}