import React from "react";
import { Reveal } from "../animation/SchoolReveal";
import { highlights } from "../../data/schoolContent";

export function HighlightsSection() {
  return (
    <section className="highlights-section" aria-label="Tulas at a glance">
      <div className="site-container highlights-grid">
        {highlights.map((item, index) => (
          <Reveal className="highlight" key={item.label} delay={index * 70}>
            <div className="highlight-number">
              {item.value}
              <span>{item.unit}</span>
            </div>
            <p>{item.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
