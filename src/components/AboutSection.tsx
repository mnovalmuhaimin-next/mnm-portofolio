import React from 'react';
import { 
  GraduationCap, 
  Code2, 
  Database, 
  ClipboardList, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { CV_DATA } from '../data/cvData';

interface AboutSectionProps {
  darkMode: boolean;
  onOpenCvModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ darkMode, onOpenCvModal }) => {
  const highlights = [
    {
      icon: Code2,
      title: "Web & Fullstack",
      desc: "Membangun sistem informasi menggunakan Laravel, PHP, Next.js, dan REST API."
    },
    {
      icon: Database,
      title: "Database & Keamanan",
      desc: "Merancang relasi database PostgreSQL/MySQL dan autentikasi hak akses (Sanctum/RBAC)."
    },
    {
      icon: ClipboardList,
      title: "Administrasi & Data",
      desc: "Terbiasa validasi kelengkapan data, pengelolaan dokumen, dan pengolahan data di Excel."
    }
  ];

  return (
    <section id="tentang" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold tracking-wider uppercase mb-3 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tentang Saya</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Fokus pada Pengembangan Web & Tata Kelola Data
          </h2>
          <p className={`mt-3 text-sm sm:text-base leading-relaxed ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {CV_DATA.personal.bio}
          </p>
        </div>

        {/* 3 Concise Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-5 rounded-2xl border transition-all ${
                  darkMode
                    ? 'bg-slate-900/60 border-slate-800/80 hover:border-indigo-500/40'
                    : 'bg-white border-slate-200 hover:border-indigo-300 shadow-sm'
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-3 border border-indigo-500/20">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className={`text-base font-bold mb-1.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {item.title}
                </h3>
                <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Education & Info Strip */}
        <div className={`p-4 sm:p-5 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
          darkMode ? 'bg-slate-900/40 border-slate-800/80' : 'bg-slate-100/70 border-slate-200'
        }`}>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className={`text-xs sm:text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {CV_DATA.personal.education.degree} — {CV_DATA.personal.education.institution}
              </div>
              <div className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Tugas Akhir: {CV_DATA.personal.education.thesis} • {CV_DATA.personal.education.period}
              </div>
            </div>
          </div>

          <button
            onClick={onOpenCvModal}
            className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors self-start sm:self-auto cursor-pointer ${
              darkMode 
                ? 'border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10' 
                : 'border-indigo-200 text-indigo-700 hover:bg-indigo-50'
            }`}
          >
            <span>Lihat Profil Lengkap di CV</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
