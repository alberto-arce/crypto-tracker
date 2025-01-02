'use client';

import { useState } from 'react';
import { CryptoGrid } from '@/components/crypto-grid';
import { SearchBar } from '@/components/search-bar';
import { Pagination } from '@/components/pagination';
import { ErrorMessage } from '@/components/error-message';
import { useCryptocurrencies } from '@/lib/hooks/useCryptocurrencies';
import { useSearch } from '@/lib/hooks/useSearch';
import { ModeToggle } from '@/components/mode-toggle';

const ITEMS_PER_PAGE = 50;

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const { cryptocurrencies, isLoading, error, hasMore } = useCryptocurrencies(
    currentPage,
    ITEMS_PER_PAGE,
  );
  const { searchQuery, setSearchQuery, filteredCryptos } =
    useSearch(cryptocurrencies);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (error) {
    return (
      <ErrorMessage
        message={error}
        onRetry={() => handlePageChange(currentPage)}
      />
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <nav className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-xl font-bold">Crypto Tracker</h1>
          <ModeToggle />
        </div>
      </nav>

      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="mb-6 md:mb-8 space-y-4">
          <div className="text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">
              Cryptocurrency Prices
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Track real-time prices and trends of top cryptocurrencies
            </p>
          </div>

          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            className="max-w-2xl mx-auto"
          />
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        ) : (
          <>
            <CryptoGrid cryptocurrencies={filteredCryptos} />
            {!searchQuery && (
              <div className="mt-8 flex justify-center">
                <Pagination
                  currentPage={currentPage}
                  hasMore={hasMore}
                  onPageChange={handlePageChange}
                />
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
