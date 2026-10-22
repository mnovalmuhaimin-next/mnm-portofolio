import React from 'react';
import { 
  ArrowUp, 
  Linkedin, 
  Mail, 
  MessageSquare
} from 'lucide-react';
import { CV_DATA } from '../data/cvData';

interface FooterProps {
  darkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t transition-colors ${
      darkMode ? 'bg-slate-950 border-slate-800/80 text-slate-400' : 'bg-slate-100 border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between pb-8 border-b border-slate-800/40 dark:border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold text-xs">
                MN
              </div>
              <span className={`text-base font-extrabold tracking-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                {CV_DATA.personal.fullName}
              </span>
            </div>
            <p className="text-xs leading-relaxed max-w-md">
              Fullstack Developer & Administrasi Sistem berdomisili di Surakarta, Jawa Tengah. Berpengalaman membangun sistem informasi terintegrasi dengan Laravel, Next.js, dan PostgreSQL.
            </p>
          </div>

          {/* Direct Social Links */}
          <div className="md:col-span-6 flex flex-wrap items-center md:justify-end gap-3">
            <a
              href={CV_DATA.personal.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl border border-slate-700 hover:border-emerald-500/40 hover:text-emerald-400 transition-colors"
              title="Hubungi via WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${CV_DATA.personal.email}`}
              className="p-2.5 rounded-xl border border-slate-700 hover:border-indigo-500/40 hover:text-indigo-400 transition-colors"
              title="Kirim Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={CV_DATA.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl border border-slate-700 hover:border-sky-500/40 hover:text-sky-400 transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className={`p-2.5 rounded-xl border transition-colors cursor-pointer ${
                darkMode ? 'border-slate-800 bg-slate-900 text-slate-300 hover:text-white' : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
              }`}
              title="Kembali ke atas"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} {CV_DATA.personal.fullName}. Hak Cipta Dilindungi.
          </div>
          <div className="flex items-center gap-2">
            <span>Portfolio Profesional</span>
            <span>•</span>
            <span className="text-indigo-400 font-medium">mnm-project.site</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
