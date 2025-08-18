'use client';

import { Navbar, Footer } from '@/components';
import { 
  HeroSection, 
  AboutSection,
  SkillsSection,
  ExperienceSection, 
  ProjectsSection, 
  ContactSection 
} from '@/modules';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
