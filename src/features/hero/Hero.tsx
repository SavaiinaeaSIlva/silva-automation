import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteContent } from '@/constants';
import { Container, Section } from '@/components/layout';
import { Button } from '@/components/ui';
import styles from './Hero.module.css';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const { hero } = siteContent;
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const workflowRef = useRef<HTMLDivElement>(null);

  // Initial text reveal animation
  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const ctx = gsap.context(() => {
      // Animate title, subtitle, and button with stagger
      const tl = gsap.timeline({ delay: 0.2 });

      tl.fromTo(
        content.querySelector('h1'),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      )
        .fromTo(
          content.querySelector('p'),
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(
          content.querySelector('button'),
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
          '-=0.4'
        );
    }, content);

    return () => ctx.revert();
  }, []);

  // Parallax scrolling effect for workflow SVG
  useEffect(() => {
    const workflow = workflowRef.current;
    const heroEl = heroRef.current;
    if (!workflow || !heroEl) return;

    const ctx = gsap.context(() => {
      // Workflow moves slightly slower (appears to float)
      gsap.to(workflow, {
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroEl,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });
    }, heroEl);

    return () => ctx.revert();
  }, []);

  const handleCTAClick = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="hero" background="dark" padding="large" noReveal>
      <Container>
        <div className={styles.hero} ref={heroRef}>
          <div className={styles.content} ref={contentRef}>
            <h1 className={styles.title}>{hero.title}</h1>

            <p className={styles.subtitle}>
              Custom automation for Hawaii service businesses. <em>One flat fee.</em>{' '}
              <em>You own it forever.</em>
            </p>

            <Button variant="primary" size="large" onClick={handleCTAClick}>
              {hero.cta}
            </Button>
          </div>

          <div className={styles.workflow} ref={workflowRef}>
            <svg
              className={styles.workflowSvg}
              viewBox="0 0 800 240"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Step 0: Node 1 — Inbox */}
              <g className={styles.seq0}>
                <rect
                  x="0"
                  y="95"
                  width="95"
                  height="50"
                  rx="10"
                  fill="rgba(255,255,255,0.04)"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <svg
                  x="32"
                  y="108"
                  width="30"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 12h-6l-2 3h-4l-2-3H2" />
                  <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
                </svg>
              </g>

              {/* Step 1: Line 1→2 + Node 2 — Filter */}
              <g className={styles.seq1}>
                <line x1="95" y1="120" x2="130" y2="120" stroke="white" strokeWidth="1.5" />
                <rect
                  x="130"
                  y="95"
                  width="95"
                  height="50"
                  rx="10"
                  fill="rgba(255,255,255,0.04)"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <svg
                  x="163"
                  y="108"
                  width="30"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                </svg>
              </g>

              {/* Step 2: Line 2→3 + Node 3 — Gear/Process */}
              <g className={styles.seq2}>
                <line x1="225" y1="120" x2="280" y2="120" stroke="white" strokeWidth="1.5" />
                <rect
                  x="280"
                  y="95"
                  width="95"
                  height="50"
                  rx="10"
                  fill="rgba(255,255,255,0.04)"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <svg
                  x="313"
                  y="108"
                  width="30"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </g>

              {/* Step 3: Line 3→4 + Node 4 — Branch */}
              <g className={styles.seq3}>
                <line x1="375" y1="120" x2="430" y2="120" stroke="white" strokeWidth="1.5" />
                <rect
                  x="430"
                  y="95"
                  width="95"
                  height="50"
                  rx="10"
                  fill="rgba(255,255,255,0.04)"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <svg
                  x="463"
                  y="108"
                  width="30"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="18" cy="18" r="3" />
                  <circle cx="6" cy="6" r="3" />
                  <circle cx="18" cy="6" r="3" />
                  <path d="M6 9v12" />
                  <path d="M6 9a9 9 0 0 0 9 9" />
                </svg>
              </g>

              {/* Step 4: Branch lines + Nodes 5 & 6 — Send + Database */}
              <g className={styles.seq4}>
                <path
                  d="M525 105 L560 105 L560 45 L590 45"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path
                  d="M525 135 L560 135 L560 195 L590 195"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                />
                <rect
                  x="590"
                  y="20"
                  width="95"
                  height="50"
                  rx="10"
                  fill="rgba(255,255,255,0.04)"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <svg
                  x="623"
                  y="33"
                  width="30"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                <rect
                  x="590"
                  y="170"
                  width="95"
                  height="50"
                  rx="10"
                  fill="rgba(255,255,255,0.04)"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <svg
                  x="623"
                  y="183"
                  width="30"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <ellipse cx="12" cy="5" rx="9" ry="3" />
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                </svg>
              </g>

              {/* Step 5: Lines + Nodes 7 & 8 — Checkmarks */}
              <g className={styles.seq5}>
                <line x1="685" y1="45" x2="705" y2="45" stroke="white" strokeWidth="1.5" />
                <line x1="685" y1="195" x2="705" y2="195" stroke="white" strokeWidth="1.5" />
                <rect
                  x="705"
                  y="20"
                  width="95"
                  height="50"
                  rx="10"
                  fill="rgba(255,255,255,0.04)"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <svg
                  x="738"
                  y="33"
                  width="30"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <rect
                  x="705"
                  y="170"
                  width="95"
                  height="50"
                  rx="10"
                  fill="rgba(255,255,255,0.04)"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <svg
                  x="738"
                  y="183"
                  width="30"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </g>
            </svg>
          </div>
        </div>
      </Container>
    </Section>
  );
};
