import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import { Reveal } from "../animation/SchoolReveal";
import { school } from "../../data/schoolContent";

export function AdmissionsSection() {
  return (
    <section className="admissions-section" id="admissions" aria-labelledby="admissions-title">
      <div className="site-container admissions-inner">
        <Reveal>
          <p className="eyebrow section-eyebrow">
            <span className="eyebrow-line" />
            YOUR NEXT CHAPTER
          </p>
          <h2 id="admissions-title" className="display-title">
            Your story starts <em>here.</em>
          </h2>
          <p>Find your place in a community that sees what you can become.</p>
          <div className="admissions-actions">
            <Button variant="brand" asChild>
              <a href={school.admissions} target="_blank" rel="noopener noreferrer">
                Apply for admission <ArrowUpRight size={16} />
              </a>
            </Button>
            <a className="text-link" href={`tel:${school.phone}`}>
              Talk to our team <ArrowUpRight size={18} />
            </a>
          </div>
        </Reveal>
        <div className="admissions-mark" aria-hidden="true">
          T<span>•</span>
        </div>
      </div>
    </section>
  );
}
