/**
 * Hooks barrel export
 * Export all custom hooks from this file
 */

export { useCalculator } from './useCalculator';
export type { CalculatorInputs, CalculatorResults } from './useCalculator';

export { useParallax } from './useParallax';

export {
  useScrollReveal,
  useParallaxGSAP,
  useBackgroundParallax,
  useScrollRevealBatch,
  gsap,
  ScrollTrigger,
} from './useGSAP';
export type { ScrollRevealOptions, ParallaxOptions } from './useGSAP';
