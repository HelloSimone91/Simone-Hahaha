import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="top" className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col">

        {/* HERO SECTION */}
        <section className="px-6 pt-24 pb-20 sm:pt-32 sm:pb-32 max-w-5xl mx-auto w-full flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium tracking-wide uppercase text-stone-500">
              Austin, Texas · human, maker, question-asker
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
        <section id="work" className="px-6 py-24 sm:py-32 max-w-5xl mx-auto w-full">
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 items-start mb-16">
            <span className="text-sm font-medium tracking-wide uppercase text-stone-500 whitespace-nowrap pt-2">
              Current work / always becoming
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-balance leading-tight">
              Things I’m<br />working on
            </h2>
          </div>

          <div className="flex flex-col gap-12 sm:gap-24">

            {/* Project 1 */}
            <article className="flex flex-col md:flex-row gap-8 items-start group">
              <div className="md:w-1/3 flex flex-col gap-2">
                <span className="text-brand-green font-mono font-bold text-lg">01</span>
                <span className="text-sm font-medium uppercase tracking-wide text-stone-500">Living philosophy / daily practice</span>
              </div>
              <div className="md:w-2/3 flex flex-col gap-6">
                <h3 className="text-3xl sm:text-4xl font-bold">Values in the Wild</h3>
                <p className="text-lg sm:text-xl text-stone-700 leading-relaxed text-balance">
                  A growing body of work about turning values from lofty nouns into observable verbs — and using that practice to build clarity, empathy, and connection.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-semibold uppercase tracking-wider">notice</span>
                  <span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-semibold uppercase tracking-wider">name</span>
                  <span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-semibold uppercase tracking-wider">practice</span>
                </div>
                <a href="https://www.valuesinthewild.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold hover:text-stone-500 transition-colors w-max mt-2">
                  Visit the project ↗
                </a>
              </div>
            </article>

            {/* Project 2 */}
            <article className="flex flex-col md:flex-row gap-8 items-start group">
              <div className="md:w-1/3 flex flex-col gap-2">
                <span className="text-brand-pink font-mono font-bold text-lg">02</span>
                <span className="text-sm font-medium uppercase tracking-wide text-stone-500">Ideas / experiments / useful things</span>
              </div>
              <div className="md:w-2/3 flex flex-col gap-6">
                <h3 className="text-3xl sm:text-4xl font-bold">Howdy Human</h3>
                <p className="text-lg sm:text-xl text-stone-700 leading-relaxed text-balance">
                  A home for human-centered experiments: making life more intentional, more livable, and a little less weird to navigate alone.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-semibold uppercase tracking-wider">question</span>
                  <span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-semibold uppercase tracking-wider">make</span>
                  <span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-semibold uppercase tracking-wider">connect</span>
                </div>
                <a href="https://www.howdyhuman.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold hover:text-stone-500 transition-colors w-max mt-2">
                  Visit the project ↗
                </a>
              </div>
            </article>

            {/* Project 3 */}
            <article className="flex flex-col md:flex-row gap-8 items-start group">
              <div className="md:w-1/3 flex flex-col gap-2">
                <span className="text-brand-blue font-mono font-bold text-lg">03</span>
                <span className="text-sm font-medium uppercase tracking-wide text-stone-500">Stories / curiosity / conversation</span>
              </div>
              <div className="md:w-2/3 flex flex-col gap-6">
                <h3 className="text-3xl sm:text-4xl font-bold">Things Get Weird</h3>
                <p className="text-lg sm:text-xl text-stone-700 leading-relaxed text-balance">
                  A place for the strange turns, honest questions, and unexpected connections that show up when we pay attention to being human.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-semibold uppercase tracking-wider">wonder</span>
                  <span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-semibold uppercase tracking-wider">listen</span>
                  <span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-semibold uppercase tracking-wider">laugh</span>
                </div>
                <a href="https://www.thingsgetweird.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-bold hover:text-stone-500 transition-colors w-max mt-2">
                  Visit the project ↗
                </a>
              </div>
            </article>

            {/* Project 4 */}
            <article id="ideas" className="flex flex-col md:flex-row gap-8 items-start group">
              <div className="md:w-1/3 flex flex-col gap-2">
                <span className="text-brand-yellow font-mono font-bold text-lg">04+</span>
                <span className="text-sm font-medium uppercase tracking-wide text-stone-500">Ideas / art / unfinished things</span>
              </div>
              <div className="md:w-2/3 flex flex-col gap-6">
                <h3 className="text-3xl sm:text-4xl font-bold">Idea Corner</h3>
                <p className="text-lg sm:text-xl text-stone-700 leading-relaxed text-balance">
                  A living shelf for ideas I’m exploring, projects that are still simmering, and art I want to keep where I can see it.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-semibold uppercase tracking-wider">collect</span>
                  <span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-semibold uppercase tracking-wider">play</span>
                  <span className="px-3 py-1 bg-stone-100 rounded-full text-xs font-semibold uppercase tracking-wider">imagine</span>
                </div>
                <a href="#ideas" className="inline-flex items-center gap-2 font-bold hover:text-stone-500 transition-colors w-max mt-2">
                  Visit the project ↗
                </a>
              </div>
            </article>

          </div>
        </section>

        {/* PHILOSOPHY QUOTE SECTION */}
        <section className="bg-brand-yellow/30 py-24 sm:py-32 px-6">
          <div className="max-w-4xl mx-auto flex flex-col gap-10 items-center text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-stone-500">The thread through all of it</span>
            <blockquote className="text-4xl sm:text-5xl md:text-6xl font-bold text-stone-900 leading-tight">
              “Values are real<br/>when we live them.”
            </blockquote>
            <p className="text-lg sm:text-xl text-stone-700 max-w-2xl text-balance font-medium leading-relaxed">
              I’m interested in the distance between what we say matters and what we repeatedly do. My work lives in that space: noticing our verbs, finding the values beneath them, and choosing what to practice next.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 bg-white p-8 rounded-2xl shadow-sm border border-stone-100 w-full max-w-md">
              <span className="text-xs font-black uppercase tracking-widest text-stone-400">DO NEXT →</span>
              <span className="font-bold text-xl">What is one verb you did today?</span>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="px-6 py-24 sm:py-32 max-w-5xl mx-auto w-full">
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-24 items-start">

            <div className="w-full sm:w-1/3 flex flex-col gap-4 sticky top-32">
              <span className="text-sm font-medium tracking-wide uppercase text-stone-500">about me</span>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
                Human first.<br/>Always.
              </h2>
            </div>

            <div className="w-full sm:w-2/3 flex flex-col gap-16">

              <div className="flex flex-col gap-6 text-lg sm:text-xl text-stone-800 leading-relaxed">
                <p>
                  I grew up in Austin as the fourth of five children — and eventually the seventh of eight. A full house taught me how to read a room, make space for different personalities, and find connection across a lot of noise.
                </p>
                <p>
                  Family gave me a front-row seat to the beauty, friction, humor, and chaotic magic of being human. It also made me curious about the forces that shape us: belonging, belief, responsibility, freedom, and love.
                </p>
                <p>
                  I spent years trying to live inside other people’s idea of “on the right track.” Real direction started when I stopped asking where I could fit and started asking what kind of life I am actually here to build.
                </p>
              </div>

              {/* The Blueprint section */}
              <div className="flex flex-col gap-10 mt-8 border-t border-stone-200 pt-16">
                <div className="flex flex-col">
                  <h3 className="text-3xl font-bold">The blueprint</h3>
                  <span className="text-stone-500 italic">useful lenses, not a cage</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
                  <div className="flex flex-col gap-3">
                    <h4 className="font-bold text-lg uppercase tracking-wide">ENFJ</h4>
                    <p className="text-stone-600">I’m wired to notice people, possibilities, and the emotional weather in a room—then help turn connection into momentum.</p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h4 className="font-bold text-lg uppercase tracking-wide">Enneagram 4w3</h4>
                    <p className="text-stone-600">I want what I make to feel unmistakably true and deeply personal, while still giving it enough shape to reach other people.</p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h4 className="font-bold text-lg uppercase tracking-wide">Human Design 2/4 Generator</h4>
                    <p className="text-stone-600">I do my best work by responding to what genuinely lights me up, leaving room for solitude, and letting relationships open the right doors.</p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <h4 className="font-bold text-lg uppercase tracking-wide text-balance leading-tight">Virgo sun · Taurus moon · Scorpio rising</h4>
                    <p className="text-stone-600">Careful craft, a steady emotional core, and an instinct to look beneath the surface.</p>
                  </div>
                </div>

                <div className="bg-stone-100 p-8 rounded-2xl mt-4">
                  <p className="text-stone-700 italic text-lg leading-relaxed">
                    <span className="font-bold not-italic">Fun astrological fact:</span> I was born with Mercury, Venus, Saturn, Uranus, and Neptune retrograde—which feels very on-brand for someone who rethinks everything, questions received wisdom, and cares a lot about living in alignment with real values.
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
              href="https://www.howdyhuman.com/"
              target="_blank"
              rel="noopener noreferrer"
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
