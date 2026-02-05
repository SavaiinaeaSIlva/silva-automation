import { ArrowRight, ChevronRight, Cog, Compass, Rocket, Search } from 'lucide-react';
import { SectionLayout } from '@/components';
import { siteContent } from '@/content/siteContent';
import { useScrollReveal, useStaggerReveal } from '@/hooks';

/**
 * ProcessSection — Gold-Standard Component Example
 *
 * This component demonstrates the design system patterns:
 * - Uses semantic Tailwind tokens from tailwind.config.cjs
 * - No arbitrary values (e.g., text-[4rem], bg-[#xxx])
 * - Consistent spacing using design tokens (min-h-section-card-sm)
 * - Glass card patterns with proper hover states
 * - Accessibility: aria-hidden for decorative elements
 * - Animation hooks from centralized /hooks directory
 */

// Icon mapping for each step — keeps render logic clean
const stepIcons = [Search, Compass, Cog, Rocket];

function toRoman(num: number) {
  if (!num || num <= 0) return '';
  const map: [number, string][] = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];
  let res = '';
  let n = Math.floor(num);
  for (const [value, numeral] of map) {
    while (n >= value) {
      res += numeral;
      n -= value;
    }
  }
  return res;
}

export default function ProcessSection() {
  const process = siteContent.process;

  // Animation refs — using centralized scroll reveal hooks
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
      {/* Section Header */}
      <div ref={headerRef}>
        <h2 className="section-header">{process.header}</h2>
        <p className="section-subtitle">{process.subtitle}</p>
      </div>

      {/* Process Steps Grid */}
      <div
        ref={stepsRef}
        className="mt-12 flex flex-col lg:flex-row justify-center items-stretch gap-4 lg:gap-0"
      >
        {process.steps.map((step, idx) => {
          const Icon = stepIcons[idx];
          if (!Icon) return null;
          const isLast = idx === process.steps.length - 1;

          return (
            <div
              key={step.title}
              className="process-step flex flex-col lg:flex-row items-center justify-center w-full lg:w-auto shrink-0"
            >
              {/* Step Content Column */}
              <div className="flex flex-col w-full lg:w-step-card items-center">
                {/* Step Number — Display Typography */}
                <div className="flex justify-center pb-4">
                  <span
                    className="text-display-sm sm:text-display-md lg:text-display-lg leading-none select-none outlined-number outlined-number--zinc text-zinc-400"
                    aria-hidden="true"
                  >
                    <svg
                      className="inline-block w-auto h-16 sm:h-20 lg:h-24"
                      viewBox="0 0 140 140"
                      preserveAspectRatio="xMidYMid meet"
                      role="img"
                      aria-hidden="true"
                      focusable="false"
                      overflow="visible"
                      style={{ overflow: 'visible' }}
                    >
                      <text
                        x="50%"
                        y="66%"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        fontFamily="Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial"
                        fontWeight="700"
                        fontSize="120"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinejoin="round"
                        vectorEffect="non-scaling-stroke"
                      >
                        {toRoman(Number(step.number))}
                      </text>
                    </svg>
                  </span>
                </div>

                {/* Divider Line */}
                <div className="w-full h-divider bg-zinc-400 shrink-0" aria-hidden="true" />

                {/* Step Card */}
                <div className="min-h-section-card-sm lg:min-h-section-card-lg pt-6 flex flex-col">
                  <div className="glass-card p-card-sm h-full relative overflow-hidden group flex flex-col flex-1 items-center text-center">
                    {/* Icon Container */}
                    <div className="relative z-base w-icon-sm h-icon-sm rounded-xl bg-glass-medium border border-subtle flex items-center justify-center mb-3 group-hover:bg-glass-strong group-hover:border-strong transition-colors duration-slow">
                      <Icon className="w-4 h-4 text-accent-platinum" strokeWidth={1.5} />
                    </div>

                    {/* Step Badge */}
                    <span className="relative z-base inline-block text-xs font-medium text-white-50 uppercase tracking-wider mb-1">
                      Step {toRoman(Number(step.number))}
                    </span>

                    {/* Step Title */}
                    <h3 className="relative z-base text-lg font-semibold text-white mb-2">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="relative z-base text-muted text-sm leading-relaxed flex-1">
                      {step.body}
                    </p>
                  </div>
                </div>
              </div>

              {/* Arrow Connector — Desktop Only */}
              {!isLast && (
                <div className="hidden lg:flex items-center justify-center px-3" aria-hidden="true">
                  <div className="flex flex-col items-center gap-1 pt-20">
                    <ArrowRight className="w-5 h-5 text-white-30" strokeWidth={1.5} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Section CTA */}
      <div ref={ctaRef} className="mt-10 text-center">
        <a
          href={process.cta.anchor}
          className="inline-flex items-center gap-2 text-sm font-medium text-white-70 hover:text-white transition-colors duration-normal group"
        >
          {process.cta.text}
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-normal" />
        </a>
      </div>
    </SectionLayout>
  );
}
