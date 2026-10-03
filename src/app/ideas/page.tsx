import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import Header from "@/components/Header";
import IdeaPalettePicker from "@/components/IdeaPalettePicker";

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

const portfolioCollections = [
  {
    number: "01",
    title: "Objects & assemblage",
    note: "Small worlds built from found frames, paint, metal, texture, and whatever else wanted to join in.",
    tone: "rose",
    works: [
      {
        title: "Lil Texas Frame",
        detail: "mixed-media assemblage · 2021",
        images: [["/ideas/lil-texas-frame-2021.png", "An ornate gold frame decorated with pearls and a small Texas-shaped element", 1086, 1448]],
      },
      {
        title: "Pink Aluminum Jewelry Dish",
        detail: "painted aluminum · two views",
        images: [
          ["/ideas/pink-aluminum-jewelry-dish.png", "Overhead view of a hand-formed pink aluminum jewelry dish", 1448, 1086],
          ["/ideas/pink-aluminum-jewelry-dish-side.png", "Low side view showing the layered construction of the pink aluminum jewelry dish", 1536, 1024],
        ],
      },
      {
        title: "Bird Frame",
        detail: "mixed-media relief",
        images: [["/ideas/bird-frame.png", "Layered bird and flower relief nested inside lavender and antique-gold frames", 1390, 1132]],
      },
      {
        title: "Dino Party",
        detail: "2022",
        images: [["/ideas/dino-party-2022.png", "A bright blue dinosaur figure standing on a painted and beaded wooden box", 2800, 2100]],
      },
      {
        title: "Jewelry Upcycle",
        detail: "front + back · 2020",
        images: [
          ["/ideas/jewelry-upcycle-front-2020.png", "Front of a blue upcycled jewelry cabinet with floral drawers and etched glass doors", 1447, 1087],
          ["/ideas/jewelry-upcycle-back-2020.png", "Back of the blue upcycled jewelry cabinet covered with colorful Lotería cards", 1447, 1087],
        ],
      },
      {
        title: "Nail Polish Jug",
        detail: "2020",
        images: [["/ideas/nail-polish-jug-2020.png", "A large jug covered in layered drips of colorful nail polish", 1086, 1448]],
      },
      {
        title: "Eucalyptus",
        detail: "two views · 2026",
        images: [
          ["/ideas/eucalyptus-2026.png", "Full view of painted eucalyptus branches arranged in a lace-wrapped vessel", 1122, 1402],
          ["/ideas/eucalyptus-close-2026.png", "Close view of colorful painted eucalyptus leaves", 1122, 1402],
        ],
      },
      {
        title: "The Right Way T",
        detail: "sewn prototype · fabric scraps",
        description: "Inside out, backwards, or forwards, every way is the right way.",
        href: "https://app.notion.com/p/hellosimone/The-Right-Way-T-Shirt-40a5de61f03e4d62affb5c69b3c763d3?source=copy_link",
        filmstrip: true,
        images: [["/ideas/the-right-way-t.jpg", "Four photos of The Right Way T, a patchwork shirt shown from the front and back", 2172, 724]],
      },
    ],
  },
  {
    number: "02",
    title: "Paintings & mixed media",
    note: "Color studies, layered surfaces, and pieces made by following the material until it started talking back.",
    tone: "blue",
    works: [
      {
        title: "City",
        detail: "mixed media · 2022",
        images: [["/ideas/city-2022.png", "Colorful dimensional mixed-media artwork on a purple rectangular support", 1449, 1086]],
      },
      {
        title: "Tiny Paint",
        detail: "paint study · 2022",
        images: [["/ideas/tiny-paint-2022.png", "Small square marbled painting in teal, blue, chartreuse, and purple", 1448, 1086]],
      },
      {
        title: "Sleepy Flowers",
        detail: "acrylic and paint pen · 2025",
        images: [["/ideas/sleepy-flowers.png", "A hand-painted vase of flowers on a layered green canvas", 1448, 1086]],
      },
    ],
  },
  {
    number: "03",
    title: "Drawings & studies",
    note: "Lines allowed to wander. Notes, repetitions, and drawings made before knowing where they were going.",
    tone: "olive",
    works: [
      {
        title: "Paradigms",
        detail: "ink on paper · August 2022",
        images: [["/ideas/paradigms-aug-2022.jpg", "Hand-lettered Paradigms study with handwritten notes on floral fabric", 1524, 1144]],
      },
      {
        title: "Interesting Colorful Bit",
        detail: "ink on paper · 2022",
        images: [["/ideas/interesting-colorful-bit-2022.png", "Flowing abstract drawing made from colorful lines, curls, and filled shapes", 1086, 1448]],
      },
      {
        title: "Flowy Flower",
        detail: "paint on paper · 2025",
        images: [["/ideas/flowy-flower-2025.png", "Five-petal flower study painted in teal, blue-gray, olive, and pale yellow", 1086, 1448]],
      },
      {
        title: "Color Swirlys",
        detail: "ink and marker on paper",
        images: [["/ideas/color-swirlys.png", "Horizontal abstract drawing with purple loops and colorful wavy bands", 1448, 1086]],
      },
      {
        title: "Circle Burst",
        detail: "gel pen on paper · 2024",
        images: [["/ideas/circle-burst-2024.jpg", "A gel pen drawing of colorful circles connected by fine radiating lines", 1536, 2048]],
      },
    ],
  },
  {
    number: "04",
    title: "Digital art",
    note: "Digital flowers, patterns, and whatever felt worth making.",
    tone: "rose",
    works: [
      {
        title: "Soft Constellation",
        detail: "iPad doodles · 2026",
        images: [["/ideas/soft-constellation.jpg", "A loose constellation of lavender and orange flower doodles", 739, 1064]],
      },
      {
        title: "Roses 2024",
        detail: "digital art",
        images: [["/ideas/roses-2024.png", "A digital drawing of pink roses in a blue vase", 2550, 3300]],
      },
      {
        title: "Shape Negotiation",
        detail: "digital pattern study",
        images: [["/ideas/digital-art.jpg", "An abstract flowing pattern in green, purple, blue, and cream", 1064, 739]],
      },
    ],
  },
] as const;

export default function IdeasPage() {
  return (
    <div id="top" className="min-h-screen bg-[#f7f3e8] text-stone-950">
      <Header />
      <main className="ideas-page">
        <IdeaPalettePicker />
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

        <section className="portfolio-archive" aria-labelledby="portfolio-heading">
          <header className="portfolio-archive-heading">
            <div>
              <p className="portfolio-eyebrow">a closer look at the making archive</p>
              <h2 id="portfolio-heading">Selected work,<br /><em>2021–2026</em></h2>
            </div>
            <div className="portfolio-intro">
              <p>A collection of objects, paintings, and drawings made in the spaces between ideas. Color, curiosity, and the joy of seeing what happens next.</p>
              <span>Simone // Idea Corner // 2021–2026</span>
            </div>
            <div className="portfolio-scribble" aria-hidden="true">small ideas<br />big worlds<i /></div>
          </header>

          <div className="portfolio-accordions">
            {portfolioCollections.map((collection, collectionIndex) => (
              <details className={`portfolio-collection portfolio-collection-${collection.tone}`} key={collection.title} name="portfolio-collection" open={collectionIndex === 0}>
                <summary>
                  <span className="collection-number">{collection.number}</span>
                  <span className="collection-title">{collection.title}</span>
                  <span className="collection-meta">{collection.works.length} works</span>
                  <span className="collection-toggle" aria-hidden="true" />
                </summary>
                <div className="collection-reveal">
                  <div className="collection-copy"><p>{collection.note}</p><span aria-hidden="true">∿ ∿ ∿</span></div>
                  <div className="collection-grid">
                    {collection.works.map((work, workIndex) => (
                      <details className="portfolio-work" key={work.title} name={`portfolio-work-${collection.number}`} open={workIndex === 0}>
                        <summary>
                          <span>{String(workIndex + 1).padStart(2, "0")}</span>
                          <strong>{work.title}</strong>
                          <i aria-hidden="true" />
                        </summary>
                        <div className="portfolio-work-body">
                          {"filmstrip" in work ? (
                            <a className="portfolio-filmstrip" href={work.href} target="_blank" rel="noreferrer">
                              {[0, 1, 2, 3].map((frame) => (
                                <span className="portfolio-filmstrip-frame" style={{ "--frame": frame } as CSSProperties} key={frame}>
                                  <Image src={work.images[0][0]} alt={frame === 0 ? work.images[0][1] : ""} width={work.images[0][2]} height={work.images[0][3]} />
                                </span>
                              ))}
                              <span className="sr-only">Open The Right Way T in Notion</span>
                            </a>
                          ) : (
                            <div className={`portfolio-images portfolio-images-${work.images.length}`}>
                              {work.images.map(([src, alt, width, height]) => (
                                <Image key={src} src={src} alt={alt} width={width} height={height} />
                              ))}
                            </div>
                          )}
                          <div className="portfolio-work-caption"><strong>{work.title}</strong><span>{work.detail}</span></div>
                          {"description" in work && <p className="portfolio-work-description">{work.description}</p>}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="project-strip project-strip-two">
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
