/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import React from 'react';
import ScrollingTextWall from '../components/ScrollingTextWall';

test('renders default lines and is resilient to reduced-motion preference', () => {
  // Simulate prefers-reduced-motion: reduce
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: query === '(prefers-reduced-motion: reduce)',
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => true,
    }),
  });

  render(<ScrollingTextWall />);

  // Default lines should be present (multiple instances due to scrolling pattern)
  expect(screen.getAllByText(/AUTOMATION/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/EFFICIENCY/i).length).toBeGreaterThan(0);
});
