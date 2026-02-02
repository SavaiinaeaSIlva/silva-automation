import '@testing-library/jest-dom';
import { toHaveNoViolations } from 'jest-axe';

// Extend Jest matchers with jest-axe
expect.extend(toHaveNoViolations);

// Mock localStorage for CookieBanner and other components
const localStorageMock: Storage = {
  getItem: (key: string) => storageStore[key] ?? null,
  setItem: (key: string, value: string) => {
    storageStore[key] = value;
  },
  removeItem: (key: string) => {
    delete storageStore[key];
  },
  clear: () => {
    for (const key of Object.keys(storageStore)) delete storageStore[key];
  },
  key: (i: number) => Object.keys(storageStore)[i] ?? null,
  get length() {
    return Object.keys(storageStore).length;
  },
};
const storageStore: Record<string, string> = {};
Object.defineProperty(window, 'localStorage', { value: localStorageMock, writable: true });

// Mock IntersectionObserver for scroll-reveal hook
class MockIntersectionObserver {
  observe = () => null;
  disconnect = () => null;
  unobserve = () => null;
  root = null;
  rootMargin = '';
  thresholds = [];
}
window.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver;

// Mock scrollTo (used by ScrollToTop, BackToTop, etc.)
window.scrollTo = () => {};

// Mock matchMedia for GSAP
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {}, // deprecated
    removeListener: () => {}, // deprecated
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => true,
  }),
});
