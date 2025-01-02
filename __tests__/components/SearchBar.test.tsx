import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from '@/components/search-bar';
import { describe, it, expect, vi } from 'vitest';

describe('SearchBar', () => {
  it('renders search input', () => {
    const onChange = vi.fn();
    render(<SearchBar value="initial" onChange={onChange} />);

    expect(
      screen.getByPlaceholderText('Search cryptocurrencies...'),
    ).toBeInTheDocument();
  });

  it('calls onChange when input value changes', () => {
    const onChange = vi.fn();
    render(<SearchBar value="" onChange={onChange} />);

    const input = screen.getByPlaceholderText('Search cryptocurrencies...'); // Use getBy instead of getAllBy
    fireEvent.change(input, { target: { value: 'bitcoin' } });

    expect(onChange).toHaveBeenCalledWith('bitcoin');
  });
});
