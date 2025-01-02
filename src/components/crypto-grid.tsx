'use client';

import { Cryptocurrency } from '@/lib/types';
import { CryptoCard } from './crypto-card';

interface CryptoGridProps {
  cryptocurrencies: Cryptocurrency[];
}

export function CryptoGrid({ cryptocurrencies }: CryptoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cryptocurrencies.map((crypto) => (
        <CryptoCard key={crypto.id} crypto={crypto} />
      ))}
    </div>
  );
}
