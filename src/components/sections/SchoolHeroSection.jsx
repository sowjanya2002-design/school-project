import React from "react";
import { ArrowDown, ArrowUpRight, Play } from "lucide-react";
import { Button } from "../ui/button";
import { school } from "../../data/schoolContent";

export function HeroSection() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <img
        className="hero-image"
        src="https://tis.edu.in/_next/static/media/image2.5d908b38.webp"
        alt="View of Tulas International School campus in Dehradun"
        width="1536"
        height="1024"
      />
      <div className="hero-shade" />
      <div className="site-container hero-content">
        <div className="hero-main">
          <p className="eyebrow hero-eyebrow">
            <span className="eyebrow-line" />
            WELCOME TO A WORLD OF POSSIBILITIES
          </p>
          <h1 id="hero-title">
            Tulas International<br />
            <em>School.</em>
          </h1>
          <p className="hero-description">
            More than a school. A place to discover who you are and who you can become.
          </p>
          <div className="hero-buttons">
            <Button variant="light" asChild>
              <a href={school.admissions} target="_blank" rel="noopener noreferrer">
                Begin your journey <ArrowUpRight size={16} />
              </a>
            </Button>
            <Button variant="heroOutline" asChild>
              <a href={school.tour} target="_blank" rel="noopener noreferrer">
                <Play size={15} fill="currentColor" /> Explore our campus
              </a>
            </Button>
          </div>
        </div>
        <div className="hero-bottom">
          <a href="#about" className="scroll-cue">
            <span className="scroll-cue-icon">
              <ArrowDown size={17} />
            </span>
            <span>SCROLL TO EXPLORE</span>
          </a>
          <div className="hero-location">
            <span>01 / 04</span>
            <span>DEHRADUN, UTTARAKHAND</span>
          </div>
        </div>
      </div>
    </section>
  );
}
