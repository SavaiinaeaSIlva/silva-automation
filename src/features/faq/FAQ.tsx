import { useState } from 'react';
import { siteContent } from '@/constants';
import { Container, Section } from '@/components/layout';
import styles from './FAQ.module.css';

export const FAQ = () => {
  const { faq } = siteContent;
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const allFAQs = [...faq.categories.process, ...faq.categories.business];

  return (
    <Section id={faq.id} background="gray" padding="large">
      <Container size="medium">
        <div className={styles.header}>
          <h2 className={styles.title}>{faq.title}</h2>
        </div>

        <div className={styles.faqList}>
          {allFAQs.map((item, index) => {
            const id = `faq-${index}`;
            const isOpen = openItems.has(id);

            return (
              <div key={id} className={styles.faqItem}>
                <button
                  className={styles.question}
                  onClick={() => toggleItem(id)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className={styles.icon}>▼</span>
                </button>
                {isOpen && <div className={styles.answer}>{item.a}</div>}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
