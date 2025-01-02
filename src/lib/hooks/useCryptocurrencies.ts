'use client';

import { useState, useEffect } from 'react';
import { getCryptocurrencies } from '@/lib/api';
import { Cryptocurrency } from '@/lib/types';

export function useCryptocurrencies(page: number, perPage: number) {
  const [cryptocurrencies, setCryptocurrencies] = useState<Cryptocurrency[]>(
    [],
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getCryptocurrencies(page, perPage);
        setCryptocurrencies(data);
        setHasMore(data.length === perPage);
      } catch (err) {
        setError('Failed to fetch cryptocurrencies. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCryptos();
  }, [page, perPage]);

  return { cryptocurrencies, isLoading, error, hasMore };
}
