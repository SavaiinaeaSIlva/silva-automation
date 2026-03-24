import DOMPurify from 'dompurify';
import type { LegalPages } from '@/types';
import { Container } from '@/components/layout';
import { BackToTop } from '@/components/ui';
import { siteContent } from '@/constants';
import styles from './LegalPage.module.css';

type LegalPageKey = keyof LegalPages;

export interface LegalPageProps {
  pageKey: LegalPageKey;
}

export const LegalPage = ({ pageKey }: LegalPageProps) => {
  const { legalLayout, legal, footer } = siteContent;
  const page = legal.pages[pageKey];
  const sanitizedContent = DOMPurify.sanitize(page.content);
  const activePath = `/${pageKey}`;

  return (
    <div className={styles.page}>
      <Container>
        <div className={styles.top}>
          <a href="/" className={styles.back}>
            {legalLayout.backToHome}
          </a>
          <nav className={styles.legalNav} aria-label={legalLayout.legalPagesNavAria}>
            {footer.legalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${styles.legalLink} ${link.href === activePath ? styles.legalLinkActive : ''}`}
                aria-current={link.href === activePath ? 'page' : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <article className={styles.card}>
          <h1 className={styles.pageTitle}>{page.title}</h1>
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
        </article>
      </Container>
      <BackToTop />
    </div>
  );
};
