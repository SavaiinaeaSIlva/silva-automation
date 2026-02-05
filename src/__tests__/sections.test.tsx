/// <reference types="vitest" />
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';

describe('Main sections render', () => {
  test('renders hero and main sections', async () => {
    render(<App />);

    // Check immediately loaded sections - hero uses logo image, not text heading
    const logos = screen.getAllByRole('img', { name: /Silva Automation/i });
    expect(logos.length).toBeGreaterThanOrEqual(1);
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
  }, 12000);
});
