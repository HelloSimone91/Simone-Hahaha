
export default function Footer() {
  return (
    <footer className="border-t border-stone-200 mt-24 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-lg">Simone Michelle DeAngelis</span>
          <span className="text-stone-500 text-sm">Made with curiosity + conviction</span>
        </div>
        <a
          href="#top"
          className="text-sm font-medium hover:text-stone-500 transition-colors flex items-center gap-1"
        >
          back to top ↑
        </a>
      </div>
    </footer>
  );
}
