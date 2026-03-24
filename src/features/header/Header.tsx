import { useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import { siteContent } from '@/constants';
import logo from '@/assets/logo.svg';
import { useActiveSection } from './useActiveSection';
import styles from './Header.module.css';

export const Header = () => {
  const { header } = siteContent;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const { activeId, updateActiveId, lockObserver } = useActiveSection(header.navLinks);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href?: string) => {
    setIsMenuOpen(false);
    if (!href) return;

    if (href.startsWith('#')) {
      event.preventDefault();
      lockObserver();
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
    }
  };

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

        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label={isMenuOpen ? header.closeMenu : header.openMenu}
          aria-expanded={isMenuOpen}
        >
          <span className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}></span>
        </button>
      </nav>

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
