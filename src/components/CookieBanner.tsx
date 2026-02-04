import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../content/siteContent';

const STORAGE_KEY = 'cookie-consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const { ariaLabel, message, cookiePolicyLinkText, learnMore, accept } = siteContent.cookieBanner;
  const acceptBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    try {
      const consent = localStorage.getItem(STORAGE_KEY);
      if (consent === null) {
        setVisible(true);
      }
    } catch (err) {
      // Some browsers or privacy modes throw when accessing localStorage; fall back to showing banner
      // and do not crash the app.
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.warn('CookieBanner: localStorage access failed', err);
      }
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    if (visible && acceptBtnRef.current) {
      acceptBtnRef.current.focus();
    }
  }, [visible]);

  const onAccept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'accepted');
    } catch (err) {
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.warn('CookieBanner: failed to persist consent', err);
      }
    }

    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label={ariaLabel}
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-5 bg-brand-elevated border-t border shadow-cookie-banner"
    >
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted text-center sm:text-left flex-1">
          {message}{' '}
          <Link
            to="/cookies"
            className="text-white underline underline-offset-2 hover:no-underline"
          >
            {cookiePolicyLinkText}
          </Link>
          .
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/cookies"
            className="px-4 py-2.5 rounded-full text-sm font-medium text-white border border-subtle hover:border-divider-strong hover:bg-glass-light transition-colors"
          >
            {learnMore}
          </Link>
          <button
            ref={acceptBtnRef}
            type="button"
            onClick={onAccept}
            className="px-5 py-2.5 rounded-full text-sm font-medium bg-white text-black hover:bg-neutral-200 transition-colors shadow-button-glow"
          >
            {accept}
          </button>
        </div>
      </div>
    </div>
  );
}
