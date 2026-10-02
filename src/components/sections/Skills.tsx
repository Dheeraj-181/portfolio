import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Globe, 
  Cpu, 
  Sparkles, 
  Wrench, 
  Smartphone, 
  Search, 
  Layers 
} from 'lucide-react';
import { SKILLS_CATEGORIES, SKILLS_DATA } from '../../data/portfolioData';
import { SkillCategory } from '../../types';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    const matchesCategory = activeCategory === 'ALL' || skill.category === activeCategory;
    const matchesSearch = 
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (skill.description && skill.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (cat: SkillCategory) => {
    switch (cat) {
      case 'PROGRAMMING': return <Code2 className="w-3.5 h-3.5" />;
      case 'WEB DEVELOPMENT': return <Globe className="w-3.5 h-3.5" />;
      case 'SOFTWARE ENGINEERING': return <Cpu className="w-3.5 h-3.5" />;
      case 'AI / ML': return <Sparkles className="w-3.5 h-3.5" />;
      case 'TOOLS': return <Wrench className="w-3.5 h-3.5" />;
      case 'MOBILE': return <Smartphone className="w-3.5 h-3.5" />;
      default: return <Layers className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-surface-300/40 border-t border-b border-border-subtle">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">Skills</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Proficiencies categorized across software systems, modern web frameworks, biometrics pipelines, and cross-platform tools without arbitrary percentage bars.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {SKILLS_CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                      : 'bg-surface-100 hover:bg-surface-50 text-slate-300 border border-white/5'
                  }`}
                >
                  {getCategoryIcon(cat)}
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skill or tool..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-surface-100 border border-white/10 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {filteredSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, delay: idx * 0.02 }}
                className="glass-card rounded-xl p-4 border border-border-subtle hover:border-cyan-500/40 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-white text-sm group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 shrink-0">
                      {skill.tag}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {skill.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>{skill.category}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-slate-500 font-mono text-xs">
            No technical skills found matching "{searchQuery}" in {activeCategory}.
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
