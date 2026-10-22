import React, { useRef } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Globe, 
  GraduationCap, 
  Briefcase, 
  Award, 
  CheckCircle2,
  Share2,
  MessageSquare
} from 'lucide-react';
import { CV_DATA } from '../data/cvData';
import confetti from 'canvas-confetti';

interface CvPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export const CvPreviewModal: React.FC<CvPreviewModalProps> = ({ isOpen, onClose, darkMode }) => {
  const printRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.6 }
    });
    window.print();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.6 }
    });
    alert('Tautan portofolio berhasil disalin!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity" 
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl z-10 overflow-hidden my-auto">
        
        {/* Top Control Bar (Hidden on print) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            <span className="text-sm font-bold text-white">
              Curriculum Vitae Resmi - Muhammad Noval Muhaimin
            </span>
            <span className="hidden sm:inline-block text-xs text-slate-400">
              (Siap Cetak / Unduh PDF)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/CV_Muhammad_Noval_Muhaimin.pdf"
              download="CV_Muhammad_Noval_Muhaimin.pdf"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-500 transition-colors shadow-sm"
              title="Unduh file PDF resmi asli"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Unduh PDF Resmi</span>
              <span className="sm:hidden">PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors cursor-pointer shadow-md shadow-indigo-600/30"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak</span>
            </button>

            <button
              onClick={handleCopyLink}
              title="Salin Tautan"
              className="p-2 rounded-xl border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              aria-label="Tutup"
              className="p-2 rounded-xl border border-slate-700 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Paper Area (A4 style white document for clean printout) */}
        <div className="overflow-y-auto p-4 sm:p-8 bg-slate-900/60 print:p-0 print:bg-white">
          <div 
            ref={printRef}
            className="max-w-[800px] mx-auto bg-white text-slate-900 p-8 sm:p-12 rounded-xl shadow-2xl print:shadow-none print:p-0 print:rounded-none font-sans"
          >
            {/* CV Header */}
            <div className="border-b-2 border-indigo-600 pb-6 mb-6">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 uppercase">
                {CV_DATA.personal.fullName}
              </h1>
              <p className="text-indigo-700 font-bold text-sm sm:text-base mt-1">
                {CV_DATA.personal.title}
              </p>

              {/* Contact Bar */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-600 mt-3">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-indigo-600" />
                  {CV_DATA.personal.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-indigo-600" />
                  {CV_DATA.personal.email}
                </span>
                <span>•</span>
                <a
                  href={CV_DATA.personal.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-emerald-700 hover:underline"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp (Chat Langsung)</span>
                </a>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Linkedin className="w-3.5 h-3.5 text-indigo-600" />
                  linkedin.com/in/{CV_DATA.personal.linkedinUsername}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-indigo-600" />
                  {CV_DATA.personal.portfolioDomain}
                </span>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="mb-6">
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-indigo-700 border-b border-slate-200 pb-1 mb-2">
                Ringkasan Profil
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
                {CV_DATA.personal.bio}
              </p>
            </div>

            {/* Main Competencies */}
            <div className="mb-6">
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-indigo-700 border-b border-slate-200 pb-1 mb-2.5">
                Technical Skills & Pengalaman
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-800">
                <div>
                  <strong className="text-slate-950 font-bold">Web Development:</strong> Laravel (± 2 thn), PHP (± 2 thn), Next.js (± 1 thn), React.js (± 1 thn), REST API (± 2 thn)
                </div>
                <div>
                  <strong className="text-slate-950 font-bold">Database & Access:</strong> PostgreSQL (± 1 thn), MySQL (± 2 thn), Sanctum (± 1 thn), Role/Permission (± 1 thn)
                </div>
                <div>
                  <strong className="text-slate-950 font-bold">Testing & Tools:</strong> Functional Testing & Debugging (± 2 thn), Git/GitLab (± 2 thn), Android Studio (± 1-2 thn), API Docs
                </div>
                <div>
                  <strong className="text-slate-950 font-bold">Administrasi & Data:</strong> Data Entry & Validation, Document Management, Reporting, Microsoft Office
                </div>
                <div>
                  <strong className="text-slate-950 font-bold">Desain & Kreatif:</strong> Figma (± 1-2 thn), Canva (± 1-2 thn), UI Wireframing
                </div>
              </div>
            </div>

            {/* Work Experiences */}
            <div className="mb-6">
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-indigo-700 border-b border-slate-200 pb-1 mb-3">
                Pengalaman Kerja
              </h2>
              <div className="space-y-4">
                {CV_DATA.experiences
                  .filter((e) => e.category === 'work')
                  .map((work) => (
                    <div key={work.id} className="text-xs">
                      <div className="flex justify-between items-baseline font-bold text-slate-950">
                        <span>{work.roleOrDegree} — {work.organization}</span>
                        <span className="text-slate-600 font-medium text-[11px]">{work.period} | {work.location}</span>
                      </div>
                      <div className="text-indigo-700 font-semibold text-[11px] mb-1">
                        {work.title}
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-slate-700 leading-normal pl-1">
                        {work.description.map((d, dIdx) => (
                          <li key={dIdx}>{d}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
              </div>
            </div>

            {/* Featured Project */}
            <div className="mb-6">
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-indigo-700 border-b border-slate-200 pb-1 mb-2.5">
                Proyek Pilihan & Tugas Akhir
              </h2>
              {CV_DATA.experiences
                .filter((e) => e.category === 'project')
                .map((proj) => (
                  <div key={proj.id} className="text-xs">
                    <div className="flex justify-between items-baseline font-bold text-slate-950">
                      <span>{proj.title}</span>
                      <span className="text-slate-600 font-medium text-[11px]">{proj.period}</span>
                    </div>
                    <p className="text-slate-700 mt-1 leading-normal">
                      {proj.description.join(' ')}
                    </p>
                    <div className="text-[11px] text-indigo-700 font-medium mt-1">
                      Teknologi: {proj.skills.join(', ')}
                    </div>
                  </div>
                ))}
            </div>

            {/* Education & Organizations in 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
              <div>
                <h2 className="text-xs font-extrabold uppercase tracking-widest text-indigo-700 border-b border-slate-200 pb-1 mb-2">
                  Pendidikan
                </h2>
                <div className="text-xs">
                  <div className="font-bold text-slate-950">
                    {CV_DATA.personal.education.institution}
                  </div>
                  <div className="text-slate-700">
                    {CV_DATA.personal.education.degree} ({CV_DATA.personal.education.period})
                  </div>
                  <div className="text-indigo-700 font-bold">
                    IPK: {CV_DATA.personal.education.gpa}
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xs font-extrabold uppercase tracking-widest text-indigo-700 border-b border-slate-200 pb-1 mb-2">
                  Pengalaman Organisasi
                </h2>
                <div className="space-y-2 text-xs">
                  {CV_DATA.experiences
                    .filter((e) => e.category === 'organization')
                    .map((org) => (
                      <div key={org.id}>
                        <div className="font-bold text-slate-950">
                          {org.roleOrDegree}
                        </div>
                        <div className="text-slate-600 text-[11px]">
                          {org.organization} ({org.period})
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-indigo-700 border-b border-slate-200 pb-1 mb-2">
                Sertifikasi & Pelatihan
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-700">
                {CV_DATA.experiences
                  .filter((e) => e.category === 'certification')
                  .map((cert) => (
                    <div key={cert.id} className="p-2 rounded bg-slate-50 border border-slate-200">
                      <div className="font-bold text-slate-950">{cert.title}</div>
                      <div className="text-[10px] text-slate-500">{cert.organization} ({cert.period})</div>
                    </div>
                  ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
