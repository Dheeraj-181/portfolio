import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Layers, Sparkles, User, MapPin, Calendar, BookOpen } from 'lucide-react';
import { ABOUT_DATA, PERSONAL_INFO } from '../../data/portfolioData';

export const About: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-blue-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-violet-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
      default:
        return <Code2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-background">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-cyan-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <User className="w-3.5 h-3.5" />
            <span>ENGINEERING PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Me</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Architecting modern applications, bridging machine learning models to the web, and engineering scalable cloud systems.
          </p>
        </div>

        {/* Narrative & Profile Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            <p className="p-4 rounded-xl bg-surface-100/70 border border-white/5 border-l-2 border-l-cyan-400">
              {ABOUT_DATA.intro}
            </p>
            <p>
              {ABOUT_DATA.focus}
            </p>
            <p>
              {ABOUT_DATA.philosophy}
            </p>
            <p>
              {ABOUT_DATA.experience}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 glass-card rounded-2xl p-6 border border-border-subtle"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                Quick Facts &amp; Context
              </span>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Active
              </span>
            </div>

            <div className="space-y-3.5 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono text-slate-400">Location</div>
                  <div className="text-white font-medium">{PERSONAL_INFO.location}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <BookOpen className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono text-slate-400">Institution</div>
                  <div className="text-white font-medium">{PERSONAL_INFO.institution}</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-mono text-slate-400">Expected Graduation</div>
                  <div className="text-white font-medium">{PERSONAL_INFO.graduationYear} (B.Tech CSE)</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 4 Interactive Pillars Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUT_DATA.pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl p-6 border border-border-subtle group hover:border-cyan-500/40 relative overflow-hidden transition-all shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-surface-100 border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  {getIcon(pillar.icon)}
                </div>
                <span className="font-mono text-sm font-bold text-slate-400 group-hover:text-cyan-400 transition-colors">
                  {pillar.number}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {pillar.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {pillar.desc}
              </p>

              {/* Bottom accent glow */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
