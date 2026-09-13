import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-md border-b border-stone-200/50">
      <Link href="/" className="text-xl font-bold tracking-tight uppercase hover:opacity-80 transition-opacity">
        SIMONE!
      </Link>
      <nav className="hidden sm:flex items-center gap-8 text-sm font-medium">
        <Link href="/#work" className="hover:text-stone-500 transition-colors">
          work
        </Link>
        <Link href="/ideas.html" className="hover:text-stone-500 transition-colors">
          idea corner
        </Link>
        <Link href="/#about" className="hover:text-stone-500 transition-colors">
          about
        </Link>
        <Link href="/#contact" className="hover:text-stone-500 transition-colors flex items-center gap-1">
          say hi ↗
        </Link>
      </nav>
      {/* Mobile menu could go here, but hiding for simplicity like a typical portfolio */}
    </header>
  );
}
