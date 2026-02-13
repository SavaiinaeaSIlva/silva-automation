import { useState } from 'react';
import { siteContent } from '@/constants';
import { Button } from '@/components/ui';
import styles from './CookieBanner.module.css';

export const CookieBanner = () => {
  const { cookieBanner } = siteContent;
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !localStorage.getItem('cookies-accepted');
  });

  const handleAccept = () => {
    localStorage.setItem('cookies-accepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.banner} role="region" aria-label={cookieBanner.ariaLabel}>
      <div className={styles.content}>
        <p className={styles.message}>
          {cookieBanner.message}{' '}
          <a href="/cookies" className={styles.link}>
            {cookieBanner.cookiePolicyLinkText}
          </a>
          .
        </p>
        <Button onClick={handleAccept} size="small">
          {cookieBanner.accept}
        </Button>
      </div>
    </div>
  );
};
