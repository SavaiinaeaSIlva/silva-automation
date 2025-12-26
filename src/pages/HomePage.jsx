import React, { useState, useEffect } from 'react';
import { Header, Footer, MobileMenu } from '../components';
import BackToTop from '../components/BackToTop';
import CookieBanner from '../components/CookieBanner';
import { 
  Hero, WhatIDo, UseCases, HowItWorks, ROICalculator, Pricing, About, Contact 
} from '../sections';

const NAV_LINKS = [
  { name: 'What I Do', href: '#what-i-do' },
  { name: 'Use Cases', href: '#use-cases' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'ROI', href: '#roi-calculator' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'About', href: '#about' },
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-primary">
      <Header 
        scrolled={scrolled} 
        setMobileMenuOpen={setMobileMenuOpen} 
        NAV_LINKS={NAV_LINKS} 
        scrollToSection={scrollToSection} 
      />

      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)} 
        NAV_LINKS={NAV_LINKS} 
        scrollToSection={scrollToSection} 
      />

      <main>
        <Hero />
        <WhatIDo />
        <UseCases />
        <HowItWorks />
        <ROICalculator />
        <Pricing />
        <About />
        <Contact />
      </main>

      <Footer />
      
      <BackToTop />
      <CookieBanner />
    </div>
  );
}