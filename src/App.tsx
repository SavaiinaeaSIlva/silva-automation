import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import { LenisProvider } from './core/LenisContext';
import CookieBanner from './components/CookieBanner';
import ErrorBoundary from './common/components/ErrorBoundary';
import Loader from './common/components/Loader';
import HomePage from './pages/HomePage';

const LegalPage = lazy(() => import('./pages/LegalPage'));

export default function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <LenisProvider>
          <ScrollToTop />
          <CookieBanner />
          <BackToTop />
          <Suspense fallback={<Loader fullScreen />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/terms" element={<LegalPage type="terms" />} />
              <Route path="/privacy" element={<LegalPage type="privacy" />} />
              <Route path="/cookies" element={<LegalPage type="cookies" />} />
              <Route path="/refunds" element={<LegalPage type="refunds" />} />
            </Routes>
          </Suspense>
        </LenisProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
