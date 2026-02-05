/// <reference types="vitest" />
import { render, screen, fireEvent } from '@testing-library/react';
import FAQSection from '../modules/home/FAQSection';

describe('FAQSection', () => {
  test('renders FAQ title and search input', () => {
    render(<FAQSection />);
    expect(
      screen.getByRole('heading', { name: /Frequently Asked Questions/i })
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Search questions/i)).toBeInTheDocument();
  });

  test('search input updates value when typed', () => {
    render(<FAQSection />);
    const search = screen.getByRole('searchbox', { name: /Search FAQ/i });
    fireEvent.change(search, { target: { value: 'project' } });
    expect(search).toHaveValue('project');
  });

  test('shows "See all" when there are more than 5 questions', () => {
    render(<FAQSection />);
    expect(screen.getByRole('button', { name: /See all \(\d+ questions\)/i })).toBeInTheDocument();
  });
});
