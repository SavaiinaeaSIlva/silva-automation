import { siteContent } from '../content/siteContent';
import SectionLayout from '../components/SectionLayout';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';
import { Search, Compass, Cog, Rocket, ChevronRight } from 'lucide-react';

// Icon mapping for each step
const stepIcons = [Search, Compass, Cog, Rocket];

// Signal bar heights - each card grows taller
const cardHeights = [
  'h-[240px]', // Step 1 - shortest
  'h-[300px]', // Step 2
  'h-[360px]', // Step 3
  'h-[420px]', // Step 4 - tallest
];

export default function ProcessSection() {
  const process = siteContent.process;

  // Animation refs
  const headerRef = useScrollReveal({ y: 30, duration: 0.7 });
  const stepsRef = useStaggerReveal({
    y: 50,
    duration: 0.6,
    stagger: 0.25,
    childSelector: '.process-step',
  });
  const ctaRef = useScrollReveal({ y: 20, duration: 0.5, delay: 0.4 });

  return (
    <SectionLayout id="process">
      <div ref={headerRef}>
        <h2 className="section-header">{process.header}</h2>
        <p className="section-subtitle">{process.subtitle}</p>
      </div>

      {/* Process Steps - Signal Bar Cards */}
      <div ref={stepsRef} className="relative mt-12">
        <div className="flex flex-col lg:flex-row justify-center items-end gap-4">
          {process.steps.map((step, idx) => {
            const Icon = stepIcons[idx];

            return (
              <div key={step.title} className={`process-step w-full lg:w-64 ${cardHeights[idx]}`}>
                <div className="glass-card p-6 h-full relative overflow-hidden group hover:border-white/20 transition-all duration-300 flex flex-col">
                  {/* Large numbered background */}
                  <span
                    className="absolute -top-4 -right-2 text-[7rem] font-bold leading-none text-white/[0.03] select-none pointer-events-none"
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className="relative z-10 w-12 h-12 rounded-xl bg-white/[0.08] border border-white/[0.06] flex items-center justify-center mb-5 group-hover:bg-white/[0.12] transition-colors duration-300">
                    <Icon className="w-5 h-5 text-white/80" strokeWidth={1.5} />
                  </div>

                  {/* Step number badge */}
                  <span className="relative z-10 inline-block text-xs font-medium text-white/50 uppercase tracking-wider mb-2">
                    Step {step.number}
                  </span>

                  {/* Title */}
                  <h3 className="relative z-10 text-lg font-semibold text-white mb-3">
                    {step.title}
                  </h3>

                  {/* Description - flex-1 to fill remaining space */}
                  <p className="relative z-10 text-muted text-sm leading-relaxed flex-1">
                    {step.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA linking to calculator */}
      <div ref={ctaRef} className="mt-10 text-center">
        <a
          href={process.cta.anchor}
          className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 group"
        >
          {process.cta.text}
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </a>
      </div>
    </SectionLayout>
  );
}
