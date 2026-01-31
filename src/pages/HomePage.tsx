import { lazy, Suspense } from 'react';
import Header from '../components/Header';
import SiteBackground from '../components/SiteBackground';
import BackToTop from '../components/BackToTop';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import HeroSection from '../sections/HeroSection';
import ProblemSolutionSection from '../sections/ProblemSolutionSection';

const ProcessSection = lazy(() => import('../sections/ProcessSection'));
const PricingSection = lazy(() => import('../sections/PricingSection'));
const CalculatorSection = lazy(() => import('../sections/CalculatorSection'));
const ContactSection = lazy(() => import('../sections/ContactSection'));
const FAQSection = lazy(() => import('../sections/FAQSection'));

export default function HomePage() {
  return (
    <>
      {/* Background layer */}
      <SiteBackground />

      {/* Content layer */}
      <div className="relative z-10 min-h-screen text-text-main">
        <Header />

        <main id="main-content" className="pt-20">
          {/* Above the fold - load immediately */}
          <HeroSection />
          <ProblemSolutionSection />

          {/* Below the fold - lazy load */}
          <Suspense fallback={<Loader />}>
            <ProcessSection />
          </Suspense>

          <Suspense fallback={<Loader />}>
            <PricingSection />
          </Suspense>

          <Suspense fallback={<Loader />}>
            <CalculatorSection />
          </Suspense>

          <Suspense fallback={<Loader />}>
            <ContactSection />
          </Suspense>

          <Suspense fallback={<Loader />}>
            <FAQSection />
          </Suspense>
        </main>

        <Footer />
        <BackToTop />
      </div>
    </>
  );
}
