import type { ReactNode } from 'react';
import styles from './Container.module.css';

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large' | 'full';
}

export const Container = ({ children, className = '', size = 'large' }: ContainerProps) => {
  return <div className={`${styles.container} ${styles[size]} ${className}`}>{children}</div>;
};
