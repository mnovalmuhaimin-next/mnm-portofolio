import React, { useState } from 'react';
import { 
  X, 
  Terminal, 
  FolderTree, 
  Code2, 
  CloudUpload, 
  Copy, 
  Check, 
  ExternalLink,
  BookOpen,
  Sparkles,
  Layers
} from 'lucide-react';

interface NextjsVercelGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export const NextjsVercelGuideModal: React.FC<NextjsVercelGuideModalProps> = ({
  isOpen,
  onClose,
  darkMode,
}) => {
  const [activeTab, setActiveTab] = useState<'cli' | 'tree' | 'code' | 'vercel'>('cli');
  const [codeFileTab, setCodeFileTab] = useState<'page' | 'layout' | 'css' | 'cvdata'>('page');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const cliCommands = `# 1. Buat project Next.js baru dengan App Router & Tailwind CSS
npx create-next-app@latest mnm-portfolio --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# 2. Masuk ke direktori project
cd mnm-portfolio

# 3. Install paket ikon modern & animasi
npm install lucide-react framer-motion canvas-confetti
npm install -D @types/canvas-confetti

# 4. Jalankan development server lokal
npm run dev

# Buka http://localhost:3000 di browser Anda!`;

  const folderTreeString = `mnm-portfolio/
├── public/
│   ├── foto-noval.jpg          # Foto profil Anda (tinggal masukkan foto di sini)
│   ├── favicon.ico
│   └── cv-muhammad-noval.pdf   # File PDF CV Anda untuk diunduh langsung
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (Metadata SEO, font Plus Jakarta Sans)
│   │   ├── page.tsx            # Main Page (Hero, Tentang, Skill, Pengalaman, Kontak)
│   │   └── globals.css         # Styling global Tailwind & animasi custom
│   ├── components/
│   │   ├── Navbar.tsx          # Navigasi responsif, Dark Mode, & CTA CV
│   │   ├── Hero.tsx            # Hero section dengan placeholder avatar foto
│   │   ├── AboutSection.tsx    # Profil, S1 UMS (IPK 3.35), Pilar keahlian
│   │   ├── SkillsSection.tsx   # Filter skill, badge level, search
│   │   ├── ExperienceSection.tsx # Tab filter riwayat, proyek, organisasi
│   │   ├── ProjectModal.tsx    # Modal detail teknis arsitektur proyek
│   │   ├── CvModal.tsx         # Modal preview & cetak CV (A4 print ready)
│   │   ├── ContactSection.tsx  # WhatsApp, Email, LinkedIn, Formulir
│   │   └── Footer.tsx          # Hak cipta & link sosial
│   └── data/
│       └── cvData.ts           # Data CV Muhammad Noval Muhaimin terstruktur
├── .env.local                  # Environment variables lokal
├── next.config.ts              # Konfigurasi Next.js
├── tailwind.config.ts          # Konfigurasi tema Tailwind CSS
├── tsconfig.json               # Konfigurasi TypeScript
└── package.json`;

  const codeSnippets = {
    page: `// src/app/page.tsx
'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { ProjectDetailModal } from '@/components/ProjectDetailModal';
import { CvPreviewModal } from '@/components/CvPreviewModal';
import { ExperienceItem } from '@/data/cvData';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedProject, setSelectedProject] = useState<ExperienceItem | null>(null);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  return (
    <div className={darkMode ? 'dark bg-slate-950 text-slate-100 min-h-screen' : 'bg-slate-50 text-slate-900 min-h-screen'}>
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        onOpenCvModal={() => setCvModalOpen(true)}
      />
      <main>
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
      <Footer darkMode={darkMode} />

      {/* Modals */}
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
}`,
    layout: `// src/app/layout.tsx
import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Muhammad Noval Muhaimin | Fullstack Developer & Data Management',
  description: 'Portofolio resmi Muhammad Noval Muhaimin - Fullstack Developer (Laravel, Next.js, PostgreSQL) & Data Management. Berdomisili di Surakarta.',
  openGraph: {
    title: 'Muhammad Noval Muhaimin | Fullstack Developer',
    description: 'Sistem Informasi Web, Administrasi Sistem & Manajemen Data.',
    url: 'https://mnm-project.site',
    siteName: 'Portofolio M. Noval Muhaimin',
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={\`\${plusJakartaSans.variable} font-sans antialiased\`}>
        {children}
      </body>
    </html>
  );
}`,
    css: `/* src/app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
}

/* Custom modern scrollbar */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: rgba(15, 23, 42, 0.6);
}
::-webkit-scrollbar-thumb {
  background: rgba(99, 102, 241, 0.4);
  border-radius: 9999px;
}
::-webkit-scrollbar-thumb:hover {
  background: rgba(99, 102, 241, 0.8);
}`,
    cvdata: `// src/data/cvData.ts
// (File data terstruktur CV Muhammad Noval Muhaimin yang siap pakai)
export const CV_DATA = {
  personal: {
    fullName: "Muhammad Noval Muhaimin",
    title: "Fullstack Developer | Administrasi Sistem | Data Management",
    location: "Surakarta, Jawa Tengah, Indonesia",
    email: "mnovalmuhaimin@gmail.com",
    phone: "+62 813-2669-0102",
    linkedin: "https://linkedin.com/in/m-noval-muhaimin-5716aa2a0",
    portfolioUrl: "https://mnm-project.site",
    gpa: "3.35 / 4.00",
    education: {
      degree: "S1 Teknik Informatika",
      institution: "Universitas Muhammadiyah Surakarta (UMS)",
      period: "2020 - 2024",
      thesis: "Sistem Hybrid Manajemen Zakat Lazismu (Web & Mobile)"
    }
  }
  // Lengkap dengan skillCategories dan experiences...
};`
  };

  const vercelSteps = [
    {
      step: "Langkah 1",
      title: "Upload Kode ke GitHub",
      desc: "Buka terminal di folder project Anda, lalu jalankan perintah berikut untuk mengunggah ke GitHub:",
      cmd: `git init
git add .
git commit -m "feat: initial portfolio Muhammad Noval Muhaimin"
git branch -M main
git remote add origin https://github.com/USERNAME-ANDA/portfolio-noval.git
git push -u origin main`
    },
    {
      step: "Langkah 2",
      title: "Daftar & Login di Vercel (Gratis)",
      desc: "Buka https://vercel.com/signup lalu pilih 'Continue with GitHub'. Vercel menyediakan kuota Hobby gratis selamanya tanpa perlu kartu kredit.",
      cmd: null
    },
    {
      step: "Langkah 3",
      title: "Import Repository GitHub",
      desc: "Di dashboard Vercel, klik tombol 'Add New...' > 'Project', lalu pilih repository 'portfolio-noval' yang baru saja Anda push ke GitHub.",
      cmd: null
    },
    {
      step: "Langkah 4",
      title: "Deploy Sekali Klik & Hubungkan Domain mnm-project.site",
      desc: "Biarkan Framework Preset 'Next.js', lalu klik 'Deploy'. Dalam waktu ~1 menit, website Anda sudah live di internet! Untuk menghubungkan custom domain Anda 'mnm-project.site', buka Settings > Domains > masukkan mnm-project.site dan arahkan DNS A Record / CNAME sesuai petunjuk Vercel.",
      cmd: null
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity" 
      />

      {/* Modal Dialog */}
      <div className={`relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl border shadow-2xl z-10 overflow-hidden my-auto ${
        darkMode ? 'bg-slate-900 border-slate-700 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
      }`}>
        
        {/* Header */}
        <div className={`flex items-center justify-between px-6 py-4 border-b ${
          darkMode ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'
        }`}>
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-bold">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-bold">
                Panduan Setup Next.js (App Router) & Deploy Vercel Gratis
              </h3>
              <p className="text-xs text-slate-400">
                Panduan langkah demi langkah, struktur folder & kode siap pakai
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-lg border transition-colors ${
              darkMode ? 'border-slate-800 hover:bg-slate-800 text-slate-400' : 'border-slate-200 hover:bg-slate-100 text-slate-600'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className={`flex border-b text-xs font-semibold overflow-x-auto ${
          darkMode ? 'border-slate-800 bg-slate-950/50' : 'border-slate-200 bg-slate-100/50'
        }`}>
          {[
            { id: 'cli', label: '1. Inisialisasi Project (CLI)', icon: Terminal },
            { id: 'tree', label: '2. Struktur File & Folder', icon: FolderTree },
            { id: 'code', label: '3. Kode Lengkap File Utama', icon: Code2 },
            { id: 'vercel', label: '4. Deploy Gratis ke Vercel', icon: CloudUpload },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-3 border-b-2 whitespace-nowrap transition-colors cursor-pointer ${
                  isSelected
                    ? 'border-indigo-500 text-indigo-400 bg-indigo-500/10'
                    : 'border-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 max-h-[68vh]">
          
          {/* TAB 1: CLI Commands */}
          {activeTab === 'cli' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-300">
                  Jalankan perintah ini di Command Prompt / Terminal laptop Anda untuk membuat project Next.js baru dengan Tailwind CSS dan Framer Motion:
                </p>
                <button
                  onClick={() => copyToClipboard(cliCommands, 'cli')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
                >
                  {copiedId === 'cli' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId === 'cli' ? 'Tersalin!' : 'Salin Perintah'}</span>
                </button>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-sky-300 overflow-x-auto whitespace-pre leading-relaxed">
                {cliCommands}
              </div>

              <div className={`p-4 rounded-xl border text-xs leading-relaxed ${
                darkMode ? 'bg-indigo-950/20 border-indigo-500/30 text-indigo-300' : 'bg-indigo-50 border-indigo-200 text-indigo-900'
              }`}>
                <strong>💡 Catatan Penting:</strong> Pastikan Anda telah menginstal <strong>Node.js (versi 18 ke atas)</strong> di komputer Anda. Anda dapat mengeceknya dengan mengetik <code>node -v</code> di terminal.
              </div>
            </div>
          )}

          {/* TAB 2: File Structure */}
          {activeTab === 'tree' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-300">
                  Berikut adalah susunan folder ideal untuk arsitektur Next.js App Router yang rapi dan modular:
                </p>
                <button
                  onClick={() => copyToClipboard(folderTreeString, 'tree')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
                >
                  {copiedId === 'tree' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId === 'tree' ? 'Tersalin!' : 'Salin Struktur'}</span>
                </button>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-400 overflow-x-auto whitespace-pre leading-relaxed">
                {folderTreeString}
              </div>
            </div>
          )}

          {/* TAB 3: Code Snippets */}
          {activeTab === 'code' && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-1 p-1 rounded-lg bg-slate-950 border border-slate-800">
                  {[
                    { id: 'page', label: 'src/app/page.tsx' },
                    { id: 'layout', label: 'src/app/layout.tsx' },
                    { id: 'css', label: 'src/app/globals.css' },
                    { id: 'cvdata', label: 'src/data/cvData.ts' },
                  ].map((sub) => (
                    <button
                      key={sub.id}
                      onClick={() => setCodeFileTab(sub.id as any)}
                      className={`px-3 py-1 rounded-md text-xs font-mono font-medium transition-colors ${
                        codeFileTab === sub.id
                          ? 'bg-indigo-600 text-white'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {sub.label}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => copyToClipboard(codeSnippets[codeFileTab], 'code-tab')}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
                >
                  {copiedId === 'code-tab' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId === 'code-tab' ? 'Tersalin!' : 'Salin File Ini'}</span>
                </button>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto whitespace-pre max-h-[380px] leading-relaxed">
                {codeSnippets[codeFileTab]}
              </div>
            </div>
          )}

          {/* TAB 4: Vercel Deploy Guide */}
          {activeTab === 'vercel' && (
            <div className="space-y-6">
              <p className="text-sm text-slate-300">
                Vercel adalah platform hosting cloud resmi pembuat Next.js. Sangat cepat, memiliki SSL/HTTPS otomatis gratis, dan mendukung custom domain <strong>mnm-project.site</strong> tanpa dipungut biaya sepeserpun (100% Free Hobby Plan).
              </p>

              <div className="space-y-4">
                {vercelSteps.map((step, idx) => (
                  <div 
                    key={idx}
                    className={`p-4 rounded-xl border ${
                      darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                        {step.step}
                      </span>
                      <h4 className="font-bold text-sm text-white">
                        {step.title}
                      </h4>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed mb-3">
                      {step.desc}
                    </p>

                    {step.cmd && (
                      <div className="relative">
                        <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-sky-400 overflow-x-auto whitespace-pre">
                          {step.cmd}
                        </div>
                        <button
                          onClick={() => copyToClipboard(step.cmd!, `step-${idx}`)}
                          className="absolute right-2 top-2 p-1.5 rounded bg-slate-800 text-slate-300 hover:text-white"
                          title="Salin Perintah"
                        >
                          {copiedId === `step-${idx}` ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className={`p-4 border-t flex items-center justify-between ${
          darkMode ? 'border-slate-800 bg-slate-950' : 'border-slate-200 bg-slate-50'
        }`}>
          <div className="text-xs text-slate-400 hidden sm:block">
            Semua kode dalam portofolio ini sudah kompatibel 100% dengan Next.js App Router & Tailwind CSS.
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors cursor-pointer"
          >
            Tutup Panduan
          </button>
        </div>

      </div>
    </div>
  );
};
