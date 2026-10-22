import React, { useState } from 'react';
import { 
  Code2, 
  Database, 
  FileCheck2, 
  ClipboardList, 
  Wrench, 
  Search, 
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
        (item) => item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return {
        ...cat,
        items: filteredItems,
      };
    })
    .filter((cat) => cat.items.length > 0);

  return (
    <section id="kompetensi" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-semibold tracking-wider uppercase mb-2 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Code2 className="w-3.5 h-3.5" />
              <span>Kompetensi Teknis</span>
            </div>
            <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
              darkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Stack & Pengalaman Teknologi
            </h2>
            <p className={`mt-2 text-xs sm:text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Durasi pengalaman penggunaan teknologi berdasarkan riwayat proyek dan pekerjaan (1–2 tahun).
            </p>
          </div>

          {/* Quick Search */}
          <div className="w-full md:w-64 relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Cari skill (e.g. Laravel, Figma)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-9 pr-3 py-1.5 text-xs rounded-xl border focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors ${
                darkMode
                  ? 'bg-slate-900/80 border-slate-800 text-white placeholder-slate-500'
                  : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'
              }`}
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-1.5 mb-8 pb-2 border-b border-slate-800/40 dark:border-slate-800">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-indigo-600 text-white'
                : darkMode
                ? 'text-slate-400 hover:text-white hover:bg-slate-900'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            Semua
          </button>

          {CV_DATA.skillCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Layers;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-600 text-white'
                    : darkMode
                    ? 'text-slate-400 hover:text-white hover:bg-slate-900'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Compact Clean Skill Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Layers;
            return (
              <div
                key={category.id}
                className={`p-5 rounded-2xl border transition-all ${
                  darkMode
                    ? 'bg-slate-900/50 border-slate-800/80'
                    : 'bg-white border-slate-200'
                }`}
              >
                {/* Category Title */}
                <div className="flex items-center gap-2.5 mb-4 pb-2 border-b border-slate-800/30 dark:border-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className={`font-bold text-sm ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {category.name}
                  </h3>
                </div>

                {/* Skill Pills with Experience Duration */}
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, idx) => (
                    <div
                      key={idx}
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium border ${
                        skill.highlight
                          ? darkMode
                            ? 'bg-indigo-950/40 border-indigo-500/30 text-indigo-200'
                            : 'bg-indigo-50/70 border-indigo-200 text-indigo-800'
                          : darkMode
                          ? 'bg-slate-950/60 border-slate-800 text-slate-300'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      <span>{skill.name}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded font-medium ${
                        darkMode
                          ? 'bg-slate-800/90 text-indigo-300'
                          : 'bg-slate-200/90 text-indigo-800'
                      }`}>
                        {skill.experience}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
