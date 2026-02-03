import { useState, useEffect, useRef } from 'react';

// Cache matchMedia query result to avoid repeated queries
const getReducedMotionPreference = (() => {
  let cachedValue: boolean | null = null;
  return () => {
    if (cachedValue === null) {
      cachedValue = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return cachedValue;
  };
})();

/**
 * Hook that animates a number from its previous value to the target value
 * @param targetValue - The value to animate towards
 * @param duration - Animation duration in milliseconds (default: 400ms)
 * @returns The current animated value
 */
export function useAnimatedNumber(targetValue: number, duration: number = 400): number {
  const [displayValue, setDisplayValue] = useState(targetValue);
  const previousValue = useRef(targetValue);
  const animationRef = useRef<number>();

  useEffect(() => {
    const startValue = previousValue.current;
    const difference = targetValue - startValue;

    // Skip animation if no change or if reduced motion is preferred
    if (difference === 0) return;

    if (getReducedMotionPreference()) {
      setDisplayValue(targetValue);
      previousValue.current = targetValue;
      return;
    }

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const currentValue = startValue + difference * easeOut;
      setDisplayValue(currentValue);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        previousValue.current = targetValue;
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [targetValue, duration]);

  return displayValue;
}
