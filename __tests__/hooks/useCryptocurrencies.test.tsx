import { renderHook, waitFor } from '@testing-library/react';
import { useCryptocurrencies } from '@/lib/hooks/useCryptocurrencies';
import { describe, it, expect } from 'vitest';

describe('useCryptocurrencies', () => {
  it('fetches cryptocurrencies successfully', async () => {
    const { result } = renderHook(() => useCryptocurrencies(1, 50));

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.cryptocurrencies).toHaveLength(1);
    expect(result.current.error).toBeNull();
    expect(result.current.hasMore).toBe(false);
  });
});
