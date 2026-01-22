// Hero component - Main hero section with scroll-triggered stroke draw animation
import { heroContent } from "../../data";
import { Button, StatItem } from "../ui";
import { useHeroAnimation } from "../../hooks";
import ScrollIndicator from "../ui/ScrollIndicator"; 

function Hero() {
  const { sectionRef, logoRef, contentRef } = useHeroAnimation();

  return (
    <section 
      id="hero" 
      ref={sectionRef}
      className="hero-section relative" 
    >
      {/* Animated Logo - Stroke Draw Effect */}
      <div className="hero-logo-container" ref={logoRef}>
        <svg 
          className="hero-logo-svg"
          width="400" 
          height="160" 
          viewBox="0 0 400 160" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Font Styles */}
          <style>
            {`
              @import url('https://fonts.cdnfonts.com/css/bank-gothic');
              .silva-logo {
                font-family: "Bank Gothic", "BankGothic Md BT", "Arial Black", sans-serif;
                font-weight: 400;
                text-anchor: middle;
              }
              /* FORCE HIDE LOCK INITIALLY */
              .logo-line {
                visibility: hidden; /* JavaScript will make this visible when animation starts */
              }
            `}
          </style>

          {/* Lock Icon - Both parts have 'logo-line' class to trigger animation */}
          <g transform="translate(30, 35) scale(2.2)" className="logo-icon">
            {/* The Box Part */}
            <rect 
              className="logo-line" 
              x="3" y="11" width="18" height="11" rx="2" ry="2"
              fill="none" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            />
            {/* The Arch Part (Upside down U) */}
            <path 
              className="logo-line"
              d="M7 11V7a5 5 0 0 1 10 0v4"
              fill="none" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
            />
          </g>

          {/* SILVA Text */}
          <text 
            className="silva-logo silva-text" 
            x="230" 
            y="70" 
            fontSize="72"
            fill="#ffffff" 
            stroke="none"
            textLength="280" 
            lengthAdjust="spacing"
          >
            SILVA
          </text>

          {/* AUTOMATION Text */}
          <text 
            className="silva-logo automation-text" 
            x="230" 
            y="110" 
            fontSize="22"
            fill="none" 
            stroke="#60A5FA" 
            strokeWidth="0.9"
            textLength="260" 
            lengthAdjust="spacing"
          >
            AUTOMATION
          </text>

          {/* Underline */}
          <line 
            className="logo-line"
            x1="150" 
            y1="130" 
            x2="310" 
            y2="130"
            stroke="#ffffff" 
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div ref={contentRef} className="hero-content">
        <div className="container-main pt-24 pb-12 md:pt-32 md:pb-16">
          <div className="max-w-3xl">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              {heroContent.title}
            </h1>
            <p className="text-base md:text-lg text-body mb-6 max-w-2xl">
              {heroContent.subtitle}
            </p>
            
            <Button variant="primary" href="https://calendly.com/silvaautomation/consultation">{heroContent.cta}</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
            {heroContent.stats.map((stat, index) => (
              <StatItem
                key={index}
                value={stat.value}
                label={stat.label}
                description={stat.description}
              />
            ))}
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}

export default Hero;