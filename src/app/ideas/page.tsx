"use client";

import { useState } from "react";
import Header from "@/components/Header";
import { ideaPartyItems } from "./ideaPartyData";

const filters = ["all","favorite","product","tech","song","question","business"];

export default function IdeasPage() {
  const [filter,setFilter] = useState("all");
  const [openIdea,setOpenIdea] = useState<number|null>(0);
  return <div className="idea-corner-shell"><Header /><main className="idea-corner-page">
    <header className="idea-corner-intro"><h1>idea<br />corner</h1><p>art, odd questions, useful systems, and ideas with their shoes untied.</p></header>
    <nav className="idea-filters" aria-label="filter ideas">{filters.map(item => <button key={item} type="button" aria-pressed={filter===item} onClick={()=>setFilter(item)}>{item}</button>)}</nav>
    <section className="idea-corner-list" aria-label="ideas from Idea Party">{ideaPartyItems.map((idea,index)=>{
      const visible=filter==="all"||idea.tags.includes(filter); const expanded=openIdea===index; const sheet=idea.sheet;
      return <article className="corner-idea" key={idea.title} hidden={!visible}>
        <button className="corner-idea-toggle" type="button" aria-expanded={expanded} aria-controls={`idea-${index+1}`} onClick={()=>setOpenIdea(expanded?null:index)}>
          <span className="corner-number">{String(index+1).padStart(2,"0")}</span>
          <span className="corner-idea-copy"><strong>{idea.title}</strong>{idea.summary&&<small>{idea.summary}</small>}</span>
          <span className="corner-tags">{idea.tags.map(tag=><span key={tag}>{tag}</span>)}</span><span className="corner-plus" aria-hidden="true" />
        </button>
        <div className="corner-panel" id={`idea-${index+1}`} hidden={!expanded}><div className="corner-panel-inner">
          <p className="corner-panel-note"><strong>{sheet ? "core idea sheet" : "original idea note"}</strong>{sheet ? "the completed idea card from my Idea Party archive." : "this one is still loose. read the original note in Notion."}<a href={idea.url} target="_blank" rel="noreferrer">open in Notion ↗</a></p>
          {sheet&&<div className="corner-sheet-wrap"><figure className="corner-sheet"><figcaption><span>core idea sheet</span><span>{idea.title}</span></figcaption><div className="corner-sheet-grid">
            <section className="corner-block corner-problem"><h2>problem / opportunity</h2><p>{sheet.problem}</p></section>
            <section className="corner-block corner-concept"><h2>idea</h2><p>{sheet.idea}</p></section>
            <section className="corner-block corner-which"><h2>which will</h2><ol>{sheet.outcomes.map(outcome=><li key={outcome}>{outcome}</li>)}</ol></section>
            <section className="corner-block corner-need"><h2>and to do that, i need…</h2><ul>{sheet.needs.map(need=><li key={need}>{need}</li>)}</ul></section>
          </div></figure></div>}
        </div></div>
      </article>})}</section>
  </main></div>;
}
