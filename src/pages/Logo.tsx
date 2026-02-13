import { Container } from '@/components/layout';
import styles from './Logo.module.css';

export const Logo = () => {
  return (
    <main className={styles.page} id="main">
      <Container>
        <div className={styles.wrap}>
          {/* Page intended for email embedding — expects /assets/logo.png in public folder */}
          <img src="/assets/logo.png" alt="Silva Automation logo" className={styles.logo} />
        </div>
      </Container>
    </main>
  );
};
