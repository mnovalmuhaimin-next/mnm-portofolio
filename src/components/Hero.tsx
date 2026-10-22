import React, { useState, useRef } from 'react';
import { 
  Download, 
  Send, 
  MapPin, 
  Mail, 
  Phone, 
  Linkedin, 
  Globe, 
  GraduationCap, 
  CheckCircle2, 
  Code, 
  Database, 
  ArrowRight, 
  Sparkles,
  Camera,
  RotateCcw
} from 'lucide-react';
import { CV_DATA } from '../data/cvData';
import confetti from 'canvas-confetti';

interface HeroProps {
  darkMode: boolean;
  onOpenCvModal: () => void;
  onOpenGuideModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ darkMode, onOpenCvModal, onOpenGuideModal }) => {
  // State for user custom photo preview (allows instant live photo replacement)
  const [customPhoto, setCustomPhoto] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomPhoto(url);
    }
  };

  const handleDownloadClick = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
    onOpenCvModal();
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background Decorative Ambient Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-sky-500/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introduction & Details */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>{CV_DATA.personal.statusBadge}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <p className={`text-sm sm:text-base font-semibold tracking-wider uppercase font-mono ${
                darkMode ? 'text-indigo-400' : 'text-indigo-600'
              }`}>
                Halo, Saya
              </p>
              <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                {CV_DATA.personal.fullName}
              </h1>
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-400 via-sky-400 to-teal-400 bg-clip-text text-transparent">
                  Fullstack Developer
                </span>
                <span className={`text-base sm:text-xl ${darkMode ? 'text-slate-600' : 'text-slate-300'}`}>•</span>
                <span className={`text-base sm:text-lg font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  Administrasi Sistem
                </span>
                <span className={`text-base sm:text-xl ${darkMode ? 'text-slate-600' : 'text-slate-300'}`}>•</span>
                <span className={`text-base sm:text-lg font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                  Data Management
                </span>
              </div>
            </div>

            {/* Brief Bio */}
            <p className={`text-base sm:text-lg leading-relaxed ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Lulusan <strong>S1 Teknik Informatika UMS (IPK 3.35/4.00)</strong> dengan keahlian dalam perancangan sistem informasi terintegrasi, arsitektur RESTful API, dan optimasi basis data relasional. Berpengalaman mandiri mengawal proyek dari riset kebutuhan hingga deployment produksi.
            </p>

            {/* Quick Location & Contact Tags */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs sm:text-sm">
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border ${
                darkMode ? 'bg-slate-900/60 border-slate-800 text-slate-300' : 'bg-slate-100/80 border-slate-200 text-slate-700'
              }`}>
                <MapPin className="w-4 h-4 text-rose-500" />
                <span>{CV_DATA.personal.location}</span>
              </div>

              <a
                href={`mailto:${CV_DATA.personal.email}`}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border hover:border-indigo-500/50 transition-colors ${
                  darkMode ? 'bg-slate-900/60 border-slate-800 text-slate-300' : 'bg-slate-100/80 border-slate-200 text-slate-700'
                }`}
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>{CV_DATA.personal.email}</span>
              </a>

              <a
                href={CV_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border hover:border-sky-500/50 transition-colors ${
                  darkMode ? 'bg-slate-900/60 border-slate-800 text-slate-300' : 'bg-slate-100/80 border-slate-200 text-slate-700'
                }`}
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={handleDownloadClick}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-sky-500 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <Download className="w-5 h-5" />
                <span>Unduh / Cetak CV Resmi</span>
              </button>

              <button
                onClick={() => scrollTo('kontak')}
                className={`flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold border transition-all cursor-pointer ${
                  darkMode
                    ? 'border-slate-700 bg-slate-900/80 text-white hover:bg-slate-850 hover:border-indigo-500/40'
                    : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-50 hover:border-indigo-300 shadow-sm'
                }`}
              >
                <Send className="w-4 h-4 text-indigo-400" />
                <span>Hubungi Saya</span>
              </button>

              <button
                onClick={() => scrollTo('pengalaman')}
                className={`flex items-center gap-1.5 text-sm font-semibold hover:underline px-2 py-1 transition-colors ${
                  darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'
                }`}
              >
                <span>Lihat Portofolio</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Metrics Strip */}
            <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t ${
              darkMode ? 'border-slate-800/80' : 'border-slate-200'
            }`}>
              {CV_DATA.stats.map((st, i) => (
                <div key={i} className="space-y-0.5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text text-transparent">
                      {st.value}
                    </span>
                    <span className={`text-xs font-semibold ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {st.suffix}
                    </span>
                  </div>
                  <div className={`text-xs font-medium ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                    {st.label}
                  </div>
                  <div className={`text-[11px] truncate ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                    {st.description}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Profile Photo Card & Floating Accents */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[360px] sm:max-w-[400px]">
              
              {/* Outer Decorative Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-sky-500 to-purple-600 rounded-3xl blur-lg opacity-40 group-hover:opacity-60 transition duration-1000 -z-10" />

              {/* Main Card Container */}
              <div className={`rounded-2xl border p-4 sm:p-5 relative overflow-hidden backdrop-blur-xl ${
                darkMode 
                  ? 'bg-slate-900/90 border-slate-800 shadow-2xl shadow-indigo-950/40' 
                  : 'bg-white/95 border-slate-200/90 shadow-xl shadow-slate-200/60'
              }`}>
                
                {/* Header of Profile Card */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/20 dark:border-slate-800 text-xs">
                  <span className="font-mono text-indigo-400 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    noval-muhaimin.dev
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                </div>

                {/* 
                  ========================================================================
                  <!-- Ganti dengan foto Anda nanti -->
                  KOMENTAR KODE:
                  Untuk mengganti foto profil Anda secara permanen:
                  1. Masukkan file foto Anda ke folder `/public/foto-noval.jpg` atau `/src/assets/foto-noval.jpg`
                  2. Ubah atribut `src` pada tag <img> di bawah menjadi URL foto Anda.
                  3. Atau Anda dapat menggunakan tombol "Unggah Foto Anda" di bawah ini 
                     untuk langsung mempratinjau foto Anda secara interaktif di browser!
                  ========================================================================
                */}
                <div className="relative mt-4 mb-4 rounded-xl overflow-hidden aspect-[4/5] bg-gradient-to-b from-indigo-950/50 to-slate-950 flex flex-col items-center justify-center border border-indigo-500/20 group">
                  
                  {customPhoto ? (
                    <img 
                      src={customPhoto} 
                      alt="Muhammad Noval Muhaimin" 
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    /* Default stylized avatar placeholder if no custom image is loaded */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center relative overflow-hidden bg-gradient-to-tr from-slate-900 via-indigo-950/70 to-slate-900">
                      
                      {/* Grid Pattern in Avatar Background */}
                      <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:16px_16px] opacity-25" />
                      
                      {/* Monogram / Avatar Graphic */}
                      <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-sky-400 p-[3px] shadow-xl shadow-indigo-600/30 mb-4 group-hover:scale-105 transition-transform">
                        <div className="w-full h-full rounded-[13px] bg-slate-950 flex flex-col items-center justify-center text-white">
                          <span className="font-mono text-3xl sm:text-4xl font-extrabold bg-gradient-to-br from-white via-indigo-200 to-sky-300 bg-clip-text text-transparent">
                            MNM
                          </span>
                          <span className="text-[10px] tracking-widest uppercase text-indigo-400 font-mono mt-0.5">
                            SURAKARTA
                          </span>
                        </div>
                      </div>

                      <div className="relative z-10 space-y-1">
                        <h4 className="font-bold text-base text-white">Muhammad Noval Muhaimin</h4>
                        <p className="text-xs text-indigo-300 font-medium">S1 Teknik Informatika • UMS</p>
                        <p className="text-[11px] text-slate-400 max-w-[220px] mx-auto pt-1">
                          Fullstack Developer | Laravel, Next.js, PostgreSQL & Manajemen Data
                        </p>
                      </div>

                      {/* Explicit marker for replacement */}
                      <div className="absolute bottom-2 left-2 right-2 text-center py-1 px-2 rounded-md bg-indigo-950/80 border border-indigo-500/30 text-[10px] text-indigo-200">
                        {/* <!-- Ganti dengan foto Anda nanti --> */}
                        Klik "Unggah Foto Anda" di bawah untuk melihat foto asli
                      </div>
                    </div>
                  )}

                  {/* Hidden file input for uploading custom photo in browser */}
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handlePhotoUpload}
                    accept="image/*"
                    className="hidden"
                  />
                </div>

                {/* Photo replacement helper buttons */}
                <div className="flex items-center gap-2 mb-3">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-medium border transition-colors ${
                      darkMode 
                        ? 'border-indigo-500/30 bg-indigo-500/10 text-indigo-300 hover:bg-indigo-500/20' 
                        : 'border-indigo-200 bg-indigo-50 text-indigo-700 hover:bg-indigo-100'
                    }`}
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>{customPhoto ? 'Ganti Foto Lain' : 'Unggah Foto Anda'}</span>
                  </button>

                  {customPhoto && (
                    <button
                      onClick={() => setCustomPhoto(null)}
                      title="Kembali ke avatar default"
                      className={`p-1.5 rounded-lg border text-xs ${
                        darkMode ? 'border-slate-700 text-slate-400 hover:text-white' : 'border-slate-300 text-slate-600'
                      }`}
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {/* Stack Badges at bottom of card */}
                <div className="space-y-2 pt-2 border-t border-slate-800/40 text-xs">
                  <div className="flex items-center justify-between">
                    <span className={`font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Keahlian Utama:</span>
                    <span className="font-semibold text-indigo-400">Laravel • Next.js • PostgreSQL</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>IPK / Predikat:</span>
                    <span className="font-semibold text-emerald-400">3.35 / 4.00 (Sangat Memuaskan)</span>
                  </div>
                </div>

              </div>

              {/* Floating Highlight 1: Education */}
              <div className={`hidden sm:flex absolute -left-6 top-1/4 -translate-y-1/2 items-center gap-2.5 p-2.5 rounded-xl border backdrop-blur-md shadow-xl ${
                darkMode ? 'bg-slate-900/90 border-slate-700 text-white' : 'bg-white/95 border-slate-200 text-slate-900'
              }`}>
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold">Teknik Informatika UMS</div>
                  <div className="text-[10px] text-emerald-400 font-semibold">IPK 3.35 / 4.00</div>
                </div>
              </div>

              {/* Floating Highlight 2: Modern Stack */}
              <div className={`hidden sm:flex absolute -right-6 bottom-12 items-center gap-2.5 p-2.5 rounded-xl border backdrop-blur-md shadow-xl ${
                darkMode ? 'bg-slate-900/90 border-slate-700 text-white' : 'bg-white/95 border-slate-200 text-slate-900'
              }`}>
                <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold">PostgreSQL & Sanctum</div>
                  <div className="text-[10px] text-sky-400 font-semibold">Multi-Role Security</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
