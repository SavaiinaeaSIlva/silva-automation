import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { siteContent } from '../content/siteContent';
import { useScrollReveal } from '../hooks/useScrollReveal';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const titleRef = useScrollReveal<HTMLImageElement>({ y: 30, duration: 0.7, start: 'top top' });
  const subtitleRef = useScrollReveal<HTMLParagraphElement>({
    y: 20,
    duration: 0.6,
    delay: 0.1,
    start: 'top top',
  });
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
        <div className="glass-card-featured p-10 sm:p-12 md:p-14 overflow-hidden flex flex-col items-center">
          <img
            ref={titleRef}
            src="/LOGO.png"
            alt={siteContent.header.logoAlt}
            className="w-full max-w-sm sm:max-w-md h-auto"
            loading="eager"
            width="400"
            height="150"
          />
          <div className="w-full max-w-xl mx-auto flex flex-col items-center mt-6 sm:mt-8">
            <p
              ref={subtitleRef}
              className="text-zinc-400 text-base sm:text-lg leading-loose text-center w-full max-w-2xl"
            >
              {siteContent.hero.subtitle}
            </p>
          </div>
          <div ref={ctaRef} className="flex justify-center mt-6 sm:mt-8">
            <a
              href={siteContent.contact.cta.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button-primary"
            >
              {siteContent.hero.cta}
              <ArrowUpRight className="w-4 h-4 cta-arrow" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
