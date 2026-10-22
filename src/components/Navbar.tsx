import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Moon, 
  Sun, 
  Download, 
  FileText, 
  Briefcase, 
  Cpu, 
  Send
} from 'lucide-react';
import { CV_DATA } from '../data/cvData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
  onOpenCvModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  darkMode,
  setDarkMode,
  onOpenCvModal,
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
            ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30'
            : 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-md shadow-slate-200/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Name */}
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-3 group text-left focus:outline-none cursor-pointer select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-sky-400 p-[2px] shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform shrink-0">
              <div className={`w-full h-full rounded-[10px] flex items-center justify-center font-bold font-mono text-sm ${
                darkMode ? 'bg-slate-950 text-white' : 'bg-white text-indigo-700'
              }`}>
                MN
              </div>
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className={`font-bold tracking-tight text-base sm:text-lg truncate transition-colors ${
                  darkMode ? 'text-white group-hover:text-indigo-400' : 'text-slate-900 group-hover:text-indigo-600'
                }`}>
                  M. Noval Muhaimin
                </span>
                <span className="hidden sm:inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1"></span>
                  Ready to Work
                </span>
              </div>
              <p className={`text-xs truncate ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Fullstack Dev • Surakarta
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links (Visible only on lg: >= 1024px) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
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

          {/* Desktop Action Buttons (Visible only on lg: >= 1024px) */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenCvModal}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-gradient-to-r from-indigo-600 to-sky-500 text-white shadow-md shadow-indigo-600/25 hover:from-indigo-500 hover:to-sky-400 active:scale-95 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh CV</span>
            </button>

            <button
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label="Toggle Dark/Light Mode"
              className={`p-2.5 rounded-xl border transition-colors cursor-pointer ${
                darkMode
                  ? 'border-slate-800 bg-slate-900 text-amber-400 hover:bg-slate-800'
                  : 'border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile & Tablet Controls (Visible ONLY on screens < 1024px) */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Compact Unduh CV on Tablet screens (sm: to md:) */}
            <button
              onClick={onOpenCvModal}
              className="hidden sm:flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>CV</span>
            </button>

            {/* Exactly ONE Dark/Light Toggle for Mobile/Tablet */}
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              aria-label="Toggle Dark/Light Mode"
              className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                darkMode
                  ? 'border-slate-800 bg-slate-900 text-amber-400 hover:bg-slate-850'
                  : 'border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu Navigasi"
              className={`p-2 rounded-lg border transition-colors cursor-pointer ${
                darkMode
                  ? 'border-slate-800 bg-slate-900 text-slate-200 hover:bg-slate-850'
                  : 'border-slate-200 bg-slate-100 text-slate-800 hover:bg-slate-200'
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
              ? 'bg-slate-950/98 border-slate-800 shadow-2xl'
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
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                  isActive
                    ? darkMode
                      ? 'bg-indigo-500/15 text-indigo-400 font-semibold'
                      : 'bg-indigo-50 text-indigo-700 font-semibold'
                    : darkMode
                    ? 'text-slate-300 hover:bg-slate-900'
                    : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-4 h-4 opacity-80" />
                <span>{link.label}</span>
              </button>
            );
          })}

          <div className="pt-3 border-t border-slate-800/60 dark:border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-sky-500 text-white font-semibold text-sm shadow-md cursor-pointer active:scale-[0.98] transition-transform"
            >
              <Download className="w-4 h-4" />
              <span>Download & Cetak CV Resmi</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
