import React from 'react';
import './styles/global.css';

import { ScrollProgress } from './components/animation/SchoolScrollProgress';
import { Header } from './components/layout/SchoolHeader';
import { Footer } from './components/layout/SchoolFooter';
import { HeroSection } from './components/sections/SchoolHeroSection';
import { AboutSection } from './components/sections/SchoolAboutSection';
import { HighlightsSection } from './components/sections/SchoolHighlightsSection';
import { ExperienceSection } from './components/sections/SchoolExperienceSection';
import { LifeSection } from './components/sections/SchoolLifeSection';
import { AdmissionsSection } from './components/sections/SchoolAdmissionsSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fbfbfa] text-[#223528]">
      <ScrollProgress />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <HighlightsSection />
        <ExperienceSection />
        <LifeSection />
        <AdmissionsSection />
      </main>
      <Footer />
    </div>
  );
}
