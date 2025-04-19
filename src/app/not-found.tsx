'use client';

import Link from "next/link";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">404</h2>
        <p className="text-lg md:text-2xl text-muted-foreground mb-6">
          Oops! The page you're looking for does not exist.
        </p>
        <Button asChild className="text-base">
          <Link href="/">Go back home</Link>
        </Button>
      </div>
    </main>
  );
}
