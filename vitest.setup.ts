import { expect } from 'vitest';
import '@testing-library/jest-dom';
import { beforeAll, afterAll, afterEach } from 'vitest';
import { setupServer } from 'msw/node';
import { http } from 'msw';

const mockCryptoData = [
  {
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
    image: 'https://example.com/bitcoin.png',
    current_price: 50000,
    market_cap: 1000000000000,
    market_cap_rank: 1,
    price_change_percentage_24h: 5.5,
    sparkline_in_7d: { price: [49000, 50000, 51000] },
  },
];

global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};

process.env.NEXT_PUBLIC_COINGECKO_API = 'https://api.coingecko.com/api/v3';

export const server = setupServer(
  http.get('https://api.coingecko.com/api/v3/coins/markets*', () => {
    return new Response(JSON.stringify(mockCryptoData), {
      headers: { 'Content-Type': 'application/json' },
    });
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
