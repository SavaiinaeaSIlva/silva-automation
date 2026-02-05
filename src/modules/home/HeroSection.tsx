import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ArrowUpRight,
  Zap,
  Target,
  Repeat,
  Shield,
  Key,
  Lock,
  Wrench,
  TrendingUp,
  MapPin,
  Plug,
} from 'lucide-react';
import { siteContent } from '../../content/siteContent';
import { useScrollReveal } from '../../hooks/useScrollReveal';

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
  const iconsRef = useScrollReveal<HTMLDivElement>({
    y: 20,
    duration: 0.6,
    delay: 0.3,
    start: 'top top',
  });
  const parallaxRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  const iconMap = { Zap, Target, Repeat, Shield, Key, Lock, Wrench, TrendingUp, MapPin, Plug };

  useEffect(() => {
    const hero = heroRef.current;
    const parallax = parallaxRef.current;
    if (!hero || !parallax) return;

    const yMove = () => {
      const h = hero.offsetHeight;
      return h * 0.35;
    };

    const prefersReduced =
      typeof window !== 'undefined' &&
      (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false);
    if (prefersReduced) {
      // For reduced motion, set final parallax position and avoid scroll-triggered animations
      gsap.set(parallax, { y: yMove() });
      return;
    }

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
      className="min-h-screen flex flex-col items-center justify-center py-16 md:py-20 text-text-main relative"
    >
      <div className="hero-parallax-bg" ref={parallaxRef} aria-hidden />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
        <img
          ref={titleRef}
          src="/LOGO.png"
          alt={siteContent.header.logoAlt}
          className="w-full max-w-[180px] sm:max-w-[240px] h-auto transform -translate-y-10 sm:-translate-y-12"
          loading="eager"
          width="240"
          height="90"
        />
        <h1 className="mt-4 text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
          <span className="block">
            <span className="text-white">{siteContent.hero.titleLine1Highlight}</span>{' '}
            <span className="text-current">{siteContent.hero.titleLine1Rest}</span>
          </span>
          <span className="block">
            <span className="text-accent-blue italic">{siteContent.hero.titleLine2Highlight}</span>{' '}
            <span className="text-current">{siteContent.hero.titleLine2Rest}</span>
          </span>
        </h1>
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
            <span className="cta-text">{siteContent.hero.cta}</span>
            <span className="cta-arrow-wrapper">
              <ArrowUpRight className="w-4 h-4 cta-arrow" aria-hidden="true" />
            </span>
          </a>
        </div>
        {/* Benefits Carousel */}
        <div ref={iconsRef} className="w-full mt-20 space-y-12 md:space-y-16">
          {/* Row 1: scrolls left */}
          <div className="benefits-carousel">
            <div className="benefits-track benefits-track-left">
              {[
                ...siteContent.hero.benefits.slice(0, 5),
                ...siteContent.hero.benefits.slice(0, 5),
              ].map((benefit, index) => {
                const Icon = iconMap[benefit.icon as keyof typeof iconMap];
                return (
                  <div key={index} className="flex items-center gap-3 text-white whitespace-nowrap">
                    <Icon
                      className="w-6 h-6 text-accent-blue"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <span className="text-base font-medium">{benefit.label}</span>
                    <span className="text-white ml-6" aria-hidden="true">
                      |
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Row 2: scrolls right */}
          <div className="benefits-carousel">
            <div className="benefits-track benefits-track-right">
              {[
                ...siteContent.hero.benefits.slice(5, 10),
                ...siteContent.hero.benefits.slice(5, 10),
              ].map((benefit, index) => {
                const Icon = iconMap[benefit.icon as keyof typeof iconMap];
                return (
                  <div key={index} className="flex items-center gap-3 text-white whitespace-nowrap">
                    <Icon
                      className="w-6 h-6 text-accent-blue"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    <span className="text-base font-medium">{benefit.label}</span>
                    <span className="text-white ml-6" aria-hidden="true">
                      |
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
