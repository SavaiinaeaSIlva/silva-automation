import { useEffect, useState } from 'react';
import { siteContent } from '@/constants';
import { Container } from '@/components/layout';
import styles from './Header.module.css';

export const Header = () => {
  const { header } = siteContent;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>('#services');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (href?: string) => {
    setIsMenuOpen(false);
    if (href) setActiveId(href);
  };

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const ids = header.navLinks.map((l) => l.href.replace('#', ''));
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(`#${visible.target.id}`);
      },
      { root: null, rootMargin: '-40% 0px -40% 0px', threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [header.navLinks]);

  return (
    <header className={styles.header}>
      <a href="#main" className={styles.skipLink}>
        {header.skipToMainContent}
      </a>

      <Container>
        <nav className={styles.nav} aria-label="Main navigation">
          <div className={styles.logo}>
            <a href="#" aria-label={header.logoAlt}>
              <img src="/assets/Union.svg" alt={header.logoAlt} className={styles.logoImage} />
            </a>
          </div>

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
                    onClick={() => handleNavClick(link.href)}
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
                      onClick={() => handleNavClick(link.href)}
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
      </Container>
    </header>
  );
};
