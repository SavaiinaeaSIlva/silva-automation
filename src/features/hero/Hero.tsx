import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { siteContent } from '@/constants';
import { Container, Section } from '@/components/layout';
import { ButtonLink } from '@/components/ui';
import { HudOverlay } from './HudOverlay';
import styles from './Hero.module.css';

export const Hero = () => {
  const { hero } = siteContent;
  const contentRef = useRef<HTMLDivElement>(null);

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
                {hero.titleLines.map((line, i) => (
                  <span key={i} className={styles.titleLine}>
                    {line.prefix}
                    {line.italic !== undefined && (
                      <span className={styles.italic}>{line.italic}</span>
                    )}
                    {line.highlight !== undefined && (
                      <span className={styles.highlight}>{line.highlight}</span>
                    )}
                  </span>
                ))}
              </h1>
              <p className={styles.subtitle}>{hero.subtitle}</p>
            </div>

            <div className={styles.bottom}>
              <div className={styles.ctaGroup}>
                <ButtonLink
                  href={hero.bookingCta.url}
                  variant="cta"
                  size="large"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${hero.bookingCta.text} ${hero.opensInNewWindow}`}
                >
                  {hero.bookingCta.text}
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
