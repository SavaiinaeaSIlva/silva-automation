import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteContent } from '@/constants';
import { Container, Section } from '@/components/layout';
import { Card } from '@/components/ui';
import styles from './WhyChooseUs.module.css';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export const WhyChooseUs = () => {
  const { whyChooseUs } = siteContent;
  const gridRef = useRef<HTMLDivElement>(null);

  // Staggered card reveal animation
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = grid.querySelectorAll('[data-reveal-item]');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: grid,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, grid);

    return () => ctx.revert();
  }, []);

  return (
    <Section id={whyChooseUs.id} background="white" padding="large">
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>{whyChooseUs.header}</h2>
          <p className={styles.subtitle}>{whyChooseUs.subtitle}</p>
        </div>

        <div className={styles.grid} ref={gridRef}>
          {whyChooseUs.reasons.map((reason, index) => (
            <Card key={index} variant="elevated" className={styles.card} data-reveal-item>
              <div className={styles.checkmarkWrapper}>
                <span className={styles.checkmark}>✓</span>
              </div>
              <h3 className={styles.reasonTitle}>{reason.title}</h3>
              <p className={styles.reasonBody}>{reason.body}</p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
};
