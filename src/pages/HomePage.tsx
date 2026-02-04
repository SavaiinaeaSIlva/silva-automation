import { lazy, Suspense } from 'react';
import Header from '../components/Header';
import ScrollingTextWall from '../components/ScrollingTextWall';
import Footer from '../components/Footer';
import Loader from '../common/components/Loader';
import HeroSection from '../modules/home/HeroSection';
import ProblemSolutionSection from '../modules/home/ProblemSolutionSection';
import { siteContent } from '../content/siteContent';

const ProcessSection = lazy(() => import('../modules/home/ProcessSection'));
const PricingSection = lazy(() => import('../modules/home/PricingSection'));
const CalculatorSection = lazy(() => import('../modules/home/CalculatorSection'));
const ContactSection = lazy(() => import('../modules/home/ContactSection'));
const FAQSection = lazy(() => import('../modules/home/FAQSection'));

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      {/* Background layer — absolute so orbs scroll with page, not sticky */}
      <div className="site-background" aria-hidden="true" />

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
