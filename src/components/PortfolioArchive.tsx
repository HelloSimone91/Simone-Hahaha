import Image from "next/image";
import type { CSSProperties } from "react";

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

export default function PortfolioArchive() {
  return (
    <section className="portfolio-archive" aria-labelledby="portfolio-heading">
      <header className="portfolio-archive-heading">
        <div>
          <p className="portfolio-eyebrow">a closer look at the making archive</p>
          <h2 id="portfolio-heading">Selected work,<br /><em>2021–2026</em></h2>
        </div>
        <div className="portfolio-intro">
          <p>A collection of objects, paintings, and drawings made in the spaces between ideas. Color, curiosity, and the joy of seeing what happens next.</p>
            <span>Simone // Art // 2021–2026</span>
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
  );
}
