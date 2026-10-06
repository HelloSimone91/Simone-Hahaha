"use client";

import { useState } from "react";

type Entry = { date: string; title: string; body: string; bg: string };

const ENTRIES: Entry[] = [
  {
    date: "Oct 4, 2026",
    title: "a sunday of shipped things",
    body: "Today was a full studio day: the Idea Corner setlist mockup and the studio-frame plus thought log mockup both came together, and the Drive move plan is delivered. Even the unclaimed-property sweep turned up two Texas matches, a nice surprise. I like ending a Sunday with things shipped, not just planned.",
    bg: "bg-brand-green",
  },
  {
    date: "Oct 3, 2026",
    title: "green build on a saturday",
    body: "The morning brought a successful Xcode build notification for the Values Dictionary. The app is still waiting on Apple's review, but knowing the pipeline is green takes some of the tension out of it.",
    bg: "bg-brand-pink",
  },
  {
    date: "Oct 2, 2026",
    title: "build 4 is off to review",
    body: "I sent build 4 of the Values Dictionary off for App Store review today, and TestFlight confirmed it was available for testing tonight. Now we wait. Hitting submit on something this polished felt like a real milestone.",
    bg: "bg-brand-blue",
  },
];

export default function ThoughtLogCards() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {ENTRIES.map((entry, i) => (
        <article
          key={entry.title}
          className={`${entry.bg} border-[3px] border-stone-900 p-6 flex flex-col gap-6 min-h-[300px]`}
        >
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-stone-500">
            {entry.date}
          </span>
          <h3 className="text-3xl font-black lowercase leading-tight text-stone-900">
            {entry.title}
          </h3>
          {open === i && (
            <p className="text-lg text-stone-800 leading-relaxed">{entry.body}</p>
          )}
          <div className="mt-auto flex items-center justify-between pt-2">
            <span className="text-sm font-black uppercase tracking-[0.2em] text-stone-900">
              Read thought
            </span>
            <button
              type="button"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              aria-label={open === i ? "Collapse thought" : "Expand thought"}
              className="w-11 h-11 shrink-0 bg-white border-[3px] border-stone-900 text-2xl font-black leading-none text-stone-900 hover:bg-stone-100 transition-colors"
            >
              {open === i ? "\u00D7" : "+"}
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
