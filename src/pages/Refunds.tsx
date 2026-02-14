import { Container } from '@/components/layout';
import { siteContent } from '@/constants';
import styles from './Legal.module.css';

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
        </div>

        <article className={styles.card}>
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: page.content }} />
        </article>
      </Container>
    </main>
  );
};
