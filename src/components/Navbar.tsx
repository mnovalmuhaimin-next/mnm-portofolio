import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Moon, 
  Sun, 
  Download, 
  Code2, 
  FileText, 
  Briefcase, 
  Cpu, 
  Send, 
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { CV_DATA } from '../data/cvData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenCvModal: () => void;
  onOpenGuideModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  onOpenCvModal,
  onOpenGuideModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['hero', 'tentang', 'kompetensi', 'pengalaman', 'kontak'];
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'tentang', label: 'Tentang Saya', icon: FileText },
    { id: 'kompetensi', label: 'Kompetensi', icon: Cpu },
    { id: 'pengalaman', label: 'Pengalaman & Proyek', icon: Briefcase },
    { id: 'kontak', label: 'Kontak', icon: Send },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? darkMode
            ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20'
            : 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-md shadow-slate-200/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand */}
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-sky-400 p-[2px] shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <div className={`w-full h-full rounded-[10px] flex items-center justify-center font-bold font-mono text-sm ${
                darkMode ? 'bg-slate-950 text-white' : 'bg-white text-indigo-700'
              }`}>
                MN
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className={`font-bold tracking-tight text-base sm:text-lg transition-colors ${
                  darkMode ? 'text-white group-hover:text-indigo-400' : 'text-slate-900 group-hover:text-indigo-600'
                }`}>
                  M. Noval Muhaimin
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse mr-1"></span>
                  Ready to Work
                </span>
              </div>
              <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Fullstack Dev • Surakarta
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? darkMode
                        ? 'text-indigo-400 bg-indigo-500/10 font-semibold'
                        : 'text-indigo-600 bg-indigo-50 font-semibold'
                      : darkMode
                      ? 'text-slate-300 hover:text-white hover:bg-slate-900'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-4 h-4 opacity-75" />
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Guide Next.js & Vercel Button */}
            <button
              onClick={onOpenGuideModal}
              title="Panduan Lengkap Next.js & Deploy Vercel Gratis"
              className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg border transition-all ${
                darkMode
                  ? 'border-indigo-500/30 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20'
                  : 'border-indigo-200 bg-indigo-50/80 text-indigo-700 hover:bg-indigo-100'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Panduan Next.js & Vercel</span>
            </button>

            {/* Download CV Button */}
            <button
              onClick={onOpenCvModal}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-indigo-600 to-sky-500 text-white shadow-md shadow-indigo-600/25 hover:from-indigo-500 hover:to-sky-400 active:scale-95 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh CV</span>
            </button>

            {/* Dark / Light Toggle */}
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label="Toggle Dark/Light Mode"
              className={`p-2 rounded-lg border transition-colors ${
                darkMode
                  ? 'border-slate-800 bg-slate-900 text-amber-400 hover:bg-slate-800'
                  : 'border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label="Toggle Dark/Light Mode"
              className={`p-2 rounded-lg border ${
                darkMode
                  ? 'border-slate-800 bg-slate-900 text-amber-400'
                  : 'border-slate-200 bg-slate-100 text-slate-700'
              }`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu Navigasi"
              className={`p-2 rounded-lg border ${
                darkMode
                  ? 'border-slate-800 bg-slate-900 text-slate-200'
                  : 'border-slate-200 bg-slate-100 text-slate-800'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-b px-4 pt-3 pb-6 space-y-2 transition-all ${
            darkMode
              ? 'bg-slate-950/95 border-slate-800'
              : 'bg-white/98 border-slate-200 shadow-xl'
          }`}
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium ${
                  isActive
                    ? darkMode
                      ? 'bg-indigo-500/15 text-indigo-400'
                      : 'bg-indigo-50 text-indigo-700'
                    : darkMode
                    ? 'text-slate-300 hover:bg-slate-900'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                {link.label}
              </button>
            );
          })}

          <div className="pt-3 border-t border-slate-800/60 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 to-sky-500 text-white font-medium text-sm shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Download & Cetak CV</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGuideModal();
              }}
              className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold border ${
                darkMode
                  ? 'border-indigo-500/30 text-indigo-300 bg-indigo-500/10'
                  : 'border-indigo-200 text-indigo-700 bg-indigo-50'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Panduan Kode Next.js & Deploy Vercel</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
