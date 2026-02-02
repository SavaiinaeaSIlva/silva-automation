import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../content/siteContent';

const STORAGE_KEY = 'cookie-consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const { ariaLabel, message, cookiePolicyLinkText, learnMore, accept } = siteContent.cookieBanner;

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (consent === null) {
      setVisible(true);
    }
  }, []);

  const onAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={ariaLabel}
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-5 bg-[var(--color-bg-elevated)] border-t border-[var(--color-border)] shadow-[0_-4px_24px_rgba(0,0,0,0.4)]"
    >
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--color-text-muted)] text-center sm:text-left flex-1">
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
            className="px-4 py-2.5 rounded-full text-sm font-medium text-white border border-white/10 hover:border-white/20 hover:bg-white/5 transition-colors"
          >
            {learnMore}
          </Link>
          <button
            type="button"
            onClick={onAccept}
            className="px-5 py-2.5 rounded-full text-sm font-medium bg-white text-black hover:bg-neutral-200 transition-colors shadow-lg shadow-white/10"
          >
            {accept}
          </button>
        </div>
      </div>
    </div>
  );
}
