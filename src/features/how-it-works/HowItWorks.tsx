import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteContent } from '@/constants';
import { Container, Section } from '@/components/layout';
import styles from './HowItWorks.module.css';

gsap.registerPlugin(ScrollTrigger);

export const HowItWorks = () => {
  const { howItWorks } = siteContent;
  const headerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        header.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: header,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, header);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const steps = stepsRef.current;
    if (!steps) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        steps.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: steps,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, steps);

    return () => ctx.revert();
  }, []);

  return (
    <Section id={howItWorks.id} background="dark" padding="large">
      <Container>
        <div className={styles.header} ref={headerRef}>
          <span className={styles.eyebrow}>{howItWorks.eyebrow}</span>
          <h2 className={styles.title}>{howItWorks.title}</h2>
          <p className={styles.subtitle}>{howItWorks.subtitle}</p>
        </div>

        <ol className={styles.steps} ref={stepsRef}>
          {howItWorks.steps.map((step) => (
            <li key={step.number} className={styles.step}>
              <span className={styles.stepNumber} aria-hidden="true">
                {step.number}
              </span>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepBody}>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
};
