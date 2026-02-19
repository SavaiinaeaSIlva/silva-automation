import { Container } from '@/components/layout';
import { siteContent } from '@/constants';
import styles from './Legal.module.css';

export const Refunds = () => {
  const { legalLayout, legal, footer } = siteContent;
  const page = legal.pages.refunds;

  return (
    <main className={styles.page} id="main">
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
