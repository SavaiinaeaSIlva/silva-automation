import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteContent } from '@/constants';
import { Container, Section } from '@/components/layout';
import { ButtonLink } from '@/components/ui';
import styles from './CTASection.module.css';

gsap.registerPlugin(ScrollTrigger);

export const CTASection = () => {
  const { ctaSection } = siteContent;
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        inner.children,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: inner,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, inner);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="cta" background="primary" padding="large" className={styles.ctaSection}>
      <Container>
        <div className={styles.inner} ref={innerRef}>
          <h2 className={styles.title}>{ctaSection.title}</h2>
          <p className={styles.subtitle}>{ctaSection.subtitle}</p>
          <div className={styles.actions}>
            <ButtonLink
              href={ctaSection.primaryCta.url}
              size="large"
              className={styles.invertedBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              {ctaSection.primaryCta.text}
            </ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
};
