import { useEffect, useRef, useState } from 'react';
import { siteContent } from '../content/siteContent';
import Button from '../components/Button';
import SectionLayout from '../components/SectionLayout';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function HeroSection() {
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const workflowWrapRef = useRef<HTMLDivElement>(null);
  const [workflowHeight, setWorkflowHeight] = useState<number | null>(null);

  // Match workflow column height to left column (title + subtitle + CTA) so bottom aligns with CTA
  useEffect(() => {
    const left = leftColumnRef.current;
    const wrap = workflowWrapRef.current;
    if (!left || !wrap) return;

    const sync = () => {
      const h = left.getBoundingClientRect().height;
      setWorkflowHeight(h);
    };

    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(left);
    return () => ro.disconnect();
  }, []);

  // Animation refs — start: "top top" so reveal runs on first load when hero is in view
  const titleRef = useScrollReveal({ y: 30, duration: 0.7, start: 'top top' });
  const subtitleRef = useScrollReveal({ y: 20, duration: 0.6, delay: 0.1, start: 'top top' });
  const ctaRef = useScrollReveal({ y: 20, duration: 0.6, delay: 0.2, start: 'top top' });
  const workflowRef = useScrollReveal({
    y: 24,
    duration: 1,
    delay: 0.15,
    start: 'top top',
    startOpacity: 0,
    scale: 0.96,
  });

  return (
    <SectionLayout id="hero" lightLeaks="v1">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end max-w-[90rem] mx-auto px-2">
        {/* Left column: title, subtitle, CTA — measured so workflow bottom = CTA bottom */}
        <div ref={leftColumnRef} className="space-y-7 text-center lg:text-left order-2 lg:order-1">
          <h1
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight"
          >
            {siteContent.hero.title.split(/\.\s+/).map((part, i) => (
              <span key={i}>
                {i > 0 && <br />}
                {i === 0 ? (
                  <>
                    <span className="text-red-500">Stop</span> Drowning in Paperwork.
                  </>
                ) : (
                  <>
                    <span className="italic">Start</span> Running Your Business
                  </>
                )}
              </span>
            ))}
          </h1>

          <p
            ref={subtitleRef}
            className="text-muted text-lg max-w-xl lg:max-w-none leading-relaxed"
          >
            {siteContent.hero.subtitle}
          </p>

          <div ref={ctaRef} className="flex justify-center lg:justify-start">
            <a href="#contact">
              <Button type="button" variant="primary">
                {siteContent.hero.cta}
              </Button>
            </a>
          </div>
        </div>

        {/* Right column: workflow — height set to left column so bottom = CTA bottom */}
        <div
          ref={(el) => {
            workflowWrapRef.current = el;
            (workflowRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
          }}
          className="hero-workflow w-full min-w-0 order-1 lg:order-2 flex flex-col min-h-[280px]"
          style={workflowHeight != null ? { height: workflowHeight } : undefined}
        >
          <svg
            viewBox="0 0 480 380"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-1 min-h-0 w-full h-full block"
            preserveAspectRatio="xMidYMid meet"
          >
            <style>{`
            .connector {
              stroke: rgba(255, 255, 255, 0.06);
              stroke-width: 2;
              fill: none;
              stroke-linecap: round;
            }
            .connector-glow {
              fill: none;
              stroke-width: 2;
              stroke-linecap: round;
              stroke-dasharray: 1;
              stroke-dashoffset: 1;
              stroke: rgba(255, 255, 255, 0.85);
              animation: glow-draw 1.2s ease-out forwards;
            }
            .connector-glow-1 { animation-delay: 0s; }
            .connector-glow-2 { animation-delay: 0.1s; }
            .connector-glow-3 { animation-delay: 0.1s; }
            .connector-glow-4 { animation-delay: 0.25s; }
            .connector-glow-5 { animation-delay: 0.25s; }
            .connector-glow-6 { animation-delay: 0.25s; }
            .connector-glow-7 { animation-delay: 0.4s; }
            .connector-glow-8 { animation-delay: 0.4s; }
            .connector-glow-9 { animation-delay: 0.4s; }
            @keyframes glow-draw {
              to { stroke-dashoffset: 0; }
            }
            .node-bg {
              fill: #111111;
              stroke: rgba(255, 255, 255, 0.08);
              stroke-width: 1;
              rx: 14;
              ry: 14;
              transition: fill 0.3s, stroke 0.2s;
            }
            .node-bg:hover { 
              fill: #161616;
              stroke: rgba(255, 255, 255, 0.15);
            }
            .node-icon-circle { fill: #0a0a0a; }
            .node-label {
              fill: #ffffff;
              font-family: 'DM Sans', sans-serif;
              font-size: 11.5px;
              font-weight: 500;
              text-anchor: middle;
              dominant-baseline: central;
            }
            .node-sublabel {
              fill: rgba(255, 255, 255, 0.5);
              font-family: 'DM Sans', sans-serif;
              font-size: 9.5px;
              font-weight: 400;
              text-anchor: middle;
              dominant-baseline: central;
            }
            .trigger-label {
              fill: #ffffff;
              font-family: 'DM Sans', sans-serif;
              font-size: 12px;
              font-weight: 500;
              text-anchor: middle;
              dominant-baseline: central;
            }
          `}</style>
            <defs>
              <filter id="glow-white" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feFlood floodColor="rgb(255, 255, 255)" floodOpacity="0.5" result="color" />
                <feComposite in="color" in2="blur" operator="in" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* TRIGGER NODE: Automate at top center */}
            <g>
              <rect className="node-bg" x="170" y="0" width="140" height="68" rx="14" ry="14" />
              <circle className="node-icon-circle" cx="198" cy="34" r="16" />
              <g
                fill="none"
                stroke="rgba(255, 255, 255, 0.6)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon
                  points="194,26 206,34 194,42"
                  fill="rgba(255, 255, 255, 0.6)"
                  stroke="none"
                />
              </g>
              <text className="trigger-label" x="240" y="34">
                Automate
              </text>
            </g>

            {/* Spine down from Automate, then branch to 2 rows of 3 (spread out) */}
            <path
              className="connector"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth={2}
              strokeLinecap="round"
              d="M 240,68 L 240,100"
            />
            <path
              className="connector"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth={2}
              strokeLinecap="round"
              d="M 240,100 L 70,100"
            />
            <path
              className="connector"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth={2}
              strokeLinecap="round"
              d="M 240,100 L 410,100"
            />
            <path
              className="connector"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth={2}
              strokeLinecap="round"
              d="M 70,100 L 70,140"
            />
            <path
              className="connector"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth={2}
              strokeLinecap="round"
              d="M 70,100 L 70,300"
            />
            <path
              className="connector"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth={2}
              strokeLinecap="round"
              d="M 240,100 L 240,140"
            />
            <path
              className="connector"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth={2}
              strokeLinecap="round"
              d="M 240,100 L 240,300"
            />
            <path
              className="connector"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth={2}
              strokeLinecap="round"
              d="M 410,100 L 410,140"
            />
            <path
              className="connector"
              fill="none"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth={2}
              strokeLinecap="round"
              d="M 410,100 L 410,300"
            />

            {/* Glow overlay: light up solid then slow color cycle */}
            <path
              className="connector-glow connector-glow-1"
              pathLength={1}
              stroke="rgba(255,255,255,0.85)"
              strokeWidth={2}
              strokeLinecap="round"
              d="M 240,68 L 240,100"
            />
            <path
              className="connector-glow connector-glow-2"
              pathLength={1}
              stroke="rgba(255,255,255,0.85)"
              strokeWidth={2}
              strokeLinecap="round"
              d="M 240,100 L 70,100"
            />
            <path
              className="connector-glow connector-glow-3"
              pathLength={1}
              stroke="rgba(255,255,255,0.85)"
              strokeWidth={2}
              strokeLinecap="round"
              d="M 240,100 L 410,100"
            />
            <path
              className="connector-glow connector-glow-4"
              pathLength={1}
              stroke="rgba(255,255,255,0.85)"
              strokeWidth={2}
              strokeLinecap="round"
              d="M 70,100 L 70,140"
            />
            <path
              className="connector-glow connector-glow-5"
              pathLength={1}
              stroke="rgba(255,255,255,0.85)"
              strokeWidth={2}
              strokeLinecap="round"
              d="M 70,100 L 70,300"
            />
            <path
              className="connector-glow connector-glow-6"
              pathLength={1}
              stroke="rgba(255,255,255,0.85)"
              strokeWidth={2}
              strokeLinecap="round"
              d="M 240,100 L 240,140"
            />
            <path
              className="connector-glow connector-glow-7"
              pathLength={1}
              stroke="rgba(255,255,255,0.85)"
              strokeWidth={2}
              strokeLinecap="round"
              d="M 240,100 L 240,300"
            />
            <path
              className="connector-glow connector-glow-8"
              pathLength={1}
              stroke="rgba(255,255,255,0.85)"
              strokeWidth={2}
              strokeLinecap="round"
              d="M 410,100 L 410,140"
            />
            <path
              className="connector-glow connector-glow-9"
              pathLength={1}
              stroke="rgba(255,255,255,0.85)"
              strokeWidth={2}
              strokeLinecap="round"
              d="M 410,100 L 410,300"
            />

            {/* Row 1: 3 nodes — Scheduling, Invoicing, Follow-Ups */}
            {/* Node 1: Scheduling (row 1 left) */}
            <g>
              <rect className="node-bg" x="0" y="106" width="140" height="68" rx="14" ry="14" />
              <circle className="node-icon-circle" cx="28" cy="140" r="16" />
              <g
                fill="none"
                stroke="rgba(255, 255, 255, 0.6)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="21" y="133" width="14" height="12" rx="2" />
                <line x1="21" y1="137" x2="35" y2="137" />
                <line x1="25" y1="130" x2="25" y2="133" />
                <line x1="31" y1="130" x2="31" y2="133" />
              </g>
              <text className="node-label" x="70" y="140">
                Scheduling
              </text>
              <text className="node-sublabel" x="70" y="152">
                Appointments
              </text>
            </g>

            {/* Node 2: Invoicing (row 1 center) */}
            <g>
              <rect className="node-bg" x="170" y="106" width="140" height="68" rx="14" ry="14" />
              <circle className="node-icon-circle" cx="198" cy="140" r="16" />
              <g
                fill="none"
                stroke="rgba(255, 255, 255, 0.6)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="191" y="132" width="14" height="16" rx="2" />
                <path d="M 194,132 v-2 a2,2 0 0 1 2,-2 h2 a2,2 0 0 1 2,2 v2" />
                <line x1="194" y1="138" x2="202" y2="138" />
                <line x1="194" y1="142" x2="200" y2="142" />
              </g>
              <text className="node-label" x="240" y="140">
                Invoicing
              </text>
              <text className="node-sublabel" x="240" y="152">
                Billing
              </text>
            </g>

            {/* Node 3: Follow-Ups (row 1 right) */}
            <g>
              <rect className="node-bg" x="340" y="106" width="140" height="68" rx="14" ry="14" />
              <circle className="node-icon-circle" cx="368" cy="140" r="16" />
              <g
                fill="none"
                stroke="rgba(255, 255, 255, 0.6)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M 360,133 h16 a2,2 0 0 1 2,2 v6 a2,2 0 0 1-2,2 h-10 l-4,3 v-3 h-2 a2,2 0 0 1-2-2 z" />
              </g>
              <text className="node-label" x="410" y="140">
                Follow-Ups
              </text>
              <text className="node-sublabel" x="410" y="152">
                Messages
              </text>
            </g>

            {/* Row 2: 3 nodes — Reminders, Reporting, CRM (lower to align with CTA) */}
            {/* Node 4: Reminders (row 2 left) */}
            <g>
              <rect className="node-bg" x="0" y="266" width="140" height="68" rx="14" ry="14" />
              <circle className="node-icon-circle" cx="28" cy="300" r="16" />
              <g
                fill="none"
                stroke="rgba(255, 255, 255, 0.6)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M 28,292 a8,8 0 0 1 8,8 v3 h-16 v-3 a8,8 0 0 1 8,-8 z" />
                <line x1="25" y1="305" x2="31" y2="305" />
                <path d="M 25,308 h6 a1.5,1.5 0 0 1-3,0 z" />
              </g>
              <text className="node-label" x="70" y="300">
                Reminders
              </text>
              <text className="node-sublabel" x="70" y="312">
                Auto-notify
              </text>
            </g>

            {/* Node 5: Reporting (row 2 center) */}
            <g>
              <rect className="node-bg" x="170" y="266" width="140" height="68" rx="14" ry="14" />
              <circle className="node-icon-circle" cx="198" cy="300" r="16" />
              <g
                fill="none"
                stroke="rgba(255, 255, 255, 0.6)"
                strokeWidth="1.5"
                strokeLinecap="round"
              >
                <line x1="192" y1="308" x2="204" y2="308" />
                <line x1="192" y1="308" x2="192" y2="292" />
                <line x1="195" y1="305" x2="195" y2="300" />
                <line x1="198" y1="303" x2="198" y2="294" />
                <line x1="201" y1="306" x2="201" y2="298" />
              </g>
              <text className="node-label" x="240" y="300">
                Reporting
              </text>
              <text className="node-sublabel" x="240" y="312">
                Analytics
              </text>
            </g>

            {/* Node 6: CRM (row 2 right) */}
            <g>
              <rect className="node-bg" x="340" y="266" width="140" height="68" rx="14" ry="14" />
              <circle className="node-icon-circle" cx="368" cy="300" r="16" />
              <g
                fill="none"
                stroke="rgba(255, 255, 255, 0.6)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="368" cy="294" r="4" />
                <path d="M 361,310 a7,7 0 0 1 14,0" />
              </g>
              <text className="node-label" x="410" y="300">
                CRM
              </text>
              <text className="node-sublabel" x="410" y="312">
                Contacts
              </text>
            </g>
          </svg>
        </div>
      </div>
    </SectionLayout>
  );
}
