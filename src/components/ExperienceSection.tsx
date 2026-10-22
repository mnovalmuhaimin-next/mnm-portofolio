import React, { useState } from 'react';
import { 
  Briefcase, 
  FolderGit2, 
  Users, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ExternalLink, 
  ChevronRight, 
  Sparkles,
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
        return { label: 'Pengalaman Kerja', color: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' };
      case 'project':
        return { label: 'Proyek Pilihan', color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' };
      case 'organization':
        return { label: 'Organisasi', color: 'bg-amber-500/10 text-amber-400 border-amber-500/20' };
      case 'certification':
        return { label: 'Sertifikasi', color: 'bg-sky-500/10 text-sky-400 border-sky-500/20' };
      default:
        return { label: 'Pengalaman', color: 'bg-slate-500/10 text-slate-400 border-slate-500/20' };
    }
  };

  return (
    <section id="pengalaman" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold tracking-wider uppercase mb-3 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Rekam Jejak Profesional</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Pengalaman Kerja, Proyek Unggulan & Organisasi
          </h2>
          <p className={`mt-3 text-base sm:text-lg leading-relaxed ${
            darkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Riwayat kontribusi nyata dalam pengembangan sistem informasi institusi, proyek mandiri, survei data nasional, dan kepemimpinan organisasi.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-800/40 dark:border-slate-800">
          {[
            { id: 'all', label: 'Semua Riwayat', icon: Layers, count: CV_DATA.experiences.length },
            { id: 'work', label: 'Pengalaman Kerja', icon: Briefcase, count: CV_DATA.experiences.filter(x => x.category === 'work').length },
            { id: 'project', label: 'Proyek Pilihan', icon: FolderGit2, count: CV_DATA.experiences.filter(x => x.category === 'project').length },
            { id: 'organization', label: 'Organisasi', icon: Users, count: CV_DATA.experiences.filter(x => x.category === 'organization').length },
            { id: 'certification', label: 'Sertifikasi', icon: Award, count: CV_DATA.experiences.filter(x => x.category === 'certification').length },
          ].map((tab) => {
            const Icon = tab.icon;
            const isCurrent = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-gradient-to-r from-indigo-600 to-sky-600 text-white shadow-md shadow-indigo-600/25'
                    : darkMode
                    ? 'text-slate-400 hover:text-white hover:bg-slate-900'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                  isCurrent ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-300'
                }`}>
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Timeline / Cards Container */}
        <div className="space-y-6">
          {filteredItems.map((item) => {
            const badge = getCategoryBadge(item.category);
            return (
              <div
                key={item.id}
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 relative group hover:border-indigo-500/50 ${
                  item.featured
                    ? darkMode
                      ? 'bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950 border-slate-700/80 shadow-lg'
                      : 'bg-gradient-to-br from-indigo-50/40 via-white to-slate-50 border-slate-300 shadow-md'
                    : darkMode
                    ? 'bg-slate-900/50 border-slate-800/80'
                    : 'bg-white border-slate-200'
                }`}
              >
                {/* Top Badge & Date Row */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-semibold border ${badge.color}`}>
                      {badge.label}
                    </span>
                    {item.status && (
                      <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        {item.status}
                      </span>
                    )}
                    {item.featured && (
                      <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-amber-400">
                        <Sparkles className="w-3.5 h-3.5" />
                        Featured
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 text-xs sm:text-sm font-medium">
                    <span className={`flex items-center gap-1.5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      <Calendar className="w-4 h-4 text-indigo-400" />
                      {item.period}
                    </span>
                    <span className={`flex items-center gap-1.5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      <MapPin className="w-4 h-4 text-rose-400" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Title & Role */}
                <div className="mb-4">
                  <h3 className={`text-xl sm:text-2xl font-bold tracking-tight mb-1 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base font-semibold">
                    <span className="text-indigo-400">{item.roleOrDegree}</span>
                    <span className={darkMode ? 'text-slate-600' : 'text-slate-300'}>•</span>
                    <span className={darkMode ? 'text-slate-200' : 'text-slate-700'}>{item.organization}</span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2 mb-6">
                  {item.description.map((desc, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5 text-sm sm:text-base leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-2.5" />
                      <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Metrics Highlight Strip (If any) */}
                {item.metrics && item.metrics.length > 0 && (
                  <div className={`grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 rounded-xl mb-6 ${
                    darkMode ? 'bg-slate-950/60 border border-slate-800' : 'bg-slate-50 border border-slate-200/80'
                  }`}>
                    {item.metrics.map((m, mIdx) => (
                      <div key={mIdx}>
                        <div className={`text-[11px] font-medium ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                          {m.label}
                        </div>
                        <div className={`text-xs sm:text-sm font-bold ${darkMode ? 'text-indigo-300' : 'text-indigo-600'}`}>
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Skills Tags & Action */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800/40 dark:border-slate-800">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {item.skills.map((sk, sIdx) => (
                      <span
                        key={sIdx}
                        className={`px-2.5 py-1 rounded-md text-xs font-mono font-medium ${
                          darkMode ? 'bg-slate-800/80 text-slate-300' : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        #{sk}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectProject(item)}
                    className={`inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                      darkMode
                        ? 'border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/10'
                        : 'border-indigo-200 text-indigo-700 hover:bg-indigo-50'
                    }`}
                  >
                    <span>Detail Informasi</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
