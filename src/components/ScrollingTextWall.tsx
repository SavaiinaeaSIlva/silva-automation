import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type TextLineProps = {
  text: string;
  direction: 'left' | 'right';
  speed: number;
  outlined?: boolean;
};

function TextLine({ text, direction, speed, outlined = false }: TextLineProps) {
  const lineRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    const inner = innerRef.current;
    if (!line || !inner) return;

    // Calculate movement range based on speed
    const range = speed * 8;
    const startX = direction === 'left' ? -10 : -(10 + range);
    const endX = direction === 'left' ? -(10 + range) : -10;

    const prefersReduced =
      typeof window !== 'undefined' &&
      (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false);
    if (prefersReduced) {
      // For reduced motion, position content without animation
      gsap.set(inner, { xPercent: endX });
      return;
    }

    const tween = gsap.fromTo(
      inner,
      { xPercent: startX },
      {
        xPercent: endX,
        ease: 'none',
        scrollTrigger: {
          trigger: line,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.3,
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [direction, speed]);

  // Create multiple copies for infinite loop effect
  const copies = Array(8).fill(text);

  return (
    <div ref={lineRef} className="scrolling-text-line">
      <div ref={innerRef} className="scrolling-text-inner">
        {copies.map((t, i) => (
          <span
            key={i}
            className={`scrolling-text-item ${outlined ? 'scrolling-text-outlined' : 'scrolling-text-filled'}`}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

type ScrollingTextWallProps = {
  lines?: Array<{
    text: string;
    direction: 'left' | 'right';
    speed: number;
    outlined?: boolean;
  }>;
};

const defaultLines = [
  { text: 'AUTOMATION', direction: 'left' as const, speed: 2.5, outlined: false },
  { text: 'EFFICIENCY', direction: 'right' as const, speed: 1.8, outlined: true },
  { text: 'INNOVATION', direction: 'left' as const, speed: 3.2, outlined: false },
  { text: 'WORKFLOW', direction: 'right' as const, speed: 2.0, outlined: true },
  { text: 'OPTIMIZE', direction: 'left' as const, speed: 2.3, outlined: false },
];

export default function ScrollingTextWall({ lines = defaultLines }: ScrollingTextWallProps) {
  return (
    <section
      className="scrolling-text-wall py-16 md:py-24 overflow-hidden select-none"
      aria-hidden="true"
    >
      <div className="scrolling-text-container">
        {lines.map((line, index) => (
          <TextLine
            key={`${line.text}-${index}`}
            text={line.text}
            direction={line.direction}
            speed={line.speed}
            outlined={line.outlined}
          />
        ))}
      </div>
    </section>
  );
}
