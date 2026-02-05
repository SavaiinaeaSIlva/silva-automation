/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import { LenisProvider, useLenis } from '@/core';

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
