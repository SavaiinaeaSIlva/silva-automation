import styles from './HudOverlay.module.css';

/** Purely decorative HUD / fake-UI overlay — thin lines, markers & labels */
export const HudOverlay = () => (
  <div className={styles.overlay} aria-hidden="true">
    {/* Horizontal scan lines */}
    <span className={`${styles.lineH} ${styles.lineH1}`} />
    <span className={`${styles.lineH} ${styles.lineH2}`} />

    {/* Vertical scan lines */}
    <span className={`${styles.lineV} ${styles.lineV1}`} />
    <span className={`${styles.lineV} ${styles.lineV2}`} />

    {/* Cross markers at intersections */}
    <span className={`${styles.cross} ${styles.cross1}`} />
    <span className={`${styles.cross} ${styles.cross2}`} />
    <span className={`${styles.cross} ${styles.cross3}`} />
    <span className={`${styles.cross} ${styles.cross4}`} />

    {/* Dot markers */}
    <span className={`${styles.dot} ${styles.dot1}`} />
    <span className={`${styles.dot} ${styles.dot2}`} />
    <span className={`${styles.dot} ${styles.dot3}`} />
    <span className={`${styles.dot} ${styles.dot4}`} />

    {/* Technical labels */}
    <span className={`${styles.label} ${styles.labelTop}`}>SYS.RUN — 01</span>
    <span className={`${styles.label} ${styles.labelMid}`}>NODE.ACTIVE</span>
    <span className={`${styles.label} ${styles.labelBottom}`}>SILVA.AUTO // 2026</span>

    {/* Corner brackets */}
    <span className={`${styles.corner} ${styles.cornerTL}`} />
    <span className={`${styles.corner} ${styles.cornerBR}`} />

    {/* Dashed focal ring */}
    <span className={styles.ring} />

    {/* Accent ticks */}
    <span className={`${styles.tick} ${styles.tick1}`} />
    <span className={`${styles.tick} ${styles.tick2}`} />
  </div>
);
