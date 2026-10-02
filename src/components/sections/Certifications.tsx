import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, Cpu } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-background">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/3 -translate-y-1/2 w-[500px] h-[350px] bg-cyan-500/5 blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIAL VERIFICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Certifications</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Validated credentials in emerging quantum computational models and foundational enterprise IT architectures.
          </p>
        </div>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl p-7 border border-border-subtle hover:border-cyan-500/40 transition-all shadow-xl relative overflow-hidden group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    {idx === 0 ? <Cpu className="w-6 h-6" /> : <Award className="w-6 h-6" />}
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                    <CheckCircle className="w-3 h-3" /> Verified Credential
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {cert.title}
                </h3>
                <div className="text-xs font-mono text-cyan-400/90 mb-3">
                  {cert.issuer}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {cert.description}
                </p>
              </div>

              <div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">Key Competencies</div>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                  {cert.skills.map(skill => (
                    <span key={skill} className="px-2.5 py-1 rounded bg-surface-100 border border-white/5 text-[11px] font-mono text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card bottom shine */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
