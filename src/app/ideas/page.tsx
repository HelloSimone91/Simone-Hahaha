"use client";

import { useState } from "react";
import Header from "@/components/Header";
import { ideaPartyItems } from "./ideaPartyData";

const filters = ["all","favorite","product","tech","song","question","business"];

function coreSheet(idea: (typeof ideaPartyItems)[number]) {
  const concept = idea.summary || idea.title;
  if (idea.tags.includes("song")) return {
    problem: "A familiar song has room for a new joke, story, or point of view.", concept,
    outcomes: ["make the idea memorable", "let humor carry the point", "create something people can sing"],
    needs: "Finished lyrics, a clear performance voice, a simple arrangement, and a rights-aware way to share it.",
  };
  if (idea.tags.includes("question")) return {
    problem: `This question keeps tugging: ${idea.title}`,
    concept: concept === idea.title ? "Hold the question open and follow where it leads." : concept,
    outcomes: ["make the wondering visible", "invite more than one answer", "turn curiosity into something shareable"],
    needs: "Time to think, useful context, a few honest conversations, and permission to leave the answer open.",
  };
  if (idea.tags.includes("business")) return {
    problem: `There may be an overlooked practical need behind “${idea.title}.”`, concept,
    outcomes: ["serve a specific group of people", "make the experience easier or better", "test whether the model can sustain itself"],
    needs: "A clear audience, a small service test, realistic costs, and direct feedback from potential customers.",
  };
  if (idea.tags.includes("tech")) return {
    problem: `Current tools leave room for the experience imagined in “${idea.title}.”`, concept,
    outcomes: ["make the interaction more useful", "turn the idea into a testable workflow", "show where the technology helps"],
    needs: "A focused use case, a small working prototype, technical constraints, and people willing to test it.",
  };
  if (idea.tags.includes("product")) return {
    problem: `There is room for a more useful or delightful solution behind “${idea.title}.”`, concept,
    outcomes: ["solve the everyday need clearly", "feel intuitive to use", "become tangible enough to test"],
    needs: "A rough prototype, material and cost research, safety or feasibility checks, and feedback from real users.",
  };
  return {
    problem: `There is an idea worth exploring inside “${idea.title}.”`, concept,
    outcomes: ["give the idea a clearer shape", "find the most promising part", "identify a useful next experiment"],
    needs: "A small first version, a few outside perspectives, and room to learn from what happens.",
  };
}

export default function IdeasPage() {
  const [filter,setFilter] = useState("all");
  const [openIdea,setOpenIdea] = useState<number|null>(0);
  return <div className="idea-corner-shell"><Header /><main className="idea-corner-page">
    <header className="idea-corner-intro"><h1>idea<br />corner</h1><p>art, odd questions, useful systems, and ideas with their shoes untied.</p></header>
    <nav className="idea-filters" aria-label="filter ideas">{filters.map(item => <button key={item} type="button" aria-pressed={filter===item} onClick={()=>setFilter(item)}>{item}</button>)}</nav>
    <section className="idea-corner-list" aria-label="ideas from Idea Party">{ideaPartyItems.map((idea,index)=>{
      const visible=filter==="all"||idea.tags.includes(filter); const expanded=openIdea===index; const sheet=coreSheet(idea);
      return <article className="corner-idea" key={idea.title} hidden={!visible}>
        <button className="corner-idea-toggle" type="button" aria-expanded={expanded} aria-controls={`idea-${index+1}`} onClick={()=>setOpenIdea(expanded?null:index)}>
          <span className="corner-number">{String(index+1).padStart(2,"0")}</span>
          <span className="corner-idea-copy"><strong>{idea.title}</strong>{idea.summary&&<small>{idea.summary}</small>}</span>
          <span className="corner-tags">{idea.tags.map(tag=><span key={tag}>{tag}</span>)}</span><span className="corner-plus" aria-hidden="true" />
        </button>
        <div className="corner-panel" id={`idea-${index+1}`} hidden={!expanded}><div className="corner-panel-inner">
          <p className="corner-panel-note"><strong>core idea sheet</strong>a quick working version of the idea, ready to grow as the thinking gets clearer.</p>
          <div className="corner-sheet-wrap"><figure className="corner-sheet"><figcaption><span>core idea sheet</span><span>{idea.title}</span></figcaption><div className="corner-sheet-grid">
            <section className="corner-block corner-problem"><h2>problem / opportunity</h2><p>{sheet.problem}</p></section>
            <section className="corner-block corner-concept"><h2>idea</h2><p>{sheet.concept}</p></section>
            <section className="corner-block corner-which"><h2>which will</h2><ol>{sheet.outcomes.map(outcome=><li key={outcome}>{outcome}</li>)}</ol></section>
            <section className="corner-block corner-need"><h2>and to do that, i need…</h2><p>{sheet.needs}</p></section>
          </div></figure></div>
        </div></div>
      </article>})}</section>
  </main></div>;
}
