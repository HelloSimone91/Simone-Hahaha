"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type WorkImage = { src: string; alt: string; w: number; h: number };
type CollectionKey = "objects" | "paintings" | "drawings" | "digital";
type Work = {
  title: string;
  detail: string;
  description?: string;
  href?: string;
  collection: CollectionKey;
  images: WorkImage[];
};

const COLLECTIONS: { key: CollectionKey; label: string }[] = [
  { key: "objects", label: "Objects" },
  { key: "paintings", label: "Paintings" },
  { key: "drawings", label: "Drawings" },
  { key: "digital", label: "Digital" },
];

const WORKS: Work[] = [
  {
    title: "Lil Texas Frame", detail: "mixed-media assemblage \u00b7 2021", collection: "objects",
    images: [{ src: "/ideas/lil-texas-frame-2021.png", alt: "An ornate gold frame decorated with pearls and a small Texas-shaped element", w: 1086, h: 1448 }],
  },
  {
    title: "Pink Aluminum Jewelry Dish", detail: "painted aluminum \u00b7 two views", collection: "objects",
    images: [
      { src: "/ideas/pink-aluminum-jewelry-dish.png", alt: "Overhead view of a hand-formed pink aluminum jewelry dish", w: 1448, h: 1086 },
      { src: "/ideas/pink-aluminum-jewelry-dish-side.png", alt: "Low side view showing the layered construction of the pink aluminum jewelry dish", w: 1536, h: 1024 },
    ],
  },
  {
    title: "Bird Frame", detail: "mixed-media relief", collection: "objects",
    images: [{ src: "/ideas/bird-frame.png", alt: "Layered bird and flower relief nested inside lavender and antique-gold frames", w: 1390, h: 1132 }],
  },
  {
    title: "Dino Party", detail: "2022", collection: "objects",
    images: [{ src: "/ideas/dino-party-2022.png", alt: "A bright blue dinosaur figure standing on a painted and beaded wooden box", w: 2800, h: 2100 }],
  },
  {
    title: "Jewelry Upcycle", detail: "front + back \u00b7 2020", collection: "objects",
    images: [
      { src: "/ideas/jewelry-upcycle-front-2020.png", alt: "Front of a blue upcycled jewelry cabinet with floral drawers and etched glass doors", w: 1447, h: 1087 },
      { src: "/ideas/jewelry-upcycle-back-2020.png", alt: "Back of the blue upcycled jewelry cabinet covered with colorful Loter\u00eda cards", w: 1447, h: 1087 },
    ],
  },
  {
    title: "Nail Polish Jug", detail: "2020", collection: "objects",
    images: [{ src: "/ideas/nail-polish-jug-2020.png", alt: "A large jug covered in layered drips of colorful nail polish", w: 1086, h: 1448 }],
  },
  {
    title: "Eucalyptus", detail: "two views \u00b7 2026", collection: "objects",
    images: [
      { src: "/ideas/eucalyptus-2026.png", alt: "Full view of painted eucalyptus branches arranged in a lace-wrapped vessel", w: 1122, h: 1402 },
      { src: "/ideas/eucalyptus-close-2026.png", alt: "Close view of colorful painted eucalyptus leaves", w: 1122, h: 1402 },
    ],
  },
  {
    title: "The Right Way T", detail: "sewn prototype \u00b7 fabric scraps",
    description: "Inside out, backwards, or forwards, every way is the right way.",
    href: "https://app.notion.com/p/hellosimone/The-Right-Way-T-Shirt-40a5de61f03e4d62affb5c69b3c763d3?source=copy_link",
    collection: "objects",
    images: [{ src: "/ideas/the-right-way-t.jpg", alt: "Four photos of The Right Way T, a patchwork shirt shown from the front and back", w: 2172, h: 724 }],
  },
  {
    title: "City", detail: "mixed media \u00b7 2022", collection: "paintings",
    images: [{ src: "/ideas/city-2022.png", alt: "Colorful dimensional mixed-media artwork on a purple rectangular support", w: 1449, h: 1086 }],
  },
  {
    title: "Tiny Paint", detail: "paint study \u00b7 2022", collection: "paintings",
    images: [{ src: "/ideas/tiny-paint-2022.png", alt: "Small square marbled painting in teal, blue, chartreuse, and purple", w: 1448, h: 1086 }],
  },
  {
    title: "Sleepy Flowers", detail: "acrylic and paint pen \u00b7 2025", collection: "paintings",
    images: [{ src: "/ideas/sleepy-flowers.png", alt: "A hand-painted vase of flowers on a layered green canvas", w: 1448, h: 1086 }],
  },
  {
    title: "Paradigms", detail: "ink on paper \u00b7 August 2022", collection: "drawings",
    images: [{ src: "/ideas/paradigms-aug-2022.jpg", alt: "Hand-lettered Paradigms study with handwritten notes on floral fabric", w: 1524, h: 1144 }],
  },
  {
    title: "Interesting Colorful Bit", detail: "ink on paper \u00b7 2022", collection: "drawings",
    images: [{ src: "/ideas/interesting-colorful-bit-2022.png", alt: "Flowing abstract drawing made from colorful lines, curls, and filled shapes", w: 1086, h: 1448 }],
  },
  {
    title: "Flowy Flower", detail: "paint on paper \u00b7 2025", collection: "drawings",
    images: [{ src: "/ideas/flowy-flower-2025.png", alt: "Five-petal flower study painted in teal, blue-gray, olive, and pale yellow", w: 1086, h: 1448 }],
  },
  {
    title: "Color Swirlys", detail: "ink and marker on paper", collection: "drawings",
    images: [{ src: "/ideas/color-swirlys.png", alt: "Horizontal abstract drawing with purple loops and colorful wavy bands", w: 1448, h: 1086 }],
  },
  {
    title: "Circle Burst", detail: "gel pen on paper \u00b7 2024", collection: "drawings",
    images: [{ src: "/ideas/circle-burst-2024.jpg", alt: "A gel pen drawing of colorful circles connected by fine radiating lines", w: 1536, h: 2048 }],
  },
  {
    title: "Whimsical Summer Dust", detail: "digital art \u00b7 2023", collection: "digital",
    images: [{ src: "/ideas/whimsical-summer-dust-2023.jpeg", alt: "An abstract digital drawing of flowing botanical shapes and circles in lavender, green, aqua, and yellow on a blue-gray background", w: 1353, h: 1091 }],
  },
  {
    title: "Soft Constellation", detail: "iPad doodles \u00b7 2026", collection: "digital",
    images: [{ src: "/ideas/soft-constellation.jpg", alt: "A loose constellation of lavender and orange flower doodles", w: 739, h: 1064 }],
  },
  {
    title: "Roses 2024", detail: "digital art", collection: "digital",
    images: [{ src: "/ideas/roses-2024.png", alt: "A digital drawing of pink roses in a blue vase", w: 2550, h: 3300 }],
  },
  {
    title: "Shape Negotiation", detail: "digital pattern study", collection: "digital",
    images: [{ src: "/ideas/digital-art.jpg", alt: "An abstract flowing pattern in green, purple, blue, and cream", w: 1064, h: 739 }],
  },
];

export default function GalleryWall() {
  const [filter, setFilter] = useState<"all" | CollectionKey>("all");
  const [lightbox, setLightbox] = useState<{ work: number; img: number } | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0, inside: false, overCard: false });
  const scales = useRef<number[]>([]);

  const visible = filter === "all" ? WORKS : WORKS.filter((w) => w.collection === filter);

  useEffect(() => {
    scales.current = [];
  }, [filter]);

  // Cursor magnification + lens ring
  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    let raf = 0;
    const ring = { x: -100, y: -100 };
    const RADIUS = 300;
    const BOOST = 0.45;

    const tick = () => {
      const grid = gridRef.current;
      if (grid) {
        const cards = grid.querySelectorAll<HTMLElement>("[data-card]");
        cards.forEach((el, i) => {
          let target = 1;
          if (mouse.current.inside) {
            const r = el.getBoundingClientRect();
            const d = Math.hypot(r.left + r.width / 2 - mouse.current.x, r.top + r.height / 2 - mouse.current.y);
            const t = Math.max(0, 1 - d / RADIUS);
            target = 1 + BOOST * (t * t * (3 - 2 * t));
          }
          const cur = scales.current[i] ?? 1;
          const next = cur + (target - cur) * 0.18;
          scales.current[i] = next;
          el.style.transform = `scale(${next.toFixed(3)})`;
          el.style.zIndex = String(Math.round(next * 10));
          el.style.setProperty("--lift", ((next - 1) / BOOST).toFixed(3));
        });
      }
      const ringEl = ringRef.current;
      if (ringEl) {
        ring.x += (mouse.current.x - ring.x) * 0.3;
        ring.y += (mouse.current.y - ring.y) * 0.3;
        const s = mouse.current.overCard ? 1.7 : 1;
        ringEl.style.opacity = mouse.current.inside ? "1" : "0";
        ringEl.style.transform = `translate(${ring.x.toFixed(1)}px, ${ring.y.toFixed(1)}px) translate(-50%, -50%) scale(${s.toFixed(2)})`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [filter]);

  // Lightbox keyboard + scroll lock
  useEffect(() => {
    if (!lightbox) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") nextWork();
      if (e.key === "ArrowLeft") prevWork();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, visible.length]);

  const openAt = (i: number) => setLightbox({ work: i, img: 0 });
  const close = () => setLightbox(null);
  const nextWork = () =>
    setLightbox((lb) => (lb ? { work: (lb.work + 1) % visible.length, img: 0 } : lb));
  const prevWork = () =>
    setLightbox((lb) => (lb ? { work: (lb.work - 1 + visible.length) % visible.length, img: 0 } : lb));
  const nextImg = () =>
    setLightbox((lb) => {
      if (!lb) return lb;
      const imgs = visible[lb.work].images.length;
      return { work: lb.work, img: (lb.img + 1) % imgs };
    });
  const prevImg = () =>
    setLightbox((lb) => {
      if (!lb) return lb;
      const imgs = visible[lb.work].images.length;
      return { work: lb.work, img: (lb.img - 1 + imgs) % imgs };
    });

  const current = lightbox ? visible[lightbox.work] : null;
  const currentImg = current ? current.images[lightbox!.img] : null;

  return (
    <section className="gallery-wall" aria-label="Artwork gallery">
      <style>{`
        .gallery-wall .wall-grid { cursor: none; }
        .gallery-wall [data-card] {
          --lift: 0;
          box-shadow: 0 calc(var(--lift) * 22px) calc(var(--lift) * 44px) rgba(26,26,26, calc(var(--lift) * 0.32));
          will-change: transform;
        }
        .gallery-lens {
          position: fixed; top: 0; left: 0; z-index: 90; pointer-events: none;
          width: 34px; height: 34px; border-radius: 9999px;
          border: 2px solid #4a1f4d; opacity: 0;
          transition: opacity 0.2s ease;
        }
        .gallery-lens::after {
          content: ""; position: absolute; inset: 11px; border-radius: 9999px;
          border: 2px solid #4a1f4d; border-top-color: transparent; border-right-color: transparent;
          transform: rotate(45deg);
        }
        @media (pointer: coarse) { .gallery-lens { display: none; } .gallery-wall .wall-grid { cursor: default; } }
        @media (prefers-reduced-motion: reduce) { .gallery-lens { display: none; } }
        .gallery-card-enter { animation: cardIn 0.45s cubic-bezier(0.22, 1, 0.36, 1) both; }
        @keyframes cardIn { from { opacity: 0; transform: scale(0.92); } to { opacity: 1; transform: scale(1); } }
        .story-bar span { transition: flex-grow 0.3s ease, background-color 0.3s ease; }
      `}</style>

      <div ref={ringRef} className="gallery-lens" aria-hidden="true" />

      {/* Header */}
      <header className="px-6 pt-16 sm:pt-24 pb-8 max-w-[1400px] mx-auto w-full">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-stone-500">
          a closer look at the making archive
        </p>
        <h2 className="mt-3 text-5xl sm:text-7xl font-black lowercase tracking-tight leading-[0.95] text-stone-900">
          selected work,<br />
          <em className="not-italic text-brand-plum">2021–2026</em>
        </h2>
        <p className="mt-5 text-xl text-stone-600 font-medium leading-relaxed max-w-2xl">
          Objects, paintings, and drawings made in the spaces between ideas. Move
          your cursor across the wall — the work leans in to meet you.
        </p>

        {/* Filter chips */}
        <div className="mt-8 flex flex-wrap gap-3" role="group" aria-label="Filter by collection">
          <button
            type="button"
            onClick={() => setFilter("all")}
            aria-pressed={filter === "all"}
            className={`px-5 py-2.5 rounded-full border-[3px] text-sm font-black uppercase tracking-wider transition-colors ${
              filter === "all"
                ? "bg-brand-plum text-[#f5f0db] border-brand-plum"
                : "bg-white text-stone-900 border-stone-900 hover:bg-stone-100"
            }`}
          >
            All · {WORKS.length}
          </button>
          {COLLECTIONS.map((c) => {
            const n = WORKS.filter((w) => w.collection === c.key).length;
            const active = filter === c.key;
            return (
              <button
                key={c.key}
                type="button"
                onClick={() => setFilter(c.key)}
                aria-pressed={active}
                className={`px-5 py-2.5 rounded-full border-[3px] text-sm font-black uppercase tracking-wider transition-colors ${
                  active
                    ? "bg-brand-plum text-[#f5f0db] border-brand-plum"
                    : "bg-white text-stone-900 border-stone-900 hover:bg-stone-100"
                }`}
              >
                {c.label} · {n}
              </button>
            );
          })}
        </div>
      </header>

      {/* The wall */}
      <div className="px-6 pb-24 max-w-[1400px] mx-auto w-full">
        <div
          ref={gridRef}
          className="wall-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-7"
          onMouseMove={(e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
            mouse.current.inside = true;
            mouse.current.overCard = !!(e.target as HTMLElement).closest?.("[data-card]");
          }}
          onMouseLeave={() => {
            mouse.current.inside = false;
            mouse.current.overCard = false;
          }}
        >
          {visible.map((work, i) => {
            const img = work.images[0];
            return (
              <button
                key={`${filter}-${work.title}`}
                type="button"
                data-card
                onClick={() => openAt(i)}
                aria-label={`Open ${work.title}`}
                className="gallery-card-enter relative block w-full aspect-[4/3] overflow-hidden bg-white border-[3px] border-stone-900 text-left"
                style={{ animationDelay: `${Math.min(i * 35, 500)}ms` }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.w}
                  height={img.h}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                {work.images.length > 1 && (
                  <span className="absolute bottom-2 right-2 px-2 py-0.5 bg-stone-900 text-white text-[11px] font-black uppercase tracking-wider">
                    {work.images.length} views
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Lightbox carousel */}
      {lightbox && current && currentImg && (
        <div
          className="fixed inset-0 z-[100] bg-stone-950/95 flex flex-col"
          role="dialog"
          aria-modal="true"
          aria-label={`${current.title} — artwork viewer`}
          onClick={close}
        >
          {/* Story progress bar (mobile) */}
          <div className="md:hidden flex gap-1.5 px-4 pt-4" aria-hidden="true">
            {visible.map((_, i) => (
              <span
                key={i}
                className="story-bar h-1 flex-1 rounded-full"
                style={{ backgroundColor: i === lightbox.work ? "#f5f0db" : "rgba(245,240,219,0.3)" }}
              />
            ))}
          </div>

          {/* Top bar */}
          <div
            className="flex items-center justify-between px-4 sm:px-8 py-4 text-[#f5f0db]"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-sm font-black uppercase tracking-[0.2em]">
              {lightbox.work + 1} / {visible.length}
            </span>
            <button
              type="button"
              onClick={close}
              aria-label="Close viewer"
              className="w-11 h-11 grid place-items-center border-[3px] border-[#f5f0db] text-2xl font-black leading-none hover:bg-white/10"
            >
              ×
            </button>
          </div>

          {/* Stage */}
          <div
            className="relative flex-1 min-h-0 flex items-center justify-center px-4 sm:px-20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Desktop arrows */}
            <button
              type="button"
              onClick={prevWork}
              aria-label="Previous artwork"
              className="hidden md:grid absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 place-items-center border-[3px] border-[#f5f0db] text-[#f5f0db] text-3xl font-black hover:bg-white/10 z-10"
            >
              ←
            </button>
            <button
              type="button"
              onClick={nextWork}
              aria-label="Next artwork"
              className="hidden md:grid absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 place-items-center border-[3px] border-[#f5f0db] text-[#f5f0db] text-3xl font-black hover:bg-white/10 z-10"
            >
              →
            </button>

            {/* Mobile story tap zones */}
            <button
              type="button"
              aria-label="Previous artwork"
              onClick={prevWork}
              className="md:hidden absolute left-0 top-0 bottom-0 w-[30%] z-10"
            />
            <button
              type="button"
              aria-label="Next artwork"
              onClick={nextWork}
              className="md:hidden absolute right-0 top-0 bottom-0 w-[30%] z-10"
            />

            <figure className="max-h-full flex flex-col items-center gap-4 min-w-0">
              <div className="relative max-h-[62vh] sm:max-h-[68vh] flex items-center">
                <Image
                  key={currentImg.src}
                  src={currentImg.src}
                  alt={currentImg.alt}
                  width={currentImg.w}
                  height={currentImg.h}
                  className="max-h-[62vh] sm:max-h-[68vh] w-auto max-w-full object-contain border-[3px] border-[#f5f0db]"
                  priority
                />
              </div>
              <figcaption className="text-center text-[#f5f0db] max-w-xl px-2">
                <strong className="block text-2xl font-black lowercase">{current.title}</strong>
                <span className="block mt-1 text-sm uppercase tracking-[0.18em] text-[#f5f0db]/70">
                  {current.detail}
                </span>
                {current.description && (
                  <p className="mt-2 text-base text-[#f5f0db]/85">{current.description}</p>
                )}
                {current.images.length > 1 && (
                  <span className="mt-3 flex items-center justify-center gap-2">
                    <button
                      type="button"
                      onClick={prevImg}
                      aria-label="Previous view"
                      className="w-8 h-8 grid place-items-center border-2 border-[#f5f0db]/60 text-lg hover:bg-white/10"
                    >
                      ←
                    </button>
                    <span className="flex gap-1.5">
                      {current.images.map((_, vi) => (
                        <button
                          key={vi}
                          type="button"
                          onClick={() => setLightbox({ work: lightbox.work, img: vi })}
                          aria-label={`View ${vi + 1}`}
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: vi === lightbox.img ? "#f5f0db" : "rgba(245,240,219,0.35)" }}
                        />
                      ))}
                    </span>
                    <button
                      type="button"
                      onClick={nextImg}
                      aria-label="Next view"
                      className="w-8 h-8 grid place-items-center border-2 border-[#f5f0db]/60 text-lg hover:bg-white/10"
                    >
                      →
                    </button>
                  </span>
                )}
                {current.href && (
                  <a
                    href={current.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm font-black uppercase tracking-[0.2em] underline underline-offset-4"
                  >
                    open in notion →
                  </a>
                )}
              </figcaption>
            </figure>
          </div>

          {/* Thumbnail rail (desktop) */}
          <div
            className="hidden md:flex items-center gap-3 px-8 py-5 overflow-x-auto justify-start sm:justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {visible.map((w, i) => {
              const t = w.images[0];
              const active = i === lightbox.work;
              return (
                <button
                  key={w.title}
                  type="button"
                  onClick={() => setLightbox({ work: i, img: 0 })}
                  aria-label={`Go to ${w.title}`}
                  aria-current={active}
                  className={`relative shrink-0 w-20 h-14 overflow-hidden border-[3px] transition-all ${
                    active ? "border-[#f5f0db] scale-110" : "border-transparent opacity-50 hover:opacity-90"
                  }`}
                >
                  <Image
                    src={t.src}
                    alt=""
                    width={t.w}
                    height={t.h}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
