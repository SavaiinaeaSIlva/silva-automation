import { useCallback, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { siteContent } from '@/constants';
import { Section } from '@/components/layout';
import styles from './Workflow.module.css';

gsap.registerPlugin(ScrollTrigger);

/** SVG icon components for the workflow nodes */
const NodeIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'database':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );
    case 'zap':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      );
    case 'folder':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      );
    case 'cpu':
      return (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
          <rect x="9" y="9" width="6" height="6" />
          <line x1="9" y1="1" x2="9" y2="4" />
          <line x1="15" y1="1" x2="15" y2="4" />
          <line x1="9" y1="20" x2="9" y2="23" />
          <line x1="15" y1="20" x2="15" y2="23" />
          <line x1="20" y1="9" x2="23" y2="9" />
          <line x1="20" y1="14" x2="23" y2="14" />
          <line x1="1" y1="9" x2="4" y2="9" />
          <line x1="1" y1="14" x2="4" y2="14" />
        </svg>
      );
    case 'bar-chart':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      );
    case 'bell':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      );
    case 'clipboard':
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        </svg>
      );
    default:
      return null;
  }
};

interface ActiveNode {
  title: string;
  subtitle: string;
  icon: string;
  backInfo?: string;
}

interface Point {
  x: number;
  y: number;
}

interface DiagramPaths {
  input: string[];
  output: string[];
  inputDots: Point[];
  outputDots: Point[];
  engineDot: Point | null;
}

export const Workflow = () => {
  const { workflow } = siteContent;
  const sectionRef = useRef<HTMLDivElement>(null);
  const diagramRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState<ActiveNode | null>(null);
  const [diagramSize, setDiagramSize] = useState({ width: 1000, height: 500 });
  const [diagramPaths, setDiagramPaths] = useState<DiagramPaths>({
    input: [],
    output: [],
    inputDots: [],
    outputDots: [],
    engineDot: null,
  });

  // Flat ordered list of all nodes for prev/next navigation
  const allNodes: ActiveNode[] = [...workflow.inputs, workflow.engine, ...workflow.outputs];

  const activeIndex = activeNode ? allNodes.findIndex((n) => n.title === activeNode.title) : -1;

  const goNext = () => {
    if (activeIndex < 0) return;
    setActiveNode(allNodes[(activeIndex + 1) % allNodes.length]);
  };

  const goPrev = () => {
    if (activeIndex < 0) return;
    setActiveNode(allNodes[(activeIndex - 1 + allNodes.length) % allNodes.length]);
  };

  const ctxRef = useRef<ReturnType<typeof gsap.context> | null>(null);

  const updateDiagramGeometry = useCallback(() => {
    const diagramEl = diagramRef.current;
    if (!diagramEl) return;

    const rect = diagramEl.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    setDiagramSize((prev) =>
      prev.width === rect.width && prev.height === rect.height
        ? prev
        : { width: rect.width, height: rect.height }
    );

    const getCenter = (el: Element): Point => {
      const r = el.getBoundingClientRect();
      return {
        x: r.left - rect.left + r.width / 2,
        y: r.top - rect.top + r.height / 2,
      };
    };

    const engineEl = diagramEl.querySelector('[data-node="engine"]');
    const inputEls = Array.from(diagramEl.querySelectorAll('[data-node^="input-"]'));
    const outputEls = Array.from(diagramEl.querySelectorAll('[data-node^="output-"]'));

    if (!engineEl || inputEls.length === 0 || outputEls.length === 0) return;

    const engine = getCenter(engineEl);
    const inputs = inputEls.map(getCenter);
    const outputs = outputEls.map(getCenter);

    const makeCurve = (start: Point, end: Point) => {
      const dx = end.x - start.x;
      const controlOffset = Math.max(Math.abs(dx) * 0.45, 60);
      const c1x = start.x + Math.sign(dx) * controlOffset;
      const c2x = end.x - Math.sign(dx) * controlOffset;
      return `M ${start.x} ${start.y} C ${c1x} ${start.y}, ${c2x} ${end.y}, ${end.x} ${end.y}`;
    };

    setDiagramPaths({
      input: inputs.map((start) => makeCurve(start, engine)),
      output: outputs.map((end) => makeCurve(engine, end)),
      inputDots: inputs,
      outputDots: outputs,
      engineDot: engine,
    });
  }, []);

  const runAnimations = () => {
    const el = sectionRef.current;
    if (!el) return;

    // Kill previous context if replaying
    if (ctxRef.current) ctxRef.current.revert();

    const nodes = el.querySelectorAll('[data-workflow-node]');
    const lines = el.querySelectorAll('[data-workflow-line]');
    const dots = el.querySelectorAll('[data-workflow-dot]');
    const glow = el.querySelector('[data-engine-glow]');

    ctxRef.current = gsap.context(() => {
      // Fade in nodes with stagger
      gsap.fromTo(
        nodes,
        { opacity: 0, scale: 0.85 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
        }
      );

      // Draw lines
      gsap.fromTo(
        lines,
        { strokeDashoffset: 300 },
        {
          strokeDashoffset: 0,
          duration: 1.2,
          stagger: 0.08,
          ease: 'power2.inOut',
        }
      );

      // Fade in dots
      gsap.fromTo(
        dots,
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.06,
          ease: 'back.out(2)',
          delay: 0.6,
        }
      );

      // Pulse glow on engine
      if (glow) {
        gsap.to(glow, {
          opacity: 0.4,
          scale: 1.15,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }
    }, el);
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Run animations on first scroll into view
    ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      once: true,
      onEnter: () => runAnimations(),
    });

    return () => {
      if (ctxRef.current) ctxRef.current.revert();
    };
  }, []);

  useEffect(() => {
    updateDiagramGeometry();

    const diagramEl = diagramRef.current;
    if (!diagramEl || typeof ResizeObserver === 'undefined') return;

    const observer = new ResizeObserver(() => updateDiagramGeometry());
    observer.observe(diagramEl);

    return () => observer.disconnect();
  }, [updateDiagramGeometry]);

  return (
    <Section id={workflow.id} background="dark" padding="large" noReveal>
      <div className={styles.wrapper} ref={sectionRef}>
        {/* Section header */}
        <div className={styles.header}>
          <h2 className={styles.title}>{workflow.title}</h2>
          <p className={styles.subtitle}>{workflow.subtitle}</p>
        </div>

        {/* Reload icon top-right */}
        <button
          className={styles.reloadBtn}
          aria-label="Replay animation"
          onClick={() => runAnimations()}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="23 4 23 10 17 10" />
            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
          </svg>
        </button>

        {/* Click hint */}
        <p className={styles.clickHint}>Click any node to learn more</p>

        {/* Diagram area (lines + grid) */}
        <div className={styles.diagram} ref={diagramRef}>
          <svg
            className={styles.lines}
            viewBox={`0 0 ${diagramSize.width} ${diagramSize.height}`}
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Glow filter for orbs */}
            <defs>
              <filter id="orb-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Input lines: each input → engine center */}
            {diagramPaths.input.map((d, i) => (
              <path
                key={`path-in-${i}`}
                id={`path-in-${i}`}
                data-workflow-line
                d={d}
                strokeDasharray="500"
              />
            ))}

            {/* Output lines: engine center → each output */}
            {diagramPaths.output.map((d, i) => (
              <path
                key={`path-out-${i}`}
                id={`path-out-${i}`}
                data-workflow-line
                d={d}
                strokeDasharray="500"
              />
            ))}

            {/* Junction dot at engine */}
            {diagramPaths.engineDot && (
              <circle
                data-workflow-dot
                cx={diagramPaths.engineDot.x}
                cy={diagramPaths.engineDot.y}
                r="4"
              />
            )}

            {/* Endpoint dots (inputs) */}
            {diagramPaths.inputDots.map((point, i) => (
              <circle key={`input-dot-${i}`} data-workflow-dot cx={point.x} cy={point.y} r="3.5" />
            ))}

            {/* Endpoint dots (outputs) */}
            {diagramPaths.outputDots.map((point, i) => (
              <circle key={`output-dot-${i}`} data-workflow-dot cx={point.x} cy={point.y} r="3.5" />
            ))}

            {/* Traveling orbs — input paths (node → engine) */}
            {diagramPaths.input.map((_, i) => (
              <circle
                key={`orb-in-${i}`}
                r="5"
                fill="rgba(255, 82, 27, 0.8)"
                filter="url(#orb-glow)"
              >
                <animateMotion
                  dur={`${2.5 + i * 0.4}s`}
                  repeatCount="indefinite"
                  keyPoints="0;1"
                  keyTimes="0;1"
                >
                  <mpath href={`#path-in-${i}`} />
                </animateMotion>
              </circle>
            ))}

            {/* Traveling orbs — output paths (engine → node) */}
            {diagramPaths.output.map((_, i) => (
              <circle
                key={`orb-out-${i}`}
                r="5"
                fill="rgba(255, 82, 27, 0.8)"
                filter="url(#orb-glow)"
              >
                <animateMotion
                  dur={`${2.5 + i * 0.4}s`}
                  repeatCount="indefinite"
                  keyPoints="0;1"
                  keyTimes="0;1"
                >
                  <mpath href={`#path-out-${i}`} />
                </animateMotion>
              </circle>
            ))}
          </svg>

          {/* Node grid */}
          <div className={styles.grid}>
            {/* Input column */}
            <div className={styles.column}>
              {workflow.inputs.map((node, i) => (
                <div
                  key={i}
                  className={styles.nodeCard}
                  data-workflow-node
                  data-node={`input-${i}`}
                  onClick={() => setActiveNode(node)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveNode(node);
                    }
                  }}
                  aria-label={`${node.title} — click for details`}
                >
                  <span className={styles.nodeIcon}>
                    <NodeIcon type={node.icon} />
                  </span>
                  <div className={styles.nodeText}>
                    <span className={styles.nodeTitle}>{node.title}</span>
                    <span className={styles.nodeSubtitle}>{node.subtitle}</span>
                  </div>
                  <span className={styles.infoHint}>ⓘ</span>
                </div>
              ))}
            </div>

            {/* Center engine */}
            <div className={styles.center}>
              <div
                className={styles.engineWrapper}
                data-workflow-node
                data-node="engine"
                onClick={() => setActiveNode(workflow.engine)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveNode(workflow.engine);
                  }
                }}
                aria-label={`${workflow.engine.title} — click for details`}
              >
                <div className={styles.engineFront}>
                  <div className={styles.engineGlow} data-engine-glow />
                  <span className={styles.engineIcon}>
                    <NodeIcon type={workflow.engine.icon} />
                  </span>
                  <span className={styles.engineTitle}>{workflow.engine.title}</span>
                  <span className={styles.engineSubtitle}>{workflow.engine.subtitle}</span>
                  <span className={styles.infoHint}>ⓘ</span>
                </div>
              </div>
            </div>

            {/* Output column */}
            <div className={styles.column}>
              {workflow.outputs.map((node, i) => (
                <div
                  key={i}
                  className={styles.nodeCard}
                  data-workflow-node
                  data-node={`output-${i}`}
                  onClick={() => setActiveNode(node)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveNode(node);
                    }
                  }}
                  aria-label={`${node.title} — click for details`}
                >
                  <span className={styles.nodeIcon}>
                    <NodeIcon type={node.icon} />
                  </span>
                  <div className={styles.nodeText}>
                    <span className={styles.nodeTitle}>{node.title}</span>
                    <span className={styles.nodeSubtitle}>{node.subtitle}</span>
                  </div>
                  <span className={styles.infoHint}>ⓘ</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detail modal */}
        {activeNode && (
          <div
            className={styles.modalBackdrop}
            onClick={() => setActiveNode(null)}
            role="presentation"
          >
            <div
              className={styles.modal}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-label={activeNode.title}
            >
              <button
                className={styles.modalClose}
                onClick={() => setActiveNode(null)}
                aria-label="Close"
              >
                ✕
              </button>

              {/* Prev arrow */}
              <button
                className={styles.modalNav}
                data-dir="prev"
                onClick={goPrev}
                aria-label="Previous node"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>

              {/* Next arrow */}
              <button
                className={styles.modalNav}
                data-dir="next"
                onClick={goNext}
                aria-label="Next node"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 6 15 12 9 18" />
                </svg>
              </button>

              <span className={styles.modalIcon}>
                <NodeIcon type={activeNode.icon} />
              </span>
              <h3 className={styles.modalTitle}>{activeNode.title}</h3>
              <span className={styles.modalSubtitle}>{activeNode.subtitle}</span>
              <p className={styles.modalText}>{activeNode.backInfo}</p>

              <span className={styles.modalCounter}>
                {activeIndex + 1} / {allNodes.length}
              </span>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};
