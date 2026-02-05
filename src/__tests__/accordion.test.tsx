/// <reference types="vitest" />
import { render, screen, fireEvent } from '@testing-library/react';
import { Accordion } from '@/common/components';

const items = [
  { q: 'First question?', a: 'First answer.' },
  { q: 'Second question?', a: 'Second answer.' },
];

describe('Accordion', () => {
  test('renders all question buttons', () => {
    render(<Accordion items={items} idPrefix="test" />);
    expect(screen.getByRole('button', { name: /First question\?/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Second question\?/i })).toBeInTheDocument();
  });

  test('expands panel when question is clicked', () => {
    render(<Accordion items={items} idPrefix="test" />);
    const btn = screen.getByRole('button', { name: /First question\?/i });
    expect(btn).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(btn);
    expect(btn).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText('First answer.')).toBeInTheDocument();
  });

  test('collapses panel when same question is clicked again', () => {
    render(<Accordion items={items} idPrefix="test" />);
    const btn = screen.getByRole('button', { name: /First question\?/i });
    fireEvent.click(btn);
    expect(btn).toHaveAttribute('aria-expanded', 'true');
    fireEvent.click(btn);
    expect(btn).toHaveAttribute('aria-expanded', 'false');
  });
});
