import type { AnchorHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.css';

export interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'cta';
  size?: 'small' | 'medium' | 'large';
}

export const ButtonLink = ({
  children,
  variant,
  size = 'medium',
  className = '',
  ...props
}: ButtonLinkProps) => {
  const variantClass = variant ? styles[variant] : '';
  return (
    <a
      className={`${styles.button} ${variantClass} ${styles[size]} ${className}`.trim()}
      {...props}
    >
      {children}
    </a>
  );
};
