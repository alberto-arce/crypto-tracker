'use client';

import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PageShortcuts } from './page-shortcuts';

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  hasMore: boolean;
  isLoading?: boolean;
}

export function Pagination({
  currentPage,
  onPageChange,
  hasMore,
  isLoading = false,
}: PaginationProps) {
  const handleLastPage = () => {
    // Since we don't know the exact last page, we'll use a large number
    // The API will return the last available page of results
    onPageChange(100);
  };

  return (
    <div className="flex items-center justify-center gap-4 mt-8">
      <PageShortcuts
        onFirstPage={() => onPageChange(1)}
        onLastPage={handleLastPage}
        isFirstPage={currentPage === 1}
        isLoading={isLoading}
      />
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1 || isLoading}
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>
        <span className="text-sm text-muted-foreground">
          Page {currentPage}
        </span>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={!hasMore || isLoading}
        >
          Next
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );
}
