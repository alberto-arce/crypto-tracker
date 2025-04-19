'use client';

import { useState } from 'react';
import { CryptoGrid } from '@/components/crypto-grid';
import { CryptoGridSkeleton } from '@/components/crypto-grid-skeleton';
import { Pagination } from '@/components/pagination';
import { ErrorMessage } from '@/components/error-message';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { useCryptocurrencies } from '@/lib/hooks/useCryptocurrencies';
import { useSearch } from '@/lib/hooks/useSearch';

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
      <Header />
      <div className="container mx-auto px-4 py-6 md:py-8">
        <HeroSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        {isLoading ? (
          <CryptoGridSkeleton count={6} />
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
