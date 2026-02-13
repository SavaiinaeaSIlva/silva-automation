import { siteContent } from '@/constants';
import { Container, Section } from '@/components/layout';
import { Card } from '@/components/ui';
import styles from './Pricing.module.css';

export const Pricing = () => {
  const { pricing } = siteContent;

  return (
    <Section id={pricing.id} background="white" padding="large">
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>{pricing.header}</h2>
          <p className={styles.intro}>{pricing.intro}</p>
        </div>

        {pricing.foundingOffer.show && (
          <Card variant="elevated" className={styles.foundingOffer}>
            <div className={styles.badge}>{pricing.foundingOffer.badge}</div>
            <h3 className={styles.offerHeadline}>{pricing.foundingOffer.headline}</h3>
            <p className={styles.offerBody}>{pricing.foundingOffer.body}</p>
            <p className={styles.spotsRemaining}>{pricing.foundingOffer.spotsRemaining}</p>
          </Card>
        )}

        <div className={styles.tiers}>
          {pricing.tiers.map((tier, index) => (
            <Card key={index} variant="elevated" padding="large" className={styles.tier}>
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
                  <li key={i}>✓ {item}</li>
                ))}
              </ul>

              <p className={styles.bestFor}>
                <strong>Best for:</strong> {tier.bestFor}
              </p>
            </Card>
          ))}
        </div>

        <Card variant="bordered" padding="large" className={styles.afterSupport}>
          <h3 className={styles.afterTitle}>{pricing.afterSupport.title}</h3>
          <h4 className={styles.afterHeadline}>{pricing.afterSupport.headline}</h4>
          <p className={styles.afterIntro}>{pricing.afterSupport.intro}</p>

          <div className={styles.benefits}>
            {pricing.afterSupport.benefits.map((benefit, i) => (
              <div key={i} className={styles.benefit}>
                <div className={styles.benefitLabel}>{benefit.label}</div>
                <div className={styles.benefitDetail}>{benefit.detail}</div>
              </div>
            ))}
          </div>

          {pricing.afterSupport.covers.length > 0 && (
            <>
              <h4 className={styles.coversTitle}>{pricing.afterSupport.coversTitle}</h4>
              <ul className={styles.covers}>
                {pricing.afterSupport.covers.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </>
          )}
        </Card>
      </Container>
    </Section>
  );
};
