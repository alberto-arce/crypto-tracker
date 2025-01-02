import { ChevronsLeft, ChevronsRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PageShortcutsProps {
  onFirstPage: () => void;
  onLastPage: () => void;
  isFirstPage: boolean;
  isLoading: boolean;
}

export function PageShortcuts({
  onFirstPage,
  onLastPage,
  isFirstPage,
  isLoading,
}: PageShortcutsProps) {
  return (
    <div className="flex gap-2">
      <Button
        variant="outline"
        size="sm"
        onClick={onFirstPage}
        disabled={isFirstPage || isLoading}
        title="Go to first page"
      >
        <ChevronsLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={onLastPage}
        disabled={isLoading}
        title="Go to last page"
      >
        <ChevronsRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
