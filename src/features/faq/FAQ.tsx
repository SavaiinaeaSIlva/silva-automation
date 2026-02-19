import { useState, useCallback } from 'react';
import { siteContent } from '@/constants';
import { Container, Section } from '@/components/layout';
import type { FAQItem } from '@/types';
import styles from './FAQ.module.css';

export const FAQ = () => {
  const { faq } = siteContent;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const allItems: FAQItem[] = [...faq.categories.process, ...faq.categories.business];

  const toggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <Section id={faq.id} background="white" padding="large">
      <Container size="medium">
        <div className={styles.header}>
          <h2 className={styles.title}>{faq.title}</h2>
          {faq.intro && <p className={styles.intro}>{faq.intro}</p>}
        </div>

        <dl className={styles.list}>
          {allItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
                <dt>
                  <button
                    type="button"
                    className={styles.question}
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.q}</span>
                    <span className={styles.icon} aria-hidden="true">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                <dd className={`${styles.answerWrapper} ${isOpen ? styles.answerWrapperOpen : ''}`}>
                  <div className={`${styles.answer} ${isOpen ? styles.answerOpen : ''}`}>
                    <p>{item.a}</p>
                  </div>
                </dd>
              </div>
            );
          })}
        </dl>
      </Container>
    </Section>
  );
};
