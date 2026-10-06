"use client";

import { useState } from "react";

type Panel = {
  name: string;
  tagline: string;
  desc: string;
  tags: string[];
  href: string;
  external?: boolean;
  bg: string;
  chipBorder: string;
};

const BRANCHES: Panel[] = [
  {
    name: "values in the wild",
    tagline: "living philosophy / daily practice",
    desc: "A growing body of work about turning values from lofty nouns into observable verbs \u2014 and using that practice to build clarity, empathy, and connection.",
    tags: ["notice", "name", "practice"],
    href: "https://www.valuesinthewild.com/",
    external: true,
    bg: "bg-brand-green",
    chipBorder: "border-brand-plum",
  },
  {
    name: "howdy human",
    tagline: "ideas / experiments / useful things",
    desc: "A home for human-centered experiments: making life more intentional, more livable, and a little less weird to navigate alone.",
    tags: ["question", "make", "connect"],
    href: "https://www.howdyhuman.com/",
    external: true,
    bg: "bg-brand-pink",
    chipBorder: "border-brand-plum",
  },
  {
    name: "things get weird",
    tagline: "stories / curiosity / conversation",
    desc: "A place for the strange turns, honest questions, and unexpected connections that show up when we pay attention to being human.",
    tags: ["wonder", "listen", "laugh"],
    href: "https://www.thingsgetweird.com/",
    external: true,
    bg: "bg-brand-blue",
    chipBorder: "border-brand-plum",
  },
];

const PERSONAL: Panel[] = [
  {
    name: "art",
    tagline: "objects / paintings / drawings",
    desc: "Objects, paintings, drawings, and digital work made from curiosity, color, and whatever materials wanted to join in.",
    tags: ["assemble", "paint", "wander"],
    href: "/art.html",
    bg: "bg-[#eaac8b]",
    chipBorder: "border-stone-900",
  },
  {
    name: "idea corner",
    tagline: "ideas / experiments / unfinished things",
    desc: "A living shelf for ideas I\u2019m exploring, projects still simmering, and questions I want to keep where I can see them.",
    tags: ["collect", "play", "imagine"],
    href: "/ideas.html",
    bg: "bg-brand-yellow",
    chipBorder: "border-stone-900",
  },
];

function ToggleIcon({ open }: { open: boolean }) {
  return (
    <span
      className="w-11 h-11 shrink-0 bg-white border-[3px] border-stone-900 grid place-items-center"
      aria-hidden="true"
    >
      <span className="relative block w-6 h-6">
        <svg
          viewBox="0 0 24 24"
          className={`absolute inset-0 transition-all duration-300 ${open ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="5 9 12 16 19 9" />
        </svg>
        <svg
          viewBox="0 0 24 24"
          className={`absolute inset-0 transition-all duration-300 ${open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          strokeLinecap="round"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
        </svg>
      </span>
    </span>
  );
}

function PanelRow({
  panel,
  open,
  onToggle,
  divider,
}: {
  panel: Panel;
  open: boolean;
  onToggle: () => void;
  divider: string;
}) {
  return (
    <div className={`${panel.bg} border-b-[3px] ${divider}`}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-6 py-7 text-left"
      >
        <span className="flex flex-col gap-2">
          <span className="text-4xl font-black lowercase leading-none text-stone-900">
            {panel.name}
          </span>
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-stone-600">
            {panel.tagline}
          </span>
        </span>
        <ToggleIcon open={open} />
      </button>
      {open && (
        <div className="px-6 pb-7 flex flex-col gap-4">
          <p className="text-lg text-stone-800 leading-relaxed">{panel.desc}</p>
          <div className="flex flex-wrap gap-2">
            {panel.tags.map((t) => (
              <span
                key={t}
                className={`px-3 py-1 bg-white border-2 ${panel.chipBorder} text-xs font-black uppercase tracking-wider`}
              >
                {t}
              </span>
            ))}
          </div>
          <a
            href={panel.href}
            {...(panel.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="text-sm font-black uppercase tracking-[0.2em] text-stone-900 underline underline-offset-4 decoration-[3px]"
          >
            Visit {panel.external ? "site" : "page"} &rarr;
          </a>
        </div>
      )}
    </div>
  );
}

export default function WorkPanels() {
  const [open, setOpen] = useState<string | null>(null);
  const toggle = (key: string) => setOpen(open === key ? null : key);

  return (
    <div className="border-t-[3px] border-brand-plum">
      {/* Mobile umbrella banner */}
      <div className="bg-brand-plum px-6 py-8 border-b-[3px] border-brand-plum">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5f0db]/70">
          the studio umbrella
        </span>
        <h3 className="mt-3 text-4xl font-black lowercase text-[#f5f0db] leading-none">
          signal + form
        </h3>
        <p className="mt-3 text-lg text-[#f5f0db]/85 font-medium leading-relaxed">
          The studio behind all of these branches &mdash; media, tools, objects,
          and experiments for values-led living.
        </p>
      </div>

      {BRANCHES.map((p) => (
        <PanelRow
          key={p.name}
          panel={p}
          divider="border-brand-plum"
          open={open === p.name}
          onToggle={() => toggle(p.name)}
        />
      ))}

      {/* Personal work divider */}
      <div className="bg-[#f5f0db] px-6 py-5 flex items-center gap-6 border-b-[3px] border-stone-900">
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-stone-500 whitespace-nowrap">
          Personal work
        </span>
        <span className="flex-1 h-[3px] bg-stone-900" aria-hidden="true" />
      </div>

      {PERSONAL.map((p) => (
        <PanelRow
          key={p.name}
          panel={p}
          divider="border-stone-900"
          open={open === p.name}
          onToggle={() => toggle(p.name)}
        />
      ))}
    </div>
  );
}
