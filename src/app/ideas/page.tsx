import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

const notes = [
  ["product thought", "Cars need a low gas mode, like low battery mode for phones."],
  ["tiny delight", "Windshield wipers deserve custom rhythms for every kind of rain."],
  ["important science", "Spiders are the octopuses of land."],
  ["food research", "Angeled kiwis. Deviled eggs, but breakfast got involved."],
  ["public systems", "Send people the body cam footage after a law enforcement interaction."],
  ["future hardware", "Robots with telescopic limbs could shift shape for different jobs."],
];

const parodySongs = [
  ["Autistic, I’m autistic / Pull up to the scene with my silly missin’", "A parody of 2 Chainz’s “I’m Different.”", "https://app.notion.com/p/2d308a02dabf418d9ab56dff1248c21a"],
  ["I’m in love with a drummer", "A parody of T-Pain’s “I’m in Love with a Stripper.” Lyrics complete, lol.", "https://app.notion.com/p/19406423ccc1802db5e4ca396e06ecb7"],
  ["Listen to your heart", "The song “Listen to Your Heart,” but about physical wellness.", "https://app.notion.com/p/16706423ccc1802d9c02f69498de6281"],
  ["They tried to make me get a job—I said no, no, no", "A job-search version of Amy Winehouse’s “Rehab.”", "https://app.notion.com/61fd30c71bf943a8af81127be0f9db4d"],
  ["My life is cosmic", "A ChatGPT/James Blunt parody of “You’re Beautiful.”", "https://app.notion.com/p/f3a74880dd804302aa310b5b1ec746c5"],
  ["Para, para, para-digms", "Coldplay’s “Paradise,” but lyrically defining and revealing paradigms and mental models.", "https://app.notion.com/p/e98d50ac265440a5bf473e33befd51e5"],
  ["You don’t look a day over good views and Guccis", "A cooler-city remix of Rascal Flatts’ “Fast Cars and Freedom.”", "https://app.notion.com/p/644084db74ea4c0da8be8ef85cebf036"],
  ["Everything is awesome—and everything sucks, most of the time", "An emotionally accurate “Everything Is Awesome” parody.", "https://app.notion.com/p/a81493af20d94a09bb98791b8c42b908"],
  ["I shot the tariff", "Bob Marley’s “I Shot the Sheriff,” but tariffs.", "https://app.notion.com/p/20406423ccc180d4b2dec60ae8827e11"],
  ["Fresh Prince of Bel-Air—to the tune of “Last Kiss”", "The Fresh Prince theme song meets Pearl Jam.", "https://app.notion.com/p/19d06423ccc18097bcb2e7a019cf18a8"],
  ["Okay ladies, now let’s gather our research", "A research-methods parody of Beyoncé’s “Formation.”", "https://app.notion.com/p/0f85ed12389e4097b72710cfe7a6915e"],
  ["This is how we human", "A possible Howdy Human theme song, to “This Is How We Do It.”", "https://app.notion.com/p/03564655281644849405d23025afa8ea"],
];

export default function IdeasPage() {
  return (
    <div id="top" className="min-h-screen bg-[#f7f3e8] text-stone-950">
      <Header />
      <main className="ideas-page">
        <section className="ideas-hero">
          <div>
            <p className="ideas-kicker">made / making / maybe someday</p>
            <h1>idea<br />corner</h1>
            <p className="ideas-intro">Art, odd questions, useful systems, and ideas with their shoes untied.</p>
          </div>
          <div className="hero-doodle" aria-hidden="true">
            <span>✿</span>
            <p>ideas go<br />further<br />together</p>
          </div>
        </section>

        <div className="ideas-status" aria-label="Creative status">
          <span>made</span><span>making</span><span>maybe someday</span><span>some things are finished. most are alive.</span>
        </div>

        <section className="art-wall" aria-labelledby="art-heading">
          <div className="section-note"><h2 id="art-heading">art for a softer tomorrow</h2><p>flowers, patterns, paint, and whatever felt worth making</p></div>
          <figure className="art-piece art-piece-tall">
            <Image src="/ideas/soft-constellation.jpg" alt="A loose constellation of lavender and orange flower doodles" width={739} height={1064} />
            <figcaption><strong>Soft Constellation</strong><span>iPad doodles, 2026</span></figcaption>
          </figure>
          <figure className="art-piece art-piece-wide">
            <Image src="/ideas/sleepy-flowers.jpg" alt="A hand-painted vase of flowers on a layered green canvas" width={4032} height={3024} />
            <figcaption><strong>Sleepy Flowers</strong><span>acrylic and paint pen, 2025</span></figcaption>
          </figure>
          <figure className="art-piece art-piece-rose">
            <Image src="/ideas/roses-2024.png" alt="A digital drawing of pink roses in a blue vase" width={2550} height={3300} />
            <figcaption><strong>Roses 2024</strong><span>digital art</span></figcaption>
          </figure>
          <figure className="art-piece art-piece-pattern">
            <Image src="/ideas/digital-art.jpg" alt="An abstract flowing pattern in green, purple, blue, and cream" width={1064} height={739} />
            <figcaption><strong>Shape Negotiation</strong><span>digital pattern study</span></figcaption>
          </figure>
        </section>

        <section className="project-strip">
          <article className="project-feature shirt-feature">
            <p className="tape-label">things to wear</p>
            <div className="shirt-drawing" aria-hidden="true"><span>THE<br />RIGHT<br />WAY</span></div>
            <h2>The “Right Way” T-Shirt</h2>
            <p>A sewn prototype made from fabric scraps. Inside out, backwards, or forwards, every way is the right way.</p>
          </article>
          <article className="project-feature disco-feature">
            <p className="tape-label">products for everyday weirdness</p>
            <div className="disco-ball" aria-hidden="true">✦</div>
            <h2>The Very Disco D.I.S.C.O Ball</h2>
            <p>A portable spatial computing hub for projecting interactive tools into physical space.</p>
          </article>
          <article className="project-feature lol-feature">
            <p className="tape-label">media experiments</p>
            <div className="radio-box" aria-hidden="true"><span>[ LOL OS ]</span><i>radio internet</i></div>
            <h2>LOL OS</h2>
            <p>An operating system for radio internet. Brainz, nerdz, money, dreams.</p>
          </article>
        </section>

        <section className="worlds">
          <div className="worlds-heading"><p>one ecosystem, several expressions</p><h2>worlds I keep<br />building toward</h2></div>
          <div className="world-list">
            <article><span>community</span><h3>Howdy Human Social Club</h3><p>Meet, make, talk, share, belong. A social club built around fun, service, and real connection.</p></article>
            <article><span>fashion + care</span><h3>Comfortable Queen</h3><p>Clothes and spaces built around comfort, personal style, affordability, and self-trust.</p></article>
            <article><span>media</span><h3>Values-based micro-show</h3><p>A small repeatable show for exploring bigger questions through everyday values.</p></article>
          </div>
        </section>

        <section className="signal-section">
          <p>Signal + Form</p>
          <h2>turning values<br />into verbs.</h2>
          <div className="signal-verbs"><span>care → share</span><span>rest → create</span><span>notice → change</span><span>listen → belong</span></div>
        </section>

        <section className="notes-party">
          <header><p>from the Idea Party</p><h2>small thoughts,<br />big side quests</h2></header>
          <div className="note-grid">
            {notes.map(([label, text], index) => <article key={text} className={`note note-${(index % 4) + 1}`}><span>{label}</span><p>{text}</p></article>)}
          </div>
        </section>

        <section className="parody-party" aria-labelledby="parody-heading">
          <header className="parody-heading">
            <div><p>03 / a recurring bit</p><h2 id="parody-heading">Parody<br /><em>Song Party</em></h2></div>
            <p>Apparently my brain hears a perfectly good song and immediately starts changing the words. Here are a dozen from the archive.</p>
          </header>
          <ol className="parody-list">
            {parodySongs.map(([title, detail, href], index) => (
              <li key={href}>
                <a href={href} target="_blank" rel="noreferrer">
                  <span className="parody-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="parody-copy"><strong>{title}</strong><small>{detail}</small></span>
                  <svg className="parody-arrow" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8" /></svg>
                  <span className="sr-only">Open in Notion</span>
                </a>
              </li>
            ))}
          </ol>
        </section>

        <section className="alive-banner"><h2>some things are finished.<br />most are alive.</h2><p>Ideas keep coming back.</p></section>
        <section className="ideas-exit"><p>what’s next?<br /><strong>probs more of this.</strong></p><Link href="/">← back home</Link></section>
      </main>
    </div>
  );
}
