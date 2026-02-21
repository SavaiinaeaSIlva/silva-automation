import { forwardRef } from 'react';
import type { ReactNode } from 'react';
import styles from './Section.module.css';

export interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'primary' | 'dark' | 'darkAlt';
  padding?: 'small' | 'medium' | 'large';
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className = '', id, background = 'white', padding = 'large' }, ref) => {
    return (
      <section
        id={id}
        ref={ref}
        className={`${styles.section} ${styles[background]} ${styles[padding]} ${className}`}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = 'Section';
