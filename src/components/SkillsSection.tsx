import React, { useState } from 'react';
import { 
  Code2, 
  Database, 
  FileCheck2, 
  ClipboardList, 
  Wrench, 
  Search, 
  Check, 
  Sparkles,
  Layers
} from 'lucide-react';
import { CV_DATA } from '../data/cvData';

interface SkillsSectionProps {
  darkMode: boolean;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ darkMode }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categoryIcons: Record<string, React.ElementType> = {
    'web-dev': Code2,
    database: Database,
    testing: FileCheck2,
    'admin-data': ClipboardList,
    tools: Wrench,
  };

  const filteredCategories = CV_DATA.skillCategories
    .filter((cat) => selectedCategory === 'all' || cat.id === selectedCategory)
    .map((cat) => {
      const filteredItems = cat.items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      return {
        ...cat,
        items: filteredItems,
      };
    })
    .filter((cat) => cat.items.length > 0);

  const getLevelBadgeColor = (level: string) => {
    switch (level) {
      case 'Expert':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'Advanced':
        return 'bg-indigo-500/10 text-indigo-400 border-indigo-500/30';
      case 'Intermediate':
        return 'bg-sky-500/10 text-sky-400 border-sky-500/30';
      default:
        return 'bg-slate-500/10 text-slate-400 border-slate-500/30';
    }
  };

  return (
    <section id="kompetensi" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold tracking-wider uppercase mb-3 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Code2 className="w-3.5 h-3.5" />
              <span>Kompetensi & Keahlian Teknis</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Stack Teknologi & Manajemen Data Terverifikasi
            </h2>
            <p className={`mt-3 text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Kombinasi keahlian fullstack engineering modern, database relasional terstruktur, dan akurasi pengelolaan data administratif.
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full md:w-72 relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Cari skill (e.g. Sanctum, Next.js)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 text-sm rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800 text-white placeholder-slate-500'
                  : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'
              }`}
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-slate-800/30 dark:border-slate-800">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-indigo-600 to-sky-600 text-white shadow-md shadow-indigo-600/20'
                : darkMode
                ? 'text-slate-400 hover:text-white hover:bg-slate-900'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Semua Kompetensi
          </button>

          {CV_DATA.skillCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Layers;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-indigo-600 to-sky-600 text-white shadow-md shadow-indigo-600/20'
                    : darkMode
                    ? 'text-slate-400 hover:text-white hover:bg-slate-900'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Layers;
            return (
              <div
                key={category.id}
                className={`p-6 rounded-2xl border flex flex-col justify-between transition-all duration-300 hover:border-indigo-500/40 hover:shadow-xl ${
                  darkMode
                    ? 'bg-slate-900/60 border-slate-800 hover:bg-slate-900/80'
                    : 'bg-white border-slate-200 hover:shadow-slate-200/60'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center border border-indigo-500/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className={`font-bold text-base ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {category.name}
                      </h3>
                      <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                        {category.items.length} Keahlian Utama
                      </p>
                    </div>
                  </div>

                  <p className={`text-xs mb-5 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                    {category.description}
                  </p>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {category.items.map((skill, idx) => (
                      <div
                        key={idx}
                        className={`p-3 rounded-xl border transition-colors ${
                          skill.highlight
                            ? darkMode
                              ? 'bg-indigo-950/20 border-indigo-500/30'
                              : 'bg-indigo-50/50 border-indigo-200'
                            : darkMode
                            ? 'bg-slate-950/40 border-slate-800/80'
                            : 'bg-slate-50 border-slate-100'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span className={`text-sm font-bold flex items-center gap-1.5 ${
                            darkMode ? 'text-white' : 'text-slate-900'
                          }`}>
                            {skill.highlight && <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
                            {skill.name}
                          </span>
                          <span className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${getLevelBadgeColor(skill.level)}`}>
                            {skill.level}
                          </span>
                        </div>
                        {skill.description && (
                          <p className={`text-xs leading-normal ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                            {skill.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`mt-5 pt-3 border-t text-[11px] font-mono ${
                  darkMode ? 'border-slate-800 text-slate-500' : 'border-slate-200 text-slate-400'
                }`}>
                  Fasilitas: Teruji dalam Proyek Nyata
                </div>
              </div>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 text-slate-400">
            Tidak ditemukan keahlian yang cocok dengan kata kunci "{searchQuery}".
          </div>
        )}

      </div>
    </section>
  );
};
