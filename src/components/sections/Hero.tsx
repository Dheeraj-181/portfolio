import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Terminal, ChevronDown, Eye } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import Hero3DScene from '../3d/Hero3DScene';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* 3D Scene Layer in Background / Right */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
        <Hero3DScene />
      </div>

      {/* Cyber Grid Texture Overlay */}
      <div className="absolute inset-0 bg-radial-glow pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Core Messaging & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs sm:text-sm font-mono shadow-[0_0_15px_rgba(0,242,254,0.15)] backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>{PERSONAL_INFO.badgeStatus}</span>
            </motion.div>

            {/* Main Heading & Subtitle */}
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1]"
              >
                Hi, I'm <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">
                  {PERSONAL_INFO.displayName}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-sm sm:text-base lg:text-lg font-mono text-cyan-300/90 tracking-wide font-medium"
              >
                {PERSONAL_INFO.subtitle}
              </motion.p>
            </div>

            {/* Hero Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal"
            >
              {PERSONAL_INFO.heroDescription}
            </motion.p>

            {/* Engineering Highlights Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap gap-2 text-xs font-mono text-slate-400"
            >
              {['B.Tech CSE @ SSITS 2028', 'Aryanetix Platform Architect', 'Edge ONNX Biometrics', 'Flutter & React'].map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded-lg bg-surface-100 border border-white/5 text-slate-300">
                  # {tag}
                </span>
              ))}
            </motion.div>

            {/* Call to Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* Primary CTA */}
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold font-mono text-sm tracking-wide flex items-center gap-2.5 transition-all shadow-[0_0_25px_rgba(0,242,254,0.3)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </a>

              {/* Secondary CTA: Download Resume */}
              <a
                href="/resume.pdf"
                download="Kalvapalle_Krishna_Dheeraj_Reddy_Resume.pdf"
                className="px-5 py-3.5 rounded-xl bg-surface-100 hover:bg-surface-50 border border-white/10 hover:border-cyan-500/40 text-slate-200 hover:text-white font-mono text-sm flex items-center gap-2.5 transition-all shadow-sm active:scale-[0.98]"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              {/* View Resume modal CTA */}
              <button
                onClick={onOpenResumeModal}
                className="px-4 py-3.5 rounded-xl bg-transparent hover:bg-white/5 text-slate-400 hover:text-cyan-300 font-mono text-xs flex items-center gap-1.5 transition-colors"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Preview PDF</span>
              </button>
            </motion.div>
          </div>

          {/* Right Column: Interactive Holographic Terminal Card */}
          <div className="lg:col-span-5 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-2xl p-6 border border-white/10 shadow-2xl relative"
            >
              {/* Terminal header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>system_profile.json</span>
                </div>
              </div>

              {/* Terminal content */}
              <div className="font-mono text-xs space-y-2 text-slate-300">
                <div className="text-cyan-400">$ cat developer_spec.manifest</div>
                <div className="p-3 rounded-xl bg-surface-200/80 border border-white/5 space-y-1.5 text-[11px]">
                  <div><span className="text-violet-400">"candidate"</span>: <span className="text-emerald-300">"Kalvapalle Krishna Dheeraj Reddy"</span>,</div>
                  <div><span className="text-violet-400">"alias"</span>: <span className="text-emerald-300">"Dheeraj Reddy"</span>,</div>
                  <div><span className="text-violet-400">"institution"</span>: <span className="text-emerald-300">"SSITS, Rayachoty (2028)"</span>,</div>
                  <div><span className="text-violet-400">"primary_stack"</span>: [<span className="text-cyan-300">"React"</span>, <span className="text-cyan-300">"Firebase"</span>, <span className="text-cyan-300">"Flutter"</span>, <span className="text-cyan-300">"Python"</span>],</div>
                  <div><span className="text-violet-400">"flagship_system"</span>: <span className="text-amber-300">"Aryanetix Institutional SaaS"</span>,</div>
                  <div><span className="text-violet-400">"biometrics"</span>: <span className="text-amber-300">"ArcFace + ONNX Runtime (512-D)"</span>,</div>
                  <div><span className="text-violet-400">"status"</span>: <span className="text-emerald-400">"ACTIVE_BUILDER"</span></div>
                </div>
                <div className="flex items-center gap-2 text-emerald-400 text-[11px] pt-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Interactive 3D Engine: WebGL Ready</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors">
          <span className="text-[10px] font-mono tracking-widest uppercase">SCROLL TO DISCOVER</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
