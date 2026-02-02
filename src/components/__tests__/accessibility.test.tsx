import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import { BrowserRouter } from 'react-router-dom';
import Button from '../Button';
import Accordion from '../Accordion';
import Header from '../Header';

// Helper to wrap components that need Router context
const renderWithRouter = (ui: React.ReactElement) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe('Accessibility Tests', () => {
  describe('Button Component', () => {
    it('should not have accessibility violations', async () => {
      const { container } = render(<Button>Click me</Button>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should have proper ARIA attributes when disabled', async () => {
      const { container } = render(<Button disabled>Disabled Button</Button>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Accordion Component', () => {
    const mockItems = [
      { q: 'What is this?', a: 'This is an answer.' },
      { q: 'How does it work?', a: 'It works like this.' },
    ];

    it('should not have accessibility violations', async () => {
      const { container } = render(<Accordion items={mockItems} />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Header Component', () => {
    it('should not have accessibility violations', async () => {
      const { container } = renderWithRouter(<Header />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });

    it('should have a skip link', () => {
      const { getByText } = renderWithRouter(<Header />);
      const skipLink = getByText('Skip to main content');
      expect(skipLink).toBeInTheDocument();
      expect(skipLink).toHaveAttribute('href', '#main-content');
    });
  });
});
