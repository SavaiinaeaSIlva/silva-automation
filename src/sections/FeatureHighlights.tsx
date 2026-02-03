import { Clock, TrendingDown, Zap } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const features = [
  {
    icon: Clock,
    stat: '20+',
    unit: 'hours/week',
    label: 'Time Saved',
  },
  {
    icon: TrendingDown,
    stat: '50%',
    unit: 'cost reduction',
    label: 'Lower Expenses',
  },
  {
    icon: Zap,
    stat: '90',
    unit: 'day ROI',
    label: 'Fast Results',
  },
];

export default function FeatureHighlights() {
  const containerRef = useScrollReveal<HTMLDivElement>({ y: 30, duration: 0.6 });

  return (
    <section className="relative pt-0 pb-8 md:pb-12 -mt-12 md:-mt-16" aria-label="Key benefits">
      {/* Gradient divider line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div ref={containerRef} className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="feature-highlights-container">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="feature-highlight-item">
                <div className="feature-highlight-icon">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div className="feature-highlight-content">
                  <div className="feature-highlight-stat">
                    {feature.stat}
                    <span className="feature-highlight-unit">{feature.unit}</span>
                  </div>
                  <div className="feature-highlight-label">{feature.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Gradient divider line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
}
