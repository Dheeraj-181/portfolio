import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, CheckCircle2 } from 'lucide-react';
import { EDUCATION_DATA } from '../../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-surface-300/40 border-t border-b border-border-subtle">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-violet-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-300 text-xs font-mono mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400">Timeline</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Rigorous academic grounding in computer science, mathematics, and software engineering principles.
          </p>
        </div>

        {/* Interactive Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 space-y-10 sm:space-y-12">
          {/* Vertical central bar */}
          <div className="absolute left-[11px] sm:left-[19px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-violet-500" />

          {EDUCATION_DATA.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-6 sm:-left-10 top-1.5 w-6 h-6 rounded-full bg-background border-2 border-cyan-400 group-hover:border-cyan-300 flex items-center justify-center shadow-[0_0_15px_rgba(0,242,254,0.3)] transition-colors">
                <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
              </div>

              {/* Education Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-border-subtle group-hover:border-cyan-500/40 transition-all shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.degree}
                  </h3>
                  <div className="flex items-center gap-2">
                    {item.score && (
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-semibold">
                        {item.score}
                      </span>
                    )}
                    <span className="px-2.5 py-1 rounded-lg bg-surface-100 text-slate-300 border border-white/5 font-mono text-xs">
                      {item.period}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 mb-4">
                  <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                    <GraduationCap className="w-3.5 h-3.5 text-cyan-400" />
                    {item.institution}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    {item.location}
                  </span>
                  {item.status && (
                    <span className="text-cyan-400 font-semibold">
                      • {item.status}
                    </span>
                  )}
                </div>

                {item.highlights && item.highlights.length > 0 && (
                  <div className="space-y-2 pt-3 border-t border-white/5">
                    {item.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400/80 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
