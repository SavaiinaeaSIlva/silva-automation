import { siteContent } from '@/constants';
import styles from './HudOverlay.module.css';

export const HudOverlay = () => {
  const { hudLabels } = siteContent.hero;

  return (
    <div className={styles.overlay} aria-hidden="true">
      <span className={`${styles.lineH} ${styles.lineH1}`} />
      <span className={`${styles.lineH} ${styles.lineH2}`} />

      <span className={`${styles.lineV} ${styles.lineV1}`} />
      <span className={`${styles.lineV} ${styles.lineV2}`} />

      <span className={`${styles.cross} ${styles.cross1}`} />
      <span className={`${styles.cross} ${styles.cross2}`} />
      <span className={`${styles.cross} ${styles.cross3}`} />
      <span className={`${styles.cross} ${styles.cross4}`} />

      <span className={`${styles.dot} ${styles.dot1}`} />
      <span className={`${styles.dot} ${styles.dot2}`} />
      <span className={`${styles.dot} ${styles.dot3}`} />
      <span className={`${styles.dot} ${styles.dot4}`} />

      <span className={`${styles.label} ${styles.labelTop}`}>{hudLabels.sysRun}</span>
      <span className={`${styles.label} ${styles.labelMid}`}>{hudLabels.nodeActive}</span>
      <span className={`${styles.label} ${styles.labelBottom}`}>{hudLabels.brand}</span>

      <span className={`${styles.corner} ${styles.cornerTL}`} />
      <span className={`${styles.corner} ${styles.cornerBR}`} />

      <span className={styles.ring} />

      <span className={`${styles.tick} ${styles.tick1}`} />
      <span className={`${styles.tick} ${styles.tick2}`} />
    </div>
  );
};
