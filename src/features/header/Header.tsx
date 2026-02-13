import { useState } from 'react';
import { siteContent } from '@/constants';
import { Container } from '@/components/layout';
import styles from './Header.module.css';

export const Header = () => {
  const { header } = siteContent;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <a href="#main" className={styles.skipLink}>
        {header.skipToMainContent}
      </a>

      <Container>
        <nav className={styles.nav} aria-label="Main navigation">
          <div className={styles.logo}>
            <a href="#" aria-label={header.logoAlt}>
              <img src="/assets/silva-icon.png" alt={header.logoAlt} className={styles.logoImage} />
            </a>
          </div>

          {/* Desktop Navigation */}
          <ul className={styles.navLinks}>
            {header.navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              </li>
            ))}
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
              {header.navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.mobileNavLink} onClick={handleNavClick}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
};
