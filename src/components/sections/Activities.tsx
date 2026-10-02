import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Lightbulb, Rocket, Terminal, GitBranch } from 'lucide-react';
import { ACTIVITIES_DATA } from '../../data/portfolioData';

export const Activities: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Flame className="w-5 h-5 text-amber-400" />;
      case 1: return <Rocket className="w-5 h-5 text-cyan-400" />;
      case 2: return <Lightbulb className="w-5 h-5 text-violet-400" />;
      case 3: return <Terminal className="w-5 h-5 text-emerald-400" />;
      default: return <GitBranch className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="activities" className="py-24 relative overflow-hidden bg-surface-300/40 border-t border-b border-border-subtle">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[550px] h-[350px] bg-amber-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/30 text-amber-300 text-xs font-mono mb-4">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>ACTIVITIES &amp; INITIATIVES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Activities &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-cyan-400 to-blue-400">Innovation</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Continuous engineering through hackathons, software prototype design, computer vision experimentation, and institutional tooling.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACTIVITIES_DATA.map((act, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="glass-card rounded-2xl p-6 border border-border-subtle hover:border-amber-500/40 transition-all shadow-lg flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-surface-100 border border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(idx)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    {act.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                  {act.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5">
                  {act.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                {act.tags.map(t => (
                  <span key={t} className="px-2 py-0.5 rounded bg-surface-200 text-[10px] font-mono text-slate-300 border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
