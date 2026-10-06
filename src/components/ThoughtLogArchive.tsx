"use client";

import { useState } from "react";

type Entry = { date: string; title: string; log: string };

const ENTRIES: Entry[] = [
  {
    "date": "2026-10-01",
    "title": "Checked in after a first day",
    "log": "The first report from work was honest and funny: immediate regret, followed by a plan to return. Sometimes consistency starts before confidence does."
  },
  {
    "date": "2026-10-01",
    "title": "Revision day on the workbook",
    "log": "I put the workbook through another careful revision round today, reflowing tables, fixing the contents page numbers, and rebuilding the vocabulary bank. Watching the layout settle into place felt good. This one is getting close."
  },
  {
    "date": "2026-09-30",
    "title": "Cheered someone into their first day",
    "log": "I remembered a first day and reached out before it began. Care can be very small and still arrive at the exact right time."
  },
  {
    "date": "2026-09-29",
    "title": "Built the storefront and started a publishing rhythm",
    "log": "I turned a scattered set of products into something that looked more like a real storefront and committed to a daily publishing rhythm for Howdy Human. I was building forward while compulsively checking whether the app had moved, holding momentum and uncertainty at the same time."
  },
  {
    "date": "2026-09-28",
    "title": "Watched the Values Dictionary review status",
    "log": "I checked the review status through the morning and kept everything ready in case the process moved. Waiting made me restless, especially because preparation can only do so much once the decision belongs to someone else."
  },
  {
    "date": "2026-09-27",
    "title": "Took a first look at Codexia",
    "log": "I took a late look at another tool that might help with the studio. I was still testing where new tools genuinely expand my capacity and where they simply offer a fresh place to redirect my attention."
  },
  {
    "date": "2026-09-26",
    "title": "Got rejected and regrouped",
    "log": "The app was rejected, and I had to absorb the disappointment while also confronting a few rookie mistakes. I worked the screenshots and materials back into shape because feeling embarrassed did not make the next step any less available."
  },
  {
    "date": "2026-09-25",
    "title": "Submitted the app and shipped the resources page",
    "log": "I submitted the app after more than a year of moving toward the moment and being afraid of it, then shipped another piece of the wider work. I expected the submission to feel like an ending, but mostly it made the stakes—and my attachment to the thing—feel more visible."
  },
  {
    "date": "2026-09-24",
    "title": "Pushed the studio's web projects forward",
    "log": "I spent the afternoon moving the websites forward in GitHub. The work was becoming a practice of returning, adjusting, and making the next decision rather than waiting for a clean burst of certainty."
  },
  {
    "date": "2026-09-21",
    "title": "Found momentum inside a grumpy day",
    "log": "I started the day grumpy and still found my way into a productive rhythm. I made lesson materials once the work finally caught, which was a reminder that my starting mood does not always get to narrate the whole day."
  },
  {
    "date": "2026-09-19",
    "title": "Clarified Signal + Form for a design concept",
    "log": "I tried to put language around Signal + Form so the design could grow from an actual idea instead of a mood board. Naming the studio meant asking what connected all these projects—and what I wanted the container to ask of me."
  },
  {
    "date": "2026-09-18",
    "title": "Ran a design review in Polishory",
    "log": "I asked for another set of eyes on the designs and tried to see them as a system rather than as a collection of choices I had already become attached to. Review is useful partly because it interrupts the story that effort alone makes something finished."
  },
  {
    "date": "2026-09-17",
    "title": "Put in time on the websites and the app",
    "log": "I touched several projects and kept each one moving a little. It did not look dramatic, but I was beginning to understand that a body of work is often built through accumulation rather than revelation."
  },
  {
    "date": "2026-09-17",
    "title": "Put in time on the websites and the app",
    "log": "I touched several projects and kept each one moving a little. It did not look dramatic, but I was beginning to understand that a body of work is often built through accumulation rather than revelation."
  },
  {
    "date": "2026-09-16",
    "title": "Worked on the Howdy Human web and iOS apps",
    "log": "I worked on both versions of Howdy Human and let myself talk about where the work could eventually go. The future felt useful as a direction, as long as I did not use it to skip over the unfinished work in front of me."
  },
  {
    "date": "2026-09-16",
    "title": "Worked on the Howdy Human web and iOS apps",
    "log": "I worked on both versions of Howdy Human and let myself talk about where the work could eventually go. The future felt useful as a direction, as long as I did not use it to skip over the unfinished work in front of me."
  },
  {
    "date": "2026-09-15",
    "title": "Fixed up the websites",
    "log": "I moved between website fixes, visual work, and checking on the app. My attention was split between making the work better and waiting for an outside system to tell me whether one part of it was allowed through."
  },
  {
    "date": "2026-09-15",
    "title": "Fixed up the websites",
    "log": "I moved between website fixes, visual work, and checking on the app. My attention was split between making the work better and waiting for an outside system to tell me whether one part of it was allowed through."
  },
  {
    "date": "2026-09-14",
    "title": "Went for a run on no sleep",
    "log": "I ran a mile on an empty tank because I wanted to begin proving to myself that this could become a habit. I am still sorting out the line between showing up for myself and bulldozing past what my body is saying."
  },
  {
    "date": "2026-09-14",
    "title": "Went for a run on no sleep",
    "log": "I ran a mile on an empty tank because I wanted to begin proving to myself that this could become a habit. I am still sorting out the line between showing up for myself and bulldozing past what my body is saying."
  },
  {
    "date": "2026-09-13",
    "title": "Designed the Values Dictionary app icon",
    "log": "I worked on the app icon in the early hours, trying to compress the feeling of the Values Dictionary into one tiny object. Later I had to rein the website work back in, which reminded me that more output is not automatically better direction."
  },
  {
    "date": "2026-09-13",
    "title": "Designed the Values Dictionary app icon",
    "log": "I worked on the app icon in the early hours, trying to compress the feeling of the Values Dictionary into one tiny object. Later I had to rein the website work back in, which reminded me that more output is not automatically better direction."
  },
  {
    "date": "2026-09-12",
    "title": "Reviewed pull requests for howdyhuman.com",
    "log": "I spent time reviewing changes instead of making every change directly. I was learning that directing the work still required taste, attention, and responsibility—even when I was not the one typing each line."
  },
  {
    "date": "2026-09-12",
    "title": "Reviewed pull requests for howdyhuman.com",
    "log": "I spent time reviewing changes instead of making every change directly. I was learning that directing the work still required taste, attention, and responsibility—even when I was not the one typing each line."
  },
  {
    "date": "2026-09-11",
    "title": "Worked on valuesinthewild.com and howdyhuman.com",
    "log": "I worked across the studio sites and tried to make the digital workspace less chaotic around them. The projects were starting to feel like parts of one living system, even if I was still figuring out how to hold all of it."
  },
  {
    "date": "2026-09-11",
    "title": "Worked on valuesinthewild.com and howdyhuman.com",
    "log": "I worked across the studio sites and tried to make the digital workspace less chaotic around them. The projects were starting to feel like parts of one living system, even if I was still figuring out how to hold all of it."
  },
  {
    "date": "2026-09-09",
    "title": "Watched the App Store and handled admin",
    "log": "I checked the App Store again and moved through administrative work while anxiety hummed in the background. I could not control the review process, so I kept trying to place my attention on the parts that still belonged to me."
  },
  {
    "date": "2026-09-09",
    "title": "Watched the App Store and handled admin",
    "log": "I checked the App Store again and moved through administrative work while anxiety hummed in the background. I could not control the review process, so I kept trying to place my attention on the parts that still belonged to me."
  },
  {
    "date": "2026-09-08",
    "title": "Opened a fresh design canvas",
    "log": "I opened a fresh canvas while the rest of life was happening around me. I was making room for creative attention without pretending I existed separately from the people and rhythms that shape my days."
  },
  {
    "date": "2026-09-08",
    "title": "Opened a fresh design canvas",
    "log": "I opened a fresh canvas while the rest of life was happening around me. I was making room for creative attention without pretending I existed separately from the people and rhythms that shape my days."
  },
  {
    "date": "2026-09-05",
    "title": "Kept building the shortcut",
    "log": "I kept pushing the mobile shortcut toward something usable in ordinary life. The project was becoming less about proving I could build it and more about whether I would realistically keep using it."
  },
  {
    "date": "2026-09-05",
    "title": "Kept building the shortcut",
    "log": "I kept pushing the mobile shortcut toward something usable in ordinary life. The project was becoming less about proving I could build it and more about whether I would realistically keep using it."
  },
  {
    "date": "2026-09-04",
    "title": "Tested the Notion connection",
    "log": "I returned to the problem of making the audit produce something I could actually use. Collecting evidence was never the whole point; I wanted it organized well enough to help me notice my life."
  },
  {
    "date": "2026-08-30",
    "title": "Turned thirty-five",
    "log": "I turned thirty-five, kept the Sunday Study Hall in the afternoon, and spent the evening out. Birthday messages arrived all day long."
  },
  {
    "date": "2026-08-29",
    "title": "Had lunch with someone close",
    "log": "I had lunch with someone close on Saturday. Simple plans, good company."
  },
  {
    "date": "2026-08-27",
    "title": "Turned the corner before the birthday",
    "log": "I told a friend I had turned the corner after a rough pre-birthday stretch and that I was looking forward to the weekend."
  },
  {
    "date": "2026-08-23",
    "title": "Held the Sunday Study Hall",
    "log": "Sunday Study Hall again. The consistency is starting to feel like a small institution."
  },
  {
    "date": "2026-08-16",
    "title": "Held the Sunday Study Hall",
    "log": "I ran the Sunday Study Hall again and kept the weekly rhythm intact."
  },
  {
    "date": "2026-08-13",
    "title": "Drafted a Substack post",
    "log": "I worked on a Substack post from the relaunch plan. Writing the idea down is half the editing."
  },
  {
    "date": "2026-08-09",
    "title": "Held the Sunday Study Hall",
    "log": "Another Sunday, another study hall. I showed up for the community and the work held its shape."
  },
  {
    "date": "2026-08-06",
    "title": "Caught up on plans",
    "log": "I checked in with a friend about getting together this week. Staying in touch takes a nudge; I sent it."
  },
  {
    "date": "2026-08-03",
    "title": "Covered family obligations",
    "log": "I spent the afternoon on family obligations and aunt duties. The studio work waited; some days the role of the day is just being there."
  },
  {
    "date": "2026-08-02",
    "title": "Held the Sunday Study Hall",
    "log": "I held the weekly Sunday Study Hall in the afternoon. Keeping the rhythm mattered more than making it fancy."
  },
  {
    "date": "2026-07-28",
    "title": "Headed home",
    "log": "I came home from Rhode Island this evening. Short trip, and it was the reset it needed to be."
  },
  {
    "date": "2026-07-27",
    "title": "Last full day of the trip",
    "log": "Last full day away. I tried to stay in it instead of mentally packing."
  },
  {
    "date": "2026-07-26",
    "title": "Still away",
    "log": "Another day by the water. Repetition felt like the point: fewer decisions, a slower pace, and room to stay where I was."
  },
  {
    "date": "2026-07-26",
    "title": "Still away",
    "log": "Still away. The days are starting to blur together in the good way."
  },
  {
    "date": "2026-07-25",
    "title": "Beach, food, rest",
    "log": "Beach, food, rest, repeat. I was not trying to make this trip productive."
  },
  {
    "date": "2026-07-24",
    "title": "Another easy trip day",
    "log": "Another day mostly outside and mostly unplanned. This is what the trip is for."
  },
  {
    "date": "2026-07-23",
    "title": "Slow day on the coast",
    "log": "Beach time, lobster, and no urgency. I let the day remain small instead of asking the trip to produce a revelation."
  },
  {
    "date": "2026-07-23",
    "title": "Slow day on the coast",
    "log": "A slow day by the water: beach time, lobster, no agenda."
  },
  {
    "date": "2026-07-22",
    "title": "Flew out for a few days away",
    "log": "I landed this evening and made my way to the coast for a few days away. Letting the trip start slow."
  },
  {
    "date": "2026-07-21",
    "title": "Travel day",
    "log": "I left town for a few days, with the usual airport blur of receipts and duty-free. Travel days are their own kind of work."
  },
  {
    "date": "2026-07-19",
    "title": "Sunday Study Hall, third week",
    "log": "I hosted the Sunday Study Hall again, same format, same half hour."
  },
  {
    "date": "2026-07-15",
    "title": "Night School: the learning environment",
    "log": "The idea that environment can matter more than curriculum stayed with me. Learning is not only what gets taught; it is also what a space makes possible."
  },
  {
    "date": "2026-07-15",
    "title": "Night School: the learning environment",
    "log": "I tuned into a session about why environment beats curriculum for learning. It landed right in the middle of my own questions about what teaching can look like."
  },
  {
    "date": "2026-07-14",
    "title": "The iPad turned up",
    "log": "I turned on Lost Mode for my missing iPad and got the found notification later that evening. Small crisis, quick resolution."
  },
  {
    "date": "2026-07-13",
    "title": "Watched myself teach",
    "log": "I watched an old classroom recording and saw that I looked more at home in the role than memory had let me believe. I was still figuring out what teaching could look like outside a school, but it felt newly possible that the medium could change without losing the part I loved."
  },
  {
    "date": "2026-07-12",
    "title": "Another Sunday Study Hall",
    "log": "I hosted the Sunday Study Hall again, another half hour of shared focus."
  },
  {
    "date": "2026-07-10",
    "title": "Remembered that I loved teaching",
    "log": "I remembered how much I loved teaching—not just having the job, but helping someone move from confusion into understanding. I started seeing education less as a former role and more as a thread that keeps reappearing in everything I make."
  },
  {
    "date": "2026-07-07",
    "title": "Protected a morning writing block",
    "log": "I blocked 7:30 to 8 for writing and treated it like a real appointment."
  },
  {
    "date": "2026-07-05",
    "title": "Held the Sunday Study Hall",
    "log": "I hosted the weekly Sunday Study Hall for the Social Club. Thirty minutes of shared quiet work time."
  },
  {
    "date": "2026-06-29",
    "title": "Another late night out",
    "log": "Another night that stretched into the next day with a friend. Friendship often lives in these unplanned hours more than in anything formally scheduled."
  },
  {
    "date": "2026-06-19",
    "title": "Saw A$AP Rocky at Moody Center",
    "log": "A loud night out at Moody Center. It felt good to let the day be an experience rather than another project to move forward."
  },
  {
    "date": "2026-06-18",
    "title": "Looked into a small-business grant",
    "log": "I looked into a grant and let myself consider what more support could make possible. I was still figuring out when an opportunity is genuinely aligned and when it is simply hard to ignore because resources are scarce."
  },
  {
    "date": "2026-06-17",
    "title": "Worked on the Howdy Human lead magnet",
    "log": "I worked on the path between someone discovering Howdy Human and choosing to stay connected. I was trying to make the practical funnel serve the actual idea rather than flatten the idea into marketing machinery."
  },
  {
    "date": "2026-06-16",
    "title": "Finally faced the edits",
    "log": "I finally sat down with the edits I had been carrying around and worked through them directly. Getting started required more emotional effort than the task itself, which is annoyingly often how these things go."
  },
  {
    "date": "2026-06-14",
    "title": "Fixed the collector",
    "log": "I fixed the error that had stopped the collector and kept looking for a way to continue building with the tools I had. The practical problem was small; what mattered was recovering momentum after the interruption."
  },
  {
    "date": "2026-06-12",
    "title": "Worked on memoir edits between obligations",
    "log": "I worked on memoir edits in the in-between parts of the day, fitting concentration around other obligations. It was one of those days when the work moved because I carried it with me rather than waiting for ideal conditions."
  },
  {
    "date": "2026-06-11",
    "title": "Tried to make the audit mobile",
    "log": "I kept trying to make the audit usable from my phone and got increasingly frustrated when the Notion connection would not cooperate. The persistence and the frustration were tangled together: I wanted the tool badly enough that every failed test felt personal."
  },
  {
    "date": "2026-06-09",
    "title": "Started building the Time Audit",
    "log": "I started building a way to see how I was actually spending my time instead of relying on whatever story I told myself afterward. Watching the first automatic entry land in Notion felt thrilling, like I had made myself a new instrument for paying attention."
  },
  {
    "date": "2026-06-05",
    "title": "Friday evening with family",
    "log": "The photo I kept from tonight is the kids together. The small family scenes are often the ones I most want time to stop erasing."
  },
  {
    "date": "2026-05-25",
    "title": "Memorial Day",
    "log": "The holiday was simple: time at my sister’s with the kids. A day can be worth keeping without needing a larger story."
  },
  {
    "date": "2026-05-19",
    "title": "Late night out",
    "log": "A late-night photo with a friend is the small marker I have for today. Sometimes the record is not a conclusion, only proof that I was there."
  },
  {
    "date": "2026-05-13",
    "title": "Family evening",
    "log": "An ordinary evening with family left a small piece of evidence behind: the people I love, together in one frame. Not every meaningful day announces itself."
  }
];

const MONTH_NAMES = [
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december",
];

function monthLabel(key: string) {
  const [y, m] = key.split("-");
  return `${MONTH_NAMES[parseInt(m, 10) - 1]} ${y}`;
}

function shortDate(iso: string) {
  const [y, m, d] = iso.split("-");
  const short = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
  return `${short[parseInt(m, 10) - 1]} ${parseInt(d, 10)}`;
}

function firstSentence(text: string) {
  const m = text.match(/^.*?[.!?](?=\s|$)/);
  return m ? m[0] : text;
}

export default function ThoughtLogArchive() {
  const [open, setOpen] = useState(false);

  const months: { key: string; entries: Entry[] }[] = [];
  for (const e of ENTRIES) {
    const key = e.date.slice(0, 7);
    const last = months[months.length - 1];
    if (last && last.key === key) last.entries.push(e);
    else months.push({ key, entries: [e] });
  }

  return (
    <div className="mt-10 flex flex-col gap-8">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="self-start bg-white border-[3px] border-stone-900 px-6 py-3 text-sm font-black uppercase tracking-widest text-stone-900 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0_0_#1a1a1a] transition-all cursor-pointer"
      >
        {open ? "show less" : "read more from the log"}
      </button>

      {open && (
        <div className="flex flex-col gap-10">
          {months.map((month) => (
            <div key={month.key} className="flex flex-col gap-4">
              <h3 className="text-xl sm:text-2xl font-black lowercase text-stone-900">
                {monthLabel(month.key)}
              </h3>
              <div className="flex flex-col gap-3">
                {month.entries.map((e) => {
                  const summary = firstSentence(e.log);
                  const expandable = summary !== e.log;
                  return (
                    <details
                      key={e.date + e.title}
                      className="bg-white border-[3px] border-stone-900 group"
                    >
                      <summary className="p-4 sm:p-5 flex flex-col gap-1 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                        <span className="flex items-baseline justify-between gap-4">
                          <span className="text-sm font-mono font-bold text-stone-500">
                            {shortDate(e.date)}
                          </span>
                          {expandable && (
                            <span
                              aria-hidden="true"
                              className="text-stone-900 font-black text-lg leading-none group-open:rotate-45 transition-transform"
                            >
                              +
                            </span>
                          )}
                        </span>
                        <span className="text-lg font-bold lowercase text-stone-900">
                          {e.title}
                        </span>
                        <span className="text-stone-700 leading-relaxed">{summary}</span>
                      </summary>
                      {expandable && (
                        <div className="px-4 sm:px-5 pb-5 pt-1 border-t-2 border-stone-200">
                          <p className="text-stone-700 leading-relaxed pt-3">{e.log}</p>
                        </div>
                      )}
                    </details>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
