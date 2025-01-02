import { render, screen } from '@testing-library/react';
import { CryptoCard } from '@/components/crypto-card';
import { describe, it, expect } from 'vitest';

const mockCrypto = {
  id: 'bitcoin',
  symbol: 'btc',
  name: 'Bitcoin',
  image: 'https://example.com/bitcoin.png',
  current_price: 50000,
  market_cap: 1000000000000,
  market_cap_rank: 1,
  price_change_percentage_24h: 5.5,
  sparkline_in_7d: { price: [49000, 50000, 51000] },
};

describe('CryptoCard', () => {
  it('renders cryptocurrency information correctly', () => {
    render(<CryptoCard crypto={mockCrypto} />);

    expect(screen.getByText('Bitcoin')).toBeInTheDocument();
    expect(screen.getByText('btc')).toBeInTheDocument();
    expect(screen.getByText('$50,000')).toBeInTheDocument();
    expect(screen.getByText('5.50%')).toBeInTheDocument();
    expect(screen.getByText('Market Cap Rank: #1')).toBeInTheDocument();
  });

  it('shows fallback when image fails to load', async () => {
    render(<CryptoCard crypto={{ ...mockCrypto, image: 'invalid-url' }} />);

    const img = screen.getByRole('img');
    img.dispatchEvent(new Event('error'));

    expect(screen.getByText('BT')).toBeInTheDocument();
  });
});
