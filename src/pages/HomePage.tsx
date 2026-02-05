import { lazy, Suspense } from 'react';
import { Footer, Header, ScrollingTextWall } from '@/components';
import { Loader } from '@/common/components';
import { HeroSection, ProblemSolutionSection } from '@/modules/home';
import { siteContent } from '@/content/siteContent';

const ProcessSection = lazy(() => import('@/modules/home/ProcessSection'));
const PricingSection = lazy(() => import('@/modules/home/PricingSection'));
const CalculatorSection = lazy(() => import('@/modules/home/CalculatorSection'));
const ContactSection = lazy(() => import('@/modules/home/ContactSection'));
const FAQSection = lazy(() => import('@/modules/home/FAQSection'));

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Base dark background */}
      <div className="site-background" aria-hidden="true" />

      {/* Light leak 1: Hero area - top left prismatic beam */}
      <div className="light-leak light-leak-hero" aria-hidden="true" />

      {/* Light leak 2: Mid-page - after process section */}
      <div className="light-leak light-leak-mid" aria-hidden="true" />

      {/* Light leak 3: Lower page - pricing/calculator area */}
      <div className="light-leak light-leak-lower" aria-hidden="true" />

      {/* Light leak 4: Orange streak - calculator to contact */}
      <div className="light-leak light-leak-orange" aria-hidden="true" />

      {/* Content layer */}
      <div className="relative z-10 min-h-screen text-text-main">
        <Header />

        <main id="main-content" className="pt-20">
          <h1 className="sr-only">{siteContent.hero.title}</h1>
          {/* Above the fold - load immediately */}
          <HeroSection />
          <ProblemSolutionSection />

          {/* Below the fold - lazy load */}
          <Suspense fallback={<Loader />}>
            <ProcessSection />
            <ScrollingTextWall />
            <PricingSection />
            <CalculatorSection />
            <ContactSection />
            <FAQSection />
          </Suspense>
        </main>

        <Footer />
      </div>
    </div>
  );
}
