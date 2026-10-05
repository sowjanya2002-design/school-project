import React from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../animation/SchoolReveal";

export function LifeSection() {
  return (
    <section className="life-section" id="life" aria-labelledby="life-title">
      <div className="site-container life-grid">
        <Reveal>
          <p className="eyebrow section-eyebrow">
            <span className="eyebrow-line" />
            BEYOND THE CLASSROOM
          </p>
          <h2 id="life-title" className="display-title">
            School should feel<br />
            like an <em>adventure.</em>
          </h2>
        </Reveal>
        <Reveal className="life-copy" delay={120}>
          <p className="large-copy">What's the secret to making school awesome?</p>
          <p>
            It's all about making learning feel like an adventure—where curiosity leads, creativity thrives, and every day brings something new to discover.
          </p>
          <div className="life-divider" />
          <p className="life-note">
            BOARDING & DAY SCHOOL<br />
            CLASSES IV – XII · CBSE
          </p>
        </Reveal>
      </div>
      <div className="site-container life-footer">
        <span>LEARN. EXPLORE. BECOME.</span>
        <span>
          EST. 2012 <ArrowRight size={17} />
        </span>
      </div>
    </section>
  );
}
