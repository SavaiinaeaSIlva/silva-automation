import { siteContent } from '@/constants';
import { Container } from '@/components/layout';
import styles from './Footer.module.css';

export const Footer = () => {
  const { footer } = siteContent;

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <div className={styles.section}>
            <div className={styles.brandWrap}>
              <img src="/assets/Union.svg" alt={footer.companyName} className={styles.brandLogo} />
            </div>
            <p className={styles.tagline}>{footer.tagline}</p>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>{footer.quickLinksTitle}</h4>
            <ul className={styles.links}>
              {footer.quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>{footer.legalTitle}</h4>
            <ul className={styles.links}>
              {footer.legalLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.to || link.href} className={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.section}>
            <h4 className={styles.sectionTitle}>{footer.getInTouchTitle}</h4>
            <div className={styles.contact}>
              <a href={`mailto:${footer.email}`} className={styles.contactLink}>
                {footer.email}
              </a>
              <a href={footer.phoneHref} className={styles.contactLink}>
                {footer.phone}
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>{footer.copyright}</p>
        </div>
      </Container>
    </footer>
  );
};
