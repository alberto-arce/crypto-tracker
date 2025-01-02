'use client';

import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PriceChangeProps {
  value: number;
  className?: string;
}

export function PriceChange({ value, className }: PriceChangeProps) {
  const isPositive = value > 0;

  return (
    <div
      className={cn(
        'flex items-center gap-1 text-sm font-medium',
        isPositive ? 'text-green-500' : 'text-red-500',
        className,
      )}
    >
      {isPositive ? (
        <ArrowUpIcon className="h-4 w-4" />
      ) : (
        <ArrowDownIcon className="h-4 w-4" />
      )}
      <span>{Math.abs(value).toFixed(2)}%</span>
    </div>
  );
}
