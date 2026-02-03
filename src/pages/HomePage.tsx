import { lazy, Suspense } from 'react';
import Header from '../components/Header';
import SiteBackground from '../components/SiteBackground';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import HeroSection from '../sections/HeroSection';
import ProblemSolutionSection from '../sections/ProblemSolutionSection';
import { siteContent } from '../content/siteContent';

const ProcessSection = lazy(() => import('../sections/ProcessSection'));
const PricingSection = lazy(() => import('../sections/PricingSection'));
const CalculatorSection = lazy(() => import('../sections/CalculatorSection'));
const ContactSection = lazy(() => import('../sections/ContactSection'));
const FAQSection = lazy(() => import('../sections/FAQSection'));

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      {/* Background layer — absolute so orbs scroll with page, not sticky */}
      <SiteBackground />

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
