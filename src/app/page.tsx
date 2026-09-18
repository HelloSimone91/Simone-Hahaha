import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="top" className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col">

        {/* HERO SECTION */}
        <section className="hero-with-portrait">
          <div className="hero-copy">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium tracking-wide uppercase text-stone-500">
                Austin, Texas · curious human making things
              </span>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-[1.05]">
                Making things<br />out loud.
              </h1>
            </div>
            <div className="max-w-2xl mt-4">
              <p className="text-lg sm:text-xl md:text-2xl font-medium leading-relaxed text-stone-800">
                Hi, I’m Simone. I make things about values, behavior, and being a person. I think values-based living could save us all.
              </p>
            </div>
          </div>
          <div className="hero-portrait" aria-hidden="true">
            <Image
              src="/glow-simone.png"
              alt=""
              width={1122}
              height={1402}
              priority
            />
          </div>
        </section>

        {/* MARQUEE SECTION (Values are verbs) */}
        <section className="bg-stone-900 text-stone-100 py-6 overflow-hidden border-y border-stone-800 relative w-full">
          {/* Subtle label */}
          <div className="absolute top-0 left-0 bg-brand-pink text-stone-900 text-xs font-bold uppercase px-3 py-1 z-10 hidden sm:block">
            Values are verbs.
          </div>

          <div className="flex whitespace-nowrap overflow-hidden items-center group cursor-default">
            <div className="animate-marquee flex items-center text-xl sm:text-2xl lg:text-3xl font-medium tracking-wider uppercase group-hover:[animation-play-state:paused]">
              <span className="mx-4">listen</span> <span className="text-brand-pink">✷</span>
              <span className="mx-4">build</span> <span className="text-brand-green">✷</span>
              <span className="mx-4">notice</span> <span className="text-brand-blue">✷</span>
              <span className="mx-4">question</span> <span className="text-brand-yellow">✷</span>
              <span className="mx-4">repair</span> <span className="text-brand-pink">✷</span>
              <span className="mx-4">play</span> <span className="text-brand-green">✷</span>

              <span className="mx-4">listen</span> <span className="text-brand-pink">✷</span>
              <span className="mx-4">build</span> <span className="text-brand-green">✷</span>
              <span className="mx-4">notice</span> <span className="text-brand-blue">✷</span>
              <span className="mx-4">question</span> <span className="text-brand-yellow">✷</span>
              <span className="mx-4">repair</span> <span className="text-brand-pink">✷</span>
              <span className="mx-4">play</span> <span className="text-brand-green">✷</span>
            </div>
          </div>
        </section>

        {/* WORK SECTION */}
        <section id="work" className="px-6 py-24 sm:py-32 max-w-[1400px] mx-auto w-full">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 items-start mb-16">
            <span className="text-sm font-medium tracking-wide uppercase text-stone-500 whitespace-nowrap pt-2">
              Current work / always becoming
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-balance leading-tight">
              Things I’m<br />working on
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Project 1 */}
            <a href="https://www.valuesinthewild.com/" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0_0_#1a1a1a] transition-all cursor-pointer flex flex-col gap-6 items-start group h-full bg-brand-green border-[3px] border-stone-900 p-6 justify-between">
              <div className="w-full flex flex-col gap-2">
                <span className="text-stone-900 font-mono font-bold text-lg">01</span>
                <span className="text-sm font-medium uppercase tracking-wide text-stone-500">Living philosophy / daily practice</span>
              </div>
              <div className="w-full flex flex-col gap-6 flex-1">
                <h3 className="text-3xl sm:text-4xl font-bold lowercase font-black text-stone-900 leading-none">Values in the Wild</h3>
                <p className="text-lg sm:text-xl text-stone-700 leading-relaxed text-balance">
                  A growing body of work about turning values from lofty nouns into observable verbs — and using that practice to build clarity, empathy, and connection.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white border-2 border-stone-900 text-xs font-black uppercase tracking-wider">notice</span>
                  <span className="px-3 py-1 bg-white border-2 border-stone-900 text-xs font-black uppercase tracking-wider">name</span>
                  <span className="px-3 py-1 bg-white border-2 border-stone-900 text-xs font-black uppercase tracking-wider">practice</span>
                </div>

              </div>
            </a>

            {/* Project 2 */}
            <a href="https://www.howdyhuman.com/" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0_0_#1a1a1a] transition-all cursor-pointer flex flex-col gap-6 items-start group h-full bg-brand-pink border-[3px] border-stone-900 p-6 justify-between">
              <div className="w-full flex flex-col gap-2">
                <span className="text-stone-900 font-mono font-bold text-lg">02</span>
                <span className="text-sm font-medium uppercase tracking-wide text-stone-500">Ideas / experiments / useful things</span>
              </div>
              <div className="w-full flex flex-col gap-6 flex-1">
                <h3 className="text-3xl sm:text-4xl font-bold lowercase font-black text-stone-900 leading-none">Howdy Human</h3>
                <p className="text-lg sm:text-xl text-stone-700 leading-relaxed text-balance">
                  A home for human-centered experiments: making life more intentional, more livable, and a little less weird to navigate alone.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white border-2 border-stone-900 text-xs font-black uppercase tracking-wider">question</span>
                  <span className="px-3 py-1 bg-white border-2 border-stone-900 text-xs font-black uppercase tracking-wider">make</span>
                  <span className="px-3 py-1 bg-white border-2 border-stone-900 text-xs font-black uppercase tracking-wider">connect</span>
                </div>

              </div>
            </a>

            {/* Project 3 */}
            <a href="https://www.thingsgetweird.com/" target="_blank" rel="noopener noreferrer" className="hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0_0_#1a1a1a] transition-all cursor-pointer flex flex-col gap-6 items-start group h-full bg-brand-blue border-[3px] border-stone-900 p-6 justify-between">
              <div className="w-full flex flex-col gap-2">
                <span className="text-stone-900 font-mono font-bold text-lg">03</span>
                <span className="text-sm font-medium uppercase tracking-wide text-stone-500">Stories / curiosity / conversation</span>
              </div>
              <div className="w-full flex flex-col gap-6 flex-1">
                <h3 className="text-3xl sm:text-4xl font-bold lowercase font-black text-stone-900 leading-none">Things Get Weird</h3>
                <p className="text-lg sm:text-xl text-stone-700 leading-relaxed text-balance">
                  A place for the strange turns, honest questions, and unexpected connections that show up when we pay attention to being human.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white border-2 border-stone-900 text-xs font-black uppercase tracking-wider">wonder</span>
                  <span className="px-3 py-1 bg-white border-2 border-stone-900 text-xs font-black uppercase tracking-wider">listen</span>
                  <span className="px-3 py-1 bg-white border-2 border-stone-900 text-xs font-black uppercase tracking-wider">laugh</span>
                </div>

              </div>
            </a>

            {/* Project 4 */}
            <a href="/ideas.html" id="ideas" className="hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0_0_#1a1a1a] transition-all cursor-pointer flex flex-col gap-6 items-start group h-full bg-brand-yellow border-[3px] border-stone-900 p-6 justify-between">
              <div className="w-full flex flex-col gap-2">
                <span className="text-stone-900 font-mono font-bold text-lg">04+</span>
                <span className="text-sm font-medium uppercase tracking-wide text-stone-500">Ideas / art / unfinished things</span>
              </div>
              <div className="w-full flex flex-col gap-6 flex-1">
                <h3 className="text-3xl sm:text-4xl font-bold lowercase font-black text-stone-900 leading-none">Idea Corner</h3>
                <p className="text-lg sm:text-xl text-stone-700 leading-relaxed text-balance">
                  A living shelf for ideas I’m exploring, projects that are still simmering, and art I want to keep where I can see it.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white border-2 border-stone-900 text-xs font-black uppercase tracking-wider">collect</span>
                  <span className="px-3 py-1 bg-white border-2 border-stone-900 text-xs font-black uppercase tracking-wider">play</span>
                  <span className="px-3 py-1 bg-white border-2 border-stone-900 text-xs font-black uppercase tracking-wider">imagine</span>
                </div>

              </div>
            </a>

          </div>
        </section>

        {/* PHILOSOPHY SECTION */}
        <section className="bg-brand-yellow/30 py-24 sm:py-32 px-6">
          <div className="max-w-4xl mx-auto flex flex-col gap-10 items-center text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-stone-500">The thread through all of it</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-stone-900 leading-tight">
              What do our actions<br/>tell us we value?
            </h2>
            <p className="text-lg sm:text-xl text-stone-700 max-w-2xl text-balance font-medium leading-relaxed">
              Our actions are always telling us something. When we listen honestly and objectively, we can practice future-self collaboration by making more intentional choices about what comes next.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 bg-white p-8 rounded-2xl shadow-sm border border-stone-100 w-full max-w-md">
              <span className="text-xs font-black uppercase tracking-widest text-stone-400">DO NEXT →</span>
              <span className="font-bold text-xl">What is one verb you did today?</span>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="bg-brand-pink border-t-[3px] border-stone-900 w-full relative">
          <div className="flex flex-col lg:flex-row w-full min-h-screen">

            {/* Left Side */}
            <div className="w-full lg:w-[45%] lg:border-r-[3px] border-stone-900 p-6 lg:p-16 xl:p-24 flex flex-col gap-6 lg:sticky lg:top-0 lg:h-screen justify-start">
              <span className="text-sm font-black tracking-widest uppercase text-stone-900">ABOUT ME</span>
              <h2 className="text-[4rem] sm:text-[6rem] lg:text-[7rem] xl:text-[8rem] font-bold tracking-tighter leading-[0.85] text-stone-900 uppercase">
                HUMAN<br/>FIRST.<br/>
                <span className="text-[#C18AE8] italic font-serif tracking-normal lowercase">Always.</span>
              </h2>
            </div>

            {/* Right Side */}
            <div className="w-full lg:w-[55%] p-6 lg:p-16 xl:p-24 flex flex-col gap-16">

              <div className="flex flex-col gap-8 text-stone-900">
                <p className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                  I grew up in Austin as the fourth of five children — and eventually the seventh of eight. A full house taught me how to read a room, make space for different personalities, and find connection across a lot of noise.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg font-medium leading-relaxed">
                  <p>
                    Family gave me a front-row seat to the beauty, friction, humor, and chaotic magic of being human. It also made me curious about the forces that shape us: belonging, belief, responsibility, freedom, and love.
                  </p>
                  <p>
                    I spent years trying to live inside other people’s idea of “on the right track.” Real direction started when I stopped asking where I could fit and started asking what kind of life I am actually here to build.
                  </p>
                </div>
              </div>

              {/* The Blueprint section */}
              <div className="flex flex-col w-full border-[3px] border-stone-900 bg-[#f4f1e1] shadow-[8px_8px_0_0_#1a1a1a]">

                <div className="bg-brand-yellow flex justify-between items-center px-6 py-3 border-b-[3px] border-stone-900">
                  <span className="text-xs font-black uppercase tracking-widest">THE BLUEPRINT</span>
                  <span className="text-xs font-black uppercase tracking-widest">USEFUL LENSES, NOT A CAGE</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2">

                  {/* ENFJ */}
                  <div className="p-6 md:p-8 flex flex-col gap-4 border-b-[3px] md:border-r-[3px] border-stone-900">
                    <h4 className="font-black text-lg uppercase tracking-wide">ENFJ</h4>
                    <p className="text-stone-800 font-medium leading-relaxed">I’m wired to notice people, possibilities, and the emotional weather in a room—then help turn connection into momentum.</p>
                  </div>

                  {/* Enneagram */}
                  <div className="p-6 md:p-8 flex flex-col gap-4 border-b-[3px] border-stone-900">
                    <h4 className="font-black text-lg uppercase tracking-wide">ENNEAGRAM 4W3</h4>
                    <p className="text-stone-800 font-medium leading-relaxed">I want what I make to feel unmistakably true and deeply personal, while still giving it enough shape to reach other people.</p>
                  </div>

                  {/* Human Design */}
                  <div className="p-6 md:p-8 flex flex-col gap-4 border-b-[3px] md:border-b-0 md:border-r-[3px] border-stone-900">
                    <h4 className="font-black text-lg uppercase tracking-wide">HUMAN DESIGN 2/4 GENERATOR</h4>
                    <p className="text-stone-800 font-medium leading-relaxed">I do my best work by responding to what genuinely lights me up, leaving room for solitude, and letting relationships open the right doors.</p>
                  </div>

                  {/* Astrological */}
                  <div className="p-6 md:p-8 flex flex-col gap-4">
                    <h4 className="font-black text-lg uppercase tracking-wide text-balance leading-tight">VIRGO SUN · TAURUS MOON · SCORPIO RISING</h4>
                    <p className="text-stone-800 font-medium leading-relaxed">Careful craft, a steady emotional core, and an instinct to look beneath the surface.</p>
                  </div>

                </div>

                <div className="bg-[#cba8ff] p-6 md:p-8 border-t-[3px] border-stone-900">
                  <p className="text-stone-900 text-lg leading-relaxed font-medium">
                    <span className="font-black">Fun astrological fact:</span> I was born with Mercury, Venus, Saturn, Uranus, and Neptune retrograde—which feels very on-brand for someone who rethinks everything, questions received wisdom, and cares a lot about living in alignment with real values.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section id="contact" className="px-6 py-24 sm:py-32 bg-stone-900 text-white text-center">
          <div className="max-w-2xl mx-auto flex flex-col items-center gap-8">
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight text-balance">
              I’m not chasing a perfect life.<br/>
              <span className="text-brand-yellow">I’m building an honest one.</span>
            </h2>
            <p className="text-lg text-stone-300">
              Have a thought, a question, or a delightfully weird idea?
            </p>
            <a
              href="/contact.html"
              className="mt-4 px-8 py-4 bg-white text-stone-900 font-bold rounded-full hover:bg-stone-200 transition-colors text-lg"
            >
              Let’s connect ↗
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
