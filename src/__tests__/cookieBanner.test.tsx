/// <reference types="vitest" />
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CookieBanner } from '@/components';

describe('CookieBanner localStorage fallback', () => {
  test('shows banner when localStorage.getItem throws and focuses accept button', async () => {
    const original = window.localStorage;

    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: () => {
          throw new Error('storage unavailable');
        },
        setItem: () => {
          throw new Error('storage unavailable');
        },
      },
      configurable: true,
    });

    try {
      render(
        <BrowserRouter>
          <CookieBanner />
        </BrowserRouter>
      );

      const acceptBtn = await screen.findByText('Accept');
      await waitFor(() => expect(document.activeElement).toBe(acceptBtn));

      // Clicking accept should not throw even if setItem fails
      fireEvent.click(acceptBtn);
      await waitFor(() => expect(screen.queryByText('Accept')).not.toBeInTheDocument());
    } finally {
      Object.defineProperty(window, 'localStorage', { value: original });
    }
  });
});
