import { renderHook, act } from '@testing-library/react';
import { useSearch } from '@/lib/hooks/useSearch';
import { describe, it, expect } from 'vitest';

const mockCryptos = [
  { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC' },
  { id: 'ethereum', name: 'Ethereum', symbol: 'ETH' },
] as any[];

describe('useSearch', () => {
  it('filters cryptocurrencies based on search query', () => {
    const { result } = renderHook(() => useSearch(mockCryptos));

    act(() => {
      result.current.setSearchQuery('bitcoin');
    });

    expect(result.current.filteredCryptos).toHaveLength(1);
    expect(result.current.filteredCryptos[0].name).toBe('Bitcoin');
  });

  it('filters by symbol', () => {
    const { result } = renderHook(() => useSearch(mockCryptos));

    act(() => {
      result.current.setSearchQuery('eth');
    });

    expect(result.current.filteredCryptos).toHaveLength(1);
    expect(result.current.filteredCryptos[0].symbol).toBe('ETH');
  });
});
