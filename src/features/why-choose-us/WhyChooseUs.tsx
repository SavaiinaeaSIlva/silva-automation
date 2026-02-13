import { siteContent } from '@/constants';
import { Container, Section } from '@/components/layout';
import { Card } from '@/components/ui';
import styles from './WhyChooseUs.module.css';

export const WhyChooseUs = () => {
  const { whyChooseUs } = siteContent;

  return (
    <Section id={whyChooseUs.id} background="white" padding="large">
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>{whyChooseUs.header}</h2>
          <p className={styles.subtitle}>{whyChooseUs.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {whyChooseUs.reasons.map((reason, index) => (
            <Card key={index} variant="elevated" className={styles.card}>
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
