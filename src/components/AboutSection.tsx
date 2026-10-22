import React from 'react';
import { 
  GraduationCap, 
  Layers, 
  ShieldCheck, 
  Database, 
  FileSpreadsheet, 
  Users, 
  Award, 
  CheckCircle,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { CV_DATA } from '../data/cvData';

interface AboutSectionProps {
  darkMode: boolean;
  onOpenCvModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ darkMode, onOpenCvModal }) => {
  const highlights = [
    {
      icon: Layers,
      title: "Fullstack End-to-End Delivery",
      description: "Terbiasa mengelola siklus hidup perangkat lunak secara mandiri: mulai dari analisis kebutuhan, rancangan skema basis data, REST API, antarmuka pengguna responsif, hingga proses pengujian dan koordinasi deployment ke server."
    },
    {
      icon: Database,
      title: "Basis Data & Keamanan Hak Akses",
      description: "Berpengalaman mendesain relasi data di PostgreSQL & MySQL, menerapkan otentikasi token via Laravel Sanctum, dan merancang sistem Multi-Role Permission (RBAC) yang ketat untuk keamanan data kampus dan institusi."
    },
    {
      icon: FileSpreadsheet,
      title: "Administrasi Digital & Manajemen Data",
      description: "Memiliki ketelitian tinggi dalam data entry, pemeriksaan konsistensi dan integritas data (berpengalaman sebagai Mitra Sensus BPS), pengarsipan dokumen digital, dan pelaporan berkala menggunakan Microsoft Excel."
    },
    {
      icon: Users,
      title: "Pengalaman Organisasi & Kepemimpinan",
      description: "Aktif memegang peranan strategis sebagai Sekretaris Bidang Kominfo PDPM Wonogiri (2020-sekarang) dan Ketua Bidang Organisasi IMM (2021-2022), memperkuat komunikasi tim dan koordinasi multi-pihak."
    }
  ];

  return (
    <section id="tentang" className="py-20 relative">
      {/* Decorative Blur */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold tracking-wider uppercase mb-3 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profil Profesional</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Menjembatani Logika Kode dengan Ketelitian Tata Kelola Data
          </h2>
          <p className={`mt-4 text-base sm:text-lg leading-relaxed ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {CV_DATA.personal.bio}
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  darkMode
                    ? 'bg-slate-900/60 border-slate-800 hover:border-indigo-500/40 hover:bg-slate-900/90 hover:shadow-xl hover:shadow-indigo-950/20'
                    : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-xl hover:shadow-slate-200/70'
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-sky-500/20 text-indigo-400 flex items-center justify-center mb-4 border border-indigo-500/30">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {item.title}
                </h3>
                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Education & Language Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Education Box */}
          <div className={`lg:col-span-8 p-6 sm:p-8 rounded-2xl border relative overflow-hidden ${
            darkMode 
              ? 'bg-gradient-to-br from-slate-900/90 to-slate-950 border-slate-800' 
              : 'bg-gradient-to-br from-indigo-50/50 via-white to-slate-50 border-slate-200'
          }`}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/40 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-lg shadow-indigo-600/30">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {CV_DATA.personal.education.degree}
                  </h4>
                  <p className={`text-sm font-medium ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                    {CV_DATA.personal.education.institution}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  IPK: {CV_DATA.personal.education.gpa}
                </span>
                <span className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {CV_DATA.personal.education.period}
                </span>
              </div>
            </div>

            <div className="pt-6 space-y-3">
              <div className="flex items-start gap-2">
                <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className={`text-sm font-semibold ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    Tugas Akhir / Skripsi:
                  </span>
                  <p className={`text-sm mt-0.5 font-medium ${darkMode ? 'text-indigo-300' : 'text-indigo-700'}`}>
                    "{CV_DATA.personal.education.thesis}"
                  </p>
                  <p className={`text-xs mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    Mengembangkan sistem integrasi Zakat, Infak, dan Sedekah hybrid (Web Backoffice & Mobile Client) dengan verifikasi kelayakan mustahik dan transparansi audit donasi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Languages & Quick Fact Box */}
          <div className={`lg:col-span-4 p-6 sm:p-8 rounded-2xl border flex flex-col justify-between ${
            darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div>
              <h4 className={`text-base font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Kemampuan Bahasa</span>
              </h4>
              <div className="space-y-4">
                {CV_DATA.personal.languages.map((lang, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className={darkMode ? 'text-slate-200' : 'text-slate-800'}>{lang.name}</span>
                      <span className="text-indigo-400">{i === 0 ? 'Fasih / Native' : 'Menengah (B2)'}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-sky-400 rounded-full"
                        style={{ width: i === 0 ? '100%' : '75%' }}
                      />
                    </div>
                    <p className={`text-[11px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {lang.level}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className={`mt-6 pt-4 border-t text-xs ${darkMode ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'}`}>
              <span className="font-semibold text-emerald-400">Status Ketersediaan:</span> Siap bergabung secara On-site di Surakarta & sekitarnya, Hybrid, maupun Remote nasional.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
