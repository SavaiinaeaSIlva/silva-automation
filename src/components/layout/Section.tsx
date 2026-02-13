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
  return (
    <section
      id={id}
      className={`${styles.section} ${styles[background]} ${styles[padding]} ${className}`}
    >
      {children}
    </section>
  );
};
