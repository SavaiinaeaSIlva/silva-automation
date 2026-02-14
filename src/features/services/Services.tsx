import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteContent } from '@/constants';
import { Container, Section } from '@/components/layout';
import { Card } from '@/components/ui';
import styles from './Services.module.css';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export const Services = () => {
  const { services } = siteContent;
  const blocksRef = useRef<HTMLDivElement>(null);

  // Staggered block reveal animation
  useEffect(() => {
    const blocks = blocksRef.current;
    if (!blocks) return;

    const cards = blocks.querySelectorAll('[data-service-block]');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: blocks,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, blocks);

    return () => ctx.revert();
  }, []);

  return (
    <Section id={services.id} background="white" padding="large">
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>{services.header}</h2>
          <p className={styles.intro}>{services.intro}</p>
        </div>

        <div className={styles.blocks} ref={blocksRef}>
          {services.blocks.map((block, index) => (
            <Card
              key={index}
              variant="elevated"
              padding="large"
              className={styles.block}
              data-service-block
            >
              <h3 className={styles.blockTitle}>{block.title}</h3>

              <div className={styles.section}>
                <h4 className={styles.sectionTitle}>
                  <span className={`${styles.statusIcon} ${styles.problemIcon}`} aria-hidden>
                    ✕
                  </span>
                  The Problem
                </h4>
                <p className={styles.problem}>{block.problem}</p>
              </div>

              <div className={styles.section}>
                <h4 className={styles.sectionTitle}>
                  <span className={`${styles.statusIcon} ${styles.solutionIcon}`} aria-hidden>
                    ✓
                  </span>
                  The Solution
                </h4>
                <p className={styles.solution}>{block.solution}</p>
              </div>

              <div className={styles.section}>
                <h4 className={styles.sectionTitle}>
                  <span className={styles.exampleHighlight}>Examples</span>
                </h4>
                <ul className={styles.examples}>
                  {block.examples.map((example, i) => (
                    <li key={i}>{example}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        <p className={styles.otherIndustries}>{services.otherIndustries}</p>
      </Container>
    </Section>
  );
};
