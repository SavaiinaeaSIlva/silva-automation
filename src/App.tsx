import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BackToTop, CookieBanner, ScrollToTop } from '@/components';
import { ErrorBoundary, Loader } from '@/common/components';
import { LenisProvider } from '@/core';
import { HomePage } from '@/pages';

const LegalPage = lazy(() => import('@/pages/LegalPage'));

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
