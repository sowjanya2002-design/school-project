import React from "react";
import { ArrowUpRight } from "lucide-react";
import { navItems, school } from "../../data/schoolContent";

export function MobileNav({ onNavigate }: { onNavigate: () => void }) {
  return (
    <nav className="mobile-nav" aria-label="Mobile navigation">
      {navItems.map((item) => (
        <a href={item.href} key={item.href} onClick={onNavigate}>
          {item.label}
          <ArrowUpRight size={18} />
        </a>
      ))}
      <a href={school.admissions} target="_blank" rel="noopener noreferrer" onClick={onNavigate}>
        Apply now <ArrowUpRight size={18} />
      </a>
    </nav>
  );
}
