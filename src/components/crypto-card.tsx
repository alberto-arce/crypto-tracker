'use client';

import { Card } from '@/components/ui/card';
import { PriceChange } from '@/components/ui/price-change';
import { Cryptocurrency } from '@/lib/types';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import Image from 'next/image';
import { useState } from 'react';
import { formatCurrency } from '@/lib/utils';

interface CryptoCardProps {
  crypto: Cryptocurrency;
}

export function CryptoCard({ crypto }: CryptoCardProps) {
  const [imageError, setImageError] = useState(false);

  const chartData = crypto.sparkline_in_7d.price.map((price) => ({
    value: price,
  }));

  const priceChange = crypto.price_change_percentage_24h;
  const isPositive = priceChange > 0;

  const imageSrc = crypto.image.startsWith('http')
    ? crypto.image
    : 'https://via.placeholder.com/40';

  return (
    <Card className="p-4 md:p-6 hover:shadow-lg transition-shadow">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center gap-3 md:gap-4">
          {!imageError ? (
            <Image
              src={imageSrc}
              alt={`${crypto.name} logo`}
              width={40}
              height={40}
              className="rounded-full"
              priority={false}
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
              <span className="text-sm font-medium uppercase">
                {crypto.symbol.slice(0, 2)}
              </span>
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-base md:text-lg truncate">
              {crypto.name}
            </h3>
            <span className="text-xs md:text-sm text-muted-foreground uppercase">
              {crypto.symbol}
            </span>
          </div>
          <PriceChange value={priceChange} />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between items-baseline">
            <span className="text-sm text-muted-foreground">Price</span>
            <span className="font-semibold">
              {formatCurrency(crypto.current_price)}
            </span>
          </div>

          <div className="flex justify-between items-baseline">
            <span className="text-sm text-muted-foreground">Market Cap</span>
            <span className="font-semibold">
              {formatCurrency(crypto.market_cap)}
            </span>
          </div>
        </div>

        <div className="h-[60px] w-full mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <Line
                type="monotone"
                dataKey="value"
                stroke={
                  isPositive ? 'hsl(var(--chart-1))' : 'hsl(var(--destructive))'
                }
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
}
