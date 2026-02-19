import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteContent } from '@/constants';
import { Container, Section } from '@/components/layout';
import { Card } from '@/components/ui';
import styles from './Pricing.module.css';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export const Pricing = () => {
  const { pricing } = siteContent;
  const tiersRef = useRef<HTMLDivElement>(null);
  const supportRef = useRef<HTMLDivElement>(null);

  // Staggered pricing tier reveal animation
  useEffect(() => {
    const tiers = tiersRef.current;
    if (!tiers) return;

    const cards = tiers.querySelectorAll('[data-pricing-tier]');

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
            trigger: tiers,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, tiers);

    return () => ctx.revert();
  }, []);

  // After-support card reveal
  useEffect(() => {
    const support = supportRef.current;
    if (!support) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        support,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: support,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, support);

    return () => ctx.revert();
  }, []);

  return (
    <Section id={pricing.id} background="white" padding="large" className={styles.pricingSection}>
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>{pricing.header}</h2>
          <p className={styles.intro}>{pricing.intro}</p>
        </div>

        <div className={styles.tiers} ref={tiersRef}>
          {pricing.tiers.map((tier, index) => (
            <Card
              key={index}
              variant="elevated"
              padding="medium"
              className={styles.tier}
              data-pricing-tier
            >
              {tier.badge && <div className={styles.tierBadge}>{tier.badge}</div>}
              <h3 className={styles.tierName}>{tier.name}</h3>
              <div className={styles.price}>
                <span className={styles.priceAmount}>{tier.foundingPrice}</span>
                {tier.originalPrice !== tier.foundingPrice && (
                  <span className={styles.originalPrice}>{tier.originalPrice}</span>
                )}
              </div>
              <p className={styles.description}>{tier.description}</p>

              <ul className={styles.included}>
                {tier.included.map((item, i) => (
                  <li key={i}>
                    <span className={styles.checkMark} aria-hidden="true">
                      ✓
                    </span>{' '}
                    {item}
                  </li>
                ))}
              </ul>

              <p className={styles.bestFor}>
                <strong>{pricing.bestForLabel}</strong> {tier.bestFor}
              </p>
            </Card>
          ))}
        </div>

        {/* Founding offer footnote (moved to bottom of Pricing section) */}
        {pricing.foundingOffer.show && (
          <div className={styles.foundingFootnote}>
            <span className={styles.foundingBadge}>{pricing.foundingOffer.badge}</span>
            <span className={styles.foundingText}>
              {pricing.foundingOffer.headline} — {pricing.foundingOffer.spotsRemaining}
            </span>
          </div>
        )}
      </Container>
    </Section>
  );
};
