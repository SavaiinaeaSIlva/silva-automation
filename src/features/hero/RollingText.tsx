import { useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { siteContent } from '@/constants';
import styles from './RollingText.module.css';

interface RollingTextProps {
  words?: string[];
  className?: string;
  rollDuration?: number;
  holdDuration?: number;
  stagger?: number;
}

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export const RollingText = ({
  words = siteContent.hero.rollingWords,
  className = '',
  rollDuration = 1.0,
  holdDuration = 2.5,
  stagger = 0.04,
}: RollingTextProps) => {
  const containerRef = useRef<HTMLSpanElement>(null);

  const maxLen = useMemo(() => Math.max(...words.map((w) => w.length)), [words]);
  const tripleChars = useMemo(() => [...CHARACTERS, ...CHARACTERS, ...CHARACTERS], []);
  const charHeight = 100 / tripleChars.length;

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      const columns = gsap.utils.toArray<HTMLElement>('[data-col]', container);
      if (columns.length === 0) return;

      const masterTl = gsap.timeline({ repeat: -1 });

      words.forEach((word) => {
        const wordTl = gsap.timeline();

        // 1. Instantly snap cell visibility for the current word
        wordTl.call(() => {
          columns.forEach((col, i) => {
            const cell = col.parentElement;
            if (!cell) return;
            if (i < word.length) {
              cell.classList.remove(styles.cellHidden);
            } else {
              cell.classList.add(styles.cellHidden);
            }
          });
        });

        // 2. Roll In
        word.split('').forEach((char, i) => {
          const col = columns[i];
          if (!col) return;

          const charIndex = CHARACTERS.indexOf(char.toUpperCase());
          const targetIndex = charIndex !== -1 ? charIndex : 0;

          // Target the middle alphabet set for resting
          const restIdx = targetIndex + CHARACTERS.length;
          const restY = -(restIdx * charHeight);

          wordTl.fromTo(
            col,
            { yPercent: 0, filter: 'blur(5px)' },
            {
              yPercent: restY,
              filter: 'blur(0px)',
              duration: rollDuration,
              ease: 'power3.out',
            },
            i * stagger
          );
        });

        // 3. Roll Out
        const outStartTime = rollDuration + holdDuration;

        word.split('').forEach((char, i) => {
          const col = columns[i];
          if (!col) return;

          const charIndex = CHARACTERS.indexOf(char.toUpperCase());
          const targetIndex = charIndex !== -1 ? charIndex : 0;

          // Target the final alphabet set for exiting
          const exitIdx = targetIndex + CHARACTERS.length * 2;
          const exitY = -(exitIdx * charHeight);

          wordTl.to(
            col,
            {
              yPercent: exitY,
              filter: 'blur(5px)',
              duration: rollDuration * 0.8,
              ease: 'power2.in',
            },
            outStartTime + i * stagger
          );
        });

        masterTl.add(wordTl);
      });
    },
    {
      scope: containerRef,
      dependencies: [words, rollDuration, holdDuration, stagger, charHeight],
    }
  );

  return (
    <span ref={containerRef} className={`${styles.container} ${className}`}>
      {Array.from({ length: maxLen }).map((_, i) => (
        <span key={i} className={`${styles.cell} ${i >= words[0].length ? styles.cellHidden : ''}`}>
          <span className={`${styles.column} ${styles.columnInitial}`} data-col="">
            {tripleChars.map((char, ci) => (
              <span key={ci} className={styles.slot}>
                {char}
              </span>
            ))}
          </span>
        </span>
      ))}
    </span>
  );
};
