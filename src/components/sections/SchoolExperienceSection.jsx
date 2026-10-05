import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../animation/SchoolReveal";
import { experiences } from "../../data/schoolContent";

export function ExperienceSection() {
  return (
    <section className="experience-section" id="experience" aria-labelledby="experience-title">
      <div className="site-container">
        <Reveal className="section-heading">
          <div>
            <p className="eyebrow section-eyebrow">
              <span className="eyebrow-line" />
              THE TULAS EXPERIENCE
            </p>
            <h2 id="experience-title" className="display-title">
              Every day, a new<br />
              <em>discovery.</em>
            </h2>
          </div>
          <p>From the classroom to the playing field, there's room to explore every side of yourself.</p>
        </Reveal>
        <div className="experience-grid">
          {experiences.map((item, i) => (
            <Reveal key={item.number} className={`experience-item ${item.className}`} delay={i * 90}>
              <div className="experience-photo">
                <img src={item.image} alt={item.alt} loading="lazy" />
                <span className="photo-index">{item.number} / 03</span>
              </div>
              <div className="experience-meta">
                <span>{item.eyebrow}</span>
                <ArrowUpRight size={19} />
              </div>
              <h3>
                {item.title.split("\n").map((line, n) => (
                  <span key={line}>
                    {line}
                    {n === 0 && <br />}
                  </span>
                ))}
              </h3>
              <p>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
