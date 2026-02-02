import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { siteContent } from '../content/siteContent';
import { useScrollReveal } from '../hooks/useScrollReveal';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const titleRef = useScrollReveal({ y: 30, duration: 0.7, start: 'top top' });
  const subtitleRef = useScrollReveal({ y: 20, duration: 0.6, delay: 0.1, start: 'top top' });
  const ctaRef = useScrollReveal({ y: 20, duration: 0.6, delay: 0.2, start: 'top top' });
  const parallaxRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const parallax = parallaxRef.current;
    if (!hero || !parallax) return;

    const yMove = () => {
      const h = hero.offsetHeight;
      return h * 0.35;
    };

    gsap.to(parallax, {
      y: yMove(),
      ease: 'none',
      scrollTrigger: {
        trigger: hero,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-screen flex flex-col justify-center py-16 md:py-20 text-text-main relative"
    >
      <div className="hero-parallax-bg" ref={parallaxRef} aria-hidden />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="hero-content relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="glass-card-featured p-10 sm:p-12 md:p-14 text-center overflow-hidden w-full max-w-full">
            <h1
              ref={titleRef}
              className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-tight text-center flex flex-col items-center"
            >
              {(() => {
                const title = siteContent.hero.title;
                const periodIdx = title.indexOf('. ');
                const line2 = periodIdx >= 0 ? title.slice(periodIdx + 2) : '';
                return (
                  <>
                    <span className="block whitespace-nowrap text-center">
                      <span className="text-white">Stop</span> Drowning in Paperwork.
                    </span>
                    {line2 && (
                      <span className="block whitespace-nowrap text-center mt-4">
                        <span className="hero-light-leak-text italic">Start</span> Running Your
                        Business
                      </span>
                    )}
                  </>
                );
              })()}
            </h1>

            <p
              ref={subtitleRef}
              className="text-muted text-base sm:text-lg max-w-full mx-auto mt-4 sm:mt-6 leading-relaxed text-center px-0"
            >
              {siteContent.hero.subtitle}
            </p>

            <div ref={ctaRef} className="flex justify-center mt-6 sm:mt-8">
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-full font-medium text-sm cursor-pointer transition-all inline-flex items-center gap-2 bg-white text-black hover:bg-neutral-200 hover:-translate-y-0.5 shadow-lg shadow-white/10"
              >
                {siteContent.hero.cta}
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
