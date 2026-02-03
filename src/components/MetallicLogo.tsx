interface MetallicLogoProps {
  className?: string;
  size?: number;
}

/**
 * Inline metallic (chrome/silver) logo — "S" for Silva Automation.
 * Pure SVG with gradients, no external assets.
 */
export default function MetallicLogo({ className = '', size = 28 }: MetallicLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id="metallic-shine" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8e8e8" />
          <stop offset="25%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#a0a0a0" />
          <stop offset="75%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#707070" />
        </linearGradient>
        <linearGradient id="metallic-shadow" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#505050" />
          <stop offset="100%" stopColor="#d0d0d0" />
        </linearGradient>
      </defs>
      {/* Letter S — metallic gradient fill; typography via .metallic-logo-text in global.css */}
      <text
        x="16"
        y="24"
        textAnchor="middle"
        className="metallic-logo-text"
        fill="url(#metallic-shine)"
        stroke="url(#metallic-shadow)"
        strokeWidth="0.5"
      >
        S
      </text>
    </svg>
  );
}
