import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { siteContent } from '@/constants';
import { Container, Section } from '@/components/layout';
import { Button } from '@/components/ui';
import styles from './Hero.module.css';

export const Hero = () => {
  const { hero } = siteContent;
  const contentRef = useRef<HTMLDivElement>(null);

  // Initial text reveal animation
  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });

      tl.fromTo(
        content.querySelector('h1'),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      )
        .fromTo(
          content.querySelector('p'),
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(
          content.querySelector(`.${styles.ctaGroup}`),
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
          '-=0.4'
        );
    }, content);

    return () => ctx.revert();
  }, []);

  const handleCTAClick = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="hero" background="dark" padding="large" noReveal>
      <Container>
        <div className={styles.hero}>
          <div className={styles.content} ref={contentRef}>
            <h1 className={styles.title}>{hero.title}</h1>

            <p className={styles.subtitle}>
              Custom automation for Hawaii service businesses. <em>One flat fee.</em>{' '}
              <em>You own it forever.</em>
            </p>

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
        </div>
      </Container>
    </Section>
  );
};
