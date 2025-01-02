import { NEXT_PUBLIC_COINGECKO_API } from '@/config/env';

export async function getCryptocurrencies(page = 1, perPage = 50) {
  try {
    const response = await fetch(
      `${NEXT_PUBLIC_COINGECKO_API}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=true`,
      {
        next: { revalidate: 60 },
        headers: {
          Accept: 'application/json',
        },
      },
    );

    if (!response.ok) {
      throw new Error('Failed to fetch cryptocurrencies');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching cryptocurrencies:', error);
    return [];
  }
}
