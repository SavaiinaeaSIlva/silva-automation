/// <reference types="vitest" />
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';

describe('Main sections render', () => {
  test('renders hero and main sections', async () => {
    render(<App />);

    // Check immediately loaded sections
    expect(
      screen.getByRole('heading', { name: /Workflow Automation For Hawaii/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /The Challenge & Our Solution/i })
    ).toBeInTheDocument();

    // Wait for lazy-loaded sections to appear
    await waitFor(
      () => {
        expect(screen.getByRole('heading', { name: /Pay Once/i })).toBeInTheDocument();
      },
      { timeout: 5000 }
    );

    await waitFor(
      () => {
        expect(screen.getByRole('heading', { name: /Calculator/i })).toBeInTheDocument();
      },
      { timeout: 5000 }
    );
  });
});
