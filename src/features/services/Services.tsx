import { siteContent } from '@/constants';
import { Container, Section } from '@/components/layout';
import { Card } from '@/components/ui';
import styles from './Services.module.css';

export const Services = () => {
  const { services } = siteContent;

  return (
    <Section id={services.id} background="white" padding="large">
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>{services.header}</h2>
          <p className={styles.intro}>{services.intro}</p>
        </div>

        <div className={styles.blocks}>
          {services.blocks.map((block, index) => (
            <Card key={index} variant="elevated" padding="large" className={styles.block}>
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
