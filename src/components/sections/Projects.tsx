import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderGit2, 
  Check, 
  CheckCircle2,
  ExternalLink 
} from 'lucide-react';
import { PROJECTS_DATA } from '../../data/portfolioData';
import { ProjectCategory } from '../../types';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<ProjectCategory>('All');
  const [aryanetixActiveTab, setAryanetixActiveTab] = useState<'overview' | 'features' | 'architecture' | 'metrics'>('overview');

  const filters: ProjectCategory[] = ['All', 'AI/ML', 'Web', 'Mobile', 'SaaS'];

  const aryanetix = PROJECTS_DATA.find(p => p.id === 'aryanetix')!;
  const otherProjects = PROJECTS_DATA.filter(p => p.id !== 'aryanetix');

  const filteredOtherProjects = otherProjects.filter(p => {
    if (selectedFilter === 'All') return true;
    return p.category.includes(selectedFilter);
  });

  const showAryanetix = selectedFilter === 'All' || aryanetix.category.includes(selectedFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-background">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[450px] bg-cyan-500/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">Projects</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Real software systems, cross-platform mobile apps, biometric pipelines, and full-stack SaaS architectures built from the ground up.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                selectedFilter === filter
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-surface-100 hover:bg-surface-50 text-slate-300 border border-white/5'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* PRIMARY FEATURED PROJECT: ARYANETIX */}
        {showAryanetix && (
          <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 glass-card rounded-3xl p-6 sm:p-10 border border-cyan-500/30 shadow-2xl relative overflow-hidden"
          >
            {/* Top Badge Banner */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold tracking-wider uppercase">
                  PRIMARY FLAGSHIP SHOWCASE
                </span>
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Production Ready Spec
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-slate-400">Institutional SaaS Ecosystem</span>
              </div>
            </div>

            {/* Main Project Details Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Information & Interactive Tabs */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-2">
                    {aryanetix.title} – <span className="text-cyan-400">{aryanetix.subtitle}</span>
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {aryanetix.description}
                  </p>
                </div>

                {/* Sub-tabs for deep inspection */}
                <div className="flex flex-wrap gap-2 border-b border-white/10 pb-2">
                  {[
                    { id: 'overview', label: 'Overview' },
                    { id: 'features', label: 'Ecosystem Features' },
                    { id: 'architecture', label: 'Architecture Specs' },
                    { id: 'metrics', label: 'Technical Vector' },
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setAryanetixActiveTab(tab.id as any)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                        aryanetixActiveTab === tab.id
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab Content Display */}
                <div>
                  {aryanetixActiveTab === 'overview' && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {aryanetix.metrics?.map((m, idx) => (
                          <div key={idx} className="p-3 rounded-xl bg-surface-200/60 border border-white/5 text-center">
                            <div className="text-sm font-bold font-mono text-cyan-300">{m.val}</div>
                            <div className="text-[10px] font-mono text-slate-400 mt-0.5">{m.label}</div>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Aryanetix harmonizes institution hierarchies into a single cohesive SaaS solution. It replaces fragmented attendance systems and outdated paper registers with automated biometrics, voice fallback, LMS course sync, and cloud reporting.
                      </p>
                    </div>
                  )}

                  {aryanetixActiveTab === 'features' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {aryanetix.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-surface-200/40 border border-white/5 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {aryanetixActiveTab === 'architecture' && (
                    <div className="space-y-2.5">
                      {aryanetix.architecture?.map((arch, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-surface-200/70 border border-white/5 text-xs text-slate-200 flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-cyan-400" />
                          <span>{arch}</span>
                        </div>
                      ))}
                      <div className="p-3 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-xs text-cyan-300 font-mono">
                        Direct connection to interactive visualizer available below in Section 06.
                      </div>
                    </div>
                  )}

                  {aryanetixActiveTab === 'metrics' && (
                    <div className="p-4 rounded-xl bg-surface-200/70 border border-white/5 space-y-2 text-xs font-mono text-slate-300">
                      <div className="flex justify-between py-1 border-b border-white/5">
                        <span className="text-slate-400">Embedding Extraction Backbone:</span>
                        <span className="text-cyan-300 font-bold">ArcFace (ResNet/MobileNet)</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-white/5">
                        <span className="text-slate-400">Vector Search Algorithm:</span>
                        <span className="text-cyan-300 font-bold">FAISS IndexFlatIP (Cosine)</span>
                      </div>
                      <div className="flex justify-between py-1 border-b border-white/5">
                        <span className="text-slate-400">Edge Execution Runtime:</span>
                        <span className="text-cyan-300 font-bold">ONNX Runtime Web &amp; Mobile</span>
                      </div>
                      <div className="flex justify-between py-1">
                        <span className="text-slate-400">Cryptographic Cipher:</span>
                        <span className="text-emerald-400 font-bold">AES-256-GCM Authenticated</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {aryanetix.techTags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-lg bg-surface-100 border border-white/5 text-[11px] font-mono text-cyan-300">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Direct Action Buttons for Aryanetix */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <a
                    href={aryanetix.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold font-mono text-xs flex items-center gap-2 transition-all shadow-md shadow-cyan-500/20 hover:scale-[1.02]"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-slate-950" />
                    <span>Launch Live Platform</span>
                  </a>
                  <a
                    href="#aryanetix-engine"
                    className="px-4 py-2.5 rounded-xl bg-surface-100 hover:bg-surface-50 border border-white/10 text-cyan-300 font-mono text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <span>Inspect Engine V2 Pipeline</span>
                  </a>
                </div>
              </div>

              {/* Right Column: 3D-styled Interactive Glass Dashboard Mockup */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl bg-gradient-to-br from-slate-900/90 to-[#0c121e]/90 border border-cyan-500/30 p-5 shadow-2xl overflow-hidden group">
                  {/* Decorative glass glow effect */}
                  <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

                  {/* Mockup Header */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                      <span className="text-xs font-mono font-bold text-white tracking-wide">ARYANETIX CONSOLE</span>
                    </div>
                    <a
                      href={aryanetix.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-mono text-cyan-300 bg-cyan-950/80 hover:bg-cyan-900/80 px-2 py-0.5 rounded border border-cyan-500/30 flex items-center gap-1 transition-colors"
                    >
                      <span>LIVE</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>

                  {/* Mockup Body Content */}
                  <div className="space-y-3 font-mono text-xs">
                    {/* Live Metric Cards in Mockup */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="p-3 rounded-xl bg-surface-200/80 border border-white/5">
                        <div className="text-[10px] text-slate-400">ATTENDANCE RATE</div>
                        <div className="text-base font-bold text-emerald-400 mt-1">98.4%</div>
                        <div className="text-[9px] text-slate-500">Synced across 12 Depts</div>
                      </div>
                      <div className="p-3 rounded-xl bg-surface-200/80 border border-white/5">
                        <div className="text-[10px] text-slate-400">FAISS MATCH LATENCY</div>
                        <div className="text-base font-bold text-cyan-400 mt-1">18.2 ms</div>
                        <div className="text-[9px] text-slate-500">512D Vector Index</div>
                      </div>
                    </div>

                    {/* Mockup Activity Stream */}
                    <div className="p-3 rounded-xl bg-surface-200/60 border border-white/5 space-y-1.5 text-[11px]">
                      <div className="text-[10px] text-slate-400 font-semibold mb-1">RECENT VERIFICATION STREAM</div>
                      <div className="flex items-center justify-between text-slate-300">
                        <span className="flex items-center gap-1.5">
                          <Check className="w-3 h-3 text-emerald-400" /> CS-Hall-A • Camera 01
                        </span>
                        <span className="text-[10px] text-cyan-400 font-semibold">Matched</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-300">
                        <span className="flex items-center gap-1.5">
                          <Check className="w-3 h-3 text-emerald-400" /> Lab-B • Flutter Mobile
                        </span>
                        <span className="text-[10px] text-cyan-400 font-semibold">Matched</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-300">
                        <span className="flex items-center gap-1.5">
                          <Check className="w-3 h-3 text-emerald-400" /> Faculty Block • Gate 02
                        </span>
                        <span className="text-[10px] text-cyan-400 font-semibold">Matched</span>
                      </div>
                    </div>

                    {/* Quick navigation anchor */}
                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <a
                        href={aryanetix.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-center font-mono text-xs hover:bg-cyan-400 transition-colors flex items-center justify-center gap-1.5"
                      >
                        <span>Visit Site</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <a
                        href="#aryanetix-engine"
                        className="py-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-center text-cyan-300 font-mono text-xs transition-colors flex items-center justify-center"
                      >
                        Engine V2 &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* OTHER PROJECTS SHOWCASE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredOtherProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="glass-card rounded-2xl p-6 border border-border-subtle hover:border-cyan-500/40 flex flex-col justify-between transition-all group"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="text-xs font-mono text-cyan-400 font-semibold uppercase">
                      {project.subtitle}
                    </span>
                    <div className="flex gap-1">
                      {project.category.filter(c => c !== 'All').map(cat => (
                        <span key={cat} className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface-100 text-slate-300 border border-white/5">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="space-y-1.5 mb-5">
                    {project.features.slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5 mb-4">
                    {project.techTags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 rounded bg-surface-200 text-[10px] font-mono text-slate-300 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Clean links - only show when URLs are defined */}
                  <div className="flex items-center gap-2">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 rounded-xl bg-surface-100 hover:bg-surface-50 border border-white/10 text-center text-xs font-mono text-slate-200 transition-colors"
                      >
                        GitHub
                      </a>
                    ) : null}
                    {project.liveDemoUrl ? (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-center text-xs font-mono text-cyan-300 font-bold transition-colors"
                      >
                        Live Demo
                      </a>
                    ) : null}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
