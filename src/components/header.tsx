import { ModeToggle } from "@/components/mode-toggle";

export function Header() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <h1 className="text-xl font-bold">Crypto Tracker</h1>
        <ModeToggle />
      </div>
    </nav>
  );
}
