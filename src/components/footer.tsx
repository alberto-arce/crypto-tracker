export function Footer() {
  return (
    <footer className="border-t py-6 text-center text-sm md:text-base text-muted-foreground bg-background">
      Data powered by{' '}
      <a
        href="https://www.coingecko.com/en/api"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-primary"
      >
        CoinGecko API
      </a>{' '}
      — Free cryptocurrency data API.
    </footer>
  );
}
