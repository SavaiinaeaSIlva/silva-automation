import { siteContent } from '@/constants';
import { Container, Section } from '@/components/layout';
import styles from './Contact.module.css';

export const Contact = () => {
  const { contact } = siteContent;

  return (
    <Section id={contact.id} background="dark" padding="large">
      <Container size="medium">
        <div className={styles.header}>
          <h2 className={styles.title}>{contact.title}</h2>
          <p className={styles.subtitle}>{contact.subtitle}</p>
        </div>

        <div className={styles.content}>
          <div className={styles.cta}>
            <a
              href={contact.cta.url}
              className={styles.ctaButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.cta.text}
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
};
