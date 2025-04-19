import { SearchBar } from "@/components/search-bar";

interface HeroSectionProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export function HeroSection({ searchQuery, setSearchQuery }: HeroSectionProps) {
  return (
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
  );
}
