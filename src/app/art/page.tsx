import Header from "@/components/Header";
import IdeaPalettePicker from "@/components/IdeaPalettePicker";
import PortfolioArchive from "@/components/PortfolioArchive";

export default function ArtPage() {
  return (
    <div className="min-h-screen bg-[#f7f3e8] text-stone-950">
      <Header />
      <main className="ideas-page">
        <IdeaPalettePicker />
        <PortfolioArchive />
      </main>
    </div>
  );
}
