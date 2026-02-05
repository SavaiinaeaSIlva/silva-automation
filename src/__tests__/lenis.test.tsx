/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import React from 'react';
import { LenisProvider, useLenis } from '../core/LenisContext';

function TestComp() {
  const lenis = useLenis();
  return <div data-testid="lenis">{lenis === null ? 'null' : 'instance'}</div>;
}

test('LenisProvider returns null in test environment', () => {
  render(
    <LenisProvider>
      <TestComp />
    </LenisProvider>
  );
  expect(screen.getByTestId('lenis')).toHaveTextContent('null');
});
