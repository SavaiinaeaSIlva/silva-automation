// Hero component - Main hero section with scroll-triggered stroke draw animation
import { heroContent } from "../../data";
import { Button, StatItem } from "../ui";
import { useHeroAnimation } from "../../hooks";

function Hero() {
  const { sectionRef, logoRef, contentRef } = useHeroAnimation();

  return (
    <section 
      id="hero" 
      ref={sectionRef}
      className="hero-section"
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
          <text 
            className="silva-logo silva-text" 
            x="200" 
            y="70" 
            textLength="280" 
            lengthAdjust="spacing"
          >
            SILVA
          </text>
          <text 
            className="silva-logo automation-text" 
            x="200" 
            y="110" 
            textLength="280" 
            lengthAdjust="spacing"
          >
            AUTOMATION
          </text>
          <line 
            className="logo-line"
            x1="120" 
            y1="130" 
            x2="280" 
            y2="130"
          />
        </svg>
      </div>

      {/* Main Content - Fades in after logo animation */}
      <div ref={contentRef} className="hero-content">
        <div className="container-main pt-24 pb-12 md:pt-32 md:pb-16">
          {/* F-Pattern: Strong horizontal top */}
          <div className="max-w-3xl">
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              {heroContent.title}
            </h1>
            <p className="text-base md:text-lg text-body mb-6 max-w-2xl">
              {heroContent.subtitle}
            </p>
            
            <Button variant="primary" href="https://calendly.com/silvaautomation/consultation">{heroContent.cta}</Button>
          </div>
          
          {/* Stats row - horizontal scan line */}
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
    </section>
  );
}

export default Hero;
