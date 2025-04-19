'use client';

import { Card } from '@/components/ui/card';
import { PriceChange } from '@/components/ui/price-change';
import { Cryptocurrency } from '@/lib/types';
import { LineChart, Line, Area } from 'recharts';
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
    <Card className="p-4 md:p-6 shadow transition-transform duration-150 hover:scale-[1.025] hover:shadow-2xl group relative bg-background/90 animate-fade-in">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center gap-3 md:gap-4">
          {!imageError ? (
            <Image
              src={imageSrc}
              alt={`${crypto.name} logo`}
              width={40}
              height={40}
              className="rounded-full border border-muted shadow-sm"
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

        {/* Datos principales */}
        <div className="space-y-2 divide-y divide-muted border-t border-b border-muted/50 py-2">
          <div className="flex justify-between items-baseline pb-2">
            <span className="text-xs text-muted-foreground">Rank</span>
            <span className="font-semibold">#{crypto.market_cap_rank}</span>
          </div>
          <div className="flex justify-between items-baseline pt-2 pb-2">
            <span className="text-xs text-muted-foreground">Price</span>
            <span className="font-semibold text-right tabular-nums">{formatCurrency(crypto.current_price)}</span>
          </div>
          <div className="flex justify-between items-baseline pt-2 pb-2">
            <span className="text-xs text-muted-foreground">Market Cap</span>
            <span className="font-semibold text-right tabular-nums">{formatCurrency(crypto.market_cap)}</span>
          </div>
          <div className="flex justify-between items-baseline pt-2 pb-2">
            <span className="text-xs text-muted-foreground">Volumen 24h</span>
            <span className="font-semibold text-right tabular-nums">{formatCurrency(crypto.total_volume)}</span>
          </div>
          <div className="flex justify-between items-baseline pt-2 pb-2">
            <span className="text-xs text-muted-foreground">Máx/Mín 24h</span>
            <span className="font-semibold text-right tabular-nums">{formatCurrency(crypto.high_24h)} / {formatCurrency(crypto.low_24h)}</span>
          </div>
          <div className="flex justify-between items-baseline pt-2">
            <span className="text-xs text-muted-foreground">ATH</span>
            <span className="font-semibold text-right tabular-nums">{formatCurrency(crypto.ath)} ({crypto.ath_change_percentage > 0 ? '+' : ''}{crypto.ath_change_percentage?.toFixed(1)}%)</span>
          </div>
        </div>

        {/* Sparkline */}
        <div className="h-20 w-full mt-2 flex items-center justify-center rounded bg-muted/40">
          <LineChart width={220} height={60} data={chartData} margin={{ top: 8, right: 12, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id={`colorSparkline${crypto.id}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={isPositive ? '#22c55e' : '#ef4444'} stopOpacity={0.18} />
                <stop offset="100%" stopColor={isPositive ? '#22c55e' : '#ef4444'} stopOpacity={0.01} />
              </linearGradient>
            </defs>
            <Line
              type="monotone"
              dataKey="value"
              stroke={isPositive ? '#22c55e' : '#ef4444'}
              strokeWidth={2}
              dot={false}
              isAnimationActive={true}
              animationDuration={600}
              fill={`url(#colorSparkline${crypto.id})`}
              fillOpacity={0.2}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke={undefined}
              fill={`url(#colorSparkline${crypto.id})`}
            />
          </LineChart>
        </div>
      </div>
      {/* Detalles en hover */}
      <div className="absolute inset-0 bg-background/95 rounded-lg shadow-lg p-4 flex flex-col justify-center items-center opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity z-10">
        <div className="text-xs md:text-sm text-muted-foreground mb-2">Details</div>
        <div className="text-center space-y-1">
          <div>Circulating supply: <span className="font-semibold">{crypto.circulating_supply?.toLocaleString()} {crypto.symbol.toUpperCase()}</span></div>
          <div>Max supply: <span className="font-semibold">{crypto.max_supply ? crypto.max_supply.toLocaleString() : '—'} {crypto.symbol.toUpperCase()}</span></div>
          <div>Last updated: <span className="font-semibold">{new Date(crypto.last_updated).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })} UTC</span></div>
        </div>
      </div>
    </Card>
  );
}
