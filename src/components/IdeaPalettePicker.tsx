"use client";

import { useEffect, useRef, useState } from "react";

const palettes = [
  { id: "original", name: "Original confetti", colors: ["#f4b8d2", "#f7e989", "#c8def7", "#d8efd0"] },
  { id: "twilight", name: "Twilight peach", colors: ["#355070", "#944c76", "#e56b6f", "#f0c88b"] },
  { id: "coastal", name: "Coastal studio", colors: ["#277da1", "#90be6d", "#f9c74f", "#f9844a"] },
  { id: "garden", name: "Garden party", colors: ["#386641", "#a7c957", "#f2e8cf", "#bc4749"] },
] as const;

type PaletteId = (typeof palettes)[number]["id"];

export default function IdeaPalettePicker() {
  const pickerRef = useRef<HTMLDivElement>(null);
  const [palette, setPalette] = useState<PaletteId>("original");

  function applyPalette(nextPalette: PaletteId) {
    pickerRef.current?.closest(".ideas-page")?.setAttribute("data-palette", nextPalette);
  }

  useEffect(() => {
    const savedPalette = window.localStorage.getItem("idea-corner-palette") as PaletteId | null;
    if (savedPalette && palettes.some(({ id }) => id === savedPalette)) {
      applyPalette(savedPalette);
      const frame = window.requestAnimationFrame(() => setPalette(savedPalette));
      return () => window.cancelAnimationFrame(frame);
    }
  }, []);

  return (
    <div className="palette-picker" ref={pickerRef}>
      <label htmlFor="idea-palette">color palette</label>
      <div className="palette-control">
        <span className="palette-swatches" aria-hidden="true">
          {palettes.find(({ id }) => id === palette)?.colors.map((color) => (
            <i key={color} style={{ backgroundColor: color }} />
          ))}
        </span>
        <select
          id="idea-palette"
          value={palette}
          onChange={(event) => {
            const nextPalette = event.target.value as PaletteId;
            setPalette(nextPalette);
            applyPalette(nextPalette);
            window.localStorage.setItem("idea-corner-palette", nextPalette);
          }}
        >
          {palettes.map(({ id, name }) => <option key={id} value={id}>{name}</option>)}
        </select>
      </div>
    </div>
  );
}
