import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { siteContent } from '@/constants';
import { Container, Section } from '@/components/layout';
import { Button } from '@/components/ui';
import { RollingText } from './RollingText';
import iconSvg from '@/assets/icon.svg';
import styles from './Hero.module.css';

export const Hero = () => {
  const { hero } = siteContent;
  const contentRef = useRef<HTMLDivElement>(null);
  const sphereRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<SVGSVGElement>(null);

  // Animate subtitle and CTA after title animation
  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 1.4 });

      tl.fromTo(
        content.querySelector('p'),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
        '-=0.4'
      ).fromTo(
        content.querySelector(`.${styles.ctaGroup}`),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.4'
      );
    }, content);

    return () => ctx.revert();
  }, []);

  // Globe spin animation
  useEffect(() => {
    const svg = globeRef.current;
    if (!svg) return;

    const longitudes = svg.querySelectorAll('[data-lon]');
    if (longitudes.length === 0) return;

    const RADIUS = 99;
    const N = longitudes.length;
    const proxy = { angle: 0 };

    const spinTween = gsap.to(proxy, {
      angle: Math.PI * 2,
      duration: 20,
      repeat: -1,
      ease: 'none',
      onUpdate: () => {
        longitudes.forEach((el, i) => {
          const phase = proxy.angle + (i / N) * Math.PI;
          const sinP = Math.sin(phase);
          const cosP = Math.cos(phase);
          const rx = Math.abs(sinP) * RADIUS;
          el.setAttribute('rx', String(rx));
          // Dim lines on the back face of the globe
          const opacity = cosP > 0 ? 0.35 : 0.08;
          el.setAttribute('stroke-opacity', String(opacity));
        });
      },
    });

    return () => {
      spinTween.kill();
    };
  }, []);

  // Orbiting light animation + interactive mouse tracking
  useEffect(() => {
    const orbit = orbitRef.current;
    const sphere = sphereRef.current;
    if (!orbit || !sphere) return;

    const section = sphere.closest('section');
    if (!section) return;

    // Default auto-rotation
    const autoRotation = gsap.to(orbit, {
      rotation: 360,
      duration: 8,
      repeat: -1,
      ease: 'none',
    });

    const DEFAULT_BOX_SHADOW =
      '0px 0px 15px 2px rgba(255, 200, 150, 0.22), 0px 0px 40px 8px rgba(255, 175, 120, 0.13), 0px 0px 80px 16px rgba(255, 220, 180, 0.07)';

    const handleMouseMove = (e: MouseEvent) => {
      const sphereRect = sphere.getBoundingClientRect();

      // Only track when cursor is on the right half (sphere column)
      if (e.clientX < sphereRect.left) {
        // Cursor is over the left column — resume auto-rotation
        if (!autoRotation.isActive()) autoRotation.resume();
        gsap.to(sphere, {
          boxShadow: DEFAULT_BOX_SHADOW,
          duration: 1,
          ease: 'power2.out',
          overwrite: 'auto',
        });
        return;
      }

      const centerX = sphereRect.left + sphereRect.width / 2;
      const centerY = sphereRect.top + sphereRect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      // Calculate angle from cursor to sphere center
      const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;

      // Pause auto-rotation, snap orbit to cursor angle
      autoRotation.pause();
      gsap.to(orbit, {
        rotation: angle,
        duration: 0.6,
        ease: 'power2.out',
        overwrite: 'auto',
      });

      // Move glow toward cursor
      const offsetX = dx / (sphereRect.width / 2);
      const offsetY = dy / (sphereRect.height / 2);
      const glowX = offsetX * 15;
      const glowY = offsetY * 15;

      sphere.style.boxShadow = `
        ${glowX}px ${glowY}px 15px 2px rgba(255, 200, 150, 0.22),
        ${glowX * 1.5}px ${glowY * 1.5}px 40px 8px rgba(255, 175, 120, 0.13),
        ${glowX * 2}px ${glowY * 2}px 80px 16px rgba(255, 220, 180, 0.07)
      `;
    };

    const handleMouseLeave = () => {
      // Resume auto-rotation
      autoRotation.resume();

      // Reset glow to centered
      gsap.to(sphere, {
        boxShadow: DEFAULT_BOX_SHADOW,
        duration: 1,
        ease: 'power2.out',
      });
    };

    section.addEventListener('mousemove', handleMouseMove);
    section.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      autoRotation.kill();
      section.removeEventListener('mousemove', handleMouseMove);
      section.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleCTAClick = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="hero" background="dark" padding="large" noReveal className={styles.heroSection}>
      <Container>
        <div className={styles.hero}>
          <div className={styles.content} ref={contentRef}>
            <img src={iconSvg} alt="" className={styles.icon} aria-hidden="true" />
            <h1 className={styles.title}>
              {hero.titlePrefix}
              <br />
              <RollingText words={hero.rollingWords} />
            </h1>

            <p className={styles.subtitle}>{hero.subtitle}</p>

            <div className={styles.ctaGroup}>
              <a
                href={hero.bookingCta.url}
                className={styles.bookingCta}
                target="_blank"
                rel="noopener noreferrer"
              >
                {hero.bookingCta.text}
              </a>
              <Button variant="ghost" size="large" onClick={handleCTAClick}>
                {hero.cta}
              </Button>
            </div>
          </div>

          <div className={styles.sphereCol}>
            <div className={styles.sphere} ref={sphereRef} aria-hidden="true">
              <svg
                ref={globeRef}
                className={styles.globeLines}
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Outer circle - the sphere edge */}
                <circle cx="100" cy="100" r="99" />
                {/* Longitude lines - vertical ellipses that spin around the globe */}
                <ellipse data-lon="0" cx="100" cy="100" rx="0" ry="99" />
                <ellipse data-lon="1" cx="100" cy="100" rx="0" ry="99" />
                <ellipse data-lon="2" cx="100" cy="100" rx="0" ry="99" />
                <ellipse data-lon="3" cx="100" cy="100" rx="0" ry="99" />
                <ellipse data-lon="4" cx="100" cy="100" rx="0" ry="99" />
                <ellipse data-lon="5" cx="100" cy="100" rx="0" ry="99" />
                <ellipse data-lon="6" cx="100" cy="100" rx="0" ry="99" />
                <ellipse data-lon="7" cx="100" cy="100" rx="0" ry="99" />
                {/* Latitude lines - horizontal lines on the sphere surface */}
                <line x1="30" y1="30" x2="170" y2="30" />
                <line x1="12" y1="55" x2="188" y2="55" />
                <line x1="4" y1="77" x2="196" y2="77" />
                <line x1="1" y1="100" x2="199" y2="100" />
                <line x1="4" y1="123" x2="196" y2="123" />
                <line x1="12" y1="145" x2="188" y2="145" />
                <line x1="30" y1="170" x2="170" y2="170" />
              </svg>
              <div className={styles.orbitTrack} ref={orbitRef}>
                <div className={styles.orbitLight} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
