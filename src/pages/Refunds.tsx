import { Container } from '@/components/layout';
import { siteContent } from '@/constants';
import styles from './Legal.module.css';

const LEGAL_PAGES = [
  { label: 'Terms', href: '/terms' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Cookies', href: '/cookies' },
  { label: 'Refunds', href: '/refunds' },
];

export const Refunds = () => {
  const { legalLayout, legal } = siteContent;
  const page = legal.pages.refunds;

  return (
    <main className={styles.page} id="main">
      <Container>
        <div className={styles.top}>
          <a href="/" className={styles.back}>
            {legalLayout.backToHome}
          </a>
          <nav className={styles.legalNav} aria-label="Legal pages">
            {LEGAL_PAGES.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${styles.legalLink} ${link.href === '/refunds' ? styles.legalLinkActive : ''}`}
                aria-current={link.href === '/refunds' ? 'page' : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <article className={styles.card}>
          <h1 className={styles.pageTitle}>{page.title}</h1>
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: page.content }} />
        </article>
      </Container>
    </main>
  );
};
