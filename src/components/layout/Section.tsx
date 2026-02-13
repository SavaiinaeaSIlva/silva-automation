import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import styles from './Section.module.css';

export interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'primary' | 'dark';
  padding?: 'small' | 'medium' | 'large';
}

export const Section = ({
  children,
  className = '',
  id,
  background = 'white',
  padding = 'large',
}: SectionProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === 'undefined') return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`${styles.section} ${styles[background]} ${styles[padding]} ${inView ? styles.inView : styles.scrollHidden} ${className}`}
    >
      {children}
    </section>
  );
};
