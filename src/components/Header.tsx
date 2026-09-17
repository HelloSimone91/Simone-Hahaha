import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-[#f6eedb]/90 backdrop-blur-md border-b-[3px] border-stone-900 shadow-[4px_4px_0_0_#20172c]">
      <Link href="/" className="text-xl font-bold tracking-tight uppercase hover:-translate-y-1 hover:shadow-none transition-all border-2 border-transparent hover:border-stone-900 p-1">
        SIMONE!
      </Link>
      <nav className="hidden sm:flex items-center gap-8 text-sm font-black uppercase tracking-widest">
        <Link href="/#work" className="hover:-translate-y-1 hover:text-stone-500 transition-all">
          work
        </Link>
        <Link href="/ideas.html" className="hover:-translate-y-1 hover:text-stone-500 transition-all">
          idea corner
        </Link>
        <Link href="/#about" className="hover:-translate-y-1 hover:text-stone-500 transition-all">
          about
        </Link>
        <Link href="/contact.html" className="hover:-translate-y-1 transition-all flex items-center gap-1 border-2 border-stone-900 px-3 py-1 bg-brand-yellow hover:bg-brand-pink shadow-[2px_2px_0_0_#20172c]">
          say hi ↗
        </Link>
      </nav>
      {/* Mobile menu could go here, but hiding for simplicity like a typical portfolio */}
    </header>
  );
}
