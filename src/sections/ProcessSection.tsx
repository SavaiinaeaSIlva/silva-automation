import { siteContent } from '../content/siteContent';
import SectionLayout from '../components/SectionLayout';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';
import { Search, Compass, Cog, Rocket, ChevronRight } from 'lucide-react';

// Icon mapping for each step
const stepIcons = [Search, Compass, Cog, Rocket];

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
    <SectionLayout id="process" lightLeaks="v1">
      <div ref={headerRef}>
        <h2 className="section-header">{process.header}</h2>
        <p className="section-subtitle">{process.subtitle}</p>
      </div>

      {/* Process Steps – each column: number above the line, card below */}
      <div
        ref={stepsRef}
        className="mt-12 flex flex-col lg:flex-row justify-center items-stretch gap-4 lg:gap-4"
      >
        {process.steps.map((step, idx) => {
          const Icon = stepIcons[idx];
          return (
            <div
              key={step.title}
              className="process-step flex flex-col w-full lg:w-64 flex-shrink-0"
            >
              {/* Number above the line */}
              <div className="flex justify-center pb-4">
                <span
                  className="text-[4rem] sm:text-[5rem] lg:text-[6rem] font-bold leading-none text-white/20 select-none"
                  aria-hidden="true"
                >
                  {step.number}
                </span>
              </div>
              {/* Line directly under the number */}
              <div className="w-full h-px bg-white/25 shrink-0" aria-hidden="true" />
              {/* Card below the line */}
              <div className="min-h-[14rem] lg:min-h-[16rem] pt-6 flex flex-col">
                <div className="glass-card p-4 h-full relative overflow-hidden group flex flex-col flex-1">
                  {/* Icon */}
                  <div className="relative z-10 w-10 h-10 rounded-xl bg-white/[0.08] border border-white/[0.06] flex items-center justify-center mb-3 group-hover:bg-white/[0.2] group-hover:border-white/[0.15] transition-colors duration-300">
                    <Icon className="w-4 h-4 text-white/80" strokeWidth={1.5} />
                  </div>

                  {/* Step number badge */}
                  <span className="relative z-10 inline-block text-xs font-medium text-white/50 uppercase tracking-wider mb-1">
                    Step {step.number}
                  </span>

                  {/* Title */}
                  <h3 className="relative z-10 text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 text-muted text-sm leading-relaxed flex-1">
                    {step.body}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
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
