import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { axe } from 'jest-axe';
import { BrowserRouter } from 'react-router-dom';
import { Accordion } from '@/common/components';
import { CookieBanner, Header } from '@/components';

const renderWithRouter = (ui: React.ReactElement) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe('Accessibility Tests', () => {
  describe('Accordion Component', () => {
    const mockItems = [
      { q: 'What is this?', a: 'This is an answer.' },
      { q: 'How does it work?', a: 'It works like this.' },
    ];

    test('should not have accessibility violations', async () => {
      const { container } = render(<Accordion items={mockItems} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    test('toggles aria-hidden on panels when opened/closed', () => {
      render(<Accordion items={mockItems} />);
      const panels = screen.getAllByRole('region', { hidden: true });
      expect(panels[0]).toHaveAttribute('aria-hidden', 'true');

      const btn = screen.getByText('What is this?');
      fireEvent.click(btn);
      expect(panels[0]).toHaveAttribute('aria-hidden', 'false');

      fireEvent.click(btn);
      expect(panels[0]).toHaveAttribute('aria-hidden', 'true');
    });
  });

  describe('Header Component', () => {
    test('should not have accessibility violations', async () => {
      const { container } = renderWithRouter(<Header />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    test('should have a skip link', () => {
      renderWithRouter(<Header />);
      const skipLink = screen.getByText('Skip to main content');
      expect(skipLink).toBeInTheDocument();
      expect(skipLink).toHaveAttribute('href', '#main-content');
    });

    test('mobile menu focuses first link on open and returns focus to button on close', async () => {
      renderWithRouter(<Header />);

      const menuBtn = screen.getByLabelText('Open menu');
      fireEvent.click(menuBtn);

      // First mobile link should receive focus when opened
      await waitFor(() => {
        expect(document.activeElement?.textContent).toContain('Intro');
      });

      // Close the menu and expect focus to return to the toggle button
      fireEvent.click(menuBtn);
      await waitFor(() => expect(document.activeElement).toBe(menuBtn));
    });
  });

  describe('Cookie Banner', () => {
    test('accept button is focused when banner appears', async () => {
      // Ensure no consent in storage
      localStorage.removeItem('cookie-consent');

      renderWithRouter(<CookieBanner />);

      const acceptBtn = await screen.findByText('Accept');
      await waitFor(() => expect(document.activeElement).toBe(acceptBtn));
    });
  });
});
