import React from "react";
import { school } from "../../data/schoolContent";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-main">
        <div className="footer-brand">
          <img src={school.logo} alt="Tulas International School" width="92" height="92" />
          <p>Let's do it with Tulas.</p>
        </div>
        <div className="footer-contact">
          <span>VISIT US</span>
          <p>{school.address}</p>
        </div>
        <div className="footer-contact">
          <span>GET IN TOUCH</span>
          <a href={`tel:${school.phone}`}>{school.phone}</a>
          <a href={`mailto:${school.email}`}>{school.email}</a>
        </div>
        <div className="footer-contact">
          <span>EXPLORE</span>
          <a href={school.tour} target="_blank" rel="noopener noreferrer">Virtual tour ↗</a>
          <a href={school.admissions} target="_blank" rel="noopener noreferrer">Admissions ↗</a>
        </div>
      </div>
      <div className="site-container footer-bottom">
        <span>© {new Date().getFullYear()} TULAS INTERNATIONAL SCHOOL</span>
        <span>DEHRADUN, INDIA</span>
      </div>
    </footer>
  );
}
