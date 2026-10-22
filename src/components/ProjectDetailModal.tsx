import React, { useEffect } from 'react';
import { 
  X, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { ExperienceItem } from '../data/cvData';

interface ProjectDetailModalProps {
  item: ExperienceItem | null;
  onClose: () => void;
  darkMode: boolean;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ item, onClose, darkMode }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div 
        className={`relative w-full max-w-2xl rounded-2xl border shadow-2xl overflow-hidden my-8 z-10 transition-all ${
          darkMode 
            ? 'bg-slate-900 border-slate-700 text-slate-100' 
            : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Modal Header */}
        <div className={`p-6 border-b flex items-start justify-between gap-4 ${
          darkMode ? 'border-slate-800 bg-slate-950/40' : 'border-slate-100 bg-slate-50'
        }`}>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase tracking-wider">
                {item.category.toUpperCase()}
              </span>
              {item.status && (
                <span className="px-2 py-0.5 rounded text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {item.status}
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              {item.title}
            </h3>
            <p className="text-sm font-semibold text-indigo-400 mt-1">
              {item.roleOrDegree} • {item.organization}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Tutup Modal"
            className={`p-2 rounded-xl border transition-colors ${
              darkMode ? 'border-slate-700 hover:bg-slate-800 text-slate-400 hover:text-white' : 'border-slate-200 hover:bg-slate-100 text-slate-600'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 text-slate-400">
              <Calendar className="w-4 h-4 text-indigo-400" />
              <span>{item.period}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-4 h-4 text-rose-400" />
              <span>{item.location}</span>
            </div>
          </div>

          {/* Key Metrics / Highlights if any */}
          {item.metrics && item.metrics.length > 0 && (
            <div className={`grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl ${
              darkMode ? 'bg-slate-950/80 border border-slate-800' : 'bg-slate-50 border border-slate-200'
            }`}>
              {item.metrics.map((m, idx) => (
                <div key={idx}>
                  <div className={`text-[11px] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{m.label}</div>
                  <div className="text-sm font-bold text-indigo-400">{m.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Detailed Points */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-400" />
              <span>Rincian Tanggung Jawab & Implementasi</span>
            </h4>
            <div className="space-y-3">
              {item.description.map((desc, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-sky-400" />
              <span>Kompetensi & Teknologi Terkait</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {item.skills.map((sk, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 rounded-lg text-xs font-mono font-medium border ${
                    darkMode ? 'bg-slate-950 border-slate-800 text-indigo-300' : 'bg-slate-100 border-slate-200 text-indigo-700'
                  }`}
                >
                  {sk}
                </span>
              ))}
            </div>
          </div>

          {/* In-depth Architectural Summary note */}
          <div className={`p-4 rounded-xl border text-xs leading-relaxed ${
            darkMode ? 'bg-indigo-950/20 border-indigo-500/20 text-indigo-200' : 'bg-indigo-50/70 border-indigo-200 text-indigo-900'
          }`}>
            <span className="font-bold flex items-center gap-1.5 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Nilai Tambah & Rekam Jejak
            </span>
            Proyek ini mencerminkan kompetensi teknis Muhammad Noval Muhaimin dalam memetakan kebutuhan pengguna ke dalam arsitektur perangkat lunak yang andal, scalable, dan terdokumentasi rapi.
          </div>
        </div>

        {/* Modal Footer */}
        <div className={`p-4 border-t flex items-center justify-end ${
          darkMode ? 'border-slate-800 bg-slate-950/30' : 'border-slate-100 bg-slate-50'
        }`}>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
