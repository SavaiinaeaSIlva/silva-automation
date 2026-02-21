import { useState, useCallback, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteContent } from '@/constants';
import { Container, Section } from '@/components/layout';
import type { FAQItem } from '@/types';
import styles from './FAQ.module.css';

gsap.registerPlugin(ScrollTrigger);

export const FAQ = () => {
  const { faq } = siteContent;
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDListElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const allItems: FAQItem[] = [...faq.categories.process, ...faq.categories.business];

  const toggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

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
    const list = listRef.current;
    if (!list) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        list,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: list,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, list);

    return () => ctx.revert();
  }, []);

  return (
    <Section id={faq.id} background="dark" padding="large">
      <Container>
        <div className={styles.header} ref={headerRef}>
          <span className={styles.eyebrow}>{faq.label}</span>
          <h2 className={styles.title}>{faq.title}</h2>
          {faq.intro && <p className={styles.intro}>{faq.intro}</p>}
        </div>

        <dl className={styles.list} ref={listRef}>
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
                      {isOpen ? faq.collapseIcon : faq.expandIcon}
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
