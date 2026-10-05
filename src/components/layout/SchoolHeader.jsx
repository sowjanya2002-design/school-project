import React, { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { MobileNav } from "./SchoolMobileNav";
import { navItems, school } from "../../data/schoolContent";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="utility-bar">
        <div className="site-container utility-inner">
          <span>DEHRADUN, INDIA <span className="utility-separator">/</span> A PLACE TO BECOME</span>
          <a href={`tel:${school.phone}`}>ADMISSIONS HELPLINE: {school.phone}</a>
        </div>
      </div>
      <header className="site-header">
        <div className="site-container header-inner">
          <a className="brand" href="#top" aria-label="Tulas International School, back to top">
            <img src={school.logo} alt="Tulas International School" width="90" height="90" />
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <Button variant="brand" asChild className="header-apply">
              <a href={school.admissions} target="_blank" rel="noopener noreferrer">
                Apply now <ArrowUpRight size={16} />
              </a>
            </Button>
            <Button
              variant="iconPlain"
              size="icon"
              className="mobile-toggle"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
        {open && <MobileNav onNavigate={() => setOpen(false)} />}
      </header>
    </>
  );
}
