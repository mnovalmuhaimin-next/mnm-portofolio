import React, { useState } from 'react';
import { 
  Briefcase, 
  FolderGit2, 
  Users, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Layers
} from 'lucide-react';
import { CV_DATA, ExperienceItem } from '../data/cvData';

interface ExperienceSectionProps {
  darkMode: boolean;
  onSelectProject: (item: ExperienceItem) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ darkMode, onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'work' | 'project' | 'organization' | 'certification'>('all');

  const filteredItems = CV_DATA.experiences.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  const getCategoryBadge = (cat: string) => {
    switch (cat) {
      case 'work':
        return { label: 'Kerja', color: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' };
      case 'project':
        return { label: 'Proyek', color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' };
      case 'organization':
        return { label: 'Organisasi', color: 'bg-amber-500/10 text-amber-400 border-amber-500/20' };
      case 'certification':
        return { label: 'Sertifikasi', color: 'bg-sky-500/10 text-sky-400 border-sky-500/20' };
      default:
        return { label: 'Pengalaman', color: 'bg-slate-500/10 text-slate-400 border-slate-500/20' };
    }
  };

  return (
    <section id="pengalaman" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold tracking-wider uppercase mb-2 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Pengalaman & Proyek</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Riwayat Ringkas & Portofolio
          </h2>
          <p className={`mt-2 text-xs sm:text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Ringkasan poin penting pada proyek dan pengalaman kerja. Klik kartu untuk melihat rincian lengkap.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 mb-8 pb-2 border-b border-slate-800/40 dark:border-slate-800">
          {[
            { id: 'all', label: 'Semua', count: CV_DATA.experiences.length },
            { id: 'work', label: 'Pengalaman Kerja', count: CV_DATA.experiences.filter(x => x.category === 'work').length },
            { id: 'project', label: 'Proyek Pilihan', count: CV_DATA.experiences.filter(x => x.category === 'project').length },
            { id: 'organization', label: 'Organisasi', count: CV_DATA.experiences.filter(x => x.category === 'organization').length },
            { id: 'certification', label: 'Sertifikasi', count: CV_DATA.experiences.filter(x => x.category === 'certification').length },
          ].map((tab) => {
            const isCurrent = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : darkMode
                    ? 'text-slate-400 hover:text-white hover:bg-slate-900'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                  isCurrent ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Clean, Bite-Sized Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredItems.map((item) => {
            const badge = getCategoryBadge(item.category);
            return (
              <div
                key={item.id}
                onClick={() => onSelectProject(item)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer group flex flex-col justify-between ${
                  darkMode
                    ? 'bg-slate-900/50 border-slate-800/80 hover:border-indigo-500/50 hover:bg-slate-900/80'
                    : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-md'
                }`}
              >
                <div>
                  {/* Top Header Row */}
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${badge.color}`}>
                        {badge.label}
                      </span>
                      {item.status && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {item.status}
                        </span>
                      )}
                    </div>
                    <span className={`text-[11px] font-medium flex items-center gap-1 ${
                      darkMode ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      <Calendar className="w-3 h-3 text-indigo-400" />
                      {item.period}
                    </span>
                  </div>

                  {/* Title & Role */}
                  <h3 className={`text-base font-bold tracking-tight group-hover:text-indigo-400 transition-colors ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {item.title}
                  </h3>
                  <div className="text-xs font-medium text-indigo-400 mt-0.5 mb-2.5">
                    {item.roleOrDegree} • <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>{item.organization}</span>
                  </div>

                  {/* Poin Penting Ringkas (1 kalimat saja di homepage) */}
                  <p className={`text-xs leading-relaxed line-clamp-2 mb-4 ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {item.summary}
                  </p>
                </div>

                {/* Footer: Skills Tags & Detail CTA */}
                <div className="pt-3 border-t border-slate-800/40 dark:border-slate-800 flex items-center justify-between gap-2 text-xs">
                  <div className="flex flex-wrap gap-1">
                    {item.skills.slice(0, 3).map((sk, sIdx) => (
                      <span
                        key={sIdx}
                        className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                          darkMode ? 'bg-slate-800/80 text-slate-300' : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {sk}
                      </span>
                    ))}
                    {item.skills.length > 3 && (
                      <span className={`px-1.5 py-0.5 text-[10px] ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                        +{item.skills.length - 3}
                      </span>
                    )}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-400 group-hover:translate-x-0.5 transition-transform shrink-0">
                    <span>Lihat Detail</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
