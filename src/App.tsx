import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { CvPreviewModal } from './components/CvPreviewModal';
import { ExperienceItem } from './data/cvData';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('mnm_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  const [selectedProject, setSelectedProject] = useState<ExperienceItem | null>(null);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('mnm_theme', darkMode ? 'dark' : 'light');
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#020617'; // slate-950
      document.body.style.color = '#f8fafc';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#f8fafc'; // slate-50
      document.body.style.color = '#0f172a';
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen selection:bg-indigo-500/30 selection:text-indigo-300 transition-colors duration-200 ${
        darkMode ? 'dark bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Navigation Header */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenCvModal={() => setCvModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="relative">
        <Hero
          darkMode={darkMode}
          onOpenCvModal={() => setCvModalOpen(true)}
        />

        <AboutSection
          darkMode={darkMode}
          onOpenCvModal={() => setCvModalOpen(true)}
        />

        <SkillsSection darkMode={darkMode} />

        <ExperienceSection
          darkMode={darkMode}
          onSelectProject={(item) => setSelectedProject(item)}
        />

        <ContactSection darkMode={darkMode} />
      </main>

      {/* Footer */}
      <Footer
        darkMode={darkMode}
      />

      {/* Interactive Modals */}
      <ProjectDetailModal
        item={selectedProject}
        onClose={() => setSelectedProject(null)}
        darkMode={darkMode}
      />

      <CvPreviewModal
        isOpen={cvModalOpen}
        onClose={() => setCvModalOpen(false)}
        darkMode={darkMode}
      />
    </div>
  );
}
