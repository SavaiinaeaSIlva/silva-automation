import { siteContent } from '@/constants';
import { Container, Section } from '@/components/layout';
import styles from './FAQ.module.css';

export const FAQ = () => {
  const { faq } = siteContent;
  return (
    <Section id={faq.id} background="gray" padding="large">
      <Container size="medium">
        <div className={styles.header}>
          <h2 className={styles.title}>{faq.title}</h2>
          {faq.intro && <p className={styles.intro}>{faq.intro}</p>}
        </div>

        <div className={styles.searchResults}>
          <div className={styles.noResults}>
            <p>
              FAQ entries have been removed. If you have a question, please use the contact form on
              the Contact section.
            </p>
            <p style={{ marginTop: 12 }}>
              <a href="#contact">Go to contact form →</a>
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};
