import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { BrowserRouter } from 'react-router-dom';
import Accordion from '../Accordion';
import Header from '../Header';

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
  });
});
