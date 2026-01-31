import { siteContent } from '../content/siteContent';
import Button from '../components/Button';
import SectionLayout from '../components/SectionLayout';
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal';

export default function HeroSection() {
  // Parse stats into structured data for display
  const stats = siteContent.hero.stats.map((stat) => {
    const [value, label] = stat.split(' | ');
    return { id: value.toLowerCase().replace(/\W+/g, '-'), value, label };
  });

  // Animation refs
  const titleRef = useScrollReveal({ y: 30, duration: 0.7, start: 'top 95%' });
  const subtitleRef = useScrollReveal({ y: 20, duration: 0.6, delay: 0.1, start: 'top 95%' });
  const ctaRef = useScrollReveal({ y: 20, duration: 0.6, delay: 0.2, start: 'top 95%' });
  const statsRef = useStaggerReveal({
    y: 20,
    duration: 0.5,
    delay: 0.3,
    stagger: 0.1,
    start: 'top 95%',
  });

  return (
    <SectionLayout id="hero" lightLeaks="v1">
      <div className="space-y-8 max-w-3xl mx-auto">
        <h1
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold text-center leading-tight tracking-tight"
        >
          {siteContent.hero.title}
        </h1>

        <p ref={subtitleRef} className="text-center text-muted text-lg max-w-2xl mx-auto">
          {siteContent.hero.subtitle}
        </p>

        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
          <a href="#contact">
            <Button type="button">{siteContent.hero.cta}</Button>
          </a>
          <a href="#challenge-and-solution">
            <Button type="button" variant="secondary" icon={false}>
              Learn More
            </Button>
          </a>
        </div>

        {/* Stats grid */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/10 mt-12"
        >
          {stats.map((stat) => (
            <div key={stat.id} className="text-center py-2">
              <div className="text-2xl md:text-3xl font-semibold text-white mb-1">{stat.value}</div>
              <div className="text-muted text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
}
