'use client';

import { useState, useEffect } from 'react';
import { Cryptocurrency } from '@/lib/types';

export function useSearch(cryptocurrencies: Cryptocurrency[]) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCryptos, setFilteredCryptos] = useState<Cryptocurrency[]>([]);

  useEffect(() => {
    const filtered = cryptocurrencies.filter(
      (crypto) =>
        crypto.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setFilteredCryptos(filtered);
  }, [searchQuery, cryptocurrencies]);

  return { searchQuery, setSearchQuery, filteredCryptos };
}
