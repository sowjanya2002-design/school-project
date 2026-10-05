import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../animation/SchoolReveal";

export function AboutSection() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="site-container about-grid">
        <Reveal className="about-intro">
          <p className="eyebrow section-eyebrow">
            <span className="eyebrow-line" />
            THE TULAS WAY
          </p>
          <h2 id="about-title" className="display-title">
            Here, every<br />
            student <em>belongs.</em>
          </h2>
        </Reveal>
        <Reveal className="about-copy" delay={120}>
          <p className="large-copy">
            "We feel supported in what we do and nudged further to do more."
          </p>
          <p>
            At Tulas, we believe in bringing out the best in every student—whether it's academics, music, art, or drama. With the right support and inspiration, creativity finds its way.
          </p>
          <p>
            Established in 2012, Tulas International School is a CBSE boarding and day school in Dehradun where learning goes beyond lessons.
          </p>
          <a className="text-link" href="#experience">
            Discover the Tulas experience <ArrowUpRight size={18} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
