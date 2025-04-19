'use client';

import Link from "next/link";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Something went wrong</h2>
        <p className="text-lg md:text-2xl text-muted-foreground mb-6">
          {error?.message || "An unexpected error occurred. Please try again."}
        </p>
        <div className="flex gap-4 justify-center">
          <Button onClick={() => reset()} className="text-base">
            Try Again
          </Button>
          <Button asChild variant="secondary" className="text-base">
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
