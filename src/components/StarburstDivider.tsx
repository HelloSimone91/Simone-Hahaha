import StarburstMark from "./StarburstMark";

export default function StarburstDivider({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`flex items-center gap-4 px-6 py-8 ${className}`}>
      <span className="h-px flex-1 bg-brand-plum/30" />
      <StarburstMark className="starburst-spin h-7 w-7 shrink-0 text-stone-900" />
      <span className="h-px flex-1 bg-brand-plum/30" />
    </div>
  );
}
