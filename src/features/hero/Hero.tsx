import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { siteContent } from '@/constants';
import { Container, Section } from '@/components/layout';
import { RollingText } from './RollingText';
import { HudOverlay } from './HudOverlay';
import buttonStyles from '@/components/ui/Button.module.css';
import styles from './Hero.module.css';

export const Hero = () => {
  const { hero } = siteContent;
  const contentRef = useRef<HTMLDivElement>(null);

  // Animate subtitle and CTA after title animation
  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 1.4 });

      tl.fromTo(
        content.querySelector(`.${styles.bottom}`),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
        '-=0.4'
      );
    }, content);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="hero" background="dark" padding="large" className={styles.heroSection}>
      <HudOverlay />
      <Container>
        <div className={styles.hero}>
          <div className={styles.content} ref={contentRef}>
            <div className={styles.top}>
              <h1 className={styles.title}>
                {hero.titlePrefix}
                <br />
                <RollingText words={hero.rollingWords} />
              </h1>
              <p className={styles.subtitle}>{hero.subtitle}</p>
            </div>

            <div className={styles.bottom}>
              <div className={styles.ctaGroup}>
                <a
                  href={hero.bookingCta.url}
                  className={`${buttonStyles.button} ${buttonStyles.cta} ${buttonStyles.large}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${hero.bookingCta.text} ${hero.opensInNewWindow}`}
                >
                  {hero.bookingCta.text}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
