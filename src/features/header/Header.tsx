import { useEffect, useRef, useState } from 'react';
import { siteContent } from '@/constants';
import logo from '@/assets/logo.svg';
import styles from './Header.module.css';

export const Header = () => {
  const { header } = siteContent;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>('');
  const [isScrolled, setIsScrolled] = useState(false);
  const observerLocked = useRef(false);
  const observerUnlockTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const updateActiveId = (nextId: string) => {
    setActiveId((current) => (current === nextId ? current : nextId));
  };

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href?: string) => {
    setIsMenuOpen(false);
    if (!href) return;

    if (href.startsWith('#')) {
      event.preventDefault();
      observerLocked.current = true;
      if (observerUnlockTimer.current) {
        clearTimeout(observerUnlockTimer.current);
      }
      observerUnlockTimer.current = setTimeout(() => {
        observerLocked.current = false;
        observerUnlockTimer.current = null;
      }, 700);
      updateActiveId(href);

      const targetId = href.replace('#', '');
      const target = document.getElementById(targetId);
      if (target) {
        const headerOffset = headerRef.current?.getBoundingClientRect().height ?? 0;
        const targetTop = Math.max(
          target.getBoundingClientRect().top + window.scrollY - headerOffset,
          0
        );
        window.scrollTo({ top: targetTop, behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
      return;
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const ids = header.navLinks.map((l) => l.href.replace('#', ''));
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        if (observerLocked.current) return;

        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) updateActiveId(`#${visible.target.id}`);
      },
      { root: null, rootMargin: '-40% 0px -40% 0px', threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      if (observerUnlockTimer.current) {
        clearTimeout(observerUnlockTimer.current);
      }
    };
  }, [header.navLinks]);

  // Scroll detection for island background transition
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const headerClasses = `${styles.header} ${isScrolled ? styles.scrolled : ''}`;

  return (
    <header className={headerClasses} ref={headerRef}>
      <a href="#main" className={styles.skipLink}>
        {header.skipToMainContent}
      </a>

      <nav className={styles.nav} aria-label={header.mainNavAria}>
        <div className={styles.logo}>
          <a href="#" aria-label={header.logoAlt}>
            <img src={logo} alt={header.logoAlt} className={styles.logoImage} />
          </a>
        </div>

        <span className={styles.divider} />

        {/* Desktop Navigation */}
        <ul className={styles.navLinks}>
          {header.navLinks.map((link) => {
            const isActive = activeId === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`${styles.navLink} ${isActive ? styles.active : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={(event) => handleNavClick(event, link.href)}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? header.closeMenu : header.openMenu}
          aria-expanded={isMenuOpen}
        >
          <span className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className={styles.mobileNav} aria-label={header.mobileNavAria}>
          <ul className={styles.mobileNavLinks}>
            {header.navLinks.map((link) => {
              const isActive = activeId === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`${styles.mobileNavLink} ${isActive ? styles.active : ''}`}
                    onClick={(event) => handleNavClick(event, link.href)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
};
