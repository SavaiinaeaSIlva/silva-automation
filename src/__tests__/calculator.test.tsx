/// <reference types="vitest" />
import { render, screen, within } from '@testing-library/react';
import { CalculatorSection } from '@/modules/home';

describe('CalculatorSection', () => {
  test('renders calculator title and inputs', () => {
    render(<CalculatorSection />);
    expect(screen.getByRole('heading', { name: /Overhead Calculator/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Inputs/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Results/i })).toBeInTheDocument();
  });

  test('shows calculated results (monthly admin cost, yearly revenue leak, payback)', () => {
    render(<CalculatorSection />);
    expect(screen.getByText('Monthly admin cost')).toBeInTheDocument();
    expect(screen.getByText('Yearly revenue leak')).toBeInTheDocument();
    expect(screen.getByText('Payback period')).toBeInTheDocument();
    const resultsCard = screen
      .getByText('Monthly admin cost')
      .closest('div.glass-card') as HTMLElement | null;
    expect(resultsCard).toBeInTheDocument();
    const dollarAmounts = within(resultsCard!).getAllByText(/\$/);
    expect(dollarAmounts.length).toBeGreaterThanOrEqual(1);
  });
});
