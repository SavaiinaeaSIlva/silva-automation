import type { ReactNode } from 'react';
import styles from './Card.module.css';

export interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'bordered';
  padding?: 'small' | 'medium' | 'large';
}

export const Card = ({
  children,
  className = '',
  variant = 'default',
  padding = 'medium',
}: CardProps) => {
  return (
    <div className={`${styles.card} ${styles[variant]} ${styles[padding]} ${className}`}>
      {children}
    </div>
  );
};
