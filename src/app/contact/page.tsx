import Header from "../../components/Header";

const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdnS710tTFREy17xr_Ygs-PVcesCfQnA7b1rseMeYChw_PsRQ/viewform?embedded=true";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-brand-yellow px-4 py-10 sm:px-6 sm:py-16">
        <section className="mx-auto max-w-3xl border-[3px] border-stone-900 bg-white p-5 shadow-[10px_10px_0_0_#1a1a1a] sm:p-10">
          <p className="font-mono text-xs font-black uppercase tracking-widest text-stone-500">Say hi</p>
          <h1 className="mt-4 text-5xl font-black leading-none tracking-tight text-stone-900 sm:text-7xl">Let&apos;s talk.</h1>
          <p className="mt-5 max-w-xl text-lg font-medium leading-relaxed text-stone-700">
            Send a note, share a thought, or join the email list. I read every response.
          </p>
          <iframe
            className="mt-8 min-h-[890px] w-full border-0"
            src={formUrl}
            title="Simone.lol contact form"
          >
            Loading…
          </iframe>
        </section>
      </main>
    </>
  );
}
